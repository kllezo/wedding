"use client";

/**
 * MusicToggle — Bulletproof audio system for wedding invitation
 *
 * Strategy (in order of preference):
 *  1. Remote Telugu/carnatic nadaswaram URLs (tried sequentially)
 *  2. Web Audio API synthetic drone (guaranteed to work offline)
 *
 * Audio unlock:
 *  - play() is called directly inside a user-gesture handler (stamp tap)
 *  - AudioContext is created AND resumed inside that same gesture
 *  - This satisfies both Chrome/Safari autoplay policies
 */

import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from "react";

export interface MusicToggleHandle {
  play: () => void;
}

interface MusicToggleProps {
  visible?: boolean;
}

// ─── Candidate audio URLs (public domain / CC licensed) ────────────────────
// Tried in order; first successful load wins.
const AUDIO_CANDIDATES = [
  // Nadaswaram / carnatic wedding music from Wikimedia Commons (CC BY-SA)
  "https://upload.wikimedia.org/wikipedia/commons/3/3b/Carnatic_instrumental.ogg",
  // Veena classical from Wikimedia Commons
  "https://upload.wikimedia.org/wikipedia/commons/1/11/Veena.ogg",
  // Internet Archive carnatic sample
  "https://ia600105.us.archive.org/12/items/ClassicalMusicOfSouthIndia/01_Alapana.mp3",
];

// ─── Synthetic nadaswaram drone via Web Audio API ──────────────────────────
// Plays a warm, temple-like chord using sawtooth oscillators + reverb.
// This is the guaranteed fallback — works 100% offline, zero network.
function createSyntheticDrone(ctx: AudioContext): AudioNode {
  const masterGain = ctx.createGain();
  masterGain.gain.value = 0.18;

  // Convolver reverb (simulate temple acoustics)
  const convolver = ctx.createConvolver();
  const bufferSize = ctx.sampleRate * 2;
  const reverbBuffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const data = reverbBuffer.getChannelData(ch);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2.5);
    }
  }
  convolver.buffer = reverbBuffer;

  const reverbGain = ctx.createGain();
  reverbGain.gain.value = 0.35;

  // Nadaswaram-like tones: Sa Pa Sa' (tonic, fifth, upper tonic)
  const notes = [
    { freq: 261.63, type: "sawtooth" as OscillatorType, gain: 0.6 },  // Sa (C4)
    { freq: 392.00, type: "sawtooth" as OscillatorType, gain: 0.4 },  // Pa (G4)
    { freq: 523.25, type: "sawtooth" as OscillatorType, gain: 0.25 }, // Sa' (C5)
    { freq: 130.81, type: "triangle" as OscillatorType, gain: 0.5 },  // Low Sa (C3, tanpura)
  ];

  notes.forEach(({ freq, type, gain: gainVal }) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    // Slight detune for warmth
    osc.detune.value = (Math.random() - 0.5) * 8;
    g.gain.value = gainVal;

    osc.connect(g);
    g.connect(masterGain);
    g.connect(convolver);
    osc.start();
  });

  convolver.connect(reverbGain);
  reverbGain.connect(masterGain);

  return masterGain;
}

// ─── Component ─────────────────────────────────────────────────────────────
const MusicToggle = forwardRef<MusicToggleHandle, MusicToggleProps>(
  function MusicToggle({ visible = true }, ref) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Audio element path (remote URLs)
    const audioRef = useRef<HTMLAudioElement | null>(null);
    // AudioContext (used for both element unlock + synthetic fallback)
    const ctxRef = useRef<AudioContext | null>(null);
    // Synthetic drone output node
    const droneRef = useRef<AudioNode | null>(null);
    const droneMasterRef = useRef<GainNode | null>(null);
    // Which mode is active: "element" | "synthetic"
    const modeRef = useRef<"element" | "synthetic" | null>(null);
    // Prevent double-init
    const startedRef = useRef(false);

    // ── Initialise AudioContext (must be inside gesture) ─────────────────
    const getOrCreateCtx = useCallback((): AudioContext => {
      if (!ctxRef.current) {
        const Ctor =
          window.AudioContext ||
          (
            window as unknown as {
              webkitAudioContext: typeof AudioContext;
            }
          ).webkitAudioContext;
        ctxRef.current = new Ctor();
      }
      return ctxRef.current;
    }, []);

    // ── Try loading remote audio element ─────────────────────────────────
    const tryRemoteAudio = useCallback(
      (ctx: AudioContext, urlIndex = 0): Promise<void> => {
        return new Promise((resolve, reject) => {
          if (urlIndex >= AUDIO_CANDIDATES.length) {
            reject(new Error("All URLs failed"));
            return;
          }

          const audio = new Audio();
          audio.crossOrigin = "anonymous";
          audio.loop = true;
          audio.volume = 1;
          audio.preload = "auto";
          audio.src = AUDIO_CANDIDATES[urlIndex];

          const onCanPlay = () => {
            cleanup();
            // Connect to AudioContext
            try {
              const src = ctx.createMediaElementSource(audio);
              const gain = ctx.createGain();
              gain.gain.value = 0.28;
              src.connect(gain);
              gain.connect(ctx.destination);
            } catch {
              // If already connected, just connect audio directly
              audio.volume = 0.28;
            }
            audioRef.current = audio;
            modeRef.current = "element";
            audio.play().then(resolve).catch(() => reject(new Error("play() blocked")));
          };

          const onError = () => {
            cleanup();
            // Try next URL
            tryRemoteAudio(ctx, urlIndex + 1).then(resolve).catch(reject);
          };

          const cleanup = () => {
            audio.removeEventListener("canplaythrough", onCanPlay);
            audio.removeEventListener("error", onError);
          };

          audio.addEventListener("canplaythrough", onCanPlay, { once: true });
          audio.addEventListener("error", onError, { once: true });

          // Timeout after 5s — move to next URL
          setTimeout(() => {
            cleanup();
            tryRemoteAudio(ctx, urlIndex + 1).then(resolve).catch(reject);
          }, 5000);
        });
      },
      []
    );

    // ── Start synthetic drone fallback ───────────────────────────────────
    const startSynthetic = useCallback((ctx: AudioContext) => {
      const drone = createSyntheticDrone(ctx) as GainNode;
      drone.connect(ctx.destination);
      droneRef.current = drone;
      droneMasterRef.current = drone;
      modeRef.current = "synthetic";
    }, []);

    // ── Master start (called from stamp tap) ─────────────────────────────
    const startMusic = useCallback(async () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const ctx = getOrCreateCtx();
      await ctx.resume();

      try {
        await tryRemoteAudio(ctx, 0);
        setIsPlaying(true);
      } catch {
        // Remote failed → synthetic drone
        startSynthetic(ctx);
        setIsPlaying(true);
      }
    }, [getOrCreateCtx, tryRemoteAudio, startSynthetic]);

    // ── Expose play() for stamp tap ──────────────────────────────────────
    useImperativeHandle(ref, () => ({
      play: () => {
        startMusic();
      },
    }));

    // ── Toggle mute / unmute ──────────────────────────────────────────────
    const toggle = useCallback(() => {
      const ctx = ctxRef.current;

      if (!startedRef.current) {
        // First interaction via button — start music
        startMusic();
        return;
      }

      if (modeRef.current === "element" && audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          ctx?.resume();
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      } else if (modeRef.current === "synthetic" && droneMasterRef.current && ctx) {
        // Mute/unmute synthetic by suspending/resuming context
        if (isPlaying) {
          ctx.suspend().then(() => setIsPlaying(false));
        } else {
          ctx.resume().then(() => setIsPlaying(true));
        }
      }
    }, [isPlaying, startMusic]);

    if (!visible) return null;

    return (
      <button
        onClick={toggle}
        aria-label={isPlaying ? "Mute music" : "Play music"}
        title={isPlaying ? "Mute music" : "Play music"}
        className="fixed bottom-5 left-5 flex items-center justify-center transition-transform duration-150 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27]"
        style={{
          zIndex: 9999,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: "rgba(18,1,3,0.82)",
          border: "1.5px solid rgba(197,155,39,0.7)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.6), 0 0 6px rgba(197,155,39,0.2)",
        }}
      >
        <span className="text-[16px] leading-none select-none" aria-hidden="true">
          {isPlaying ? "🔊" : "🔇"}
        </span>
      </button>
    );
  }
);

export default MusicToggle;
