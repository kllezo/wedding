import React from "react";

export default function GlobalBorder() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-30 select-none">
      {/* Defined gold gradient */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="borderGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A67C1E" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFF2A3" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#A67C1E" />
          </linearGradient>
          <pattern id="jasminePattern" width="10" height="30" patternUnits="userSpaceOnUse">
            {/* Jasmine flower bud */}
            <ellipse cx="5" cy="12" rx="2.5" ry="4" fill="#FFFFFF" />
            <ellipse cx="5" cy="12" rx="1.2" ry="2.5" fill="#FFFDE7" />
            {/* Stem */}
            <path d="M5 16 L5 24" stroke="#E67E22" strokeWidth="1.2" />
            {/* Dotted thread */}
            <line x1="5" y1="0" x2="5" y2="30" stroke="#C59B27" strokeWidth="0.5" strokeDasharray="1 3" />
          </pattern>
        </defs>
      </svg>

      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#A67C1E] via-[#FFF2A3] to-[#A67C1E] shadow-sm z-40" />
      {/* Repeating hanging flower border just below the top line */}
      <div className="absolute top-2 left-2 right-2 h-3 temple-border-top opacity-85 z-40" />

      {/* Bottom Border Line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#A67C1E] via-[#FFF2A3] to-[#A67C1E] shadow-sm z-40" />
      <div className="absolute bottom-2 left-2 right-2 h-3 temple-border-bottom opacity-85 z-40" />

      {/* Left Border Line */}
      <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-b from-[#A67C1E] via-[#FFF2A3] to-[#A67C1E] shadow-sm z-40" />
      {/* Jasmine string running vertically on the left */}
      <div 
        className="absolute top-4 bottom-4 left-2 w-2 opacity-65 z-40" 
        style={{ backgroundImage: "url(#jasminePattern)", backgroundRepeat: "repeat-y", backgroundSize: "10px 30px" }} 
      />

      {/* Right Border Line */}
      <div className="absolute top-0 bottom-0 right-0 w-2 bg-gradient-to-b from-[#A67C1E] via-[#FFF2A3] to-[#A67C1E] shadow-sm z-40" />
      {/* Jasmine string running vertically on the right */}
      <div 
        className="absolute top-4 bottom-4 right-2 w-2 opacity-65 z-40" 
        style={{ backgroundImage: "url(#jasminePattern)", backgroundRepeat: "repeat-y", backgroundSize: "10px 30px" }} 
      />

      {/* Ornate Corner Medallions */}
      {/* Top Left Corner */}
      <svg className="absolute top-2 left-2 w-14 h-14 z-50 overflow-visible gold-glow" viewBox="0 0 50 50">
        <path d="M0 0 H50 L40 10 H10 V40 L0 50 Z" fill="url(#borderGold)" opacity="0.15" />
        <path d="M2 2 H35 C35 2, 20 20, 2 35 Z" fill="url(#borderGold)" />
        {/* Intricate lotus detail */}
        <path d="M12 12 C14 8, 8 14, 12 12 Z" fill="#5E0914" />
        <circle cx="8" cy="8" r="2.5" fill="#FFF2A3" />
        <line x1="2" y1="2" x2="25" y2="25" stroke="#5E0914" strokeWidth="0.8" />
        <path d="M2 38 L38 2" stroke="url(#borderGold)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Top Right Corner */}
      <svg className="absolute top-2 right-2 w-14 h-14 z-50 overflow-visible gold-glow scale-x-[-1]" viewBox="0 0 50 50">
        <path d="M0 0 H50 L40 10 H10 V40 L0 50 Z" fill="url(#borderGold)" opacity="0.15" />
        <path d="M2 2 H35 C35 2, 20 20, 2 35 Z" fill="url(#borderGold)" />
        <path d="M12 12 C14 8, 8 14, 12 12 Z" fill="#5E0914" />
        <circle cx="8" cy="8" r="2.5" fill="#FFF2A3" />
        <line x1="2" y1="2" x2="25" y2="25" stroke="#5E0914" strokeWidth="0.8" />
        <path d="M2 38 L38 2" stroke="url(#borderGold)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Bottom Left Corner */}
      <svg className="absolute bottom-2 left-2 w-14 h-14 z-50 overflow-visible gold-glow scale-y-[-1]" viewBox="0 0 50 50">
        <path d="M0 0 H50 L40 10 H10 V40 L0 50 Z" fill="url(#borderGold)" opacity="0.15" />
        <path d="M2 2 H35 C35 2, 20 20, 2 35 Z" fill="url(#borderGold)" />
        <path d="M12 12 C14 8, 8 14, 12 12 Z" fill="#5E0914" />
        <circle cx="8" cy="8" r="2.5" fill="#FFF2A3" />
        <line x1="2" y1="2" x2="25" y2="25" stroke="#5E0914" strokeWidth="0.8" />
        <path d="M2 38 L38 2" stroke="url(#borderGold)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Bottom Right Corner */}
      <svg className="absolute bottom-2 right-2 w-14 h-14 z-50 overflow-visible gold-glow scale-[-1]" viewBox="0 0 50 50">
        <path d="M0 0 H50 L40 10 H10 V40 L0 50 Z" fill="url(#borderGold)" opacity="0.15" />
        <path d="M2 2 H35 C35 2, 20 20, 2 35 Z" fill="url(#borderGold)" />
        <path d="M12 12 C14 8, 8 14, 12 12 Z" fill="#5E0914" />
        <circle cx="8" cy="8" r="2.5" fill="#FFF2A3" />
        <line x1="2" y1="2" x2="25" y2="25" stroke="#5E0914" strokeWidth="0.8" />
        <path d="M2 38 L38 2" stroke="url(#borderGold)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
