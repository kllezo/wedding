"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MusicToggleHandle } from "./MusicToggle";

interface EnvelopeProps {
  onOpen: () => void;
  musicRef?: React.RefObject<MusicToggleHandle | null>;
}

export default function Envelope({ onOpen, musicRef }: EnvelopeProps) {
  const [tapped, setTapped] = useState(false);
  const [gone, setGone] = useState(false);

  const handleStampTap = () => {
    if (tapped) return;
    setTapped(true);
    musicRef?.current?.play();
    // Entire envelope fades together: trigger onOpen mid-fade, unmount after
    setTimeout(() => onOpen(), 500);
    setTimeout(() => setGone(true), 900);
  };

  if (gone) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 select-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: tapped ? 0 : 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      {/* ══════════════════════════════════════════════════════
          BASE: Rich warm cranberry-maroon field
          Matches the reference exactly — not too dark, not purple.
      ══════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 42%,
              #8A1020 0%,
              #6B0C18 35%,
              #540B14 65%,
              #3E0810 100%)
          `,
        }}
      />

      {/* Subtle velvet texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.045,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Soft ambient radial vignette — darkens edges slightly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(10,0,2,0.45) 100%)",
        }}
      />

      {/* ══════════════════════════════════════════════════════
          FOLD LINES
          Exactly as in the reference: 4 thin gold diagonal lines
          from each corner converging at the center-point (~50%, 48%).
          This is the defining graphic language of this envelope.
      ══════════════════════════════════════════════════════ */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          {/* Gold gradient for fold lines — brighter near edges, fades to center */}
          <linearGradient id="fl-tl" x1="0%" y1="0%" x2="50%" y2="48%">
            <stop offset="0%"   stopColor="#C59B27" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C59B27" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="fl-tr" x1="100%" y1="0%" x2="50%" y2="48%">
            <stop offset="0%"   stopColor="#C59B27" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C59B27" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="fl-bl" x1="0%" y1="100%" x2="50%" y2="48%">
            <stop offset="0%"   stopColor="#C59B27" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C59B27" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="fl-br" x1="100%" y1="100%" x2="50%" y2="48%">
            <stop offset="0%"   stopColor="#C59B27" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C59B27" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Top-left → center */}
        <line x1="0" y1="0"   x2="50" y2="48" stroke="url(#fl-tl)" strokeWidth="0.28" />
        {/* Top-right → center */}
        <line x1="100" y1="0"   x2="50" y2="48" stroke="url(#fl-tr)" strokeWidth="0.28" />
        {/* Bottom-left → center */}
        <line x1="0" y1="100" x2="50" y2="48" stroke="url(#fl-bl)" strokeWidth="0.28" />
        {/* Bottom-right → center */}
        <line x1="100" y1="100" x2="50" y2="48" stroke="url(#fl-br)" strokeWidth="0.28" />
      </svg>

      {/* ══════════════════════════════════════════════════════
          GOLD EDGE BORDER — thin continuous gold line
      ══════════════════════════════════════════════════════ */}
      {/* Top */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 0%, #C59B27 15%, #FFF2A3 50%, #C59B27 85%, transparent 100%)", opacity: 0.65 }} />
      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 0%, #C59B27 15%, #FFF2A3 50%, #C59B27 85%, transparent 100%)", opacity: 0.65 }} />
      {/* Left */}
      <div className="absolute top-0 bottom-0 left-0 w-[1.5px] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #C59B27 15%, #FFF2A3 50%, #C59B27 85%, transparent 100%)", opacity: 0.65 }} />
      {/* Right */}
      <div className="absolute top-0 bottom-0 right-0 w-[1.5px] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #C59B27 15%, #FFF2A3 50%, #C59B27 85%, transparent 100%)", opacity: 0.65 }} />

      {/* ══════════════════════════════════════════════════════
          CORNER ORNAMENTS
      ══════════════════════════════════════════════════════ */}
      <div className="absolute top-[14px] left-[14px] w-12 h-12 pointer-events-none"
        style={{ borderTop: "1.5px solid rgba(197,155,39,0.5)", borderLeft: "1.5px solid rgba(197,155,39,0.5)" }} />
      <div className="absolute top-[14px] right-[14px] w-12 h-12 pointer-events-none"
        style={{ borderTop: "1.5px solid rgba(197,155,39,0.5)", borderRight: "1.5px solid rgba(197,155,39,0.5)" }} />
      <div className="absolute bottom-[14px] left-[14px] w-12 h-12 pointer-events-none"
        style={{ borderBottom: "1.5px solid rgba(197,155,39,0.5)", borderLeft: "1.5px solid rgba(197,155,39,0.5)" }} />
      <div className="absolute bottom-[14px] right-[14px] w-12 h-12 pointer-events-none"
        style={{ borderBottom: "1.5px solid rgba(197,155,39,0.5)", borderRight: "1.5px solid rgba(197,155,39,0.5)" }} />

      {/* ══════════════════════════════════════════════════════
          WAX SEAL + CTA
          Centered at the fold-line convergence point (~48% from top).
          The gold ring decoration + stamp image recreates the
          ornate circular seal visible in the reference.
      ══════════════════════════════════════════════════════ */}

      {/* Warm glow halo behind the seal */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "48%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(55vmin, 320px)",
          height: "min(55vmin, 320px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.28) 0%, rgba(197,155,39,0.08) 45%, transparent 70%)",
          filter: "blur(22px)",
        }}
      />

      {/* Seal group — positioned at convergence point */}
      <div
        className="absolute"
        style={{
          top: "48%", left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(14px, 3vmin, 22px)",
        }}
      >
        <AnimatePresence>
          {!tapped && (
            <motion.div
              key="seal-cta"
              className="flex flex-col items-center pointer-events-auto"
              style={{ gap: "clamp(14px, 3vmin, 22px)" }}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              {/* Outer decorative gold ring (SVG) — matches reference's ornate circle */}
              <motion.div
                className="relative cursor-pointer"
                onClick={handleStampTap}
                animate={{ scale: [1, 1.035, 1] }}
                transition={{ scale: { repeat: Infinity, duration: 2.8, ease: "easeInOut" } }}
                style={{
                  width: "clamp(200px, 38vmin, 268px)",
                  height: "clamp(200px, 38vmin, 268px)",
                }}
              >
                {/* Gold decorative ring (SVG circles behind the stamp) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 190 190"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="ring-gold" cx="50%" cy="35%" r="60%">
                      <stop offset="0%"   stopColor="#FFF2A3" />
                      <stop offset="40%"  stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#8B6914" />
                    </radialGradient>
                  </defs>
                  {/* Outer thin ring */}
                  <circle cx="95" cy="95" r="92" fill="none" stroke="url(#ring-gold)" strokeWidth="1.2" opacity="0.7" />
                  {/* Medium ring with dashes */}
                  <circle cx="95" cy="95" r="84" fill="none" stroke="url(#ring-gold)" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.55" />
                  {/* Inner solid ring */}
                  <circle cx="95" cy="95" r="76" fill="none" stroke="url(#ring-gold)" strokeWidth="1.8" opacity="0.85" />
                  {/* Dark fill behind stamp for depth */}
                  <circle cx="95" cy="95" r="74" fill="rgba(30,2,5,0.5)" />
                  {/* Tiny ornament dots at compass points */}
                  <circle cx="95" cy="3"   r="2.5" fill="#D4AF37" opacity="0.8" />
                  <circle cx="95" cy="187" r="2.5" fill="#D4AF37" opacity="0.8" />
                  <circle cx="3"  cy="95"  r="2.5" fill="#D4AF37" opacity="0.8" />
                  <circle cx="187" cy="95" r="2.5" fill="#D4AF37" opacity="0.8" />
                </svg>

                {/* The actual stamp image — sits inside the gold ring */}
                <div
                  className="absolute"
                  style={{
                    inset: "6%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/stamp.png"
                    alt="Royal Wax Seal — Tap to Open"
                    className="w-full h-full object-contain select-none"
                    draggable={false}
                    style={{
                      filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.8))",
                    }}
                  />
                </div>
              </motion.div>

              {/* Telugu + English CTA */}
              <motion.div
                className="text-center cursor-pointer"
                onClick={handleStampTap}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
              >
                {/* Telugu CTA — dominant text, 1.6× original size */}
                <p
                  className="font-telugu font-bold gold-foil-text"
                  style={{
                    fontSize: "clamp(28px, 5.5vmin, 42px)",
                    letterSpacing: "0.04em",
                    filter:
                      "drop-shadow(0 0 14px rgba(212,175,55,0.55)) drop-shadow(0 2px 8px rgba(0,0,0,0.95))",
                    lineHeight: 1.2,
                  }}
                >
                  స్వాగతం
                </p>
                {/* TAP TO OPEN — 25% larger, wider tracking */}
                <p
                  className="font-cormorant font-medium uppercase mt-3"
                  style={{
                    fontSize: "clamp(10px, 1.8vmin, 13px)",
                    letterSpacing: "0.42em",
                    color: "rgba(255,242,163,0.62)",
                    textShadow: "0 1px 4px rgba(0,0,0,0.9)",
                  }}
                >
                  TAP TO OPEN
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
