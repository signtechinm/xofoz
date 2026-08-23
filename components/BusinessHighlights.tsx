"use client";

import { useEffect, useRef, useState } from "react";
import { companyStats } from "../data/company-stats";

const highlights = companyStats;

export default function BusinessHighlights() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      return;
    }

    const startedAt = performance.now();
    let frame = 0;
    const animate = (now: number) => {
      const raw = Math.min(1, (now - startedAt) / 1300);
      setProgress(1 - Math.pow(1 - raw, 3));
      if (raw < 1) frame = window.requestAnimationFrame(animate);
    };
    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [started]);

  return (
    <section className="trust-strip" aria-label="XOFOZ business highlights" ref={rootRef}>
      {highlights.map((highlight) => (
        <div className="trust-item" key={highlight.label}>
          <strong>
            {Math.round(highlight.value * progress).toLocaleString("en-US")}
            {highlight.suffix}
          </strong>
          <span>{highlight.label}</span>
        </div>
      ))}
    </section>
  );
}
