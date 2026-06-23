"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WeddingMonogram, LotusMedallion } from "./TraditionalOrnaments";

gsap.registerPlugin(ScrollTrigger);

export default function FamilySection() {
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

  return (
    <section 
      ref={sectionRef}
      className="relative px-4 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/20"
    >
      {/* Temple Silhouette Watermark */}
      <img
        ref={silhouetteRef}
        src="/images/temple-silhouette.png"
        alt="Temple Silhouette"
        className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[110%] max-w-screen-md aspect-[1000/350] pointer-events-none opacity-[0.12] mix-blend-screen z-0 will-change-transform"
      />

      {/* Decorative vertical jasmine cords on sides */}
      <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-dashed border-l border-[#C59B27]/15 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-4 w-[1px] bg-dashed border-l border-[#C59B27]/15 pointer-events-none" />

      {/* Section Header */}
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

      {/* Dual Cards Container */}
      <div className="w-full max-w-2xl flex flex-col md:flex-row gap-6 justify-center items-stretch z-10 relative px-2">
        
        {/* Bride Family Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 bg-[#FDFBF7] p-6 md:p-8 rounded-lg border-2 gold-foil-border text-center shadow-[0_6px_22px_rgba(94,9,20,0.04)] relative overflow-hidden"
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

          {/* Medallion ornament */}
          <div className="flex justify-center mb-3">
            <LotusMedallion size={55} />
          </div>

          <span className="font-cormorant text-[9px] tracking-widest text-[#C59B27] font-semibold uppercase mb-1.5 block">
            Bride's Family
          </span>
          <h3 className="font-playfair text-xl font-extrabold text-[#5E0914] mb-2 tracking-wide leading-tight">
            Thammishetty Saritha & Kishan
          </h3>
          
          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent mx-auto my-3" />

          <p className="font-cormorant text-xs text-[#42040B]/85 italic tracking-wider font-semibold">
            With Family & Friends
          </p>
        </motion.div>

        {/* Groom Family Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="flex-1 bg-[#FDFBF7] p-6 md:p-8 rounded-lg border-2 gold-foil-border text-center shadow-[0_6px_22px_rgba(94,9,20,0.04)] relative overflow-hidden"
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

          {/* Medallion ornament */}
          <div className="flex justify-center mb-3">
            <LotusMedallion size={55} />
          </div>

          <span className="font-cormorant text-[9px] tracking-widest text-[#C59B27] font-semibold uppercase mb-1.5 block">
            Groom's Family
          </span>
          <h3 className="font-playfair text-xl font-extrabold text-[#5E0914] mb-2 tracking-wide leading-tight">
            Alladi Nagesh & Manjula
          </h3>
          
          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent mx-auto my-3" />

          <p className="font-cormorant text-xs text-[#42040B]/85 italic tracking-wider font-semibold">
            With Family & Friends
          </p>
        </motion.div>

      </div>

      {/* Parallax layers */}
      <div ref={petalsRef} className="absolute inset-0 pointer-events-none z-10 overflow-hidden will-change-transform">
        <svg className="absolute top-[20%] left-[6%] w-6 h-6 rotate-12 opacity-50" viewBox="0 0 20 20" fill="none">
          <path d="M10 2 C6 6, 3 10, 10 18 C17 10, 14 6, 10 2 Z" fill="#900C3F" />
        </svg>
        <svg className="absolute top-[60%] right-[6%] w-5 h-5 -rotate-45 opacity-60" viewBox="0 0 20 20" fill="none">
          <path d="M10 2 C6 6, 3 10, 10 18 C17 10, 14 6, 10 2 Z" fill="#900C3F" />
        </svg>
      </div>

      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10 overflow-hidden will-change-transform">
        <div className="absolute top-[30%] right-[15%] w-2 h-2 rounded-full bg-[#FFF2A3] opacity-65 blur-[1px]" />
        <div className="absolute top-[70%] left-[18%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-60 blur-[0.5px]" />
      </div>
    </section>
  );
}
