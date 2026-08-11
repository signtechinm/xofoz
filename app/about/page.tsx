import type { Metadata } from "next";
import Link from "next/link";
import ClientLogoSection from "../../components/ClientLogoSection";
import ParticleField from "../../components/ParticleField";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "About XOFOZ | IT Solutions Company In Abu Dhabi",
  description: "Meet XOFOZ Information Technology LLC, an Abu Dhabi IT company delivering managed services, authorised products, and complete technology solutions across the UAE since 2022.",
  alternates: { canonical: "/about" },
};

const milestones = [
  ["2022", "XOFOZ established in Abu Dhabi", "The company began with a clear focus: give UAE businesses one accountable local partner for support, infrastructure, products, and implementation."],
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
  ["IT", "Infrastructure", "Network · Cabling · Server", ["Aruba", "UniFi", "Cisco", "ADMCC"]],
  ["SE", "Security and ELV", "CCTV · Access · LV systems", ["Hikvision", "Fortinet", "ADMCC"]],
  ["CL", "Cloud and software", "Microsoft · ERP · Cloud", ["Microsoft", "Azure", "Tally Prime", "Acronis"]],
  ["CY", "Cybersecurity", "Firewall · Endpoint · Email", ["Fortinet", "Sophos", "ESET", "Bitdefender"]],
] as const;

const values = [
  ["Accountability", "One team, complete ownership", "We remain accountable for the systems we recommend, supply, install, and support. When an issue crosses products or vendors, our team coordinates the resolution."],
  ["Genuine products", "Official supply channels", "We prioritise traceable UAE distribution, valid licensing, official firmware, and manufacturer-backed warranty for the products entrusted to business operations."],
  ["Local presence", "Abu Dhabi team and response", "Requirements are handled by a team familiar with Abu Dhabi sites, business expectations, compliance needs, and the realities of local on-site support."],
  ["Sector knowledge", "Technology shaped around operations", "Our recommendations reflect how hotels, construction sites, warehouses, offices, and commercial facilities actually work—not a generic IT template."],
] as const;

const companyDetails = [
  ["Company", "XOFOZ Information Technology LLC SPC"],
  ["Established", "2022 · Abu Dhabi, UAE"],
  ["Address", "4 Al Ithmid Street, Mohamed Bin Zayed City, Mussafah, Abu Dhabi, UAE"],
  ["Phone", "02 622 0071"],
  ["WhatsApp", "+971 52 355 4202"],
  ["Email", "hello@xofoz.com"],
  ["Working hours", "Monday–Saturday · 8:30 AM–6:30 PM"],
] as const;

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization", name: "XOFOZ Information Technology LLC SPC", legalName: "XOFOZ Information Technology LLC SPC", foundingDate: "2022", url: "https://xofoz.com", logo: "https://xofoz.com/brand/xofoz-logo.png", email: "hello@xofoz.com", telephone: "+97126220071",
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
              <h1>Abu Dhabi&apos;s trusted IT solutions partner since 2022.</h1>
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

      <section className="about-new-stats" aria-label="XOFOZ company highlights"><div className="page-band">{[["150+", "Businesses supported"], ["27+", "Enterprise relationships"], ["2022", "Established in Abu Dhabi"], ["50+", "Technology brands"]].map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>

      <section className="section page-band about-story">
        <Reveal className="about-story__heading"><span className="eyebrow">Our story</span><h2 className="section-title">Built to make business technology easier to own.</h2></Reveal>
        <Reveal className="about-story__copy" delay={0.06}>
          <p>XOFOZ was established in Abu Dhabi in 2022 around a practical observation: businesses should not need a different vendor for every technology problem. Support, security, hardware, cloud, communication, and infrastructure are connected—and someone needs to remain accountable for the whole environment.</p>
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
          <div className="about-team-grid">{teams.map(([mark,title,role,certs],index) => <Reveal className="about-team-card" delay={index*.04} key={title}><div><strong>{mark}</strong><span>0{index+1}</span></div><h3>{title}</h3><p>{role}</p><div>{certs.map(cert => <span key={cert}>{cert}</span>)}</div></Reveal>)}</div>
          <Reveal className="about-cert-strip"><span>Supported ecosystem</span><div>{["Microsoft", "Fortinet", "Hikvision", "Tally Prime", "Acronis", "ESET", "Aruba", "Sophos", "UniFi", "Synology", "QNAP", "Yealink", "3CX", "ZKTeco"].map(cert => <span key={cert}>{cert}</span>)}</div></Reveal>
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
        <Reveal className="page-band"><div><span className="eyebrow">Work with XOFOZ</span><h2 className="section-title">Ready to discuss your IT requirements?</h2><p>Start with the requirement. We’ll help identify a practical next step for support, products, infrastructure, or a complete solution.</p></div><div><Link className="button button--primary" href="/contact">Contact XOFOZ</Link><a className="button button--ghost" href="https://wa.me/971523554202">WhatsApp us</a></div></Reveal>
      </section>
    </main>
  );
}
