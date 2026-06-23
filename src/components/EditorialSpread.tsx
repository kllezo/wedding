"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function EditorialSpread() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the gallery section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { damping: 18, stiffness: 60 };

  // Parallax offsets for the overlapping photos
  const yPhoto1 = useTransform(scrollYProgress, [0, 1], [0, 0]); // Anchor
  const yPhoto2 = useTransform(scrollYProgress, [0, 1], [50, -50]); // Slides up
  const yPhoto2Spring = useSpring(yPhoto2, springConfig);

  const yPhoto3 = useTransform(scrollYProgress, [0, 1], [-30, 40]); // Slides down
  const yPhoto3Spring = useSpring(yPhoto3, springConfig);

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [30, 0]);
  const textYSpring = useSpring(textY, springConfig);

  return (
    <section 
      ref={sectionRef}
      className="relative px-4 py-24 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/20"
    >
      
      {/* Decorative background grids/watermarks */}
      <div className="absolute top-1/3 left-10 w-40 h-40 opacity-[0.015] pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="#5E0914">
          <circle cx="50" cy="50" r="45" stroke="#5E0914" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-16 text-center z-10"
      >
        <span className="font-playfair text-[10px] tracking-[0.25em] text-[#C59B27] uppercase font-bold mb-1.5">
          Wedding Editorial
        </span>
        <h2 className="font-telugu text-3xl font-extrabold text-[#5E0914] mb-2.5">
          కళ్యాణ మహోత్సవం
        </h2>
        <div className="w-16 h-[1.5px] bg-[#C59B27]" />
      </motion.div>

      {/* Vogue Asymmetrical Photo Spread Layout */}
      <div className="w-full max-w-xl flex flex-col gap-12 relative z-10">
        
        {/* Row 1: Large Portrait Photo (Anchor) + Editorial Caption */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          
          {/* Main Portrait Frame */}
          <motion.div 
            style={{ y: yPhoto1 }}
            className="w-full md:w-[65%] bg-[#FDFBF7] p-3 rounded-lg border-2 gold-foil-border shadow-2xl relative"
          >
            {/* Film border */}
            <div className="absolute inset-1.5 border border-[#C59B27]/30 rounded" />
            
            <div className="relative aspect-[3/4] w-full rounded overflow-hidden">
              <Image 
                src="/images/couple_portrait_main.png" 
                alt="Sai Jyoshna & Vikram portrait"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 360px"
              />
            </div>
            
            {/* Fine print caption on card plate */}
            <div className="pt-2 text-center">
              <p className="font-cormorant text-[9px] tracking-wider uppercase text-[#C59B27] font-bold">
                Chapter I • Sacred Corridor of Union
              </p>
            </div>
          </motion.div>

          {/* Side Editorial Caption Text */}
          <motion.div 
            style={{ opacity: textOpacity, y: textYSpring }}
            className="w-full md:w-[35%] text-left space-y-4 md:pt-10"
          >
            <h3 className="font-playfair text-xl md:text-2xl font-extrabold italic text-[#5E0914] leading-tight">
              A Love Inscribed in Stone
            </h3>
            <p className="font-cormorant text-xs md:text-sm text-[#42040B]/85 leading-relaxed font-semibold">
              In the quiet temple arches, where pillars stand like witnesses to eternity, two hearts pledge a sacred alliance. 
            </p>
            <p className="font-telugu text-[10px] text-[#C59B27] font-bold tracking-wide">
              నూరు వసంతాల తోడుగా...
            </p>
          </motion.div>

        </div>

        {/* Row 2: Overlapping Landscape and Square Floating Photos */}
        <div className="flex justify-between items-start gap-6 mt-4 relative">
          
          {/* Photo 2: Hands Detail (Landscape, slides up) */}
          <motion.div 
            style={{ y: yPhoto2Spring }}
            className="w-[48%] bg-[#FDFBF7] p-2.5 rounded-lg border gold-foil-border shadow-xl relative mt-10 z-20"
          >
            <div className="absolute inset-1 border border-[#C59B27]/20 rounded" />
            <div className="relative aspect-[4/3] w-full rounded overflow-hidden">
              <Image 
                src="/images/couple_hands_detail.png" 
                alt="Joined hands ritual detail"
                fill
                className="object-cover"
                sizes="(max-w-768px) 50vw, 240px"
              />
            </div>
            <div className="pt-1.5 text-center">
              <p className="font-cormorant text-[8px] tracking-widest uppercase text-[#5E0914]/75 font-bold">
                Kanyadanam Ritual
              </p>
            </div>
          </motion.div>

          {/* Photo 3: Candid Laughing (Portrait/Square, slides down) */}
          <motion.div 
            style={{ y: yPhoto3Spring }}
            className="w-[45%] bg-[#FDFBF7] p-2.5 rounded-lg border gold-foil-border shadow-xl relative z-10"
          >
            <div className="absolute inset-1 border border-[#C59B27]/20 rounded" />
            <div className="relative aspect-square w-full rounded overflow-hidden">
              <Image 
                src="/images/couple_laughing_ritual.png" 
                alt="Candid wedding laughing moment"
                fill
                className="object-cover"
                sizes="(max-w-768px) 50vw, 220px"
              />
            </div>
            <div className="pt-1.5 text-center">
              <p className="font-cormorant text-[8px] tracking-widest uppercase text-[#5E0914]/75 font-bold">
                A Lifetime of Smiles
              </p>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
