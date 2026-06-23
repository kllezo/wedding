"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialSpread() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const f1Ref       = useRef<HTMLDivElement>(null); // top-left  (Groom)
  const f2Ref       = useRef<HTMLDivElement>(null); // center    (Bride tall)
  const f3Ref       = useRef<HTMLDivElement>(null); // top-right (Couple)
  const f4Ref       = useRef<HTMLDivElement>(null); // bot-left  (Bride)
  const textRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const common = {
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      };
      gsap.to(f1Ref.current,   { y: -20,  ...common });
      gsap.to(f2Ref.current,   { y: -36,  ...common }); // center lifts most
      gsap.to(f3Ref.current,   { y: -16,  ...common });
      gsap.to(f4Ref.current,   { y: -24,  ...common });
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, scrollTrigger: { trigger: textRef.current, start: "top 90%", end: "top 65%", scrub: 1 } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* ── Card factory ─────────────────────────────────────────────── */
  const Card = ({
    divRef,
    src,
    alt,
    style,
    large,
  }: {
    divRef: React.RefObject<HTMLDivElement | null>;
    src: string;
    alt: string;
    style: React.CSSProperties;
    large?: boolean;
  }) => (
    <div
      ref={divRef}
      className="absolute will-change-transform rounded-lg overflow-hidden"
      style={{
        ...style,
        background: "#FDFBF7",
        padding: large ? "6px" : "5px",
        border: large
          ? "2px solid rgba(197,155,39,0.72)"
          : "1.5px solid rgba(197,155,39,0.52)",
        boxShadow: large
          ? "0 18px 48px rgba(0,0,0,0.38), 0 4px 12px rgba(0,0,0,0.2), 0 0 0 1px rgba(197,155,39,0.12)"
          : "0 10px 28px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <div className="relative w-full h-full rounded overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative px-4 py-16 bg-transparent text-[#42040B] overflow-hidden flex flex-col items-center border-b border-[#C59B27]/20"
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
        ── SCATTERED 4-FRAME LAYOUT ─────────────────────────────────────
        Matches the reference green-box positions:

          [F1 Groom  ] [F2 Bride tall] [F3 Couple]
          [F1        ]
          [F4 Bride  ] [F2 cont      ]
          [F4        ]

        All frames absolutely positioned inside a fixed-height container.
      ─────────────────────────────────────────────────────────────────── */}
      <div
        className="relative w-full max-w-lg mx-auto z-10"
        style={{ height: "clamp(520px, 130vw, 700px)" }}
      >
        {/* F1 — top-left, large (Groom) */}
        <Card
          divRef={f1Ref}
          src="/images/groom.jpg"
          alt="Vikram"
          large
          style={{
            left: "0%",
            top: "0%",
            width: "48%",
            height: "42%",
            zIndex: 15,
          }}
        />

        {/* F2 — center tall, focal (Bride) — overlaps all */}
        <Card
          divRef={f2Ref}
          src="/images/bride.jpg"
          alt="Sai Jyoshna"
          large
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            top: "5%",
            width: "43%",
            height: "60%",
            zIndex: 25,
          }}
        />

        {/* F3 — top-right, medium (Couple) */}
        <Card
          divRef={f3Ref}
          src="/images/groom-and-bride.jpg"
          alt="Sai Jyoshna & Vikram"
          style={{
            right: "0%",
            top: "4%",
            width: "38%",
            height: "38%",
            zIndex: 15,
          }}
        />

        {/* F4 — bottom-left, large (Bride full-length) */}
        <Card
          divRef={f4Ref}
          src="/images/bride.jpg"
          alt="Sai Jyoshna"
          large
          style={{
            left: "0%",
            bottom: "0%",
            width: "48%",
            height: "42%",
            zIndex: 12,
          }}
        />
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
