/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      ["it-amc", "it-amc-abu-dhabi"],
      ["on-call-it-support", "it-support-abu-dhabi"],
      ["office-it-setup", "office-it-setup-abu-dhabi"],
      ["network-and-infrastructure", "network-infrastructure-abu-dhabi"],
      ["structured-cabling", "structured-cabling-abu-dhabi"],
      ["cybersecurity-and-firewall", "cybersecurity-solutions-abu-dhabi"],
      ["cloud-solutions-and-microsoft-365", "cloud-solutions-microsoft-365-abu-dhabi"],
      ["cctv-and-access-control", "cctv-access-control-abu-dhabi"],
      ["biometric-systems", "biometric-systems-abu-dhabi"],
      ["hardware-and-av-solutions", "hardware-av-solutions-abu-dhabi"],
      ["pabx-and-telephone-systems", "pabx-telephone-systems-abu-dhabi"],
      ["video-conferencing", "video-conferencing-abu-dhabi"],
      ["pos-systems", "pos-systems-abu-dhabi"],
      ["erp-solutions", "erp-solutions-abu-dhabi"],
      ["tally-prime", "tally-prime-abu-dhabi"],
      ["data-backup-and-recovery", "data-backup-recovery-abu-dhabi"],
      ["server-management", "server-management-abu-dhabi"],
      ["website-development", "website-development-abu-dhabi"],
      ["remote-it-support", "remote-it-support-abu-dhabi"],
      ["vpn-and-network-security", "vpn-network-security-abu-dhabi"],
    ].map(([from, to]) => ({
      source: `/services/${from}`,
      destination: `/services/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
