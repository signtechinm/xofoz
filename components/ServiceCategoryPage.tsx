import Image from "next/image";
import Link from "next/link";
import type { ServiceCategoryContent } from "../data/service-category-content";
import ParticleField from "./ParticleField";
import Reveal from "./Reveal";
import ServiceCategoryEnquiryButton from "./ServiceCategoryEnquiryButton";
import ServiceCategoryLeadForm from "./ServiceCategoryLeadForm";

const industryHrefs: Record<string, string> = {
  hospitality: "/#industries",
  "real estate": "/#industries",
  construction: "/#industries",
  logistics: "/#industries",
  manufacturing: "/#industries",
};

export default function ServiceCategoryPage({ content }: { content: ServiceCategoryContent }) {
  const { category, hero, overview, cards, reasons, industries, faqs, cta } = content;
  const categoryWhatsApp = `https://wa.me/971523554202?text=${encodeURIComponent(`Hello XOFOZ, I would like help with ${category.label}.`)}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: hero.title,
    description: content.metaDescription,
    url: `https://xofoz.com/services/${category.slug}`,
    areaServed: { "@type": "City", name: "Abu Dhabi" },
    provider: {
      "@type": "Organization",
      name: "XOFOZ Information Technology LLC",
      url: "https://xofoz.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: content.cardsTitle,
      itemListElement: cards.map((card) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: card.name, description: card.description },
      })),
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://xofoz.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://xofoz.com/services" },
      { "@type": "ListItem", position: 3, name: content.breadcrumb, item: `https://xofoz.com/services/${category.slug}` },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="solution-page service-category-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]) }}
      />

      <nav className="service-breadcrumb page-band" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/services">Services</Link><span aria-hidden="true">/</span>
        <span aria-current="page">{content.breadcrumb}</span>
      </nav>

      <section className="service-hero page-band">
        <ParticleField variant="service" />
        <div className="service-hero__glow" aria-hidden="true" />
        <Reveal className="service-hero__copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p>{hero.summary}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#service-category-consultation">{hero.cta}</a>
            <a className="button button--ghost" href={categoryWhatsApp}>{hero.whatsapp}</a>
          </div>
          <div className="service-category-badges" aria-label="Service category highlights">
            {hero.badges.map((badge) => <span key={badge}>✓ {badge}</span>)}
          </div>
          <div className="service-trust-stats" aria-label="XOFOZ service highlights">
            {hero.stats.map((stat) => <span key={stat}>{stat}</span>)}
          </div>
        </Reveal>
        <Reveal className="service-hero__visual" delay={0.08}>
          <Image
            src={category.image}
            alt={`${category.label} delivered by XOFOZ in Abu Dhabi`}
            fill
            priority
            sizes="(max-width: 860px) 100vw, 42vw"
          />
          <div className="service-hero__image-note"><span>XOFOZ services</span><strong>{category.label}</strong></div>
        </Reveal>
      </section>

      <section className="service-section service-section--blueprint page-band">
        <Reveal className="service-section__heading"><span className="eyebrow">What we cover</span><h2>{overview.title}</h2></Reveal>
        <div className="solution-overview">
          {overview.paragraphs.map((paragraph) => <Reveal as="p" key={paragraph}>{paragraph}</Reveal>)}
        </div>
      </section>

      <section className="service-section service-section--soft service-section--signal">
        <div className="page-band">
          <Reveal className="service-section__heading"><span className="eyebrow">Specialist services</span><h2>{content.cardsTitle}</h2><p>{content.cardsIntro}</p></Reveal>
          <div className={`solution-card-grid ${cards.length === 1 ? "solution-card-grid--feature" : ""}`}>
            {cards.map((card, index) => (
              <Reveal className="solution-card service-category-card" delay={(index % 3) * 0.035} id={card.id} key={card.id}>
                <span className="solution-card__number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{card.name}</h3>
                <p>{card.description}</p>
                {(card.authorisedBrands.length > 0 || card.regularBrands.length > 0) && (
                  <div className="service-category-card__brands" aria-label={`Brands for ${card.name}`}>
                    {card.authorisedBrands.map((brand) => <span className="is-authorised" key={`authorised-${brand}`}>{brand}</span>)}
                    {card.regularBrands.map((brand) => <span key={`regular-${brand}`}>{brand}</span>)}
                  </div>
                )}
                <ServiceCategoryEnquiryButton category={category.label} subService={card.name} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section service-section--orbit page-band">
        <Reveal className="service-section__heading"><span className="eyebrow">Why XOFOZ</span><h2>{content.whyTitle}</h2></Reveal>
        <div className="service-why-layout">
          <div className="service-why-list">
            {reasons.map((reason, index) => <Reveal className="service-why-item" delay={index * 0.035} key={reason.title}><span aria-hidden="true">✓</span><div><h3>{reason.title}</h3><p>{reason.description}</p></div></Reveal>)}
          </div>
          {content.brands.length > 0 && <Reveal className="service-certifications" delay={0.08}><span className="eyebrow">Technology ecosystem</span><h3>Certifications and partnerships</h3><div>{content.brands.map((brand) => <span key={brand}>{brand}</span>)}</div></Reveal>}
        </div>
      </section>

      <section className="service-section service-section--soft service-section--topography">
        <div className="page-band">
          <Reveal className="service-section__heading"><span className="eyebrow">Industry experience</span><h2>{content.industriesTitle}</h2><p>{content.industriesIntro}</p></Reveal>
          <div className="service-industry-grid">
            {industries.map((industry, index) => {
              const key = Object.keys(industryHrefs).find((name) => industry.title.toLowerCase().includes(name));
              return <Reveal className="service-industry-card" delay={index * 0.04} key={industry.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{industry.title}</h3><p>{industry.description}</p><Link href={key ? industryHrefs[key] : "/#industries"}>{industry.linkLabel || "View industry solutions"} <b aria-hidden="true">→</b></Link></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="service-section service-section--connections page-band" id="faq">
        <Reveal className="service-section__heading"><span className="eyebrow">Answers upfront</span><h2>{content.faqTitle}</h2></Reveal>
        <div className="service-faq">
          {faqs.map((faq, index) => <Reveal as="details" className="service-faq__item" delay={index * 0.025} key={faq.question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b aria-hidden="true">+</b></summary><p>{faq.answer}</p></Reveal>)}
        </div>
      </section>

      <section className="service-section service-consultation" id="service-category-consultation">
        <div className="page-band service-consultation__layout">
          <Reveal className="service-consultation__copy"><span className="eyebrow">Start with a clear assessment</span><h2>{cta.title}</h2><p>{cta.summary}</p><a className="button button--whatsapp" href={categoryWhatsApp}>{cta.whatsapp || "WhatsApp us now"}</a><div className="service-contact-list"><span><b>Office</b>4 Al Ithmid Street, Mohamed Bin Zayed City, Mussafah, Abu Dhabi, UAE</span><a href="tel:026220071"><b>Phone</b>026 220 071</a><a href="mailto:hello@xofoz.com"><b>Email</b>hello@xofoz.com</a><span><b>Hours</b>Monday to Saturday — 8:30 AM to 6:30 PM</span></div></Reveal>
          <Reveal delay={0.08}><ServiceCategoryLeadForm category={category.label} options={cards.map((card) => card.name)} fields={cta.fields} buttonLabel={cta.button} /></Reveal>
        </div>
      </section>
    </main>
  );
}
