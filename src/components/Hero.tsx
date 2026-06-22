"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Diya from "./Diya";
import TempleBell from "./TempleBell";
import Toran from "./Toran";
import BananaLeaves from "./BananaLeaves";
import { LotusMedallion, TwinPeacocks, TempleArch, TemplePillar } from "./TraditionalOrnaments";

export default function Hero() {
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
    <section className="relative min-h-screen flex flex-col justify-between items-center px-4 py-12 overflow-hidden select-none text-[#42040B] text-center border-b border-[#C59B27]/30 bg-transparent">
      
      {/* 1. Temple Pillars framing the content left and right */}
      <div className="absolute left-2.5 top-10 bottom-6 z-10 opacity-30 md:opacity-85 pointer-events-none">
        <TemplePillar height={700} />
      </div>
      <div className="absolute right-2.5 top-10 bottom-6 z-10 opacity-30 md:opacity-85 pointer-events-none scale-x-[-1]">
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

      {/* 3. Temple Gopuram silhouette in background */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[450px] h-[360px] flex items-center justify-center pointer-events-none z-0">
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
        
        {/* ================= REVEAL SEQUENCE: FLORAL CURTAINS ================= */}
        {/* Left Curtain */}
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: "-100%" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1], delay: 0.4 }}
          className="absolute inset-y-0 left-0 w-1/2 bg-[#5E0914] border-r border-[#C59B27] z-30 flex justify-end items-center pointer-events-none shadow-2xl overflow-hidden"
          style={{
            background: "radial-gradient(circle at 100% 50%, #5E0914 50%, #300206 100%)",
          }}
        >
          {/* Silk Texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=\x220 0 200 200\x22 xmlns=\x22http://www.w3.org/2000/svg\x22%3E%3Cfilter id=\x22noise\x22%3E%3CfeTurbulence type=\x22fractalNoise\x22 baseFrequency=\x220.85\x22 numOctaves=\x223\x22/%3E%3C/filter%3E%3Crect width=\x22100%25\x22 height=\x22100%25\x22 filter=\x22url(%23noise)\x22/%3E%3C/svg%3E')]" />
          
          {/* Gold foil floral borders on right edge of left curtain */}
          <div className="absolute right-0 top-0 bottom-0 w-8 opacity-25 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFF2A3] via-[#C59B27] to-transparent bg-repeat-y" style={{ backgroundSize: "32px 32px" }} />
          
          {/* Vertical Marigold and Jasmine Garland on edge */}
          <div className="h-full w-2.5 flex flex-col justify-around py-4 z-40 border-r border-[#C59B27]/40 pr-0.5">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E58F12] shadow-sm" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
              </div>
            ))}
          </div>
          
          {/* Gold Crest Embossed Watermark */}
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 scale-75 opacity-15">
            <LotusMedallion size={180} />
          </div>
        </motion.div>

        {/* Right Curtain */}
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1], delay: 0.4 }}
          className="absolute inset-y-0 right-0 w-1/2 bg-[#5E0914] border-l border-[#C59B27] z-30 flex justify-start items-center pointer-events-none shadow-2xl overflow-hidden"
          style={{
            background: "radial-gradient(circle at 0% 50%, #5E0914 50%, #300206 100%)",
          }}
        >
          {/* Silk Texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=\x220 0 200 200\x22 xmlns=\x22http://www.w3.org/2000/svg\x22%3E%3Cfilter id=\x22noise\x22%3E%3CfeTurbulence type=\x22fractalNoise\x22 baseFrequency=\x220.85\x22 numOctaves=\x223\x22/%3E%3C/filter%3E%3Crect width=\x22100%25\x22 height=\x22100%25\x22 filter=\x22url(%23noise)\x22/%3E%3C/svg%3E')]" />

          {/* Gold foil floral borders on left edge of right curtain */}
          <div className="absolute left-0 top-0 bottom-0 w-8 opacity-25 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFF2A3] via-[#C59B27] to-transparent bg-repeat-y" style={{ backgroundSize: "32px 32px" }} />

          {/* Vertical Marigold and Jasmine Garland on edge */}
          <div className="h-full w-2.5 flex flex-col justify-around py-4 z-40 border-l border-[#C59B27]/40 pl-0.5">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E58F12] shadow-sm" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
              </div>
            ))}
          </div>

          {/* Gold Crest Embossed Watermark */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 scale-75 opacity-15">
            <LotusMedallion size={180} />
          </div>
        </motion.div>
        {/* ==================================================================== */}

        {/* 6. Sacred Blessings Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-telugu text-[#5E0914] text-xs md:text-sm font-bold tracking-widest leading-relaxed mb-3 space-y-0.5 z-10"
        >
          <p className="gold-foil-text text-sm">శ్రీరస్తు !</p>
          <p>శుభమస్తు !!</p>
          <p>కళ్యాణమస్తు !!!</p>
        </motion.div>

        {/* 7. Twin Peacocks Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="w-full flex justify-center mb-2 z-10"
        >
          <TwinPeacocks width={250} height={60} className="w-60 h-14" />
        </motion.div>

        {/* 8. Royal Name Mandap Container */}
        <div className="relative py-4 px-4 w-full flex flex-col items-center justify-center min-h-[280px] z-10">
          
          {/* Radial gold aura behind names */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.22] pointer-events-none">
            <LotusMedallion size={250} className="animate-sway-slow" />
          </div>
          
          {/* Glowing aura halo */}
          <div className="absolute w-44 h-44 rounded-full bg-[#FFA500]/5 blur-3xl -z-20 pointer-events-none" />

          {/* Names Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="space-y-1.5"
          >
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
          </motion.div>
        </div>

        {/* 9. Engraved Wedding Date */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mb-6 relative z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#A67C1E] via-[#FFF2A3] to-[#A67C1E] blur-[1px] rounded-sm opacity-20" />
          <span className="font-cormorant text-lg md:text-xl font-bold tracking-widest text-[#5E0914] border-y-2 border-[#C59B27] py-1 px-5 inline-block bg-[#FDFBF7]/95 relative z-10">
            July 5, 2026
          </span>
        </motion.div>

        {/* 10. Live Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.6 }}
          className="w-full px-4 mb-2 z-10"
        >
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
        </motion.div>
      </div>

      {/* 11. Bottom Decorative Diyas & Unroll Indicator */}
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
