"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// ── Shared frame styles ───────────────────────────────────────────
const baseFrame: React.CSSProperties = {
  background: "#FDFBF7",
  padding: "6px",
  border: "1.5px solid rgba(197,155,39,0.65)",
  boxShadow:
    "0 12px 32px rgba(0,0,0,0.28), 0 3px 10px rgba(0,0,0,0.16), 0 0 0 1px rgba(197,155,39,0.1)",
  borderRadius: "10px",
  overflow: "hidden",
};

const heroFrame: React.CSSProperties = {
  ...baseFrame,
  border: "2px solid rgba(197,155,39,0.8)",
  boxShadow:
    "0 20px 55px rgba(0,0,0,0.36), 0 6px 18px rgba(0,0,0,0.22), 0 0 0 1px rgba(197,155,39,0.18), 0 0 40px rgba(197,155,39,0.08)",
};

export default function EditorialSpread() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const groomRef   = useRef<HTMLDivElement>(null);
  const brideRef   = useRef<HTMLDivElement>(null);
  const coupleRef  = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Subtle fade-up as each card enters viewport
      [groomRef, brideRef, coupleRef].forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
            delay: i * 0.1,
          }
        );
      });

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: { trigger: textRef.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-5 py-16 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/20"
    >
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

      {/* ── VERTICAL STORY FLOW ───────────────────────────────────── */}
      <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-6 z-10">

        {/* 1. GROOM — medium */}
        <div
          ref={groomRef}
          className="w-full"
          style={{ ...baseFrame, aspectRatio: "3/4" }}
        >
          <div className="relative w-full h-full rounded-md overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/images/groom.jpg"
              alt="Vikram"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, 384px"
              priority
            />
          </div>
        </div>

        {/* Divider dot */}
        <div className="flex flex-col items-center gap-1 py-1 opacity-60">
          <div className="w-[1px] h-5 bg-gradient-to-b from-transparent to-[#C59B27]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
          <div className="w-[1px] h-5 bg-gradient-to-b from-[#C59B27] to-transparent" />
        </div>

        {/* 2. BRIDE — same size as Groom */}
        <div
          ref={brideRef}
          className="w-full"
          style={{ ...baseFrame, aspectRatio: "3/4" }}
        >
          <div className="relative w-full h-full rounded-md overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/images/bride.jpg"
              alt="Sai Jyoshna"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, 384px"
              priority
            />
          </div>
        </div>

        {/* Divider with label */}
        <div className="flex flex-col items-center gap-1 py-1 opacity-60">
          <div className="w-[1px] h-5 bg-gradient-to-b from-transparent to-[#C59B27]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
          <div className="w-[1px] h-5 bg-gradient-to-b from-[#C59B27] to-transparent" />
        </div>

        {/* 3. COUPLE — HERO, 1.4× larger via wider container + taller aspect */}
        <div
          ref={coupleRef}
          className="w-full"
          style={{
            ...heroFrame,
            aspectRatio: "4/5",
            // Override width to be full-bleed slightly beyond the column
            margin: "0 -8px",
            width: "calc(100% + 16px)",
          }}
        >
          <div className="relative w-full h-full rounded-md overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/images/groom-and-bride.jpg"
              alt="Sai Jyoshna & Vikram"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 96vw, 420px"
              priority
            />
          </div>
        </div>

      </div>

      {/* Caption */}
      <div
        ref={textRef}
        className="w-full max-w-md text-center mt-12 space-y-3 px-4 z-20"
      >
        <h3 className="font-playfair text-lg sm:text-xl font-extrabold italic text-[#5E0914] leading-tight">
          A Journey Inscribed in Sacred Union
        </h3>
        <p className="font-cormorant text-xs sm:text-sm text-[#42040B]/85 leading-relaxed font-semibold">
          In the warmth of temple gold and the purity of fresh jasmine blossoms, two souls pledge a lifelong walk together.
        </p>
        <p className="font-telugu text-[10px] text-[#C59B27] font-bold tracking-wide">
          నూరు వసంతాల తోడుగా, అడుగడుగునా శుభములతో...
        </p>
      </div>
    </section>
  );
}
