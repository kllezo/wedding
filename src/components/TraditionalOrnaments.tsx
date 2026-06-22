import React from "react";

// Common Gold Gradient for all icons
const GoldDefs = () => (
  <defs>
    <linearGradient id="ornamentGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#8A640F" />
      <stop offset="25%" stopColor="#D4AF37" />
      <stop offset="50%" stopColor="#FFF2A3" />
      <stop offset="75%" stopColor="#D4AF37" />
      <stop offset="100%" stopColor="#8A640F" />
    </linearGradient>
    <linearGradient id="maroonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#5E0914" />
      <stop offset="100%" stopColor="#300206" />
    </linearGradient>
  </defs>
);

// 1. Kalasham Component
export function Kalasham({ size = 80, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={`${className} filter drop-shadow-[0_2px_4px_rgba(138,100,15,0.4)]`}>
      <GoldDefs />
      
      {/* Base Stand */}
      <path d="M30 85 C30 80, 70 80, 70 85 Z" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
      <rect x="35" y="84" width="30" height="3" fill="url(#maroonGrad)" rx="1" />

      {/* Brass Pot (Lota) Body */}
      <path d="M22 60 C22 82, 78 82, 78 60 C78 52, 70 50, 50 51 C30 50, 22 52, 22 60 Z" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
      {/* Pot Neck & Rim */}
      <path d="M34 50 C34 45, 66 45, 66 50 H34 Z" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
      <ellipse cx="50" cy="46" rx="18" ry="3" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.5" />
      
      {/* Decorative Thread Network (Sutra) around the pot */}
      <path d="M30 65 Q 50 80 70 65 M26 70 Q 50 82 74 70 M36 52 L36 78 M50 51 L50 80 M64 52 L64 78" stroke="#300206" strokeWidth="0.6" opacity="0.6" />
      {/* Central Tilak */}
      <circle cx="50" cy="65" r="7" fill="url(#maroonGrad)" />
      <path d="M46 65 H54 M50 61 V69" stroke="url(#ornamentGold)" strokeWidth="1" />

      {/* Mango Leaves (5 leaves) */}
      <path d="M33 46 C25 28, 48 35, 48 44 Z" fill="#2E7D32" stroke="#0D2C10" strokeWidth="0.5" />
      <path d="M67 46 C75 28, 52 35, 52 44 Z" fill="#2E7D32" stroke="#0D2C10" strokeWidth="0.5" />
      <path d="M41 45 C35 22, 49 28, 49 43 Z" fill="#1B5E20" stroke="#0D2C10" strokeWidth="0.5" />
      <path d="M59 45 C65 22, 51 28, 51 43 Z" fill="#1B5E20" stroke="#0D2C10" strokeWidth="0.5" />
      <path d="M50 44 C50 18, 50 18, 50 44 Z" fill="#4CAF50" stroke="#0D2C10" strokeWidth="0.8" />

      {/* Coconut (Narikelam) */}
      <path d="M40 38 C40 25, 60 25, 60 38 C60 44, 40 44, 40 38 Z" fill="#8D6E63" stroke="#5D4037" strokeWidth="0.8" />
      {/* Coconut Tip */}
      <path d="M46 28 L50 20 L54 28 Z" fill="#5D4037" />
      {/* Coconut stripes */}
      <path d="M46 32 C46 32, 50 25, 50 40 M54 32 C54 32, 50 25, 50 40" stroke="#3E2723" strokeWidth="0.6" />
    </svg>
  );
}

// 2. BetelLeaves Component
export function BetelLeaves({ size = 80, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={`${className} filter drop-shadow-[0_2px_4px_rgba(46,125,50,0.3)]`}>
      <GoldDefs />
      
      {/* Leaf 1 (Left background leaf) */}
      <g transform="rotate(-15 50 50)">
        <path d="M50 85 C15 70, 10 35, 50 15 C90 35, 85 70, 50 85 Z" fill="#1B5E20" stroke="#0D2C10" strokeWidth="1" />
        <path d="M50 15 Q50 50 50 85" stroke="#81C784" strokeWidth="1.2" opacity="0.6" />
        {/* Veins */}
        <path d="M50 30 Q35 32 25 38 M50 42 Q30 46 20 54 M50 54 Q32 60 22 70 M50 30 Q65 32 75 38 M50 42 Q70 46 80 54 M50 54 Q68 60 78 70" stroke="#81C784" strokeWidth="0.8" opacity="0.4" />
      </g>

      {/* Leaf 2 (Right foreground leaf) */}
      <g transform="rotate(15 50 50) translate(5, 5)">
        <path d="M50 85 C15 70, 10 35, 50 15 C90 35, 85 70, 50 85 Z" fill="#2E7D32" stroke="#0D2C10" strokeWidth="1.2" />
        <path d="M50 15 Q50 50 50 85" stroke="#A5D6A7" strokeWidth="1.2" opacity="0.7" />
        {/* Veins */}
        <path d="M50 30 Q35 32 25 38 M50 42 Q30 46 20 54 M50 54 Q32 60 22 70 M50 30 Q65 32 75 38 M50 42 Q70 46 80 54 M50 54 Q68 60 78 70" stroke="#A5D6A7" strokeWidth="0.8" opacity="0.5" />
      </g>

      {/* Areca Nuts (Supari) on top */}
      <circle cx="48" cy="68" r="6" fill="#8D6E63" stroke="#5D4037" strokeWidth="0.8" />
      <circle cx="56" cy="72" r="5" fill="#A1887F" stroke="#5D4037" strokeWidth="0.8" />
      <path d="M46 65 Q 49 68 53 66" stroke="#3E2723" strokeWidth="0.6" />
      
      {/* Gold coin accent representing blessing */}
      <circle cx="54" cy="62" r="5.5" fill="url(#ornamentGold)" stroke="#8A640F" strokeWidth="0.5" />
      <circle cx="54" cy="62" r="3.5" stroke="#300206" strokeWidth="0.5" strokeDasharray="1 1" />
    </svg>
  );
}

// 3. MangalaSutra Component
export function MangalaSutra({ size = 80, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={`${className} filter drop-shadow-[0_2px_4px_rgba(138,100,15,0.3)]`}>
      <GoldDefs />
      
      {/* Turmeric Thread/Cord (Hanging arch) */}
      <path d="M10 20 Q 50 70 90 20" fill="none" stroke="#F1C40F" strokeWidth="2" strokeLinecap="round" />
      
      {/* Black beads on the string */}
      <path d="M10 20 Q 50 70 90 20" fill="none" stroke="#111111" strokeWidth="2.5" strokeDasharray="3 9" strokeDashoffset="2" strokeLinecap="round" />
      <path d="M10 20 Q 50 70 90 20" fill="none" stroke="url(#ornamentGold)" strokeWidth="1.5" strokeDasharray="1 9" strokeDashoffset="6" strokeLinecap="round" />

      {/* Sacred Cups (Pustelu / Taali) - Two gold circular pendants */}
      <g transform="translate(41, 48)">
        <circle cx="4" cy="4" r="7.5" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
        <circle cx="4" cy="4" r="5" stroke="#300206" strokeWidth="0.5" strokeDasharray="2 1" />
        {/* Red dot in center */}
        <circle cx="4" cy="4" r="2" fill="#5E0914" />
      </g>
      <g transform="translate(59, 48)">
        <circle cx="-4" cy="4" r="7.5" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
        <circle cx="-4" cy="4" r="5" stroke="#300206" strokeWidth="0.5" strokeDasharray="2 1" />
        {/* Red dot in center */}
        <circle cx="-4" cy="4" r="2" fill="#5E0914" />
      </g>

      {/* Connecting loop */}
      <rect x="47" y="47" width="6" height="3" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.5" />
    </svg>
  );
}

// 4. WeddingUmbrella Component
export function WeddingUmbrella({ size = 80, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={`${className} filter drop-shadow-[0_2px_4px_rgba(138,100,15,0.3)]`}>
      <GoldDefs />
      
      {/* Umbrella Pole */}
      <line x1="50" y1="20" x2="50" y2="85" stroke="url(#ornamentGold)" strokeWidth="3" strokeLinecap="round" />
      <path d="M47 80 L50 85 L53 80 Z" fill="#300206" />

      {/* Umbrella Canopy Dome */}
      <path d="M15 45 C15 15, 85 15, 85 45 H15 Z" fill="url(#maroonGrad)" stroke="url(#ornamentGold)" strokeWidth="1.5" />
      
      {/* Vertical Ribs */}
      <path d="M50 16 Q 30 25 22 45 M50 16 Q 40 25 36 45 M50 16 Q 50 25 50 45 M50 16 Q 60 25 64 45 M50 16 Q 70 25 78 45" fill="none" stroke="url(#ornamentGold)" strokeWidth="0.8" />

      {/* Scalloped Bottom Edge */}
      <path d="M15 45 Q 22 49 29 45 Q 36 49 43 45 Q 50 49 57 45 Q 64 49 71 45 Q 78 49 85 45" fill="none" stroke="url(#ornamentGold)" strokeWidth="1.5" />

      {/* Tassels hanging from scalloped edges */}
      <circle cx="22" cy="51" r="1.5" fill="url(#ornamentGold)" />
      <circle cx="36" cy="51" r="1.5" fill="url(#ornamentGold)" />
      <circle cx="50" cy="51" r="1.5" fill="url(#ornamentGold)" />
      <circle cx="64" cy="51" r="1.5" fill="url(#ornamentGold)" />
      <circle cx="78" cy="51" r="1.5" fill="url(#ornamentGold)" />

      {/* Top Finial (Kalasam tip) */}
      <path d="M47 16 L50 6 L53 16 Z" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.5" />
      <circle cx="50" cy="11" r="2.5" fill="url(#ornamentGold)" />
    </svg>
  );
}

// 5. LotusMedallion Component
export function LotusMedallion({ size = 120, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={`${className} filter drop-shadow-[0_3px_6px_rgba(138,100,15,0.4)]`}>
      <GoldDefs />
      
      {/* Outer rings */}
      <circle cx="50" cy="50" r="46" stroke="url(#ornamentGold)" strokeWidth="0.8" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="42" stroke="url(#ornamentGold)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="38" stroke="#5E0914" strokeWidth="0.5" />

      {/* 16 Petals layer */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            <path
              d="M50 8 C47 22, 53 22, 50 38"
              stroke="url(#ornamentGold)"
              strokeWidth="1"
            />
            <path
              d="M50 8 C45 20, 45 28, 50 34 C55 28, 55 20, 50 8 Z"
              fill="url(#ornamentGold)"
              opacity="0.85"
              stroke="#300206"
              strokeWidth="0.4"
            />
          </g>
        );
      })}

      {/* Inner ring */}
      <circle cx="50" cy="50" r="24" fill="url(#maroonGrad)" stroke="url(#ornamentGold)" strokeWidth="1.5" />
      
      {/* Center 8 Petal Lotus */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        return (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            <path
              d="M50 26 C47 36, 53 36, 50 50"
              stroke="url(#ornamentGold)"
              strokeWidth="0.8"
            />
            <path
              d="M50 26 C46 34, 46 40, 50 45 C54 40, 54 34, 50 26 Z"
              fill="url(#ornamentGold)"
              stroke="#300206"
              strokeWidth="0.4"
            />
          </g>
        );
      })}

      {/* Hottest center point */}
      <circle cx="50" cy="50" r="5" fill="url(#ornamentGold)" />
      <circle cx="50" cy="50" r="2" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
}

// 6. TwinPeacocks Component
export function TwinPeacocks({ width = 320, height = 100, className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 300 100" fill="none" className={`${className} filter drop-shadow-[0_2px_4px_rgba(138,100,15,0.35)]`}>
      <GoldDefs />

      {/* Left Peacock */}
      <g transform="translate(20, 10)">
        {/* Tail Feathers - Intricate vines */}
        <path d="M10 70 Q 30 40 10 10 Q 55 20 40 50 Q 55 60 10 70 Z" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
        <path d="M18 55 Q 32 35 20 18 Q 45 28 35 48" fill="none" stroke="#5E0914" strokeWidth="0.8" />
        {/* Body */}
        <path d="M40 50 C40 35, 52 35, 54 20 C55 12, 48 8, 48 2 C53 5, 60 10, 58 20 C55 35, 45 42, 40 50 Z" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
        {/* Head Crown (Kireetam) */}
        <path d="M48 2 L45 -4 M48 2 L48 -5 M48 2 L52 -4" stroke="url(#ornamentGold)" strokeWidth="0.8" />
        <circle cx="45" cy="-5" r="0.8" fill="url(#ornamentGold)" />
        <circle cx="48" cy="-6" r="0.8" fill="url(#ornamentGold)" />
        <circle cx="52" cy="-5" r="0.8" fill="url(#ornamentGold)" />
        {/* Eye */}
        <circle cx="51" cy="7" r="0.8" fill="#FFFFFF" />
        <circle cx="51" cy="7" r="0.4" fill="#111" />
        {/* Beak */}
        <path d="M54 6 L59 8 L54 10 Z" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.5" />
        {/* Wing */}
        <path d="M36 45 C32 35, 45 35, 44 48 C40 50, 38 48, 36 45 Z" fill="url(#maroonGrad)" stroke="url(#ornamentGold)" strokeWidth="0.8" />
        {/* Legs */}
        <path d="M40 50 L38 62 H35 M40 50 L42 62 H45" stroke="url(#ornamentGold)" strokeWidth="1" />
      </g>

      {/* Right Peacock (Mirrored) */}
      <g transform="translate(280, 10) scale(-1, 1)">
        {/* Tail Feathers */}
        <path d="M10 70 Q 30 40 10 10 Q 55 20 40 50 Q 55 60 10 70 Z" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
        <path d="M18 55 Q 32 35 20 18 Q 45 28 35 48" fill="none" stroke="#5E0914" strokeWidth="0.8" />
        {/* Body */}
        <path d="M40 50 C40 35, 52 35, 54 20 C55 12, 48 8, 48 2 C53 5, 60 10, 58 20 C55 35, 45 42, 40 50 Z" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
        {/* Head Crown */}
        <path d="M48 2 L45 -4 M48 2 L48 -5 M48 2 L52 -4" stroke="url(#ornamentGold)" strokeWidth="0.8" />
        <circle cx="45" cy="-5" r="0.8" fill="url(#ornamentGold)" />
        <circle cx="48" cy="-6" r="0.8" fill="url(#ornamentGold)" />
        <circle cx="52" cy="-5" r="0.8" fill="url(#ornamentGold)" />
        {/* Eye */}
        <circle cx="51" cy="7" r="0.8" fill="#FFFFFF" />
        <circle cx="51" cy="7" r="0.4" fill="#111" />
        {/* Beak */}
        <path d="M54 6 L59 8 L54 10 Z" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.5" />
        {/* Wing */}
        <path d="M36 45 C32 35, 45 35, 44 48 C40 50, 38 48, 36 45 Z" fill="url(#maroonGrad)" stroke="url(#ornamentGold)" strokeWidth="0.8" />
        {/* Legs */}
        <path d="M40 50 L38 62 H35 M40 50 L42 62 H45" stroke="url(#ornamentGold)" strokeWidth="1" />
      </g>
      
      {/* Central Connector Floral Line */}
      <path d="M85 50 H215" stroke="url(#ornamentGold)" strokeWidth="1.2" strokeDasharray="3 3" />
      <circle cx="150" cy="50" r="4" fill="url(#maroonGrad)" stroke="url(#ornamentGold)" strokeWidth="1" />
      <path d="M135 50 Q 150 40 165 50 Q 150 60 135 50 Z" fill="none" stroke="url(#ornamentGold)" strokeWidth="0.8" />
    </svg>
  );
}

// 7. TempleArch (Tirupati Gopuram Archway Silhouette)
export function TempleArch({ width = 360, height = 240, className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 360 240" fill="none" className={`${className} opacity-[0.08]`}>
      <GoldDefs />
      
      {/* Outer Gopuram structure */}
      <path
        d="M60 240 V180 H300 V240 M80 180 V130 H280 V180 M100 130 V90 H260 V90 H260 V130 M120 90 V60 H240 V90 M140 60 V38 H220 V60 M160 38 V24 H200 V38 M170 24 L180 10 L190 24 Z"
        stroke="url(#maroonGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Decorative inner arches (Garbhagriha gate) */}
      <path
        d="M100 240 C100 150, 260 150, 260 240 M120 240 C120 170, 240 170, 240 240 M140 240 C140 190, 220 190, 220 240"
        stroke="url(#maroonGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Hanging bells inside gate */}
      <circle cx="180" cy="140" r="3.5" fill="url(#maroonGrad)" />
      <line x1="180" y1="110" x2="180" y2="136" stroke="url(#maroonGrad)" strokeWidth="1" />
    </svg>
  );
}

// 8. TemplePillar Component
export function TemplePillar({ height = 400, className = "" }) {
  return (
    <svg width="24" height={height} viewBox={`0 0 24 400`} fill="none" className={`${className} filter drop-shadow-[0_1px_2px_rgba(138,100,15,0.2)]`}>
      <GoldDefs />

      {/* Draw repeating pillar segments depending on height scale */}
      {/* Pillar Capital (Top base) */}
      <rect x="2" y="5" width="20" height="6" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" rx="0.5" />
      <polygon points="2,11 6,18 18,18 22,11" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
      <circle cx="12" cy="14" r="1.5" fill="#5E0914" />

      {/* Main Shaft (Vertical Columns) */}
      <rect x="6" y="18" width="12" height="364" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
      
      {/* Detailed engraving rings along shaft */}
      {Array.from({ length: 9 }).map((_, idx) => {
        const yPos = 35 + idx * 42;
        return (
          <g key={idx}>
            <rect x="4" y={yPos} width="16" height="5" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.6" rx="0.3" />
            <line x1="6" y1={yPos + 2.5} x2="18" y2={yPos + 2.5} stroke="#300206" strokeWidth="0.5" opacity="0.6" />
          </g>
        );
      })}

      {/* Pillar Plinth (Bottom base) */}
      <polygon points="6,382 2,389 22,389 18,382" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
      <rect x="2" y="389" width="20" height="7" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" rx="0.5" />
    </svg>
  );
}

// 9. WeddingMonogram (SJ ♥ V Wedding Crest)
export function WeddingMonogram({ size = 100, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={`${className} filter drop-shadow-[0_4px_8px_rgba(138,100,15,0.4)]`}>
      <GoldDefs />
      
      {/* Outer circular seal body */}
      <circle cx="50" cy="50" r="46" fill="url(#maroonGrad)" stroke="url(#ornamentGold)" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="42" stroke="url(#ornamentGold)" strokeWidth="0.8" strokeDasharray="3 2" />
      <circle cx="50" cy="50" r="39" stroke="url(#ornamentGold)" strokeWidth="0.5" />

      {/* Decorative leaf motifs inside seal borders */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = i * 45;
        return (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            <circle cx="50" cy="11" r="1.5" fill="url(#ornamentGold)" />
            <path d="M48 11 Q 50 7 52 11 Z" fill="url(#ornamentGold)" />
          </g>
        );
      })}

      {/* Center Crest Shield */}
      <path
        d="M32 38 C32 30, 68 30, 68 38 C68 55, 50 68, 50 72 C50 68, 32 55, 32 38 Z"
        fill="none"
        stroke="url(#ornamentGold)"
        strokeWidth="1.2"
      />

      {/* Monogram Letters: S J and V (Telugu-inspired Calligraphic Engraving) */}
      {/* Letter 'S' */}
      <path
        d="M37 38 C37 34, 43 33, 44 37 C45 40, 39 42, 38 45 C37 48, 43 51, 45 48"
        stroke="url(#ornamentGold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Letter 'J' */}
      <path
        d="M48 35 H58 M53 35 V47 C53 50, 49 51, 48 48"
        stroke="url(#ornamentGold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Heart Symbol (♥) */}
      <path
        d="M50 40 C49 39, 47 39, 47 41 C47 43, 50 45, 50 45 C50 45, 53 43, 53 41 C53 39, 51 39, 50 40 Z"
        fill="url(#ornamentGold)"
      />
      {/* Letter 'V' (at the bottom center of the monogram) */}
      <path
        d="M44 54 L50 64 L56 54"
        stroke="url(#ornamentGold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Little dots */}
      <circle cx="50" cy="34" r="1" fill="url(#ornamentGold)" />
      <circle cx="50" cy="67" r="1" fill="url(#ornamentGold)" />
    </svg>
  );
}

