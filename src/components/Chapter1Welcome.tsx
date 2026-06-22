"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Diya from "./Diya";
import TempleBell from "./TempleBell";

interface Chapter1WelcomeProps {
  onComplete: () => void;
}

export default function Chapter1Welcome({ onComplete }: Chapter1WelcomeProps) {
  const [step, setStep] = useState(0); // 0: Ambient Welcome, 1: Transitioning

  useEffect(() => {
    // Stage 1: Ambient Welcome for 3.5 seconds
    const timer1 = setTimeout(() => {
      setStep(1);
    }, 4500);

    // Stage 2: Call completion callback after blessings fade out
    const timer2 = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between py-16 px-6 temple-dark-bg overflow-hidden select-none">
      
      {/* Swinging Temple Bells at top */}
      <div className="w-full flex justify-around items-start opacity-35 max-w-sm">
        <TempleBell size={50} chainLength={80} />
        <TempleBell size={60} chainLength={110} />
        <TempleBell size={50} chainLength={90} />
      </div>

      {/* Center Altar: blessings and self-lighting Diya */}
      <div className="flex-1 flex flex-col justify-center items-center gap-8 w-full max-w-md">
        
        {/* Blessings text (Chapter 1) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: step === 0 ? 1 : 0, y: step === 0 ? 0 : -20 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-telugu text-center text-[#FDF0A6] text-xl md:text-2xl font-bold tracking-widest leading-loose space-y-3"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            శ్రీరస్తు
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            శుభమస్తు
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
          >
            కళ్యాణమస్తు
          </motion.p>
        </motion.div>

        {/* Self-Lighting Brass Diya */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative"
        >
          {/* Diya Base */}
          <Diya size={80} />
          
          {/* Ambient lighting glow expanding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0.1, 0.4, 0.2, 0.4], scale: [0.9, 1.1, 1, 1.05] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#FF8C00]/10 rounded-full blur-2xl -z-10"
          />
        </motion.div>
      </div>

      {/* Bottom welcome tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: step === 0 ? 0.6 : 0 }}
        transition={{ duration: 1.2, delay: 1.5 }}
        className="font-cormorant text-[10px] tracking-[0.3em] text-[#C59B27] uppercase font-semibold"
      >
        A Divine Sacred Union
      </motion.div>
      
    </div>
  );
}
