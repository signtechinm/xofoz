import type { Metadata } from "next";
import Link from "next/link";
import ParticleField from "../../components/ParticleField";
import ProductQuoteForm from "../../components/ProductQuoteForm";
import Reveal from "../../components/Reveal";
import { authorisedPartnerships, productCategories } from "../../data/products";

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

const logoPartners = [
  ["Fortinet", "/partners/fortinet.svg"],
  ["Microsoft", "/partners/microsoft.svg"],
  ["Hikvision", "/partners/hikvision.svg"],
  ["Aruba", "/partners/aruba.svg"],
  ["ESET", "/partners/eset.svg"],
  ["Acronis", "/partners/acronis.svg"],
  ["Tally Prime", "/partners/tally-prime.svg"],
] as const;

const partnerLogoByName = Object.fromEntries(logoPartners.map(([name, src]) => [name, src])) as Record<string, string>;

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
  const symbols: Record<string, string> = {
    shield: "⌾", laptop: "▱", mail: "✉", phone: "⌕", video: "◉", network: "⌘",
    wifi: "◒", display: "▣", pbx: "⌁", server: "▥", intercom: "◫", camera: "◉",
    audio: "◖", clock: "◷", bolt: "ϟ", fingerprint: "◎", signage: "▤", calculator: "▦", ruler: "⌞",
  };
  return <span aria-hidden="true">{symbols[name] || "◇"}</span>;
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
                <a className="button button--ghost" href="https://wa.me/971523554202">WhatsApp us</a>
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
              {[...logoPartners, ...logoPartners].map(([name, src], index) => (
                <div aria-hidden={index >= logoPartners.length} key={`${name}-${index}`}>
                  <img src={src} alt={index < logoPartners.length ? `${name} logo` : ""} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="products-metrics" aria-label="XOFOZ product supply statistics">
        <div className="page-band">
          {[['19+', 'Product categories'], ['50+', 'Technology brands'], ['150+', 'Businesses equipped'], ['UAE', 'Authorised supply chain']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
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
                            {product.brands.map((brand) => <span className={product.authorised.includes(brand) ? "is-authorised" : ""} key={brand}>{brand}{product.authorised.includes(brand) && <i aria-label="authorised or certified">✓</i>}</span>)}
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
          <p className="products-status-note"><span>✓</span> Marked brands indicate an authorised dealer or certified reseller relationship. Other brands are supplied through official UAE distribution channels. Contact XOFOZ to confirm current status for a specific brand.</p>
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
              {authorisedPartnerships.filter(([name]) => partnerLogoByName[name]).map(([name, status]) => (
                <div key={name}>
                  <img src={partnerLogoByName[name]} alt={`${name} logo`} />
                  <span>{status}</span>
                </div>
              ))}
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
              <a href="https://wa.me/971523554202"><span>WhatsApp</span><strong>+971 52 355 4202</strong></a>
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
