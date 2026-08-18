import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ParticleField from "../../components/ParticleField";
import Reveal from "../../components/Reveal";
import { industries } from "../../data/industries";

export const metadata: Metadata = {
  title: { absolute: "IT Solutions by Industry in Abu Dhabi | XOFOZ" },
  description: "Explore IT solutions for hospitality, real estate, construction, logistics, and manufacturing businesses in Abu Dhabi and the UAE.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return <main className="industries-hub">
    <section className="industries-hub__hero">
      <ParticleField variant="service" />
      <Reveal className="page-band"><span className="eyebrow">XOFOZ industries</span><h1>Technology designed around how your industry operates.</h1><p>Different sectors carry different uptime, security, connectivity, compliance, and workflow requirements. Explore the XOFOZ approach for five major Abu Dhabi business environments.</p></Reveal>
    </section>
    <section className="industry-section page-band">
      <Reveal className="industry-heading"><span className="eyebrow">Industry experience</span><h2>Choose your operating environment</h2><p>Each page connects your industry&apos;s challenges with relevant XOFOZ services and complete solutions.</p></Reveal>
      <div className="industries-hub__grid">
        {industries.map((industry, index) => <Reveal delay={(index % 3) * 0.04} key={industry.slug}><Link href={`/industries/${industry.slug}`} className="industries-hub__card"><Image src={industry.image} alt={`${industry.label} technology environment`} fill sizes="(max-width: 760px) 100vw, 33vw" /><div><span>0{index + 1} / Industry</span><h2>{industry.label}</h2><p>{industry.metaDescription}</p><b>Explore {industry.label.toLowerCase()} →</b></div></Link></Reveal>)}
      </div>
    </section>
  </main>;
}
