import Image from "next/image";
import Link from "next/link";
import type { IndustryDefinition } from "../data/industries";
import IndustryLeadForm from "./IndustryLeadForm";
import ParticleField from "./ParticleField";
import Reveal from "./Reveal";

export default function IndustryPage({ industry }: { industry: IndustryDefinition }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://xofoz.com/" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://xofoz.com/industries" },
      { "@type": "ListItem", position: 3, name: industry.label, item: `https://xofoz.com/industries/${industry.slug}` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.hero.title,
    description: industry.hero.summary,
    provider: { "@type": "LocalBusiness", name: "XOFOZ Information Technology", url: "https://xofoz.com/" },
    areaServed: { "@type": "City", name: "Abu Dhabi" },
    audience: { "@type": "BusinessAudience", audienceType: `${industry.label} businesses` },
  };

  return (
    <main className="industry-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema, serviceSchema]) }} />

      <nav className="industry-breadcrumb page-band" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/industries">Industries</Link><span aria-hidden="true">/</span>
        <span aria-current="page">{industry.label}</span>
      </nav>

      <section className="industry-hero">
        <ParticleField variant="service" />
        <div className="industry-hero__inner page-band">
          <Reveal className="industry-hero__copy">
            <span className="eyebrow">{industry.hero.eyebrow}</span>
            <h1>{industry.hero.title}</h1>
            <p>{industry.hero.summary}</p>
            <div className="industry-badges" aria-label="XOFOZ industry support highlights">
              {industry.hero.badges.map((badge) => <span key={badge}>✓ {badge}</span>)}
            </div>
            <div className="hero__actions">
              <a className="button button--primary" href="#industry-consultation">{industry.hero.cta}</a>
              <a className="button button--ghost" href={`https://wa.me/971523554202?text=${encodeURIComponent(`Hello XOFOZ, I would like to discuss IT solutions for my ${industry.label.toLowerCase()} business.`)}`}>WhatsApp us now</a>
            </div>
          </Reveal>
          <Reveal className="industry-hero__visual" delay={0.08}>
            <Image src={industry.image} alt={`${industry.label} technology environment supported by XOFOZ in Abu Dhabi`} fill priority sizes="(max-width: 860px) 100vw, 48vw" />
            <div><span>XOFOZ / Industries</span><strong>{industry.label}</strong></div>
          </Reveal>
        </div>
      </section>

      <section className="industry-highlights" aria-label={`${industry.label} IT solution highlights`}>
        <div className="page-band">
          {industry.highlights.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
      </section>

      <section className="industry-section industry-challenges page-band">
        <Reveal className="industry-heading"><span className="eyebrow">Industry challenges</span><h2>{industry.challengesTitle}</h2><p>{industry.challengesIntro}</p></Reveal>
        <div className="industry-challenge-grid">
          {industry.challenges.map((challenge, index) => <Reveal className="industry-challenge-card" delay={index * 0.04} key={challenge.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{challenge.title}</h3><p>{challenge.description}</p></Reveal>)}
        </div>
      </section>

      <section className="industry-section industry-complete-solution">
        <ParticleField variant="subtle" />
        <div className="page-band industry-narrative">
          <Reveal><span className="eyebrow">Complete solution</span><h2>{industry.solutionTitle}</h2></Reveal>
          <Reveal className="industry-narrative__copy" delay={0.06}>{industry.solutionParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Reveal>
        </div>
      </section>

      <section className="industry-section industry-services page-band">
        <Reveal className="industry-heading"><span className="eyebrow">Relevant services</span><h2>IT services for {industry.label.toLowerCase()} businesses in Abu Dhabi</h2><p>Explore the XOFOZ service areas that support this industry&apos;s day-to-day operations.</p></Reveal>
        <div className="industry-service-grid">
          {industry.services.map((service, index) => <Reveal delay={(index % 4) * 0.035} key={`${service.title}-${service.href}`}><Link className="industry-service-card" href={service.href}><span>{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><p>{service.description}</p><b>View service →</b></Link></Reveal>)}
        </div>
      </section>

      <section className="industry-section industry-solutions">
        <div className="page-band">
          <Reveal className="industry-heading"><span className="eyebrow">Complete solutions</span><h2>IT solutions for {industry.label.toLowerCase()} operations</h2><p>Connected solution categories designed around the sector&apos;s practical requirements.</p></Reveal>
          <div className="industry-solution-grid">
            {industry.solutions.map((solution, index) => <Reveal delay={(index % 3) * 0.04} key={solution.href}><Link className="industry-solution-card" href={solution.href}><span>Solution {String(index + 1).padStart(2, "0")}</span><h3>{solution.title}</h3><p>{solution.description}</p><b>Explore solution ↗</b></Link></Reveal>)}
          </div>
        </div>
      </section>

      <section className="industry-section industry-proof page-band">
        <Reveal className="industry-proof__lead"><span className="eyebrow">{industry.proof.eyebrow}</span><h2>{industry.proof.title}</h2><p>{industry.proof.description}</p></Reveal>
        <Reveal className="industry-proof__outcomes" delay={0.07}>{industry.proof.outcomes.map((outcome, index) => <div key={outcome}><span>0{index + 1}</span><strong>{outcome}</strong></div>)}</Reveal>
      </section>

      <section className="industry-section industry-why">
        <div className="page-band industry-why__layout">
          <Reveal><span className="eyebrow">Why XOFOZ</span><h2>Why {industry.label.toLowerCase()} businesses choose a local technology partner</h2><div className="industry-reason-list">{industry.reasons.map((reason) => <article key={reason.title}><span>✓</span><div><h3>{reason.title}</h3><p>{reason.description}</p></div></article>)}</div></Reveal>
          <Reveal className="industry-capability-panel" delay={0.08}><span className="eyebrow">Relevant capability</span><h3>Technology areas brought together</h3><div>{industry.capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div><p>Certification and authorisation levels will be displayed after final business verification.</p></Reveal>
        </div>
      </section>

      <section className="industry-section industry-faq page-band">
        <Reveal className="industry-heading"><span className="eyebrow">Frequently asked questions</span><h2>{industry.label} IT solutions in Abu Dhabi</h2></Reveal>
        <div className="industry-faq__list">{industry.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="industry-section industry-consultation" id="industry-consultation">
        <div className="page-band industry-consultation__layout">
          <Reveal className="industry-consultation__copy"><span className="eyebrow">Talk to XOFOZ</span><h2>{industry.consultation.title}</h2><p>{industry.consultation.description}</p><a className="button button--ghost" href="https://wa.me/971523554202">WhatsApp +971 52 355 4202</a><address><strong>XOFOZ Information Technology LLC</strong><span>4 Al Ithmid Street, Mohamed Bin Zayed City, Mussafah, Abu Dhabi, UAE</span><a href="tel:+97126220071">02 622 0071</a><a href="mailto:hello@xofoz.com">hello@xofoz.com</a><span>Monday–Saturday, 8:30 AM–6:30 PM</span></address></Reveal>
          <Reveal delay={0.08}><IndustryLeadForm industry={industry.label} organisationLabel={industry.consultation.organisationLabel} scaleLabel={industry.consultation.scaleLabel} requirementsLabel={industry.consultation.requirementsLabel} /></Reveal>
        </div>
      </section>
    </main>
  );
}
