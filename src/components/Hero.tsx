"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Diya from "./Diya";
import TempleBell from "./TempleBell";
import Toran from "./Toran";
import BananaLeaves from "./BananaLeaves";
import { LotusMedallion, TwinPeacocks, TempleArch, TemplePillar } from "./TraditionalOrnaments";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the hero section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { damping: 22, stiffness: 80 };

  // Parallax Layers offsets
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const bgYSpring = useSpring(bgY, springConfig);

  const fgY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const fgYSpring = useSpring(fgY, springConfig);

  // Scene 1: Temple doors sliding open on scroll
  const doorLeftX = useTransform(scrollYProgress, [0, 0.35], ["0%", "-102%"]);
  const doorRightX = useTransform(scrollYProgress, [0, 0.35], ["0%", "102%"]);
  const doorLeftXSpring = useSpring(doorLeftX, springConfig);
  const doorRightXSpring = useSpring(doorRightX, springConfig);

  // Scene 2 & 3: Parting Curtains & Names reveal on scroll
  const curtainLeftX = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "-105%"]);
  const curtainRightX = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "105%"]);
  const curtainLeftXSpring = useSpring(curtainLeftX, springConfig);
  const curtainRightXSpring = useSpring(curtainRightX, springConfig);

  const namesOpacity = useTransform(scrollYProgress, [0.45, 0.8], [0, 1]);
  const namesScale = useTransform(scrollYProgress, [0.45, 0.8], [0.85, 1]);
  const namesScaleSpring = useSpring(namesScale, springConfig);

  // Countdown timer calculation
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-07-05T08:05:00+05:30").getTime(); // IST Muhurtham

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[110vh] flex flex-col justify-between items-center px-4 py-12 select-none text-[#42040B] text-center border-b border-[#C59B27]/30 bg-transparent"
    >
      {/* ================= BACKGROUND PARALLAX LAYER ================= */}
      <motion.div 
        style={{ y: bgYSpring }} 
        className="absolute inset-0 pointer-events-none z-0 flex flex-col justify-between items-center"
      >
        {/* Temple Gopuram silhouette */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-[450px] h-[360px] flex items-center justify-center opacity-60">
          <TempleArch className="scale-[1.1] md:scale-125" />
        </div>
      </motion.div>

      {/* ================= MIDDLE ARCHITECTURE LAYER ================= */}
      {/* Temple Pillars framing the content left and right */}
      <div className="absolute left-2.5 top-10 bottom-6 z-10 opacity-30 md:opacity-85 pointer-events-none">
        <TemplePillar height={750} />
      </div>
      <div className="absolute right-2.5 top-10 bottom-6 z-10 opacity-30 md:opacity-85 pointer-events-none scale-x-[-1]">
        <TemplePillar height={750} />
      </div>

      {/* Top Hanging Torans */}
      <Toran className="absolute top-0 left-0 w-full z-15" count={12} />

      {/* ================= FOREGROUND PARALLAX LAYER ================= */}
      <motion.div 
        style={{ y: fgYSpring }} 
        className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-20 flex justify-between items-start px-8 py-16"
      >
        {/* Swaying brass bells */}
        <div className="absolute top-0 left-[18%] z-15 scale-75 md:scale-100">
          <TempleBell size={45} chainLength={75} />
        </div>
        <div className="absolute top-0 right-[18%] z-15 scale-75 md:scale-100">
          <TempleBell size={45} chainLength={55} />
        </div>

        {/* Hanging jasmine garlands from top */}
        <div className="absolute top-4 left-10 md:left-24 z-10 w-0.5 h-44 bg-dashed border-l border-[#C59B27]/30 flex flex-col items-center justify-around">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
          <div className="w-2 h-2 rounded-full bg-[#E58F12]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E58F12]" />
        </div>
        <div className="absolute top-4 right-10 md:right-24 z-10 w-0.5 h-44 bg-dashed border-l border-[#C59B27]/30 flex flex-col items-center justify-around">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
          <div className="w-2 h-2 rounded-full bg-[#E58F12]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E58F12]" />
        </div>
      </motion.div>

      {/* Banana Trees at bottom corners */}
      <div className="absolute bottom-6 left-5 z-10 pointer-events-none w-16 h-24 md:w-28 md:h-38 opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 100 150" fill="none">
          <path d="M50 150 Q 60 70 30 20 Q 75 30 70 60 Q 80 80 50 150 Z" fill="#1B5E20" opacity="0.35" />
          <path d="M50 150 Q 40 70 70 20 Q 25 30 30 60 Q 20 80 50 150 Z" fill="#2E7D32" opacity="0.35" />
          <path d="M48 150 Q 50 110 50 90 L 52 150 Z" stroke="#5D4037" strokeWidth="5" />
          <path d="M50 90 Q 20 70 10 90 M50 90 Q 80 70 90 90 M50 90 Q 15 50 5 60 M50 90 Q 85 50 95 60 M50 90 C50 60 40 40 50 30" stroke="#1B5E20" strokeWidth="2.5" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-5 z-10 pointer-events-none w-16 h-24 md:w-28 md:h-38 scale-x-[-1] opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 100 150" fill="none">
          <path d="M50 150 Q 60 70 30 20 Q 75 30 70 60 Q 80 80 50 150 Z" fill="#1B5E20" opacity="0.35" />
          <path d="M50 150 Q 40 70 70 20 Q 25 30 30 60 Q 20 80 50 150 Z" fill="#2E7D32" opacity="0.35" />
          <path d="M48 150 Q 50 110 50 90 L 52 150 Z" stroke="#5D4037" strokeWidth="5" />
          <path d="M50 90 Q 20 70 10 90 M50 90 Q 80 70 90 90 M50 90 Q 15 50 5 60 M50 90 Q 85 50 95 60 M50 90 C50 60 40 40 50 30" stroke="#1B5E20" strokeWidth="2.5" />
        </svg>
      </div>

      {/* ================= SCENE 1: SLIDING TEMPLE DOORS ================= */}
      {/* Left Temple Door */}
      <motion.div 
        style={{ x: doorLeftXSpring }}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#3A0307] border-r border-[#C59B27]/80 z-40 flex justify-end items-center overflow-hidden shadow-2xl"
      >
        {/* Door texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('data:image/svg+xml,%3Csvg viewBox=\x220 0 200 200\x22 xmlns=\x22http://www.w3.org/2000/svg\x22%3E%3Cfilter id=\x22noise\x22%3E%3CfeTurbulence type=\x22fractalNoise\x22 baseFrequency=\x220.8\x22/%3E%3C/filter%3E%3Crect width=\x22100%25\x22 height=\x22100%25\x22 filter=\x22url(%23noise)\x22/%3E%3C/svg%3E')]" />
        {/* Carved moldings */}
        <div className="absolute inset-4 border border-[#C59B27]/30 rounded-md" />
        <div className="absolute inset-6 border border-dashed border-[#C59B27]/20 rounded-md" />
        {/* Left Brass Ring Handle */}
        <svg className="w-12 h-12 mr-3 text-[#C59B27] drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] z-10" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="28" stroke="url(#ornamentGold)" strokeWidth="4" />
          <circle cx="50" cy="50" r="16" fill="url(#ornamentGold)" />
          <rect x="74" y="46" width="12" height="8" fill="url(#ornamentGold)" rx="2" />
        </svg>
      </motion.div>

      {/* Right Temple Door */}
      <motion.div 
        style={{ x: doorRightXSpring }}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#3A0307] border-l border-[#C59B27]/80 z-40 flex justify-start items-center overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 opacity-[0.05] bg-[url('data:image/svg+xml,%3Csvg viewBox=\x220 0 200 200\x22 xmlns=\x22http://www.w3.org/2000/svg\x22%3E%3Cfilter id=\x22noise\x22%3E%3CfeTurbulence type=\x22fractalNoise\x22 baseFrequency=\x220.8\x22/%3E%3C/filter%3E%3Crect width=\x22100%25\x22 height=\x22100%25\x22 filter=\x22url(%23noise)\x22/%3E%3C/svg%3E')]" />
        <div className="absolute inset-4 border border-[#C59B27]/30 rounded-md" />
        <div className="absolute inset-6 border border-dashed border-[#C59B27]/20 rounded-md" />
        {/* Right Brass Ring Handle */}
        <svg className="w-12 h-12 ml-3 text-[#C59B27] drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] z-10" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="28" stroke="url(#ornamentGold)" strokeWidth="4" />
          <circle cx="50" cy="50" r="16" fill="url(#ornamentGold)" />
          <rect x="14" y="46" width="12" height="8" fill="url(#ornamentGold)" rx="2" />
        </svg>
      </motion.div>

      {/* ================= MAIN CONTENT BLOCK ================= */}
      <div className="flex-1 flex flex-col justify-center items-center mt-12 md:mt-20 z-10 w-full max-w-md relative">
        
        {/* ================= SCENE 2: PARTING CURTAINS ================= */}
        {/* Left Curtain */}
        <motion.div
          style={{ x: curtainLeftXSpring }}
          className="absolute inset-y-0 left-0 w-1/2 bg-[#5E0914] border-r border-[#C59B27]/50 z-30 flex justify-end items-center pointer-events-none shadow-xl overflow-hidden"
        >
          {/* Silk texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=\x220 0 200 200\x22 xmlns=\x22http://www.w3.org/2000/svg\x22%3E%3Cfilter id=\x22noise\x22%3E%3CfeTurbulence type=\x22fractalNoise\x22 baseFrequency=\x220.85\x22/%3E%3C/filter%3E%3Crect width=\x22100%25\x22 height=\x22100%25\x22 filter=\x22url(%23noise)\x22/%3E%3C/svg%3E')]" />
          <div className="h-full w-2 flex flex-col justify-around py-4 z-40 pr-0.5">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E58F12]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Curtain */}
        <motion.div
          style={{ x: curtainRightXSpring }}
          className="absolute inset-y-0 right-0 w-1/2 bg-[#5E0914] border-l border-[#C59B27]/50 z-30 flex justify-start items-center pointer-events-none shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=\x220 0 200 200\x22 xmlns=\x22http://www.w3.org/2000/svg\x22%3E%3Cfilter id=\x22noise\x22%3E%3CfeTurbulence type=\x22fractalNoise\x22 baseFrequency=\x220.85\x22/%3E%3C/filter%3E%3Crect width=\x22100%25\x22 height=\x22100%25\x22 filter=\x22url(%23noise)\x22/%3E%3C/svg%3E')]" />
          <div className="h-full w-2 flex flex-col justify-around py-4 z-40 pl-0.5">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E58F12]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sacred Blessings Header */}
        <div className="font-telugu text-[#5E0914] text-xs md:text-sm font-bold tracking-widest leading-relaxed mb-3 space-y-0.5 z-10">
          <p className="gold-foil-text text-sm">శ్రీరస్తు !</p>
          <p>శుభమస్తు !!</p>
          <p>కళ్యాణమస్తు !!!</p>
        </div>

        {/* Twin Peacocks Emblem */}
        <div className="w-full flex justify-center mb-2 z-10">
          <TwinPeacocks width={250} height={60} className="w-60 h-14" />
        </div>

        {/* ================= SCENE 3: NAMES REVEAL ON SCROLL ================= */}
        <motion.div 
          style={{ opacity: namesOpacity, scale: namesScaleSpring }}
          className="relative py-4 px-4 w-full flex flex-col items-center justify-center min-h-[280px] z-10"
        >
          {/* Radial gold aura behind names */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.25] pointer-events-none">
            <LotusMedallion size={250} className="animate-sway-slow" />
          </div>
          
          <div className="absolute w-44 h-44 rounded-full bg-[#FFA500]/5 blur-3xl -z-20 pointer-events-none" />

          <div className="space-y-1.5">
            <h2 className="font-telugu text-[#5E0914]/80 text-xs md:text-sm font-bold tracking-wider">
              చి.ల.సౌ.
            </h2>
            <h1 className="font-playfair text-4xl md:text-5xl font-extrabold tracking-wide text-[#42040B] drop-shadow-md">
              Sai Jyoshna
            </h1>
            <div className="font-playfair text-xl md:text-2xl font-bold italic gold-foil-text my-0.5 animate-pulse">
              &
            </div>
            <h2 className="font-telugu text-[#5E0914]/80 text-xs md:text-sm font-bold tracking-wider">
              చి.
            </h2>
            <h1 className="font-playfair text-4xl md:text-5xl font-extrabold tracking-wide text-[#42040B] drop-shadow-md">
              Vikram
            </h1>
          </div>
        </motion.div>

        {/* Engraved Wedding Date */}
        <div className="mb-6 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#A67C1E] via-[#FFF2A3] to-[#A67C1E] blur-[1px] rounded-sm opacity-20" />
          <span className="font-cormorant text-lg md:text-xl font-bold tracking-widest text-[#5E0914] border-y-2 border-[#C59B27] py-1 px-5 inline-block bg-[#FDFBF7]/95 relative z-10">
            July 5, 2026
          </span>
        </div>

        {/* Live Countdown Timer */}
        <div className="w-full px-4 mb-2 z-10">
          <div className="grid grid-cols-4 gap-2 max-w-[260px] mx-auto">
            <div className="bg-[#FAF6EC]/90 border gold-foil-border p-1.5 rounded flex flex-col items-center shadow-md">
              <span className="font-playfair text-lg md:text-xl font-bold text-[#5E0914]">{timeLeft.days}</span>
              <span className="font-cormorant text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-[#5E0914]/80">Days</span>
            </div>
            <div className="bg-[#FAF6EC]/90 border gold-foil-border p-1.5 rounded flex flex-col items-center shadow-md">
              <span className="font-playfair text-lg md:text-xl font-bold text-[#5E0914]">{timeLeft.hours}</span>
              <span className="font-cormorant text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-[#5E0914]/80">Hours</span>
            </div>
            <div className="bg-[#FAF6EC]/90 border gold-foil-border p-1.5 rounded flex flex-col items-center shadow-md">
              <span className="font-playfair text-lg md:text-xl font-bold text-[#5E0914]">{timeLeft.minutes}</span>
              <span className="font-cormorant text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-[#5E0914]/80">Mins</span>
            </div>
            <div className="bg-[#FAF6EC]/90 border gold-foil-border p-1.5 rounded flex flex-col items-center shadow-md">
              <span className="font-playfair text-lg md:text-xl font-bold text-[#5E0914]">{timeLeft.seconds}</span>
              <span className="font-cormorant text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-[#5E0914]/80 animate-pulse">Secs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Diyas & Unroll Indicator */}
      <div className="w-full flex justify-between items-end px-8 mt-4 z-10 pointer-events-none">
        <Diya size={45} />
        
        <div className="flex flex-col items-center gap-1 opacity-75 animate-bounce">
          <span className="font-cormorant text-[8px] md:text-[9px] font-bold uppercase tracking-[0.25em] text-[#5E0914]">
            Scroll to Unfold
          </span>
          <div className="w-1.5 h-1.5 border-r border-b border-[#5E0914] transform rotate-45" />
        </div>

        <Diya size={45} />
      </div>

    </section>
  );
}
