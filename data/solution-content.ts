import "server-only";

import { readFileSync } from "node:fs";
import path from "node:path";
import { getSolutionBySlug, solutions, type SolutionDefinition } from "./solutions";

export type SolutionCard = { name: string; description: string };
export type SolutionReason = { title: string; description: string };
export type SolutionIndustry = { title: string; description: string; linkLabel: string };
export type SolutionFaq = { question: string; answer: string };

export type SolutionContent = {
  solution: SolutionDefinition;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonical: string;
  breadcrumb: string;
  hero: { eyebrow: string; title: string; summary: string; cta: string; whatsapp: string; stats: string[] };
  overview: { title: string; paragraphs: string[] };
  cards: SolutionCard[];
  cardsTitle: string;
  cardsIntro: string;
  whyTitle: string;
  reasons: SolutionReason[];
  brands: string[];
  industriesTitle: string;
  industriesIntro: string;
  industries: SolutionIndustry[];
  faqTitle: string;
  faqs: SolutionFaq[];
  cta: { title: string; summary: string; whatsapp: string; fields: string[]; button: string };
};

let cache: Map<string, SolutionContent> | undefined;

function clean(value = "") {
  return value.trim().replaceAll("\\+", "+").replaceAll("\\&", "&").replaceAll("\\.", ".").replace(/\s{2,}/g, " ");
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function field(block: string, label: string) {
  const match = block.match(new RegExp(`(?:^|\\n)\\s*${escapeRegExp(label)}:\\s*(?:\\n\\s*)?([^\\n]+)`, "i"));
  return clean(match?.[1]);
}

function section(block: string, number: number) {
  const start = block.indexOf(`SECTION ${number} —`);
  if (start < 0) return "";
  const end = block.indexOf(`SECTION ${number + 1} —`, start + 10);
  return block.slice(start, end < 0 ? block.length : end);
}

function repeated(sectionText: string, pattern: RegExp) {
  return [...sectionText.matchAll(pattern)];
}

function parseBlock(solution: SolutionDefinition, block: string): SolutionContent {
  const heroSection = section(block, 1);
  const overviewSection = section(block, 2);
  const cardsSection = section(block, 3);
  const whySection = section(block, 4);
  const industriesSection = section(block, 5);
  const faqSection = section(block, 6);
  const ctaSection = section(block, 7);

  const cards = repeated(cardsSection, /Card \d+:\s*Name:\s*([^\n]+)\s*Description:\s*([\s\S]*?)\s*Button:/g)
    .map((match) => ({ name: clean(match[1]), description: clean(match[2]) }));
  const reasons = repeated(whySection, /H3:\s*([^\n]+)\s*Content:\s*([\s\S]*?)(?=\nH3:|\nCertifications and brand partnerships label:|$)/g)
    .map((match) => ({ title: clean(match[1]), description: clean(match[2]) }));
  const industries = repeated(industriesSection, /H3:\s*([^\n]+)\s*Content:\s*([\s\S]*?)\s*Link:\s*([^\n]+)/g)
    .map((match) => ({ title: clean(match[1]), description: clean(match[2]), linkLabel: clean(match[3]) }));
  const faqs = repeated(faqSection, /FAQ \d+ — Question:\s*([\s\S]*?)\s*FAQ \d+ — Answer:\s*([\s\S]*?)(?=\nFAQ \d+ — Question:|$)/g)
    .map((match) => ({ question: clean(match[1]), answer: clean(match[2].replace(/\\=+$/g, "")) }));
  const stats = [1, 2, 3, 4].map((index) => field(heroSection, `Stat ${index}`)).filter(Boolean);
  if (stats[2]?.toLowerCase().includes("solutions")) stats[2] = `${cards.length} — Solutions in category`;
  const formFields = [1, 2, 3, 4, 5, 6].map((index) => field(ctaSection, `Form field ${index}`)).filter(Boolean);
  const slugValue = field(block, "URL slug").replace(/^\//, "").replace(/\/$/, "");

  return {
    solution,
    metaTitle: field(block, "Meta title"),
    metaDescription: field(block, "Meta description"),
    focusKeyword: field(block, "Focus keyword"),
    canonical: slugValue ? `/${slugValue}` : `/solutions/${solution.slug}`,
    breadcrumb: field(block, "Breadcrumb").split("›").at(-1)?.trim() || solution.label,
    hero: {
      eyebrow: field(heroSection, "Eyebrow text"),
      title: field(heroSection, "H1"),
      summary: field(heroSection, "Subheadline"),
      cta: field(heroSection, "CTA 1") || "Get a free consultation",
      whatsapp: field(heroSection, "CTA 2") || "WhatsApp us now",
      stats,
    },
    overview: { title: field(overviewSection, "H2"), paragraphs: [field(overviewSection, "Paragraph 1"), field(overviewSection, "Paragraph 2")].filter(Boolean) },
    cards,
    cardsTitle: field(cardsSection, "H2"),
    cardsIntro: field(cardsSection, "Intro line"),
    whyTitle: field(whySection, "H2"),
    reasons,
    brands: field(whySection, "Brand list").split("·").map(clean).filter(Boolean),
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
      button: field(ctaSection, "Submit button") || "Get a free consultation",
    },
  };
}

function loadContent() {
  if (cache) return cache;
  const source = readFileSync(path.join(process.cwd(), "public", "plan", "XOFOZ.md"), "utf8");
  cache = new Map();
  const solutionStart = source.indexOf("# SOLUTIONS");
  const starts = solutions.map((solution) => source.indexOf(`# ${solution.sourceHeading}`, solutionStart));
  solutions.forEach((solution, index) => {
    const start = starts[index];
    const nextStart = starts.filter((position) => position > start).sort((a, b) => a - b)[0];
    const end = nextStart ?? source.indexOf("# Tab 32", start);
    const block = start >= 0 ? source.slice(start, end > start ? end : source.length) : "";
    cache?.set(solution.slug, parseBlock(solution, block));
  });
  return cache;
}

export function getSolutionContent(slug: string) {
  if (!getSolutionBySlug(slug)) return undefined;
  return loadContent().get(slug);
}

export function getSolutionContentReport() {
  return [...loadContent().values()].map((content) => ({
    slug: content.solution.slug,
    cards: content.cards.length,
    reasons: content.reasons.length,
    industries: content.industries.length,
    faqs: content.faqs.length,
    complete: Boolean(content.metaTitle && content.hero.title && content.overview.title && content.cards.length && content.faqs.length),
  }));
}
