"use client";

import { useEffect, useRef } from "react";

type ParticleFieldProps = {
  variant?: "hero" | "story" | "subtle";
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  pointerVx: number;
  pointerVy: number;
  size: number;
  hue: number;
};

export default function ParticleField({ variant = "hero" }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let animationFrame = 0;
    let particles: Particle[] = [];
    const pointer = { x: 0, y: 0, active: false };
    const multiplier = variant === "subtle" ? 0.42 : variant === "story" ? 0.62 : 1.08;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.floor(Math.min(120, Math.max(44, (width * height) / 18000)) * multiplier);
      particles = Array.from({ length: count }, (_, index) => ({
        x: (Math.sin(index * 91.7) * 0.5 + 0.5) * width,
        y: (Math.cos(index * 57.3) * 0.5 + 0.5) * height,
        vx: (Math.sin(index * 13.4) * 0.42) + 0.08,
        vy: (Math.cos(index * 17.8) * 0.42) - 0.02,
        pointerVx: 0,
        pointerVy: 0,
        size: 1.2 + ((index * 7) % 9) / 8,
        hue: index % 3,
      }));
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (variant === "subtle" || prefersReducedMotion) return;

      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active =
        pointer.x >= 0 && pointer.x <= rect.width && pointer.y >= 0 && pointer.y <= rect.height;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const draw = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      particles.forEach((particle, index) => {
        if (!prefersReducedMotion) {
          if (pointer.active) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.max(1, Math.hypot(dx, dy));
            const radius = 180;

            if (distance < radius) {
              const force = Math.pow(1 - distance / radius, 2) * 0.48;
              particle.pointerVx += (dx / distance) * force;
              particle.pointerVy += (dy / distance) * force;
            }
          }

          particle.pointerVx *= 0.91;
          particle.pointerVy *= 0.91;
          particle.x += particle.vx + particle.pointerVx;
          particle.y += particle.vy + particle.pointerVy;
          particle.x += Math.sin((frame + index * 11) * 0.012) * 0.18;
          particle.y += Math.cos((frame + index * 9) * 0.012) * 0.18;
        }

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        const color =
          particle.hue === 0
            ? "rgba(57, 210, 255, 0.72)"
            : particle.hue === 1
              ? "rgba(27, 118, 232, 0.66)"
              : "rgba(8, 62, 145, 0.54)";

        context.beginPath();
        context.fillStyle = color;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();

        for (let j = index + 1; j < particles.length; j += 1) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const limit = variant === "subtle" ? 94 : 122;
          if (distance < limit) {
            context.strokeStyle = `rgba(57, 210, 255, ${0.13 * (1 - distance / limit)})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });

      context.globalCompositeOperation = "source-over";
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [variant]);

  return <canvas className={`particle-field particle-field--${variant}`} ref={canvasRef} aria-hidden="true" />;
}
