"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { WeddingMonogram } from "./TraditionalOrnaments";
import Diya from "./Diya";
import TempleBell from "./TempleBell";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress specifically as the footer enters the screen
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const springConfig = { damping: 20, stiffness: 60 };

  // Blooming Lotus animation transforms (linked to scroll)
  const lotusScale = useTransform(scrollYProgress, [0.1, 0.95], [0.65, 1]);
  const lotusScaleSpring = useSpring(lotusScale, springConfig);

  // Counter-rotating petal layers
  const rotateOuter = useTransform(scrollYProgress, [0.1, 0.95], [-50, 0]);
  const rotateOuterSpring = useSpring(rotateOuter, springConfig);

  const rotateInner = useTransform(scrollYProgress, [0.1, 0.95], [50, 0]);
  const rotateInnerSpring = useSpring(rotateInner, springConfig);

  const finalGlowOpacity = useTransform(scrollYProgress, [0.5, 0.95], [0.1, 1]);
  const finalGlowSpring = useSpring(finalGlowOpacity, springConfig);

  return (
    <footer 
      ref={footerRef}
      className="relative px-6 py-24 bg-transparent text-[#42040B] text-center overflow-hidden flex flex-col items-center select-none border-t border-[#C59B27]/30"
    >
      
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

        {/* 3. Gold Tanjore Lotus Mandala (Scroll-driven Counter-Rotating Bloom) */}
        <motion.div
          style={{ scale: lotusScaleSpring }}
          className="w-52 h-52 pointer-events-none my-4 relative flex items-center justify-center"
        >
          {/* Radial light aura glowing behind the lotus */}
          <motion.div 
            style={{ opacity: finalGlowSpring }}
            className="absolute w-36 h-36 rounded-full bg-[#FFA500]/5 blur-2xl -z-10"
          />

          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="#C59B27">
            <defs>
              <linearGradient id="lotusGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A67C1E" />
                <stop offset="50%" stopColor="#FFF2A3" />
                <stop offset="100%" stopColor="#A67C1E" />
              </linearGradient>
            </defs>

            <circle cx="50" cy="50" r="46" stroke="url(#lotusGold)" strokeWidth="0.8" strokeDasharray="3 3" fill="none" opacity="0.6" />
            <circle cx="50" cy="50" r="40" stroke="url(#lotusGold)" strokeWidth="1" fill="none" opacity="0.4" />

            {/* Counter-Rotating Layer 1: Outer Petals (Spins Clockwise on scroll) */}
            <motion.g style={{ rotate: rotateOuterSpring, originX: "50px", originY: "50px" }}>
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 360) / 12;
                return (
                  <path
                    key={`outer-${i}`}
                    d="M50 50 C38 28, 62 28, 50 12 C38 28, 62 28, 50 50"
                    transform={`rotate(${angle} 50 50)`}
                    fill="url(#lotusGold)"
                    opacity="0.7"
                  />
                );
              })}
            </motion.g>

            {/* Counter-Rotating Layer 2: Inner Petals (Spins Counter-Clockwise on scroll) */}
            <motion.g style={{ rotate: rotateInnerSpring, originX: "50px", originY: "50px" }}>
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 360) / 8 + 22.5; // Offset alignment
                return (
                  <path
                    key={`inner-${i}`}
                    d="M50 50 C42 34, 58 34, 50 22 C42 34, 58 34, 50 50"
                    transform={`rotate(${angle} 50 50)`}
                    fill="url(#lotusGold)"
                    opacity="0.95"
                    stroke="#5E0914"
                    strokeWidth="0.3"
                  />
                );
              })}
            </motion.g>

            {/* Center Core */}
            <circle cx="50" cy="50" r="10" fill="#5E0914" stroke="url(#lotusGold)" strokeWidth="1" />
            <circle cx="50" cy="50" r="4" fill="url(#lotusGold)" />
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
