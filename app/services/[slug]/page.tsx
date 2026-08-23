import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceCategoryPage from "../../../components/ServiceCategoryPage";
import ServicePageTemplate from "../../../components/ServicePageTemplate";
import { getServiceCategoryContent } from "../../../data/service-category-content";
import { getServiceCategoryBySlug, serviceCategories } from "../../../data/service-categories";
import { getServiceContent } from "../../../data/service-content";
import { serviceAssets } from "../../../data/service-assets";
import { getServiceBySlug, services } from "../../../data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...serviceCategories, ...services].map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getServiceCategoryBySlug(slug);
  const categoryContent = getServiceCategoryContent(slug);
  const service = getServiceBySlug(slug);
  const serviceContent = getServiceContent(slug);

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

  if (service && serviceContent) {
    const asset = serviceAssets[slug];
    return {
      title: { absolute: serviceContent.fields["META TITLE"] },
      description: serviceContent.fields["META DESCRIPTION"],
      alternates: { canonical: `/services/${service.slug}` },
      openGraph: {
        type: "website",
        url: `/services/${service.slug}`,
        title: serviceContent.fields["META TITLE"],
        description: serviceContent.fields["META DESCRIPTION"],
        ...(asset && { images: [{ url: asset.social, width: asset.width, height: asset.height }] }),
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

  const serviceContent = getServiceContent(slug);
  if (getServiceBySlug(slug) && serviceContent) {
    return <ServicePageTemplate content={serviceContent} />;
  }

  notFound();
}
