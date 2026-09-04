import type { Metadata } from "next";
import type { ReactNode } from "react";
import CompanyStatsCounter from "../../components/CompanyStatsCounter";
import Link from "next/link";
import ParticleField from "../../components/ParticleField";
import ProductQuoteForm from "../../components/ProductQuoteForm";
import Reveal from "../../components/Reveal";
import { authorisedPartnerships, productCategories } from "../../data/products";
import { productBrandClassName, productBrandLogos, resolveProductBrandLogo } from "../../data/product-brand-logos";

export const metadata: Metadata = {
  title: "Authorised IT Products In Abu Dhabi",
  description: "Source genuine IT products in Abu Dhabi from XOFOZ, including firewalls, networking, CCTV, AV, storage, business software, and security products with UAE warranty and installation support.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Authorised IT Products In Abu Dhabi | XOFOZ",
    description: "Genuine, warranted business technology supplied and installed by XOFOZ in Abu Dhabi.",
    url: "/products",
  },
};

const whyXofoz = [
  ["Genuine products, authorised supply chain only", "Products are sourced from authorised UAE distributors with manufacturer warranty, official firmware, and full manufacturer support eligibility."],
  ["Installation and configuration included", "Our engineers install, configure, and test each product for your environment instead of leaving setup and integration to your team."],
  ["One accountable technology supplier", "Hardware, software, networking, security, and communication products work together under one Abu Dhabi partner."],
  ["Support from the team that installed it", "Continue with an IT AMC or on-call support from engineers who already understand your installation."],
] as const;

const productCollections = [
  {
    title: "Security and protection",
    eyebrow: "Protect the perimeter, users, and premises",
    copy: "Layered products for network defence, endpoint protection, surveillance, and controlled access.",
    image: "/services/cybersecurity/cybersecurity-solutions-abu-dhabi-hero.webp",
    products: ["Next gen firewall", "Endpoint security", "Email security", "CCTV systems", "Attendance and access control"],
  },
  {
    title: "Network and communication",
    eyebrow: "Keep every team and location connected",
    copy: "Business-grade switching, wireless, voice, video, and building communication systems.",
    image: "/services/network-infrastructure/network-infrastructure-abu-dhabi-hero.webp",
    products: ["IP phones", "Video conferencing", "Network switches", "Wireless access points", "IP PBX systems", "Intercom systems"],
  },
  {
    title: "Infrastructure and workplace",
    eyebrow: "Build reliable technology environments",
    copy: "Storage, power protection, displays, audiovisual systems, and specialist workplace infrastructure.",
    image: "/services/hardware-av/hardware-av-solutions-abu-dhabi-hero.webp",
    products: ["Display and interactive panels", "NAS storage", "Audio visual systems", "Master clock system", "UPS systems", "Digital signage"],
  },
  {
    title: "Business software",
    eyebrow: "Equip teams with the right applications",
    copy: "Authorised accounting and technical-design software with licensing, setup, and local support.",
    image: "/services/tally-prime/tally-prime-abu-dhabi-hero.webp",
    products: ["Accounting software", "Design software"],
  },
] as const;

function ProductIcon({ name }: { name: string }) {
  const icons: Record<string, ReactNode> = {
    shield: <><path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6z"/><path d="m9 12 2 2 4-4"/></>,
    laptop: <><rect x="5" y="4" width="14" height="11" rx="1.5"/><path d="M3 19h18M8 19l1-4h6l1 4"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6M8 11l-4 5M16 11l4 5"/></>,
    phone: <><path d="M7 4h10v16H7zM10 17h4"/><path d="M9 7h6"/></>,
    video: <><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></>,
    network: <><rect x="8" y="3" width="8" height="5" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/><rect x="14" y="16" width="7" height="5" rx="1"/><path d="M12 8v4M6.5 16v-4h11v4"/></>,
    wifi: <><path d="M3 9a14 14 0 0 1 18 0M6 12.5a9.5 9.5 0 0 1 12 0M9.5 16a4 4 0 0 1 5 0"/><circle cx="12" cy="19" r="1"/></>,
    display: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 8h4M7 11h7"/></>,
    pbx: <><path d="M7 4h10v16H7zM10 7h4M10 10h.01M14 10h.01M10 13h.01M14 13h.01M10 17h4"/></>,
    server: <><rect x="4" y="3" width="16" height="7" rx="1.5"/><rect x="4" y="14" width="16" height="7" rx="1.5"/><path d="M8 6.5h.01M8 17.5h.01M12 6.5h5M12 17.5h5"/></>,
    intercom: <><rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="8" r="2"/><path d="M9 13h6M9 16h6M12 19h.01"/></>,
    camera: <><path d="M4 8h11l3 3v5H4zM15 10l4-3M8 16v3M5 21h6"/><circle cx="9" cy="12" r="2.5"/></>,
    audio: <><path d="M5 10v4M9 7v10M13 4v16M17 8v8M21 10v4"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7z"/>,
    fingerprint: <><path d="M8 9a4 4 0 0 1 8 0c0 5-1 8-3 11M5 12V9a7 7 0 0 1 14 0v3M8 13v-3a4 4 0 0 1 8 0v3c0 2-.3 4-1 6M11 10v4c0 2-.4 4-1.2 5.5"/></>,
    signage: <><rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="m7 12 3-3 3 3 2-2 3 3M9 21h6M12 17v4"/></>,
    calculator: <><rect x="5" y="3" width="14" height="18" rx="2"/><rect x="8" y="6" width="8" height="3"/><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01"/></>,
    ruler: <><path d="m4 17 13-13 3 3L7 20H4z"/><path d="m13 8 3 3M10 11l2 2M7 14l3 3"/></>,
  };
  return <span aria-hidden="true"><svg viewBox="0 0 24 24">{icons[name] ?? icons.display}</svg></span>;
}

export default function ProductsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://xofoz.com/" },
          { "@type": "ListItem", position: 2, name: "Products", item: "https://xofoz.com/products" },
        ],
      },
      {
        "@type": "ItemList",
        name: "XOFOZ authorised IT product portfolio",
        numberOfItems: productCategories.length,
        itemListElement: productCategories.map((product, index) => ({
          "@type": "ListItem", position: index + 1, name: product.title, url: `https://xofoz.com${product.href}`,
        })),
      },
    ],
  };

  return (
    <main className="products-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="products-hero">
        <ParticleField variant="service" />
        <div className="products-hero__glow" aria-hidden="true" />
        <div className="page-band">
          <nav className="products-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Products</span>
          </nav>
          <div className="products-hero__grid">
            <Reveal className="products-hero__copy">
              <span className="eyebrow">Authorised product supplier · Abu Dhabi, UAE</span>
              <h1>Authorised IT products in Abu Dhabi.</h1>
              <p>Genuine business technology from leading global brands, backed by manufacturer warranty, official firmware, and implementation by an Abu Dhabi-based technical team.</p>
              <div className="products-proof-list" aria-label="Product supply benefits">
                {['Manufacturer warranty', 'Official firmware', 'Implementation available', 'Local technical support'].map((item) => <span key={item}><b>✓</b>{item}</span>)}
              </div>
              <div className="products-hero__actions">
                <a className="button button--primary" href="#product-quote">Get a product quote <span aria-hidden="true">↘</span></a>
              </div>
            </Reveal>
            <Reveal className="products-hero__visual" delay={0.08}>
              <img className="products-hero__image" src="/pillars/authorised-it-products.png" alt="Business IT products supplied and implemented by XOFOZ" />
              <div className="products-hero__visual-heading"><span>Authorised ecosystem</span><strong>Genuine technology. One local partner.</strong></div>
              <div className="products-hero__seal"><strong>50+</strong><span>technology<br />brands</span></div>
            </Reveal>
          </div>
          <div className="products-logo-marquee" aria-label="Selected XOFOZ technology partners">
            <div className="products-logo-track">
              {[...productBrandLogos, ...productBrandLogos].map(([name, src], index) => (
                <div className={productBrandClassName(name)} aria-hidden={index >= productBrandLogos.length} key={`${name}-${index}`}>
                  <img src={src} alt={index < productBrandLogos.length ? `${name} logo` : ""} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="products-metrics" aria-label="XOFOZ product supply statistics">
        <CompanyStatsCounter className="page-band" />
      </section>

      <section className="section page-band products-intro">
        <Reveal className="section-heading">
          <span className="eyebrow">Genuine by design</span>
          <h2 className="section-title">Every product XOFOZ supplies, organised by category.</h2>
          <p>We supply through official UAE distribution channels and connect every product choice to the implementation, configuration, and support it needs.</p>
        </Reveal>
        <Reveal className="products-auth-banner" delay={0.06}>
          <span className="products-auth-banner__icon">✓</span>
          <div><strong>Authorised UAE supply chain</strong><p>Manufacturer warranty, eligible support, official firmware, and traceable procurement—without grey-market uncertainty.</p></div>
          <a href="#portfolio">Explore 19 categories <span aria-hidden="true">↓</span></a>
        </Reveal>
      </section>

      <section className="products-portfolio" id="portfolio">
        <div className="page-band">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">Product portfolio</span>
            <h2 className="section-title">Business technology from brands you know.</h2>
            <p>Choose a category to explore the related XOFOZ solution, installation, and support service.</p>
          </Reveal>
          <div className="product-collections">
            {productCollections.map((collection, collectionIndex) => {
              const collectionProducts = collection.products.map((title) => productCategories.find((product) => product.title === title)!);
              return (
                <section className={`product-collection product-collection--${collectionIndex + 1}`} key={collection.title}>
                  <Reveal className="product-collection__visual">
                    <img src={collection.image} alt="" aria-hidden="true" />
                    <div>
                      <span>Collection 0{collectionIndex + 1}</span>
                      <p>{collection.eyebrow}</p>
                      <h3>{collection.title}</h3>
                      <small>{collection.copy}</small>
                    </div>
                  </Reveal>
                  <div className="product-collection__cards">
                    {collectionProducts.map((product, index) => {
                      const productNumber = productCategories.findIndex((item) => item.title === product.title) + 1;
                      return (
                        <Reveal className="product-card" delay={(index % 3) * 0.035} key={product.title}>
                          <div className="product-card__top">
                            <div className="product-card__icon"><ProductIcon name={product.icon} /></div>
                            <span>{String(productNumber).padStart(2, "0")}</span>
                          </div>
                          <h3>{product.title}</h3>
                          <p>{product.subtitle}</p>
                          <div className="product-brand-list">
                            {product.brands.map((brand) => (
                              <span key={brand}>{brand}</span>
                            ))}
                          </div>
                          <Link href={product.href}>View {product.linkLabel} <span aria-hidden="true">↗</span></Link>
                        </Reveal>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section page-band products-why">
        <Reveal className="section-heading section-heading--center">
          <span className="eyebrow">Why XOFOZ</span>
          <h2 className="section-title">Product supply with technical accountability built in.</h2>
          <p>A quotation is only the beginning. We help select, deploy, integrate, and support every component.</p>
        </Reveal>
        <div className="products-accountability">
          <div className="products-accountability__line" aria-hidden="true" />
          <div className="products-accountability__features">
            {whyXofoz.map(([title, copy], index) => (
              <Reveal className="products-accountability__card" delay={index * 0.05} key={title}>
                <div><span>0{index + 1}</span><b aria-hidden="true">✓</b></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="products-partner-wall" delay={0.08}>
            <div className="products-partner-wall__heading">
              <div><span className="eyebrow">Verified ecosystem</span><h3>Authorised partnerships</h3></div>
              <p>Manufacturer and distributor credentials that support genuine procurement, implementation, and after-sales service.</p>
            </div>
            <div className="products-partner-wall__logos">
              {authorisedPartnerships.map(([name, status]) => {
                const logo = resolveProductBrandLogo(name);

                return (
                  <div className={`${productBrandClassName(name)} ${logo ? "has-partner-logo" : "has-partner-mark"}`} key={name}>
                    {logo ? <img src={logo} alt={`${name} logo`} /> : <strong className="products-partner-wall__mark">{name}</strong>}
                    <span>{status}</span>
                  </div>
                );
              })}
            </div>
            <small>Partnership status is reviewed against current documentation. Confirm current authorisation when preparing tender or procurement records.</small>
          </Reveal>
        </div>
      </section>

      <section className="products-quote" id="product-quote">
        <div className="page-band products-quote__grid">
          <Reveal className="products-quote__copy">
            <span className="eyebrow">Product enquiry</span>
            <h2 className="section-title">Looking for a specific product?</h2>
            <p>Tell us the product, model, quantity, or outcome you need. We’ll confirm availability, suitable alternatives, warranty, and installation options.</p>
            <div className="products-contact-list">
              <a href="tel:+97126220071"><span>Call</span><strong>02 622 0071</strong></a>
              <a href="https://wa.me/971528209231"><span>WhatsApp</span><strong>0528209231</strong></a>
              <a href="mailto:hello@xofoz.com"><span>Email</span><strong>hello@xofoz.com</strong></a>
            </div>
            <address>4 Al Ithmid Street, Mohamed Bin Zayed City, Mussafah, Abu Dhabi, UAE</address>
          </Reveal>
          <Reveal className="products-quote__form" delay={0.08}>
            <span className="eyebrow">Fast quotation</span>
            <h3>Send your product requirement.</h3>
            <ProductQuoteForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
