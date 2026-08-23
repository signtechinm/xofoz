export type IndustryCard = {
  title: string;
  description: string;
  href: string;
};

export type IndustryDefinition = {
  slug: "hospitality" | "real-estate" | "construction" | "logistics" | "manufacturing" | "education" | "government" | "healthcare";
  label: string;
  navLabel: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    cta: string;
    badges: readonly string[];
  };
  highlights: readonly { value: string; label: string }[];
  challengesTitle: string;
  challengesIntro: string;
  challenges: readonly { title: string; description: string }[];
  solutionTitle: string;
  solutionParagraphs: readonly string[];
  services: readonly IndustryCard[];
  solutions: readonly IndustryCard[];
  proof: {
    eyebrow: string;
    title: string;
    description: string;
    outcomes: readonly string[];
  };
  reasons: readonly { title: string; description: string }[];
  capabilities: readonly string[];
  faqs: readonly { question: string; answer: string }[];
  consultation: {
    title: string;
    description: string;
    organisationLabel: string;
    scaleLabel: string;
    requirementsLabel: string;
  };
};

const sharedBadges = ["Abu Dhabi based team", "Support shaped around operations", "One accountable technology partner"] as const;

export const industries: readonly IndustryDefinition[] = [
  {
    slug: "hospitality",
    label: "Hospitality",
    navLabel: "Hospitality",
    image: "/industries/hospitality-hero-v2.webp",
    metaTitle: "IT Solutions for Hospitality in Abu Dhabi | XOFOZ",
    metaDescription: "IT solutions for hotels and hospitality businesses in Abu Dhabi, including IT support, guest WiFi, CCTV, POS, Microsoft 365, and managed infrastructure.",
    hero: {
      eyebrow: "IT solutions for hospitality businesses in Abu Dhabi — since 2022",
      title: "IT solutions for hospitality in Abu Dhabi",
      summary: "XOFOZ designs and supports connected technology environments for hotels, resorts, restaurants, and hospitality operators in Abu Dhabi. We bring guest WiFi, POS, surveillance, access control, staff systems, Microsoft 365, backup, and day-to-day IT support under one accountable local team.",
      cta: "Get a hospitality IT consultation",
      badges: sharedBadges,
    },
    highlights: [
      { value: "Guest", label: "and operational networks" },
      { value: "POS", label: "and back-office systems" },
      { value: "CCTV", label: "and controlled access" },
      { value: "Local", label: "Abu Dhabi support" },
    ],
    challengesTitle: "IT challenges facing hospitality businesses in Abu Dhabi",
    challengesIntro: "Hospitality technology must protect the guest experience while supporting a complex operation that rarely stops.",
    challenges: [
      { title: "Guest-facing systems cannot tolerate disruption", description: "WiFi, check-in, payment, telephony, and point-of-sale failures become visible guest-service problems immediately. The environment needs resilience, monitoring, and support arrangements aligned with operating hours." },
      { title: "Guest and payment data needs layered protection", description: "Hotels handle identity, reservation, payment, and staff information across many systems. Guest access must remain separated from operational networks, with controlled access, endpoint protection, backup, and recovery." },
      { title: "Disconnected vendors create accountability gaps", description: "Hospitality sites often combine POS, CCTV, access control, WiFi, telephony, attendance, cloud, and back-office systems from different suppliers. When systems interact, one partner needs to own diagnosis and coordination." },
    ],
    solutionTitle: "How XOFOZ supports complete hospitality technology environments",
    solutionParagraphs: [
      "XOFOZ plans hospitality infrastructure around the way the property operates: guest and staff connectivity, secure payment and back-office systems, property-wide surveillance, controlled staff areas, dependable communications, and protected business data. The result is a coordinated environment rather than a collection of unrelated installations.",
      "Our Abu Dhabi team can assess existing systems, prioritise risks, design an improvement plan, deliver the required infrastructure, and remain responsible for ongoing support. Maintenance windows, escalation paths, and support coverage are agreed around the property's real operational requirements.",
    ],
    services: [
      { title: "IT support and AMC", description: "Proactive maintenance, remote assistance, on-site support, and coordinated ownership of the hotel's technology environment.", href: "/services/it-services" },
      { title: "Guest WiFi and networks", description: "High-density wireless coverage with separated guest, staff, and operational networks across the property.", href: "/services/network-solutions" },
      { title: "CCTV and access control", description: "Surveillance and controlled access for public areas, back-of-house spaces, car parks, and restricted rooms.", href: "/services/communication-lv" },
      { title: "POS and business software", description: "Point-of-sale and back-office software configured around F&B, retail, reporting, and UAE business requirements.", href: "/services/software-solutions" },
      { title: "Cybersecurity", description: "Firewall, endpoint, email, identity, and network controls designed to protect guest and operational data.", href: "/services/cyber-security" },
      { title: "Microsoft cloud", description: "Microsoft 365, Teams, SharePoint, identity, migration, and ongoing support for management teams.", href: "/services/microsoft-cloud" },
      { title: "Backup and recovery", description: "Protected copies of financial, guest, configuration, and operational data with a practical recovery plan.", href: "/services/data-backup-protection" },
      { title: "Telephony and AV", description: "IP telephony, meeting-room technology, PA, displays, and communication systems for guest and team use.", href: "/services/communication-lv" },
    ],
    solutions: [
      { title: "Communication and LV/ELV", description: "CCTV, access, telephony, PA, intercom, and AV planned as one property-wide system.", href: "/solutions/communication-lv" },
      { title: "Network solutions", description: "Reliable wired and wireless connectivity supporting guests, staff, POS, CCTV, and operations.", href: "/solutions/network-solutions" },
      { title: "Cybersecurity solutions", description: "Layered protection for guest information, payment workflows, users, devices, and networks.", href: "/solutions/cybersecurity" },
      { title: "Microsoft Cloud", description: "Collaboration, identity, document management, migration, and secure management access.", href: "/solutions/microsoft-cloud" },
      { title: "Software solutions", description: "POS, accounting, ERP, attendance, and operational software implemented around the property.", href: "/solutions/software" },
      { title: "Data backup and protection", description: "Backup and recovery planning for critical hotel records and operational systems.", href: "/solutions/data-backup" },
    ],
    proof: {
      eyebrow: "Hospitality delivery model",
      title: "One team across guest, staff, security, and back-office technology",
      description: "For a multi-department hospitality environment, XOFOZ can coordinate the systems that cross operational boundaries—from reception and F&B to management, security, finance, and facilities. Client names and project outcomes will be added only after written business approval.",
      outcomes: ["Coordinated system ownership", "Operationally planned maintenance", "Local escalation and on-site capability"],
    },
    reasons: [
      { title: "Hospitality-aware planning", description: "Design decisions consider guest experience, peak occupancy, events, shift work, and the difference between public and operational areas." },
      { title: "Clear network separation", description: "Guest access, staff devices, payment systems, and infrastructure are designed with appropriate segmentation and access control." },
      { title: "Multi-system accountability", description: "XOFOZ can coordinate networks, security, cloud, communications, business software, and support instead of leaving the property between vendors." },
      { title: "Abu Dhabi based support", description: "Local engineers can combine remote diagnosis with on-site attendance when the requirement cannot be resolved remotely." },
    ],
    capabilities: ["Hospitality network design", "Microsoft environments", "Backup platforms", "CCTV and access systems", "POS and business software", "Multi-vendor support"],
    faqs: [
      { question: "What IT services can XOFOZ provide for hotels in Abu Dhabi?", answer: "XOFOZ can support hotel IT operations through managed support and AMC, guest and staff WiFi, networks, CCTV and access control, POS and business software, Microsoft 365, cybersecurity, telephony, AV, servers, and backup. The final scope is designed around the property, its operating hours, and the systems already in place." },
      { question: "Can support coverage be aligned with hotel operating hours?", answer: "Yes. Support hours, escalation paths, maintenance windows, and on-site arrangements can be agreed around the property's operating model. Any specific response time or continuous-coverage requirement is documented in the service agreement rather than assumed." },
      { question: "Can guest WiFi be separated from hotel operations?", answer: "Yes. XOFOZ can design separate guest, staff, and operational networks with appropriate firewall policies, access controls, bandwidth management, and monitoring so public access does not expose internal systems." },
      { question: "Can XOFOZ coordinate POS, CCTV, networks, and Microsoft 365?", answer: "Yes. XOFOZ can assess and coordinate these systems as one operating environment, including dependencies between networks, devices, identities, storage, and business applications. Specialist third parties can be coordinated where a property platform requires them." },
      { question: "How does a hospitality IT assessment begin?", answer: "The process starts with the property layout, guest capacity, departments, current systems, support history, security requirements, and upcoming projects. XOFOZ then identifies priorities and proposes a phased support or implementation plan." },
    ],
    consultation: { title: "Get an IT consultation for your hospitality business", description: "Tell us about the property, its operating environment, and the systems that need attention. Our Abu Dhabi team will review the requirement and recommend a practical next step.", organisationLabel: "Hotel or property name", scaleLabel: "Guest rooms, outlets, or property scale", requirementsLabel: "Tell us about your hospitality IT requirements" },
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    navLabel: "Real Estate",
    image: "/industries/real-estate-hero-v2.webp",
    metaTitle: "IT Solutions for Real Estate in Abu Dhabi | XOFOZ",
    metaDescription: "IT solutions for property developers and real estate companies in Abu Dhabi, including Microsoft 365, ERP, networks, cybersecurity, backup, and IT support.",
    hero: { eyebrow: "IT solutions for real estate businesses in Abu Dhabi — since 2022", title: "IT solutions for real estate in Abu Dhabi", summary: "XOFOZ supports property developers, brokerages, and real estate management companies with multi-site IT support, Microsoft 365, ERP, secure networks, surveillance, backup, and cybersecurity—coordinated by one Abu Dhabi-based technology team.", cta: "Get a real estate IT consultation", badges: sharedBadges },
    highlights: [{ value: "Multi-site", label: "office and project connectivity" }, { value: "Cloud", label: "collaboration and documents" }, { value: "ERP", label: "and financial workflows" }, { value: "Secure", label: "client and project data" }],
    challengesTitle: "IT challenges facing real estate businesses in Abu Dhabi",
    challengesIntro: "Property teams work across offices, projects, show suites, and managed sites while handling commercially sensitive client and financial information.",
    challenges: [
      { title: "Teams need consistent access across locations", description: "Head offices, project sites, sales teams, and managed properties need reliable access to documents, communication, and business systems without depending on personal devices or fragmented file sharing." },
      { title: "Client and transaction data needs protection", description: "Property businesses handle identity documents, contracts, payment information, financial records, and commercially sensitive project data that require controlled access, secure sharing, and dependable backup." },
      { title: "Legacy systems can restrict growth", description: "Ageing servers, local email, disconnected accounting, and inconsistent networks become harder to manage as the portfolio grows. Migration must be planned carefully to avoid data loss and operational disruption." },
    ],
    solutionTitle: "How XOFOZ supports real estate operations across Abu Dhabi",
    solutionParagraphs: ["XOFOZ connects property teams through managed networks, Microsoft 365, secure remote access, document collaboration, ERP and accounting platforms, protected endpoints, and resilient backup. Offices and sites can be managed under one support structure with consistent standards.", "We begin with the operating model—locations, users, project workflows, data, applications, and client-facing systems—then build a phased roadmap. This keeps cloud migration, network upgrades, cybersecurity, and business software aligned with real operational priorities."],
    services: [
      { title: "IT support and AMC", description: "Coordinated support across offices, project locations, users, servers, networks, and cloud platforms.", href: "/services/it-services" },
      { title: "Microsoft 365 and cloud", description: "Email, Teams, SharePoint, OneDrive, identity, migration, and ongoing administration for distributed teams.", href: "/services/microsoft-cloud" },
      { title: "ERP and accounting software", description: "Business software supporting project accounting, billing, reporting, and UAE operational workflows.", href: "/services/software-solutions" },
      { title: "Network infrastructure", description: "Reliable wired, wireless, and secure remote connectivity for offices, sites, and managed properties.", href: "/services/network-solutions" },
      { title: "Cybersecurity", description: "Protection for client records, financial data, email, identities, endpoints, and remote access.", href: "/services/cyber-security" },
      { title: "Backup and recovery", description: "Protected copies of contracts, project documents, financial records, and shared business data.", href: "/services/data-backup-protection" },
      { title: "CCTV and access control", description: "Surveillance and controlled access for offices, development sites, and managed properties.", href: "/services/communication-lv" },
      { title: "Server and storage", description: "Managed infrastructure for files, applications, virtual workloads, and business continuity.", href: "/services/server-storage" },
    ],
    solutions: [
      { title: "Microsoft Cloud", description: "Connected communication, document management, identity, and secure work across locations.", href: "/solutions/microsoft-cloud" },
      { title: "Software solutions", description: "ERP, accounting, workflow, and web platforms supporting property operations.", href: "/solutions/software" },
      { title: "Network solutions", description: "Structured multi-site connectivity for offices, projects, sales environments, and remote users.", href: "/solutions/network-solutions" },
      { title: "Cybersecurity solutions", description: "Layered security for high-value transactions, client information, users, and devices.", href: "/solutions/cybersecurity" },
      { title: "Data backup and protection", description: "Recovery-ready protection for property, project, financial, and client records.", href: "/solutions/data-backup" },
      { title: "Communication and LV/ELV", description: "CCTV, access control, intercom, AV, and communications for sites and offices.", href: "/solutions/communication-lv" },
    ],
    proof: { eyebrow: "Real-estate delivery model", title: "Consistent technology across offices, projects, and managed locations", description: "XOFOZ can bring cloud collaboration, secure connectivity, business systems, physical security, and ongoing IT support into one managed environment. Named client stories will be published only when their wording and permissions are confirmed.", outcomes: ["Consistent standards across sites", "Secure document collaboration", "One support and escalation path"] },
    reasons: [
      { title: "Multi-location thinking", description: "The design accounts for head office, project teams, show locations, managed properties, and remote users from the start." },
      { title: "Careful cloud migration", description: "Discovery, migration planning, staged cutover, validation, and user readiness reduce disruption when moving business data and communication." },
      { title: "Business-system integration", description: "Networks, identity, Microsoft platforms, ERP, accounting, backup, and security are planned around shared workflows." },
      { title: "Local accountability", description: "An Abu Dhabi team remains available for remote coordination and site attendance when physical infrastructure needs attention." },
    ],
    capabilities: ["Microsoft 365", "Multi-site networking", "ERP and accounting", "Data backup", "Cybersecurity", "CCTV and access control"],
    faqs: [
      { question: "What IT services can XOFOZ provide for real estate companies?", answer: "XOFOZ can provide managed IT support, Microsoft 365 and cloud migration, ERP and accounting software, networks, cybersecurity, backup, server management, secure remote access, CCTV, access control, and related technology implementation for property businesses in Abu Dhabi." },
      { question: "Can XOFOZ support several offices and project sites?", answer: "Yes. The support and network design can cover multiple offices, project locations, and managed sites under one agreed scope, with consistent standards, remote administration, and on-site attendance where required." },
      { question: "How is Microsoft 365 migration handled?", answer: "XOFOZ starts with user, mailbox, file, identity, and dependency discovery. Migration is staged and validated before final cutover, with backup, user communication, and post-migration support included in the agreed plan." },
      { question: "Can ERP and accounting systems be configured for property workflows?", answer: "XOFOZ can assess project accounting, billing, reporting, UAE VAT configuration, and multi-entity requirements before recommending and implementing an appropriate business software approach." },
      { question: "How is sensitive property and client data protected?", answer: "Protection can combine identity controls, endpoint security, firewall and network segmentation, secure remote access, email protection, permission-based document sharing, backup, and tested recovery procedures." },
    ],
    consultation: { title: "Get an IT consultation for your real estate business", description: "Share your office locations, project sites, users, cloud platforms, business systems, and current IT concerns. XOFOZ will recommend a practical phased approach.", organisationLabel: "Company or property business name", scaleLabel: "Office locations, sites, and team size", requirementsLabel: "Tell us about your real estate IT requirements" },
  },
  {
    slug: "construction",
    label: "Construction",
    navLabel: "Construction",
    image: "/industries/construction-hero-v2.webp",
    metaTitle: "IT Solutions for Construction in Abu Dhabi | XOFOZ",
    metaDescription: "IT solutions for construction companies in Abu Dhabi, including site-office networks, CCTV, rugged connectivity, cloud collaboration, cybersecurity, and IT support.",
    hero: { eyebrow: "IT solutions for construction businesses in Abu Dhabi — since 2022", title: "IT solutions for construction in Abu Dhabi", summary: "XOFOZ equips construction head offices, project offices, and active sites with dependable networks, site surveillance, secure cloud collaboration, rugged user technology, backup, and responsive IT support from one Abu Dhabi-based team.", cta: "Get a construction IT consultation", badges: sharedBadges },
    highlights: [{ value: "Sites", label: "and head offices connected" }, { value: "CCTV", label: "and controlled access" }, { value: "Cloud", label: "plans and collaboration" }, { value: "Rugged", label: "site-ready infrastructure" }],
    challengesTitle: "IT challenges facing construction businesses in Abu Dhabi",
    challengesIntro: "Construction technology must remain reliable across temporary offices, changing site layouts, harsh environments, and distributed project teams.",
    challenges: [
      { title: "Site infrastructure changes as the project develops", description: "Temporary offices, moving teams, new work zones, and changing access points require networks and surveillance that can adapt without repeatedly rebuilding the entire environment." },
      { title: "Project teams depend on large shared files", description: "Drawings, schedules, commercial documents, and technical records must stay current across site and head office. Poor connectivity or uncontrolled file copies create delay and version risk." },
      { title: "Sites combine physical and cyber risk", description: "Outdoor equipment, temporary facilities, contractors, shared devices, and valuable project data require coordinated CCTV, access control, endpoint protection, network security, and backup." },
    ],
    solutionTitle: "How XOFOZ delivers practical IT for active construction environments",
    solutionParagraphs: ["XOFOZ plans site-office connectivity, structured and temporary cabling, enterprise wireless coverage, CCTV, access control, cloud collaboration, secure remote access, endpoint protection, servers, and backup around the project programme and physical site conditions.", "A phased approach allows infrastructure to expand or move as the project changes. Head office and site teams remain connected through consistent identity, document, security, and support processes, with one local technology partner coordinating the environment."],
    services: [
      { title: "Site and office IT support", description: "Remote and on-site support for users, rugged devices, project offices, connectivity, and shared systems.", href: "/services/it-services" },
      { title: "Network infrastructure", description: "Structured cabling, switching, routing, wireless coverage, and secure links between office and site environments.", href: "/services/network-solutions" },
      { title: "CCTV and access control", description: "Site surveillance, perimeter monitoring, controlled entry, attendance, and security-system connectivity.", href: "/services/communication-lv" },
      { title: "Microsoft cloud", description: "Teams, SharePoint, OneDrive, identity, and secure access for plans, project records, and communication.", href: "/services/microsoft-cloud" },
      { title: "Cybersecurity", description: "Protection for project data, commercial documents, email, endpoints, networks, and remote access.", href: "/services/cyber-security" },
      { title: "Backup and recovery", description: "Recovery-ready protection for drawings, contracts, schedules, financial records, and shared files.", href: "/services/data-backup-protection" },
      { title: "Server and storage", description: "Central files, application workloads, NAS, synchronisation, and managed project data storage.", href: "/services/server-storage" },
      { title: "Design and ERP software", description: "Genuine design and business software supported across technical, finance, and operations teams.", href: "/services/software-solutions" },
    ],
    solutions: [
      { title: "Network solutions", description: "Site-ready wired, wireless, remote-access, and office connectivity designed to evolve with the project.", href: "/solutions/network-solutions" },
      { title: "Communication and LV/ELV", description: "CCTV, access, attendance, intercom, PA, and communications for projects and facilities.", href: "/solutions/communication-lv" },
      { title: "Microsoft Cloud", description: "Secure project collaboration and controlled access to current plans and documents.", href: "/solutions/microsoft-cloud" },
      { title: "Cybersecurity solutions", description: "Protection for commercial information, project records, users, devices, and connections.", href: "/solutions/cybersecurity" },
      { title: "Data backup and protection", description: "Protected project records with practical recovery planning across office and cloud data.", href: "/solutions/data-backup" },
      { title: "Software solutions", description: "Design, accounting, ERP, tracking, and workflow tools for technical and operational teams.", href: "/solutions/software" },
    ],
    proof: { eyebrow: "Construction delivery model", title: "Technology that can move with the project", description: "XOFOZ can coordinate site-office setup, connectivity, security systems, cloud access, devices, and support through changing project phases. Named construction references and specific outcomes will remain unpublished until approved.", outcomes: ["Phased site deployment", "Head-office and site coordination", "Local technical attendance"] },
    reasons: [
      { title: "Site-aware infrastructure", description: "Plans account for temporary buildings, dust, heat, expanding work zones, power constraints, and the changing construction programme." },
      { title: "Secure project collaboration", description: "Cloud identity, permissions, secure access, and controlled document sharing help teams work from current project information." },
      { title: "Physical and digital security together", description: "CCTV, access, networks, endpoints, data, and backup are treated as connected operational requirements." },
      { title: "Abu Dhabi based engineers", description: "Local coordination supports surveys, installations, moves, changes, and physical troubleshooting across active sites." },
    ],
    capabilities: ["Site-office setup", "Network and WiFi", "CCTV and access", "Microsoft collaboration", "Backup and storage", "Multi-vendor support"],
    faqs: [
      { question: "What IT services can XOFOZ provide for construction companies?", answer: "XOFOZ can deliver project-office setup, managed IT support, networks and WiFi, CCTV and access control, Microsoft 365, secure remote access, cybersecurity, servers, storage, backup, design software, ERP, and hardware support for construction businesses in Abu Dhabi." },
      { question: "Can XOFOZ set up technology for a temporary site office?", answer: "Yes. XOFOZ can survey the site and plan internet connectivity, cabling, WiFi, switching, user devices, printing, CCTV, access, cloud services, backup, and ongoing support around the expected project duration and layout changes." },
      { question: "How can site and head-office teams share drawings securely?", answer: "A solution can combine Microsoft 365 or another approved collaboration platform with identity controls, permissions, version management, secure remote access, endpoint protection, and backup so teams reach current files without uncontrolled copies." },
      { question: "Can the network and CCTV expand as the site changes?", answer: "Yes. The infrastructure can be designed in phases with capacity, cabling routes, wireless coverage, camera zones, and equipment placement reviewed as the project footprint changes." },
      { question: "Does XOFOZ support rugged devices and site users?", answer: "XOFOZ can support appropriate laptops, tablets, connectivity, security configuration, software access, and user troubleshooting. Device selection depends on site conditions and application requirements." },
    ],
    consultation: { title: "Get an IT consultation for your construction business", description: "Tell us about the project phase, site-office layout, users, connectivity, surveillance, and shared systems. We will propose a practical deployment or support plan.", organisationLabel: "Company or project name", scaleLabel: "Project locations, site size, and users", requirementsLabel: "Tell us about your construction IT requirements" },
  },
  {
    slug: "logistics",
    label: "Logistics",
    navLabel: "Logistics",
    image: "/industries/logistics-hero-v2.webp",
    metaTitle: "IT Solutions for Logistics in Abu Dhabi | XOFOZ",
    metaDescription: "IT solutions for warehouses and logistics businesses in Abu Dhabi, including resilient networks, WiFi, scanners, CCTV, backup, cybersecurity, and IT support.",
    hero: { eyebrow: "IT solutions for logistics and supply-chain businesses in Abu Dhabi — since 2022", title: "IT solutions for logistics in Abu Dhabi", summary: "XOFOZ supports warehouses, transport teams, and logistics operators with resilient networks, warehouse WiFi, scanning-device connectivity, surveillance, business software, cybersecurity, backup, and managed IT support across Abu Dhabi.", cta: "Get a logistics IT consultation", badges: sharedBadges },
    highlights: [{ value: "Warehouse", label: "coverage and connectivity" }, { value: "Fleet", label: "and operations visibility" }, { value: "Secure", label: "shipment and client data" }, { value: "Uptime", label: "focused support planning" }],
    challengesTitle: "IT challenges facing logistics businesses in Abu Dhabi",
    challengesIntro: "Warehouse and transport operations depend on continuous access to scanning, inventory, communications, surveillance, and business systems.",
    challenges: [
      { title: "Large facilities create coverage gaps", description: "High racking, long aisles, loading areas, cold stores, outdoor yards, and moving equipment make ordinary office WiFi designs unsuitable for scanners and warehouse users." },
      { title: "System disruption stops physical operations", description: "When inventory, printing, scanning, routing, or connectivity fails, goods stop moving. Infrastructure and support must be designed around operational continuity and recovery." },
      { title: "Distributed assets increase security exposure", description: "Warehouses, vehicles, remote users, client information, shipment records, and operational devices create a broad physical and digital environment that needs consistent control." },
    ],
    solutionTitle: "How XOFOZ supports connected warehouse and logistics operations",
    solutionParagraphs: ["XOFOZ plans warehouse networks, WiFi coverage, switching, secure remote access, CCTV, access control, scanning connectivity, user devices, business software, servers, backup, and cybersecurity as one operating platform.", "The design begins with facility layout, racking, workflows, loading zones, users, devices, applications, and continuity requirements. This allows infrastructure to support real warehouse movement rather than applying a generic office network to an industrial space."],
    services: [
      { title: "IT support and AMC", description: "Managed support for warehouse users, operations workstations, devices, networks, servers, and cloud platforms.", href: "/services/it-services" },
      { title: "Warehouse networks and WiFi", description: "Coverage planning, switching, cabling, wireless deployment, and secure connectivity across large facilities.", href: "/services/network-solutions" },
      { title: "CCTV and access control", description: "Surveillance for aisles, docks, yards, entrances, and restricted areas with controlled staff access.", href: "/services/communication-lv" },
      { title: "Cybersecurity", description: "Protection for shipment data, client records, endpoints, email, warehouse networks, and remote users.", href: "/services/cyber-security" },
      { title: "Backup and recovery", description: "Protection and recovery planning for inventory, ERP, shipment, financial, and operational records.", href: "/services/data-backup-protection" },
      { title: "Server and storage", description: "Managed compute and storage for warehouse systems, shared files, applications, and synchronisation.", href: "/services/server-storage" },
      { title: "Business and tracking software", description: "ERP, accounting, GPS tracking, workflow, and related applications integrated around operations.", href: "/services/software-solutions" },
      { title: "Cloud and Microsoft 365", description: "Communication, document sharing, identity, management access, and collaboration across locations.", href: "/services/microsoft-cloud" },
    ],
    solutions: [
      { title: "Network solutions", description: "Warehouse-wide wired and wireless infrastructure for users, scanners, devices, and systems.", href: "/solutions/network-solutions" },
      { title: "Communication and LV/ELV", description: "CCTV, access control, intercom, PA, and communications across warehouse and yard areas.", href: "/solutions/communication-lv" },
      { title: "Software solutions", description: "ERP, tracking, accounting, visitor, and workflow platforms supporting logistics operations.", href: "/solutions/software" },
      { title: "Cybersecurity solutions", description: "Security for client data, shipment records, warehouse endpoints, identities, and remote access.", href: "/solutions/cybersecurity" },
      { title: "Data backup and protection", description: "Recovery-ready protection for inventory, shipment, finance, and operational data.", href: "/solutions/data-backup" },
      { title: "Server and storage", description: "Reliable infrastructure for operational systems, applications, files, and data growth.", href: "/solutions/server-storage" },
    ],
    proof: { eyebrow: "Logistics delivery model", title: "Connectivity designed around the movement of goods", description: "XOFOZ can coordinate warehouse connectivity, scanning workflows, surveillance, business systems, backup, and ongoing support around operational uptime. Named logistics references will be added only after permission and outcome verification.", outcomes: ["Facility-wide planning", "Operational device connectivity", "Clear recovery and escalation paths"] },
    reasons: [
      { title: "Warehouse-specific wireless design", description: "Coverage planning considers racking, building materials, aisles, loading zones, moving devices, and real workflow paths." },
      { title: "Operational continuity focus", description: "Critical systems, dependencies, backup, recovery, spares, and escalation paths are identified around the cost of stopped operations." },
      { title: "Integrated physical and digital controls", description: "Networks, CCTV, access, endpoint protection, business systems, and data recovery are planned together." },
      { title: "Local technical coordination", description: "The Abu Dhabi team can survey facilities, coordinate installation, and attend physical infrastructure issues when required." },
    ],
    capabilities: ["Warehouse WiFi", "Network infrastructure", "Scanning connectivity", "CCTV and access", "ERP and tracking", "Backup and recovery"],
    faqs: [
      { question: "What IT services can XOFOZ provide for logistics businesses?", answer: "XOFOZ can provide managed support, warehouse networks and WiFi, CCTV and access control, cybersecurity, backup, servers, storage, Microsoft 365, business software, tracking solutions, and related infrastructure for logistics operators in Abu Dhabi." },
      { question: "Can XOFOZ improve WiFi coverage across a warehouse?", answer: "Yes. A warehouse WiFi project begins with layout, racking, materials, device types, roaming paths, loading areas, and performance requirements. Access-point placement and configuration are then designed and tested for the operational environment." },
      { question: "Can scanners and warehouse devices use a separate network?", answer: "Yes. Operational devices can be placed on controlled network segments with appropriate access policies, monitoring, and separation from guest or general user traffic." },
      { question: "How can logistics data be protected and recovered?", answer: "Protection can combine identity and access controls, endpoint and network security, email protection, local and cloud backup, retention policies, and tested recovery procedures for inventory, shipment, financial, and client records." },
      { question: "Can XOFOZ support more than one warehouse or office?", answer: "Yes. Multiple facilities and offices can be connected and supported under one agreed scope using secure site connectivity, cloud platforms, central monitoring, remote support, and on-site attendance where required." },
    ],
    consultation: { title: "Get an IT consultation for your logistics operation", description: "Share your warehouse layout, locations, users, scanners, business systems, connectivity, and security concerns. XOFOZ will recommend a practical next step.", organisationLabel: "Company or operation name", scaleLabel: "Warehouse area, locations, and users", requirementsLabel: "Tell us about your logistics IT requirements" },
  },
  {
    slug: "manufacturing",
    label: "Manufacturing",
    navLabel: "Manufacturing",
    image: "/industries/manufacturing-hero-v2.webp",
    metaTitle: "IT Solutions for Manufacturing in Abu Dhabi | XOFOZ",
    metaDescription: "IT solutions for manufacturing facilities in Abu Dhabi, including industrial networks, servers, ERP, cybersecurity, CCTV, backup, and managed IT support.",
    hero: { eyebrow: "IT solutions for manufacturing businesses in Abu Dhabi — since 2022", title: "IT solutions for manufacturing in Abu Dhabi", summary: "XOFOZ supports factories and industrial businesses with reliable IT infrastructure, managed networks, servers and storage, ERP, cybersecurity, backup, surveillance, access control, and local technical support across Abu Dhabi.", cta: "Get a manufacturing IT consultation", badges: sharedBadges },
    highlights: [{ value: "Factory", label: "and office connectivity" }, { value: "ERP", label: "and business workflows" }, { value: "Protected", label: "systems and production data" }, { value: "Local", label: "engineering coordination" }],
    challengesTitle: "IT challenges facing manufacturing businesses in Abu Dhabi",
    challengesIntro: "Manufacturing environments connect office IT, industrial operations, people, machines, business systems, and security across one facility.",
    challenges: [
      { title: "Office and production systems must coexist safely", description: "Factories need dependable communication between business applications, users, servers, and operational environments without exposing critical systems unnecessarily." },
      { title: "Downtime affects output, not only office productivity", description: "Failures in networks, ERP access, storage, printing, or connected workstations can interrupt scheduling, material movement, quality records, and production decisions." },
      { title: "Industrial environments increase technology risk", description: "Heat, dust, machinery, large floor areas, legacy systems, vendors, and shared operational devices require careful infrastructure, security, backup, and access planning." },
    ],
    solutionTitle: "How XOFOZ supports dependable manufacturing technology",
    solutionParagraphs: ["XOFOZ plans the business IT layer around production requirements: resilient networks, controlled wireless access, servers and storage, ERP and accounting systems, Microsoft platforms, endpoint and network security, surveillance, access control, and protected data.", "The work begins with dependencies between office users, factory-floor devices, applications, vendors, data, and production workflows. Changes can then be delivered in phases that reduce operational risk and establish clear ownership for ongoing support."],
    services: [
      { title: "Managed IT support", description: "Support and maintenance for factory and office users, devices, infrastructure, applications, and connected sites.", href: "/services/it-services" },
      { title: "Industrial network infrastructure", description: "Structured cabling, switching, routing, WiFi, segmentation, and secure connectivity across the facility.", href: "/services/network-solutions" },
      { title: "Server and storage", description: "Managed compute, NAS, shared files, virtual workloads, capacity planning, and infrastructure monitoring.", href: "/services/server-storage" },
      { title: "ERP and business software", description: "Software supporting finance, inventory, procurement, production-adjacent workflows, reporting, and management.", href: "/services/software-solutions" },
      { title: "Cybersecurity", description: "Layered controls for users, endpoints, identities, email, networks, remote vendors, and business data.", href: "/services/cyber-security" },
      { title: "Backup and recovery", description: "Protected business and operational records with retention, recovery planning, and restoration testing.", href: "/services/data-backup-protection" },
      { title: "CCTV and access control", description: "Surveillance and controlled access for production floors, stores, entrances, yards, and restricted areas.", href: "/services/communication-lv" },
      { title: "Microsoft cloud", description: "Communication, document management, identity, migration, and secure collaboration for business teams.", href: "/services/microsoft-cloud" },
    ],
    solutions: [
      { title: "Network solutions", description: "Reliable, segmented wired and wireless infrastructure across office and factory environments.", href: "/solutions/network-solutions" },
      { title: "Server and storage", description: "Scalable compute and protected storage for applications, files, workloads, and operational growth.", href: "/solutions/server-storage" },
      { title: "Software solutions", description: "ERP, accounting, tracking, and workflow tools implemented around business requirements.", href: "/solutions/software" },
      { title: "Cybersecurity solutions", description: "Layered security for business systems, endpoints, remote access, identities, and networks.", href: "/solutions/cybersecurity" },
      { title: "Data backup and protection", description: "Recovery-ready protection for business, configuration, production-adjacent, and financial data.", href: "/solutions/data-backup" },
      { title: "Communication and LV/ELV", description: "CCTV, access, attendance, PA, intercom, and communications for industrial facilities.", href: "/solutions/communication-lv" },
    ],
    proof: { eyebrow: "Manufacturing delivery model", title: "Business IT aligned with the realities of the factory floor", description: "XOFOZ can coordinate networks, infrastructure, business systems, data protection, physical security, and support across office and industrial areas. Named manufacturing references and outcomes remain subject to written approval.", outcomes: ["Phased risk-controlled changes", "Office and factory coordination", "Documented support ownership"] },
    reasons: [
      { title: "Operational dependency mapping", description: "Before making changes, XOFOZ identifies which users, applications, devices, vendors, and workflows depend on each system." },
      { title: "Network segmentation", description: "Office, guest, management, and appropriate operational environments can be separated with controlled communication between them." },
      { title: "Recovery planning", description: "Backup scope, retention, restoration priorities, and recovery procedures are aligned with business impact rather than storage alone." },
      { title: "Abu Dhabi based support", description: "Local engineers can coordinate surveys, infrastructure work, user support, vendor access, and physical troubleshooting." },
    ],
    capabilities: ["Factory networking", "Servers and storage", "ERP and software", "Cybersecurity", "Backup and recovery", "CCTV and access"],
    faqs: [
      { question: "What IT services can XOFOZ provide for manufacturers?", answer: "XOFOZ can provide managed IT support, industrial-site networks, servers and storage, ERP and business software, Microsoft platforms, cybersecurity, backup and recovery, CCTV, access control, and related infrastructure for manufacturing businesses in Abu Dhabi." },
      { question: "Can office and factory networks be separated?", answer: "Yes. Network segmentation can separate office users, guests, management systems, and appropriate operational environments, with controlled access between segments based on actual application and vendor requirements." },
      { question: "How can IT changes be made without disrupting production?", answer: "XOFOZ maps dependencies, agrees maintenance windows, stages changes, prepares rollback and recovery steps, and coordinates with operational stakeholders before touching production-dependent infrastructure." },
      { question: "Can XOFOZ support ERP, servers, networks, and backup together?", answer: "Yes. These systems can be assessed and supported as one business environment, including their dependencies. The exact scope depends on the ERP platform, vendor responsibilities, infrastructure, and support agreement." },
      { question: "How is manufacturing data protected?", answer: "Protection can combine network controls, identity and permissions, endpoint security, secure vendor access, email security, server hardening, backup retention, off-site copies, and tested restoration procedures." },
    ],
    consultation: { title: "Get an IT consultation for your manufacturing facility", description: "Tell us about the facility, users, systems, network, servers, ERP, production dependencies, and current risks. XOFOZ will recommend a practical assessment or improvement plan.", organisationLabel: "Company or facility name", scaleLabel: "Facility size, users, and locations", requirementsLabel: "Tell us about your manufacturing IT requirements" },
  },
  {
    slug: "education",
    label: "Education",
    navLabel: "Education",
    image: "/industries/education-hero.webp",
    metaTitle: "IT Solutions for Education Abu Dhabi | XOFOZ",
    metaDescription: "XOFOZ provides IT solutions for schools, training centres, and educational institutions in Abu Dhabi, UAE. Network, CCTV, biometric attendance, cybersecurity, and IT AMC by certified engineers.",
    hero: { eyebrow: "IT solutions for education institutions in Abu Dhabi, UAE — since 2022", title: "IT solutions for education in Abu Dhabi", summary: "XOFOZ provides complete IT solutions for schools, training centres, and educational institutions in Abu Dhabi. From campus networks and classroom AV to CCTV, biometric attendance, visitor management, cybersecurity, and IT AMC support, our local engineers build reliable technology environments around the academic calendar.", cta: "Get a free education IT consultation", badges: ["ADMCC certified engineers", "Campus-wide network specialists", "2,000+ happy clients", "Abu Dhabi based team"] },
    highlights: [{ value: "Campus", label: "wide network planning" }, { value: "Secure", label: "student and staff data" }, { value: "Term", label: "aware IT support" }, { value: "Local", label: "Abu Dhabi engineers" }],
    challengesTitle: "IT challenges facing education institutions in Abu Dhabi",
    challengesIntro: "Schools and training centres combine high device density, strict safeguarding responsibilities, sensitive records, and a teaching day that gives little room for downtime.",
    challenges: [
      { title: "Campus-wide connectivity must reach every classroom", description: "WiFi and wired connectivity must serve classrooms, labs, libraries, and administration consistently. A dead zone can stop a lesson that depends on digital learning tools." },
      { title: "Student and staff data requires careful protection", description: "Student records, attendance data, health information, and staff records require layered cybersecurity, controlled access, backup, and recovery." },
      { title: "IT downtime has zero tolerance during the school day", description: "Network, teaching, exam, CCTV, and access-control failures directly interrupt education and safeguarding, making planned maintenance and fast response essential." },
    ],
    solutionTitle: "How XOFOZ delivers complete IT solutions for education institutions",
    solutionParagraphs: ["XOFOZ designs education technology around the operational reality of a campus: reliable networks reaching every learning space, safeguarding-aware CCTV and access control, attendance systems, cybersecurity, classroom AV, and managed support.", "Each engagement starts with a campus survey and academic-calendar plan, so infrastructure is designed for real device density and disruptive work is scheduled during suitable holiday windows wherever possible."],
    services: [
      { title: "IT AMC and support", description: "Proactive coverage structured around term dates, holiday maintenance windows, and urgent support during teaching hours.", href: "/services/it-amc-abu-dhabi" },
      { title: "Campus networks and WiFi", description: "Full-campus wired and wireless design for classrooms, labs, shared spaces, and administration.", href: "/services/network-infrastructure-abu-dhabi" },
      { title: "CCTV and access control", description: "Safeguarding-focused surveillance and controlled access covering entry points, shared areas, and perimeter.", href: "/services/cctv-access-control-abu-dhabi" },
      { title: "Biometric attendance", description: "Reliable staff attendance and appropriate campus attendance workflows using biometric systems.", href: "/services/biometric-systems-abu-dhabi" },
      { title: "Cybersecurity", description: "Layered protection for records, administrative systems, users, devices, email, and campus networks.", href: "/services/cybersecurity-solutions-abu-dhabi" },
      { title: "Microsoft 365", description: "Secure email, Teams, SharePoint, identity, and document management for teaching and administration.", href: "/services/cloud-solutions-microsoft-365-abu-dhabi" },
      { title: "Classroom AV", description: "Presentation, collaboration, display, and audio systems for classrooms, halls, and training spaces.", href: "/services/hardware-av-solutions-abu-dhabi" },
      { title: "Structured cabling", description: "Documented campus cabling that supports current capacity and future expansion.", href: "/services/structured-cabling-abu-dhabi" },
    ],
    solutions: [
      { title: "Network solutions", description: "Campus WiFi and cabling engineered for high device density.", href: "/solutions/network-solutions" },
      { title: "Communication and LV/ELV", description: "CCTV, access, PA, and communication systems for safer campuses.", href: "/solutions/communication-lv" },
      { title: "Cybersecurity solutions", description: "Protection suited to sensitive student and staff information.", href: "/solutions/cybersecurity" },
      { title: "Microsoft Cloud", description: "Secure collaboration and document management across campus teams.", href: "/solutions/microsoft-cloud" },
    ],
    proof: { eyebrow: "Education delivery model", title: "Campus technology planned around the academic calendar", description: "Every engagement begins with a site survey covering learning spaces, current infrastructure, safeguarding requirements, device density, and term dates. Disruptive work is planned for holiday periods wherever possible, with responsive support during term time.", outcomes: ["Campus-wide coverage planning", "Safeguarding-aware infrastructure", "Term-time support readiness"] },
    reasons: [
      { title: "Campus-scale network experience", description: "Large-site network experience supports full-campus coverage and high device density." },
      { title: "Safeguarding-aware security", description: "CCTV and access control are planned around campus entry, shared spaces, and perimeter requirements." },
      { title: "Academic-calendar planning", description: "Maintenance and implementation can be structured around term dates and holiday windows." },
      { title: "Abu Dhabi based team", description: "Local engineers provide direct remote and on-site support when a campus needs it." },
    ],
    capabilities: ["Campus network design", "ADMCC-aligned CCTV", "Classroom AV", "Cybersecurity", "Microsoft 365", "IT AMC support"],
    faqs: [
      { question: "What IT services does XOFOZ provide for schools in Abu Dhabi?", answer: "XOFOZ provides campus networks and WiFi, CCTV and access control, biometric attendance, cybersecurity, IT AMC support, classroom AV, structured cabling, and Microsoft 365 for schools and training institutions." },
      { question: "Can maintenance be scheduled around school terms?", answer: "Yes. Disruptive work can be planned during school holidays wherever possible, with responsive support arrangements during term time." },
      { question: "Does XOFOZ install safeguarding-focused CCTV?", answer: "XOFOZ installs CCTV and access control to applicable Abu Dhabi requirements, with coverage planned around entry points, corridors, shared spaces, and perimeter." },
      { question: "How is student and staff data protected?", answer: "Protection can combine firewall, endpoint, email, identity, access, backup, and recovery controls configured around the institution's environment." },
      { question: "Can XOFOZ design WiFi for an entire campus?", answer: "Yes. The process begins with a survey of buildings, classrooms, device density, materials, and usage patterns before access-point placement is designed and tested." },
    ],
    consultation: { title: "Get a free IT consultation for your education institution", description: "Tell us about your campus, users, current systems, safeguarding priorities, and academic calendar. XOFOZ will recommend a practical next step.", organisationLabel: "Institution name", scaleLabel: "Students, staff, and campus size", requirementsLabel: "Tell us about your education IT requirements" },
  },
  {
    slug: "government",
    label: "Government",
    navLabel: "Government",
    image: "/industries/government-hero.webp",
    metaTitle: "IT Solutions for Government Abu Dhabi | XOFOZ",
    metaDescription: "XOFOZ provides IT solutions for government entities and public sector organisations in Abu Dhabi, UAE. Network, cybersecurity, CCTV, and IT AMC by ADMCC certified engineers.",
    hero: { eyebrow: "IT solutions for government entities in Abu Dhabi, UAE — since 2022", title: "IT solutions for government in Abu Dhabi", summary: "XOFOZ provides IT solutions for government entities and public sector organisations in Abu Dhabi. From compliant CCTV and access control to documented network infrastructure, cybersecurity, backup, Microsoft 365, and structured IT support, our engineers deliver accountable technology environments.", cta: "Get a free government IT consultation", badges: ["ADMCC certified engineers", "Full project documentation", "2,000+ happy clients", "Abu Dhabi based team"] },
    highlights: [{ value: "Documented", label: "infrastructure delivery" }, { value: "Secure", label: "layered architecture" }, { value: "ADMCC", label: "certified engineers" }, { value: "Local", label: "accountable delivery" }],
    challengesTitle: "IT challenges facing government and public sector entities",
    challengesIntro: "Public-sector environments require stronger documentation, security, procurement discipline, and delivery accountability than typical commercial operations.",
    challenges: [
      { title: "Documentation must be complete and audit-ready", description: "Network diagrams, configuration records, compliance certificates, and system documentation need to be delivered and maintained for authorised review." },
      { title: "Security standards are higher and non-negotiable", description: "Sensitive operational and citizen-adjacent information requires cybersecurity to be designed for the environment from the outset." },
      { title: "Procurement demands reliable accountability", description: "Formal scopes, delivery timelines, service expectations, documentation, and a clear accountable contact are essential throughout the engagement." },
    ],
    solutionTitle: "How XOFOZ delivers IT solutions for government entities",
    solutionParagraphs: ["XOFOZ delivers documented infrastructure and support for public-sector and government-adjacent organisations, including CCTV and access control, network infrastructure, layered cybersecurity, data protection, cloud platforms, and structured IT support.", "Documentation, testing, compliance evidence, and named accountability are built into the project approach rather than treated as optional additions after installation."],
    services: [
      { title: "IT AMC", description: "Structured coverage with proactive maintenance, clear scope, documentation, and accountable support.", href: "/services/it-amc-abu-dhabi" },
      { title: "CCTV and access control", description: "Compliant surveillance and access systems with supporting installation documentation.", href: "/services/cctv-access-control-abu-dhabi" },
      { title: "Cybersecurity", description: "Firewall, endpoint, identity, email, and monitoring controls for higher-sensitivity environments.", href: "/services/cybersecurity-solutions-abu-dhabi" },
      { title: "Network infrastructure", description: "Documented cabling, switching, routing, WiFi, segmentation, and secure connectivity.", href: "/services/network-infrastructure-abu-dhabi" },
      { title: "Data backup and protection", description: "Backup, recovery, retention, and continuity planning for important operational data.", href: "/services/data-backup-recovery-abu-dhabi" },
      { title: "Microsoft 365", description: "Secure collaboration, identity, access, migration, and administrative platforms.", href: "/services/cloud-solutions-microsoft-365-abu-dhabi" },
    ],
    solutions: [
      { title: "Cybersecurity solutions", description: "Layered protection for higher-sensitivity environments.", href: "/solutions/cybersecurity" },
      { title: "Communication and LV/ELV", description: "Documented CCTV and access infrastructure.", href: "/solutions/communication-lv" },
      { title: "Network solutions", description: "Documented network infrastructure supporting audit and maintenance.", href: "/solutions/network-solutions" },
      { title: "Data backup and protection", description: "Recovery planning for operations where availability is critical.", href: "/solutions/data-backup" },
    ],
    proof: { eyebrow: "Government delivery model", title: "Formal scope, complete documentation, and one accountable team", description: "Each engagement begins with formal scoping of security, compliance, documentation, procurement, and operational requirements. XOFOZ supplies system records designed for authorised review and future maintenance.", outcomes: ["Audit-ready documentation", "Defined delivery accountability", "Security-led architecture"] },
    reasons: [
      { title: "Documentation as standard", description: "Network diagrams, configuration records, and relevant certificates form part of the engagement." },
      { title: "ADMCC certified engineers", description: "Surveillance and ELV work is delivered with the applicable Abu Dhabi compliance documentation." },
      { title: "Security-led architecture", description: "Layered network, endpoint, and identity controls are designed for higher-sensitivity environments." },
      { title: "Direct local accountability", description: "Abu Dhabi-based engineers and a named point of contact support clear project ownership." },
    ],
    capabilities: ["Project documentation", "Network architecture", "Cybersecurity", "CCTV and access", "Backup and recovery", "Microsoft platforms"],
    faqs: [
      { question: "What IT services does XOFOZ provide for public-sector entities?", answer: "XOFOZ can provide structured IT support, CCTV and access control, cybersecurity, documented networks, backup and recovery, and Microsoft 365 environments for public-sector and government-adjacent organisations." },
      { question: "Does XOFOZ provide documentation for audit purposes?", answer: "Yes. Project scope can include network diagrams, system configuration records, and applicable compliance documentation for authorised review." },
      { question: "Is XOFOZ ADMCC certified for CCTV installation?", answer: "XOFOZ states that its engineers are ADMCC certified and delivers CCTV and ELV work with applicable supporting documentation." },
      { question: "Can XOFOZ support higher-sensitivity IT environments?", answer: "XOFOZ can design layered network, endpoint, identity, email, backup, and monitoring controls around the specific assessed requirements." },
      { question: "Can XOFOZ work with formal procurement processes?", answer: "XOFOZ can work within formal scopes and service frameworks with defined deliverables, documentation, timelines, and accountable contacts." },
    ],
    consultation: { title: "Get a free IT consultation for your government entity", description: "Share your security, documentation, infrastructure, and procurement requirements. XOFOZ will assess the scope and provide a clear next step.", organisationLabel: "Entity or department name", scaleLabel: "Sites, users, and operational scope", requirementsLabel: "Tell us about your public-sector IT requirements" },
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    navLabel: "Healthcare",
    image: "/industries/healthcare-hero.webp",
    metaTitle: "IT Solutions for Healthcare Abu Dhabi | XOFOZ",
    metaDescription: "XOFOZ provides IT solutions for clinics, medical centres, and healthcare facilities in Abu Dhabi, UAE. Network, cybersecurity, CCTV, biometric attendance, and IT AMC by certified engineers.",
    hero: { eyebrow: "IT solutions for healthcare facilities in Abu Dhabi, UAE — since 2022", title: "IT solutions for healthcare in Abu Dhabi", summary: "XOFOZ provides IT solutions for clinics, medical centres, and healthcare facilities in Abu Dhabi. From reliable networks and cybersecurity to CCTV, biometric attendance, backup, Microsoft 365, and responsive IT support, our engineers help keep patient-facing systems available and sensitive information protected.", cta: "Get a free healthcare IT consultation", badges: ["ADMCC certified engineers", "Patient data protection focus", "2,000+ happy clients", "Abu Dhabi based team"] },
    highlights: [{ value: "Protected", label: "sensitive information" }, { value: "Reliable", label: "patient-facing systems" }, { value: "Secure", label: "controlled accessibility" }, { value: "Local", label: "responsive support" }],
    challengesTitle: "IT challenges facing healthcare facilities in Abu Dhabi",
    challengesIntro: "Clinics and medical centres rely on technology where availability, access control, and data protection have a direct effect on patient operations and trust.",
    challenges: [
      { title: "Sensitive information requires layered protection", description: "Medical, identity, appointment, and administrative information requires carefully scoped security, permissions, backup, and recovery." },
      { title: "Patient-facing systems must remain reliable", description: "Failures affecting appointments, reception, communications, or record access can disrupt care delivery during clinic hours." },
      { title: "Facilities need security and controlled accessibility", description: "CCTV and access control must protect sensitive areas while supporting efficient movement for patients, clinical teams, and support staff." },
    ],
    solutionTitle: "How XOFOZ delivers IT solutions for healthcare facilities",
    solutionParagraphs: ["XOFOZ plans clinic and medical-centre infrastructure around patient-facing availability and sensitive-information protection: reliable networks, layered cybersecurity, CCTV and access control, staff attendance, backup, Microsoft platforms, and managed support.", "The assessment identifies systems with the highest uptime and data-sensitivity requirements, allowing architecture, monitoring, recovery, and support priorities to be aligned with clinic operating hours."],
    services: [
      { title: "IT AMC", description: "Proactive coverage and responsive support aligned with patient-facing operating hours.", href: "/services/it-amc-abu-dhabi" },
      { title: "Cybersecurity", description: "Firewall, endpoint, identity, email, and data controls for sensitive healthcare information.", href: "/services/cybersecurity-solutions-abu-dhabi" },
      { title: "Network infrastructure", description: "Reliable connectivity for reception, appointments, administration, and clinical-support systems.", href: "/services/network-infrastructure-abu-dhabi" },
      { title: "CCTV and access control", description: "Security designed around sensitive areas and the accessibility patients and staff require.", href: "/services/cctv-access-control-abu-dhabi" },
      { title: "Biometric attendance", description: "Accurate workforce attendance across reception, clinical, and support shifts.", href: "/services/biometric-systems-abu-dhabi" },
      { title: "Backup and recovery", description: "Protected and recoverable administrative and patient-adjacent information.", href: "/services/data-backup-recovery-abu-dhabi" },
      { title: "Microsoft 365", description: "Secure collaboration and administration with appropriately scoped access controls.", href: "/services/cloud-solutions-microsoft-365-abu-dhabi" },
    ],
    solutions: [
      { title: "Cybersecurity solutions", description: "Layered protection suited to sensitive healthcare information.", href: "/solutions/cybersecurity" },
      { title: "Network solutions", description: "Reliable connectivity for patient-facing and administrative systems.", href: "/solutions/network-solutions" },
      { title: "Communication and LV/ELV", description: "CCTV and access control balancing security with accessibility.", href: "/solutions/communication-lv" },
      { title: "Data backup and protection", description: "Backup and continuity planning for critical records and systems.", href: "/solutions/data-backup" },
    ],
    proof: { eyebrow: "Healthcare delivery model", title: "Technology priorities aligned with patient-facing operations", description: "Each engagement identifies the systems that carry the greatest uptime and information-protection requirements. Network, security, monitoring, recovery, and support are then planned around clinic operating hours and real operational impact.", outcomes: ["Patient-facing uptime priorities", "Sensitive-data protection", "Clinic-hours support planning"] },
    reasons: [
      { title: "Security for sensitive information", description: "Layered controls are scoped around the sensitivity of medical, identity, and administrative information." },
      { title: "ADMCC certified engineers", description: "CCTV and access systems are planned for applicable Abu Dhabi compliance and facility access needs." },
      { title: "Patient-hours response planning", description: "Support arrangements recognise the operational impact of system downtime during clinic hours." },
      { title: "Abu Dhabi based team", description: "Local engineers provide direct accountability and on-site capability when required." },
    ],
    capabilities: ["Healthcare networks", "Cybersecurity", "CCTV and access", "Biometric attendance", "Backup and recovery", "Microsoft 365"],
    faqs: [
      { question: "What IT services does XOFOZ provide for clinics?", answer: "XOFOZ provides managed support, cybersecurity, networks, CCTV and access control, biometric attendance, backup and recovery, and Microsoft 365 for clinics and medical centres." },
      { question: "How does XOFOZ protect sensitive healthcare information?", answer: "Protection can combine firewall, endpoint, identity, access, email, data-loss-prevention, backup, and recovery controls configured around the assessed environment." },
      { question: "Can XOFOZ provide responsive support during clinic hours?", answer: "Yes. Support scope and response expectations can be structured around clinic operating hours and documented in the service agreement." },
      { question: "Does XOFOZ install CCTV and access control for healthcare facilities?", answer: "Yes. Systems can be designed to protect sensitive areas while maintaining practical accessibility for patients and authorised staff." },
      { question: "Can XOFOZ manage attendance for multi-shift teams?", answer: "Yes. Biometric attendance systems can support reception, clinical, and support teams working across multiple shifts." },
    ],
    consultation: { title: "Get a free IT consultation for your healthcare facility", description: "Tell us about your facility, operating hours, users, systems, security priorities, and support requirements. XOFOZ will recommend a practical next step.", organisationLabel: "Facility name", scaleLabel: "Staff, sites, and operating hours", requirementsLabel: "Tell us about your healthcare IT requirements" },
  },
] as const;

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export const industryNavItems = industries.map((industry) => ({
  label: industry.navLabel,
  href: `/industries/${industry.slug}` as const,
}));

export const newServiceIndustryCards = [
  {
    title: "Education institutions",
    description: "Reliable campus networks, safeguarding-focused CCTV and access control, classroom technology, cybersecurity, and term-aware support for schools and training centres.",
    href: "/industries/education",
    linkLabel: "View education IT solutions",
  },
  {
    title: "Government and public sector",
    description: "Documented infrastructure, compliant surveillance, layered cybersecurity, protected data, and accountable local delivery for public-sector environments.",
    href: "/industries/government",
    linkLabel: "View government IT solutions",
  },
  {
    title: "Healthcare facilities",
    description: "Reliable patient-facing systems, sensitive-information protection, controlled access, backup, and responsive support for clinics and medical centres.",
    href: "/industries/healthcare",
    linkLabel: "View healthcare IT solutions",
  },
] as const;

export function resolveIndustryHref(title: string) {
  const normalized = title.toLowerCase();
  const industry = industries.find((item) => normalized.includes(item.label.toLowerCase()));
  return industry ? `/industries/${industry.slug}` : "/industries";
}
