export type ProductCategory = {
  title: string;
  subtitle: string;
  icon: string;
  brands: readonly string[];
  authorised: readonly string[];
  href: string;
  linkLabel: string;
};

export const productCategories: readonly ProductCategory[] = [
  { title: "Next gen firewall", subtitle: "Network perimeter security", icon: "shield", brands: ["Fortinet", "Cisco", "Sophos", "Sangfor", "Check Point"], authorised: ["Fortinet"], href: "/solutions/cybersecurity", linkLabel: "Cybersecurity solutions" },
  { title: "Endpoint security", subtitle: "Device protection", icon: "laptop", brands: ["Bitdefender", "ESET", "Sophos"], authorised: ["Bitdefender", "ESET"], href: "/solutions/cybersecurity", linkLabel: "Cybersecurity solutions" },
  { title: "Email security", subtitle: "Inbox protection", icon: "mail", brands: ["Vircom", "Check Point"], authorised: [], href: "/solutions/cybersecurity", linkLabel: "Cybersecurity solutions" },
  { title: "IP phones", subtitle: "Voice communication", icon: "phone", brands: ["Yealink", "Grandstream", "Cisco", "Avaya"], authorised: ["Yealink"], href: "/services/communication-lv#ip-phone-solutions", linkLabel: "IP phone solutions" },
  { title: "Video conferencing", subtitle: "Meeting room systems", icon: "video", brands: ["Logitech", "AVer", "PeopleLink", "Huawei"], authorised: ["Logitech"], href: "/services/communication-lv#av-system", linkLabel: "AV systems" },
  { title: "Network switches", subtitle: "Switching and routing", icon: "network", brands: ["Cisco", "HPE Aruba", "Omada", "TP-Link", "D-Link", "Ubiquiti"], authorised: ["HPE Aruba"], href: "/services/network-solutions#switching-and-routing", linkLabel: "Switching and routing" },
  { title: "Wireless access points", subtitle: "Enterprise WiFi", icon: "wifi", brands: ["UniFi", "HPE Aruba", "Omada", "Cisco", "Ruijie"], authorised: ["UniFi", "HPE Aruba"], href: "/services/network-solutions#wifi-solutions", linkLabel: "WiFi solutions" },
  { title: "Display and interactive panels", subtitle: "Meeting room displays", icon: "display", brands: ["MAXHUB", "Dahua", "Huawei", "BenQ"], authorised: ["MAXHUB"], href: "/services/communication-lv#av-system", linkLabel: "AV systems" },
  { title: "IP PBX systems", subtitle: "Business telephony", icon: "pbx", brands: ["Grandstream", "Cisco", "Avaya", "3CX"], authorised: ["3CX"], href: "/services/communication-lv#ip-phone-solutions", linkLabel: "IP phone solutions" },
  { title: "NAS storage", subtitle: "Network attached storage", icon: "server", brands: ["Synology", "QNAP"], authorised: ["Synology", "QNAP"], href: "/solutions/server-storage", linkLabel: "Server and storage solutions" },
  { title: "Intercom systems", subtitle: "Building communication", icon: "intercom", brands: ["Hikvision", "Dahua"], authorised: ["Hikvision"], href: "/solutions/communication-lv", linkLabel: "LV and ELV solutions" },
  { title: "CCTV systems", subtitle: "IP surveillance cameras", icon: "camera", brands: ["Hikvision", "Dahua", "Hanwha", "UNV", "Axis", "Pelco"], authorised: ["Hikvision"], href: "/services/communication-lv#cctv-solutions", linkLabel: "CCTV solutions" },
  { title: "Audio visual systems", subtitle: "AV equipment", icon: "audio", brands: ["Logitech", "Bose", "Bosch", "JBL", "Hikvision"], authorised: ["Bose", "Bosch"], href: "/services/communication-lv#av-system", linkLabel: "AV systems" },
  { title: "Master clock system", subtitle: "Facility time synchronisation", icon: "clock", brands: ["Mobatime"], authorised: ["Mobatime"], href: "/solutions/communication-lv", linkLabel: "LV and ELV solutions" },
  { title: "UPS systems", subtitle: "Power protection", icon: "bolt", brands: ["APC", "Eaton", "Vertiv", "Socomec"], authorised: ["APC", "Eaton"], href: "/solutions/server-storage", linkLabel: "Server and storage solutions" },
  { title: "Attendance and access control", subtitle: "Biometric systems", icon: "fingerprint", brands: ["Matrix", "ZKTeco", "Hikvision", "Dahua", "HID", "Suprema", "dormakaba"], authorised: ["ZKTeco"], href: "/services/communication-lv#biometric-attendance-system", linkLabel: "Biometric attendance systems" },
  { title: "Digital signage", subtitle: "Display systems", icon: "signage", brands: ["Hikvision", "Samsung"], authorised: ["Hikvision"], href: "/services/communication-lv#led-panel", linkLabel: "LED panels" },
  { title: "Accounting software", subtitle: "Business management", icon: "calculator", brands: ["Tally Prime"], authorised: ["Tally Prime"], href: "/services/software-solutions#erp-software", linkLabel: "ERP software" },
  { title: "Design software", subtitle: "CAD and technical design", icon: "ruler", brands: ["AutoCAD", "CADMATE"], authorised: ["AutoCAD", "CADMATE"], href: "/solutions/software", linkLabel: "Software solutions" },
];

export const authorisedPartnerships = [
  ["Tally Prime", "Authorised dealer"],
  ["Microsoft", "Certified partner"],
  ["Hikvision", "Authorised dealer"],
  ["Fortinet", "Certified partner"],
  ["ESET", "Certified reseller"],
  ["Acronis", "Certified partner"],
  ["Aruba", "Certified installer"],
  ["ADMCC", "Certified"],
] as const;
