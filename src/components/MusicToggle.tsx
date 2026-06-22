"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicToggleProps {
  autoPlayTrigger?: boolean;
}

export default function MusicToggle({ autoPlayTrigger = false }: MusicToggleProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // You can replace this URL with a direct link to any traditional Nadaswaram or Veena MP3
  const audioUrl = "https://archive.org/download/veena-instrumental/Veena_Instrumental_Traditional.mp3";

  useEffect(() => {
    // Initialize audio on mount
    audioRef.current = new Audio(audioUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4; // Soft background volume

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay blocked or failed:", err);
        });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Play failed:", err);
        });
    }
  };

  return (
    <div className="fixed top-4 right-4 z-40 pointer-events-auto">
      <button
        onClick={togglePlay}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-lg transition-all duration-300 transform active:scale-95 group ${
          isPlaying
            ? "bg-[#5E0914] border-[#C59B27] text-[#FDF0A6] animate-pulse"
            : "bg-[#FDFBF7]/90 border-[#C59B27]/40 text-[#5E0914] hover:bg-[#F5F0E4]"
        }`}
      >
        <span className="relative flex h-2 w-2 items-center justify-center">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDF0A6] opacity-75"></span>
          )}
          <span
            className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
              isPlaying ? "bg-[#FDF0A6]" : "bg-[#5E0914]"
            }`}
          ></span>
        </span>
        
        <span className="font-cormorant text-[11px] md:text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5">
          <span>🎵 Traditional Wedding Music</span>
        </span>

        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-[#FDF0A6]" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#5E0914]/60" />
        )}
      </button>
    </div>
  );
}
