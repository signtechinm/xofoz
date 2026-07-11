import type { Metadata } from "next";
import ParticleField from "../../components/ParticleField";
import Reveal from "../../components/Reveal";

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

      <section className="contact-layout page-band">
        <Reveal className="contact-panel">
          <span className="eyebrow">Quick Contact</span>
          <h2>Reach the XOFOZ team.</h2>
          <div className="contact-actions">
            <a href="tel:026220071">
              <strong>Call</strong>
              <span>026 220 071</span>
            </a>
            <a href="mailto:hello@xofoz.com">
              <strong>Email</strong>
              <span>hello@xofoz.com</span>
            </a>
            <a href="tel:0528209174">
              <strong>Mobile</strong>
              <span>052-820-9174</span>
            </a>
          </div>
          <div className="office-card">
            <h3>UAE Office</h3>
            <p>Office No: M01, Shabia-10, Abu Dhabi, UAE</p>
            <p>Monday to Saturday, 8:30 AM to 6:30 PM</p>
          </div>
          <div className="office-card">
            <h3>India Office</h3>
            <p>Thrissur, Kerala, India</p>
            <p>+91 859 067 0685</p>
          </div>
        </Reveal>

        <Reveal
          as="form"
          className="contact-form"
          id="consultation"
          action="mailto:hello@xofoz.com"
          method="post"
          encType="text/plain"
          delay={0.08}
        >
          <span className="eyebrow">Request Consultation</span>
          <h2>Send your requirement.</h2>
          <label>
            Name / Company Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Mobile Number
            <input name="mobile" type="tel" autoComplete="tel" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Service Needed
            <select name="service" required defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>IT AMC</option>
              <option>On-Call IT Support</option>
              <option>Office IT Setup</option>
              <option>Cybersecurity Review</option>
              <option>Structured Cabling</option>
              <option>Microsoft 365 / Email</option>
              <option>CCTV / Biometric</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button className="button button--primary" type="submit">
            Submit Request
          </button>
        </Reveal>
      </section>

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
