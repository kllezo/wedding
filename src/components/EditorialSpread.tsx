"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialSpread() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const centerRef  = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Left card drifts left + up slightly on scroll
      gsap.to(leftRef.current, {
        x: -18, y: -10,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 },
      });
      // Center card lifts up (most prominent motion)
      gsap.to(centerRef.current, {
        y: -32,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 },
      });
      // Right card drifts right + up slightly
      gsap.to(rightRef.current, {
        x: 18, y: -10,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 },
      });
      // Caption fade-in
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, scrollTrigger: { trigger: textRef.current, start: "top 90%", end: "top 65%", scrub: 1 } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-4 py-20 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/20"
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

      {/*
        ─── EDITORIAL COMPOSITION ───────────────────────────────────────────
        Three overlapping portrait cards in a Vogue-style spread.
        Center (Bride) is tallest and sits in front (z-20).
        Left (Groom) and Right (Couple) are smaller and tucked behind (z-10).
        All cards are absolute / relative positioned to overlap naturally.
      ──────────────────────────────────────────────────────────────────────
      */}
      <div
        className="relative w-full max-w-lg z-10 mx-auto"
        style={{ height: "clamp(340px, 72vw, 500px)" }}
      >

        {/* ── LEFT: Groom ─────────────────────────────────────────── */}
        <div
          ref={leftRef}
          className="absolute will-change-transform"
          style={{
            left: "0%",
            top: "8%",
            width: "40%",
            height: "82%",
            zIndex: 10,
          }}
        >
          <div
            className="w-full h-full rounded-md overflow-hidden"
            style={{
              border: "1.5px solid rgba(197,155,39,0.55)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.32), 0 2px 8px rgba(0,0,0,0.18)",
              background: "#FDFBF7",
              padding: "5px",
            }}
          >
            <div className="relative w-full h-full rounded overflow-hidden">
              <Image
                src="/images/groom.jpg"
                alt="Vikram"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 40vw, 200px"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── CENTER: Bride (focal point) ─────────────────────────── */}
        <div
          ref={centerRef}
          className="absolute will-change-transform"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            top: "0%",
            width: "46%",
            height: "100%",
            zIndex: 20,
          }}
        >
          <div
            className="w-full h-full rounded-md overflow-hidden"
            style={{
              border: "2px solid rgba(197,155,39,0.75)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.40), 0 4px 16px rgba(0,0,0,0.22), 0 0 0 1px rgba(197,155,39,0.15)",
              background: "#FDFBF7",
              padding: "6px",
            }}
          >
            <div className="relative w-full h-full rounded overflow-hidden">
              <Image
                src="/images/bride.jpg"
                alt="Sai Jyoshna"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 46vw, 230px"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: Couple ───────────────────────────────────────── */}
        <div
          ref={rightRef}
          className="absolute will-change-transform"
          style={{
            right: "0%",
            top: "8%",
            width: "40%",
            height: "82%",
            zIndex: 10,
          }}
        >
          <div
            className="w-full h-full rounded-md overflow-hidden"
            style={{
              border: "1.5px solid rgba(197,155,39,0.55)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.32), 0 2px 8px rgba(0,0,0,0.18)",
              background: "#FDFBF7",
              padding: "5px",
            }}
          >
            <div className="relative w-full h-full rounded overflow-hidden">
              <Image
                src="/images/groom-and-bride.jpg"
                alt="Sai Jyoshna & Vikram"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 40vw, 200px"
                priority
              />
            </div>
          </div>
        </div>

      </div>

      {/* Editorial Caption */}
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
