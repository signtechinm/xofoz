import Reveal from "./Reveal";

export default function ConsultationSection() {
  return (
    <section className="section home-contact-section" id="quote">
      <div className="page-band home-contact-layout">
        <Reveal className="home-contact-copy">
          <span className="eyebrow">Let&apos;s Solve It</span>
          <h2 className="section-title">Let&apos;s solve your IT challenges today.</h2>
          <p>
            Whether you need an AMC, a specific product, or a complete office
            solution, send the requirement and our team will contact you.
          </p>
          <a className="button button--whatsapp" href="https://wa.me/971523554202">Chat with us on WhatsApp</a>
          <div className="home-contact-details">
            <a href="tel:026220071"><strong>Phone</strong><span>026 220 071</span></a>
            <a href="mailto:hello@xofoz.com"><strong>Email</strong><span>hello@xofoz.com</span></a>
            <div><strong>Office</strong><span>4 Al Ithmid Street, Mohamed Bin Zayed City, Abu Dhabi</span></div>
            <div><strong>Hours</strong><span>Monday–Saturday, 8:30 AM–6:30 PM</span></div>
          </div>
          <a className="map-placeholder" href="https://maps.google.com/?q=XOFOZ+Information+Technology+Abu+Dhabi">
            <span aria-hidden="true">◎</span> View XOFOZ office on Google Maps
          </a>
        </Reveal>

        <Reveal
          as="form"
          className="contact-form home-contact-form"
          id="consultation"
          action="mailto:hello@xofoz.com"
          method="post"
          encType="text/plain"
          delay={0.08}
        >
          <span className="eyebrow">Free Consultation</span>
          <h2 className="section-title">Send your requirement.</h2>
          <div className="form-split">
            <label>Name<input name="name" type="text" autoComplete="name" required /></label>
            <label>Company<input name="company" type="text" autoComplete="organization" /></label>
          </div>
          <div className="form-split">
            <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          </div>
          <label>What do you need help with?
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a requirement</option>
              <option>Managed IT / AMC</option><option>Urgent IT support</option>
              <option>Network or Wi-Fi</option><option>Cybersecurity</option>
              <option>CCTV or access control</option><option>Cloud / Microsoft 365</option>
              <option>Tally Prime / ERP</option><option>Other</option>
            </select>
          </label>
          <label>Message<textarea name="message" rows={5} required /></label>
          <button className="button button--primary" type="submit">Send message</button>
          <p className="sample-note">Sample form currently opens the visitor&apos;s email application.</p>
        </Reveal>
      </div>
    </section>
  );
}
