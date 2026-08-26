"use client";

import { useEffect, useRef, useState } from "react";
import { companyStats } from "../data/company-stats";

export default function CompanyStatsCounter({
  className,
  ariaLabel = "XOFOZ company highlights",
}: {
  className: string;
  ariaLabel?: string;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
    }, { threshold: 0.25 });

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={className} aria-label={ariaLabel} ref={rootRef}>
      {companyStats.map((stat) => (
        <div key={stat.label}>
          <strong>{Math.round(stat.value * progress).toLocaleString("en-US")}{stat.suffix}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
