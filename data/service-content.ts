import "server-only";

import { readFileSync } from "node:fs";
import path from "node:path";
import { getServiceBySlug, services, type ServiceDefinition } from "./services";
import { serviceContentSupplements } from "./service-content-supplements";

export type ServiceContent = {
  service: ServiceDefinition;
  fields: Record<string, string>;
  complete: boolean;
  missingFields: string[];
};

const requiredFields = [
  "META TITLE",
  "META DESCRIPTION",
  "URL SLUG",
  "FOCUS KEYWORD",
  "BREADCRUMB",
  "HERO — EYEBROW TEXT",
  "HERO — H1",
  "HERO — SUBHEADLINE",
  "HERO — CTA 1",
  "HERO — CTA 2",
  "SECTION 1 — H2",
  "SECTION 2 — H2",
  "SECTION 3 — H2",
  "SECTION 4 — H2",
  "SECTION 5 — H2",
  "SECTION 6 — H2",
  "SECTION 7 — H2",
  "SECTION 8 — H2",
  "SECTION 9 — H2",
  "SECTION 10 — H2",
] as const;

let contentCache: Map<string, ServiceContent> | undefined;

function cleanValue(value: string) {
  return value
    .trim()
    .replaceAll("\\+", "+")
    .replaceAll("\\&", "&")
    .replace(/\s{2,}/g, " ");
}

function parseFields(block: string) {
  const fields: Record<string, string> = {};
  const lines = block.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const label = lines[index].trim().replace(/\s{2,}$/, "");
    if (!label || label === "---" || label.startsWith("#")) continue;

    let valueIndex = index + 1;
    while (valueIndex < lines.length && !lines[valueIndex].trim()) valueIndex += 1;
    const value = lines[valueIndex]?.trim();

    if (value && value !== "---" && !value.startsWith("#")) {
      fields[label] = cleanValue(value);
    }
  }

  return fields;
}

function loadContent() {
  if (contentCache) return contentCache;

  const sourcePath = path.join(process.cwd(), "public", "plan", "XOFOZ.md");
  const source = readFileSync(sourcePath, "utf8");
  const cache = new Map<string, ServiceContent>();

  services.forEach((service, index) => {
    const startToken = `# ${service.sourceHeading}`;
    const start = source.indexOf(startToken);
    const nextService = services[index + 1];
    const end = nextService
      ? source.indexOf(`# ${nextService.sourceHeading}`, start + startToken.length)
      : source.length;
    const block = start >= 0 ? source.slice(start, end >= 0 ? end : source.length) : "";
    const fields = {
      ...parseFields(block),
      ...(serviceContentSupplements[service.slug] ?? {}),
    };
    const missingFields = requiredFields.filter((field) => !fields[field]);

    cache.set(service.slug, {
      service,
      fields,
      complete: missingFields.length === 0,
      missingFields: [...missingFields],
    });
  });

  contentCache = cache;
  return cache;
}

export function getServiceContent(slug: string) {
  if (!getServiceBySlug(slug)) return undefined;
  return loadContent().get(slug);
}

export function getServiceContentReport() {
  return [...loadContent().values()].map(({ service, complete, missingFields }) => ({
    slug: service.slug,
    complete,
    missingFields,
  }));
}
