"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Diya from "./Diya";
import TempleBell from "./TempleBell";
import Toran from "./Toran";
import { LotusMedallion, TwinPeacocks, TempleArch, TemplePillar } from "./TraditionalOrnaments";

const RosePetalSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2 C6 6, 3 10, 10 18 C17 10, 14 6, 10 2 Z" fill="#900C3F" />
  </svg>
);

const JasminePetalSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="10" cy="10" rx="4" ry="8" fill="#FFFDF0" />
    <circle cx="10" cy="17" r="1.5" fill="#E67E22" />
  </svg>
);

export default function InvitationHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const petalsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const [panelsOpen, setPanelsOpen] = useState(false);
  const [renderDoors, setRenderDoors] = useState(true);

  useEffect(() => {
    // Automatically trigger doors opening after 200ms
    const timer = setTimeout(() => {
      setPanelsOpen(true);
    }, 200);

    const removeTimer = setTimeout(() => {
      setRenderDoors(false);
    }, 3000); // Remove doors from DOM after animation completes (200ms delay + 2400ms duration + 400ms buffer)

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Soft fade-in for local petals and particles on load
    const ctx = gsap.context(() => {
      gsap.fromTo(petalsRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.8 });
      gsap.fromTo(particlesRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.8 });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between items-center px-4 py-12 overflow-hidden select-none text-[#42040B] text-center border-b border-[#C59B27]/30 bg-transparent"
    >
      
      {/* ================= REVEALED CONTENT CONTAINER ================= */}
      {/* Wrapped in opacity fade-in linked to panelsOpen, pointer-events-auto for interactions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: panelsOpen ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 w-full h-full flex flex-col justify-between items-center px-4 py-12 pointer-events-auto"
      >
        {/* 1. Temple Pillars framing the content left and right */}
        <div className="absolute left-1 md:left-2.5 top-10 bottom-6 z-10 opacity-30 md:opacity-85 pointer-events-none">
          <TemplePillar height={700} />
        </div>
        <div className="absolute right-1 md:right-2.5 top-10 bottom-6 z-10 opacity-30 md:opacity-85 pointer-events-none scale-x-[-1]">
          <TemplePillar height={700} />
        </div>

        {/* 2. Top Hanging Torans */}
        <Toran className="absolute top-0 left-0 w-full z-15" count={12} />
        
        {/* Hanging jasmine garlands from top */}
        <div className="absolute top-4 left-10 md:left-24 z-10 w-0.5 h-44 bg-dashed border-l border-[#C59B27]/30 flex flex-col items-center justify-around pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
          <div className="w-2 h-2 rounded-full bg-[#E58F12]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E58F12]" />
        </div>
        <div className="absolute top-4 right-10 md:right-24 z-10 w-0.5 h-44 bg-dashed border-l border-[#C59B27]/30 flex flex-col items-center justify-around pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
          <div className="w-2 h-2 rounded-full bg-[#E58F12]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E58F12]" />
        </div>

        {/* Swaying brass bells */}
        <div className="absolute top-0 left-[20%] z-15 scale-75 md:scale-100">
          <TempleBell size={45} chainLength={75} />
        </div>
        <div className="absolute top-0 right-[20%] z-15 scale-75 md:scale-100">
          <TempleBell size={45} chainLength={55} />
        </div>

        {/* 3. Temple Gopuram silhouette in background (Archway / Mandala) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[450px] h-[360px] flex items-center justify-center pointer-events-none z-0 opacity-20">
          <TempleArch className="scale-[1.1] md:scale-125" />
        </div>

        {/* 4. Banana Trees at bottom corners */}
        <div className="absolute bottom-6 left-5 z-10 pointer-events-none w-16 h-24 md:w-28 md:h-38 opacity-45">
          <svg width="100%" height="100%" viewBox="0 0 100 150" fill="none">
            <path d="M50 150 Q 60 70 30 20 Q 75 30 70 60 Q 80 80 50 150 Z" fill="#1B5E20" opacity="0.4" />
            <path d="M50 150 Q 40 70 70 20 Q 25 30 30 60 Q 20 80 50 150 Z" fill="#2E7D32" opacity="0.4" />
            <path d="M48 150 Q 50 110 50 90 Q 50 110 52 150 Z" stroke="#5D4037" strokeWidth="5" />
            <path d="M50 90 Q 20 70 10 90 M50 90 Q 80 70 90 90 M50 90 Q 15 50 5 60 M50 90 Q 85 50 95 60 M50 90 C50 60 40 40 50 30" stroke="#1B5E20" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="absolute bottom-6 right-5 z-10 pointer-events-none w-16 h-24 md:w-28 md:h-38 scale-x-[-1] opacity-45">
          <svg width="100%" height="100%" viewBox="0 0 100 150" fill="none">
            <path d="M50 150 Q 60 70 30 20 Q 75 30 70 60 Q 80 80 50 150 Z" fill="#1B5E20" opacity="0.4" />
            <path d="M50 150 Q 40 70 70 20 Q 25 30 30 60 Q 20 80 50 150 Z" fill="#2E7D32" opacity="0.4" />
            <path d="M48 150 Q 50 110 50 90 Q 50 110 52 150 Z" stroke="#5D4037" strokeWidth="5" />
            <path d="M50 90 Q 20 70 10 90 M50 90 Q 80 70 90 90 M50 90 Q 15 50 5 60 M50 90 Q 85 50 95 60 M50 90 C50 60 40 40 50 30" stroke="#1B5E20" strokeWidth="2.5" />
          </svg>
        </div>

        {/* 5. Main Hero Content Wrapper */}
        <div className="flex-1 flex flex-col justify-center items-center mt-12 md:mt-20 z-10 w-full max-w-md relative">
          
          {/* Sacred Blessings Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-telugu text-[#5E0914] text-xs md:text-sm font-bold tracking-widest leading-relaxed mb-3 space-y-0.5 z-10"
          >
            <p className="gold-foil-text text-sm">శ్రీరస్తు !</p>
            <p>శుభమస్తు !!</p>
            <p>కళ్యాణమస్తు !!!</p>
          </motion.div>

          {/* Twin Peacocks Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full flex justify-center mb-2 z-10"
          >
            <TwinPeacocks width={250} height={60} className="w-60 h-14" />
          </motion.div>

          {/* Royal Name Mandap Container */}
          <div className="relative py-4 px-4 w-full flex flex-col items-center justify-center min-h-[280px] z-10">
            
            {/* Radial gold aura behind names (increased size and added sway) */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.24] pointer-events-none">
              <LotusMedallion size={295} className="animate-sway-slow" />
            </div>
            
            {/* Subtle golden shimmer sweep overlay */}
            <div className="absolute inset-0 pointer-events-none -z-5 overflow-hidden flex items-center justify-center">
              <motion.div
                animate={{
                  x: ["-150%", "150%"]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                  repeatDelay: 2
                }}
                className="absolute w-[60%] h-full opacity-[0.18]"
                style={{
                  background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,242,163,0.85) 50%, rgba(255,255,255,0) 100%)",
                  transform: "skewX(-25deg)",
                }}
              />
            </div>

            {/* Glowing aura halo */}
            <div className="absolute w-44 h-44 rounded-full bg-[#FFA500]/5 blur-3xl -z-20 pointer-events-none" />

            {/* Names Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              {/* Bride Section */}
              <div className="space-y-1">
                <h2 className="font-telugu text-[#5E0914]/80 text-[10px] md:text-xs font-bold tracking-wider mb-0.5">
                  చి.ల.సౌ.
                </h2>
                <h1 className="font-playfair text-4xl md:text-5xl font-extrabold tracking-wide text-[#42040B] drop-shadow-md">
                  Sai Jyoshna
                </h1>
                <p className="font-cormorant text-[13px] md:text-[15px] font-bold tracking-[0.18em] text-[#A67C1E]/85 uppercase mt-1">
                  D/o. Thammishetty Kishan & Saritha
                </p>
              </div>

              {/* Heart Separator */}
              <div className="font-playfair text-lg md:text-xl font-bold italic gold-foil-text animate-pulse my-0.5">
                ♡
              </div>

              {/* Groom Section */}
              <div className="space-y-1">
                <h2 className="font-telugu text-[#5E0914]/80 text-[10px] md:text-xs font-bold tracking-wider mb-0.5">
                  చి.
                </h2>
                <h1 className="font-playfair text-4xl md:text-5xl font-extrabold tracking-wide text-[#42040B] drop-shadow-md">
                  Vikram
                </h1>
                <p className="font-cormorant text-[13px] md:text-[15px] font-bold tracking-[0.18em] text-[#A67C1E]/85 uppercase mt-1">
                  S/o. Alladi Nagesh & Manjula
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Decorative Diyas & Scroll Indicator */}
        <div className="w-full flex justify-between items-end px-8 mt-4 z-10 pointer-events-none">
          <Diya size={45} />
          
          <div className="flex flex-col items-center gap-1.5 opacity-75 animate-bounce">
            <span className="font-cormorant text-[8px] md:text-[9.5px] font-bold uppercase tracking-[0.22em] text-[#5E0914] flex items-center gap-1.5">
              ✨ Scroll to Reveal the Muhurtham ✨
            </span>
            <div className="w-1.5 h-1.5 border-r border-b border-[#5E0914] transform rotate-45" />
          </div>

          <Diya size={45} />
        </div>

        {/* ================= FOREGROUND PARALLAX LAYERS ================= */}
        {/* local drifting petals */}
        <div 
          ref={petalsRef}
          className="absolute inset-0 pointer-events-none z-5 overflow-hidden will-change-transform opacity-0"
        >
          <RosePetalSVG className="absolute top-[15%] left-[10%] w-6 h-6 rotate-12 opacity-50 animate-sway-slow" />
          <JasminePetalSVG className="absolute top-[45%] right-[15%] w-5 h-5 -rotate-12 opacity-60" />
          <RosePetalSVG className="absolute top-[75%] left-[12%] w-5 h-5 rotate-45 opacity-55" />
        </div>

        {/* local gold particles */}
        <div 
          ref={particlesRef}
          className="absolute inset-0 pointer-events-none z-5 overflow-hidden will-change-transform opacity-0"
        >
          <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#FFF2A3] opacity-55 blur-[0.5px] animate-pulse" />
          <div className="absolute top-[20%] right-[25%] w-2.5 h-2.5 rounded-full bg-[#FFF2A3] opacity-70 blur-[1px]" />
          <div className="absolute top-[45%] left-[30%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-60 blur-[0.5px]" />
          <div className="absolute top-[65%] left-[22%] w-2 h-2 rounded-full bg-[#D4AF37] opacity-65 blur-[0.5px]" />
          <div className="absolute top-[55%] right-[18%] w-1.5 h-1.5 rounded-full bg-[#FFF2A3] opacity-50 blur-[0.5px]" />
          <div className="absolute top-[80%] right-[35%] w-2 h-2 rounded-full bg-[#FFF2A3] opacity-60 blur-[1px] animate-pulse" />
        </div>
      </motion.div>



      {/* ================= GATEGOLD CARD DOORS / PANELS REVEAL ================= */}
      {renderDoors && (
        <>
          {/* Golden Light Leak Effect */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ 
              opacity: panelsOpen ? [0, 0.95, 0] : 0,
              scaleX: panelsOpen ? [0, 2.5, 0] : 0
            }}
            transition={{ duration: 2.2, ease: "easeInOut", times: [0, 0.35, 1] }}
            className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-32 bg-gradient-to-r from-transparent via-[#FFF2A3] to-transparent mix-blend-screen pointer-events-none z-[55] blur-md"
          />

          <div className="fixed inset-0 z-50 flex overflow-hidden pointer-events-none select-none">
            {/* Left Panel */}
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: panelsOpen ? "-100%" : "0%" }}
              transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
              className="w-1/2 h-full border-r border-[#C59B27]/40 flex flex-col justify-between overflow-hidden shadow-2xl relative"
              style={{
                transformStyle: "preserve-3d",
                background: "radial-gradient(circle at 100% 50%, #4A050B 40%, #1A0103 100%)",
              }}
            >
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#C59B27]/40 rounded-tl" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#C59B27]/40 rounded-bl" />
              
              {/* Split emblem at the center right (meeting edge) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                <LotusMedallion size={110} />
              </div>
              
              {/* Jasmine strings hanging */}
              <div className="absolute top-0 right-4 w-[1px] h-32 bg-dashed border-l border-[#C59B27]/20 opacity-45" />
            </motion.div>

            {/* Right Panel */}
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: panelsOpen ? "100%" : "0%" }}
              transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
              className="w-1/2 h-full border-l border-[#C59B27]/40 flex flex-col justify-between overflow-hidden shadow-2xl relative"
              style={{
                transformStyle: "preserve-3d",
                background: "radial-gradient(circle at 0% 50%, #4A050B 40%, #1A0103 100%)",
              }}
            >
              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#C59B27]/40 rounded-tr" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#C59B27]/40 rounded-br" />
              
              {/* Split emblem at the center left (meeting edge) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <LotusMedallion size={110} />
              </div>

              {/* Jasmine strings hanging */}
              <div className="absolute top-0 left-4 w-[1px] h-32 bg-dashed border-l border-[#C59B27]/20 opacity-45" />
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
}
