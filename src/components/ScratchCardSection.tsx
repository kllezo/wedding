"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import TempleBell from "./TempleBell";
import ScratchCard from "./ScratchCard";

gsap.registerPlugin(ScrollTrigger);

// ─── Countdown ────────────────────────────────────────────────────────────
const WEDDING_DATE = new Date("2026-07-05T08:05:00+05:30");

function useCountdown() {
  const calc = () => {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return { d, h, m, s };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return time;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div
        className="font-playfair font-extrabold text-[#5E0914] leading-none"
        style={{ fontSize: "clamp(22px, 7vw, 32px)" }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div className="font-cormorant text-[8px] uppercase tracking-[0.2em] text-[#C59B27] font-bold">
        {label}
      </div>
    </div>
  );
}

function WeddingCountdown() {
  const { d, h, m, s } = useCountdown();
  return (
    <div className="mt-5 pt-4 border-t border-[#C59B27]/25">
      <p className="font-cormorant text-[9px] uppercase tracking-[0.25em] text-[#C59B27] font-bold text-center mb-3">
        Counting Down To The Muhurtham
      </p>
      <div className="flex items-center justify-center gap-3">
        <CountdownUnit value={d} label="Days" />
        <span className="font-playfair text-[#C59B27] text-xl font-bold mb-2">:</span>
        <CountdownUnit value={h} label="Hrs" />
        <span className="font-playfair text-[#C59B27] text-xl font-bold mb-2">:</span>
        <CountdownUnit value={m} label="Min" />
        <span className="font-playfair text-[#C59B27] text-xl font-bold mb-2">:</span>
        <CountdownUnit value={s} label="Sec" />
      </div>
    </div>
  );
}

const RosePetalSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2 C6 6, 3 10, 10 18 C17 10, 14 6, 10 2 Z" fill="#900C3F" />
  </svg>
);

const JasminePetalSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="10" cy="10" rx="4" ry="8" fill="#FFFDF0" />
    <circle cx="10" cy="17" r="1.5" fill="#E67E22" />
  </svg>
);

export default function ScratchCardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const silhouetteRef = useRef<HTMLImageElement>(null);
  const petalsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const [isScratched, setIsScratched] = useState(false);

  const lampLeftRef = useRef<HTMLDivElement>(null);
  const lampRightRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax ratios:
      // Temple Silhouette: 0.3x -> -120px
      // Background Artwork: 0.5x -> -200px
      // Petals: 1.8x -> -720px
      // Particles: 2.2x -> -880px
      gsap.to(bgImageRef.current, {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

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

      // Lamp stands glow-up animation on scroll
      const lamps = [lampLeftRef.current, lampRightRef.current];
      gsap.fromTo(lamps, 
        { opacity: 0.15 },
        { 
          opacity: 0.85, 
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "center 40%",
            scrub: 1,
          }
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative px-4 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/30"
    >
      {/* ================= PARALLAX BACKGROUND LAYER ================= */}
      <div 
        ref={bgImageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center opacity-[0.10] mix-blend-multiply pointer-events-none z-0 will-change-transform"
        style={{ backgroundImage: "url('/images/bg-img-2.jpg')" }}
      />

      {/* Temple Silhouette Watermark */}
      <img
        ref={silhouetteRef}
        src="/images/temple-silhouette.png"
        alt="Temple Silhouette"
        className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[110%] max-w-screen-md aspect-[1000/350] pointer-events-none opacity-[0.12] mix-blend-screen z-0 will-change-transform"
      />

      {/* Decorative vertical jasmine cords on sides */}
      <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-dashed border-l border-[#C59B27]/20 pointer-events-none opacity-40" />
      <div className="absolute top-0 bottom-0 right-4 w-[1px] bg-dashed border-l border-[#C59B27]/20 pointer-events-none opacity-40" />

      {/* Section Header */}
      <div className="flex flex-col items-center mb-12 text-center z-25 relative">
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
          శుభ ముహూర్తం
        </h2>
        
        <div className="flex items-center gap-1.5 w-32">
          <div className="h-[0.8px] flex-1 bg-gradient-to-r from-transparent to-[#C59B27]" />
          <span className="text-[#C59B27] text-[10px]">✦</span>
          <div className="h-[0.8px] flex-1 bg-gradient-to-l from-transparent to-[#C59B27]" />
        </div>
      </div>

      {/* Center 3D perspective Container */}
      <div 
        className="w-full max-w-sm relative flex flex-col items-center z-25 px-2"
        style={{ perspective: 1200 }}
      >
        {/* Twin Scroll-lit Brass Lamp stands flanking the Muhurtham card */}
        {/* Left Lamp Stand */}
        <div 
          ref={lampLeftRef}
          className="absolute left-[-32px] bottom-12 w-6 h-36 pointer-events-none z-10 hidden sm:flex flex-col justify-end items-center opacity-15"
        >
          <svg width="14" height="100" viewBox="0 0 14 100" fill="#8A640F">
            <defs>
              <linearGradient id="lampGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8A640F" />
                <stop offset="25%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#FFF2A3" />
                <stop offset="75%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#8A640F" />
              </linearGradient>
            </defs>
            <rect x="6" y="10" width="2" height="80" fill="url(#lampGold)" />
            <ellipse cx="7" cy="90" rx="7" ry="3" fill="url(#lampGold)" />
            <ellipse cx="7" cy="10" rx="3.5" ry="1.8" fill="url(#lampGold)" />
            <path d="M1 30 H13 M2 50 H12 M3 70 H11" stroke="#8A640F" strokeWidth="0.8" />
          </svg>
          <div className="absolute top-1 w-1.5 h-4 bg-[#FF8C00] rounded-full blur-[0.8px] origin-bottom animate-flicker" />
          <div className="absolute top-[-4px] w-5 h-5 rounded-full bg-[#FF8C00]/15 blur-md -z-10" />
        </div>

        {/* Right Lamp Stand */}
        <div 
          ref={lampRightRef}
          className="absolute right-[-32px] bottom-12 w-6 h-36 pointer-events-none z-10 hidden sm:flex flex-col justify-end items-center opacity-15"
        >
          <svg width="14" height="100" viewBox="0 0 14 100" fill="#8A640F">
            <rect x="6" y="10" width="2" height="80" fill="url(#lampGold)" />
            <ellipse cx="7" cy="90" rx="7" ry="3" fill="url(#lampGold)" />
            <ellipse cx="7" cy="10" rx="3.5" ry="1.8" fill="url(#lampGold)" />
            <path d="M1 30 H13 M2 50 H12 M3 70 H11" stroke="#8A640F" strokeWidth="0.8" />
          </svg>
          <div className="absolute top-1 w-1.5 h-4 bg-[#FF8C00] rounded-full blur-[0.8px] origin-bottom animate-flicker" />
          <div className="absolute top-[-4px] w-5 h-5 rounded-full bg-[#FF8C00]/15 blur-md -z-10" />
        </div>

        {/* Muhurtham Card with Scratch Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="w-full bg-[#FDFBF7]/95 rounded-lg border-2 gold-foil-border shadow-2xl relative overflow-hidden"
          style={{
            background: "radial-gradient(circle, rgba(253,251,247,0.95) 50%, rgba(250,245,234,0.95) 100%)",
          }}
        >
          <ScratchCard onComplete={() => setIsScratched(true)}>
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
                  <div className="flex items-start gap-3.5 max-w-[230px] mx-auto text-left">
                    <div className="p-2 rounded bg-[#FAF6EC] border border-[#C59B27] text-[#C59B27] shadow-sm shrink-0 w-8 h-8 flex items-center justify-center">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-cormorant text-[10px] font-bold uppercase tracking-widest text-[#C59B27] leading-none mb-1">Date</h4>
                      <p className="font-playfair text-base font-extrabold text-[#5E0914] leading-tight">
                        Sunday, July 5, 2026
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-start gap-3.5 max-w-[230px] mx-auto text-left">
                    <div className="p-2 rounded bg-[#FAF6EC] border border-[#C59B27] text-[#C59B27] shadow-sm shrink-0 w-8 h-8 flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-cormorant text-[10px] font-bold uppercase tracking-widest text-[#C59B27] leading-none mb-1">Time</h4>
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

                  {/* Countdown — appears after scratch reveal */}
                  <WeddingCountdown /></div>
              </div>

            </div>
          </ScratchCard>
        </motion.div>
      </div>

      {/* ================= FOREGROUND PARALLAX LAYERS ================= */}
      <div 
        ref={petalsRef}
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden will-change-transform"
      >
        <RosePetalSVG className="absolute top-[15%] right-[8%] w-6 h-6 rotate-45 opacity-55" />
        <JasminePetalSVG className="absolute top-[45%] left-[5%] w-5 h-5 rotate-12 opacity-60" />
        <RosePetalSVG className="absolute top-[75%] right-[12%] w-5 h-5 -rotate-12 opacity-50" />
      </div>

      <div 
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden will-change-transform"
      >
        <div className="absolute top-[35%] left-[25%] w-2 h-2 rounded-full bg-[#FFF2A3] opacity-70 blur-[1px]" />
        <div className="absolute top-[70%] right-[22%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-65 blur-[0.5px]" />
      </div>
    </section>
  );
}
