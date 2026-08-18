import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceCategoryPage from "../../../components/ServiceCategoryPage";
import { getServiceCategoryContent } from "../../../data/service-category-content";
import { getServiceCategoryBySlug, serviceCategories } from "../../../data/service-categories";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getServiceCategoryBySlug(slug);
  const categoryContent = getServiceCategoryContent(slug);

  if (category && categoryContent) {
    return {
      title: { absolute: categoryContent.metaTitle },
      description: categoryContent.metaDescription,
      alternates: { canonical: categoryContent.canonical },
      openGraph: {
        type: "website",
        url: categoryContent.canonical,
        title: categoryContent.metaTitle,
        description: categoryContent.metaDescription,
        images: [{ url: category.image }],
      },
    };
  }

  return {};
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const category = getServiceCategoryBySlug(slug);
  const categoryContent = getServiceCategoryContent(slug);

  if (category && categoryContent) {
    return <ServiceCategoryPage content={categoryContent} />;
  }

  notFound();
}
