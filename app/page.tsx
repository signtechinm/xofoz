import ParticleField from "../components/ParticleField";
import Reveal from "../components/Reveal";
import KarmaScrollScene from "../components/KarmaScrollScene";
import CoreCapabilitiesCarousel from "../components/CoreCapabilitiesCarousel";
import PointerLight from "../components/PointerLight";
import ClientLogoSection from "../components/ClientLogoSection";
import SolutionsScrollSection from "../components/SolutionsScrollSection";
import IndustryAccordion from "../components/IndustryAccordion";
import TestimonialCarousel from "../components/TestimonialCarousel";
import BusinessHighlights from "../components/BusinessHighlights";

const pillars = [
  {
    number: "01",
    title: "Managed IT services",
    copy: "Expert support, maintenance, and infrastructure management for UAE businesses, from helpdesk requests to ongoing technical ownership.",
    link: "Explore our services",
    href: "#services",
    image: "/pillars/managed-it-services.png",
  },
  {
    number: "02",
    title: "Authorised IT products",
    copy: "Genuine software, security, cloud, CCTV, and infrastructure products supplied, implemented, and supported by one local team.",
    link: "View our products",
    href: "#products",
    image: "/pillars/authorised-it-products.png",
  },
  {
    number: "03",
    title: "Complete IT solutions",
    copy: "Describe the business problem and XOFOZ will assess, design, install, secure, and hand over the complete solution.",
    link: "See our solutions",
    href: "#solutions",
    image: "/pillars/complete-it-solutions.png",
  },
];

const solutions = [
  {
    title: "Need to install CCTV in your building?",
    copy: "We survey the site, plan camera coverage, select the equipment, complete the installation, and train your team.",
    steps: ["Site survey", "Blueprint", "Hardware", "Install", "Handover"],
    cta: "Get a CCTV consultation",
  },
  {
    title: "Is your office Wi-Fi slow or unreliable?",
    copy: "We assess the workspace, calculate coverage requirements, choose suitable access points, and deploy a tested wireless network.",
    steps: ["Coverage plan", "AP selection", "Deployment", "Testing"],
    cta: "Request a Wi-Fi assessment",
  },
  {
    title: "Are your computers or IT systems underperforming?",
    copy: "Our engineers diagnose hardware, software, and network bottlenecks, resolve the root cause, and help prevent recurrence.",
    steps: ["Diagnose", "Fix root cause", "Secure", "Prevent"],
    cta: "Get IT support now",
  },
];

const industries: [string, string][] = [
  ["Hospitality", "Hotels, restaurants, guest networks, CCTV, and always-on business systems."],
  ["Real estate", "Property offices, sales centres, access control, connectivity, and cloud collaboration."],
  ["Construction", "Site offices, temporary networks, cabling, surveillance, and mobile workforce support."],
  ["Logistics", "Warehouses, fleet offices, wireless coverage, devices, security, and business continuity."],
  ["Manufacturing", "Production offices, ERP environments, endpoint protection, backups, and infrastructure support."],
];

const reasons = [
  ["ADMCC-ready engineering", "Compliance-conscious support for organisations operating in Abu Dhabi."],
  ["Responsive on-site support", "A local team available for remote troubleshooting and scheduled site visits."],
  ["UAE-based team", "Calls, visits, and support requirements are handled by engineers familiar with local businesses."],
  ["Multi-vendor expertise", "Practical experience across Microsoft, Fortinet, Hikvision, Aruba, ESET, Sophos, and Acronis environments."],
  ["Tally Prime support", "Licensing, implementation, user setup, training, and ongoing accounting-software assistance."],
];

const partners = [
  { name: "TallyPrime", logo: "/partners/tally-prime.svg" },
  { name: "Microsoft", logo: "/partners/microsoft.svg" },
  { name: "Fortinet", logo: "/partners/fortinet.svg" },
  { name: "Hikvision", logo: "/partners/hikvision.svg" },
  { name: "ESET", logo: "/partners/eset.svg" },
  { name: "Aruba", logo: "/partners/aruba.svg" },
  { name: "Sophos", logo: "/partners/sophos.svg" },
  { name: "Acronis", logo: "/partners/acronis.svg" },
];

const testimonials = [
  {
    quote: "XOFOZ responded quickly, identified the server issue, and helped our team return to normal operations with a clear explanation of the fix.",
    name: "IT Manager",
    role: "Hospitality sector · Abu Dhabi",
  },
  {
    quote: "The team understood our site requirements, completed the network setup on schedule, and continues to support the project when we need them.",
    name: "Operations Head",
    role: "Construction sector · UAE",
  },
  {
    quote: "The Tally Prime setup and staff walkthrough were straightforward. Having one local team for implementation and support made the process easier.",
    name: "Finance Director",
    role: "Manufacturing sector · Abu Dhabi",
  },
];

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
      "Managed IT support, office IT setup, cybersecurity, cabling, and business technology services in Abu Dhabi.",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <KarmaScrollScene />

      <BusinessHighlights />

      <section className="section pillars-section page-band" id="products">
        <Reveal className="section-heading">
          <span className="eyebrow">One Technology Partner</span>
          <h2 className="section-title">IT services. Products. Solutions. All under one roof in Abu Dhabi.</h2>
          <p>
            XOFOZ brings day-to-day support, genuine technology products, and
            complete project delivery together under one accountable local team.
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
              XOFOZ starts with the real office requirement, then moves through
              a practical sequence so every setup, security decision, and
              support handover has clear ownership.
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
                  <div key={partner.name} title={partner.name}>
                    <img src={partner.logo} alt={`${partner.name} logo`} />
                  </div>
                ))}
              </div>
              <p className="sample-note">Sample partner list — authorisation levels should be verified before launch.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <ClientLogoSection />

    </main>
  );
}
