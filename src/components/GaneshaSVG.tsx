import React from "react";

interface GaneshaSVGProps {
  className?: string;
  size?: number;
}

export default function GaneshaSVG({ className = "", size = 120 }: GaneshaSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter drop-shadow-[0_2px_4px_rgba(154,114,24,0.4)]`}
      aria-label="Lord Ganesha"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BF953F" />
          <stop offset="25%" stopColor="#FCF6BA" />
          <stop offset="50%" stopColor="#B38728" />
          <stop offset="75%" stopColor="#FBF5B7" />
          <stop offset="100%" stopColor="#AA771C" />
        </linearGradient>
      </defs>

      {/* Main Outer Decorative Circle */}
      <circle cx="50" cy="50" r="46" stroke="url(#goldGradient)" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
      <circle cx="50" cy="50" r="44" stroke="url(#goldGradient)" strokeWidth="0.75" />

      {/* Ganesha Intricate Details */}
      {/* Crown (Kireetam) */}
      <path
        d="M44 22 L50 10 L56 22 L50 25 Z"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 22 H54 M48 18 H52 M49 14 H51"
        stroke="url(#goldGradient)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Head & Ears */}
      {/* Left Ear */}
      <path
        d="M42 26 C36 26 31 30 33 37 C34.5 42 41 40 42 34"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right Ear */}
      <path
        d="M58 26 C64 26 69 30 67 37 C65.5 42 59 40 58 34"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Face Outline */}
      <path
        d="M42 26 C42 22 58 22 58 26 C58 32 42 32 42 26 Z"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Forehead Tilak */}
      <path
        d="M48 24 C48 24 50 21 50 21 C50 21 52 24 52 24 C52 24 50 26 50 26 C50 26 48 24 48 24 Z"
        fill="url(#goldGradient)"
      />
      <path
        d="M47 25 H53"
        stroke="url(#goldGradient)"
        strokeWidth="1"
      />

      {/* Trunk (Vakratunda) */}
      <path
        d="M50 28 C47 34 45 42 45 48 C45 56 52 57 54 53 C55.5 49 53 47 50 47 C48 47 47 49 48 51 C48.5 52.5 50.5 52.5 51 51"
        stroke="url(#goldGradient)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tusks */}
      {/* Left Tusk (Broken) */}
      <path d="M44 32 H41" stroke="url(#goldGradient)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Right Tusk (Full) */}
      <path d="M56 32 H60 L62 31" stroke="url(#goldGradient)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Body & Modak Hand */}
      {/* Stomach (Lambodara) */}
      <path
        d="M38 45 C32 50 32 65 42 70 C50 74 60 74 65 67 C70 60 67 48 58 45"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left Hand (Holding Modak) */}
      <path
        d="M35 50 C31 52 30 58 35 62 C37 63 39 62 41 58"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Modak */}
      <path
        d="M39 53 C38 52 39 50 40 50 C41 50 42 52 41 53 Z"
        fill="url(#goldGradient)"
      />

      {/* Right Hand (Abhaya Mudra - Blessing) */}
      <path
        d="M63 46 C68 47 71 52 68 58 C66 62 62 60 60 55"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Blessing Rays or Lotus in Hand */}
      <circle cx="64" cy="53" r="1.5" fill="url(#goldGradient)" />

      {/* Decorative Lotus Base */}
      <path
        d="M28 72 C35 68 45 76 50 76 C55 76 65 68 72 72 C75 75 70 82 50 82 C30 82 25 75 28 72 Z"
        stroke="url(#goldGradient)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 72 C43 76 47 78 50 78 C53 78 57 76 62 72"
        stroke="url(#goldGradient)"
        strokeWidth="1"
      />
      
      {/* Mushika (The Mouse helper) */}
      <path
        d="M62 78 C65 78 68 76 69 77 C70 78 69 80 67 80 H63 C61 80 61 78 62 78 Z"
        fill="url(#goldGradient)"
        opacity="0.8"
      />
      {/* Tail */}
      <path
        d="M69 77 C72 76 74 78 75 77"
        stroke="url(#goldGradient)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
