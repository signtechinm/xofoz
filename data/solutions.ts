export const solutions = [
  { label: "Communication and LV/ELV Solutions", shortLabel: "Communication & LV/ELV", slug: "communication-lv", sourceHeading: "LV solutions Abu Dhabi |", image: "/solutions/communication-lv/communication-lv-solutions-abu-dhabi-hero.webp" },
  { label: "Cybersecurity Solutions", shortLabel: "Cybersecurity", slug: "cybersecurity", sourceHeading: "Cybersecurity Solutions Abu Dhabi", image: "/solutions/cybersecurity/cybersecurity-solutions-abu-dhabi-hero.webp" },
  { label: "Data Backup and Protection", shortLabel: "Data Backup & Protection", slug: "data-backup", sourceHeading: "Data Backup and Protection Abu Dhab", image: "/solutions/data-backup/data-backup-protection-abu-dhabi-hero.webp" },
  { label: "Server and Storage Solutions", shortLabel: "Server & Storage", slug: "server-storage", sourceHeading: "Server and Storage Solutions Abu Dhabi", image: "/solutions/server-storage/server-storage-solutions-abu-dhabi-hero.webp" },
  { label: "Network Solutions", shortLabel: "Network Solutions", slug: "network-solutions", sourceHeading: "Network Solutions Abu Dhabi", image: "/solutions/network-solutions/network-solutions-abu-dhabi-hero.webp" },
  { label: "IT Services Solutions", shortLabel: "IT Services", slug: "it-services", sourceHeading: "IT Services Solutions Abu Dhabi", image: "/solutions/it-services/it-services-solutions-abu-dhabi-hero.webp" },
  { label: "Cloud Solutions", shortLabel: "Cloud Solutions", slug: "cloud", sourceHeading: "Cloud Solutions Abu Dhabi", image: "/solutions/cloud/cloud-solutions-abu-dhabi-hero.webp" },
  { label: "Software Solutions", shortLabel: "Software Solutions", slug: "software", sourceHeading: "Software Solutions Abu Dhabi", image: "/solutions/software/software-solutions-abu-dhabi-hero.webp" },
  { label: "Microsoft Cloud Solutions", shortLabel: "Microsoft Cloud", slug: "microsoft-cloud", sourceHeading: "Microsoft Cloud Solutions Abu Dhabi", image: "/solutions/microsoft-cloud/microsoft-cloud-solutions-abu-dhabi-hero.webp" },
  { label: "AI Solutions", shortLabel: "AI Solutions", slug: "ai-solutions", sourceHeading: "AI Solutions Abu Dhabi", image: "/solutions/ai-solutions/ai-solutions-abu-dhabi-hero.webp" },
] as const;

export type SolutionDefinition = (typeof solutions)[number];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export const solutionNavItems = solutions.map((solution) => ({
  label: solution.shortLabel,
  slug: solution.slug,
  href: `/solutions/${solution.slug}` as const,
}));
