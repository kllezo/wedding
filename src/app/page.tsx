"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Chapter1Welcome from "@/components/Chapter1Welcome";
import CardCover from "@/components/CardCover";
import MusicToggle from "@/components/MusicToggle";
import PetalRain from "@/components/PetalRain";
import GlobalBorder from "@/components/GlobalBorder";
import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import Details from "@/components/Details";
import Timeline from "@/components/Timeline";
import TeluguInvitation from "@/components/TeluguInvitation";
import Family from "@/components/Family";
import Footer from "@/components/Footer";

export default function Home() {
  // 0: Chapter 1 Sacred Welcome (Diya self-lights, dark temple background)
  // 1: Chapter 2 Gatefold Card Cover (closed doors, monogram seal button)
  // 2: Chapters 3-8 Revealed (continuous ivory parchment scroll)
  const [welcomeStep, setWelcomeStep] = useState<0 | 1 | 2>(0);

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
      <AnimatePresence mode="wait">
        {welcomeStep === 0 && (
          <motion.div
            key="welcome-step"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 pointer-events-auto"
          >
            <Chapter1Welcome onComplete={() => setWelcomeStep(1)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating flower petals raining in background (active after welcome screen) */}
      {welcomeStep >= 1 && <PetalRain />}

      {/* Opening experience - Gatefold Invitation Cover overlay */}
      {welcomeStep >= 1 && (
        <CardCover onOpen={handleOpenInvitation} />
      )}

      {/* Floating music toggle */}
      <MusicToggle autoPlayTrigger={isOpened} />

      {/* Persistent screen border system */}
      {welcomeStep >= 1 && <GlobalBorder />}

      {/* Main website content underneath the overlay doors */}
      {welcomeStep >= 1 && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpened ? 1 : 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full relative z-20 overflow-x-hidden pt-4 pb-4"
        >
          {/* Intricate decorative border framing content wrapper on desktop */}
          <div className="max-w-screen-md mx-auto relative px-3 md:px-0">
            <Hero />
            
            <Couple />
            
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

