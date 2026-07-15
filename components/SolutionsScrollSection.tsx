"use client";

import { useEffect, useRef, useState } from "react";

type Solution = {
  title: string;
  copy: string;
  steps: string[];
  cta: string;
};

const backgrounds = [
  "/services/structured-cabling.png",
  "/services/office-it-setup.png",
  "/services/on-call-it-support.png",
];

export default function SolutionsScrollSection({ solutions }: { solutions: Solution[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / scrollDistance));
      const nextIndex = Math.min(solutions.length - 1, Math.round(progress * (solutions.length - 1)));
      setActiveIndex((current) => current === nextIndex ? current : nextIndex);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [solutions.length]);

  return (
    <section className="solutions-scroll" id="solutions" ref={sectionRef}>
      <div className="solutions-scroll__sticky">
        <div className="solutions-scroll__backgrounds" aria-hidden="true">
          {backgrounds.map((background, index) => (
            <div
              className={index === activeIndex ? "is-active" : ""}
              key={background}
              style={{ backgroundImage: `url(${background})` }}
            />
          ))}
        </div>

        <div className="page-band solutions-scroll__inner">
          <div className="solutions-scroll__copy">
            <span className="eyebrow">Problem-led Solutions</span>
            <h2 className="section-title">Facing an IT challenge? We engineer the complete solution.</h2>
            <p>
              You do not need to know which hardware to buy or where to start.
              Tell us the problem and we will assess, design, implement, and hand over the solution.
            </p>
            <div className="solutions-scroll__progress" aria-label={`Solution ${activeIndex + 1} of ${solutions.length}`}>
              {solutions.map((solution, index) => (
                <span className={index === activeIndex ? "is-active" : ""} key={solution.title} />
              ))}
            </div>
          </div>

          <div className="solutions-scroll__cards">
            {solutions.map((solution, index) => (
              <article className={`solution-card solution-card--scroll${index === activeIndex ? " is-active" : ""}`} key={solution.title}>
                <span className="solution-card__icon" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{solution.title}</h3>
                <p>{solution.copy}</p>
                <div className="solution-card__steps">
                  {solution.steps.map((step) => <span key={step}>{step}</span>)}
                </div>
                <a href="/contact#consultation">{solution.cta} <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
