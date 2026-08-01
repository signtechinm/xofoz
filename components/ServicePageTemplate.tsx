import Link from "next/link";
import Image from "next/image";
import type { ServiceContent } from "../data/service-content";
import { serviceAssets } from "../data/service-assets";
import { resolveRelatedServiceHref } from "../data/services";
import Reveal from "./Reveal";
import ServiceLeadForm from "./ServiceLeadForm";
import ParticleField from "./ParticleField";

function listFromField(value = "") {
  return value.split("|").map((item) => item.trim()).filter(Boolean);
}

function numberedFields(
  fields: Record<string, string>,
  makeKey: (index: number) => string,
  limit: number,
) {
  return Array.from({ length: limit }, (_, index) => fields[makeKey(index + 1)])
    .filter(Boolean);
}

export default function ServicePageTemplate({ content }: { content: ServiceContent }) {
  const { fields, service } = content;
  const painPoints = Array.from({ length: 3 }, (_, index) => ({
    title: fields[`SECTION 2 — PAIN POINT ${index + 1} — H3`],
    copy: fields[`SECTION 2 — PAIN POINT ${index + 1} — CONTENT`],
  }));
  const inclusions = numberedFields(fields, (index) => `SECTION 3 — INCLUSION ${index}`, 12);
  const steps = Array.from({ length: 3 }, (_, index) => ({
    title: fields[`SECTION 4 — STEP ${index + 1} — H3`],
    copy: fields[`SECTION 4 — STEP ${index + 1} — CONTENT`],
  }));
  const differentiators = Array.from({ length: 5 }, (_, index) => ({
    title: fields[`SECTION 5 — DIFFERENTIATOR ${index + 1} — H3`],
    copy: fields[`SECTION 5 — DIFFERENTIATOR ${index + 1} — CONTENT`],
  })).filter((item) => item.title && item.copy);
  const industries = Array.from({ length: 5 }, (_, index) => ({
    title: fields[`SECTION 6 — INDUSTRY ${index + 1} — H3`],
    copy: fields[`SECTION 6 — INDUSTRY ${index + 1} — CONTENT`],
    link: fields[`SECTION 6 — INDUSTRY ${index + 1} — LINK`],
  })).filter((item) => item.title && item.copy);
  const faqs = Array.from({ length: 10 }, (_, index) => ({
    question: fields[`SECTION 7 — FAQ ${index + 1} — QUESTION`],
    answer: fields[`SECTION 7 — FAQ ${index + 1} — ANSWER`],
  })).filter((item) => item.question && item.answer);
  const relatedServices = Array.from({ length: 3 }, (_, index) => ({
    title: fields[`SECTION 9 — RELATED SERVICE ${index + 1} — H3`],
    copy: fields[`SECTION 9 — RELATED SERVICE ${index + 1} — CONTENT`],
    label: fields[`SECTION 9 — RELATED SERVICE ${index + 1} — LINK`],
  })).map((item) => ({ ...item, href: resolveRelatedServiceHref(item.title) }));
  const trustStats = numberedFields(fields, (index) => `HERO — TRUST STAT ${index}`, 4);
  const certifications = listFromField(fields["SECTION 5 — CERTIFICATIONS LIST"]);
  const breadcrumbLabel = fields.BREADCRUMB?.split("›").at(-1)?.trim() || service.label;
  const asset = serviceAssets[service.slug];
  const formFields = numberedFields(fields, (index) => `SECTION 10 — FORM FIELD ${index}`, 6);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: fields["HERO — H1"],
    description: fields["META DESCRIPTION"],
    url: `https://xofoz.com/services/${service.slug}`,
    areaServed: {
      "@type": "City",
      name: "Abu Dhabi",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "XOFOZ Information Technology LLC",
      url: "https://xofoz.com",
      telephone: "+97126220071",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4 Al Ithmid Street, Mohamed Bin Zayed City, Mussafah",
        addressLocality: "Abu Dhabi",
        addressCountry: "AE",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://xofoz.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://xofoz.com/services" },
      { "@type": "ListItem", position: 3, name: breadcrumbLabel },
    ],
  };

  return (
    <main className="service-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />

      <nav className="service-breadcrumb page-band" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/services">Services</Link><span aria-hidden="true">/</span>
        <span aria-current="page">{breadcrumbLabel}</span>
      </nav>

      <section className="service-hero page-band">
        <ParticleField variant="service" />
        <div className="service-hero__glow" aria-hidden="true" />
        <Reveal className="service-hero__copy">
          <span className="eyebrow">{fields["HERO — EYEBROW TEXT"]}</span>
          <h1>{fields["HERO — H1"]}</h1>
          <p>{fields["HERO — SUBHEADLINE"]}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#service-consultation">
              {fields["HERO — CTA 1"]}
            </a>
            <a className="button button--ghost" href="https://wa.me/971523554202">
              {fields["HERO — CTA 2"]}
            </a>
          </div>
          <div className="service-trust-stats" aria-label="XOFOZ service highlights">
            {trustStats.map((stat) => <span key={stat}>{stat}</span>)}
          </div>
        </Reveal>
        <Reveal className="service-hero__visual" delay={0.08}>
          <Image
            src={asset.hero}
            alt={`${fields["FOCUS KEYWORD"]} services by XOFOZ in Abu Dhabi`}
            fill
            priority
            sizes="(max-width: 860px) 100vw, 42vw"
          />
          <div className="service-hero__image-note">
            <span>{service.label}</span>
            <strong>{asset.note}</strong>
          </div>
        </Reveal>
      </section>

      <section className="service-section service-section--blueprint page-band">
        <Reveal className="service-section__heading">
          <span className="eyebrow">Understanding the service</span>
          <h2>{fields["SECTION 1 — H2"]}</h2>
        </Reveal>
        <div className="service-overview">
          <Reveal className="service-reading-copy">
            <p>{fields["SECTION 1 — PARAGRAPH 1"]}</p>
            <p>{fields["SECTION 1 — PARAGRAPH 2"]}</p>
          </Reveal>
          <Reveal className="service-comparison" delay={0.06}>
            <div className="service-comparison__good">
              <h3>{fields["SECTION 1 — COMPARISON BOX LEFT HEADING"]}</h3>
              <ul>{listFromField(fields["SECTION 1 — COMPARISON BOX LEFT CONTENT"]).map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="service-comparison__risk">
              <h3>{fields["SECTION 1 — COMPARISON BOX RIGHT HEADING"]}</h3>
              <ul>{listFromField(fields["SECTION 1 — COMPARISON BOX RIGHT CONTENT"]).map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="service-section service-section--soft service-section--signal">
        <div className="page-band">
          <Reveal className="service-section__heading">
            <span className="eyebrow">The cost of reactive IT</span>
            <h2>{fields["SECTION 2 — H2"]}</h2>
            <p>{fields["SECTION 2 — INTRO LINE"]}</p>
          </Reveal>
          <div className="service-card-grid service-card-grid--three">
            {painPoints.map((point, index) => (
              <Reveal className="service-info-card service-info-card--risk" delay={index * 0.05} key={point.title}>
                <span className="service-info-card__number">0{index + 1}</span>
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section service-section--orbit page-band">
        <Reveal className="service-section__heading">
          <span className="eyebrow">Complete coverage</span>
          <h2>{fields["SECTION 3 — H2"]}</h2>
          <p>{fields["SECTION 3 — INTRO LINE"]}</p>
        </Reveal>
        <div className="service-inclusions">
          <Reveal as="ul" className="service-checklist">
            {inclusions.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
          </Reveal>
          <Reveal className="service-custom-plan" delay={0.08}>
            <span className="eyebrow">Built around you</span>
            <h3>{fields["SECTION 3 — CUSTOM PLAN BOX HEADING"]}</h3>
            <p>{fields["SECTION 3 — CUSTOM PLAN BOX CONTENT"]}</p>
            <a className="button button--primary" href="#service-consultation">
              {fields["SECTION 3 — CUSTOM PLAN BOX CTA"]}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="service-section service-section--process">
        <div className="page-band">
          <Reveal className="service-section__heading service-section__heading--center">
            <span className="eyebrow">A clear process</span>
            <h2>{fields["SECTION 4 — H2"]}</h2>
          </Reveal>
          <div className="service-process">
            {steps.map((step, index) => (
              <Reveal className="service-process__step" delay={index * 0.06} key={step.title}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section page-band">
        <Reveal className="service-section__heading">
          <span className="eyebrow">Why XOFOZ</span>
          <h2>{fields["SECTION 5 — H2"]}</h2>
        </Reveal>
        <div className="service-why-layout">
          <div className="service-why-list">
            {differentiators.map((item, index) => (
              <Reveal className="service-why-item" delay={index * 0.035} key={item.title}>
                <span aria-hidden="true">✓</span>
                <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal className="service-certifications" delay={0.08}>
            <span className="eyebrow">Technology ecosystem</span>
            <h3>Certifications and partnerships</h3>
            <div>{certifications.map((certification) => <span key={certification}>{certification}</span>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="service-section service-section--soft service-section--topography">
        <div className="page-band">
          <Reveal className="service-section__heading">
            <span className="eyebrow">Industry experience</span>
            <h2>{fields["SECTION 6 — H2"]}</h2>
            <p>{fields["SECTION 6 — INTRO LINE"]}</p>
          </Reveal>
          <div className="service-industry-grid">
            {industries.map((industry, index) => (
              <Reveal className="service-industry-card" delay={index * 0.04} key={industry.title}>
                <span>0{index + 1}</span>
                <h3>{industry.title}</h3>
                <p>{industry.copy}</p>
                <Link href="/#industries">{industry.link} <b aria-hidden="true">→</b></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section service-section--connections page-band">
        <Reveal className="service-section__heading">
          <span className="eyebrow">Answers upfront</span>
          <h2>{fields["SECTION 7 — H2"]}</h2>
        </Reveal>
        <div className="service-faq">
          {faqs.map((faq, index) => (
            <Reveal as="details" className="service-faq__item" delay={index * 0.025} key={faq.question}>
              <summary><span>0{index + 1}</span>{faq.question}<b aria-hidden="true">+</b></summary>
              <p>{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {fields["SECTION 8 — H2"] && (
        <section className="service-section service-section--trust">
          <div className="page-band">
            <Reveal className="service-section__heading">
              <span className="eyebrow">Proven locally</span>
              <h2>{fields["SECTION 8 — H2"]}</h2>
            </Reveal>
            <Reveal className="service-client-proof">
              <div className="service-client-proof__name">
                <span>{fields["SECTION 8 — CLIENT SECTOR"]}</span>
                <strong>{fields["SECTION 8 — CLIENT NAME"]}</strong>
              </div>
              <div>
                <p>{fields["SECTION 8 — CLIENT TRUST CONTENT"]}</p>
                <div className="service-client-proof__stats">
                  {[1, 2, 3].map((index) => <span key={index}>{fields[`SECTION 8 — STAT ${index}`]}</span>)}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="service-section page-band">
        <Reveal className="service-section__heading">
          <span className="eyebrow">Connected services</span>
          <h2>{fields["SECTION 9 — H2"]}</h2>
        </Reveal>
        <div className="service-card-grid service-card-grid--three">
          {relatedServices.map((item, index) => (
            <Reveal className="service-info-card service-related-card" delay={index * 0.05} key={item.title}>
              <span className="service-info-card__number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <Link href={item.href}>{item.label} <span aria-hidden="true">→</span></Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="service-section service-consultation" id="service-consultation">
        <div className="page-band service-consultation__layout">
          <Reveal className="service-consultation__copy">
            <span className="eyebrow">Start with a clear assessment</span>
            <h2>{fields["SECTION 10 — H2"]}</h2>
            <p>{fields["SECTION 10 — SUBLINE"]}</p>
            <a className="button button--whatsapp" href="https://wa.me/971523554202">
              {fields["SECTION 10 — WHATSAPP CTA"]}
            </a>
            <div className="service-contact-list">
              <span><b>Office</b>{fields["SECTION 10 — NAP ADDRESS"]}</span>
              <a href="tel:026220071"><b>Phone</b>{fields["SECTION 10 — NAP PHONE"]}</a>
              <a href="mailto:hello@xofoz.com"><b>Email</b>{fields["SECTION 10 — NAP EMAIL"]}</a>
              <span><b>Hours</b>{fields["SECTION 10 — NAP HOURS"]}</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ServiceLeadForm
              service={service.label}
              fields={formFields}
              buttonLabel={fields["SECTION 10 — FORM BUTTON"]}
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
