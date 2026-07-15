import type { Metadata } from "next";
import ParticleField from "../../components/ParticleField";
import Reveal from "../../components/Reveal";
import ConsultationSection from "../../components/ConsultationSection";

export const metadata: Metadata = {
  title: "Contact XOFOZ | IT Support In Abu Dhabi",
  description:
    "Contact XOFOZ for IT support, AMC quotes, office IT setup, cybersecurity review, structured cabling, Microsoft 365, and technology services in Abu Dhabi.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="subhero page-band">
        <ParticleField variant="subtle" />
        <Reveal>
          <span className="eyebrow">Contact XOFOZ</span>
          <h1>Get IT support, a quote, or a site survey.</h1>
          <p>
            Tell us what you need. XOFOZ can help with AMC, urgent support,
            office setup, cybersecurity, structured cabling, Microsoft 365,
            CCTV, and biometric systems.
          </p>
        </Reveal>
      </section>

      <ConsultationSection />

      <section className="section page-band section--plain">
        <Reveal className="section-heading">
          <span className="eyebrow">Common Requests</span>
          <h2>Choose the support path that matches your situation.</h2>
        </Reveal>
        <div className="request-grid">
          {[
            ["AMC Quote", "For companies that need monthly or yearly maintenance, monitoring, reports, and support."],
            ["Urgent IT Support", "For office issues with computers, internet, printers, email, servers, firewall, or backup."],
            ["Site Survey", "For new offices, relocation, cabling, Wi-Fi, CCTV, biometrics, or network planning."],
          ].map(([title, copy], index) => (
            <Reveal className="request-card" delay={index * 0.04} key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
