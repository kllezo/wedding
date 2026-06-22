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

    const petals: Petal[] = [];
    const maxPetals = 35; // Kept low for a subtle, elegant feel

    const createPetal = (isInitial = false): Petal => {
      const type = Math.random() > 0.4 ? "rose" : "jasmine";
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : -10,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.8 + 0.5,
        speedX: Math.random() * 0.6 - 0.3,
        angle: Math.random() * Math.PI * 2,
        spin: Math.random() * 0.02 - 0.01,
        type,
        opacity: Math.random() * 0.4 + 0.4, // Between 0.4 and 0.8
      };
    };

    // Populate initial petals
    for (let i = 0; i < maxPetals; i++) {
      petals.push(createPetal(true));
    }

    const drawRosePetal = (c: CanvasRenderingContext2D, size: number) => {
      c.beginPath();
      // Draw a teardrop/heart shape representing a rose petal
      c.moveTo(0, -size / 2);
      c.bezierCurveTo(size / 2, -size, size, -size / 2, size / 2, size / 2);
      c.bezierCurveTo(0, size, -size, size, -size / 2, size / 2);
      c.bezierCurveTo(-size, -size / 2, -size / 2, -size, 0, -size / 2);
      c.closePath();
      
      // Gradient for rich rose look
      const grad = c.createRadialGradient(0, 0, 0, 0, 0, size);
      grad.addColorStop(0, "#D81B60"); // Bright rose
      grad.addColorStop(0.8, "#880E4F"); // Deep rose/maroon
      grad.addColorStop(1, "#4A001F"); // Dark border
      c.fillStyle = grad;
      c.fill();
    };

    const drawJasminePetal = (c: CanvasRenderingContext2D, size: number) => {
      c.beginPath();
      // Draw a slender white petal
      c.ellipse(0, 0, size / 2, size, 0, 0, Math.PI * 2);
      c.closePath();
      
      // White to soft ivory gradient with a hint of yellow stem at one end
      const grad = c.createLinearGradient(0, -size, 0, size);
      grad.addColorStop(0, "#FFFFFF");
      grad.addColorStop(0.8, "#FFFDE7");
      grad.addColorStop(1, "#FFF59D"); // Yellowish tip
      c.fillStyle = grad;
      c.fill();
      
      // Tiny orange dot at base of jasmine
      c.beginPath();
      c.arc(0, size - 2, 1, 0, Math.PI * 2);
      c.fillStyle = "#E67E22";
      c.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p, index) => {
        // Update position
        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += p.spin;

        // Reset if it goes off screen
        if (p.y > height + 20 || p.x < -20 || p.x > width + 20) {
          petals[index] = createPetal();
          return;
        }

        // Draw petal
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
      className="fixed inset-0 w-full h-full pointer-events-none z-10 select-none"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}
