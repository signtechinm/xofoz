# XOFOZ Industries Pages — Phase-by-Phase Implementation Plan

## Objective

Build a reusable industries-page system for five sector pages:

1. Hospitality — `/industries/hospitality`
2. Real estate — `/industries/real-estate`
3. Construction — `/industries/construction`
4. Logistics — `/industries/logistics`
5. Manufacturing — `/industries/manufacturing`

The pages will follow the supplied industry wireframe, use sector content from the supplied XOFOZ content PDF, and visually belong to the existing XOFOZ website.

## Source governance

- The user's request is the controlling instruction.
- `xofoz_industry_page_wireframe.pdf` is a layout, information-architecture, SEO, AEO, GEO, and UX reference—not an instruction to alter unrelated parts of the website.
- `XOFOZ.pdf` is the content source—not automatic approval of every factual claim.
- Named clients, certifications, client permissions, numerical claims, project outcomes, response times, and regulatory claims must be verified by XOFOZ before publication.
- The wireframe's instruction to research live People Also Ask results requires a separate approved research step. Until then, PDF-supplied FAQ copy can be implemented but must not be represented as live PAA research.
- No case-study outcome, client quotation, metric, or certification will be invented.

## Shared page structure

Each page uses the same ten-part structure:

1. Breadcrumb and industry hero
2. Industry-specific IT challenges
3. XOFOZ complete solution for the industry
4. Relevant service links
5. Relevant solution links
6. Verified client showcase or anonymised sector proof
7. Why XOFOZ for this industry
8. Industry-specific FAQ
9. Industry consultation CTA and lead form
10. Existing global footer

## Total delivery phases: 15

### Phase 1 — Baseline and reference audit

**Work**

- Archive desktop and mobile screenshots of the current homepage, services, solutions, products, and menu.
- Inventory reusable components, CSS tokens, spacing, typography, cards, buttons, forms, particle canvases, and image treatments.
- Extract the industry wireframe and the five content blocks from the PDFs into project-readable reference files.
- Record current lint, type-check, build, and responsive status.

**Gate**

- Baseline evidence and source inventory are complete before implementation begins.

### Phase 2 — Content verification register

**Work**

- Create a verification table for all named clients: Marriott, Bloom, Hayatna, Sobha, Altrad, China Harbour, Jazal, Agility, Khadamat, Cleanco, and Exeed.
- Record whether XOFOZ has permission to display each name/logo.
- Verify ADMCC, Microsoft, manufacturer, reseller, and installer claims.
- Verify `150+`, `3+ years`, service counts, project outcomes, and any response-time claims.
- Mark every claim as `approved`, `replace`, `anonymise`, or `pending`.

**Gate**

- Unverified proof is either withheld or displayed using accurate anonymised wording.

### Phase 3 — Information architecture and route model

**Work**

- Add an `/industries` hub page.
- Add a typed `/industries/[slug]` template with static generation for all five industries.
- Define canonical slugs, breadcrumb labels, metadata fields, image fields, CTA fields, FAQs, services, solutions, proof, and verification status.
- Add typed helpers so invalid service/solution links fail during development.

**Gate**

- All five routes resolve from one data model without duplicated page code.

### Phase 4 — Content modelling and PDF mapping

**Work**

- Map each PDF industry section into structured data.
- Preserve sector-specific language instead of flattening pages into generic IT copy.
- Edit for web readability, consistent XOFOZ voice, factual restraint, and UAE spelling.
- Map each service card to a current `/services/[slug]` route and each solution card to a current `/solutions/[slug]` route.
- Identify content conflicts, stale URLs, and claims requiring approval.

**Gate**

- Every visible section has approved or explicitly pending content and a valid destination link.

### Phase 5 — Industry visual asset production

**Work**

- Generate five coherent 16:9 hero images: hospitality, real estate, construction, logistics, and manufacturing.
- Match the site's premium dark navy, cyan-blue, realistic UAE technology aesthetic.
- Show technology naturally within each operating environment.
- Avoid logos, legible interface text, watermarks, implausible equipment, and exaggerated science-fiction visuals.
- Export source PNG files and optimise production WebP/AVIF variants during implementation.
- Prepare descriptive alt text based on what each final image actually shows.

**Gate**

- All five assets pass visual review, cropping tests, and responsive focal-point checks.

### Phase 6 — Shared industry template foundation

**Work**

- Build the reusable industry-page component and typed content schema.
- Reuse the current header, footer, buttons, Reveal behavior, particle field, page bands, card language, and form styling.
- Create industry-specific CSS under scoped class names to avoid regressions.
- Establish alternating section rhythm and full-width backgrounds consistent with existing pages.

**Gate**

- One pilot page renders every section from data with no industry-specific hardcoding in the component.

### Phase 7 — Industry hub and navigation

**Work**

- Build the `/industries` hub with five sector cards and clear buyer-oriented summaries.
- Update the main menu Industries panel to link to the hub and five pages.
- Remove non-existent/stale industry labels and ensure keyboard and touch access.
- Add relevant homepage industry-card links to the new routes.

**Gate**

- Every industry route is reachable from the header, hub, homepage, and footer where appropriate.

### Phase 8 — Hero, proof bar, and challenge sections

**Work**

- Implement breadcrumb, eyebrow, H1, extraction-zone summary, badges, CTAs, hero image, and proof statistics.
- Add the three buyer-language challenge cards for each industry.
- Ensure decorative particle graphics are full width while content remains container aligned.
- Ensure heading hierarchy contains one H1 and logical H2/H3 structure.

**Gate**

- Above-the-fold content is accurate, readable, responsive, and conversion-ready for all five industries.

### Phase 9 — Complete solution narrative

**Work**

- Implement the two-paragraph industry solution section.
- Use a stronger editorial layout than a plain text block while preserving scanability.
- Add only verified certification/client references.
- Keep the section distinct from service and solution grids.

**Gate**

- Each page explains sector expertise without duplicating its hero or using generic filler.

### Phase 10 — Service and solution cross-linking

**Work**

- Build the industry-relevant service grid with current service-category URLs.
- Build the visually distinct solution grid with current solution URLs.
- Include only genuinely relevant entries per industry.
- Add accessible link labels, hover/focus states, and analytics-ready identifiers.
- Validate every internal link automatically.

**Gate**

- Zero broken internal links and no obsolete PDF route paths remain.

### Phase 11 — Client proof and industry differentiators

**Work**

- Implement the named-client showcase only after verification and permission.
- Provide an anonymised sector-proof presentation when approval is unavailable.
- Do not generate or imitate client logos.
- Add four sector-specific differentiators and relevant certification/partnership marks.
- Show metrics only when their definitions and evidence are approved.

**Gate**

- Proof sections contain no fabricated outcomes, unauthorised logos, or unsupported superlatives.

### Phase 12 — FAQ, lead form, and structured data

**Work**

- Build accessible FAQ accordions with five or six complete answers per industry.
- Add `FAQPage`, `BreadcrumbList`, `Service`, and organisation references in JSON-LD where valid.
- Build the industry-specific enquiry form with hidden/source industry values and sector-specific fields.
- Add WhatsApp, phone, email, full NAP, privacy/consent wording, validation, success, and failure states.
- Connect submissions using the site's approved lead-delivery mechanism.

**Gate**

- Keyboard interaction, validation, submission, analytics attribution, and structured-data validation pass.

### Phase 13 — Metadata, sitemap, crawlability, and performance

**Work**

- Add unique titles, descriptions, canonicals, Open Graph data, and image metadata.
- Add the hub and five pages to the sitemap.
- Confirm robots directives, static generation, image sizing, lazy loading, and cache behavior.
- Optimise generated images and monitor page weight/LCP.

**Gate**

- All routes build statically, metadata is unique, and performance stays within the agreed budget.

### Phase 14 — Responsive, accessibility, and regression QA

**Work**

- Test 390px, 768px, 1024px, 1440px, 1920px, short-height laptops, and reduced-motion mode.
- Check overflow, image cropping, particle performance, sticky header, menu, forms, accordions, focus order, contrast, and tap targets.
- Run lint, TypeScript, production build, internal-link checks, and browser console checks.
- Compare against service, solution, product, and homepage patterns for visual consistency.

**Gate**

- Zero errors, zero broken links, zero unintended horizontal overflow, and documented handling of non-blocking warnings.

### Phase 15 — Business review, launch, and post-launch checks

**Work**

- Obtain final sign-off for content, named clients, logos, certifications, NAP, and imagery.
- Publish all five pages and the hub together so navigation never points to missing routes.
- Verify production URLs, forms, WhatsApp attribution, sitemap, schema, analytics, and indexability.
- Monitor 404s, form failures, performance, and search-console coverage after launch.

**Gate**

- Production verification is complete and unresolved items are documented with owners.

## Planned image manifest

| Asset | Purpose | Composition |
|---|---|---|
| `hospitality-hero-v2.webp` | Hospitality hero | Premium Abu Dhabi hotel lobby with discreet Wi-Fi, surveillance, reception, and managed IT context |
| `real-estate-hero-v2.webp` | Real-estate hero | UAE property operations office, development model, city view, access control, network infrastructure |
| `construction-hero-v2.webp` | Construction hero | Abu Dhabi construction site technology room with rugged devices, site CCTV, radios, and network rack |
| `logistics-hero-v2.webp` | Logistics hero | Modern UAE warehouse with scanners, wireless access points, operations dashboard, fleet/loading context |
| `manufacturing-hero-v2.webp` | Manufacturing hero | Modern UAE factory with production line, industrial network rack, monitoring station, and engineers |

## Definition of done

- `/industries` plus five industry pages are live and internally linked.
- All ten page sections render from a reusable typed template.
- Content and proof have explicit verification status.
- Five approved industry hero images are optimised and responsive.
- Forms, WhatsApp, analytics, metadata, sitemap, schema, and canonical URLs work.
- Desktop, mobile, keyboard, reduced-motion, lint, type-check, production build, and browser tests pass.
