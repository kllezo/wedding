import React from "react";

interface ToranProps {
  className?: string;
  count?: number; // Number of repetitions, if blank will auto-fill screen width
}

export default function Toran({ className = "", count = 16 }: ToranProps) {
  // Array of items to map
  const items = Array.from({ length: count });

  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none flex flex-col items-center ${className}`}>
      {/* Golden Thread */}
      <div className="w-full h-0.5 border-t border-dashed border-[#C59B27]/60 relative" />

      {/* Repeating Garland Elements */}
      <div className="w-full flex justify-around items-start -mt-0.5 px-2">
        {items.map((_, index) => (
          <div key={index} className="flex flex-col items-center relative" style={{ minWidth: "24px" }}>
            {/* Thread holding flower */}
            <div className="w-0.5 h-2 bg-[#C59B27]/40" />

            {/* Marigold Flower */}
            <svg width="22" height="22" viewBox="0 0 20 20" className="drop-shadow-sm z-10">
              <defs>
                <radialGradient id="marigoldGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F39C12" />
                  <stop offset="70%" stopColor="#E67E22" />
                  <stop offset="100%" stopColor="#D35400" />
                </radialGradient>
              </defs>
              {/* Petals */}
              <circle cx="10" cy="10" r="8" fill="url(#marigoldGrad)" />
              {/* Inner Petal Layers */}
              <path
                d="M10 3 C8 5 5 8 10 17 C15 8 12 5 10 3 Z"
                fill="#F1C40F"
                opacity="0.8"
              />
              <path
                d="M3 10 C5 8 8 5 17 10 C8 15 5 12 3 10 Z"
                fill="#F39C12"
                opacity="0.8"
              />
              <circle cx="10" cy="10" r="4" fill="#E67E22" />
              <circle cx="10" cy="10" r="2" fill="#C0392B" />
            </svg>

            {/* Mango Leaf */}
            <svg
              width="24"
              height="55"
              viewBox="0 0 30 70"
              className="drop-shadow-[0_2px_3px_rgba(27,77,34,0.35)] -mt-1 transform origin-top hover:rotate-6 transition-transform duration-500"
            >
              <defs>
                <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2E7D32" />
                  <stop offset="60%" stopColor="#1B5E20" />
                  <stop offset="100%" stopColor="#0D2C10" />
                </linearGradient>
              </defs>
              {/* Stem */}
              <rect x="14" y="0" width="2" height="8" fill="#5D4037" />
              {/* Leaf Blade */}
              <path
                d="M15 8 C5 16 2 34 8 54 C11 62 14 68 15 70 C16 68 19 62 22 54 C28 34 25 16 15 8 Z"
                fill="url(#leafGrad)"
              />
              {/* Leaf Veins */}
              <path
                d="M15 8 V70 M15 18 L7 22 M15 24 L23 20 M15 30 L8 34 M15 36 L22 32 M15 42 L8 46 M15 48 L22 44 M15 54 L9 58 M15 60 L21 57"
                stroke="#4CAF50"
                strokeWidth="0.8"
                opacity="0.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Dotted Golden Garland String Hanging Between Leaves */}
            {index < count - 1 && (
              <svg
                width="100"
                height="20"
                viewBox="0 0 100 20"
                className="absolute top-2 left-1/2 w-[calc(100vw/16)] max-w-[80px] pointer-events-none opacity-60 overflow-visible"
              >
                {/* Jasmine flowers on string */}
                <path
                  d="M 0 0 Q 50 16 100 0"
                  fill="none"
                  stroke="#FDFBF7"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  strokeLinecap="round"
                  className="filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
                />
                {/* Tiny orange marigold dots */}
                <path
                  d="M 0 0 Q 50 16 100 0"
                  fill="none"
                  stroke="#E67E22"
                  strokeWidth="1.5"
                  strokeDasharray="1 10"
                  strokeDashoffset="5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
