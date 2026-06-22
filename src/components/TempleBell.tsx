import React from "react";

interface TempleBellProps {
  className?: string;
  size?: number;
  chainLength?: number;
}

export default function TempleBell({ className = "", size = 70, chainLength = 60 }: TempleBellProps) {
  return (
    <div
      className={`relative inline-flex flex-col items-center select-none origin-top animate-sway-slow ${className}`}
      style={{ width: size }}
    >
      {/* Chain link hanging down */}
      <svg
        width="8"
        height={chainLength}
        viewBox={`0 0 8 ${chainLength}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-70 overflow-visible"
      >
        <defs>
          <linearGradient id="chainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AA771C" />
            <stop offset="50%" stopColor="#FCF6BA" />
            <stop offset="100%" stopColor="#9A7218" />
          </linearGradient>
        </defs>
        {/* Draw repeating chain links */}
        <line
          x1="4"
          y1="0"
          x2="4"
          y2={chainLength}
          stroke="url(#chainGrad)"
          strokeWidth="2.5"
          strokeDasharray="1 5"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="0"
          x2="4"
          y2={chainLength}
          stroke="url(#chainGrad)"
          strokeWidth="1.2"
          opacity="0.8"
        />
      </svg>

      {/* Bell Body */}
      <svg
        width="100%"
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-1 drop-shadow-[0_4px_6px_rgba(154,114,24,0.3)] hover:scale-105 transition-transform duration-300 cursor-pointer"
      >
        <defs>
          <linearGradient id="bellGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A5A00" />
            <stop offset="20%" stopColor="#C59B27" />
            <stop offset="45%" stopColor="#FDF0A6" />
            <stop offset="65%" stopColor="#C59B27" />
            <stop offset="90%" stopColor="#AA771C" />
            <stop offset="100%" stopColor="#5B3900" />
          </linearGradient>
        </defs>

        {/* Top Ring */}
        <circle cx="50" cy="15" r="10" stroke="url(#bellGoldGrad)" strokeWidth="4" />
        <rect x="46" y="21" width="8" height="6" fill="url(#bellGoldGrad)" rx="1" />

        {/* Bell Cap */}
        <path
          d="M32 40 C32 24, 68 24, 68 40 H32 Z"
          fill="url(#bellGoldGrad)"
          stroke="#5B3900"
          strokeWidth="0.8"
        />

        {/* Bell Body Flaring Out */}
        <path
          d="M32 40 C32 50, 25 75, 18 85 C16 88, 18 92, 22 92 H78 C82 92, 84 88, 82 85 C75 75, 68 50, 68 40 H32 Z"
          fill="url(#bellGoldGrad)"
          stroke="#5B3900"
          strokeWidth="1"
        />

        {/* Decorative Bands on Bell */}
        <path
          d="M27 52 C27 52, 50 56, 73 52"
          stroke="#5B3900"
          strokeWidth="1.2"
          opacity="0.6"
        />
        <path
          d="M23 68 C23 68, 50 72, 77 68"
          stroke="#5B3900"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <path
          d="M21 78 C21 78, 50 82, 79 78"
          stroke="#FFF2A3"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Bottom Rim (Thick lip) */}
        <path
          d="M16 92 C16 89, 20 88, 50 88 C80 88, 84 89, 84 92 C84 95, 80 96, 50 96 C20 96, 16 95, 16 92 Z"
          fill="url(#bellGoldGrad)"
          stroke="#5B3900"
          strokeWidth="1"
        />

        {/* Bell Clapper (Utsavam) hanging out */}
        <g className="animate-sway-slow origin-[50px_90px]">
          {/* Rod */}
          <rect x="48" y="93" width="4" height="15" fill="url(#bellGoldGrad)" />
          {/* Clapper ball */}
          <circle cx="50" cy="110" r="7" fill="url(#bellGoldGrad)" stroke="#5B3900" strokeWidth="0.5" />
          {/* Clapper glint */}
          <circle cx="48" cy="108" r="1.5" fill="#FFF2A3" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
