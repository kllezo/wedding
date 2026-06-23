"use client";

import React, { useRef, useEffect, useState } from "react";
import Envelope from "./Envelope";
import { LotusMedallion } from "./TraditionalOrnaments";
import { MusicToggleHandle } from "./MusicToggle";

interface HeroProps {
  isOpened?: boolean;
  onOpen?: () => void;
  musicRef?: React.RefObject<MusicToggleHandle | null>;
}

export default function Hero({ isOpened = false, onOpen = () => {}, musicRef }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoMounted, setIsVideoMounted] = useState(true);
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.preload = "auto";
      video.play().catch(() => {
        triggerTransition();
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const duration = video.duration;
    if (!duration || isNaN(duration)) return;
    if (video.currentTime >= duration - 0.5) {
      triggerTransition();
    }
  };

  const handleEnded = () => triggerTransition();

  const triggerTransition = () => {
    if (startTransition) return;
    setStartTransition(true);
    setTimeout(() => {
      const video = videoRef.current;
      if (video) { video.pause(); video.src = ""; video.load(); }
      setIsVideoMounted(false);
    }, 1200);
  };

  return (
    <div className="relative w-full h-screen bg-[#170103] overflow-hidden">

      {/* 1. Hands video — fades out when ending */}
      {isVideoMounted && (
        <div
          className={`absolute inset-0 z-20 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
            startTransition ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#170103]/85 via-[#170103]/45 to-[#170103]/85 z-10 pointer-events-none" />
          <video
            ref={videoRef}
            src="/images/hands-video.mp4"
            muted playsInline preload="auto" loop={false} controls={false}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* 2. Closed temple doors — sit behind envelope, fade in with it */}
      <div
        className={`fixed inset-0 z-10 flex overflow-hidden pointer-events-none select-none transition-opacity duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
          startTransition ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left door */}
        <div
          className="w-1/2 h-full border-r border-[#C59B27]/40 relative overflow-hidden"
          style={{ background: "radial-gradient(circle at 100% 50%, #4A050B 40%, #1A0103 100%)" }}
        >
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#C59B27]/40 rounded-tl" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#C59B27]/40 rounded-bl" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
            <LotusMedallion size={110} />
          </div>
        </div>
        {/* Right door */}
        <div
          className="w-1/2 h-full border-l border-[#C59B27]/40 relative overflow-hidden"
          style={{ background: "radial-gradient(circle at 0% 50%, #4A050B 40%, #1A0103 100%)" }}
        >
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#C59B27]/40 rounded-tr" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#C59B27]/40 rounded-br" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <LotusMedallion size={110} />
          </div>
        </div>
      </div>

      {/* 3. Envelope — fullscreen, fades in with doors, passes musicRef for audio unlock */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
          startTransition ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Envelope onOpen={onOpen} musicRef={musicRef} />
      </div>
    </div>
  );
}
