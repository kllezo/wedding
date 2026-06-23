"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WeddingMonogram } from "./TraditionalOrnaments";
import BananaLeaves from "./BananaLeaves";
import Toran from "./Toran";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isSealed, setIsSealed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isCardSlid, setIsCardSlid] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const handleOpen = () => {
    if (!isSealed) return;
    
    // Step 1: Break seal
    setIsSealed(false);
    
    // Step 2: Open top flap after seal breaks (400ms)
    setTimeout(() => {
      setIsOpen(true);
    }, 400);

    // Step 3: Slide card up after flap opens (1400ms)
    setTimeout(() => {
      setIsCardSlid(true);
      onOpen(); // Trigger audio start and page transition
    }, 1600);

    // Step 4: Fade out and remove envelope overlay from DOM (3400ms)
    setTimeout(() => {
      setShouldRender(false);
    }, 3800);
  };

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#170103]/90 select-none overflow-hidden p-4 backdrop-blur-md">
        
        {/* Ambient background particles */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\x220 0 200 200\x22 xmlns=\x22http://www.w3.org/2000/svg\x22%3E%3Cfilter id=\x22noise\x22%3E%3CfeTurbulence type=\x22fractalNoise\x22 baseFrequency=\x220.8\x22 numOctaves=\x223\x22/%3E%3C/filter%3E%3Crect width=\x22100%25\x22 height=\x22100%25\x22 filter=\x22url(%23noise)\x22/%3E%3C/svg%3E')]" />

        {/* 3D Envelope Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05, y: -40 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[360px] h-[500px] rounded-lg shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
          style={{ perspective: 1200 }}
        >
          
          {/* ================= LAYER 1: ENVELOPE BACK PANEL ================= */}
          <div 
            className="absolute inset-0 rounded-lg overflow-hidden border border-[#C59B27]/40 shadow-inner z-0"
            style={{
              background: "radial-gradient(circle at 50% 50%, #4A050B 30%, #1A0103 100%)",
            }}
          >
            {/* Silk texture */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg viewBox=\x220 0 200 200\x22 xmlns=\x22http://www.w3.org/2000/svg\x22%3E%3Cfilter id=\x22noise\x22%3E%3CfeTurbulence type=\x22fractalNoise\x22 baseFrequency=\x220.9\x22/%3E%3C/filter%3E%3Crect width=\x22100%25\x22 height=\x22100%25\x22 filter=\x22url(%23noise)\x22/%3E%3C/svg%3E')]" />
            <BananaLeaves position="top-left" size={140} className="top-2 left-2 opacity-20 pointer-events-none" />
            <BananaLeaves position="top-right" size={140} className="top-2 right-2 opacity-20 pointer-events-none" />
          </div>

          {/* ================= LAYER 2: INVITATION CARD (SLIDES UP) ================= */}
          <motion.div
            initial={{ y: 0, scale: 0.95 }}
            animate={{ 
              y: isCardSlid ? -260 : 0, 
              scale: isCardSlid ? 1 : 0.95,
              z: isCardSlid ? 100 : 0
            }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-3.5 top-4 bottom-4 bg-[#FDFBF7] rounded border-2 gold-foil-border shadow-2xl z-10 p-5 overflow-hidden flex flex-col justify-between items-center text-center"
            style={{
              background: "radial-gradient(circle, #FDFBF7 60%, #FAF5EA 100%)",
              boxShadow: "0 -10px 30px -5px rgba(0,0,0,0.3), 0 10px 20px -5px rgba(0,0,0,0.2)",
            }}
          >
            {/* Dashed margins */}
            <div className="absolute inset-1.5 border border-dashed border-[#C59B27]/40 rounded pointer-events-none" />
            <div className="absolute inset-3 border border-[#C59B27]/15 rounded pointer-events-none" />
            
            <Toran className="absolute top-0 left-0 w-full opacity-80" count={7} />

            {/* Content inside sliding preview card */}
            <div className="my-auto space-y-4 relative z-10">
              <span className="font-telugu text-[10px] tracking-widest text-[#C59B27] font-semibold block uppercase">
                Wedding Invitation
              </span>
              
              <div className="space-y-1">
                <h2 className="font-telugu text-[#5E0914] text-xs font-bold">చి.ల.సౌ. Sai Jyoshna</h2>
                <div className="font-playfair text-lg text-[#C59B27] italic">&</div>
                <h2 className="font-telugu text-[#5E0914] text-xs font-bold">చి. Vikram</h2>
              </div>

              <div className="w-12 h-[0.5px] bg-[#C59B27]/40 mx-auto" />

              <span className="font-cormorant text-xs font-bold uppercase tracking-widest text-[#5E0914] block">
                July 5, 2026
              </span>
            </div>

            <div className="text-[8px] font-cormorant tracking-[0.25em] text-[#C59B27]/80 uppercase font-bold">
              Karimnagar
            </div>
          </motion.div>

          {/* ================= LAYER 3: ENVELOPE FLAPS (FOREGROUND) ================= */}
          {/* Left Flap */}
          <div 
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              clipPath: "polygon(0% 0%, 50% 50%, 0% 100%)",
              background: "linear-gradient(to right, #3A0307 0%, #5E0914 100%)",
              boxShadow: "inset -10px 0 20px -10px rgba(0,0,0,0.5)",
            }}
          />

          {/* Right Flap */}
          <div 
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)",
              background: "linear-gradient(to left, #3A0307 0%, #5E0914 100%)",
              boxShadow: "inset 10px 0 20px -10px rgba(0,0,0,0.5)",
            }}
          />

          {/* Bottom Flap */}
          <div 
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              clipPath: "polygon(0% 100%, 50% 50%, 100% 100%)",
              background: "linear-gradient(to top, #2C0104 0%, #5E0914 100%)",
              boxShadow: "inset 0 10px 20px -10px rgba(0,0,0,0.6)",
            }}
          >
            {/* Little gold foil line on bottom flap edges */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 500" fill="none">
              <path d="M 0 500 L 180 250 L 360 500" stroke="#C59B27" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.5" />
            </svg>
          </div>

          {/* Top Flap (3D Rotating Flap) */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isOpen ? -180 : 0 }}
            transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 z-30"
            style={{ 
              transformOrigin: "top center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "visible",
            }}
          >
            {/* Front of Flap (pointing down when closed) */}
            <div 
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0% 0%, 50% 50%, 100% 0%)",
                background: "linear-gradient(to bottom, #3A0307 0%, #5E0914 100%)",
                backfaceVisibility: "visible",
              }}
            >
              {/* Gold borders on flap edge */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 500" fill="none">
                <path d="M 0 0 L 180 250 L 360 0" stroke="#C59B27" strokeWidth="1" opacity="0.7" />
              </svg>
            </div>
            
            {/* Inside / Back of Flap (revealed when flipped open) */}
            {/* Renders gold leaf paper lining */}
            <div 
              className="absolute inset-0 rotate-x-180"
              style={{
                clipPath: "polygon(0% 0%, 50% 50%, 100% 0%)",
                background: "radial-gradient(circle at 50% 0%, #FFF2A3 0%, #A67C1E 100%)",
                backfaceVisibility: "hidden",
                transform: "rotateX(180deg)",
              }}
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 500" fill="none">
                <path d="M 0 0 L 180 250 L 360 0" stroke="#5E0914" strokeWidth="0.8" opacity="0.4" />
              </svg>
            </div>
          </motion.div>

          {/* ================= LAYER 4: MONOGRAM SEAL & INTERACTIVE BUTTON ================= */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none">
            
            <motion.div
              initial={{ scale: 1 }}
              animate={{ 
                scale: isSealed ? [1, 1.03, 1] : 0, 
                opacity: isSealed ? 1 : 0 
              }}
              transition={{ 
                scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                opacity: { duration: 0.4 }
              }}
              className="flex flex-col items-center justify-center p-3 bg-[#300206] rounded-full border border-[#C59B27] shadow-[0_10px_25px_rgba(0,0,0,0.6)] pointer-events-auto cursor-pointer relative w-[130px] h-[130px]"
              onClick={handleOpen}
            >
              <div className="absolute inset-1 rounded-full border border-dashed border-[#C59B27]/40" />
              
              {/* Micro monogram crest seal */}
              <WeddingMonogram size={80} />

              {/* Tap prompt */}
              <div className="absolute -bottom-11 w-max flex flex-col items-center gap-0.5">
                <span className="font-telugu text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FDF0A6] via-[#C59B27] to-[#FDF0A6] tracking-wider animate-pulse">
                  ఆహ్వానం తెరవండి
                </span>
                <span className="font-cormorant text-[7px] font-bold uppercase tracking-[0.2em] text-[#C59B27]/80">
                  Tap To Open
                </span>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
