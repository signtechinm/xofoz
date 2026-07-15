"use client";

import { useRef, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const moveTo = (nextIndex: number) => {
    const track = trackRef.current;
    if (!track) return;
    const index = (nextIndex + testimonials.length) % testimonials.length;
    const card = track.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveIndex(index);
  };

  const updateActive = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const next = cards.reduce((closest, card, index) => {
      const currentDistance = Math.abs(card.offsetLeft - track.scrollLeft);
      const closestDistance = Math.abs(cards[closest].offsetLeft - track.scrollLeft);
      return currentDistance < closestDistance ? index : closest;
    }, 0);
    setActiveIndex(next);
  };

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="page-band testimonial-carousel">
        <div className="testimonial-carousel__top">
          <div className="section-heading">
            <span className="eyebrow">Client Feedback</span>
            <h2 className="section-title">What UAE businesses say about XOFOZ.</h2>
            <p>Sample testimonial content is included for layout review and should be replaced with approved customer reviews.</p>
          </div>
          <div className="testimonial-carousel__controls">
            <button type="button" onClick={() => moveTo(activeIndex - 1)} aria-label="Previous testimonial">←</button>
            <button type="button" onClick={() => moveTo(activeIndex + 1)} aria-label="Next testimonial">→</button>
          </div>
        </div>

        <div className="testimonial-carousel__viewport">
          <div className="testimonial-carousel__track" onScroll={updateActive} ref={trackRef}>
            {testimonials.map((testimonial, index) => (
              <article className={`testimonial-card${index === activeIndex ? " is-active" : ""}`} key={`${testimonial.role}-${index}`}>
                <div className="testimonial-card__stars" aria-label="Five stars">★★★★★</div>
                <blockquote>“{testimonial.quote}”</blockquote>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonial-carousel__dots" aria-label={`Testimonial ${activeIndex + 1} of ${testimonials.length}`}>
          {testimonials.map((testimonial, index) => (
            <button
              className={index === activeIndex ? "is-active" : ""}
              key={`${testimonial.name}-${index}`}
              onClick={() => moveTo(index)}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
