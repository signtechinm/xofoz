import type { Metadata } from "next";
import Link from "next/link";
import ParticleField from "../../components/ParticleField";
import Reveal from "../../components/Reveal";
import { solutions } from "../../data/solutions";

export const metadata: Metadata = { title: "IT Solutions In Abu Dhabi", description: "Explore complete XOFOZ IT, cybersecurity, cloud, network, software, server, backup, AI, and low-voltage solutions for Abu Dhabi businesses.", alternates: { canonical: "/solutions" } };

export default function SolutionsPage() {
  return <main className="solutions-hub"><section className="subhero page-band"><ParticleField variant="service" /><Reveal><span className="eyebrow">XOFOZ Solutions</span><h1>Complete technology solutions for Abu Dhabi businesses.</h1><p>Tell us the business challenge. XOFOZ assesses, designs, implements, and supports the complete solution from start to finish.</p></Reveal></section><section className="service-section page-band"><div className="solutions-hub__grid">{solutions.map((solution, index) => <Reveal delay={(index % 4) * 0.035} key={solution.slug}><Link className="solutions-hub__card" href={`/solutions/${solution.slug}`}><span>{String(index + 1).padStart(2, "0")}</span><h2>{solution.label}</h2><p>Explore {solution.shortLabel.toLowerCase()} for businesses across Abu Dhabi and the UAE.</p><b aria-hidden="true">→</b></Link></Reveal>)}</div></section></main>;
}
