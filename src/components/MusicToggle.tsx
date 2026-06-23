"use client";

import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";

export interface MusicToggleHandle {
  play: () => void;
}

interface MusicToggleProps {
  visible?: boolean;
}

const MusicToggle = forwardRef<MusicToggleHandle, MusicToggleProps>(
  function MusicToggle({ visible = true }, ref) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const ctxRef = useRef<AudioContext | null>(null);
    const unlockedRef = useRef(false);

    // Candidate audio URLs (tried in order; first to load wins)
    const AUDIO_URLS = [
      // Free-to-use veena / nadaswaram from Internet Archive
      "https://ia801908.us.archive.org/15/items/veena-instrumental/Veena_Instrumental_Traditional.mp3",
      // Fallback — short pleasant harp loop
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    ];

    useEffect(() => {
      const audio = new Audio();
      audio.loop = true;
      audio.volume = 0.35;
      audio.preload = "auto";
      audio.crossOrigin = "anonymous";

      // Try URLs sequentially until one loads
      let urlIndex = 0;
      const tryNext = () => {
        if (urlIndex >= AUDIO_URLS.length) return;
        audio.src = AUDIO_URLS[urlIndex++];
        audio.load();
      };
      audio.addEventListener("error", tryNext);
      tryNext();

      audioRef.current = audio;

      return () => {
        audio.pause();
        audio.src = "";
        audioRef.current = null;
        ctxRef.current?.close();
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Called from stamp tap — runs inside user gesture so AudioContext unlocks
    useImperativeHandle(ref, () => ({
      play() {
        if (unlockedRef.current) return;
        unlockedRef.current = true;

        const audio = audioRef.current;
        if (!audio) return;

        // Create AudioContext inside gesture to bypass autoplay policy
        try {
          const AudioContextClass =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          const ctx = new AudioContextClass();
          ctxRef.current = ctx;
          // Connect audio element to this context so it's "unlocked"
          const src = ctx.createMediaElementSource(audio);
          src.connect(ctx.destination);
          ctx.resume().then(() => {
            audio.play()
              .then(() => setIsPlaying(true))
              .catch((e) => console.warn("Audio play failed:", e));
          });
        } catch {
          // Fallback: plain play() inside gesture
          audio.play()
            .then(() => setIsPlaying(true))
            .catch((e) => console.warn("Audio play fallback failed:", e));
        }
      },
    }));

    const toggle = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        // If not yet unlocked, unlock now (toggle is also a user gesture)
        if (!unlockedRef.current) {
          unlockedRef.current = true;
          try {
            const AudioContextClass =
              window.AudioContext ||
              (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            const ctx = ctxRef.current ?? new AudioContextClass();
            ctxRef.current = ctx;
            if (!ctxRef.current) {
              const src = ctx.createMediaElementSource(audio);
              src.connect(ctx.destination);
            }
            ctx.resume();
          } catch { /* noop */ }
        }
        audio.play()
          .then(() => setIsPlaying(true))
          .catch((e) => console.warn("Toggle play failed:", e));
      }
    };

    if (!visible) return null;

    return (
      <button
        onClick={toggle}
        aria-label={isPlaying ? "Mute music" : "Play music"}
        title={isPlaying ? "Mute music" : "Play music"}
        className="fixed bottom-5 left-5 z-[999] flex items-center justify-center transition-all duration-200 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27]"
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          background: "rgba(20,1,4,0.80)",
          border: "1.5px solid rgba(197,155,39,0.65)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 3px 14px rgba(0,0,0,0.55), 0 0 8px rgba(197,155,39,0.18)",
        }}
      >
        <span className="text-[17px] leading-none select-none" aria-hidden="true">
          {isPlaying ? "🔊" : "🔇"}
        </span>
      </button>
    );
  }
);

export default MusicToggle;
