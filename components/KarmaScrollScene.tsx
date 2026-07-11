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
      emblemRef.current.style.transform = "scale(0.92) translateY(3%)";
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
        emblemRef.current.style.transform = `scale(${karmaScale}) translateY(3%)`;
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
          style={{ opacity: 0, transform: "scale(0.72) translateY(3%)" }}
        >
          <KarmaEmblem3D />
        </div>

        {/* Hero text — rises in after karma, fades out on scroll */}
        <div
          ref={heroRef}
          className="hero__content hero__content--centered karma-scene__hero"
          style={{ opacity: 0, transform: "translateY(24px)" }}
        >
          <span className="eyebrow">Abu Dhabi IT Support</span>
          <h1>Managed IT support and technology services for UAE businesses.</h1>
          <p>
            XOFOZ helps companies set up, secure, monitor, and maintain their
            office technology with responsive local support and practical
            engineering.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="/contact">
              Get IT Support
            </a>
            <a className="button button--ghost" href="/contact#consultation">
              Request Consultation
            </a>
          </div>
        </div>

        {/* Intro text — fades in over the shrinking karma */}
        <div
          ref={introRef}
          className="karma-scene__intro"
          style={{ opacity: 0, pointerEvents: "none" }}
        >
          <span className="eyebrow">IT Company in Abu Dhabi</span>
          <h2 className="intro-band__heading">
            We understand what you need and we design the solutions
          </h2>
          <p className="intro-band__body">
            XOFOZ Information Technology is one of the best IT companies in Abu
            Dhabi with a dedicated team led by a group of young, dynamic,
            technically proficient, and creative people. Our comprehensive
            services include on-site technical support, online support, 24/7
            Emergency support, IT consulting, project planning and
            implementation, hardware &amp; software sales and daily network
            administration service.
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
