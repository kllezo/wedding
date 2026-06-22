"use client";

import React from "react";
import { motion } from "framer-motion";
import { WeddingMonogram } from "./TraditionalOrnaments";

export default function Family() {
  return (
    <section className="relative px-4 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/20">
      
      {/* Background Ornament watermarks */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 w-32 h-32 opacity-[0.015] pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="#5E0914">
          <circle cx="50" cy="50" r="40" stroke="#5E0914" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M50 10 C50 10 30 40 50 90 C50 90 70 40 50 10 Z" />
          <path d="M10 50 C10 50 40 30 90 50 C90 50 40 70 10 50 Z" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-6 -translate-y-1/2 w-32 h-32 opacity-[0.015] pointer-events-none select-none scale-x-[-1]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="#5E0914">
          <circle cx="50" cy="50" r="40" stroke="#5E0914" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M50 10 C50 10 30 40 50 90 C50 90 70 40 50 10 Z" />
          <path d="M10 50 C10 50 40 30 90 50 C90 50 40 70 10 50 Z" strokeWidth="2" />
        </svg>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-12 text-center z-10"
      >
        <span className="font-playfair text-[10px] tracking-[0.25em] text-[#C59B27] uppercase font-bold mb-1.5">
          Warm Invitations
        </span>
        <h2 className="font-telugu text-3xl font-extrabold text-[#5E0914] mb-2.5">
          ఆహ్వానించువారు
        </h2>
        <div className="w-16 h-[1.5px] bg-[#C59B27]" />
      </motion.div>

      {/* Hosts Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-md bg-[#FDFBF7] p-6 md:p-8 rounded-lg border-2 gold-foil-border text-center shadow-[0_6px_22px_rgba(94,9,20,0.06)] relative z-10 overflow-hidden"
        style={{
          background: "radial-gradient(circle, #FDFBF7 60%, #FAF5EA 100%)",
        }}
      >
        {/* Inner dashed frames */}
        <div className="absolute inset-1.5 border border-dashed border-[#C59B27]/30 rounded pointer-events-none" />
        <div className="absolute inset-3 border border-[#C59B27]/15 rounded pointer-events-none" />

        {/* Corner leaf brackets */}
        <div className="panel-corner-tl opacity-65" />
        <div className="panel-corner-tr opacity-65" />
        <div className="panel-corner-bl opacity-65" />
        <div className="panel-corner-br opacity-65" />

        {/* Semi-transparent Wedding Monogram Crest Watermark */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.04] pointer-events-none">
          <WeddingMonogram size={200} />
        </div>

        {/* Content */}
        <h3 className="font-playfair text-xl md:text-2xl font-extrabold text-[#5E0914] mb-2 tracking-wide relative z-10 leading-tight">
          Thammishetty Saritha & Kishan
        </h3>
        
        {/* Decorative divider */}
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C59B27]/50 to-transparent mx-auto my-3.5" />

        {/* Subtext */}
        <p className="font-cormorant text-sm md:text-base text-[#42040B]/85 italic tracking-wider font-semibold relative z-10">
          With Family & Friends
        </p>
      </motion.div>

    </section>
  );
}
