"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialSpread() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const groomRef   = useRef<HTMLDivElement>(null);
  const brideRef   = useRef<HTMLDivElement>(null);
  const coupleRef  = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      [groomRef, brideRef, coupleRef].forEach((ref) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 36 },
          {
            opacity: 1, y: 0, duration: 0.85, ease: "power2.out",
            scrollTrigger: { trigger: ref.current, start: "top 88%", toggleActions: "play none none none" },
          }
        );
      });
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, scrollTrigger: { trigger: textRef.current, start: "top 90%", toggleActions: "play none none none" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-5 py-16 bg-transparent overflow-hidden flex flex-col items-center border-b border-[#C59B27]/20"
    >
      {/* Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <span className="font-playfair text-[10px] tracking-[0.25em] text-[#C59B27] uppercase font-bold mb-1.5">
          Wedding Editorial
        </span>
        <h2 className="font-telugu text-3xl font-extrabold text-[#5E0914] mb-2.5">
          కళ్యాణ మహోత్సవం
        </h2>
        <div className="w-16 h-[1.5px] bg-[#C59B27]" />
      </div>

      {/* ── VERTICAL GALLERY ── */}
      <div className="w-full max-w-xs mx-auto flex flex-col items-center gap-5">

        {/* ① GROOM */}
        <div ref={groomRef} className="w-full" style={{ aspectRatio: "3/4", borderRadius: "10px", overflow: "hidden", border: "1.5px solid rgba(197,155,39,0.65)", boxShadow: "0 12px 32px rgba(0,0,0,0.28), 0 3px 10px rgba(0,0,0,0.15)", padding: "5px", background: "#FDFBF7" }}>
          <div className="relative w-full h-full rounded-md overflow-hidden">
            <Image src="/images/groom.jpg" alt="Vikram" fill className="object-cover" sizes="(max-width:640px) 80vw, 320px" priority />
          </div>
        </div>

        {/* Gold dot divider */}
        <div className="flex flex-col items-center gap-1 opacity-50 select-none">
          <div className="w-px h-4 bg-gradient-to-b from-transparent to-[#C59B27]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
          <div className="w-px h-4 bg-gradient-to-b from-[#C59B27] to-transparent" />
        </div>

        {/* ② BRIDE — same size */}
        <div ref={brideRef} className="w-full" style={{ aspectRatio: "3/4", borderRadius: "10px", overflow: "hidden", border: "1.5px solid rgba(197,155,39,0.65)", boxShadow: "0 12px 32px rgba(0,0,0,0.28), 0 3px 10px rgba(0,0,0,0.15)", padding: "5px", background: "#FDFBF7" }}>
          <div className="relative w-full h-full rounded-md overflow-hidden">
            <Image src="/images/bride.jpg" alt="Sai Jyoshna" fill className="object-cover" sizes="(max-width:640px) 80vw, 320px" priority />
          </div>
        </div>

        {/* Gold dot divider */}
        <div className="flex flex-col items-center gap-1 opacity-50 select-none">
          <div className="w-px h-4 bg-gradient-to-b from-transparent to-[#C59B27]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
          <div className="w-px h-4 bg-gradient-to-b from-[#C59B27] to-transparent" />
        </div>

        {/* ③ COUPLE — hero, wider + taller */}
        <div ref={coupleRef} className="w-full" style={{ aspectRatio: "4/5", borderRadius: "10px", overflow: "hidden", border: "2px solid rgba(197,155,39,0.8)", boxShadow: "0 20px 55px rgba(0,0,0,0.35), 0 6px 18px rgba(0,0,0,0.2), 0 0 40px rgba(197,155,39,0.08)", padding: "6px", background: "#FDFBF7", width: "calc(100% + 20px)", marginLeft: "-10px" }}>
          <div className="relative w-full h-full rounded-md overflow-hidden">
            <Image src="/images/groom-and-bride.jpg" alt="Sai Jyoshna & Vikram" fill className="object-cover" sizes="(max-width:640px) 90vw, 380px" priority />
          </div>
        </div>

      </div>

      {/* Caption */}
      <div ref={textRef} className="w-full max-w-md text-center mt-12 space-y-3 px-4">
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
