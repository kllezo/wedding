"use client";

import React from "react";
import { motion } from "framer-motion";
import Diya from "./Diya";

export default function Timeline() {
  const timelineItems = [
    {
      time: "07:00 AM",
      title: "Guests Arrival",
      teluguTitle: "అతిథుల రాక",
      description: "Welcome drink & traditional breakfast served to guests.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2 C8 2, 6 6, 12 12 C18 6, 16 2, 12 2 Z"
            fill="url(#ornamentGold)"
            stroke="#300206"
            strokeWidth="0.5"
          />
          <path
            d="M12 12 Q9 15 12 22 Q15 15 12 12"
            fill="url(#ornamentGold)"
            stroke="#300206"
            strokeWidth="0.5"
          />
          <circle cx="12" cy="11" r="2.5" fill="#5E0914" />
        </svg>
      ),
    },
    {
      time: "08:05 AM",
      title: "Shubha Muhurtham",
      teluguTitle: "శుభ ముహూర్తం",
      description: "The sacred nuptial union (Jeelakarra Bellam & Mangalasutra Dharana).",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9.5" stroke="url(#ornamentGold)" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="7.5" stroke="#300206" strokeWidth="0.5" strokeDasharray="2 1" />
          <path
            d="M12 6 C12 6, 15 9.5, 15 12 C15 13.5, 9 13.5, 9 12 C9 9.5, 12 6, 12 6 Z"
            fill="#FF8C00"
          />
          <path
            d="M12 8 C12 8, 14 11, 14 12 C14 13, 10 13, 10 12 C10 11, 12 8, 12 8 Z"
            fill="#FFF2A3"
          />
        </svg>
      ),
    },
    {
      time: "12:15 PM",
      title: "Festive Telugu Wedding Lunch",
      teluguTitle: "విందు భోజనం",
      description: "A traditional royal South Indian wedding feast served on banana leaves.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 12 C4 8, 8 4, 20 4 C20 8, 16 20, 4 20 Z"
            fill="url(#ornamentGold)"
            stroke="#300206"
            strokeWidth="0.8"
          />
          <path
            d="M4 20 L20 4"
            stroke="#5E0914"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M8 12 L6 10 M12 10 L10 7 M15 13 L13 11 M11 16 L9 14 M17 9 L15 6"
            stroke="#5E0914"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative px-4 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/20">
      
      {/* Subtle vertical hanging jasmine strings on sides */}
      <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-dashed border-l border-[#C59B27]/15 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-4 w-[1px] bg-dashed border-l border-[#C59B27]/15 pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-16 text-center z-10"
      >
        <span className="font-playfair text-[10px] tracking-[0.25em] text-[#C59B27] uppercase font-bold mb-1.5">
          Wedding Events
        </span>
        <h2 className="font-playfair text-3xl font-bold text-[#5E0914] mb-2.5">
          కార్యక్రమ పట్టిక
        </h2>
        <div className="w-16 h-[1.5px] bg-[#C59B27]" />
      </motion.div>

      {/* Timeline Layout */}
      <div className="w-full max-w-md relative flex flex-col items-stretch z-10 px-2">
        
        {/* ================= STYLED CENTRAL GARLAND THREAD ================= */}
        {/* Vertical background thread */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1.5px] bg-[#C59B27]/40 -translate-x-1/2 pointer-events-none z-0" />
        
        {/* Jasmine and Marigold buds overlapping along the thread */}
        <div className="absolute left-6 md:left-1/2 top-6 bottom-6 w-3 -translate-x-1/2 pointer-events-none z-10 flex flex-col justify-between py-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF] border border-[#C59B27]/50 shadow-sm" />
              <div className="w-2 h-2 rounded-full bg-[#E58F12] shadow-xs" />
            </div>
          ))}
        </div>
        {/* ================================================================= */}

        {/* Timeline Items */}
        <div className="space-y-10 relative z-20">
          {timelineItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-55px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node circular medallion with custom vector icon */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-[#FDFBF7] border-2 border-[#C59B27] shadow-md">
                  {item.icon}
                </div>

                {/* Event Card Panel */}
                <div className={`pl-14 md:pl-0 w-full md:w-1/2 ${
                  isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                }`}>
                  
                  <div className="bg-[#FDFBF7]/90 p-5 rounded-lg border-2 border-[#C59B27]/25 shadow-sm backdrop-blur-[1px] hover:border-[#C59B27]/60 transition-all duration-300 relative group overflow-hidden">
                    
                    {/* Inner gold frame corners */}
                    <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#C59B27]/40" />
                    <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#C59B27]/40" />
                    <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#C59B27]/40" />
                    <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#C59B27]/40" />

                    {/* Glowing micro-diya in the top-right corner of the card */}
                    <div className={`absolute top-2.5 scale-[0.35] opacity-50 group-hover:opacity-100 transition-opacity duration-300 ${
                      isEven ? "left-2.5" : "right-2.5"
                    }`}>
                      <Diya size={40} />
                    </div>

                    {/* Tiny visual card triangle pointer pointing to Central Garland (desktop only) */}
                    <div className={`absolute top-4.5 w-2.5 h-2.5 bg-[#FDFBF7] border-l border-b border-[#C59B27]/25 rotate-45 hidden md:block ${
                      isEven ? "right-[-6px] border-l-0 border-b-0 border-r border-t" : "left-[-6px]"
                    }`} />
                    
                    {/* Event Time */}
                    <span className="font-playfair text-sm font-bold gold-foil-text block mb-1">
                      {item.time}
                    </span>

                    {/* Title */}
                    <h3 className="font-playfair text-base md:text-lg font-extrabold text-[#5E0914] mb-0.5 leading-snug">
                      {item.title}
                    </h3>
                    
                    {/* Telugu Title */}
                    <h4 className="font-telugu text-xs font-bold text-[#C59B27] tracking-wider mb-2">
                      {item.teluguTitle}
                    </h4>

                    {/* Description */}
                    <p className="font-cormorant text-xs md:text-sm text-[#42040B]/85 leading-relaxed font-semibold">
                      {item.description}
                    </p>
                  </div>

                </div>

                {/* Spacer block for desktop alignment */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}