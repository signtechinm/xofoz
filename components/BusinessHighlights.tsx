"use client";

import { useEffect, useRef, useState } from "react";

const highlights = [
  { value: 9, suffix: "+", label: "Years in business" },
  { value: 150, suffix: "+", label: "AMC clients" },
  { value: 27, suffix: "+", label: "Enterprise clients" },
  { text: "Abu Dhabi", label: "UAE-based team" },
];

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
        <div className={`trust-item${highlight.text ? " trust-item--location" : ""}`} key={highlight.label}>
          <strong>
            {highlight.text ?? Math.round((highlight.value ?? 0) * progress)}
            {highlight.suffix}
          </strong>
          <span>{highlight.label}</span>
        </div>
      ))}
    </section>
  );
}
