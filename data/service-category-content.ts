import "server-only";

import { readFileSync } from "node:fs";
import path from "node:path";
import {
  getServiceCategoryBySlug,
  serviceCategories,
  toServiceAnchor,
  type ServiceCategoryDefinition,
} from "./service-categories";

export type ServiceCategoryCard = {
  id: string;
  name: string;
  icon: string;
  description: string;
  authorisedBrands: string[];
  regularBrands: string[];
};

export type ServiceCategoryReason = { title: string; description: string };
export type ServiceCategoryIndustry = { title: string; description: string; linkLabel: string };
export type ServiceCategoryFaq = { question: string; answer: string };

export type ServiceCategoryContent = {
  category: ServiceCategoryDefinition;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonical: string;
  breadcrumb: string;
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    badges: string[];
    cta: string;
    whatsapp: string;
    stats: string[];
  };
  overview: { title: string; paragraphs: string[] };
  cardsTitle: string;
  cardsIntro: string;
  cards: ServiceCategoryCard[];
  whyTitle: string;
  reasons: ServiceCategoryReason[];
  brands: string[];
  industriesTitle: string;
  industriesIntro: string;
  industries: ServiceCategoryIndustry[];
  faqTitle: string;
  faqs: ServiceCategoryFaq[];
  cta: { title: string; summary: string; whatsapp: string; fields: string[]; button: string };
  requiresClaimReview: true;
};

const labelPattern = [
  "Meta title",
  "Meta description",
  "URL slug",
  "Focus keyword",
  "Secondary keywords",
  "Schema types",
  "Eyebrow text",
  "H1",
  "H2",
  "AEO EXTRACTION ZONE — Subheadline",
  "Subheadline",
  "Subline",
  "Hero badge \\d+",
  "CTA \\d+",
  "Stat \\d+",
  "Paragraph(?: \\d+)?",
  "Intro line",
  "Name",
  "Named clients",
  "Icon",
  "H3",
  "SEO description",
  "Authorised brands",
  "Regular brands",
  "Enquire button",
  "Content",
  "Link",
  "Brand list",
  "FAQ \\d+ — Question",
  "FAQ \\d+ — Answer",
  "WhatsApp CTA",
  "Form field \\d+",
  "Submit button",
  "Form button",
  "NAP address",
  "NAP phone",
  "NAP WhatsApp",
  "NAP email",
  "NAP hours",
  "NAP — Address",
  "NAP — Phone",
  "NAP — WhatsApp",
  "NAP — Email",
  "NAP — Hours",
].join("|");

let cache: Map<string, ServiceCategoryContent> | undefined;

function normalizeSource(value: string) {
  return value
    .replaceAll("\u200b", "")
    .replaceAll("\f", "")
    .replaceAll("\r", "")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n");
}

function clean(value = "") {
  return value
    .replaceAll("\u200b", "")
    .replaceAll("\f", " ")
    .replaceAll("\\+", "+")
    .replaceAll("\\&", "&")
    .replaceAll("\\.", ".")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function field(block: string, label: string) {
  const match = block.match(
    new RegExp(
      `(?:^|\\n)\\s*${escapeRegExp(label)}:\\s*([\\s\\S]*?)(?=\\n\\s*(?:${labelPattern}):|\\n\\s*(?:SECTION \\d+ —|TRUST STRIP|BREADCRUMB|DEVELOPER NOTES?|FAQPage schema|Service schema|BreadcrumbList schema|LocalBusiness schema|FOOTER|Card \\d+:|={5,})|$)`,
      "i",
    ),
  );
  return clean(match?.[1]);
}

function section(block: string, number: number) {
  const startMatch = new RegExp(`(?:^|\\n)SECTION ${number} —[^\\n]*`, "i").exec(block);
  if (!startMatch) return "";
  const start = startMatch.index;
  const nextMatch = new RegExp(`(?:^|\\n)SECTION ${number + 1} —[^\\n]*`, "i").exec(block.slice(start + 1));
  return block.slice(start, nextMatch ? start + 1 + nextMatch.index : block.length);
}

function splitEntries(block: string, marker: RegExp) {
  const matches = [...block.matchAll(marker)];
  return matches.map((match, index) => {
    const start = (match.index ?? 0) + match[0].length;
    const end = matches[index + 1]?.index ?? block.length;
    return block.slice(start, end);
  });
}

function brands(value: string) {
  if (!value || value === "—") return [];
  return value.split(/\s+[—·]\s+/).map(clean).filter(Boolean);
}

function brandList(block: string) {
  const match = block.match(/(?:^|\n)\s*Brand list:\s*([\s\S]*?)(?=\n\s*={5,}|$)/i);
  if (!match) return [];
  return match[1]
    .split("\n")
    .map((line) => clean(line).split(/\s+—\s+/)[0])
    .filter(Boolean);
}

function parseBlock(category: ServiceCategoryDefinition, block: string): ServiceCategoryContent {
  const heroSection = section(block, 1);
  const overviewSection = section(block, 2);
  const cardsSection = section(block, 3);
  const whySection = section(block, 4);
  const industriesSection = section(block, 5);
  const faqSection = section(block, 6);
  const ctaSection = section(block, 7);

  const cards = splitEntries(cardsSection, /(?:^|\n)\s*Card \d+:\s*/gi)
    .map((entry) => {
      const name = field(entry, "H3");
      return {
        id: toServiceAnchor(name),
        name,
        icon: field(entry, "Icon"),
        description: field(entry, "SEO description"),
        authorisedBrands: brands(field(entry, "Authorised brands")),
        regularBrands: brands(field(entry, "Regular brands")),
      };
    })
    .filter((card) => card.name && card.description);

  const reasons = splitEntries(whySection, /(?:^|\n)\s*H3:\s*/gi)
    .map((entry) => ({ title: clean(entry.split(/\n\s*Content:/i)[0]), description: field(`\nContent:${entry.split(/\n\s*Content:/i).slice(1).join("\nContent:")}`, "Content") }))
    .filter((reason) => reason.title && reason.description);

  const industries = splitEntries(industriesSection, /(?:^|\n)\s*Industry \d+:\s*/gi)
    .map((entry) => ({
      title: field(entry, "Name"),
      description: field(entry, "Content"),
      linkLabel: field(entry, "Link"),
    }))
    .filter((industry) => industry.title && industry.description);

  const questionMatches = [...faqSection.matchAll(/(?:^|\n)\s*FAQ \d+ — Question:\s*/gi)];
  const faqs = questionMatches
    .map((match, index) => {
      const start = (match.index ?? 0) + match[0].length;
      const end = questionMatches[index + 1]?.index ?? faqSection.length;
      const entry = faqSection.slice(start, end);
      const [question, ...answerParts] = entry.split(/\n\s*FAQ \d+ — Answer:\s*/i);
      return { question: clean(question), answer: clean(answerParts.join(" ").replace(/={5,}[\s\S]*$/, "")) };
    })
    .filter((faq) => faq.question && faq.answer);

  const badges = [1, 2, 3, 4].map((index) => field(heroSection, `Hero badge ${index}`)).filter(Boolean);
  const stats = [1, 2, 3, 4].map((index) => field(heroSection, `Stat ${index}`)).filter(Boolean);
  const formFields = [1, 2, 3, 4, 5, 6].map((index) => field(ctaSection, `Form field ${index}`)).filter(Boolean);
  const slugValue = field(block, "URL slug").replace(/^\//, "").replace(/\/$/, "");
  const overviewParagraphs = [field(overviewSection, "Paragraph"), field(overviewSection, "Paragraph 1"), field(overviewSection, "Paragraph 2")].filter(Boolean);

  return {
    category,
    metaTitle: field(block, "Meta title"),
    metaDescription: field(block, "Meta description"),
    focusKeyword: field(block, "Focus keyword"),
    canonical: slugValue ? `/${slugValue}` : `/services/${category.slug}`,
    breadcrumb: field(block, "Breadcrumb").split("›").at(-1)?.trim() || category.label,
    hero: {
      eyebrow: field(heroSection, "Eyebrow text"),
      title: field(heroSection, "H1"),
      summary: field(heroSection, "AEO EXTRACTION ZONE — Subheadline") || field(heroSection, "Subheadline"),
      badges,
      cta: field(heroSection, "CTA 1") || "Get a free consultation",
      whatsapp: field(heroSection, "CTA 2") || "WhatsApp us now",
      stats,
    },
    overview: { title: field(overviewSection, "H2"), paragraphs: overviewParagraphs },
    cardsTitle: field(cardsSection, "H2"),
    cardsIntro: field(cardsSection, "Intro line"),
    cards,
    whyTitle: field(whySection, "H2"),
    reasons,
    brands: brandList(whySection),
    industriesTitle: field(industriesSection, "H2"),
    industriesIntro: field(industriesSection, "Intro line"),
    industries,
    faqTitle: field(faqSection, "H2"),
    faqs,
    cta: {
      title: field(ctaSection, "H2"),
      summary: field(ctaSection, "Subline"),
      whatsapp: field(ctaSection, "WhatsApp CTA"),
      fields: formFields,
      button: field(ctaSection, "Submit button") || field(ctaSection, "Form button") || "Get a free consultation",
    },
    requiresClaimReview: true,
  };
}

function loadContent() {
  if (cache) return cache;
  const source = normalizeSource(
    readFileSync(path.join(process.cwd(), "public", "plan", "XOFOZ_PDF_EXTRACT.txt"), "utf8"),
  );
  const servicesStart = source.lastIndexOf("SERVICES UPDATED");
  const starts = serviceCategories.map((category) => source.indexOf(category.sourceHeading, servicesStart));

  cache = new Map();
  serviceCategories.forEach((category, index) => {
    const start = starts[index];
    const nextStart = starts[index + 1] ?? source.length;
    const block = start >= 0 ? source.slice(start, nextStart) : "";
    cache?.set(category.slug, parseBlock(category, block));
  });
  return cache;
}

export function getServiceCategoryContent(slug: string) {
  if (!getServiceCategoryBySlug(slug)) return undefined;
  return loadContent().get(slug);
}

export function getServiceCategoryContentReport() {
  return [...loadContent().values()].map((content) => ({
    slug: content.category.slug,
    cards: content.cards.length,
    expectedCards: content.category.expectedSubServiceCount,
    reasons: content.reasons.length,
    industries: content.industries.length,
    faqs: content.faqs.length,
    complete: Boolean(
      content.metaTitle &&
      content.metaDescription &&
      content.hero.title &&
      content.overview.title &&
      content.cards.length === content.category.expectedSubServiceCount &&
      content.reasons.length &&
      content.industries.length &&
      content.faqs.length &&
      content.cta.title
    ),
  }));
}
