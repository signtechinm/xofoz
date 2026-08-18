/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    const serviceMigrations = [
      ["it-amc", "it-amc-abu-dhabi", "it-services#it-amc-annual-maintenance-contract"],
      ["on-call-it-support", "it-support-abu-dhabi", "it-services#it-support"],
      ["office-it-setup", "office-it-setup-abu-dhabi", "it-services#new-office-it-setup"],
      ["network-and-infrastructure", "network-infrastructure-abu-dhabi", "network-solutions#network-solutions"],
      ["structured-cabling", "structured-cabling-abu-dhabi", "network-solutions#structured-cabling"],
      ["cybersecurity-and-firewall", "cybersecurity-solutions-abu-dhabi", "cyber-security#cyber-security-solutions"],
      ["cloud-solutions-and-microsoft-365", "cloud-solutions-microsoft-365-abu-dhabi", "microsoft-cloud#microsoft-365-solutions"],
      ["cctv-and-access-control", "cctv-access-control-abu-dhabi", "communication-lv"],
      ["biometric-systems", "biometric-systems-abu-dhabi", "communication-lv#biometric-attendance-system"],
      ["hardware-and-av-solutions", "hardware-av-solutions-abu-dhabi", "communication-lv#av-system"],
      ["pabx-and-telephone-systems", "pabx-telephone-systems-abu-dhabi", "communication-lv#ip-phone-solutions"],
      ["video-conferencing", "video-conferencing-abu-dhabi", "communication-lv#av-system"],
      ["pos-systems", "pos-systems-abu-dhabi", "software-solutions#pos-software-solutions"],
      ["erp-solutions", "erp-solutions-abu-dhabi", "software-solutions#erp-software"],
      ["tally-prime", "tally-prime-abu-dhabi", "software-solutions#erp-software"],
      ["data-backup-and-recovery", "data-backup-recovery-abu-dhabi", "data-backup-protection#backup-as-a-service"],
      ["server-management", "server-management-abu-dhabi", "server-storage#server-solutions"],
      ["website-development", "website-development-abu-dhabi", "software-solutions#web-design"],
      ["remote-it-support", "remote-it-support-abu-dhabi", "it-services#it-support"],
      ["vpn-and-network-security", "vpn-network-security-abu-dhabi", "network-solutions#vpn-solutions"],
    ];

    return serviceMigrations.flatMap(([alias, current, destination]) =>
      [alias, current].map((from) => ({
        source: `/services/${from}`,
        destination: `/services/${destination}`,
        permanent: true,
      })),
    );
  },
};

export default nextConfig;
