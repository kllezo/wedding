import React from "react";
import { MapPin, QrCode } from "lucide-react";

export default function QRPlaceholder() {
  return (
    <div className="w-full max-w-[280px] bg-[#FDFBF7] p-5 rounded-lg border gold-foil-border flex flex-col items-center text-center shadow-lg relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C59B27]" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C59B27]" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C59B27]" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C59B27]" />

      {/* Styled QR Code Box */}
      <div className="w-40 h-40 bg-[#FAF7F0] border-2 border-dashed border-[#C59B27]/40 rounded-lg flex flex-col items-center justify-center relative mb-4 p-4 group">
        <QrCode className="w-20 h-20 text-[#5E0914]/30 group-hover:scale-105 transition-transform duration-500" strokeWidth={1} />
        
        {/* Subtle decorative inner corner brackets */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#5E0914]/20" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#5E0914]/20" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#5E0914]/20" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#5E0914]/20" />
        
        {/* Little locks */}
        <div className="absolute w-8 h-8 border border-[#C59B27]/30 bg-[#FDFBF7] rounded flex items-center justify-center shadow-sm">
          <MapPin className="w-4 h-4 text-[#C59B27]" />
        </div>
      </div>

      <span className="font-playfair text-sm font-semibold tracking-wider text-[#5E0914] uppercase mb-1">
        Location QR
      </span>
      <span className="font-cormorant text-xs text-[#5E0914]/70 italic mb-4">
        Coming Soon
      </span>

      {/* Disabled button */}
      <button
        disabled
        className="w-full py-2 px-4 rounded bg-[#E5DCC6] text-[#7A6E5D] font-cormorant font-semibold text-sm cursor-not-allowed border border-[#D1C6AD] flex items-center justify-center gap-2"
      >
        <MapPin className="w-3.5 h-3.5" />
        Navigate to Venue
      </button>
    </div>
  );
}
