"use client";

import React, { useEffect, useRef } from "react";

export default function PetalRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // ─── Types ───────────────────────────────────────────────────────────
    interface Petal {
      x: number; y: number;
      size: number;
      speedY: number; speedX: number;
      angle: number; spin: number;
      opacity: number;
      zone: "left" | "right" | "center"; // which zone it was born in
    }
    interface Dust {
      x: number; y: number;
      size: number;
      speedY: number; speedX: number;
      opacity: number;
      freq: number; amp: number;
    }

    // ─── Config ───────────────────────────────────────────────────────────
    const MAX_PETALS = 18;   // was 35 — ~50% cut
    const MAX_DUST   = 20;   // was 30 — slight cut
    // Side spawn zone: left 15% and right 15% of screen.
    // Centre zone (15%–85%): only 20% of petals go here, at lower opacity.
    const SIDE_RATIO = 0.80; // 80% of petals spawn in side zones

    // ─── Factories ────────────────────────────────────────────────────────
    const spawnX = (isInitial: boolean, zone: "left" | "right" | "center"): number => {
      if (isInitial) return Math.random() * W;
      if (zone === "left")   return Math.random() * W * 0.15;
      if (zone === "right")  return W * 0.85 + Math.random() * W * 0.15;
      // center: rare, near edges of the safe zone
      return W * 0.15 + Math.random() * W * 0.70;
    };

    const pickZone = (): "left" | "right" | "center" => {
      const r = Math.random();
      if (r < SIDE_RATIO * 0.5)   return "left";
      if (r < SIDE_RATIO)         return "right";
      return "center";
    };

    const createPetal = (isInitial = false): Petal => {
      const zone = pickZone();
      // Center petals are smaller and fainter
      const isCenter = zone === "center";
      return {
        x: spawnX(isInitial, zone),
        y: isInitial ? Math.random() * H : -20,
        size: isCenter
          ? Math.random() * 4 + 3          // tiny in center (3–7px)
          : Math.random() * 7 + 5,         // normal on sides (5–12px)
        speedY: Math.random() * 0.6 + 0.35,
        speedX: Math.random() * 0.35 - 0.175,
        angle: Math.random() * Math.PI * 2,
        spin: Math.random() * 0.018 - 0.009,
        // Center petals: opacity 0.15–0.28 | Side petals: 0.45–0.85
        opacity: isCenter
          ? Math.random() * 0.13 + 0.15
          : Math.random() * 0.40 + 0.45,
        zone,
      };
    };

    const createDust = (isInitial = false): Dust => ({
      x: isInitial ? Math.random() * W : Math.random() * W,
      y: isInitial ? Math.random() * H : -10,
      size: Math.random() * 1.6 + 0.5,
      speedY: Math.random() * 0.25 + 0.12,
      speedX: Math.random() * 0.18 - 0.09,
      opacity: Math.random() * 0.35 + 0.2,   // slightly dimmer than before
      freq: Math.random() * 0.01 + 0.004,
      amp: Math.random() * 0.6 + 0.2,
    });

    // ─── Seed arrays ──────────────────────────────────────────────────────
    const petals: Petal[] = Array.from({ length: MAX_PETALS }, () => createPetal(true));
    const dust: Dust[]    = Array.from({ length: MAX_DUST   }, () => createDust(true));

    // ─── Draw helpers ─────────────────────────────────────────────────────
    const drawRosePetal = (c: CanvasRenderingContext2D, size: number) => {
      c.beginPath();
      c.moveTo(0, -size / 2);
      c.bezierCurveTo( size / 2, -size,  size, -size / 2,  size / 2, size / 2);
      c.bezierCurveTo(0, size, -size, size, -size / 2, size / 2);
      c.bezierCurveTo(-size, -size / 2, -size / 2, -size, 0, -size / 2);
      c.closePath();
      const g = c.createRadialGradient(0, 0, 0, 0, 0, size);
      g.addColorStop(0,   "#D81B60");
      g.addColorStop(0.7, "#900C3F");
      g.addColorStop(1,   "#4A001F");
      c.fillStyle = g;
      c.fill();
    };

    // Soft volumetric light rays (top-centre, very subtle)
    const drawRays = (c: CanvasRenderingContext2D, w: number, h: number) => {
      c.save();
      c.globalCompositeOperation = "screen";
      const t = Date.now() * 0.0003;
      const glow = c.createRadialGradient(w / 2, 0, 0, w / 2, 0, h * 0.75);
      glow.addColorStop(0, "rgba(253,240,166,0.055)");
      glow.addColorStop(1, "rgba(253,240,166,0)");
      c.fillStyle = glow;
      c.fillRect(0, 0, w, h);
      for (let i = 0; i < 5; i++) {
        const a = Math.PI / 2 + Math.sin(t + i * 1.5) * 0.3 + (i - 2) * 0.22;
        const da = 0.035 + Math.sin(t * 2 + i) * 0.008;
        c.beginPath();
        c.moveTo(w / 2, 0);
        c.lineTo(w / 2 + Math.cos(a - da) * h * 1.4, Math.sin(a - da) * h * 1.4);
        c.lineTo(w / 2 + Math.cos(a + da) * h * 1.4, Math.sin(a + da) * h * 1.4);
        c.closePath();
        const rg = c.createRadialGradient(w / 2, 0, 0, w / 2, 0, h);
        rg.addColorStop(0, "rgba(253,240,166,0.04)");
        rg.addColorStop(1, "rgba(253,240,166,0)");
        c.fillStyle = rg;
        c.fill();
      }
      c.restore();
    };

    // ─── Animation loop ───────────────────────────────────────────────────
    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      const t = Date.now();

      drawRays(ctx, W, H);

      // Gold dust
      ctx.save();
      dust.forEach((d, i) => {
        d.y += d.speedY;
        d.x += d.speedX + Math.sin(t * d.freq) * d.amp * 0.12;
        if (d.y > H + 10 || d.x < -10 || d.x > W + 10) {
          dust[i] = createDust();
          return;
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        const dg = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.size);
        dg.addColorStop(0,   "#FFFFFF");
        dg.addColorStop(0.3, "#FFF2A3");
        dg.addColorStop(0.7, "rgba(212,175,55,0.5)");
        dg.addColorStop(1,   "rgba(212,175,55,0)");
        ctx.fillStyle = dg;
        ctx.globalAlpha = d.opacity * (0.55 + Math.sin(t * 0.005 + i) * 0.28);
        ctx.fill();
      });
      ctx.restore();

      // Rose petals
      petals.forEach((p, i) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += p.spin;

        if (p.y > H + 20 || p.x < -20 || p.x > W + 20) {
          petals[i] = createPetal();
          return;
        }

        // Re-evaluate opacity based on current x position —
        // petals that drift into the centre zone fade out automatically
        const xFrac = p.x / W;
        const inCenter = xFrac > 0.15 && xFrac < 0.85;
        const effectiveOpacity = inCenter
          ? Math.min(p.opacity, 0.28)   // hard cap in safe zone
          : p.opacity;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = effectiveOpacity;
        drawRosePetal(ctx, p.size);
        ctx.restore();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-40 select-none bg-transparent"
    />
  );
}
