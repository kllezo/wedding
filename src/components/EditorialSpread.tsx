"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialSpread() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const brideCardRef = useRef<HTMLDivElement>(null);
  const groomCardRef = useRef<HTMLDivElement>(null);
  const coupleCardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Subtle parallax drifting on scroll
      gsap.to(brideCardRef.current, {
        x: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      gsap.to(groomCardRef.current, {
        x: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      gsap.to(coupleCardRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      // Editorial caption fade-in
      gsap.fromTo(textRef.current, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            end: "top 65%",
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
      className="relative px-4 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/20"
    >
      
      {/* Decorative background grids/watermarks */}
      <div className="absolute top-1/3 left-10 w-40 h-40 opacity-[0.015] pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="#5E0914">
          <circle cx="50" cy="50" r="45" stroke="#5E0914" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center mb-10 text-center z-10">
        <span className="font-playfair text-[10px] tracking-[0.25em] text-[#C59B27] uppercase font-bold mb-1.5">
          Wedding Editorial
        </span>
        <h2 className="font-telugu text-3xl font-extrabold text-[#5E0914] mb-2.5">
          కళ్యాణ మహోత్సవం
        </h2>
        <div className="w-16 h-[1.5px] bg-[#C59B27]" />
      </div>

      {/* 3-Portrait Editorial Composition */}
      <div className="w-full max-w-xl relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[500px] z-10 px-2 my-4">
        
        {/* Photo 1: Groom Portrait (Smaller left, slides left) */}
        <div 
          ref={brideCardRef}
          className="absolute left-[0%] sm:left-[6%] w-[32%] aspect-[3/4] bg-[#FDFBF7] p-1.5 sm:p-2 rounded-lg border gold-foil-border shadow-[0_15px_30px_rgba(0,0,0,0.35)] z-30 will-change-transform"
        >
          <div className="absolute inset-1 border border-[#C59B27]/25 rounded pointer-events-none" />
          <div className="relative w-full h-full rounded overflow-hidden">
            <Image 
              src="/images/groom.jpg" 
              alt="Groom Portrait"
              fill
              className="object-cover"
              sizes="(max-w-768px) 33vw, 180px"
              priority
            />
          </div>
          <div className="absolute bottom-2.5 inset-x-0 text-center pointer-events-none">
            <span className="font-telugu text-[7px] sm:text-[9px] font-bold text-[#FDFBF7] drop-shadow-md bg-[#5E0914]/80 px-2 py-0.5 rounded-full inline-block">
              వరుడు
            </span>
          </div>
        </div>

        {/* Photo 2: Bride Portrait (Large center, slides up) */}
        <div 
          ref={coupleCardRef}
          className="w-[50%] aspect-[3/4] bg-[#FDFBF7] p-2.5 sm:p-3.5 rounded-lg border-2 gold-foil-border shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5)] z-20 relative will-change-transform"
        >
          <div className="absolute inset-1.5 border border-[#C59B27]/30 rounded pointer-events-none" />
          <div className="relative w-full h-full rounded overflow-hidden">
            <Image 
              src="/images/bride.jpg" 
              alt="Sai Jyoshna"
              fill
              className="object-cover"
              sizes="(max-w-768px) 50vw, 280px"
              priority
            />
          </div>
          <div className="absolute bottom-2.5 inset-x-0 text-center pointer-events-none">
            <span className="font-telugu text-[7px] sm:text-[9px] font-bold text-[#FDFBF7] drop-shadow-md bg-[#5E0914]/80 px-2 py-0.5 rounded-full inline-block">
              వధువు
            </span>
          </div>
        </div>

        {/* Photo 3: Couple Photo (Smaller right, slides right) */}
        <div 
          ref={groomCardRef}
          className="absolute right-[0%] sm:right-[6%] w-[32%] aspect-[3/4] bg-[#FDFBF7] p-1.5 sm:p-2 rounded-lg border gold-foil-border shadow-[0_15px_30px_rgba(0,0,0,0.35)] z-10 will-change-transform"
        >
          <div className="absolute inset-1 border border-[#C59B27]/25 rounded pointer-events-none" />
          <div className="relative w-full h-full rounded overflow-hidden">
            <Image 
              src="/images/groom-and-bride.jpg" 
              alt="Together"
              fill
              className="object-cover"
              sizes="(max-w-768px) 33vw, 180px"
              priority
            />
          </div>
          <div className="absolute bottom-2.5 inset-x-0 text-center pointer-events-none">
            <span className="font-telugu text-[7px] sm:text-[9px] font-bold text-[#FDFBF7] drop-shadow-md bg-[#5E0914]/80 px-2 py-0.5 rounded-full inline-block">
              కలిసి
            </span>
          </div>
        </div>

      </div>

      {/* Editorial Caption Text */}
      <div 
        ref={textRef}
        className="w-full max-w-md text-center mt-12 space-y-3.5 px-4 z-20 will-change-transform"
      >
        <h3 className="font-playfair text-lg sm:text-xl font-extrabold italic text-[#5E0914] leading-tight">
          A Journey Inscribed in Sacred Union
        </h3>
        <p className="font-cormorant text-xs sm:text-sm text-[#42040B]/85 leading-relaxed font-semibold">
          In the warmth of temple gold and the purity of fresh jasmine blossoms, two souls pledge a lifelong walk together, surrounded by the blessings of elders and loved ones.
        </p>
        <p className="font-telugu text-[10px] text-[#C59B27] font-bold tracking-wide">
          నూరు వసంతాల తోడుగా, అడుగడుగునా శుభములతో...
        </p>
      </div>

    </section>
  );
}
