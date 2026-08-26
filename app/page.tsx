import type { Metadata } from "next";
import Link from "next/link";
import ParticleField from "../components/ParticleField";
import Reveal from "../components/Reveal";
import KarmaScrollScene from "../components/KarmaScrollScene";
import CoreCapabilitiesCarousel from "../components/CoreCapabilitiesCarousel";
import PointerLight from "../components/PointerLight";
import ClientLogoSection from "../components/ClientLogoSection";
import SolutionsScrollSection from "../components/SolutionsScrollSection";
import IndustryAccordion from "../components/IndustryAccordion";
import BusinessHighlights from "../components/BusinessHighlights";
import ConsultationSection from "../components/ConsultationSection";
import { productBrandLogos } from "../data/product-brand-logos";

export const metadata: Metadata = {
  title: { absolute: "XOFOZ | IT Solutions Provider in Abu Dhabi, UAE" },
  description: "XOFOZ is an Abu Dhabi IT solutions provider delivering managed IT services, genuine technology products, and complete business IT solutions across the UAE.",
  alternates: { canonical: "/" },
};

const pillars = [
  {
    number: "01",
    title: "Managed IT services Abu Dhabi",
    copy: "Expert IT support, maintenance, and infrastructure management for UAE businesses, delivered by an accountable team based in Abu Dhabi.",
    link: "Explore our services",
    href: "#services",
    image: "/pillars/managed-it-services.png",
  },
  {
    number: "02",
    title: "Authorised IT products UAE",
    copy: "Genuine software, security, cloud, CCTV, and infrastructure products supplied, implemented, and supported across the UAE by one local team.",
    link: "View our products",
    href: "#products",
    image: "/pillars/authorised-it-products.png",
  },
  {
    number: "03",
    title: "Complete IT solutions Abu Dhabi",
    copy: "Tell us the business problem. XOFOZ assesses, plans, implements, secures, and hands over the complete solution from start to finish.",
    link: "See our solutions",
    href: "#solutions",
    image: "/pillars/complete-it-solutions.png",
  },
];

const solutions = [
  {
    title: "Need to install CCTV in your building?",
    copy: "Our engineers survey your property, design the camera coverage plan, recommend suitable equipment, complete the installation, and train your team.",
    steps: ["Site survey", "Blueprint", "Hardware", "Install", "Handover"],
    cta: "Get a CCTV consultation",
  },
  {
    title: "Is your office Wi-Fi slow or unreliable?",
    copy: "We assess the workspace, calculate coverage requirements, select suitable access points, and deploy a tested wireless network without dead zones.",
    steps: ["Coverage plan", "AP selection", "Deployment", "Testing"],
    cta: "Request a Wi-Fi assessment",
  },
  {
    title: "Are your computers or IT systems underperforming?",
    copy: "Our engineers diagnose hardware, software, or network bottlenecks, resolve the root cause, and put preventive measures in place.",
    steps: ["Diagnose", "Fix root cause", "Secure", "Prevent"],
    cta: "Get IT support now",
  },
];

const industries: [string, string, string, string][] = [
  ["IT solutions for hospitality Abu Dhabi", "Guest WiFi, POS support, CCTV, and complete IT infrastructure management for hotels, resorts, and F&B operations.", "/industries/hospitality", "/industries/hospitality-hero-v2.webp"],
  ["IT solutions for real estate UAE", "Cloud platforms, ERP implementation, secure networks, and multi-site IT support for property businesses.", "/industries/real-estate", "/industries/real-estate-hero-v2.webp"],
  ["IT solutions for construction UAE", "Site-office networks, surveillance, hardware supply, and ongoing IT support for active construction environments.", "/industries/construction", "/industries/construction-hero-v2.webp"],
  ["IT solutions for logistics Abu Dhabi", "IT AMC, resilient network infrastructure, ERP systems, and business continuity for warehouses and logistics operations.", "/industries/logistics", "/industries/logistics-hero-v2.webp"],
  ["IT solutions for manufacturing UAE", "Server infrastructure, ERP, cybersecurity, CCTV, backups, and complete IT maintenance for industrial facilities.", "/industries/manufacturing", "/industries/manufacturing-hero-v2.webp"],
  ["IT solutions for education Abu Dhabi", "Campus networks, safeguarding-focused CCTV, classroom AV, cybersecurity, and term-aware IT support for education institutions.", "/industries/education", "/industries/education-hero.webp"],
  ["IT solutions for government Abu Dhabi", "Documented networks, compliant surveillance, cybersecurity, backup, and accountable IT support for public-sector environments.", "/industries/government", "/industries/government-hero.webp"],
  ["IT solutions for healthcare Abu Dhabi", "Reliable clinic networks, sensitive-data protection, access control, backup, and responsive support for healthcare facilities.", "/industries/healthcare", "/industries/healthcare-hero.webp"],
];

const reasons = [
  ["ADMCC certified IT engineers", "Compliance-ready local engineering for organisations operating within Abu Dhabi's business and regulatory environment."],
  ["Fast on-site response across Abu Dhabi", "A locally based team available for remote troubleshooting and on-site support when physical presence is required."],
  ["UAE-based team", "Support requirements are handled by engineers familiar with local businesses, systems, and working environments."],
  ["Multi-vendor, brand-independent expertise", "Experience across Microsoft, Fortinet, Hikvision, Aruba, ESET, Sophos, and Acronis environments enables practical recommendations."],
  ["Authorised Tally Prime dealer in Abu Dhabi", "Genuine licensing, implementation, UAE VAT configuration, staff training, and ongoing accounting-software support."],
];

const partners = productBrandLogos.map(([name, logo]) => ({
  name,
  logo,
  ...(name === "Tally Prime" ? { href: "/services/tally-prime-abu-dhabi" } : {}),
}));

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
      streetAddress: "4 Al Ithmid Street, Mohamed Bin Zayed City",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    openingHours: "Mo-Sa 08:30-18:30",
    areaServed: "United Arab Emirates",
    description:
      "XOFOZ provides managed IT services, genuine technology products, and complete business IT solutions from Abu Dhabi across the UAE.",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <KarmaScrollScene />

      <section className="home-highlights-section">
        <BusinessHighlights />
        <div className="home-logo-scroller page-band" aria-label="Technology partners and platforms we support">
          <div className="products-logo-marquee">
            <div className="products-logo-track">
              {[...productBrandLogos, ...productBrandLogos].map(([name, src], index) => (
                <div aria-hidden={index >= productBrandLogos.length} className={name === "Sangfor" ? "is-dark" : undefined} key={`home-${name}-${index}`}>
                  <img src={src} alt={index < productBrandLogos.length ? `${name} logo` : ""} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pillars-section page-band" id="products">
        <Reveal className="section-heading">
          <span className="eyebrow">One Technology Partner</span>
          <h2 className="section-title">IT services. Products. Solutions. All under one roof in Abu Dhabi.</h2>
          <p>
            Many providers cover only part of the requirement. XOFOZ brings
            day-to-day IT services, genuine products, and complete project
            delivery together under one accountable Abu Dhabi team.
          </p>
        </Reveal>
        <div className="pillar-grid">
          {pillars.map((pillar, index) => (
            <Reveal className="pillar-card" delay={index * 0.05} key={pillar.title}>
              <div className="pillar-card__visual">
                <img src={pillar.image} alt="" />
              </div>
              <div className="pillar-card__body">
                <span className="pillar-card__number">{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
                <a href={pillar.href}>{pillar.link} <span aria-hidden="true">→</span></a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div id="services">
        <CoreCapabilitiesCarousel />
      </div>

      <SolutionsScrollSection solutions={solutions} />

      <IndustryAccordion industries={industries} />

      <section className="story-section">
        <ParticleField variant="story" />
        <Reveal className="story-stage page-band">
          <div className="story-copy">
            <span className="eyebrow">How XOFOZ Works</span>
            <h2 className="section-title">A clear step-by-step path from audit to support.</h2>
            <p>
              XOFOZ starts with the real business requirement, then assesses,
              plans, installs, secures, and supports the complete environment
              with clear ownership at every stage.
            </p>
            <div className="story-copy__image">
              <img
                src="/story/how-xofoz-works.png"
                alt="Office IT assessment, network planning, security, and support workflow"
              />
            </div>
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
            <h2 className="section-title">Why Abu Dhabi businesses choose XOFOZ and stay.</h2>
            <p>Local accountability, multi-vendor experience, and certified technical capability support every recommendation and implementation.</p>
          </Reveal>

          <div className="why-proof-layout">
            <Reveal className="why-proof-list">
              {reasons.map(([title, copy]) => (
                <div className="why-proof-item" key={title}>
                  <span aria-hidden="true">✓</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              ))}
            </Reveal>
            <Reveal className="partner-panel" delay={0.08}>
              <span className="eyebrow">Technology Ecosystem</span>
              <h3>Partners and platforms we support</h3>
              <div className="partner-grid">
                {partners.map((partner) => (
                  "href" in partner ? (
                    <Link href={partner.href!} key={partner.name} title={`View ${partner.name}`}>
                      <div className={partner.name === "Sangfor" ? "is-dark" : undefined}><img src={partner.logo} alt={`${partner.name} logo`} /></div>
                    </Link>
                  ) : (
                    <div className={partner.name === "Sangfor" ? "is-dark" : undefined} key={partner.name} title={partner.name}>
                      <img src={partner.logo} alt={`${partner.name} logo`} />
                    </div>
                  )
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ClientLogoSection />

      <ConsultationSection />

    </main>
  );
}
