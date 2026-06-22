"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Toran from "./Toran";
import BananaLeaves from "./BananaLeaves";
import { WeddingMonogram, TemplePillar } from "./TraditionalOrnaments";

interface CardCoverProps {
  onOpen: () => void;
}

export default function CardCover({ onOpen }: CardCoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    // Play sound if any (can trigger parent audio to start playing)
    onOpen();
    // Remove from DOM after animation completes (approx 1.5 seconds)
    setTimeout(() => {
      setShouldRender(false);
    }, 1600);
  };

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex overflow-hidden select-none pointer-events-auto">
        
        {/* Left Door Panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isOpen ? "-100%" : 0 }}
          transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-[#5E0914] relative border-r-2 border-[#C59B27] flex flex-col justify-between overflow-hidden shadow-2xl"
          style={{
            background: "radial-gradient(circle at 100% 50%, #5E0914 40%, #300206 100%)", // Rich red-maroon dome shade
          }}
        >
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\x220 0 200 200\x22 xmlns=\x22http://www.w3.org/2000/svg\x22%3E%3Cfilter id=\x22noise\x22%3E%3CfeTurbulence type=\x22fractalNoise\x22 baseFrequency=\x220.8\x22 numOctaves=\x223\x22 stitchTiles=\x22stitch\x22/%3E%3C/filter%3E%3Crect width=\x22100%25\x22 height=\x22100%25\x22 filter=\x22url(%23noise)\x22/%3E%3C/svg%3E')]" />
          
          {/* Hanging Toran border at top */}
          <Toran className="absolute top-0 left-0 w-[200%] origin-top-left opacity-90" count={12} />
          
          {/* Corner Leaves */}
          <BananaLeaves position="top-left" size={160} className="top-2 left-2 opacity-35" />
          <BananaLeaves position="bottom-left" size={160} className="bottom-2 left-2 opacity-35" />

          {/* Left Door Side Gold Border */}
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]" />
          <div className="absolute top-4 right-3 w-[1px] h-[calc(100%-32px)] bg-[#C59B27]/40" />

          {/* Decorative left column */}
          <div className="absolute left-4 top-20 bottom-20 opacity-30">
            <TemplePillar height={500} />
          </div>
        </motion.div>

        {/* Right Door Panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isOpen ? "100%" : 0 }}
          transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-[#5E0914] relative border-l-2 border-[#C59B27] flex flex-col justify-between overflow-hidden shadow-2xl"
          style={{
            background: "radial-gradient(circle at 0% 50%, #5E0914 40%, #300206 100%)",
          }}
        >
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\x220 0 200 200\x22 xmlns=\x22http://www.w3.org/2000/svg\x22%3E%3Cfilter id=\x22noise\x22%3E%3CfeTurbulence type=\x22fractalNoise\x22 baseFrequency=\x220.8\x22 numOctaves=\x223\x22 stitchTiles=\x22stitch\x22/%3E%3C/filter%3E%3Crect width=\x22100%25\x22 height=\x22100%25\x22 filter=\x22url(%23noise)\x22/%3E%3C/svg%3E')]" />

          {/* Hanging Toran border */}
          <Toran className="absolute top-0 right-0 w-[200%] origin-top-right scale-x-[-1] opacity-90" count={12} />
          
          {/* Corner Leaves */}
          <BananaLeaves position="top-right" size={160} className="top-2 right-2 opacity-35" />
          <BananaLeaves position="bottom-right" size={160} className="bottom-2 right-2 opacity-35" />

          {/* Right Door Side Gold Border */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]" />
          <div className="absolute top-4 left-3 w-[1px] h-[calc(100%-32px)] bg-[#C59B27]/40" />

          {/* Decorative right column */}
          <div className="absolute right-4 top-20 bottom-20 opacity-30">
            <TemplePillar height={500} />
          </div>
        </motion.div>

        {/* Center Monogram Crest Seal Button (SJ ♥ V) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.8 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center p-6 bg-[#300206] rounded-full border-2 border-[#C59B27] shadow-2xl relative pointer-events-auto backdrop-blur-sm w-[240px] h-[240px] max-w-[90vw] cursor-pointer"
            onClick={handleOpen}
          >
            {/* Medallion concentric lines */}
            <div className="absolute inset-1.5 rounded-full border border-dashed border-[#C59B27]/50" />
            <div className="absolute inset-3 rounded-full border border-[#C59B27]/25" />
            
            {/* Custom Monogram Seal Crest */}
            <WeddingMonogram size={150} />

            {/* Glowing gold text on how to open */}
            <div className="absolute -bottom-16 w-max flex flex-col items-center gap-1">
              <span className="font-telugu text-[13px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FDF0A6] via-[#C59B27] to-[#FDF0A6] animate-pulse tracking-widest">
                ఆహ్వానం తెరవండి
              </span>
              <span className="font-cormorant text-[9px] font-bold uppercase tracking-[0.3em] text-[#C59B27]/70">
                Tap to Open Invitation
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </AnimatePresence>
  );
}
