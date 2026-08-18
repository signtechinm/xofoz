import Reveal from "./Reveal";
import HomeLeadForm from "./HomeLeadForm";

export default function ConsultationSection() {
  return (
    <section className="section home-contact-section" id="quote">
      <div className="page-band home-contact-layout">
        <Reveal className="home-contact-copy">
          <span className="eyebrow">Let&apos;s Solve It</span>
          <h2 className="section-title">Let&apos;s solve your IT challenges today.</h2>
          <p>
            Whether you need an IT maintenance contract, a specific product, or
            a complete solution built from scratch, XOFOZ is your accountable
            Abu Dhabi IT partner. Send the requirement and our team will respond.
          </p>
          <a className="button button--whatsapp" href="https://wa.me/971523554202">Chat with us on WhatsApp — +971 52 355 4202</a>
          <div className="home-contact-details">
            <a href="tel:026220071"><strong>Phone</strong><span>026 220 071</span></a>
            <a href="mailto:hello@xofoz.com"><strong>Email</strong><span>hello@xofoz.com</span></a>
            <div><strong>Office</strong><span>4 Al Ithmid Street, Mohamed Bin Zayed City, Mussafah, Abu Dhabi, UAE</span></div>
            <div><strong>Hours</strong><span>Monday–Saturday, 8:30 AM–6:30 PM</span></div>
          </div>
          <a className="map-placeholder" href="https://maps.google.com/?q=XOFOZ+Information+Technology+Abu+Dhabi">
            <span aria-hidden="true">◎</span> View XOFOZ office on Google Maps
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <HomeLeadForm />
        </Reveal>
      </div>
    </section>
  );
}
