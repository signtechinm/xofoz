"use client";

import { useState } from "react";

type Industry = [string, string];

const images = [
  "/industries/hospitality.png",
  "/industries/real-estate.png",
  "/industries/construction.png",
  "/industries/logistics.png",
  "/industries/manufacturing.png",
];

export default function IndustryAccordion({ industries }: { industries: Industry[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section industries-section" id="industries">
      <div className="page-band">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">Industry Experience</span>
          <h2 className="section-title">IT solutions for major industries in Abu Dhabi.</h2>
          <p>Every sector has different operational, security, and infrastructure requirements.</p>
        </div>

        <div className="industry-accordion">
          {industries.map(([title, copy], index) => (
            <article
              className={`industry-accordion__panel${index === activeIndex ? " is-active" : ""}`}
              key={title}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              style={{ backgroundImage: `url(${images[index]})` }}
              tabIndex={0}
            >
              <span className="industry-accordion__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="industry-accordion__content">
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
