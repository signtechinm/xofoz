"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "IT Services",
    image: "/services/managed-it-amc.png",
    copy: "Managed IT, IT AMC, support, consulting, relocation, cloud migration, office setup, and complete IT outsourcing for Abu Dhabi businesses.",
    href: "/services/it-services",
  },
  {
    title: "Cyber Security",
    image: "/services/cybersecurity.png",
    copy: "Layered protection for endpoints, identity, email, network perimeter, vulnerabilities, and mobile devices.",
    href: "/services/cyber-security",
  },
  {
    title: "Data Backup and Protection",
    image: "/services/cloud-microsoft-365.png",
    copy: "DLP, disaster recovery, business continuity, managed backup, and device management for critical business data.",
    href: "/services/data-backup-protection",
  },
  {
    title: "Server and Storage",
    image: "/services/office-it-setup.png",
    copy: "Business servers, NAS, scalable storage, and synchronized data platforms designed, installed, and managed as one system.",
    href: "/services/server-storage",
  },
  {
    title: "Network Solutions",
    image: "/services/structured-cabling.png",
    copy: "Network design, switching, routing, structured cabling, enterprise WiFi, proxy services, VPN, and secure remote connectivity.",
    href: "/services/network-solutions",
  },
  {
    title: "Communication and LV",
    image: "/services/office-it-setup.png",
    copy: "CCTV, access control, IP phones, biometric attendance, intercom, AV, PA, LED panels, and complete ELV systems.",
    href: "/services/communication-lv",
  },
  {
    title: "Cloud",
    image: "/services/cloud-microsoft-365.png",
    copy: "Azure infrastructure, managed web hosting, desktop as a service, and collaboration tools for flexible business operations.",
    href: "/services/cloud",
  },
  {
    title: "AI Solutions",
    image: "/services/cybersecurity.png",
    copy: "AI-powered CCTV and intelligent video analytics for automated event detection and proactive security monitoring.",
    href: "/services/ai-solutions",
  },
  {
    title: "Software Solutions",
    image: "/services/cloud-microsoft-365.png",
    copy: "ERP, design software, POS, GPS tracking, visitor management, and professional web design for UAE businesses.",
    href: "/services/software-solutions",
  },
  {
    title: "Microsoft Cloud",
    image: "/services/cloud-microsoft-365.png",
    copy: "Microsoft 365, Copilot, security, migrations, SharePoint, Modern Workplace, and Windows 365 services.",
    href: "/services/microsoft-cloud",
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
                IT services built for Abu Dhabi businesses.
              </h2>
              <p>
                Explore ten specialist categories that keep UAE businesses
                secure, connected, productive, and ready to grow.
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
                      <a href={service.href}>Explore this category <b aria-hidden="true">→</b></a>
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
