"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

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

export default function VenueSection() {
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

  const mapsUrl = "https://maps.app.goo.gl/QS6nkVdNnEz4dJCz5?g_st=ic";

  return (
    <section 
      ref={sectionRef}
      className="relative px-4 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/30"
    >
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
          Ceremony & Venue
        </span>
        <h2 className="font-telugu text-3xl font-extrabold text-[#5E0914] mb-2.5">
          కళ్యాణ వేదిక
        </h2>
        
        <div className="flex items-center gap-1.5 w-32">
          <div className="h-[0.8px] flex-1 bg-gradient-to-r from-transparent to-[#C59B27]" />
          <span className="text-[#C59B27] text-[10px]">✦</span>
          <div className="h-[0.8px] flex-1 bg-gradient-to-l from-transparent to-[#C59B27]" />
        </div>
      </div>

      {/* Premium Card Layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="w-full max-w-md bg-[#FDFBF7] rounded-lg border-2 gold-foil-border shadow-2xl relative overflow-hidden p-6 md:p-8"
        style={{
          background: "radial-gradient(circle, rgba(253,251,247,0.98) 50%, rgba(250,245,234,0.98) 100%)",
        }}
      >
        {/* Subtle gold shimmer sweep */}
        <motion.div
          animate={{ x: ["-150%", "150%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear", repeatDelay: 2 }}
          className="absolute inset-y-0 w-[50%] pointer-events-none z-10"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,242,163,0.3) 50%, rgba(255,255,255,0) 100%)",
            transform: "skewX(-20deg)",
          }}
        />

        {/* Corner brackets */}
        <div className="panel-corner-tl" />
        <div className="panel-corner-tr" />
        <div className="panel-corner-bl" />
        <div className="panel-corner-br" />

        {/* Inner dashed frames */}
        <div className="absolute inset-1.5 border border-dashed border-[#C59B27]/30 rounded pointer-events-none" />
        <div className="absolute inset-3 border border-[#C59B27]/15 rounded pointer-events-none" />

        {/* Venue Details */}
        <div className="text-center relative z-20 flex flex-col items-center">
          <h3 className="font-telugu text-xl font-extrabold text-[#5E0914] mb-1 leading-tight">
            కళ్యాణ వేదిక
          </h3>
          <p className="font-cormorant text-[10px] tracking-wider text-[#C59B27] uppercase font-bold mb-6">
            Sri Laxminarasimha Gardens
          </p>

          <div className="flex flex-col items-center gap-6 w-full">
            {/* Address Block */}
            <div className="flex gap-3 items-start text-left max-w-xs bg-[#FAF6EC]/85 p-4 rounded border border-[#C59B27]/25 w-full shadow-inner">
              <div className="p-2 rounded bg-gradient-to-br from-[#A67C1E] to-[#FFF2A3] text-[#300206] shadow shrink-0 border border-[#C59B27]/30 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-playfair text-sm font-extrabold text-[#5E0914] tracking-wide leading-tight">
                  Sri Laxminarasimha Gardens
                </h4>
                <div className="font-telugu text-[11px] text-[#42040B] font-bold space-y-0.5 leading-normal">
                  <p>Alugunur, Warangal Road</p>
                  <p className="font-playfair text-[9.5px] text-[#5E0914] tracking-wider uppercase font-extrabold">
                    Karimnagar
                  </p>
                </div>
              </div>
            </div>

            {/* Actual QR Code Image */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="p-2.5 bg-[#FAF6EC] border-2 border-[#C59B27] rounded shadow-md w-[140px] h-[140px] flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/qr.jpeg" 
                  alt="Location Map QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-cormorant text-[8px] font-bold tracking-[0.2em] text-[#C59B27] uppercase">
                Scan to Navigate
              </span>
            </div>

            {/* Navigation Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-gradient-to-r from-[#A67C1E] via-[#FFF2A3] to-[#A67C1E] text-[#42040B] font-bold text-xs uppercase tracking-widest border border-[#8A640F]/40 shadow-md hover:shadow-lg transition-all"
            >
              <Navigation className="w-3.5 h-3.5" />
              Open Location
            </motion.a>
          </div>
        </div>
      </motion.div>

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
