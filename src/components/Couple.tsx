"use client";

import React from "react";
import { motion } from "framer-motion";
import { LotusMedallion, BetelLeaves } from "./TraditionalOrnaments";

export default function Couple() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative px-6 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/30">
      
      {/* Decorative background Lotus watermarks */}
      <div className="absolute top-10 left-6 w-28 h-28 opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="#5E0914">
          <path d="M50 10 C45 35 15 45 50 90 C85 45 55 35 50 10 Z" />
          <path d="M50 25 C45 45 25 55 50 85 C75 55 55 45 50 25 Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-6 w-28 h-28 opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="#5E0914" className="rotate-180">
          <path d="M50 10 C45 35 15 45 50 90 C85 45 55 35 50 10 Z" />
          <path d="M50 25 C45 45 25 55 50 85 C75 55 55 45 50 25 Z" />
        </svg>
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-16 text-center z-10"
      >
        {/* Double peacock feather ornament above section header */}
        <div className="flex gap-4 justify-center mb-3 opacity-80">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="gold-glow">
            <path d="M12 22 Q 4 15 12 2 Q 20 15 12 22 Z" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
            <path d="M12 18 C14 15, 14 10, 12 6 C10 10, 10 15, 12 18 Z" fill="#5E0914" />
            <circle cx="12" cy="11" r="2.5" fill="#FFF2A3" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="gold-glow scale-x-[-1]">
            <path d="M12 22 Q 4 15 12 2 Q 20 15 12 22 Z" fill="url(#ornamentGold)" stroke="#300206" strokeWidth="0.8" />
            <path d="M12 18 C14 15, 14 10, 12 6 C10 10, 10 15, 12 18 Z" fill="#5E0914" />
            <circle cx="12" cy="11" r="2.5" fill="#FFF2A3" />
          </svg>
        </div>

        <span className="font-playfair text-[10px] tracking-[0.25em] text-[#C59B27] uppercase font-bold mb-2">
          Meet the Couple
        </span>
        <h2 className="font-telugu text-3xl font-bold text-[#5E0914] mb-3">
          వధూవరులు
        </h2>
        
        {/* Intricate line divider */}
        <div className="flex items-center gap-1.5 w-32">
          <div className="h-[0.8px] flex-1 bg-gradient-to-r from-transparent to-[#C59B27]" />
          <span className="text-[#C59B27] text-xs">✦</span>
          <div className="h-[0.8px] flex-1 bg-gradient-to-l from-transparent to-[#C59B27]" />
        </div>
      </motion.div>

      {/* Couple Cards Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-2xl flex flex-col md:flex-row gap-10 md:gap-8 justify-center items-stretch z-10 px-2"
      >
        {/* Bride Card - styled like a gold-foil print plate */}
        <motion.div
          variants={cardVariants}
          className="flex-1 bg-[#FDFBF7] p-8 rounded-lg border-2 gold-foil-border shadow-xl flex flex-col justify-between items-center text-center relative overflow-hidden"
          style={{
            background: "radial-gradient(circle, #FDFBF7 50%, #FAF5EA 100%)",
          }}
        >
          {/* Inner decorative frame line */}
          <div className="absolute inset-1.5 border border-dashed border-[#C59B27]/40 rounded pointer-events-none" />
          <div className="absolute inset-3 border border-[#C59B27]/15 rounded pointer-events-none" />

          {/* Intricate Gold Filigree Corner Brackets */}
          <div className="panel-corner-tl" />
          <div className="panel-corner-tr" />
          <div className="panel-corner-bl" />
          <div className="panel-corner-br" />

          {/* Gold Lotus Medallion */}
          <div className="mb-4 relative">
            <LotusMedallion size={70} />
          </div>

          <div className="mb-6 flex-1 flex flex-col justify-center relative">
            <span className="font-telugu text-[9px] tracking-widest text-[#C59B27] font-semibold uppercase mb-1.5">
              వధువు (Bride)
            </span>
            <h3 className="font-playfair text-2xl md:text-3xl font-extrabold text-[#5E0914] mb-3 tracking-wide">
              Sai Jyoshna
            </h3>
            
            <div className="w-16 h-[0.5px] bg-[#C59B27]/40 mx-auto mb-4" />

            <h4 className="font-telugu text-sm text-[#42040B] font-bold leading-relaxed">
              D/o. Thammishetty Saritha & Kishan
            </h4>
          </div>

          <div className="mt-2 text-[10px] font-cormorant tracking-widest uppercase text-[#C59B27] font-bold">
            ♥ Beautiful & Graceful ♥
          </div>
        </motion.div>

        {/* Traditional Betel Leaf Union Divider (visible on desktop) */}
        <div className="hidden md:flex flex-col items-center justify-center gap-2 px-2">
          <BetelLeaves size={60} />
          <span className="font-playfair text-lg gold-foil-text font-bold animate-pulse">
            &
          </span>
        </div>

        {/* Groom Card */}
        <motion.div
          variants={cardVariants}
          className="flex-1 bg-[#FDFBF7] p-8 rounded-lg border-2 gold-foil-border shadow-xl flex flex-col justify-between items-center text-center relative overflow-hidden"
          style={{
            background: "radial-gradient(circle, #FDFBF7 50%, #FAF5EA 100%)",
          }}
        >
          {/* Inner decorative frame line */}
          <div className="absolute inset-1.5 border border-dashed border-[#C59B27]/40 rounded pointer-events-none" />
          <div className="absolute inset-3 border border-[#C59B27]/15 rounded pointer-events-none" />

          {/* Intricate Gold Filigree Corner Brackets */}
          <div className="panel-corner-tl" />
          <div className="panel-corner-tr" />
          <div className="panel-corner-bl" />
          <div className="panel-corner-br" />

          {/* Gold Lotus Medallion */}
          <div className="mb-4 relative">
            <LotusMedallion size={70} />
          </div>

          <div className="mb-6 flex-1 flex flex-col justify-center relative">
            <span className="font-telugu text-[9px] tracking-widest text-[#C59B27] font-semibold uppercase mb-1.5">
              వరుడు (Groom)
            </span>
            <h3 className="font-playfair text-2xl md:text-3xl font-extrabold text-[#5E0914] mb-3 tracking-wide">
              Vikram
            </h3>
            
            <div className="w-16 h-[0.5px] bg-[#C59B27]/40 mx-auto mb-4" />

            <h4 className="font-telugu text-sm text-[#42040B] font-bold leading-relaxed">
              S/o. Alladi Nagesh & Manjula
            </h4>
          </div>

          <div className="mt-2 text-[10px] font-cormorant tracking-widest uppercase text-[#C59B27] font-bold">
            ♥ Noble & Righteous ♥
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
}