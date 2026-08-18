import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import ParticleField from "../../components/ParticleField";
import { getServiceCategoryContent } from "../../data/service-category-content";
import { serviceCategories } from "../../data/service-categories";

export const metadata: Metadata = {
  title: "IT Services In Abu Dhabi",
  description:
    "Explore ten XOFOZ service categories covering IT services, cybersecurity, backup, servers, networks, communication and LV, cloud, AI, software, and Microsoft Cloud in Abu Dhabi.",
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
          <h1>Complete IT service categories for Abu Dhabi businesses.</h1>
          <p>
            Start with the area that matches your requirement. Each category brings its
            specialist sub-services, expertise, and enquiry options together in one place.
          </p>
        </Reveal>
      </section>
      <section className="service-section page-band">
        <div className="services-hub__grid">
          {serviceCategories.map((category, index) => {
            const content = getServiceCategoryContent(category.slug);
            const examples = content?.cards.slice(0, 3).map((card) => card.name) ?? [];
            return (
            <Reveal delay={(index % 4) * 0.035} key={category.slug}>
              <Link className="services-hub__card" href={`/services/${category.slug}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{category.label}</h2>
                <p>{category.summary}</p>
                <ul aria-label={`Examples of ${category.label} sub-services`}>
                  {examples.map((example) => <li key={example}>{example}</li>)}
                </ul>
                <div><small>{category.expectedSubServiceCount} sub-services</small><b aria-hidden="true">→</b></div>
              </Link>
            </Reveal>
          );})}
        </div>
      </section>
    </main>
  );
}
