"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GaneshaSVG from "./GaneshaSVG";
import { WeddingMonogram } from "./TraditionalOrnaments";

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

export default function TeluguInvitation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const silhouetteRef = useRef<HTMLImageElement>(null);
  const petalsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const englishImgRef = useRef<HTMLDivElement>(null);
  const teluguImgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: englishProgress } = useScroll({
    target: englishImgRef,
    offset: ["start end", "end start"]
  });
  const { scrollYProgress: teluguProgress } = useScroll({
    target: teluguImgRef,
    offset: ["start end", "end start"]
  });

  const englishScale = useTransform(englishProgress, [0, 0.5, 1], [0.96, 1.04, 0.96]);
  const teluguScale = useTransform(teluguProgress, [0, 0.5, 1], [0.96, 1.04, 0.96]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax ratios (based on base -400px):
      // Temple Silhouette: 0.3x -> -120px
      // Background Artwork: 0.5x -> -200px
      // Content: 1.0x -> 0px (default scroll)
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
      {/* ================= PARALLAX BACKGROUND LAYER ================= */}
      {/* Telugu invitation framing and decorative borders bg (low opacity for high contrast text readability) */}
      <div 
        ref={bgImageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center opacity-[0.12] mix-blend-multiply pointer-events-none z-0 will-change-transform"
        style={{ backgroundImage: "url('/images/bg-img-3.jpg')" }}
      />

      {/* Temple Silhouette Watermark */}
      <img
        ref={silhouetteRef}
        src="/images/temple-silhouette.png"
        alt="Temple Silhouette"
        className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[110%] max-w-screen-md aspect-[1000/350] pointer-events-none opacity-[0.12] mix-blend-screen z-0 will-change-transform"
      />

      {/* Subtle vertical jasmine garland threads on sides */}
      <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-dashed border-l border-[#C59B27]/15 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-4 w-[1px] bg-dashed border-l border-[#C59B27]/15 pointer-events-none z-10" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-14 text-center z-20"
      >
        <h2 className="font-playfair text-3xl font-extrabold text-[#5E0914] mb-1.5 tracking-wide uppercase">
          Invitation
        </h2>
        <span className="font-telugu text-sm font-bold text-[#C59B27] tracking-wider">
          ఆహ్వాన పత్రిక
        </span>
        <div className="w-16 h-[1.5px] bg-[#C59B27] mt-3" />
      </motion.div>

      {/* ================= CHAPTER 6: UNROLLED LUXURY SCROLL ================= */}
      <div className="w-full max-w-lg relative px-2 flex flex-col items-center z-20">
        
        {/* Top Gold Scroll Roller Rod */}
        <div className="w-[108%] h-4 bg-gradient-to-b from-[#8A640F] via-[#FFF2A3] to-[#8A640F] rounded-full shadow-md z-25 flex justify-between items-center px-1 border border-[#300206]/40 relative">
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
          className="w-full bg-[#FDFBF7] p-6 md:p-10 border-x border-[#C59B27]/40 shadow-[0_12px_24px_rgba(94,9,20,0.06)] text-center relative overflow-hidden z-20 -mt-1 -mb-1"
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

          {/* Invitation details and card stack */}
          <div className="space-y-12 flex flex-col items-center w-full">
            
            {/* 1. Primary English Invitation Artwork (wedding image english final) - Rich Premium Frame */}
            <div ref={englishImgRef} className="w-full flex justify-center py-2">
              <motion.div 
                style={{ scale: englishScale }}
                className="relative p-3.5 max-w-[350px] w-full flex flex-col items-center rounded-lg border-2 gold-foil-border bg-[#FDFBF7] shadow-xl z-10 transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* Thin inner frames */}
                <div className="absolute inset-1 border border-dashed border-[#C59B27]/40 rounded pointer-events-none" />
                <div className="absolute inset-2 border border-[#C59B27]/15 rounded pointer-events-none" />
                
                {/* Corner brackets */}
                <div className="panel-corner-tl opacity-75" />
                <div className="panel-corner-tr opacity-75" />
                <div className="panel-corner-bl opacity-75" />
                <div className="panel-corner-br opacity-75" />

                <img 
                  src="/images/wedding-image-english-final.png" 
                  alt="English Wedding Invitation Card" 
                  className="w-full h-auto object-contain rounded filter drop-shadow-[0_4px_8px_rgba(94,9,20,0.15)]"
                />
              </motion.div>
            </div>

            {/* Separator between English and Telugu cards */}
            <div className="flex items-center gap-1.5 w-24 opacity-60">
              <div className="h-[0.5px] flex-1 bg-gradient-to-r from-transparent to-[#C59B27]" />
              <span className="text-[#C59B27] text-[8px] animate-pulse">♡</span>
              <div className="h-[0.5px] flex-1 bg-gradient-to-l from-transparent to-[#C59B27]" />
            </div>

            {/* 2. Primary Telugu Invitation Artwork (wedding image final) - Rich Premium Frame */}
            <div ref={teluguImgRef} className="w-full flex justify-center py-2">
              <motion.div 
                style={{ scale: teluguScale }}
                className="relative p-3.5 max-w-[350px] w-full flex flex-col items-center rounded-lg border-2 gold-foil-border bg-[#FDFBF7] shadow-xl z-10 transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* Thin inner frames */}
                <div className="absolute inset-1 border border-dashed border-[#C59B27]/40 rounded pointer-events-none" />
                <div className="absolute inset-2 border border-[#C59B27]/15 rounded pointer-events-none" />
                
                {/* Corner brackets */}
                <div className="panel-corner-tl opacity-75" />
                <div className="panel-corner-tr opacity-75" />
                <div className="panel-corner-bl opacity-75" />
                <div className="panel-corner-br opacity-75" />

                <img 
                  src="/images/wedding-image-final.png" 
                  alt="Telugu Wedding Invitation Card" 
                  className="w-full h-auto object-contain rounded filter drop-shadow-[0_4px_8px_rgba(94,9,20,0.15)]"
                />
              </motion.div>
            </div>

            {/* 3. Combined Invitation Wording Text */}
            <div className="mt-8 max-w-sm text-center px-4 space-y-4">
              <p className="font-telugu text-[11px] sm:text-[12px] font-medium text-[#5E0914] leading-[1.9] tracking-wide">
                మా వివాహ మహోత్సవమునకు మీ కుటుంబసమేతముగా విచ్చేసి నూతన వధూవరులను ఆశీర్వదించాల్సిందిగా ప్రార్థన.
              </p>
              
              {/* Spaced divider between languages */}
              <div className="w-12 h-[0.5px] bg-[#C59B27]/40 mx-auto my-1" />
              
              <p className="font-playfair text-[9px] sm:text-[10px] font-medium text-[#5E0914] leading-[1.9] uppercase tracking-widest">
                We cordially invite you to celebrate the marriage of our children and grace this occasion with your presence.
              </p>
              
              <p className="font-telugu text-[9px] sm:text-[10px] font-bold text-[#C59B27] pt-2 tracking-widest">
                శ్రీరస్తు ! శుభమస్తు !! కళ్యాణమస్తు !!!
              </p>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C59B27]/50 to-transparent mx-auto mt-6 relative">
            <span className="absolute left-1/2 -translate-x-1/2 -top-1.5 text-[9px] text-[#C59B27] bg-[#FDFBF7] px-1">
              ❦
            </span>
          </div>
          
        </motion.div>

        {/* Bottom Gold Scroll Roller Rod */}
        <div className="w-[108%] h-4 bg-gradient-to-b from-[#8A640F] via-[#FFF2A3] to-[#8A640F] rounded-full shadow-md z-25 flex justify-between items-center px-1 border border-[#300206]/40 relative">
          {/* Left Knobby Finial */}
          <div className="absolute left-[-12px] w-4 h-6 bg-gradient-to-r from-[#A67C1E] to-[#FFF2A3] rounded-l-md border border-[#300206]/50 shadow-sm" />
          {/* Right Knobby Finial */}
          <div className="absolute right-[-12px] w-4 h-6 bg-gradient-to-l from-[#A67C1E] to-[#FFF2A3] rounded-r-md border border-[#300206]/50 shadow-sm" />
        </div>

      </div>

      {/* ================= FOREGROUND PARALLAX LAYERS ================= */}
      {/* local drifting petals (speed 1.8x) */}
      <div 
        ref={petalsRef}
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden will-change-transform"
      >
        <RosePetalSVG className="absolute top-[20%] left-[8%] w-6 h-6 rotate-12 opacity-50" />
        <JasminePetalSVG className="absolute top-[60%] right-[10%] w-5 h-5 -rotate-45 opacity-60" />
        <RosePetalSVG className="absolute top-[80%] left-[12%] w-5 h-5 rotate-90 opacity-55" />
      </div>

      {/* local gold particles (speed 2.2x) */}
      <div 
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden will-change-transform"
      >
        <div className="absolute top-[30%] right-[18%] w-2 h-2 rounded-full bg-[#FFF2A3] opacity-65 blur-[1px]" />
        <div className="absolute top-[70%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-60 blur-[0.5px]" />
      </div>

    </section>
  );
}
