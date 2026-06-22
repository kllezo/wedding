import React from "react";

interface DiyaProps {
  className?: string;
  size?: number;
}

export default function Diya({ className = "", size = 60 }: DiyaProps) {
  return (
    <div className={`inline-block relative select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* Metallic Gold Gradient */}
          <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A5A00" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F3E5AB" />
            <stop offset="70%" stopColor="#AA771C" />
            <stop offset="100%" stopColor="#5B3900" />
          </linearGradient>
          {/* Flame Inner Glow */}
          <radialGradient id="flameInner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF" />
            <stop offset="30%" stopColor="#FFF2A3" />
            <stop offset="70%" stopColor="#FF8C00" />
            <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
          </radialGradient>
          {/* Flame Outer Glow */}
          <radialGradient id="flameOuter" cx="50%" cy="60%" r="40%">
            <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#D35400" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C0392B" stopOpacity="0" />
          </radialGradient>
          {/* Flame Filter for Glow */}
          <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Shadow of Lamp */}
        <ellipse cx="50" cy="85" rx="25" ry="5" fill="#42040B" opacity="0.2" />

        {/* Diya Brass Base/Bowl */}
        {/* Pedestal */}
        <path
          d="M42 85 C42 80, 45 78, 50 78 C55 78, 58 80, 58 85 H42 Z"
          fill="url(#brassGrad)"
          stroke="#5B3900"
          strokeWidth="0.5"
        />
        <rect x="44" y="84" width="12" height="2" fill="url(#brassGrad)" rx="0.5" />
        
        {/* Bowl */}
        <path
          d="M20 58 C20 74, 80 74, 80 58 C80 54, 74 53, 50 56 C26 53, 20 54, 20 58 Z"
          fill="url(#brassGrad)"
          stroke="#5B3900"
          strokeWidth="0.8"
        />
        {/* Inner shadow/hollow of the bowl */}
        <path
          d="M23 58 C23 70, 77 70, 77 58 C68 56.5, 32 56.5, 23 58 Z"
          fill="#4A0000"
          opacity="0.6"
        />
        {/* Oil Pool */}
        <path
          d="M30 60 C30 67, 70 67, 70 60 C63 59.5, 37 59.5, 30 60 Z"
          fill="#D35400"
          opacity="0.8"
        />

        {/* Wick holder in center */}
        <path
          d="M48 57 L50 52 L52 57 Z"
          fill="#111"
        />

        {/* Flickering Flame Layer 1 (Outer Glow) */}
        <g className="animate-flicker origin-[50px_48px]">
          <circle
            cx="50"
            cy="36"
            r="16"
            fill="url(#flameOuter)"
            filter="url(#glowFilter)"
            opacity="0.6"
          />
          {/* Flame Layer 2 (Inner Hot Core) */}
          <path
            d="M50 18 C50 18 56 34 56 42 C56 48 44 48 44 42 C44 34 50 18 50 18 Z"
            fill="url(#flameInner)"
            filter="url(#glowFilter)"
          />
          {/* Hottest Point */}
          <path
            d="M50 26 C50 26 53 36 53 41 C53 44 47 44 47 41 C47 36 50 26 50 26 Z"
            fill="#FFF"
            opacity="0.9"
          />
        </g>
      </svg>
    </div>
  );
}
