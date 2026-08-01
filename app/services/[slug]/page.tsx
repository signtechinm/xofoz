import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "../../../components/ServicePageTemplate";
import { getServiceContent } from "../../../data/service-content";
import { implementedServiceSlugs, serviceAssets } from "../../../data/service-assets";
import { getServiceBySlug, services } from "../../../data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const content = getServiceContent(slug);
  const asset = serviceAssets[slug];

  if (!service || !content) {
    return {};
  }

  return {
    title: {
      absolute: content.fields["META TITLE"],
    },
    description: content.fields["META DESCRIPTION"],
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      type: "website",
      url: `/services/${service.slug}`,
      title: content.fields["META TITLE"],
      description: content.fields["META DESCRIPTION"],
      ...(asset && {
        images: [{ url: asset.social, width: asset.width, height: asset.height }],
      }),
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const content = getServiceContent(slug);

  if (!getServiceBySlug(slug) || !content) {
    notFound();
  }

  if (!implementedServiceSlugs.has(slug)) {
    return <main className="service-page-placeholder" />;
  }

  return <ServicePageTemplate content={content} />;
}
