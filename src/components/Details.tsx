"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import QRPlaceholder from "./QRPlaceholder";
import { Kalasham } from "./TraditionalOrnaments";
import TempleBell from "./TempleBell";

export default function Details() {
  return (
    <section className="relative px-4 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/30">
      
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
          Wedding Ceremony
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

      {/* Main Container */}
      <div 
        className="w-full max-w-2xl flex flex-col gap-10 justify-center items-center z-10 px-2"
        style={{ perspective: 1000 }} // 3D Perspective Context
      >
        
        {/* ================= CHAPTER 4: SACRED MUHURTHAM ================= */}
        <div className="w-full relative">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full bg-[#FDFBF7] p-6 md:p-8 rounded-lg border-2 gold-foil-border shadow-xl relative overflow-hidden"
            style={{
              background: "radial-gradient(circle, #FDFBF7 50%, #FAF5EA 100%)",
            }}
          >
            {/* Corner brackets */}
            <div className="panel-corner-tl" />
            <div className="panel-corner-tr" />
            <div className="panel-corner-bl" />
            <div className="panel-corner-br" />

            {/* Inner dashed frames */}
            <div className="absolute inset-1.5 border border-dashed border-[#C59B27]/40 rounded pointer-events-none" />
            <div className="absolute inset-3.5 border border-[#C59B27]/15 rounded pointer-events-none" />

            {/* Hanging bells inside card */}
            <div className="absolute top-2 left-12 scale-50 opacity-30">
              <TempleBell size={40} chainLength={40} />
            </div>
            <div className="absolute top-2 right-12 scale-50 opacity-30">
              <TempleBell size={40} chainLength={25} />
            </div>

            {/* Twin Brass Lamp stands on sides that light up on scroll */}
            {/* Left Lamp Stand */}
            <div className="absolute left-3 bottom-6 w-8 h-28 pointer-events-none opacity-45 flex flex-col justify-end items-center">
              <svg width="18" height="90" viewBox="0 0 18 90" fill="#8A640F">
                <rect x="8" y="10" width="2" height="70" fill="url(#ornamentGold)" />
                <ellipse cx="9" cy="80" rx="9" ry="3" fill="url(#ornamentGold)" />
                <path d="M2 30 H16 M3 50 H15 M4 70 H14" stroke="#8A640F" strokeWidth="1" />
                {/* Lit oil cups */}
                <ellipse cx="9" cy="10" rx="3" ry="1.5" fill="url(#ornamentGold)" />
              </svg>
              {/* Flame particle that lights up */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: [0.8, 1.1, 0.9, 1], opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
                className="absolute top-1.5 w-2 h-4.5 bg-[#FF8C00] rounded-full blur-[0.8px] origin-bottom animate-flicker"
                style={{
                  boxShadow: "0 0 8px 3px rgba(255, 140, 0, 0.6), 0 0 15px 6px rgba(253, 240, 166, 0.3)",
                }}
              />
            </div>

            {/* Right Lamp Stand */}
            <div className="absolute right-3 bottom-6 w-8 h-28 pointer-events-none opacity-45 flex flex-col justify-end items-center">
              <svg width="18" height="90" viewBox="0 0 18 90" fill="#8A640F">
                <rect x="8" y="10" width="2" height="70" fill="url(#ornamentGold)" />
                <ellipse cx="9" cy="80" rx="9" ry="3" fill="url(#ornamentGold)" />
                <path d="M2 30 H16 M3 50 H15 M4 70 H14" stroke="#8A640F" strokeWidth="1" />
                <ellipse cx="9" cy="10" rx="3" ry="1.5" fill="url(#ornamentGold)" />
              </svg>
              {/* Flame particle that lights up */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: [0.8, 1.1, 0.9, 1], opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
                className="absolute top-1.5 w-2 h-4.5 bg-[#FF8C00] rounded-full blur-[0.8px] origin-bottom animate-flicker"
                style={{
                  boxShadow: "0 0 8px 3px rgba(255, 140, 0, 0.6), 0 0 15px 6px rgba(253, 240, 166, 0.3)",
                }}
              />
            </div>

            {/* Details Content (reveals/engraves after lighting up) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-center px-4"
            >
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

                {/* Engraved Astrology Details */}
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
            </motion.div>

          </motion.div>
        </div>

        {/* ================= CHAPTER 5: VENUE REVEAL (3D UNFOLD) ================= */}
        <div className="w-full flex flex-col items-center gap-6">
          
          {/* 3D Unfolding Paper Insert Card */}
          <motion.div
            initial={{ rotateX: -90, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="w-full bg-[#FAF5EB] p-6 md:p-8 rounded-lg border-2 border-[#C59B27]/70 shadow-2xl relative overflow-hidden origin-top"
            style={{
              background: "linear-gradient(135deg, #FAF5EB 0%, #F5EFEB 100%)",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Gold engraved panel borders */}
            <div className="absolute inset-1.5 border border-dashed border-[#C59B27]/30 rounded pointer-events-none" />
            <div className="absolute inset-3 border border-[#C59B27]/15 rounded pointer-events-none" />
            
            {/* Ornament corners */}
            <div className="panel-corner-tl opacity-65" />
            <div className="panel-corner-tr opacity-65" />
            <div className="panel-corner-bl opacity-65" />
            <div className="panel-corner-br opacity-65" />

            {/* Kalasham icon overlay watermark */}
            <div className="absolute top-2 right-4 opacity-10 scale-75">
              <Kalasham size={65} />
            </div>

            {/* Venue details */}
            <div className="text-center mb-6">
              <h3 className="font-telugu text-xl font-extrabold text-[#5E0914] mb-1">
                కళ్యాణ వేదిక
              </h3>
              <p className="font-cormorant text-[10px] tracking-wider text-[#C59B27] uppercase font-bold">
                Venue Location
              </p>
            </div>

            <div className="flex items-start gap-3.5 justify-center max-w-sm mx-auto">
              <div className="p-2.5 rounded bg-gradient-to-br from-[#A67C1E] to-[#FFF2A3] text-[#300206] shadow-md shrink-0 border border-[#C59B27]/40">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div className="text-left space-y-1.5">
                <h4 className="font-playfair text-base font-extrabold text-[#5E0914] tracking-wide leading-tight">
                  Sri Laxminarasimha Gardens
                </h4>
                <div className="font-telugu text-xs text-[#42040B] font-bold space-y-0.5 leading-normal">
                  <p>Alugunur</p>
                  <p>Warangal Road</p>
                  <p className="font-playfair text-[11px] text-[#5E0914] tracking-wider uppercase font-extrabold">
                    Karimnagar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* QR Code Location Insert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full flex justify-center"
          >
            <QRPlaceholder />
          </motion.div>

        </div>

      </div>

    </section>
  );
}
