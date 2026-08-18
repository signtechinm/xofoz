"use client";

import { useEffect, useRef } from "react";
import ParticleField from "./ParticleField";
import KarmaEmblem3D from "./KarmaEmblem3D";

export default function KarmaScrollScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const readyRef = useRef(false);
  const meltTriggeredRef = useRef(false);

  useEffect(() => {
    const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

    // 1. Karma fades + scales in first
    const t1 = setTimeout(() => {
      if (!emblemRef.current) return;
      emblemRef.current.style.transition = `opacity 1.1s ${ease}, transform 1.1s ${ease}`;
      emblemRef.current.style.opacity = "1";
      emblemRef.current.style.transform = "scale(0.92) translateY(0)";
    }, 250);

    // 2. Hero content rises in after karma is visible
    const t2 = setTimeout(() => {
      if (!heroRef.current) return;
      heroRef.current.style.transition = `opacity 0.75s ${ease}, transform 0.75s ${ease}`;
      heroRef.current.style.opacity = "1";
      heroRef.current.style.transform = "translateY(0)";
    }, 980);

    // 3. Hand full control to scroll handler — strip transitions for instant response
    const t3 = setTimeout(() => {
      readyRef.current = true;
      if (emblemRef.current) emblemRef.current.style.transition = "";
      if (heroRef.current) heroRef.current.style.transition = "";
    }, 1850);

    const onScroll = () => {
      if (!readyRef.current) return;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const scrollable = el.offsetHeight - window.innerHeight;
      const rawP = Math.max(0, Math.min(1, scrolled / Math.max(1, scrollable)));

      // 12% scroll deadzone — user must scroll a bit before anything reacts
      const p = Math.max(0, (rawP - 0.12) / 0.88);

      // Gentle shrink: 0.92 → 0.66
      const karmaScale = 0.92 - p * 0.26;
      // Hero fades out over first 35% of active scroll
      const heroOpacity = Math.max(0, 1 - p / 0.35);
      // Intro fades in from 40% → 70%
      const introOpacity = Math.min(1, Math.max(0, (p - 0.4) / 0.3));
      const introY = (1 - introOpacity) * 40;

      if (emblemRef.current) {
        emblemRef.current.style.transform = `scale(${karmaScale}) translateY(0)`;
      }
      if (heroRef.current) {
        heroRef.current.style.opacity = String(heroOpacity);
        heroRef.current.style.pointerEvents = heroOpacity > 0.05 ? "auto" : "none";
      }
      if (introRef.current) {
        introRef.current.style.opacity = String(introOpacity);
        introRef.current.style.transform = `translateY(${introY}px)`;
        introRef.current.style.pointerEvents = introOpacity > 0.05 ? "auto" : "none";
      }

      // Auto-trigger karma melt when intro first becomes visible
      if (introOpacity > 0 && !meltTriggeredRef.current && emblemRef.current) {
        meltTriggeredRef.current = true;
        triggerKarmaMelt(emblemRef.current);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="karma-scene">
      <div className="karma-scene__pin">
        <ParticleField />

        {/* Karma — enters first, then shrinks gently on scroll */}
        <div
          ref={emblemRef}
          className="karma-scene__emblem"
          style={{ opacity: 0, transform: "scale(0.72) translateY(0)" }}
        >
          <KarmaEmblem3D />
        </div>

        {/* Hero text — rises in after karma, fades out on scroll */}
        <div
          ref={heroRef}
          className="hero__content hero__content--centered karma-scene__hero"
          style={{ opacity: 0, transform: "translateY(24px)" }}
        >
          <span className="eyebrow">IT solutions provider in Abu Dhabi, UAE — since 2022</span>
          <h1>Your trusted IT solutions provider in Abu Dhabi</h1>
          <p>
            XOFOZ Information Technology provides managed IT services, genuine
            software products, and complete end-to-end IT solutions for businesses
            in Abu Dhabi and across the UAE—from IT AMC and cybersecurity to
            business software and full office IT setup.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#solutions">
              Explore our solutions
            </a>
            <a className="button button--ghost" href="https://wa.me/971523554202">
              WhatsApp us now — +971 52 355 4202
            </a>
          </div>
        </div>

        {/* Intro text — fades in over the shrinking karma */}
        <div
          ref={introRef}
          className="karma-scene__intro"
          style={{ opacity: 0, pointerEvents: "none" }}
        >
          <span className="eyebrow">One accountable technology partner</span>
          <h2 className="intro-band__heading">
            Services, products, and complete solutions built around your business
          </h2>
          <p className="intro-band__body">
            XOFOZ combines ongoing IT support, authorised technology products,
            and end-to-end project delivery under one Abu Dhabi-based team. We
            assess the requirement, recommend the right approach, implement it,
            and remain accountable for ongoing support.
          </p>
        </div>
      </div>
    </div>
  );
}

/** Simulates hovering over the karma center to trigger its liquid melt effect */
function triggerKarmaMelt(emblemEl: HTMLElement) {
  const rect = emblemEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const r = Math.min(rect.width, rect.height) * 0.12;

  let ticks = 0;
  const id = setInterval(() => {
    const angle = Math.random() * Math.PI * 2;
    const d = Math.random() * r;
    window.dispatchEvent(
      new PointerEvent("pointermove", {
        clientX: cx + Math.cos(angle) * d,
        clientY: cy + Math.sin(angle) * d,
        bubbles: true,
      })
    );
    if (++ticks >= 36) clearInterval(id);
  }, 50);
}
