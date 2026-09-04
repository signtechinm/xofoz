import Image from "next/image";
import Link from "next/link";
import ParticleField from "./ParticleField";
import Reveal from "./Reveal";
import SolutionLeadForm from "./SolutionLeadForm";
import {
  eInvoicingBusinessTypes,
  eInvoicingConsultationOptions,
  eInvoicingFaqs,
  eInvoicingFeatures,
  eInvoicingSources,
  eInvoicingSteps,
  eInvoicingTimeline,
  tallyEInvoicingUpdated,
} from "../data/tally-einvoicing-content";

const whatsappHref = "https://wa.me/971528209231?text=Hello%20XOFOZ%2C%20I%20would%20like%20a%20UAE%20e-Invoicing%20readiness%20assessment%20for%20our%20TallyPrime%20environment.";

export default function TallyEInvoicingPage() {
  const canonical = "https://xofoz.com/tally-prime-software-abu-dhabi/e-invoicing-uae-abu-dhabi";
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: eInvoicingFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://xofoz.com" },
      { "@type": "ListItem", position: 2, name: "TallyPrime Software Abu Dhabi", item: "https://xofoz.com/tally-prime-software-abu-dhabi" },
      { "@type": "ListItem", position: 3, name: "UAE e-Invoicing", item: canonical },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "TallyPrime UAE e-Invoicing Readiness Support",
    description: "TallyPrime assessment, configuration, testing, staff training, and ongoing support for Abu Dhabi businesses preparing for UAE e-Invoicing.",
    url: canonical,
    areaServed: { "@type": "City", name: "Abu Dhabi" },
    provider: { "@type": "Organization", name: "XOFOZ Information Technology LLC", url: "https://xofoz.com" },
  };

  return (
    <main className="tally-einvoice-page solution-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema, serviceSchema]) }} />

      <nav className="service-breadcrumb page-band" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/tally-prime-software-abu-dhabi">TallyPrime Software Abu Dhabi</Link><span aria-hidden="true">/</span>
        <span aria-current="page">UAE e-Invoicing</span>
      </nav>

      <aside className="tally-einvoice-freshness page-band" aria-label="Content freshness">
        <span aria-hidden="true">↻</span><strong>Last updated: {tallyEInvoicingUpdated}</strong>
        <p>Reviewed against current UAE Ministry of Finance and Tally documentation.</p>
      </aside>

      <section className="service-hero page-band tally-einvoice-hero">
        <ParticleField variant="service" /><div className="service-hero__glow" aria-hidden="true" />
        <Reveal className="service-hero__copy">
          <span className="eyebrow">UAE e-Invoicing readiness in Abu Dhabi</span>
          <h1>UAE e-Invoicing Compliance in Abu Dhabi, Get Your TallyPrime System Ready</h1>
          <div className="tally-hero__intro">
            <h2>Prepare for mandatory UAE e-Invoicing with TallyPrime</h2>
            <p>The UAE is introducing regulated e-Invoicing for in-scope business transactions. This is not simply a PDF invoice sent by email. It is structured invoice data exchanged through accredited service providers and reported through the national framework.</p>
            <p>XOFOZ helps Abu Dhabi businesses assess and prepare their TallyPrime 7.1 environment, master data, workflows, and staff before the dates that apply to them. Regulated invoice exchange remains the responsibility of the Accredited Service Provider selected by the business.</p>
          </div>
          <div className="hero__actions"><a className="button button--primary" href={whatsappHref} target="_blank" rel="noreferrer">Book a free readiness consultation</a><Link className="button button--secondary" href="/tally-prime-software-abu-dhabi">Explore TallyPrime services</Link></div>
        </Reveal>
        <Reveal className="service-hero__visual" delay={0.08}><Image src="/solutions/tally-prime/e-invoicing/uae-e-invoicing-readiness-abu-dhabi.webp" alt="Abu Dhabi finance team preparing accounting records for UAE e-Invoicing" fill priority sizes="(max-width: 860px) 100vw, 42vw" /><div className="service-hero__image-note"><span>Plan early</span><strong>Prepare data, systems, and people</strong></div></Reveal>
      </section>

      <section className="service-section service-section--blueprint page-band">
        <Reveal className="service-section__heading"><span className="eyebrow">Understand the framework</span><h2>What is UAE e-Invoicing?</h2><p>The UAE Electronic Invoicing System uses structured digital data based on the Peppol framework and PINT AE specifications. Invoices move between businesses through Accredited Service Providers, with required information reported to the Federal Tax Authority.</p></Reveal>
        <div className="tally-framework-layout">
          <Reveal className="tally-exchange-visual"><Image src="/solutions/tally-prime/e-invoicing/structured-invoice-exchange-network.webp" alt="Abstract secure structured invoice exchange network" fill sizes="(max-width: 900px) 100vw, 46vw" /></Reveal>
          <Reveal className="tally-five-corner" delay={0.08}><span className="eyebrow">Five-corner model</span><div className="tally-five-corner__flow" aria-label="Five-corner e-Invoicing flow"><span><b>01</b>Seller</span><i aria-hidden="true">→</i><span><b>02</b>Seller ASP</span><i aria-hidden="true">→</i><span><b>03</b>Buyer ASP</span><i aria-hidden="true">→</i><span><b>04</b>Buyer</span><span className="tally-five-corner__report"><b>05</b>FTA reporting</span></div><p>Both the seller and buyer use accredited providers. The fifth corner represents tax-data reporting to the FTA. XOFOZ prepares and supports your TallyPrime environment but does not replace your accredited provider.</p></Reveal>
        </div>
        <Reveal className="service-section__heading tally-applies-heading"><h3>This may apply whether you are a:</h3></Reveal>
        <div className="tally-applicable-grid">{eInvoicingBusinessTypes.map((type, index) => <Reveal className="tally-applicable-card" delay={(index % 3) * 0.035} key={type}><span>{String(index + 1).padStart(2, "0")}</span><p>{type}</p></Reveal>)}</div>
        <Reveal className="tally-section-note"><p>Scope and exclusions depend on the transaction and activity. Confirm your position using current official guidance before making compliance decisions.</p></Reveal>
      </section>

      <section className="service-section service-section--soft service-section--topography">
        <div className="page-band">
          <Reveal className="service-section__heading"><span className="eyebrow">Verified {tallyEInvoicingUpdated}</span><h2>UAE e-Invoicing timeline for Abu Dhabi businesses</h2><p>Implementation is phased by annual revenue. Appointment and mandatory implementation are separate milestones.</p></Reveal>
          <Reveal className="tally-timeline-wrap"><table className="tally-timeline"><caption>Current UAE e-Invoicing appointment and implementation milestones</caption><thead><tr><th scope="col">Milestone</th><th scope="col">Date</th></tr></thead><tbody>{eInvoicingTimeline.map((item) => <tr key={item.milestone}><td>{item.milestone}</td><td>{item.date}</td></tr>)}</tbody></table></Reveal>
          <div className="tally-timeline-notes"><Reveal><h3>Voluntary preparation</h3><p>Businesses can choose voluntary implementation from 1 July 2026. Administrative penalties apply from the date a business becomes subject to mandatory requirements.</p></Reveal><Reveal delay={0.06}><h3>Current penalty framework</h3><p>Delay in implementing the system or appointing an ASP can result in AED 5,000 for each month or part of a month. Other penalties apply to late invoices, credit notes, system-failure notifications, and specified data updates.</p></Reveal></div>
          <Reveal className="tally-source-row"><span>Always check the current rules:</span><a href="https://mof.gov.ae/en/about-us/initiatives/einvoicing/" target="_blank" rel="noreferrer">UAE Ministry of Finance e-Invoicing portal <b aria-hidden="true">↗</b></a></Reveal>
        </div>
      </section>

      <section className="service-section service-section--signal">
        <div className="page-band"><Reveal className="service-section__heading"><span className="eyebrow">TallyPrime 7.1</span><h2>How TallyPrime supports e-Invoicing readiness</h2><p>Prepare the records and accounting workflows needed for UAE e-Invoicing without abandoning the system your team uses each day.</p></Reveal><div className="tally-feature-grid">{eInvoicingFeatures.map((feature, index) => <Reveal className="tally-feature-card" delay={(index % 3) * 0.04} key={feature.title}><span aria-hidden="true">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p></Reveal>)}</div></div>
      </section>

      <section className="service-section service-section--process page-band">
        <Reveal className="service-section__heading"><span className="eyebrow">A practical readiness path</span><h2>How XOFOZ helps Abu Dhabi businesses prepare</h2><p>Move from uncertainty to a configured, tested, and supported TallyPrime environment through six clear steps.</p></Reveal>
        <div className="tally-einvoice-steps">{eInvoicingSteps.map((step, index) => <Reveal className="tally-einvoice-step" delay={(index % 3) * 0.04} key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></Reveal>)}</div>
      </section>

      <section className="service-section service-section--connections page-band">
        <Reveal className="service-section__heading"><span className="eyebrow">Answers upfront</span><h2>Frequently asked questions</h2></Reveal>
        <div className="service-faq">{eInvoicingFaqs.map((faq, index) => <Reveal as="details" className="service-faq__item" delay={index * 0.025} key={faq.question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b aria-hidden="true">+</b></summary><p>{faq.answer}</p></Reveal>)}</div>
      </section>

      <section className="service-section service-consultation" id="einvoicing-consultation">
        <div className="page-band service-consultation__layout"><Reveal className="service-consultation__copy"><span className="eyebrow">Start with a readiness review</span><h2>Get your free e-Invoicing readiness assessment</h2><p>Tell us about your TallyPrime environment, transaction volume, and implementation concerns. We will help you identify the practical preparation steps.</p><div className="service-contact-list"><span><b>Office</b>4 Al Ithmid Street, Mohamed Bin Zayed City, Mussafah, Abu Dhabi, UAE</span><a href="tel:+97126220071"><b>Phone</b>02 622 0071</a><a href="mailto:hello@xofoz.com"><b>Email</b>hello@xofoz.com</a><span><b>Hours</b>Monday to Saturday, 8:30 AM to 6:30 PM</span></div><Link className="tally-parent-link" href="/tally-prime-software-abu-dhabi">View TallyPrime software and AMC services <b aria-hidden="true">→</b></Link></Reveal><Reveal delay={0.08}><SolutionLeadForm category="UAE e-Invoicing Readiness" options={[...eInvoicingConsultationOptions]} fields={["Your name", "Company name", "Phone number", "What do you need help with?", "Tell us about your e-Invoicing readiness requirement"]} buttonLabel="Request a free readiness assessment" /></Reveal></div>
      </section>

      <aside className="tally-regulatory-note page-band"><div><strong>Regulatory note</strong><p>UAE e-Invoicing requirements, dates, penalties, and technical standards may change. This page provides general readiness information and is not tax or legal advice. Confirm final compliance decisions using official guidance and qualified professional advice.</p></div><div>{eInvoicingSources.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label} <span aria-hidden="true">↗</span></a>)}</div></aside>
    </main>
  );
}
