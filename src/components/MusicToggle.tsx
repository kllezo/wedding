"use client";

import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";

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
    const startedRef = useRef(false);

    // Lazily create the Audio element — avoids SSR issues
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

    // Called directly from stamp tap — inside user gesture → unlocks autoplay
    useImperativeHandle(ref, () => ({
      play() {
        if (startedRef.current) return;
        startedRef.current = true;

        const audio = getAudio();
        audio.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.warn("[BGM] play() failed:", err));
      },
    }));

    const toggle = () => {
      const audio = getAudio();

      if (!startedRef.current) {
        // First interaction via the button itself — also a valid user gesture
        startedRef.current = true;
        audio.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.warn("[BGM] toggle play() failed:", err));
        return;
      }

      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.warn("[BGM] resume play() failed:", err));
      }
    };

    if (!visible) return null;

    return (
      <button
        onClick={toggle}
        aria-label={isPlaying ? "Mute music" : "Unmute music"}
        title={isPlaying ? "Mute music" : "Unmute music"}
        className="fixed bottom-5 left-5 flex items-center justify-center transition-transform duration-150 active:scale-90 focus:outline-none"
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
