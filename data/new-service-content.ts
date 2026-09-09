const page = (title: string, keyword: string, summary: string, overview: string, inclusions: string[], industries: string[]) => {
  const fields: Record<string, string> = {
    "META TITLE": `${title} Abu Dhabi | XOFOZ`,
    "META DESCRIPTION": `${summary} XOFOZ provides practical, locally supported services for businesses in Abu Dhabi.`,
    "URL SLUG": title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    "FOCUS KEYWORD": keyword,
    "BREADCRUMB": `Home › Services › ${title}`,
    "HERO — EYEBROW TEXT": `${keyword} in Abu Dhabi`,
    "HERO — H1": `${title} for Abu Dhabi businesses`,
    "HERO — SUBHEADLINE": summary,
    "HERO — CTA 1": "Request a consultation",
    "HERO — CTA 2": "WhatsApp XOFOZ",
    "SECTION 1 — H2": `A practical approach to ${title.toLowerCase()}`,
    "SECTION 1 — PARAGRAPH 1": overview,
    "SECTION 1 — PARAGRAPH 2": "XOFOZ assesses the environment first, explains the available options clearly, and coordinates the work around your operational requirements.",
    "SECTION 1 — COMPARISON BOX LEFT HEADING": "With a planned service",
    "SECTION 1 — COMPARISON BOX LEFT CONTENT": "Clear scope | Documented work | Local support | Practical next steps",
    "SECTION 1 — COMPARISON BOX RIGHT HEADING": "Without the right support",
    "SECTION 1 — COMPARISON BOX RIGHT CONTENT": "Unclear ownership | Avoidable downtime | Inconsistent records | Delayed response",
    "SECTION 2 — H2": `When ${title.toLowerCase()} becomes urgent`,
    "SECTION 2 — INTRO LINE": "A structured assessment helps reduce disruption and gives your team a clear path forward.",
    "SECTION 3 — H2": "What the service can include",
    "SECTION 3 — INTRO LINE": "A focused scope that can be adapted to your systems, users, and operational priorities.",
    "SECTION 3 — CUSTOM PLAN BOX HEADING": "A plan shaped around your environment",
    "SECTION 3 — CUSTOM PLAN BOX CONTENT": "We review what you have today, identify the practical next steps, and deliver the agreed service with clear communication and useful handover information.",
    "SECTION 3 — CUSTOM PLAN BOX CTA": "Discuss your requirement",
    "SECTION 4 — H2": "How XOFOZ delivers the work",
    "SECTION 5 — H2": `Why choose XOFOZ for ${title.toLowerCase()}`,
    "SECTION 6 — H2": `${title} across Abu Dhabi industries`,
    "SECTION 7 — H2": `${title} — frequently asked questions`,
    "SECTION 8 — H2": "Built around you",
    "SECTION 8 — CLIENT SECTOR": "Service approach",
    "SECTION 8 — CLIENT NAME": "Practical support, clearly delivered",
    "SECTION 8 — CLIENT TRUST CONTENT": "Every requirement is different. We shape the assessment, delivery plan, and handover around your systems, users, operational priorities, and continuity needs.",
    "SECTION 8 — STAT 1": "01 · Assess",
    "SECTION 8 — STAT 2": "02 · Plan",
    "SECTION 8 — STAT 3": "03 · Deliver",
    "SECTION 9 — H2": "Related XOFOZ services",
    "SECTION 10 — H2": `Request a ${title.toLowerCase()} consultation`,
    "SECTION 10 — FORM FIELD 1": "Your name",
    "SECTION 10 — FORM FIELD 2": "Company name",
    "SECTION 10 — FORM FIELD 3": "Phone number",
    "SECTION 10 — FORM FIELD 4": "Service required",
    "SECTION 10 — FORM FIELD 5": "Tell us about your requirement",
    "SECTION 10 — FORM FIELD 6": "Preferred contact method",
    "SECTION 10 — FORM BUTTON": "Send enquiry",
    "SECTION 10 — WHATSAPP CTA": "Start a WhatsApp enquiry",
    "SECTION 10 — NAP PHONE": "026 220 071",
    "SECTION 10 — NAP WHATSAPP": "0528209231",
    "SECTION 10 — NAP EMAIL": "hello@xofoz.com",
    "SECTION 10 — NAP HOURS": "Monday to Saturday — 8:30 AM to 6:30 PM",
  };
  ["Managed IT Support", "Cybersecurity Solutions", "Cloud Services"].forEach((item, index) => {
    fields[`SECTION 9 — RELATED SERVICE ${index + 1} — H3`] = item;
    fields[`SECTION 9 — RELATED SERVICE ${index + 1} — CONTENT`] = `Explore how XOFOZ can support your wider ${item.toLowerCase()} requirements.`;
    fields[`SECTION 9 — RELATED SERVICE ${index + 1} — LINK`] = `View ${item}`;
  });
  inclusions.forEach((item, index) => { fields[`SECTION 3 — INCLUSION ${index + 1}`] = item; });
  ["Assess the current environment", "Plan the work and confirm the scope", "Implement, test, and hand over"].forEach((item, index) => {
    fields[`SECTION 4 — STEP ${index + 1} — H3`] = item;
    fields[`SECTION 4 — STEP ${index + 1} — CONTENT`] = index === 0 ? "We review the requirement, existing systems, risks, and constraints." : index === 1 ? "We provide a practical sequence, dependencies, and clear responsibilities before work begins." : "We complete the agreed work, validate the outcome, and share useful handover information.";
  });
  ["Abu Dhabi-based technical support", "Clear scope and documented delivery", "Practical recommendations suited to your environment"].forEach((item, index) => {
    fields[`SECTION 5 — DIFFERENTIATOR ${index + 1} — H3`] = item;
    fields[`SECTION 5 — DIFFERENTIATOR ${index + 1} — CONTENT`] = "Our team keeps the recommendation focused on your operational requirement, available systems, and long-term maintainability.";
  });
  industries.forEach((item, index) => { fields[`SECTION 6 — INDUSTRY ${index + 1} — H3`] = item; fields[`SECTION 6 — INDUSTRY ${index + 1} — CONTENT`] = `We adapt ${title.toLowerCase()} planning and support to the working environment, users, and continuity requirements of ${item.toLowerCase()}.`; fields[`SECTION 6 — INDUSTRY ${index + 1} — LINK`] = `View ${item.toLowerCase()} solutions`; });
  ["What does the initial assessment include?", "Can the service be planned around our working hours?", "Will we receive documentation after the work?"].forEach((q, index) => { fields[`SECTION 7 — FAQ ${index + 1} — QUESTION`] = q; fields[`SECTION 7 — FAQ ${index + 1} — ANSWER`] = "The scope depends on your systems and requirement. XOFOZ confirms the assessment, schedule, deliverables, and handover details before implementation."; });
  return fields;
};

export const newServiceContent: Record<string, Record<string, string>> = {
  "chip-level-repair-abu-dhabi": page("Chip-Level Repair", "chip-level repair", "Component-level electronics diagnosis and repair for business devices when standard replacement is not the only practical option.", "Chip-level repair examines the board and component fault rather than assuming that a complete device replacement is required.", ["Board-level diagnostics", "Component inspection and repair", "Device fault assessment", "Testing and handover"], ["Offices", "Retail businesses", "Hospitality", "Industrial operations"]),
  "data-recovery-abu-dhabi": page("Data Recovery", "data recovery", "Professional data recovery assessment for failed drives, storage devices, servers, and business-critical files.", "Data recovery begins with a careful assessment of the device, symptoms, and recovery conditions so that the next step is informed and controlled.", ["Initial media assessment", "Drive and storage diagnostics", "Business file recovery", "Recovery planning and handover"], ["Professional offices", "Construction", "Hospitality", "Logistics"]),
  "adhics-compliance-services-abu-dhabi": page("ADHICS Compliance Services", "ADHICS compliance services", "Technical support for healthcare organisations reviewing systems, documentation, access controls, and operational readiness against applicable ADHICS requirements.", "Healthcare compliance readiness requires an accurate view of clinical systems, policies, access, records, and the actions needed to close identified gaps.", ["Readiness assessment", "Technical controls review", "Documentation support", "Remediation planning"], ["Hospitals", "Clinics", "Medical centres", "Diagnostic laboratories", "Healthcare groups"]),
  "malaffi-integration-abu-dhabi": page("Malaffi Integration", "Malaffi integration", "Technical planning and integration support for healthcare environments connecting systems and data workflows with Malaffi requirements.", "Malaffi-related integration work needs careful coordination between healthcare applications, infrastructure, security, and the responsible stakeholders.", ["Integration discovery", "Infrastructure and connectivity review", "Secure data-flow planning", "Testing and technical handover"], ["Hospitals", "Clinics", "Medical centres", "Healthcare groups"]),
  "aws-cloud-services-abu-dhabi": page("AWS Cloud Services", "AWS cloud services", "AWS cloud planning, migration, configuration, and ongoing technical support for businesses in Abu Dhabi.", "AWS can provide flexible infrastructure for workloads that need scalable compute, storage, backup, hosting, or resilient access across locations.", ["AWS environment assessment", "Cloud migration planning", "Compute and storage configuration", "Backup, monitoring, and support"], ["Professional offices", "E-commerce", "Construction", "Growing businesses"]),
};
