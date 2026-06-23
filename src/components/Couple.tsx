"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LotusMedallion, BetelLeaves } from "./TraditionalOrnaments";

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

export default function Couple() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const silhouetteRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const petalsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in atmospheric elements on mount to build the story sequence
      gsap.fromTo(bgImageRef.current, { opacity: 0 }, { opacity: 0.10, duration: 2, ease: "power2.out", delay: 0.1 });
      gsap.fromTo(silhouetteRef.current, { opacity: 0 }, { opacity: 0.12, duration: 1.8, ease: "power2.out", delay: 0.2 });
      gsap.fromTo(petalsRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.4 });
      gsap.fromTo(particlesRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.4 });

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
      className="relative px-6 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/30"
    >
      {/* ================= PARALLAX BACKGROUND LAYER ================= */}
      {/* Romantic couple illustration bg (low opacity for high contrast text readability) */}
      <div 
        ref={bgImageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center mix-blend-multiply pointer-events-none z-0 will-change-transform"
        style={{ backgroundImage: "url('/images/bg-imgm.jpg')", opacity: 0 }}
      />

      {/* Temple Silhouette Watermark */}
      <img
        ref={silhouetteRef}
        src="/images/temple-silhouette.png"
        alt="Temple Silhouette"
        className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[110%] max-w-screen-md aspect-[1000/350] pointer-events-none mix-blend-screen z-0 will-change-transform"
        style={{ opacity: 0 }}
      />

      {/* ================= CONTENT LAYER ================= */}
      <div 
        ref={contentRef}
        className="w-full max-w-2xl flex flex-col items-center z-25 relative will-change-transform"
      >
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
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
        </div>

        {/* Couple Cards Layout */}
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-8 justify-center items-stretch px-2">
          
          {/* Bride Card */}
          <div
            className="flex-1 bg-[#FDFBF7]/95 p-8 rounded-lg border-2 gold-foil-border shadow-xl flex flex-col justify-between items-center text-center relative overflow-hidden"
            style={{
              background: "radial-gradient(circle, rgba(253,251,247,0.95) 50%, rgba(250,245,234,0.95) 100%)",
            }}
          >
            {/* Inner decorative frame line */}
            <div className="absolute inset-1.5 border border-dashed border-[#C59B27]/45 rounded pointer-events-none" />
            <div className="absolute inset-3 border border-[#C59B27]/20 rounded pointer-events-none" />

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
          </div>

          {/* Traditional Betel Leaf Union Divider (visible on desktop) */}
          <div className="hidden md:flex flex-col items-center justify-center gap-2 px-2">
            <BetelLeaves size={60} />
            <span className="font-playfair text-lg gold-foil-text font-bold animate-pulse">
              &
            </span>
          </div>

          {/* Groom Card */}
          <div
            className="flex-1 bg-[#FDFBF7]/95 p-8 rounded-lg border-2 gold-foil-border shadow-xl flex flex-col justify-between items-center text-center relative overflow-hidden"
            style={{
              background: "radial-gradient(circle, rgba(253,251,247,0.95) 50%, rgba(250,245,234,0.95) 100%)",
            }}
          >
            {/* Inner decorative frame line */}
            <div className="absolute inset-1.5 border border-dashed border-[#C59B27]/45 rounded pointer-events-none" />
            <div className="absolute inset-3 border border-[#C59B27]/20 rounded pointer-events-none" />

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
          </div>

        </div>
      </div>

      {/* ================= FOREGROUND PARALLAX LAYERS ================= */}
      {/* local drifting petals (speed 1.8x) */}
      <div 
        ref={petalsRef}
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden will-change-transform"
        style={{ opacity: 0 }}
      >
        <RosePetalSVG className="absolute top-[10%] left-[5%] w-6 h-6 rotate-12 opacity-50" />
        <JasminePetalSVG className="absolute top-[50%] right-[6%] w-5 h-5 -rotate-12 opacity-60" />
        <RosePetalSVG className="absolute top-[80%] left-[8%] w-5 h-5 rotate-45 opacity-55" />
      </div>

      {/* local gold particles (speed 2.2x) */}
      <div 
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden will-change-transform"
        style={{ opacity: 0 }}
      >
        <div className="absolute top-[25%] right-[20%] w-2 h-2 rounded-full bg-[#FFF2A3] opacity-65 blur-[1px]" />
        <div className="absolute top-[60%] left-[18%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-60 blur-[0.5px]" />
      </div>

    </section>
  );
}