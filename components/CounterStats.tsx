"use client";

import { useEffect, useRef, useState } from "react";
import { companyStats } from "../data/company-stats";

type CounterStat = {
  value: number;
  label: string;
};

const stats: CounterStat[] = companyStats.map(({ value, label }) => ({ value, label }));

const formatValue = (value: number) => value.toLocaleString("en-US");

export default function CounterStats() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [values, setValues] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.32 }
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let animationFrame = 0;
    const duration = 1400;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValues(stats.map((stat) => Math.round(stat.value * eased)));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [hasStarted]);

  return (
    <div className="counter-grid" ref={rootRef}>
      {stats.map((stat, index) => (
        <div className="counter-card" key={stat.label}>
          <strong>
            {formatValue(values[index])}
            <span>+</span>
          </strong>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
