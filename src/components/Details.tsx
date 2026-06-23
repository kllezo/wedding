"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import QRPlaceholder from "./QRPlaceholder";
import { Kalasham } from "./TraditionalOrnaments";
import TempleBell from "./TempleBell";
import ScratchCard from "./ScratchCard";

export default function Details() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [venueOpen, setVenueOpen] = useState(false);

  // Track scroll progress for the lighting up of the brass lamps
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const springConfig = { damping: 15, stiffness: 70 };

  // Map scroll progress to lamp brightness and glow scaling
  const lampOpacity = useTransform(scrollYProgress, [0.1, 0.55], [0.15, 0.65]);
  const lampOpacitySpring = useSpring(lampOpacity, springConfig);

  const flameScale = useTransform(scrollYProgress, [0.1, 0.55], [0.4, 1.25]);
  const flameScaleSpring = useSpring(flameScale, springConfig);

  const glowScale = useTransform(scrollYProgress, [0.1, 0.55], [0.3, 1.6]);
  const glowScaleSpring = useSpring(glowScale, springConfig);

  // Venue drag callback snapping open
  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.y < -50) {
      setVenueOpen(true);
    } else if (info.offset.y > 50) {
      setVenueOpen(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative px-4 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/30"
    >
      {/* Decorative vertical jasmine cords on sides */}
      <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-dashed border-l border-[#C59B27]/20 pointer-events-none opacity-40" />
      <div className="absolute top-0 bottom-0 right-4 w-[1px] bg-dashed border-l border-[#C59B27]/20 pointer-events-none opacity-40" />

      {/* Chapter 4 & 5 Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-12 text-center z-10"
      >
        <div className="flex gap-2 justify-center mb-2.5">
          <svg width="40" height="15" viewBox="0 0 40 15" fill="none">
            <path d="M0 0 Q 10 12 20 0 Q 30 12 40 0" stroke="#C59B27" strokeWidth="1.5" />
            <path d="M10 5 L10 15 M30 5 L30 15" stroke="#2E7D32" strokeWidth="2" />
          </svg>
        </div>

        <span className="font-playfair text-[10px] tracking-[0.25em] text-[#C59B27] uppercase font-bold mb-1.5">
          Ceremony & Details
        </span>
        <h2 className="font-telugu text-3xl font-extrabold text-[#5E0914] mb-2.5">
          శుభ ముహూర్తం & వేదిక
        </h2>
        
        <div className="flex items-center gap-1.5 w-32">
          <div className="h-[0.8px] flex-1 bg-gradient-to-r from-transparent to-[#C59B27]" />
          <span className="text-[#C59B27] text-[10px]">✦</span>
          <div className="h-[0.8px] flex-1 bg-gradient-to-l from-transparent to-[#C59B27]" />
        </div>
      </motion.div>

      {/* Main Grid Container with 3D perspective */}
      <div 
        className="w-full max-w-2xl flex flex-col md:flex-row gap-10 justify-center items-stretch z-10 px-2"
        style={{ perspective: 1200 }}
      >
        
        {/* ================= CHAPTER 4: SACRED MUHURTHAM (SCRATCH CARD) ================= */}
        <div className="flex-1 w-full relative flex flex-col items-center">
          
          {/* Twin Scroll-lit Brass Lamp stands flanking the Muhurtham card */}
          {/* Left Lamp Stand */}
          <motion.div 
            style={{ opacity: lampOpacitySpring }}
            className="absolute left-[-24px] bottom-10 w-6 h-36 pointer-events-none z-10 hidden sm:flex flex-col justify-end items-center"
          >
            <svg width="14" height="100" viewBox="0 0 14 100" fill="#8A640F">
              <rect x="6" y="10" width="2" height="80" fill="url(#ornamentGold)" />
              <ellipse cx="7" cy="90" rx="7" ry="3" fill="url(#ornamentGold)" />
              <ellipse cx="7" cy="10" rx="3.5" ry="1.8" fill="url(#ornamentGold)" />
              <path d="M1 30 H13 M2 50 H12 M3 70 H11" stroke="#8A640F" strokeWidth="0.8" />
            </svg>
            {/* Scroll-lit Flame */}
            <motion.div
              style={{ scale: flameScaleSpring }}
              className="absolute top-1 w-1.5 h-4 bg-[#FF8C00] rounded-full blur-[0.8px] origin-bottom animate-flicker"
            />
            {/* Halo glow */}
            <motion.div
              style={{ scale: glowScaleSpring }}
              className="absolute top-[-4px] w-5 h-5 rounded-full bg-[#FF8C00]/15 blur-md -z-10"
            />
          </motion.div>

          {/* Right Lamp Stand */}
          <motion.div 
            style={{ opacity: lampOpacitySpring }}
            className="absolute right-[-24px] bottom-10 w-6 h-36 pointer-events-none z-10 hidden sm:flex flex-col justify-end items-center"
          >
            <svg width="14" height="100" viewBox="0 0 14 100" fill="#8A640F">
              <rect x="6" y="10" width="2" height="80" fill="url(#ornamentGold)" />
              <ellipse cx="7" cy="90" rx="7" ry="3" fill="url(#ornamentGold)" />
              <ellipse cx="7" cy="10" rx="3.5" ry="1.8" fill="url(#ornamentGold)" />
              <path d="M1 30 H13 M2 50 H12 M3 70 H11" stroke="#8A640F" strokeWidth="0.8" />
            </svg>
            <motion.div
              style={{ scale: flameScaleSpring }}
              className="absolute top-1 w-1.5 h-4 bg-[#FF8C00] rounded-full blur-[0.8px] origin-bottom animate-flicker"
            />
            <motion.div
              style={{ scale: glowScaleSpring }}
              className="absolute top-[-4px] w-5 h-5 rounded-full bg-[#FF8C00]/15 blur-md -z-10"
            />
          </motion.div>

          {/* Muhurtham Altar Card with Scratch Overlay */}
          <div
            className="w-full bg-[#FDFBF7] rounded-lg border-2 gold-foil-border shadow-xl relative overflow-hidden"
            style={{
              background: "radial-gradient(circle, #FDFBF7 50%, #FAF5EA 100%)",
            }}
          >
            <ScratchCard>
              <div className="p-6 md:p-8 relative">
                
                {/* Corner brackets */}
                <div className="panel-corner-tl" />
                <div className="panel-corner-tr" />
                <div className="panel-corner-bl" />
                <div className="panel-corner-br" />

                {/* Inner dashed frames */}
                <div className="absolute inset-1.5 border border-dashed border-[#C59B27]/40 rounded pointer-events-none" />
                <div className="absolute inset-3 border border-[#C59B27]/15 rounded pointer-events-none" />

                {/* Hanging bells inside card */}
                <div className="absolute top-2 left-10 scale-50 opacity-20">
                  <TempleBell size={40} chainLength={40} />
                </div>
                <div className="absolute top-2 right-10 scale-50 opacity-20">
                  <TempleBell size={40} chainLength={25} />
                </div>

                {/* Details Content */}
                <div className="text-center px-2">
                  <h3 className="font-telugu text-xl font-extrabold text-[#5E0914] mb-1.5 flex items-center justify-center gap-1.5">
                    <span className="gold-foil-text text-sm">✨</span>
                    శుభ ముహూర్తం
                    <span className="gold-foil-text text-sm">✨</span>
                  </h3>
                  <p className="font-cormorant text-[10px] tracking-wider text-[#C59B27] uppercase font-bold mb-6">
                    Auspicious Muhurtham
                  </p>

                  <div className="space-y-5 max-w-sm mx-auto">
                    {/* Date */}
                    <div className="flex items-center gap-3 justify-center text-left">
                      <div className="p-2 rounded bg-[#FAF6EC] border border-[#C59B27] text-[#C59B27] shadow-sm shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-cormorant text-[9px] font-bold uppercase tracking-wider text-[#5E0914]/75">Date</h4>
                        <p className="font-playfair text-base font-extrabold text-[#5E0914] leading-tight">
                          Sunday, July 5, 2026
                        </p>
                      </div>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-3 justify-center text-left">
                      <div className="p-2 rounded bg-[#FAF6EC] border border-[#C59B27] text-[#C59B27] shadow-sm shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-cormorant text-[9px] font-bold uppercase tracking-wider text-[#5E0914]/75">Time</h4>
                        <p className="font-playfair text-base font-extrabold text-[#5E0914] leading-tight">
                          8:05 AM
                        </p>
                      </div>
                    </div>

                    {/* Astrology Details */}
                    <div className="pt-4 border-t border-[#C59B27]/25 grid grid-cols-2 gap-3 text-center">
                      <div className="bg-[#FAF6EC]/80 p-2.5 rounded border border-[#C59B27]/20 shadow-inner">
                        <span className="font-cormorant text-[8px] font-bold uppercase tracking-wider text-[#5E0914]/70 block mb-0.5">
                          Nakshatram
                        </span>
                        <span className="font-telugu text-xs font-extrabold text-[#5E0914] block leading-tight">
                          శతభిష నక్షత్రం
                        </span>
                        <span className="font-cormorant text-[9px] text-[#C59B27] font-bold block">
                          Shathabhisha
                        </span>
                      </div>

                      <div className="bg-[#FAF6EC]/80 p-2.5 rounded border border-[#C59B27]/20 shadow-inner">
                        <span className="font-cormorant text-[8px] font-bold uppercase tracking-wider text-[#5E0914]/70 block mb-0.5">
                          Lagnam
                        </span>
                        <span className="font-telugu text-xs font-extrabold text-[#5E0914] block leading-tight">
                          కర్కాటక లగ్నం
                        </span>
                        <span className="font-cormorant text-[9px] text-[#C59B27] font-bold block">
                          Karkataka
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </ScratchCard>
          </div>

        </div>

        {/* ================= CHAPTER 5: VENUE REVEAL (PULL-OUT INSERT) ================= */}
        <div className="flex-1 w-full relative">
          
          {/* Card Pocket Sleeve (Envelope Outer) */}
          <div 
            className="w-full h-[320px] rounded-lg border-2 gold-foil-border shadow-2xl relative overflow-hidden flex flex-col justify-end select-none"
            style={{
              background: "radial-gradient(circle at 50% 100%, #4A050B 30%, #200103 100%)",
            }}
          >
            {/* Pocket inner sleeve shadows */}
            <div className="absolute inset-x-2 top-0 h-4 bg-gradient-to-b from-black/50 to-transparent z-25 pointer-events-none" />
            <div className="absolute inset-4 border border-[#C59B27]/20 rounded-md pointer-events-none" />
            
            {/* Sleeve decorative watermark logo */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-[0.06] pointer-events-none flex flex-col items-center">
              <Kalasham size={110} />
            </div>

            {/* Hint label on the envelope face */}
            <div className="absolute bottom-4 inset-x-0 text-center pointer-events-none z-20 flex flex-col items-center gap-0.5">
              <span className="font-telugu text-[9px] font-bold text-[#C59B27]/60 tracking-wider">
                కళ్యాణ వేదిక వివరాలు
              </span>
              <span className="font-cormorant text-[8px] font-bold uppercase tracking-[0.25em] text-[#FFF2A3]/50">
                Pull Up Insert Card
              </span>
            </div>

            {/* Draggable Venue Insert Card */}
            <motion.div
              drag="y"
              dragConstraints={{ top: -230, bottom: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              animate={{ y: venueOpen ? -220 : 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="absolute inset-x-3 bottom-0 bg-[#FAF5EB] rounded-t-md border-x border-t border-[#C59B27] shadow-[-2px_-10px_20px_rgba(0,0,0,0.5)] z-30 cursor-grab active:cursor-grabbing p-5"
              style={{
                background: "linear-gradient(to bottom, #FDFBF7 0%, #FAF5EA 100%)",
                height: "290px",
              }}
            >
              {/* Gold Ribbon / Tassel handle at top center of insert */}
              <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-6 h-6 z-40 pointer-events-none flex flex-col items-center">
                {/* Tassel handle ring */}
                <div className="w-4 h-4 rounded-full border-2 border-[#C59B27] bg-[#5E0914] shadow-sm flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFF2A3]" />
                </div>
                {/* Hanging ribbon tail */}
                <div className="w-0.5 h-3 bg-gradient-to-b from-[#C59B27] to-transparent" />
              </div>

              {/* Card inner frame lines */}
              <div className="absolute inset-1.5 border border-dashed border-[#C59B27]/30 rounded-t pointer-events-none" />
              <div className="absolute inset-3 border border-[#C59B27]/15 rounded-t pointer-events-none" />

              {/* Pull-out details */}
              <div className="text-center pt-2 select-text">
                <h3 className="font-telugu text-lg font-extrabold text-[#5E0914] mb-0.5 leading-tight">
                  కళ్యాణ వేదిక
                </h3>
                <p className="font-cormorant text-[9px] tracking-wider text-[#C59B27] uppercase font-bold mb-4">
                  Venue Location
                </p>

                <div className="space-y-3.5 max-w-xs mx-auto">
                  <div className="flex items-start gap-2.5 justify-center">
                    <div className="p-2 rounded bg-gradient-to-br from-[#A67C1E] to-[#FFF2A3] text-[#300206] shadow shrink-0 border border-[#C59B27]/30">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left space-y-1">
                      <h4 className="font-playfair text-sm font-extrabold text-[#5E0914] tracking-wide leading-tight">
                        Sri Laxminarasimha Gardens
                      </h4>
                      <div className="font-telugu text-[11px] text-[#42040B] font-bold space-y-0.5 leading-normal">
                        <p>Alugunur, Warangal Road</p>
                        <p className="font-playfair text-[10px] text-[#5E0914] tracking-wider uppercase font-extrabold">
                          Karimnagar
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Location Action Helper */}
                  <div className="pt-2 border-t border-[#C59B27]/20 flex justify-center">
                    <span className="font-cormorant text-[8px] font-bold tracking-[0.15em] text-[#C59B27] uppercase">
                      Drag insert down to tuck back
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* QR Code Location Insert (always displayed cleanly below the pocket sleeve) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full flex justify-center mt-6"
          >
            <QRPlaceholder />
          </motion.div>

        </div>

      </div>

    </section>
  );
}
