"use client";

import React, { useEffect, useRef } from "react";

export default function PetalRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Petal class definition
    interface Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      angle: number;
      spin: number;
      type: "rose" | "jasmine";
      opacity: number;
    }

    // Gold Dust class definition
    interface GoldDust {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      freq: number;
      amp: number;
    }

    const petals: Petal[] = [];
    const goldDust: GoldDust[] = [];
    const maxPetals = 35; 
    const maxDust = 30;

    const createPetal = (isInitial = false): Petal => {
      const type = Math.random() > 0.4 ? "rose" : "jasmine";
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : -20,
        size: Math.random() * 8 + 5,
        speedY: Math.random() * 0.7 + 0.4,
        speedX: Math.random() * 0.4 - 0.2,
        angle: Math.random() * Math.PI * 2,
        spin: Math.random() * 0.02 - 0.01,
        type,
        opacity: Math.random() * 0.45 + 0.45, // Between 0.45 and 0.90 for clean print look
      };
    };

    const createDust = (isInitial = false): GoldDust => {
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : -10,
        size: Math.random() * 2 + 0.6,
        speedY: Math.random() * 0.3 + 0.15,
        speedX: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * 0.5 + 0.3,
        freq: Math.random() * 0.01 + 0.005,
        amp: Math.random() * 0.8 + 0.2,
      };
    };

    // Populate initial arrays
    for (let i = 0; i < maxPetals; i++) {
      petals.push(createPetal(true));
    }
    for (let i = 0; i < maxDust; i++) {
      goldDust.push(createDust(true));
    }

    const drawRosePetal = (c: CanvasRenderingContext2D, size: number) => {
      c.beginPath();
      c.moveTo(0, -size / 2);
      c.bezierCurveTo(size / 2, -size, size, -size / 2, size / 2, size / 2);
      c.bezierCurveTo(0, size, -size, size, -size / 2, size / 2);
      c.bezierCurveTo(-size, -size / 2, -size / 2, -size, 0, -size / 2);
      c.closePath();
      
      const grad = c.createRadialGradient(0, 0, 0, 0, 0, size);
      grad.addColorStop(0, "#D81B60"); // Bright rose
      grad.addColorStop(0.7, "#900C3F"); // Deep rose/maroon
      grad.addColorStop(1, "#4A001F"); // Dark border outline
      c.fillStyle = grad;
      c.fill();
    };

    const drawJasminePetal = (c: CanvasRenderingContext2D, size: number) => {
      c.beginPath();
      c.ellipse(0, 0, size / 1.8, size, 0, 0, Math.PI * 2);
      c.closePath();
      
      const grad = c.createLinearGradient(0, -size, 0, size);
      grad.addColorStop(0, "#FFFFFF");
      grad.addColorStop(0.85, "#FFFDF0");
      grad.addColorStop(1, "#FFF59D"); // Yellow stalk tip
      c.fillStyle = grad;
      c.fill();
      
      // Small orange dot at base
      c.beginPath();
      c.arc(0, size - 1.5, 0.8, 0, Math.PI * 2);
      c.fillStyle = "#E67E22";
      c.fill();
    };

    // Volumetric golden light rays originating from top center
    const drawLightRays = (c: CanvasRenderingContext2D, w: number, h: number) => {
      c.save();
      c.globalCompositeOperation = "screen";
      
      const time = Date.now() * 0.0003;
      
      // Giant radial glow base
      const centerGlow = c.createRadialGradient(w / 2, 0, 0, w / 2, 0, h * 0.8);
      centerGlow.addColorStop(0, "rgba(253, 240, 166, 0.07)");
      centerGlow.addColorStop(0.5, "rgba(253, 240, 166, 0.02)");
      centerGlow.addColorStop(1, "rgba(253, 240, 166, 0)");
      c.fillStyle = centerGlow;
      c.fillRect(0, 0, w, h);

      // Distinct swaying rays
      const numRays = 6;
      for (let i = 0; i < numRays; i++) {
        const rayAngle = Math.PI / 2 + Math.sin(time + i * 1.5) * 0.35 + (i - numRays/2) * 0.25;
        const widthAngle = 0.04 + Math.sin(time * 2 + i) * 0.01;
        
        c.beginPath();
        c.moveTo(w / 2, 0);
        
        const x1 = w / 2 + Math.cos(rayAngle - widthAngle) * h * 1.5;
        const y1 = Math.sin(rayAngle - widthAngle) * h * 1.5;
        const x2 = w / 2 + Math.cos(rayAngle + widthAngle) * h * 1.5;
        const y2 = Math.sin(rayAngle + widthAngle) * h * 1.5;
        
        c.lineTo(x1, y1);
        c.lineTo(x2, y2);
        c.closePath();

        const rayGrad = c.createRadialGradient(w / 2, 0, 0, w / 2, 0, h);
        rayGrad.addColorStop(0, "rgba(253, 240, 166, 0.05)");
        rayGrad.addColorStop(0.6, "rgba(253, 240, 166, 0.015)");
        rayGrad.addColorStop(1, "rgba(253, 240, 166, 0)");
        
        c.fillStyle = rayGrad;
        c.fill();
      }
      
      c.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now();

      // 1. Draw light rays in background layer
      drawLightRays(ctx, width, height);

      // 2. Draw gold dust particles
      ctx.save();
      goldDust.forEach((d, index) => {
        // Drift position
        d.y += d.speedY;
        d.x += d.speedX + Math.sin(time * d.freq) * d.amp * 0.15;
        
        // Reset if off screen
        if (d.y > height + 10 || d.x < -10 || d.x > width + 10) {
          goldDust[index] = createDust();
          return;
        }

        // Draw soft golden glowing sphere
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        
        const dustGrad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.size);
        dustGrad.addColorStop(0, "#FFFFFF");
        dustGrad.addColorStop(0.3, "#FFF2A3");
        dustGrad.addColorStop(0.7, "rgba(212, 175, 55, 0.6)");
        dustGrad.addColorStop(1, "rgba(212, 175, 55, 0)");
        
        ctx.fillStyle = dustGrad;
        ctx.globalAlpha = d.opacity * (0.6 + Math.sin(time * 0.005 + index) * 0.3); // shimmering glow
        ctx.fill();
      });
      ctx.restore();

      // 3. Draw falling floral petals
      petals.forEach((p, index) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += p.spin;

        if (p.y > height + 20 || p.x < -20 || p.x > width + 20) {
          petals[index] = createPetal();
          return;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;

        if (p.type === "rose") {
          drawRosePetal(ctx, p.size);
        } else {
          drawJasminePetal(ctx, p.size);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10 select-none bg-transparent"
    />
  );
}
