export const services = [
  { label: "IT AMC — Annual Maintenance Contract", slug: "it-amc-abu-dhabi", legacySlug: "it-amc", sourceHeading: "IT AMC ABU DHABI" },
  { label: "On-call IT Support", slug: "it-support-abu-dhabi", legacySlug: "on-call-it-support", sourceHeading: "ON-CALL IT SUPPORT ABU DHABI" },
  { label: "Office IT Setup", slug: "office-it-setup-abu-dhabi", legacySlug: "office-it-setup", sourceHeading: "OFFICE IT SETUP ABU DHABI" },
  { label: "Network and Infrastructure", slug: "network-infrastructure-abu-dhabi", legacySlug: "network-and-infrastructure", sourceHeading: "NETWORK AND INFRASTRUCTURE ABU DHABI" },
  { label: "Structured Cabling", slug: "structured-cabling-abu-dhabi", legacySlug: "structured-cabling", sourceHeading: "STRUCTURED CABLING ABU DHABI" },
  { label: "Cybersecurity and Firewall", slug: "cybersecurity-solutions-abu-dhabi", legacySlug: "cybersecurity-and-firewall", sourceHeading: "CYBERSECURITY SOLUTIONS ABU DHABI" },
  { label: "Cloud Solutions and Microsoft 365", slug: "cloud-solutions-microsoft-365-abu-dhabi", legacySlug: "cloud-solutions-and-microsoft-365", sourceHeading: "CLOUD SOLUTIONS AND MICROSOFT 365 ABU DHABI" },
  { label: "CCTV and Access Control", slug: "cctv-access-control-abu-dhabi", legacySlug: "cctv-and-access-control", sourceHeading: "CCTV AND ACCESS CONTROL ABU DHABI" },
  { label: "Biometric Systems", slug: "biometric-systems-abu-dhabi", legacySlug: "biometric-systems", sourceHeading: "BIOMETRIC SYSTEMS ABU DHABI" },
  { label: "Hardware and AV Solutions", slug: "hardware-av-solutions-abu-dhabi", legacySlug: "hardware-and-av-solutions", sourceHeading: "HARDWARE AND AV SOLUTIONS ABU DHABI" },
  { label: "PABX and Telephone Systems", slug: "pabx-telephone-systems-abu-dhabi", legacySlug: "pabx-and-telephone-systems", sourceHeading: "PABX AND TELEPHONE SYSTEMS ABU DHABI" },
  { label: "Video Conferencing", slug: "video-conferencing-abu-dhabi", legacySlug: "video-conferencing", sourceHeading: "VIDEO CONFERENCING SOLUTIONS ABU DHABI" },
  { label: "POS Systems", slug: "pos-systems-abu-dhabi", legacySlug: "pos-systems", sourceHeading: "POS SYSTEMS ABU DHABI" },
  { label: "ERP Solutions", slug: "erp-solutions-abu-dhabi", legacySlug: "erp-solutions", sourceHeading: "ERP SOLUTIONS ABU DHABI" },
  { label: "Tally Prime", slug: "tally-prime-abu-dhabi", legacySlug: "tally-prime", sourceHeading: "TALLY PRIME ABU DHABI" },
  { label: "Data Backup and Recovery", slug: "data-backup-recovery-abu-dhabi", legacySlug: "data-backup-and-recovery", sourceHeading: "DATA BACKUP AND RECOVERY ABU DHABI" },
  { label: "Server Management", slug: "server-management-abu-dhabi", legacySlug: "server-management", sourceHeading: "SERVER MANAGEMENT ABU DHABI" },
  { label: "Website Development", slug: "website-development-abu-dhabi", legacySlug: "website-development", sourceHeading: "WEBSITE DEVELOPMENT ABU DHABI" },
  { label: "Remote IT Support", slug: "remote-it-support-abu-dhabi", legacySlug: "remote-it-support", sourceHeading: "REMOTE IT SUPPORT ABU DHABI" },
  { label: "VPN and Network Security", slug: "vpn-network-security-abu-dhabi", legacySlug: "vpn-and-network-security", sourceHeading: "VPN AND NETWORK SECURITY ABU DHABI" },
] as const;

export type ServiceDefinition = (typeof services)[number];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

const relatedServiceMatchers = [
  ["cybersecurity", "cybersecurity-solutions-abu-dhabi"],
  ["vpn", "vpn-network-security-abu-dhabi"],
  ["network infrastructure", "network-infrastructure-abu-dhabi"],
  ["structured cabling", "structured-cabling-abu-dhabi"],
  ["cloud", "cloud-solutions-microsoft-365-abu-dhabi"],
  ["microsoft 365", "cloud-solutions-microsoft-365-abu-dhabi"],
  ["data backup", "data-backup-recovery-abu-dhabi"],
  ["backup and recovery", "data-backup-recovery-abu-dhabi"],
  ["server management", "server-management-abu-dhabi"],
  ["remote it support", "remote-it-support-abu-dhabi"],
  ["on-call it support", "it-support-abu-dhabi"],
  ["it support", "it-support-abu-dhabi"],
  ["it amc", "it-amc-abu-dhabi"],
  ["office it setup", "office-it-setup-abu-dhabi"],
  ["cctv", "cctv-access-control-abu-dhabi"],
  ["biometric", "biometric-systems-abu-dhabi"],
  ["video conferencing", "video-conferencing-abu-dhabi"],
  ["pabx", "pabx-telephone-systems-abu-dhabi"],
  ["pos", "pos-systems-abu-dhabi"],
  ["tally", "tally-prime-abu-dhabi"],
  ["erp", "erp-solutions-abu-dhabi"],
  ["website", "website-development-abu-dhabi"],
] as const;

export function resolveRelatedServiceHref(title: string) {
  const normalizedTitle = title.toLowerCase();
  const match = relatedServiceMatchers.find(([keyword]) => normalizedTitle.includes(keyword));
  return match ? `/services/${match[1]}` : "/services";
}
