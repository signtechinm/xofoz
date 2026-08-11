import type { Metadata } from "next";
import Link from "next/link";
import ConsultationSection from "../../components/ConsultationSection";
import ParticleField from "../../components/ParticleField";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Contact XOFOZ | IT Support In Abu Dhabi",
  description: "Contact XOFOZ for IT support, AMC quotes, office IT setup, cybersecurity, cabling, Microsoft 365, CCTV, and technology services in Abu Dhabi.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { mark: "WA", label: "WhatsApp", value: "+971 52 355 4202", href: "https://wa.me/971523554202", note: "Fastest for new enquiries" },
  { mark: "PH", label: "Phone", value: "02 622 0071", href: "tel:+97126220071", note: "Monday–Saturday" },
  { mark: "EM", label: "Email", value: "hello@xofoz.com", href: "mailto:hello@xofoz.com", note: "Send documents or scope" },
] as const;

const requests = [
  ["01", "IT AMC quotation", "Ongoing maintenance, monitoring, reporting, remote support, and scheduled on-site assistance.", "Request an AMC quote"],
  ["02", "Urgent IT support", "Help with computers, internet, printers, email, servers, firewall, backup, or an active office disruption.", "Get IT support"],
  ["03", "Site survey and project", "Planning for a new office, relocation, cabling, Wi-Fi, CCTV, biometrics, AV, or infrastructure upgrade.", "Arrange a site survey"],
] as const;

export default function ContactPage() {
  const schema = { "@context": "https://schema.org", "@type": "ContactPage", name: "Contact XOFOZ", url: "https://xofoz.com/contact", mainEntity: { "@type": "Organization", name: "XOFOZ Information Technology LLC", telephone: "+97126220071", email: "hello@xofoz.com" } };

  return (
    <main className="contact-page-new">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="contact-new-hero">
        <ParticleField variant="service" />
        <div className="page-band">
          <nav className="contact-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></nav>
          <div className="contact-new-hero__grid">
            <Reveal className="contact-new-hero__copy">
              <span className="eyebrow">Contact XOFOZ · Abu Dhabi</span>
              <h1>Start with your IT requirement.</h1>
              <p>Whether it is an urgent issue, an AMC quotation, a product, or a complete office project, tell us what is happening and our local team will help identify the right next step.</p>
              <div className="contact-response"><span><b>✓</b> Abu Dhabi-based team</span><span><b>✓</b> Remote and on-site support</span><span><b>✓</b> No-obligation consultation</span></div>
              <div className="hero__actions"><a className="button button--primary" href="#consultation">Send your requirement</a><a className="button button--ghost" href="https://wa.me/971523554202">WhatsApp now</a></div>
            </Reveal>
            <Reveal className="contact-channel-panel" delay={.08}>
              <div className="contact-channel-panel__heading"><span>Direct contact</span><strong>Choose the fastest channel for you.</strong></div>
              <div className="contact-channel-list">{channels.map(channel => <a href={channel.href} key={channel.label}><span>{channel.mark}</span><div><small>{channel.label}</small><strong>{channel.value}</strong><p>{channel.note}</p></div><b>↗</b></a>)}</div>
              <div className="contact-office-note"><span>Office</span><p>4 Al Ithmid Street, Mohamed Bin Zayed City, Mussafah, Abu Dhabi</p><a href="https://maps.google.com/?q=XOFOZ+Information+Technology+Abu+Dhabi">Open in Google Maps →</a></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="contact-availability"><div className="page-band"><span>Support availability</span><strong>Monday–Saturday · 8:30 AM–6:30 PM</strong><p>For urgent requirements, send the issue and company location through WhatsApp.</p><a href="https://wa.me/971523554202">Start urgent enquiry ↗</a></div></section>

      <ConsultationSection />

      <section className="section page-band contact-request-section">
        <Reveal className="section-heading section-heading--center"><span className="eyebrow">Common requests</span><h2 className="section-title">Choose the path that matches your situation.</h2><p>You do not need a complete technical brief. Start with the outcome or issue and we will help clarify the scope.</p></Reveal>
        <div className="contact-request-grid">{requests.map(([number,title,copy,link],index) => <Reveal className="contact-request-card" delay={index*.05} key={title}><div><span>{number}</span><b>↗</b></div><h3>{title}</h3><p>{copy}</p><a href="#consultation">{link}</a></Reveal>)}</div>
      </section>

      <section className="contact-response-process">
        <ParticleField variant="subtle" />
        <div className="page-band">
          <Reveal className="section-heading"><span className="eyebrow">What happens next</span><h2 className="section-title">A clear response, without unnecessary steps.</h2></Reveal>
          <ol>{[["01","Share","Tell us the issue, requirement, location, and preferred contact method."],["02","Clarify","Our team asks the practical questions needed to understand scope and urgency."],["03","Recommend","Receive a support path, site-survey recommendation, or quotation next step."],["04","Deliver","XOFOZ coordinates implementation, resolution, and ongoing support where required."]].map(([number,title,copy]) => <Reveal as="li" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</ol>
        </div>
      </section>
    </main>
  );
}
