"use client";

import React from "react";
import { motion } from "framer-motion";
import { WeddingMonogram } from "./TraditionalOrnaments";
import Diya from "./Diya";
import TempleBell from "./TempleBell";

export default function Footer() {
  return (
    <footer className="relative px-6 py-20 bg-transparent text-[#42040B] text-center overflow-hidden flex flex-col items-center select-none border-t border-[#C59B27]/30">
      
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
        
        {/* 1. Custom Wedding Monogram Crest Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <WeddingMonogram size={105} />
        </motion.div>

        {/* 2. "ధన్యవాదాలు" (Thank You) with Gold Foil outline glow */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-telugu text-3xl md:text-4xl font-extrabold tracking-wider text-[#5E0914] drop-shadow-sm animate-glow"
        >
          ధన్యవాదాలు
        </motion.h2>

        {/* 3. Gold Lotus Mandala Silhouette */}
        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          whileInView={{ opacity: 0.15, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="w-48 h-48 pointer-events-none my-2"
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="#C59B27">
            <circle cx="50" cy="50" r="45" stroke="#C59B27" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            <circle cx="50" cy="50" r="38" stroke="#C59B27" strokeWidth="1.5" fill="none" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 360) / 12;
              return (
                <path
                  key={i}
                  d="M50 50 C40 30, 60 30, 50 15 C40 30, 60 30, 50 50"
                  transform={`rotate(${angle} 50 50)`}
                  opacity="0.8"
                />
              );
            })}
            <circle cx="50" cy="50" r="10" fill="#5E0914" />
          </svg>
        </motion.div>

        {/* 4. Traditional Blessings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-3 px-4"
        >
          <p className="font-telugu text-base md:text-lg font-bold leading-relaxed text-[#42040B]/95">
            మీ రాక మా ఆనందాన్ని మరింత పెంచుతుంది
          </p>
          <p className="font-cormorant text-xs uppercase tracking-[0.25em] text-[#C59B27] font-bold">
            Your presence will grace the occasion with joy
          </p>
        </motion.div>

      </div>

      {/* 5. Row of Lit Brass Diyas at the Bottom */}
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
