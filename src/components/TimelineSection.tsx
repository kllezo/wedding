"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Diya from "./Diya";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const silhouetteRef = useRef<HTMLImageElement>(null);
  const petalsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax animations:
      // Temple Silhouette: 0.3x -> -120px
      // Petals: 1.8x -> -720px
      // Particles: 2.2x -> -880px
      gsap.to(silhouetteRef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      gsap.to(petalsRef.current, {
        y: -720,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      gsap.to(particlesRef.current, {
        y: -880,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const timelineItems = [
    {
      time: "08:05 AM",
      title: "Shubha Muhurtham",
      teluguTitle: "శుభ ముహూర్తం",
      description: "The sacred nuptial union (Jeelakarra Bellam & Mangalasutra Dharana).",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9.5" stroke="url(#timelineGold)" strokeWidth="1.5" />
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
            fill="url(#timelineGold)"
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
    <section 
      ref={sectionRef}
      className="relative px-4 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/20"
    >
      <defs>
        <linearGradient id="timelineGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A640F" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF2A3" />
          <stop offset="75%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A640F" />
        </linearGradient>
      </defs>

      {/* Temple Silhouette Watermark */}
      <img
        ref={silhouetteRef}
        src="/images/temple-silhouette.png"
        alt="Temple Silhouette"
        className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[110%] max-w-screen-md aspect-[1000/350] pointer-events-none opacity-[0.12] mix-blend-screen z-0 will-change-transform"
      />

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
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1.5px] bg-[#C59B27]/40 -translate-x-1/2 pointer-events-none z-0" />
        
        {/* Jasmine and Marigold buds overlapping along the thread */}
        <div className="absolute left-6 md:left-1/2 top-6 bottom-6 w-3 -translate-x-1/2 pointer-events-none z-10 flex flex-col justify-between py-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF] border border-[#C59B27]/50 shadow-sm" />
              <div className="w-2 h-2 rounded-full bg-[#E58F12] shadow-xs" />
            </div>
          ))}
        </div>

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
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-25 flex items-center justify-center w-11 h-11 rounded-full bg-[#FDFBF7] border-2 border-[#C59B27] shadow-md">
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

                    {/* Glowing micro-diya in the corner of the card */}
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

      {/* Parallax layers */}
      <div ref={petalsRef} className="absolute inset-0 pointer-events-none z-10 overflow-hidden will-change-transform">
        <svg className="absolute top-[30%] left-[8%] w-6 h-6 rotate-45 opacity-55" viewBox="0 0 20 20" fill="none">
          <path d="M10 2 C6 6, 3 10, 10 18 C17 10, 14 6, 10 2 Z" fill="#900C3F" />
        </svg>
        <svg className="absolute top-[70%] right-[8%] w-5 h-5 -rotate-12 opacity-60" viewBox="0 0 20 20" fill="none">
          <path d="M10 2 C6 6, 3 10, 10 18 C17 10, 14 6, 10 2 Z" fill="#900C3F" />
        </svg>
      </div>

      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10 overflow-hidden will-change-transform">
        <div className="absolute top-[40%] right-[20%] w-2 h-2 rounded-full bg-[#FFF2A3] opacity-65 blur-[1px]" />
        <div className="absolute top-[80%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-60 blur-[0.5px]" />
      </div>
    </section>
  );
}
