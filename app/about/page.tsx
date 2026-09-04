import type { Metadata } from "next";
import CompanyStatsCounter from "../../components/CompanyStatsCounter";
import Link from "next/link";
import ClientLogoSection from "../../components/ClientLogoSection";
import ParticleField from "../../components/ParticleField";
import Reveal from "../../components/Reveal";
import ProductBrandMark from "../../components/ProductBrandMark";

export const metadata: Metadata = {
  title: "About XOFOZ | IT Solutions Company In Abu Dhabi",
  description: "Meet XOFOZ Information Technology LLC, an Abu Dhabi IT company delivering managed services, authorised products, and complete technology solutions across the UAE since 2015.",
  alternates: { canonical: "/about" },
};

const milestones = [
  ["2015", "XOFOZ established in Abu Dhabi", "The company began with a clear focus: give UAE businesses one accountable local partner for support, infrastructure, products, and implementation."],
  ["2023", "Product and compliance capabilities expanded", "Authorised business-software supply and compliance-conscious CCTV and ELV delivery became part of the growing XOFOZ portfolio."],
  ["2024", "A broader managed-services portfolio", "Support relationships grew across hospitality, construction, logistics, real estate, and manufacturing environments."],
  ["2025", "Cloud and security expertise deepened", "XOFOZ expanded its ability to support Microsoft, network security, backup, collaboration, and modern workplace requirements."],
  ["Today", "One partner across the technology lifecycle", "The team continues to assess, supply, implement, secure, and support business technology across Abu Dhabi and the UAE."],
] as const;

const pillars = [
  { number: "01", title: "Services", copy: "Managed IT services, annual maintenance contracts, and specialist support that keep business systems reliable, secure, and productive.", href: "/services", image: "/pillars/managed-it-services.png", link: "Explore IT services" },
  { number: "02", title: "Products", copy: "Genuine hardware and software sourced through official channels, professionally installed, licensed, and supported by our local team.", href: "/products", image: "/pillars/authorised-it-products.png", link: "Explore IT products" },
  { number: "03", title: "Solutions", copy: "Complete technology solutions assessed, planned, implemented, and handed over by one accountable engineering partner.", href: "/solutions", image: "/pillars/complete-it-solutions.png", link: "Explore IT solutions" },
] as const;

const teams = [
  ["infrastructure", "Infrastructure", "Network · Cabling · Server"],
  ["elv", "Security and ELV", "CCTV · Access · LV systems"],
  ["cloud", "Cloud and software", "Microsoft · ERP · Cloud"],
  ["cybersecurity", "Cybersecurity", "Firewall · Endpoint · Email"],
] as const;

const supportedEcosystem = ["Microsoft", "Fortinet", "Hikvision", "Tally Prime", "Acronis", "ESET", "Aruba", "Sophos", "Cisco", "greytHR", "Matrix", "TP-Link", "Vircom", "Sangfor", "Bitdefender", "UniFi", "Synology", "QNAP", "Yealink", "3CX", "ZKTeco"] as const;

function TeamIcon({ type }: { type: typeof teams[number][0] }) {
  if (type === "infrastructure") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="3" width="16" height="6" rx="1.5"/><rect x="4" y="15" width="16" height="6" rx="1.5"/><path d="M8 9v6M16 9v6M8 6h.01M8 18h.01M12 6h5M12 18h5"/></svg>;
  if (type === "elv") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h11l3 3v5H4zM15 10l4-3M8 16v3M5 21h6M18 16l2 3"/><circle cx="9" cy="12" r="2.5"/></svg>;
  if (type === "cloud") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 8.6 4.7 4.7 0 0 0 7 18Z"/><path d="m9 14 3-3 3 3M12 11v6"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6z"/><rect x="9" y="10" width="6" height="5" rx="1"/><path d="M10.5 10V8.5a1.5 1.5 0 0 1 3 0V10"/></svg>;
}

const values = [
  ["Accountability", "One team, complete ownership", "We remain accountable for the systems we recommend, supply, install, and support. When an issue crosses products or vendors, our team coordinates the resolution."],
  ["Genuine products", "Official supply channels", "We prioritise traceable UAE distribution, valid licensing, official firmware, and manufacturer-backed warranty for the products entrusted to business operations."],
  ["Local presence", "Abu Dhabi team and response", "Requirements are handled by a team familiar with Abu Dhabi sites, business expectations, compliance needs, and the realities of local on-site support."],
  ["Sector knowledge", "Technology shaped around operations", "Our recommendations reflect how hotels, construction sites, warehouses, offices, and commercial facilities actually work—not a generic IT template."],
] as const;

const companyDetails = [
  ["Company", "XOFOZ Information Technology LLC SPC"],
  ["Established", "2015 · Abu Dhabi, UAE"],
  ["Address", "4 Al Ithmid Street, Mohamed Bin Zayed City, Mussafah, Abu Dhabi, UAE"],
  ["Phone", "02 622 0071"],
  ["WhatsApp", "0528209231"],
  ["Email", "hello@xofoz.com"],
  ["Working hours", "Monday–Saturday · 8:30 AM–6:30 PM"],
] as const;

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization", name: "XOFOZ Information Technology LLC SPC", legalName: "XOFOZ Information Technology LLC SPC", foundingDate: "2015", url: "https://xofoz.com", logo: "https://xofoz.com/brand/xofoz-logo.png", email: "hello@xofoz.com", telephone: "+97126220071",
        address: { "@type": "PostalAddress", streetAddress: "4 Al Ithmid Street, Mohamed Bin Zayed City, Mussafah", addressLocality: "Abu Dhabi", addressCountry: "AE" },
      },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://xofoz.com/" }, { "@type": "ListItem", position: 2, name: "About XOFOZ", item: "https://xofoz.com/about" }] },
    ],
  };

  return (
    <main className="about-page about-page--reworked">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="about-new-hero">
        <ParticleField variant="service" />
        <div className="page-band">
          <nav className="about-new-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>About XOFOZ</span></nav>
          <div className="about-new-hero__grid">
            <Reveal className="about-new-hero__copy">
              <span className="eyebrow">XOFOZ Information Technology LLC · Abu Dhabi</span>
              <h1>Abu Dhabi&apos;s trusted IT solutions partner since 2015.</h1>
              <p>XOFOZ brings managed IT services, genuine technology products, and complete IT solutions together under one accountable local team for businesses across Abu Dhabi and the UAE.</p>
              <div className="hero__actions"><Link className="button button--primary" href="/services">View our services</Link><Link className="button button--ghost" href="/contact">Contact XOFOZ</Link></div>
            </Reveal>
            <Reveal className="about-new-hero__visual" delay={0.08}>
              <img src="/about/who-we-are-ops-desk.png" alt="XOFOZ technology operations in Abu Dhabi" />
              <div><span>Local operations</span><strong>Abu Dhabi based.<br />UAE focused.</strong></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-new-stats"><CompanyStatsCounter className="page-band" /></section>

      <section className="section page-band about-story">
        <Reveal className="about-story__heading"><span className="eyebrow">Our story</span><h2 className="section-title">Built to make business technology easier to own.</h2></Reveal>
        <Reveal className="about-story__copy" delay={0.06}>
          <p>XOFOZ was established in Abu Dhabi in 2015 around a practical observation: businesses should not need a different vendor for every technology problem. Support, security, hardware, cloud, communication, and infrastructure are connected—and someone needs to remain accountable for the whole environment.</p>
          <p>That principle shaped the company into a multidisciplinary local technology partner. Today, XOFOZ works across the full lifecycle: understanding the requirement, designing the approach, sourcing genuine products, completing implementation, and staying available after handover.</p>
          <div><span>One local team</span><span>Multi-vendor expertise</span><span>Lifecycle ownership</span></div>
        </Reveal>
      </section>

      <section className="about-timeline-section">
        <ParticleField variant="subtle" />
        <div className="page-band">
          <Reveal className="section-heading"><span className="eyebrow">Company journey</span><h2 className="section-title">A focused path of capability and growth.</h2><p>From local IT support to integrated products and solutions, each stage has expanded what one accountable XOFOZ team can deliver.</p></Reveal>
          <ol className="about-timeline">{milestones.map(([year,title,copy],index) => <Reveal as="li" delay={index * .04} key={`${year}-${title}`}><span>{year}</span><div><small>Milestone {String(index + 1).padStart(2,"0")}</small><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</ol>
          <p className="about-verification-note">Specific partnership dates and client milestones are confirmed against company documentation before external use.</p>
        </div>
      </section>

      <section className="section page-band about-new-pillars">
        <Reveal className="section-heading section-heading--center"><span className="eyebrow">What we do</span><h2 className="section-title">Three connected pillars. One technology partner.</h2><p>Each pillar solves a different part of the same challenge: making business technology reliable, secure, and accountable.</p></Reveal>
        <div className="about-pillar-grid">{pillars.map((pillar,index) => <Reveal className="about-new-pillar" delay={index*.05} key={pillar.title}><div><img src={pillar.image} alt="" /></div><span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.copy}</p><Link href={pillar.href}>{pillar.link} <b>→</b></Link></Reveal>)}</div>
      </section>

      <section className="about-expertise">
        <div className="page-band">
          <Reveal className="section-heading"><span className="eyebrow">Technical expertise</span><h2 className="section-title">Specialists across the platforms your business runs.</h2><p>Capabilities span infrastructure, security, cloud, software, and low-voltage systems so connected requirements can be handled together.</p></Reveal>
          <div className="about-team-grid">{teams.map(([icon,title,role],index) => <Reveal className="about-team-card" delay={index*.04} key={title}><div><strong><TeamIcon type={icon} /></strong><span>0{index+1}</span></div><h3>{title}</h3><p>{role}</p></Reveal>)}</div>
          <Reveal className="about-cert-strip">
            <span>Supported ecosystem</span>
            <div className="about-cert-marquee">
              <div className="about-cert-track">{supportedEcosystem.map(cert => <ProductBrandMark brand={cert} key={cert} />)}</div>
              <div className="about-cert-track" aria-hidden="true">{supportedEcosystem.map(cert => <ProductBrandMark brand={cert} key={`duplicate-${cert}`} />)}</div>
            </div>
          </Reveal>
        </div>
      </section>

      <ClientLogoSection />

      <section className="section page-band about-values">
        <Reveal className="section-heading"><span className="eyebrow">What we stand for</span><h2 className="section-title">Principles that shape every recommendation and response.</h2></Reveal>
        <div className="about-values__grid">{values.map(([title,subtitle,copy],index) => <Reveal className="about-value-card" delay={(index%2)*.05} key={title}><span>0{index+1}</span><div><small>{title}</small><h3>{subtitle}</h3><p>{copy}</p></div></Reveal>)}</div>
      </section>

      <section className="about-company">
        <div className="page-band about-company__grid">
          <Reveal><span className="eyebrow">Company information</span><h2 className="section-title">Local presence, clearly documented.</h2><p>XOFOZ supports on-site requirements across Abu Dhabi and remote technology requirements across the UAE.</p><div className="about-coverage"><strong>Service coverage</strong><span>Abu Dhabi · Mussafah · Mohamed Bin Zayed City · Khalifa City · Al Reem Island · Yas Island · UAE remote support</span></div></Reveal>
          <Reveal className="about-company__details" delay={.08}>{companyDetails.map(([label,value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</Reveal>
        </div>
      </section>

      <section className="about-final-cta">
        <ParticleField variant="subtle" />
        <Reveal className="page-band"><div><span className="eyebrow">Work with XOFOZ</span><h2 className="section-title">Ready to discuss your IT requirements?</h2><p>Start with the requirement. We’ll help identify a practical next step for support, products, infrastructure, or a complete solution.</p></div><div><Link className="button button--primary" href="/contact">Contact XOFOZ</Link></div></Reveal>
      </section>
    </main>
  );
}
