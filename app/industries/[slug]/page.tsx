import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "../../../components/IndustryPage";
import { getIndustryBySlug, industries } from "../../../data/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: { absolute: industry.metaTitle },
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: { title: industry.metaTitle, description: industry.metaDescription, url: `/industries/${industry.slug}`, images: [{ url: industry.image, alt: `${industry.label} IT solutions in Abu Dhabi` }] },
  };
}

export default async function IndustryRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryPage industry={industry} />;
}

