import type { Metadata } from "next";
import ParticleField from "../../components/ParticleField";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "About XOFOZ | IT Support Company In Abu Dhabi",
  description:
    "Learn about XOFOZ Technology, a leading IT company in UAE helping businesses with support, setup, security, infrastructure, and network administration.",
  alternates: {
    canonical: "/about",
  },
};

const pillars = [
  {
    mark: "01",
    title: "Technical Support",
    copy: "Technical phone support, remote online support, and emergency on-site support for business-critical IT needs.",
  },
  {
    mark: "02",
    title: "Consulting & Planning",
    copy: "Consulting, project planning, and implementation guidance shaped around your staff, schedule, and budget.",
  },
  {
    mark: "03",
    title: "Sales & Implementation",
    copy: "Hardware and software supply, setup, deployment, and IT project implementation under one roof.",
  },
  {
    mark: "04",
    title: "Network Administration",
    copy: "Daily network administration, service, proactive maintenance, security checks, and infrastructure management.",
  },
];

const processSteps = [
  ["Discover", "Review the business, users, site, devices, risks, and current support pain points."],
  ["Design", "Build a practical setup or support plan around budget, security, uptime, and future growth."],
  ["Deploy", "Install the required network, systems, cloud tools, endpoint protection, and office infrastructure."],
  ["Own", "Stay accountable with monitoring, maintenance, reporting, troubleshooting, and guidance."],
];

export default function AboutPage() {
  return (
    <main>
      <section className="subhero about-hero page-band">
        <ParticleField variant="subtle" />
        <Reveal>
          <span className="eyebrow">Leading IT Company in UAE</span>
          <h1>Defining the future of business technology in the UAE.</h1>
          <p>
            XOFOZ Technology is a dynamic IT organization helping businesses
            make the right technology decisions the first time.
          </p>
        </Reveal>
      </section>

      <section className="about-marquee" aria-label="XOFOZ support focus">
        <div>
          <span>Leading IT Company in UAE</span>
          <span>Managed IT Support</span>
          <span>Emergency On-Site Support</span>
          <span>Project Planning</span>
          <span>Hardware & Software Sales</span>
          <span>Network Administration</span>
        </div>
        <div aria-hidden="true">
          <span>Leading IT Company in UAE</span>
          <span>Managed IT Support</span>
          <span>Emergency On-Site Support</span>
          <span>Project Planning</span>
          <span>Hardware & Software Sales</span>
          <span>Network Administration</span>
        </div>
      </section>

      <section className="section page-band about-intro about-intro--contrast">
        <Reveal className="about-intro__image">
          <img
            src="/about/who-we-are-ops-desk.png"
            alt="XOFOZ technical operations desk"
          />
          <div className="about-image-note">
            <strong>Local response</strong>
            <span>Abu Dhabi and UAE offices</span>
          </div>
        </Reveal>
        <Reveal className="about-intro__copy" delay={0.08}>
          <span className="eyebrow">Who We Are</span>
          <h2>A focused team of technically qualified and innovative professionals.</h2>
          <p>
            XOFOZ Technology is one of the dynamic organizations among leading
            IT companies in UAE, headed by a group of young, energetic
            professionals who are technically qualified and innovative.
          </p>
          <p>
            Our comprehensive services include technical phone support, remote
            online support, emergency on-site support, consulting, project
            planning and implementation, hardware and software sales, and daily
            network administration and service.
          </p>
          <p>
            We work with your staff, schedule, and budget to help you make the
            right IT decisions the first time and ensure every IT project is a
            success.
          </p>
          <div className="about-signal-grid" aria-label="XOFOZ operating signals">
            <span>Staff aligned</span>
            <span>Budget aware</span>
            <span>Project focused</span>
          </div>
        </Reveal>
      </section>

      <section className="section page-band about-pillars">
        <Reveal className="section-heading section-heading--center">
          <span className="eyebrow">What We Do</span>
          <h2>Advanced, secure, and agile technology services for commercial operations.</h2>
          <p>
            XOFOZ gives businesses access to current innovations,
            industry-standard IT procedures, and advanced security features
            while reducing dependency on in-house IT infrastructure management.
          </p>
        </Reveal>
        <div className="service-grid service-grid--four">
          {pillars.map((pillar, index) => (
            <Reveal className="service-card about-pillar-card" delay={index * 0.04} key={pillar.title}>
              <span className="service-card__mark">{pillar.mark}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-mission-band">
        <div className="page-band about-mission-grid">
          <Reveal className="mission-card">
            <span className="eyebrow">Mission</span>
            <h2>
              Provide efficient, proactive IT administration, service, and
              support to small and medium businesses.
            </h2>
            <p>
              We strive to be the IT solutions partner of choice and help
              organizations reach their business goals through intelligent use
              and management of computer and network technology.
            </p>
          </Reveal>
          <Reveal className="mission-card" delay={0.08}>
            <span className="eyebrow">Partner Promise</span>
            <h2>
              Your perfect partner for IT business needs under one roof.
            </h2>
            <p>
              XOFOZ supports the full journey: advice, planning, implementation,
              protection, service, and long-term administration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-process-section">
        <ParticleField variant="story" />
        <Reveal className="page-band about-process-stage">
          <div className="story-copy">
            <span className="eyebrow">Working Process</span>
            <h2>A step-by-step path from first audit to long-term support.</h2>
            <p>
              Every engagement is shaped around clarity: what needs attention,
              what should be installed, what must be secured, and who owns the
              support after handover.
            </p>
          </div>
          <ol className="story-steps" aria-label="XOFOZ working process">
            {processSteps.map(([title, copy], index) => (
              <li className="story-step" key={title}>
                <strong className="story-step__number">
                  {String(index + 1).padStart(2, "0")}
                </strong>
                <div className="story-step__content">
                  <span>Step {index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <Reveal className="cta-band">
        <div>
          <span className="eyebrow">Have an IT requirement?</span>
          <h2>Let XOFOZ help shape the right next step.</h2>
        </div>
        <div className="cta-band__actions">
          <a className="button button--primary" href="/contact">
            Talk To XOFOZ
          </a>
          <a className="button button--ghost" href="/">
            View Services
          </a>
        </div>
      </Reveal>
    </main>
  );
}
