"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScratchCardProps {
  onComplete?: () => void;
  children: React.ReactNode;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
}

export default function ScratchCard({ onComplete, children }: ScratchCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Resize canvases to cover container exactly
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && canvasRef.current && particleCanvasRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCanvasSize({ width: rect.width, height: rect.height });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize Canvas Gold Foil Layer
  useEffect(() => {
    if (canvasSize.width === 0 || canvasSize.height === 0 || !canvasRef.current || !particleCanvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Reset dimensions for both canvases
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    const pCanvas = particleCanvasRef.current;
    pCanvas.width = canvasSize.width;
    pCanvas.height = canvasSize.height;

    // Draw Gold Foil Metallic Gradient
    const goldGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    goldGrad.addColorStop(0, "#A67C1E");
    goldGrad.addColorStop(0.2, "#D4AF37");
    goldGrad.addColorStop(0.4, "#FFF2A3");
    goldGrad.addColorStop(0.6, "#D4AF37");
    goldGrad.addColorStop(0.8, "#F5D36D");
    goldGrad.addColorStop(1, "#A67C1E");

    ctx.fillStyle = goldGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Overlay fine noise texture to simulate printed matte card stock
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    for (let i = 0; i < canvas.width; i += 3) {
      for (let j = 0; j < canvas.height; j += 3) {
        if (Math.random() > 0.5) {
          ctx.fillRect(i, j, 1.5, 1.5);
        }
      }
    }

    // Outer decorative gold outline border inside scratch card
    ctx.strokeStyle = "#8A640F";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(6, 6, canvas.width - 12, canvas.height - 12);
    
    ctx.strokeStyle = "#FFF2A3";
    ctx.lineWidth = 0.5;
    ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);

    // Draw Traditional Lotus Seal Watermark in center of scratch card
    ctx.strokeStyle = "rgba(138, 100, 15, 0.25)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 45, 0, Math.PI * 2);
    ctx.stroke();

    // Calligraphic instruction text
    ctx.fillStyle = "#5E0914";
    ctx.font = "italic bold 16px 'Playfair Display', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Add text shadow
    ctx.shadowColor = "rgba(253, 240, 166, 0.5)";
    ctx.shadowBlur = 1;
    ctx.shadowOffsetX = 0.5;
    ctx.shadowOffsetY = 0.5;
    ctx.fillText("Reveal The Muhurtham", canvas.width / 2, canvas.height / 2 - 12);
    
    ctx.fillStyle = "#8A640F";
    ctx.font = "bold 9px 'Cormorant Garamond', serif";
    ctx.fillText("SCRATCH WITH TOUCH OR MOUSE", canvas.width / 2, canvas.height / 2 + 15);
    
    // Reset shadow
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

  }, [canvasSize]);

  // Particle Physics Animation Loop
  useEffect(() => {
    const pCanvas = particleCanvasRef.current;
    if (!pCanvas) return;
    const pCtx = pCanvas.getContext("2d");
    if (!pCtx) return;

    const animateParticles = () => {
      const particles = particlesRef.current;
      
      // Clear previous frames
      pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);

      if (particles.length > 0) {
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.08; // gravity
          p.opacity -= 0.015; // smooth fading
          p.life -= 1;

          if (p.life <= 0 || p.opacity <= 0) {
            particles.splice(i, 1);
            continue;
          }

          // Draw glistening sparkle
          pCtx.beginPath();
          pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          pCtx.fillStyle = p.color;
          pCtx.globalAlpha = p.opacity;
          pCtx.fill();
        }
      }

      // Continue the loop if there are active particles, or if we haven't revealed yet
      if (particles.length > 0 || !isRevealed) {
        animationFrameRef.current = requestAnimationFrame(animateParticles);
      } else {
        // Clean up loop when all particles are dead
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animateParticles);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRevealed]);

  // Trigger center particle burst upon full reveal
  const triggerBurst = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const colors = ["#FFF2A3", "#D4AF37", "#A67C1E", "#FFFFFF", "#FFD700", "#FFDF00"];
    const burstCount = 65;

    for (let i = 0; i < burstCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4.5 + 1.5;
      particlesRef.current.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.2, // upward launch bias
        size: Math.random() * 2.8 + 0.8,
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 60 + Math.floor(Math.random() * 25),
      });
    }
  };

  // Calculate scratched area percentage
  const checkScratchPercentage = () => {
    if (isRevealed) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData.data;
      let transparentPixels = 0;

      // Sample every 32nd pixel for performance
      const step = 32;
      for (let i = 3; i < pixels.length; i += step) {
        if (pixels[i] === 0) {
          transparentPixels++;
        }
      }

      const totalSamples = Math.floor(pixels.length / step);
      if (totalSamples > 0) {
        const percentageCleared = transparentPixels / totalSamples;

        // If cleared more than 55%, trigger dissolve reveal
        if (percentageCleared > 0.55) {
          setIsRevealed(true);
          setIsDrawing(false); // Stop drawing immediately
          triggerBurst();
          if (onComplete) onComplete();
        }
      }
    } catch (e) {
      // Ignore security policy issues
    }
  };

  // Drag scratch draw action
  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Draw scratch path (destination-out)
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Spawn gold dust particles on drag
    const colors = ["#FFF2A3", "#D4AF37", "#A67C1E", "#FFFFFF"];
    for (let i = 0; i < 3; i++) {
      particlesRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 3.5,
        vy: (Math.random() - 0.5) * 2.5 - 0.8, // shoot slightly upwards
        size: Math.random() * 2.2 + 0.8,
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 40 + Math.floor(Math.random() * 15),
      });
    }

    checkScratchPercentage();
  };

  // Event handlers for mouse & touch
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isRevealed) return;
    setIsDrawing(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing || isRevealed) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUpOrLeave = () => {
    setIsDrawing(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isRevealed) return;
    setIsDrawing(true);
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDrawing || isRevealed) return;
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full overflow-hidden select-none cursor-crosshair rounded-lg"
    >
      {/* Underlying content */}
      <div className="w-full relative z-0">
        {children}
      </div>

      {/* Subtle shimmer sheen after reveal */}
      {isRevealed && (
        <motion.div
          initial={{ x: "-150%" }}
          animate={{ x: "150%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          className="absolute inset-y-0 w-[60%] pointer-events-none z-25"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
            transform: "skewX(-20deg)",
          }}
        />
      )}

      {/* Gold Foil Scratch Cover Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          opacity: isRevealed ? 0 : 1,
          scale: isRevealed ? 1.05 : 1,
          pointerEvents: isRevealed ? "none" : "auto",
          transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out, scale 0.8s ease-in-out",
        }}
        className="absolute inset-0 z-30 touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUpOrLeave}
      />

      {/* Particle Overlay Canvas (Separate layer to prevent messy trails and keep burst rendering while foil fades) */}
      <canvas
        ref={particleCanvasRef}
        className="absolute inset-0 z-40 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
