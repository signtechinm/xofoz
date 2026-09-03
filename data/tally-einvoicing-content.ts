export const tallyEInvoicingUpdated = "September 2026";

export const eInvoicingBusinessTypes = [
  "Trading or import and export businesses in Mussafah or ICAD",
  "Retailers and supermarket chains across Abu Dhabi",
  "Construction and contracting firms working on capital projects",
  "Real estate and property management companies",
  "Clinics, healthcare providers, restaurants, and hospitality businesses",
  "Manufacturers, logistics companies, and professional services firms",
] as const;

export const eInvoicingTimeline = [
  { milestone: "Pilot programme and voluntary adoption begin", date: "1 July 2026" },
  { milestone: "ASP appointment deadline for businesses with annual revenue of at least AED 50 million", date: "30 October 2026" },
  { milestone: "Mandatory implementation for businesses with annual revenue of at least AED 50 million", date: "1 January 2027" },
  { milestone: "ASP appointment deadline for businesses with annual revenue below AED 50 million", date: "31 March 2027" },
  { milestone: "Mandatory implementation for businesses with annual revenue below AED 50 million", date: "1 July 2027" },
  { milestone: "Government entity ASP appointment and mandatory implementation", date: "31 March 2027 and 1 October 2027" },
] as const;

export const eInvoicingFeatures = [
  { title: "Company and Master Setup", description: "Configure company details, ledgers, stock items, voucher types, and the records required for UAE e-Invoicing." },
  { title: "Transaction Details", description: "Capture required e-Invoice information while recording sales, credit notes, debit notes, POS invoices, and other applicable transactions." },
  { title: "e-Invoice Review", description: "Review transaction information and e-Invoice details from within the accounting environment before progressing through the required exchange process." },
  { title: "UAE VAT 201 Workflow", description: "Support VAT 201 return download, reconciliation with the books, and clearer tracking of saved returns in TallyPrime 7.1." },
  { title: "Invoice Presentation", description: "Use current TallyPrime invoice presentation options, including supported Arabic and bilingual customer documents where appropriate." },
  { title: "Connected Accounting", description: "Maintain the accounting, banking, inventory, and reporting records that support a reliable e-Invoicing workflow." },
] as const;

export const eInvoicingSteps = [
  { title: "Readiness Assessment", description: "We review your TallyPrime version, invoice formats, TRN, trade licence details, and customer and supplier master data to identify preparation gaps." },
  { title: "ASP Requirement Guidance", description: "We explain where an Accredited Service Provider fits into the process and help coordinate your accounting-system preparation alongside your chosen ASP." },
  { title: "TallyPrime Upgrade and Configuration", description: "We check licensing and TSS status, update the environment where required, and configure the relevant company, master, voucher, and transaction information." },
  { title: "Testing and Onboarding Preparation", description: "We help prepare representative transactions and workflows so data or process issues can be addressed before your mandatory implementation date." },
  { title: "Staff Training", description: "Your accounts team learns how to capture, review, and manage e-Invoice information during normal daily work, on-site in Abu Dhabi or remotely." },
  { title: "Ongoing TallyPrime Support", description: "We support the TallyPrime environment as product capabilities and official technical requirements evolve. Regulated transmission remains the role of your accredited ASP." },
] as const;

export const eInvoicingFaqs = [
  { question: "Is e-Invoicing mandatory for businesses in Abu Dhabi?", answer: "The UAE Electronic Invoicing System applies nationwide, including Abu Dhabi, to in-scope business transactions. Mandatory implementation is phased by annual revenue, and specified exclusions can apply. Confirm your position using current Ministry of Finance guidance." },
  { question: "Do I need a new accounting system for e-Invoicing?", answer: "Not necessarily. TallyPrime 7.1 includes UAE e-Invoicing preparation capabilities. Your business will still need suitable configuration, accurate records, and an Accredited Service Provider when it falls within mandatory scope." },
  { question: "What is an ASP, and do I need to appoint one?", answer: "An Accredited Service Provider is approved by the UAE Ministry of Finance to support the regulated exchange and reporting of e-Invoice data. In-scope issuers and recipients must appoint an ASP by the deadline that applies to them." },
  { question: "When should an Abu Dhabi business start preparing?", answer: "Preparation should begin before the applicable appointment and implementation dates. Early review gives your team time to correct master data, update software, test processes, select an ASP, and train users without a last-minute rush." },
  { question: "Does UAE e-Invoicing apply to every industry?", answer: "The system broadly covers in-scope B2B and B2G transactions across industries. Certain activities and transactions are excluded, so each business should confirm its scope using current official guidance and professional advice where needed." },
  { question: "Can XOFOZ manage TallyPrime support and e-Invoicing readiness?", answer: "XOFOZ can assess, upgrade, configure, test, train, and support your TallyPrime environment. XOFOZ does not replace the Accredited Service Provider responsible for regulated invoice exchange and reporting." },
] as const;

export const eInvoicingSources = [
  { label: "UAE Ministry of Finance e-Invoicing portal", href: "https://mof.gov.ae/en/about-us/initiatives/einvoicing/" },
  { label: "UAE Accredited Service Providers", href: "https://mof.gov.ae/en/about-us/initiatives/einvoicing/einvoicing-accredited-service-providers-asps/" },
  { label: "TallyPrime UAE e-Invoicing guide", href: "https://help.tallysolutions.com/uae-e-invoicing-in-tallyprime/" },
] as const;

export const eInvoicingConsultationOptions = [
  "e-Invoicing readiness assessment",
  "TallyPrime upgrade and configuration",
  "Master data review",
  "ASP coordination support",
  "Workflow testing",
  "Staff training",
  "Ongoing TallyPrime support",
] as const;
