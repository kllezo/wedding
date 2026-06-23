"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Diya from "./Diya";
import TempleBell from "./TempleBell";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <footer 
      ref={footerRef}
      className="relative px-6 py-24 bg-transparent text-[#42040B] text-center overflow-hidden flex flex-col items-center select-none border-t border-[#C59B27]/30"
    >
      
      {/* Background drifting petals and soft gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50 z-0">
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-[#FFF2A3] opacity-60 blur-[0.5px] animate-pulse" />
        <div className="absolute top-[50%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#FFF2A3] opacity-60 blur-[0.5px]" />
        <div className="absolute top-[80%] left-[25%] w-2.5 h-2.5 rounded-full bg-[#D4AF37] opacity-50 blur-[0.5px]" />
        <div className="absolute top-[40%] left-[30%] w-3 h-3 bg-[#900C3F] opacity-25 rounded-tl-full rounded-br-full rotate-45" />
        <div className="absolute top-[70%] right-[25%] w-2.5 h-2.5 bg-[#900C3F] opacity-35 rounded-tl-full rounded-br-full -rotate-12" />
      </div>

      {/* Subtle vertical hanging jasmines on corners of footer */}
      <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-dashed border-l border-[#C59B27]/15 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-4 w-[1px] bg-dashed border-l border-[#C59B27]/15 pointer-events-none" />

      {/* Swaying Temple Bells framing the top corners of the footer */}
      <div className="absolute top-2 left-6 scale-75 opacity-40">
        <TempleBell size={45} chainLength={50} />
      </div>
      <div className="absolute top-2 right-6 scale-75 opacity-40">
        <TempleBell size={45} chainLength={30} />
      </div>

      {/* Decorative Top Arch / Border */}
      <div className="w-full max-w-sm h-[1px] bg-gradient-to-r from-transparent via-[#C59B27]/60 to-transparent mx-auto mb-10 relative">
        <span className="absolute left-1/2 -translate-x-1/2 -top-2 text-sm text-[#C59B27] bg-[#FDFBF7] px-3">
          ✿
        </span>
      </div>

      <div className="space-y-6 max-w-md z-10 relative flex flex-col items-center">
        
        {/* 1. "ధన్యవాదాలు" (Thank You) with Gold Foil outline glow */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-telugu text-3xl md:text-4xl font-extrabold tracking-wider text-[#5E0914] drop-shadow-sm animate-glow"
        >
          ధన్యవాదాలు
        </motion.h2>

        {/* 2. "మీ రాక మా ఆనందాన్ని మరింత పెంచుతుంది" / "May your presence add to our joy" */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-1.5"
        >
          <p className="font-telugu text-base md:text-lg font-bold leading-relaxed text-[#42040B]/95">
            మీ రాక మా ఆనందాన్ని మరింత పెంచుతుంది
          </p>
          <p className="font-cormorant text-xs uppercase tracking-[0.25em] text-[#C59B27] font-bold">
            May your presence add to our joy
          </p>
        </motion.div>

        {/* 3. Luxury wax stamp (Same opening stamp image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }}
          className="w-[110px] h-[110px] select-none my-4 flex items-center justify-center relative drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
        >
          <img 
            src="/images/stamp.png" 
            alt="Royal Wax Seal" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* 4. SJ ♥ V Monogram Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.5 }}
          className="font-playfair text-2xl md:text-3xl font-extrabold tracking-widest text-[#5E0914] italic gold-foil-text"
        >
          SJ ♥ V
        </motion.div>

        {/* 5. Traditional Blessings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.6 }}
          className="font-telugu text-[#5E0914] text-sm md:text-base font-bold tracking-[0.15em] leading-relaxed mt-4 space-y-0.5"
        >
          <p className="gold-foil-text text-base">శ్రీరస్తు !</p>
          <p>శుభమస్తు !!</p>
          <p>కళ్యాణమస్తు !!!</p>
        </motion.div>

      </div>

      {/* Lit Diyas at the Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="w-full max-w-xs flex justify-around items-end mt-12 mb-6 z-10"
      >
        <Diya size={45} />
        <Diya size={55} />
        <Diya size={45} />
      </motion.div>

      {/* Bottom copyright info */}
      <div className="mt-8 text-[10px] font-cormorant tracking-widest text-[#C59B27]/80 z-10 relative">
        © 2026 Sai Jyoshna & Vikram. All Rights Reserved.
      </div>
      
    </footer>
  );
}
