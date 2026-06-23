"use client";

import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MusicToggle, { MusicToggleHandle } from "@/components/MusicToggle";
import PetalRain from "@/components/PetalRain";
import GlobalBorder from "@/components/GlobalBorder";
import Hero from "@/components/Hero";
import InvitationHero from "@/components/InvitationHero";
import ScratchCardSection from "@/components/ScratchCardSection";
import TimelineSection from "@/components/TimelineSection";
import EditorialSpread from "@/components/EditorialSpread";
import VenueSection from "@/components/VenueSection";
import FamilySection from "@/components/FamilySection";
import TeluguInvitation from "@/components/TeluguInvitation";
import Footer from "@/components/Footer";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const musicRef = useRef<MusicToggleHandle>(null);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-1000 ${
        !isOpened ? "h-screen overflow-hidden bg-[#170103]" : "parchment-bg kalamkari-watermark"
      }`}
    >
      {/* Floating flower petals and gold dust */}
      <PetalRain />

      {/* Persistent floating mute button — always visible */}
      <MusicToggle ref={musicRef} visible={true} />

      {/* Screen border (only after opening) */}
      {isOpened && <GlobalBorder />}

      <main className="w-full relative z-20 overflow-x-hidden">
        <AnimatePresence>
          {!isOpened ? (
            <motion.div
              key="hero-stage"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-screen overflow-hidden"
            >
              <Hero
                isOpened={isOpened}
                onOpen={handleOpenInvitation}
                musicRef={musicRef}
              />
            </motion.div>
          ) : (
            <motion.div
              key="invitation-stage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full pt-0 pb-4"
            >
              {/* Full viewport stage for doors sliding reveal */}
              <InvitationHero />

              {/* Centered content column */}
              <div className="max-w-screen-md mx-auto relative px-3 md:px-0 mt-4">
                <ScratchCardSection />
                <VenueSection />
                <EditorialSpread />
                <TimelineSection />
                <TeluguInvitation />
                <FamilySection />
                <Footer />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
