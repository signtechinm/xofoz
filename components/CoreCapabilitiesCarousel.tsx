"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Managed IT / AMC",
    image: "/services/managed-it-amc.png",
    copy: "Prevent downtime with maintenance plans, remote support, on-site visits, monitoring, reporting, and dedicated technical ownership.",
  },
  {
    title: "On-Call IT Support",
    image: "/services/on-call-it-support.png",
    copy: "Resolve laptop, desktop, printer, email, Wi-Fi, server, firewall, backup, CCTV, and office technology issues.",
  },
  {
    title: "Office IT Setup",
    image: "/services/office-it-setup.png",
    copy: "Plan and install cabling, internet, firewall, Wi-Fi, workstations, email, printers, CCTV, biometrics, and backup.",
  },
  {
    title: "Cybersecurity",
    image: "/services/cybersecurity.png",
    copy: "Protect users, devices, network, and data with firewall, endpoint protection, VPN, policy setup, and monitoring.",
  },
  {
    title: "Structured Cabling",
    image: "/services/structured-cabling.png",
    copy: "Build reliable office, CCTV, Wi-Fi, telephone, fiber, audio/video, data center, villa, and warehouse cabling systems.",
  },
  {
    title: "Cloud And Microsoft 365",
    image: "/services/cloud-microsoft-365.png",
    copy: "Handle email migration, Microsoft 365 setup, cloud storage, user onboarding, security hardening, and support.",
  },
  {
    title: "CCTV And Access Control",
    image: "/services/office-it-setup.png",
    copy: "Plan camera coverage, install surveillance systems, configure recording, and connect biometric or card-based access control.",
  },
  {
    title: "Hardware And AV Solutions",
    image: "/services/on-call-it-support.png",
    copy: "Supply and set up business computers, servers, printers, PABX, POS, meeting-room displays, and video-conferencing systems.",
  },
  {
    title: "ERP And Tally Prime",
    image: "/services/cloud-microsoft-365.png",
    copy: "Support genuine licensing, implementation, company setup, user training, migration, and ongoing accounting-software requirements.",
  },
  {
    title: "Website Development",
    image: "/services/cybersecurity.png",
    copy: "Create responsive business websites with clear service content, enquiry paths, search foundations, analytics, and ongoing support.",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function CoreCapabilitiesCarousel() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const rawProgress = clamp(-rect.top / travel, 0, 1);
      const activeStep = Math.round(rawProgress * (services.length - 1));

      setProgress(activeStep / (services.length - 1));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const slideProgress = progress * (services.length - 1);
  const activeIndex = Math.round(slideProgress);

  return (
    <section
      className="section core-capabilities-section core-capabilities-scroll"
      ref={sectionRef}
    >
      <div className="core-capabilities-sticky">
        <div className="page-band core-capabilities-inner">
          <div className="core-carousel-layout">
            <div className="core-carousel-copy">
              <span className="eyebrow">Core Capabilities</span>
              <h2>
                One accountable partner for support, setup, security, and
                infrastructure.
              </h2>
              <p>
                Scroll through the service stack XOFOZ manages for growing UAE
                offices.
              </p>
              <div className="core-carousel-progress" aria-hidden="true">
                <span style={{ transform: `scaleX(${progress})` }} />
              </div>
            </div>

            <div className="core-carousel-stage" aria-label="XOFOZ core services">
              {services.map((service, index) => {
                const offset = index - slideProgress;
                const absOffset = Math.abs(offset);
                const isActive = index === activeIndex;
                const transform = [
                  `translateX(${offset * 44}%)`,
                  `translateZ(${Math.max(-260, 90 - absOffset * 160)}px)`,
                  `rotateY(${offset * -22}deg)`,
                  `rotateZ(${offset * -1.8}deg)`,
                ].join(" ");

                return (
                  <article
                    className={`core-carousel-card ${isActive ? "is-active" : ""}`}
                    key={service.title}
                    style={{
                      opacity: clamp(1 - absOffset * 0.34, 0.18, 1),
                      transform,
                      zIndex: services.length - Math.round(absOffset * 10),
                    }}
                  >
                    <div className="core-carousel-card__image">
                      <img src={service.image} alt="" aria-hidden="true" />
                    </div>
                    <div className="core-carousel-card__body">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{service.title}</h3>
                      <p>{service.copy}</p>
                      <a href="/contact#consultation">Discuss this service <b aria-hidden="true">→</b></a>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="core-carousel-tabs" aria-label="Current service">
              {services.map((service, index) => (
                <span className={index === activeIndex ? "is-active" : ""} key={service.title}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
