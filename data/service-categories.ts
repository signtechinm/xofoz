export const serviceCategories = [
  {
    id: "it-services",
    label: "IT Services",
    shortLabel: "IT Services",
    slug: "it-services",
    sourceHeading: "IT SERVICES",
    image: "/solutions/it-services/it-services-solutions-abu-dhabi-hero.webp",
    summary: "Managed support, IT AMC, consulting, relocation, cloud migration, office setup, and complete IT outsourcing.",
    expectedSubServiceCount: 9,
  },
  {
    id: "cyber-security",
    label: "Cyber Security",
    shortLabel: "Cyber Security",
    slug: "cyber-security",
    sourceHeading: "Cyber Security Services Abu Dhabi",
    image: "/solutions/cybersecurity/cybersecurity-solutions-abu-dhabi-hero.webp",
    summary: "Layered protection for endpoints, identity, email, network perimeter, vulnerabilities, and mobile devices.",
    expectedSubServiceCount: 9,
  },
  {
    id: "data-backup-protection",
    label: "Data Backup and Protection",
    shortLabel: "Data Backup",
    slug: "data-backup-protection",
    sourceHeading: "Data Backup and Protection Services\nAbu Dhabi",
    image: "/solutions/data-backup/data-backup-protection-abu-dhabi-hero.webp",
    summary: "Backup, disaster recovery, business continuity, DLP, and device management for critical business data.",
    expectedSubServiceCount: 6,
  },
  {
    id: "server-storage",
    label: "Server and Storage",
    shortLabel: "Server & Storage",
    slug: "server-storage",
    sourceHeading: "Server and Storage Services Abu Dhabi",
    image: "/solutions/server-storage/server-storage-solutions-abu-dhabi-hero.webp",
    summary: "Business servers, NAS, scalable storage, and synchronized data platforms designed and managed as one system.",
    expectedSubServiceCount: 4,
  },
  {
    id: "network-solutions",
    label: "Network Solutions",
    shortLabel: "Network Solutions",
    slug: "network-solutions",
    sourceHeading: "Network Solutions Abu Dhabi .",
    image: "/solutions/network-solutions/network-solutions-abu-dhabi-hero.webp",
    summary: "Network design, switching, routing, structured cabling, enterprise WiFi, proxy, and secure remote connectivity.",
    expectedSubServiceCount: 7,
  },
  {
    id: "communication-lv",
    label: "Communication and LV",
    shortLabel: "Communication & LV",
    slug: "communication-lv",
    sourceHeading: "Communication and LV Systems Abu\nDhabi",
    image: "/solutions/communication-lv/communication-lv-solutions-abu-dhabi-hero.webp",
    summary: "CCTV, access control, telephony, biometric attendance, AV, PA, intercom, and complete ELV systems.",
    expectedSubServiceCount: 15,
  },
  {
    id: "cloud",
    label: "Cloud",
    shortLabel: "Cloud",
    slug: "cloud",
    sourceHeading: "Cloud Services Abu Dhabi",
    image: "/solutions/cloud/cloud-solutions-abu-dhabi-hero.webp",
    summary: "Azure infrastructure, managed hosting, cloud desktops, and collaboration tools for flexible operations.",
    expectedSubServiceCount: 4,
  },
  {
    id: "ai-solutions",
    label: "AI Solutions",
    shortLabel: "AI Solutions",
    slug: "ai-solutions",
    sourceHeading: "AI Solutions Abu Dhabi.",
    image: "/solutions/ai-solutions/ai-solutions-abu-dhabi-hero.webp",
    summary: "AI-powered CCTV and intelligent video analytics for proactive, real-time security monitoring.",
    expectedSubServiceCount: 1,
  },
  {
    id: "software-solutions",
    label: "Software Solutions",
    shortLabel: "Software Solutions",
    slug: "software-solutions",
    sourceHeading: "Software Solutions Abu Dhabi.",
    image: "/solutions/software/software-solutions-abu-dhabi-hero.webp",
    summary: "ERP, design software, POS, GPS tracking, visitor management, and professional web design.",
    expectedSubServiceCount: 6,
  },
  {
    id: "microsoft-cloud",
    label: "Microsoft Cloud",
    shortLabel: "Microsoft Cloud",
    slug: "microsoft-cloud",
    sourceHeading: "Microsoft Cloud Services Abu Dhabi",
    image: "/solutions/microsoft-cloud/microsoft-cloud-solutions-abu-dhabi-hero.webp",
    summary: "Microsoft 365, Copilot, security, migration, SharePoint, Modern Workplace, and Windows 365 services.",
    expectedSubServiceCount: 11,
  },
] as const;

export type ServiceCategoryDefinition = (typeof serviceCategories)[number];

export function getServiceCategoryBySlug(slug: string) {
  return serviceCategories.find((category) => category.slug === slug);
}

export const serviceCategoryNavItems = serviceCategories.map((category) => ({
  label: category.shortLabel,
  slug: category.slug,
  href: `/services/${category.slug}` as const,
}));

export function toServiceAnchor(value: string) {
  return value
    .toLowerCase()
    .replace(/—/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
