import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionCategoryPage from "../../../components/SolutionCategoryPage";
import { getSolutionContent } from "../../../data/solution-content";
import { getSolutionBySlug, solutions } from "../../../data/solutions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return solutions.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getSolutionContent(slug);
  if (!content) return {};
  return { title: { absolute: content.metaTitle }, description: content.metaDescription, alternates: { canonical: content.canonical }, openGraph: { type: "website", url: content.canonical, title: content.metaTitle, description: content.metaDescription, images: [{ url: content.solution.image }] } };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const content = getSolutionContent(slug);
  if (!getSolutionBySlug(slug) || !content) notFound();
  return <SolutionCategoryPage content={content} />;
}
