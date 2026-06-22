import React from "react";

interface BananaLeavesProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
}

export default function BananaLeaves({ className = "", position = "top-left", size = 150 }: BananaLeavesProps) {
  // Rotate and scale based on position
  let transformClass = "";
  switch (position) {
    case "top-left":
      transformClass = "rotate-0";
      break;
    case "top-right":
      transformClass = "scale-x-[-1]";
      break;
    case "bottom-left":
      transformClass = "scale-y-[-1]";
      break;
    case "bottom-right":
      transformClass = "scale-[-1]";
      break;
  }

  return (
    <div
      className={`absolute pointer-events-none select-none z-0 ${transformClass} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-25 md:opacity-40"
      >
        <defs>
          <linearGradient id="bananaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E7D32" />
            <stop offset="50%" stopColor="#1B5E20" />
            <stop offset="100%" stopColor="#0D2C10" />
          </linearGradient>
          <linearGradient id="bananaGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4CAF50" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>
        </defs>

        {/* Primary Leaf 1 */}
        <path
          d="M0 -10 C20 10, 80 20, 110 5 C115 12, 100 35, 60 50 C30 60, 5 45, 0 35 Z"
          fill="url(#bananaGrad)"
          transform="rotate(15 50 30)"
        />
        {/* Veins for Leaf 1 */}
        <path
          d="M0 0 Q 60 30 115 15 M15 10 L8 15 M25 14 L18 21 M35 18 L28 27 M45 22 L37 32 M55 25 L47 36 M65 27 L57 39 M75 28 L67 41 M85 28 L78 41 M95 26 L89 39"
          stroke="#4CAF50"
          strokeWidth="0.8"
          opacity="0.4"
          strokeLinecap="round"
          transform="rotate(15 50 30)"
        />

        {/* Primary Leaf 2 (Overlapping, slightly rotated and smaller) */}
        <path
          d="M0 10 C30 30, 95 35, 105 10 C108 18, 90 40, 55 52 C25 60, 5 40, 0 25 Z"
          fill="url(#bananaGradLight)"
          transform="rotate(38 45 40)"
          opacity="0.95"
        />
        {/* Veins for Leaf 2 */}
        <path
          d="M0 20 Q 60 40 110 20 M15 22 L8 28 M25 25 L18 33 M35 28 L28 38 M45 30 L38 42 M55 32 L48 45 M65 33 L58 47 M75 33 L68 47 M85 32 L78 46"
          stroke="#81C784"
          strokeWidth="0.8"
          opacity="0.4"
          strokeLinecap="round"
          transform="rotate(38 45 40)"
        />

        {/* Stem of the leaves bundled in the corner */}
        <path
          d="M0 0 Q 15 15 5 40"
          stroke="#5D4037"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M0 0 Q 15 15 5 40"
          stroke="#8D6E63"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
