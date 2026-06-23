"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Envelope from "@/components/Envelope";
import MusicToggle from "@/components/MusicToggle";
import PetalRain from "@/components/PetalRain";
import GlobalBorder from "@/components/GlobalBorder";
import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import EditorialSpread from "@/components/EditorialSpread";
import Details from "@/components/Details";
import Timeline from "@/components/Timeline";
import TeluguInvitation from "@/components/TeluguInvitation";
import Family from "@/components/Family";
import Footer from "@/components/Footer";

export default function Home() {
  // 0: Closed envelope (locked screen)
  // 2: Opened, scroll unlocked
  const [welcomeStep, setWelcomeStep] = useState<0 | 2>(0);

  const isOpened = welcomeStep === 2;

  const handleOpenInvitation = () => {
    setWelcomeStep(2);
  };

  return (
    <div
      className={`relative min-h-screen parchment-bg kalamkari-watermark transition-colors duration-1000 ${
        !isOpened ? "h-screen overflow-hidden" : ""
      }`}
    >
      <AnimatePresence>
        {welcomeStep === 0 && (
          <motion.div
            key="envelope-welcome"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 pointer-events-auto"
          >
            <Envelope onOpen={handleOpenInvitation} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating flower petals and gold dust raining in background */}
      {welcomeStep === 2 && <PetalRain />}

      {/* Floating music toggle (plays audio once the invitation is opened) */}
      <MusicToggle autoPlayTrigger={isOpened} />

      {/* Persistent screen border system */}
      {welcomeStep === 2 && <GlobalBorder />}

      {/* Main website content underneath */}
      {welcomeStep === 2 && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full relative z-20 overflow-x-hidden pt-4 pb-4"
        >
          {/* Intricate decorative border framing content wrapper on desktop */}
          <div className="max-w-screen-md mx-auto relative px-3 md:px-0">
            <Hero />
            
            <Couple />

            <EditorialSpread />
            
            <Details />
            
            <Timeline />
            
            <TeluguInvitation />
            
            <Family />
            
            <Footer />
          </div>
        </motion.main>
      )}
    </div>
  );
}


