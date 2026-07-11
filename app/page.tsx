import ParticleField from "../components/ParticleField";
import Reveal from "../components/Reveal";
import KarmaScrollScene from "../components/KarmaScrollScene";
import CoreCapabilitiesCarousel from "../components/CoreCapabilitiesCarousel";
import CounterStats from "../components/CounterStats";
import PointerLight from "../components/PointerLight";

const processSteps = [
  {
    title: "Assess",
    copy: "Review the office setup, users, devices, network, security, and urgent support needs.",
  },
  {
    title: "Plan",
    copy: "Create a practical support or implementation path with priorities, timelines, and ownership.",
  },
  {
    title: "Install",
    copy: "Set up the required hardware, cabling, firewall, Wi-Fi, cloud tools, and workstations.",
  },
  {
    title: "Secure",
    copy: "Harden access, backups, endpoint protection, firewall rules, VPN, and user policies.",
  },
  {
    title: "Support",
    copy: "Monitor, maintain, troubleshoot, report, and keep the technology environment moving.",
  },
];

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "XOFOZ Information Technology",
    url: "https://xofoz.com/",
    image: "https://xofoz.com/brand/xofoz-logo.png",
    email: "hello@xofoz.com",
    telephone: "026 220 071",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No: M01, Shabia-10",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    openingHours: "Mo-Sa 08:30-18:30",
    areaServed: "United Arab Emirates",
    description:
      "Managed IT support, office IT setup, cybersecurity, cabling, and business technology services in Abu Dhabi.",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <KarmaScrollScene />

      <section className="trust-strip" aria-label="XOFOZ service highlights">
        {[
          ["UAE", "Local service coverage"],
          ["Fast", "On-call support response"],
          ["Secure", "Firewall and endpoint focus"],
          ["Complete", "Office IT setup partner"],
        ].map(([title, label]) => (
          <Reveal className="trust-item" key={title}>
            <strong>{title}</strong>
            <span>{label}</span>
          </Reveal>
        ))}
      </section>

      <CoreCapabilitiesCarousel />

      <section className="story-section">
        <ParticleField variant="story" />
        <Reveal className="story-stage page-band">
          <div className="story-copy">
            <span className="eyebrow">How XOFOZ Works</span>
            <h2>A clear step-by-step path from audit to support.</h2>
            <p>
              XOFOZ starts with the real office requirement, then moves through
              a practical sequence so every setup, security decision, and
              support handover has clear ownership.
            </p>
          </div>
          <ol className="story-steps" aria-label="XOFOZ step-by-step process">
            {processSteps.map((step, index) => (
              <li className="story-step" key={step.title}>
                <strong className="story-step__number">
                  {String(index + 1).padStart(2, "0")}
                </strong>
                <div className="story-step__content">
                  <span>Step {index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="section why-section">
        <PointerLight />
        <div className="page-band why-section__inner">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">Why Businesses Choose XOFOZ</span>
            <h2>Clear ownership when office technology needs to keep moving.</h2>
          </Reveal>

          <CounterStats />

          <Reveal className="value-list" delay={0.08}>
            <div>
              <h3>Responsive support</h3>
              <p>
                Phone, remote, and on-site support paths for day-to-day issues and
                urgent business disruptions.
              </p>
            </div>
            <div>
              <h3>Qualified engineers</h3>
              <p>
                Practical support across networks, devices, servers, security,
                cabling, communication systems, and cloud tools.
              </p>
            </div>
            <div>
              <h3>Security-first mindset</h3>
              <p>
                Firewall, endpoint, backup, and access decisions are built into
                the support plan instead of treated as an afterthought.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="cta-section">
        <div className="cta-band cta-band--marquee">
          <div className="cta-band__topline">
            <span className="eyebrow">Need IT help in Abu Dhabi?</span>
            <div className="cta-band__actions">
              <a className="button button--primary" href="/contact">
                Contact XOFOZ
              </a>
              <a className="button button--ghost" href="tel:026220071">
                Call Now
              </a>
            </div>
          </div>
          <h2 className="cta-band__marquee">
            <span>Talk to XOFOZ about support, setup, or security.</span>
            <span aria-hidden="true">Talk to XOFOZ about support, setup, or security.</span>
          </h2>
        </div>
      </Reveal>
    </main>
  );
}
