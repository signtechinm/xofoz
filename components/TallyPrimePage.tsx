import Image from "next/image";
import Link from "next/link";
import ParticleField from "./ParticleField";
import ProductBrandMark from "./ProductBrandMark";
import Reveal from "./Reveal";
import SolutionLeadForm from "./SolutionLeadForm";
import {
  tallyConsultationOptions,
  tallyEditions,
  tallyFaqs,
  tallyFeatures,
  tallyIndustries,
  tallyModules,
  tallyReasons,
  tallyServices,
} from "../data/tally-prime-content";

const whatsappHref = "https://wa.me/971523554202?text=Hello%20XOFOZ%2C%20I%20would%20like%20to%20speak%20with%20a%20TallyPrime%20expert%20in%20Abu%20Dhabi.";

const iconLabels = ["TR", "RT", "CO", "RE", "HC", "FB", "MF", "LG", "PS", "ED"];

export default function TallyPrimePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tallyFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://xofoz.com" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://xofoz.com/solutions" },
      { "@type": "ListItem", position: 3, name: "TallyPrime Software Abu Dhabi", item: "https://xofoz.com/tally-prime-software-abu-dhabi" },
    ],
  };
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "XOFOZ Information Technology LLC",
    image: "https://xofoz.com/brand/xofoz-logo.png",
    url: "https://xofoz.com/tally-prime-software-abu-dhabi",
    telephone: "+97126220071",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4 Al Ithmid Street, Mohamed Bin Zayed City, Mussafah",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    areaServed: { "@type": "City", name: "Abu Dhabi" },
    priceRange: "$$",
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "TallyPrime Software Sales, Implementation and Support",
    serviceType: "Business accounting software implementation and support",
    url: "https://xofoz.com/tally-prime-software-abu-dhabi",
    areaServed: { "@type": "City", name: "Abu Dhabi" },
    provider: { "@type": "Organization", name: "XOFOZ Information Technology LLC", url: "https://xofoz.com" },
  };

  return (
    <main className="tally-page solution-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema, localBusinessSchema, serviceSchema]) }} />

      <nav className="service-breadcrumb page-band" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/solutions">Solutions</Link><span aria-hidden="true">/</span>
        <span aria-current="page">TallyPrime Software Abu Dhabi</span>
      </nav>

      <section className="service-hero page-band tally-hero">
        <ParticleField variant="service" />
        <div className="service-hero__glow" aria-hidden="true" />
        <Reveal className="service-hero__copy">
          <span className="eyebrow">Authorized TallyPrime Partner in Abu Dhabi</span>
          <h1>TallyPrime Software in Abu Dhabi, Trusted Across Every Industry</h1>
          <div className="tally-hero__intro">
            <h2>UAE&apos;s trusted TallyPrime partner in Abu Dhabi</h2>
            <p>XOFOZ Information Technology helps businesses across Abu Dhabi Island, Al Reem Island, Mussafah, Khalifa City, Mohammed Bin Zayed City, and Al Ain run smarter, compliant accounting operations. Our local team provides TallyPrime licensing, implementation, customization, training, and long-term support.</p>
            <p>Whether you run a trading company, retail outlet, clinic, consultancy, or construction firm, TallyPrime can be configured around the way your business works.</p>
            <p>Manage accounting, inventory, banking, payroll, VAT, and e-Invoicing readiness through one connected business system.</p>
          </div>
          <div className="hero__actions">
            <a className="button button--primary" href={whatsappHref} target="_blank" rel="noreferrer">Talk to a Tally expert</a>
            <a className="button button--secondary" href="#tally-consultation">Request a consultation</a>
          </div>
          <div className="tally-trust-strip" aria-label="TallyPrime service highlights">
            <span><strong>Local</strong>Abu Dhabi team</span>
            <span><strong>Complete</strong>Setup to support</span>
            <span><strong>Flexible</strong>On-site or remote</span>
            <span><strong>Reliable</strong>AMC available</span>
          </div>
        </Reveal>
        <Reveal className="service-hero__visual" delay={0.08}>
          <Image src="/solutions/tally-prime/tallyprime-accounting-abu-dhabi.webp" alt="Finance professionals using accounting software in an Abu Dhabi office" fill priority sizes="(max-width: 860px) 100vw, 42vw" />
          <div className="service-hero__image-note"><span>XOFOZ business software</span><strong>TallyPrime, configured for your operation</strong></div>
        </Reveal>
      </section>

      <section className="service-section service-section--soft service-section--topography">
        <div className="page-band">
          <Reveal className="service-section__heading"><span className="eyebrow">Industry-ready accounting</span><h2>TallyPrime for every industry in Abu Dhabi</h2><p>TallyPrime is not a one-size-fits-all tool, and neither is our approach. XOFOZ configures it around how your sector actually operates.</p></Reveal>
          <div className="tally-industry-grid">
            {tallyIndustries.map((industry, index) => <Reveal className="tally-industry-card" delay={(index % 5) * 0.03} key={industry.title}><span className="tally-card-icon" aria-hidden="true">{iconLabels[index]}</span><small>{String(index + 1).padStart(2, "0")}</small><h3>{industry.title}</h3><p>{industry.description}</p></Reveal>)}
          </div>
          <Reveal className="tally-section-note"><p>If your industry is not listed, TallyPrime&apos;s flexibility and our customization capability mean we can still shape the system around your accounting workflow.</p></Reveal>
        </div>
      </section>

      <section className="service-section service-section--orbit page-band">
        <Reveal className="service-section__heading"><span className="eyebrow">Why XOFOZ</span><h2>Why Abu Dhabi businesses choose XOFOZ for TallyPrime</h2></Reveal>
        <div className="tally-why-layout">
          <div className="service-why-list">{tallyReasons.map((reason, index) => <Reveal className="service-why-item" delay={index * 0.035} key={reason}><span aria-hidden="true">✓</span><div><p>{reason}</p></div></Reveal>)}</div>
          <Reveal className="tally-partner-panel" delay={0.08}><span className="eyebrow">Business software partner</span><ProductBrandMark brand="Tally Prime" /><h3>Local knowledge, complete delivery</h3><p>Licensing is only the beginning. XOFOZ helps plan, configure, migrate, train, and support the complete working environment.</p><a href={whatsappHref} target="_blank" rel="noreferrer">Discuss your requirement <b aria-hidden="true">↗</b></a></Reveal>
        </div>
      </section>

      <section className="service-section service-section--soft service-section--signal">
        <div className="page-band tally-editions-layout">
          <div>
            <Reveal className="service-section__heading"><span className="eyebrow">Licensing and editions</span><h2>Choose the right TallyPrime setup</h2><p>We help you select and correctly license the edition that fits your team, locations, access requirements, and growth plans.</p></Reveal>
            <div className="tally-edition-grid">{tallyEditions.map((edition, index) => <Reveal className="tally-edition-card" delay={index * 0.035} key={edition.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{edition.title}</h3><p>{edition.description}</p></Reveal>)}</div>
            <Reveal><a className="tally-text-link" href="https://tallysolutions.com/mena/download/" target="_blank" rel="noreferrer">Download TallyPrime from the official website <b aria-hidden="true">↗</b></a></Reveal>
          </div>
          <Reveal className="tally-support-visual" delay={0.08}><Image src="/solutions/tally-prime/tallyprime-secure-multi-user-office.webp" alt="Secure multi-user accounting and server setup for an Abu Dhabi business" fill sizes="(max-width: 900px) 100vw, 40vw" /></Reveal>
        </div>
      </section>

      <section className="service-section service-section--blueprint page-band">
        <Reveal className="service-section__heading"><span className="eyebrow">Complete TallyPrime services</span><h2>Our TallyPrime services in Abu Dhabi</h2><p>Get one accountable team for deployment, adoption, customization, and continued support.</p></Reveal>
        <div className="tally-service-grid">{tallyServices.map((service, index) => <Reveal className="tally-service-card" delay={(index % 3) * 0.04} key={service.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><p>{service.description}</p></Reveal>)}</div>
        <Reveal className="tally-modules"><div className="tally-modules__heading"><span className="eyebrow">Built around your workflow</span><h3>Customization modules</h3><p>Select focused extensions instead of forcing your business into a rigid process.</p></div><div>{tallyModules.map((module, index) => <span key={module}><b>{String(index + 1).padStart(2, "0")}</b>{module}</span>)}</div></Reveal>
      </section>

      <section className="service-section service-section--soft service-section--topography">
        <div className="page-band">
          <Reveal className="service-section__heading"><span className="eyebrow">Current capabilities</span><h2>Prepare your accounting system for what comes next</h2><p>The latest TallyPrime release combines productivity improvements with UAE-focused VAT and e-Invoicing readiness capabilities.</p></Reveal>
          <div className="tally-feature-grid">{tallyFeatures.map((feature, index) => <Reveal className="tally-feature-card" delay={(index % 3) * 0.04} key={feature.title}><span aria-hidden="true">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="service-section page-band tally-einvoice-section">
        <Reveal className="tally-einvoice-card"><div><span className="eyebrow">UAE e-Invoicing</span><h2>Is your Abu Dhabi business ready?</h2><p>The UAE e-Invoicing programme is being introduced in phases. In-scope businesses will need an accredited service provider and properly prepared accounting data. Read our current timeline and learn how XOFOZ can help prepare your TallyPrime environment.</p></div><Link className="button button--primary" href="/tally-prime-software-abu-dhabi/e-invoicing-uae-abu-dhabi">Read the e-Invoicing guide</Link></Reveal>
      </section>

      <section className="service-section service-section--connections page-band">
        <Reveal className="service-section__heading"><span className="eyebrow">Answers upfront</span><h2>Frequently asked questions</h2></Reveal>
        <div className="service-faq">{tallyFaqs.map((faq, index) => <Reveal as="details" className="service-faq__item" delay={index * 0.025} key={faq.question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b aria-hidden="true">+</b></summary><p>{faq.answer}</p></Reveal>)}</div>
      </section>

      <section className="service-section service-consultation" id="tally-consultation">
        <div className="page-band service-consultation__layout">
          <Reveal className="service-consultation__copy"><span className="eyebrow">Talk to a local Tally expert</span><h2>Get a free TallyPrime consultation in Abu Dhabi</h2><p>Tell us how your accounting operation works today. We will help identify the right licensing, implementation, migration, customization, and support path.</p><div className="service-contact-list"><span><b>Office</b>4 Al Ithmid Street, Mohamed Bin Zayed City, Mussafah, Abu Dhabi, UAE</span><a href="tel:+97126220071"><b>Phone</b>02 622 0071</a><a href="mailto:hello@xofoz.com"><b>Email</b>hello@xofoz.com</a><span><b>Hours</b>Monday to Saturday, 8:30 AM to 6:30 PM</span></div></Reveal>
          <Reveal delay={0.08}><SolutionLeadForm category="TallyPrime Software" options={[...tallyConsultationOptions]} fields={["Your name", "Company name", "Phone number", "What do you need help with?", "Tell us about your TallyPrime requirement"]} buttonLabel="Request a free Tally consultation" /></Reveal>
        </div>
      </section>
    </main>
  );
}
