"use client";

import React, { useState, useRef, useImperativeHandle, forwardRef, useEffect } from "react";
import { track } from "@vercel/analytics";

export interface MusicToggleHandle {
  play: () => void;
}

// No props needed — visibility is controlled internally
const MusicToggle = forwardRef<MusicToggleHandle>(
  function MusicToggle(_props, ref) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [visible, setVisible] = useState(false);   // hidden until music starts
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const startedRef = useRef(false);

    // Lazily create the Audio element (avoids SSR issues)
    const getAudio = (): HTMLAudioElement => {
      if (!audioRef.current) {
        const audio = new Audio("/audio/bgm.mp3");
        audio.loop = true;
        audio.volume = 0.25;
        audio.preload = "auto";
        audioRef.current = audio;
      }
      return audioRef.current;
    };

    // Cleanup on unmount
    useEffect(() => {
      return () => {
        audioRef.current?.pause();
      };
    }, []);

    // Exposed to Envelope — called inside stamp tap gesture
    useImperativeHandle(ref, () => ({
      play() {
        if (startedRef.current) return;
        startedRef.current = true;

        track("Music Started");

        const audio = getAudio();
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            // Fade button in ~400ms after music starts
            setTimeout(() => setVisible(true), 400);
          })
          .catch((err) => {
            console.warn("[BGM] play() failed:", err);
          });
      },
    }));

    const toggle = () => {
      const audio = getAudio();

      if (!startedRef.current) {
        // Button tapped before stamp — treat as first start
        startedRef.current = true;
        track("Music Started");
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            setVisible(true);
          })
          .catch((err) => console.warn("[BGM] toggle-start failed:", err));
        return;
      }

      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        track("Music Muted");
      } else {
        track("Music Unmuted");
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.warn("[BGM] resume failed:", err));
      }
    };

    // Render nothing while not yet visible; animate in when visible
    return (
      <button
        onClick={toggle}
        aria-label={isPlaying ? "Mute music" : "Unmute music"}
        title={isPlaying ? "Mute music" : "Unmute music"}
        className="fixed bottom-5 left-5 flex items-center justify-center focus:outline-none active:scale-90"
        style={{
          zIndex: 9999,
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          background: "rgba(18,1,3,0.82)",
          border: "1.5px solid rgba(197,155,39,0.7)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.6), 0 0 6px rgba(197,155,39,0.2)",
          // Smooth opacity + scale transition
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.8)",
          transition: "opacity 300ms ease, transform 300ms ease",
          pointerEvents: visible ? "auto" : "none",
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
