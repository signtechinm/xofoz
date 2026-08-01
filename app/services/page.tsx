import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import ParticleField from "../../components/ParticleField";
import { services } from "../../data/services";

export const metadata: Metadata = {
  title: "IT Services In Abu Dhabi",
  description:
    "Explore XOFOZ IT services in Abu Dhabi, including IT AMC, support, infrastructure, cybersecurity, cloud, CCTV, business systems, and website development.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="services-hub">
      <section className="subhero page-band">
        <ParticleField variant="service" />
        <Reveal>
          <span className="eyebrow">XOFOZ Services</span>
          <h1>Complete IT services for Abu Dhabi businesses.</h1>
          <p>
            From daily support and infrastructure to security, cloud, business
            systems, and digital delivery—choose the service that matches your requirement.
          </p>
        </Reveal>
      </section>
      <section className="service-section page-band">
        <div className="services-hub__grid">
          {services.map((service, index) => (
            <Reveal delay={(index % 4) * 0.035} key={service.slug}>
              <Link className="services-hub__card" href={`/services/${service.slug}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{service.label}</h2>
                <b aria-hidden="true">→</b>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
