"use client";

import React from "react";
import { motion } from "framer-motion";
import GaneshaSVG from "./GaneshaSVG";
import { WeddingMonogram } from "./TraditionalOrnaments";

export default function TeluguInvitation() {
  return (
    <section className="relative px-4 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/20">
      
      {/* Subtle vertical jasmine garland threads on sides */}
      <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-dashed border-l border-[#C59B27]/15 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-4 w-[1px] bg-dashed border-l border-[#C59B27]/15 pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-14 text-center z-10"
      >
        <span className="font-playfair text-[10px] tracking-[0.25em] text-[#C59B27] uppercase font-bold mb-1.5">
          Telugu Invitation
        </span>
        <h2 className="font-playfair text-3xl font-bold text-[#5E0914] mb-2.5">
          ఆహ్వాన పత్రిక
        </h2>
        <div className="w-16 h-[1.5px] bg-[#C59B27]" />
      </motion.div>

      {/* ================= CHAPTER 6: UNROLLED LUXURY SCROLL ================= */}
      <div className="w-full max-w-lg relative px-2 flex flex-col items-center">
        
        {/* Top Gold Scroll Roller Rod */}
        <div className="w-[108%] h-4 bg-gradient-to-b from-[#8A640F] via-[#FFF2A3] to-[#8A640F] rounded-full shadow-md z-20 flex justify-between items-center px-1 border border-[#300206]/40 relative">
          {/* Left Knobby Finial */}
          <div className="absolute left-[-12px] w-4 h-6 bg-gradient-to-r from-[#A67C1E] to-[#FFF2A3] rounded-l-md border border-[#300206]/50 shadow-sm" />
          {/* Right Knobby Finial */}
          <div className="absolute right-[-12px] w-4 h-6 bg-gradient-to-l from-[#A67C1E] to-[#FFF2A3] rounded-r-md border border-[#300206]/50 shadow-sm" />
        </div>

        {/* Scroll Parchment Sheet */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0.9, transformOrigin: "top" }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full bg-[#FDFBF7] p-6 md:p-10 border-x border-[#C59B27]/40 shadow-[0_12px_24px_rgba(94,9,20,0.06)] text-center relative overflow-hidden z-10 -mt-1 -mb-1"
          style={{
            background: "radial-gradient(circle, #FDFBF7 60%, #FAF5EA 100%)",
          }}
        >
          {/* Inner Dashed Border */}
          <div className="absolute inset-1.5 border border-dashed border-[#C59B27]/30 rounded-sm pointer-events-none" />
          <div className="absolute inset-3 border border-[#C59B27]/15 rounded-sm pointer-events-none" />
          
          {/* Panel corners */}
          <div className="panel-corner-tl opacity-65" />
          <div className="panel-corner-tr opacity-65" />
          <div className="panel-corner-bl opacity-65" />
          <div className="panel-corner-br opacity-65" />

          {/* Semi-transparent Wedding Monogram Crest Watermark behind text */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.06] pointer-events-none">
            <WeddingMonogram size={280} />
          </div>

          {/* Gold Ganesha Stamp at Top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.85, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <GaneshaSVG size={70} className="filter drop-shadow-[0_2px_4px_rgba(197,155,39,0.35)]" />
          </motion.div>

          {/* Decorative Divider */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C59B27]/50 to-transparent mx-auto mb-6 relative">
            <span className="absolute left-1/2 -translate-x-1/2 -top-1.5 text-[9px] text-[#C59B27] bg-[#FDFBF7] px-1">
              ❦
            </span>
          </div>

          {/* Telugu Text Placeholder Container */}
          <div className="py-8 px-4 border border-dashed border-[#C59B27]/25 bg-[#FAF7F0]/40 rounded shadow-inner">
            <p className="font-telugu text-[#5E0914] text-lg md:text-xl font-bold leading-loose tracking-wide select-text">
              పూర్తి తెలుగు ఆహ్వాన పత్రిక త్వరలో జోడించబడుతుంది
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C59B27]/50 to-transparent mx-auto mt-6 relative">
            <span className="absolute left-1/2 -translate-x-1/2 -top-1.5 text-[9px] text-[#C59B27] bg-[#FDFBF7] px-1">
              ❦
            </span>
          </div>
          
        </motion.div>

        {/* Bottom Gold Scroll Roller Rod */}
        <div className="w-[108%] h-4 bg-gradient-to-b from-[#8A640F] via-[#FFF2A3] to-[#8A640F] rounded-full shadow-md z-20 flex justify-between items-center px-1 border border-[#300206]/40 relative">
          {/* Left Knobby Finial */}
          <div className="absolute left-[-12px] w-4 h-6 bg-gradient-to-r from-[#A67C1E] to-[#FFF2A3] rounded-l-md border border-[#300206]/50 shadow-sm" />
          {/* Right Knobby Finial */}
          <div className="absolute right-[-12px] w-4 h-6 bg-gradient-to-l from-[#A67C1E] to-[#FFF2A3] rounded-r-md border border-[#300206]/50 shadow-sm" />
        </div>

      </div>

    </section>
  );
}
