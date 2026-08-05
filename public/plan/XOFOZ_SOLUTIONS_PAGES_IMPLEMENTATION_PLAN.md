# XOFOZ Solutions Category Pages — Analysis and Phased Implementation Plan

## 1. Purpose

This document converts the solution content in `public/plan/XOFOZ.md` and the layout direction in `public/plan/xofoz_solutions_category_page_wireframe.html` into an implementation-ready plan for all XOFOZ solution category pages.

The recommended result is one reusable, data-driven Next.js category-page template serving ten URLs. Each page will have unique content and metadata while sharing layout, behavior, accessibility, schema, forms, analytics, and responsive rules.

## 2. Source analysis

### 2.1 What the content document provides

The `# SOLUTIONS` block in `XOFOZ.md` begins at line 9012 and contains ten category-page content sets. Each set generally provides:

- Meta title, description, focus and secondary keywords, canonical URL/slug, and schema types.
- Breadcrumb, hero eyebrow, H1, supporting copy, CTAs, and trust statistics.
- A plain-language category overview.
- A category-specific solution-card inventory.
- Four reasons to choose XOFOZ plus relevant brands/certifications.
- Five industry applications with client references.
- Six FAQs and complete answers.
- A conversion CTA, category-specific form field, and local NAP data.

This is sufficient to populate the wireframe without inventing core marketing copy. Content should be normalized into typed data, not parsed from Markdown at runtime.

### 2.2 What the wireframe provides

The HTML wireframe defines a common eight-section presentation:

1. Shared header/navigation and breadcrumb.
2. Hero and four trust statistics.
3. Category overview.
4. Responsive solution-card grid.
5. Why XOFOZ and certification/partner panel.
6. Industries served.
7. FAQ accordion.
8. CTA/form, NAP/map, and shared footer.

It also documents SEO, AEO, GEO, EEAT, local SEO, responsive grid, schema, and CTA intent. It is a visual specification, not production HTML. Several elements are `div`/`span` placeholders and must become semantic links, buttons, headings, form controls, landmarks, and accessible accordions.

### 2.3 Existing application context

The repository uses Next.js 15, React 19, TypeScript, and the App Router. It already contains shared `Header`, `Footer`, `ConsultationSection`, reveal/animation utilities, and a `ServicePageTemplate`, as well as dynamic service routing at `app/services/[slug]/page.tsx`.

The solution implementation should follow this established architecture while keeping solution data and solution components separate from service-page data. Existing visual tokens, header/footer behavior, and form handling should be reused wherever their behavior matches the wireframe.

### 2.4 Existing service-page styling review

The existing service pages are the production styling reference for the new solution pages. `components/ServicePageTemplate.tsx` and the service rules in `styles.css` already provide a coherent XOFOZ visual language that should be carried into the solution template rather than recreating the wireframe literally.

Elements suitable for direct reuse or careful extension include:

- The shared `.page-band` content width and horizontal page rhythm.
- Breadcrumb spacing, typography, and link treatment from `.service-breadcrumb`.
- The two-column hero composition, particle background, glow, optimized image panel, overlay note, eyebrow, heading scale, CTA group, and trust-stat treatment.
- Alternating neutral/soft section backgrounds and the blueprint, orbit, signal, topography, and connection background motifs.
- Section heading width, typography, spacing, and optional centered presentation.
- Information-card surfaces, borders, corner radii, hover treatment, and numbered visual markers.
- The Why XOFOZ two-column layout, check marker, and certification pill treatment.
- Industry-card grid and link styling.
- Native `<details>/<summary>` FAQ presentation and open-state icon behavior.
- Consultation section, WhatsApp button, NAP/contact list, and `ServiceLeadForm` visual styling.
- Existing `Reveal` motion, provided it respects the established reduced-motion behavior.

The solution pages should introduce solution-specific class names or shared generic primitives rather than attaching unrelated solution markup to `.service-*` selectors. Shared values should be extracted into reusable tokens/components when practical; visual duplication should be avoided.

Service-page patterns that should not be copied automatically:

- The service comparison, pain-point, process, client-proof, and related-services sections are not part of the supplied solution-category wireframe.
- Service content is currently read from parsed field labels. Solution content should use a cleaner typed object model.
- The service template creates its own schema inline. Solution schema should use shared tested helpers to prevent drift.
- Service industry links currently point to `/#industries`; solution pages should use real industry routes when those routes exist, with an explicit fallback decided during scope lock.
- A service form can be visually reused, but solution card selection requires additional category/solution context and must not be forced into the existing component without verifying its API and submission behavior.

### 2.5 Existing menu review

`components/Header.tsx` already contains a three-panel menu with category selection, subnavigation, and a visual panel. Services are data-driven and link to their individual routes. Solutions are currently hard-coded as six example children, and every solution child resolves to the parent `/#solutions` anchor.

This must be replaced with a shared solution navigation registry containing the ten approved category labels and routes. The same registry should drive the header menu, solution hub, footer solution links where appropriate, and static route generation so these destinations cannot drift apart.

## 3. Page inventory and content map

| # | Category | Route | Cards | Supplied solution topics |
|---:|---|---|---:|---|
| 1 | Communication and low voltage (LV/ELV) | `/solutions/communication-lv/` | 15 | CCTV, access control, biometric attendance, IP phones, call centres, intercom, ELV, guard tour, environment monitoring, solar CCTV/WiFi, gate barriers, AV, PA, LED panels, master clocks |
| 2 | Cybersecurity | `/solutions/cybersecurity/` | 9 | Layered cybersecurity, endpoint security, encryption, IAM, SOC as a service, next-gen firewall, email security, vulnerability management, enterprise mobility |
| 3 | Data backup and protection | `/solutions/data-backup/` | 6 | DLP, disaster recovery, device management, business continuity, backup as a service, mobile device management |
| 4 | Network solutions | `/solutions/network-solutions/` | 7 | Network solutions, switching/routing, proxy services, structured cabling, WiFi, VPN, work-from-home IT |
| 5 | Server and storage | `/solutions/server-storage/` | 4 | Server solutions, NAS, server storage, synchronized data storage |
| 6 | IT services solutions | `/solutions/it-services/` | 9 | Managed IT, IT support, relocation, consulting, ICT, IT AMC, office setup, cloud migration, outsourcing |
| 7 | Cloud solutions | `/solutions/cloud/` | 4 | Azure, web hosting, desktop as a service, collaboration tools |
| 8 | Software solutions | `/solutions/software/` | 6 | ERP, POS, GPS tracking, visitor management, web design, design software |
| 9 | Microsoft Cloud | `/solutions/microsoft-cloud/` | 11 | Microsoft 365, Copilot, apps/services, Edge, Windows 365, benefits, plans, security, migrations, Modern Workplace, SharePoint |
| 10 | AI solutions | `/solutions/ai-solutions/` | 1 | AI solutions for CCTV |

Total supplied cards: 72.

## 4. Findings and decisions required before implementation

### 4.1 Content inconsistencies

These items must be resolved in the content sign-off phase:

- The master category list orders Server and Storage before Network, while the detailed content places Network first. Navigation, sitemap, and display order need one approved source of truth.
- The LV hero states `14+` solutions, but 15 cards are supplied. Use an exact derived count or correct the stat.
- The LV page title contains a trailing `|`, and “Data Backup and Protection Abu Dhab” is truncated in the Markdown heading. These should not propagate into metadata or UI.
- AI Solutions has only one card. A four-column grid will look unfinished; approve more AI offerings or use an intentional one-card feature layout.
- “Cybersecurity solutions” and “Network solutions” repeat their parent category as the first card. Confirm whether these are meaningful enquiry choices or redundant umbrella cards.
- Data Backup includes device management/mobile device management, which overlaps Cybersecurity and IT Services. Define the intended category ownership and internal-link relationships.
- Cloud Solutions and Microsoft Cloud Solutions overlap significantly. Their search intent and messaging must remain distinct: general/cloud infrastructure versus Microsoft ecosystem/modern workplace.
- Card names are inconsistent in number/casing (“solution” versus “solutions,” “Next gen,” “WiFi”). Apply an approved editorial style guide.
- The source mixes `150+ businesses served`, `150+ AMC clients`, and `150+ commercial and enterprise installations`. Each claim has a different meaning and needs evidence.
- “Since 2022” and `3+ years` should be reviewed as time-sensitive copy rather than hard-coded indefinitely.

### 4.2 Claims and compliance gate

Before release, XOFOZ must verify every claim relating to:

- Certification/authorization status and correct certification names.
- ADMCC terminology, scope, and eligibility claims.
- Named client relationships and permission to use names/logos/case descriptions.
- Partner labels such as authorised dealer, certified reseller, and certified partner.
- Quantitative claims: businesses served, years operating, installations, response speed, and coverage.
- Regulatory, insurance, and UAE legal/compliance statements.
- Claims such as “Microsoft 365 data is not backed up,” “zero data loss,” and absolute security/recovery statements; rewrite with appropriately precise language where needed.

This is a business verification task, not merely copyediting. Unverified claims should be hidden or replaced with approved neutral wording.

### 4.3 Wireframe-to-production corrections

- Replace visual `span` CTAs with `<Link>` or `<button>` elements.
- Use one `<h1>`, logical `<h2>/<h3>` order, `<main>`, `<nav>`, `<section>`, and `<footer>` landmarks.
- Build a keyboard-accessible FAQ accordion with `aria-expanded`, associated panels, focus states, and reduced-motion support.
- Use real form labels, validation, error messages, consent/privacy context, success/failure states, and spam protection.
- Fix invalid duplicate `class` attributes in industry and contact icons.
- Do not expose developer annotation tags (SEO/AEO/GEO/EEAT) in production.
- Use optimized `next/image` assets with meaningful alt text; decorative icons should be hidden from assistive technology.
- Preserve the 4/2/1 card grid, but allow the final row to remain visually balanced for variable card counts.
- Lazy-load the map or use a static map/contact link to protect performance and privacy.

## 5. Target technical architecture

### 5.1 Routing

Create a dynamic route:

`app/solutions/[slug]/page.tsx`

The route should:

- Resolve the slug against a typed registry.
- Return `notFound()` for unknown slugs.
- Export `generateStaticParams()` for all ten categories.
- Export `generateMetadata()` from each record.
- Render the reusable `SolutionCategoryPage` template.

If a `/solutions/` hub does not exist, create it as part of Phase 5 so breadcrumbs and navigation have a valid parent destination.

### 5.1.1 Shared navigation registry

Expose a lightweight navigation-safe projection of the solution registry, for example:

```ts
type SolutionNavItem = {
  label: string;
  slug: string;
  href: `/solutions/${string}`;
};
```

The approved menu order should contain:

1. Communication and LV/ELV Solutions — `/solutions/communication-lv`
2. Cybersecurity Solutions — `/solutions/cybersecurity`
3. Data Backup and Protection — `/solutions/data-backup`
4. Server and Storage Solutions — `/solutions/server-storage`
5. Network Solutions — `/solutions/network-solutions`
6. IT Services Solutions — `/solutions/it-services`
7. Cloud Solutions — `/solutions/cloud`
8. Software Solutions — `/solutions/software`
9. Microsoft Cloud Solutions — `/solutions/microsoft-cloud`
10. AI Solutions — `/solutions/ai-solutions`

The Server/Storage versus Network order above follows the source master list and remains subject to Phase 1 approval.

### 5.2 Typed content model

Create one content registry, for example `content/solutions.ts`, with a `SolutionCategory` interface containing:

- Identity: `slug`, `name`, `shortName`, `eyebrow`.
- SEO: `metaTitle`, `metaDescription`, `canonical`, `focusKeyword`, optional secondary keywords.
- Hero: `h1`, `summary`, `image`, `imageAlt`, CTA labels, stat configuration.
- Overview: `heading`, two paragraphs.
- Cards: stable `id`, name, description, icon key, enquiry value.
- Differentiators: heading and body.
- Brands/certifications: display name, verified relationship label, optional logo.
- Industries: industry slug, title, description, approved client references.
- FAQs: stable `id`, question, answer.
- CTA: heading, subline, service-interest field label/options, submit label.

Counts such as “solutions in category” must be derived from `cards.length`, not manually duplicated.

### 5.3 Component structure

Recommended component boundary:

```text
SolutionCategoryPage
├── Header (existing)
├── Breadcrumbs
├── SolutionHero
├── SolutionStats
├── SolutionOverview
├── SolutionCardGrid
│   └── SolutionCard
├── WhyXofoz
│   └── PartnerCertificationGrid
├── SolutionIndustries
├── SolutionFaq
├── SolutionConsultation
│   ├── SolutionLeadForm
│   └── ContactNapCard
└── Footer (existing)
```

Prefer server components for static page content. Isolate interactive FAQ, form, analytics hooks, and any animation in small client components.

### 5.4 Enquiry behavior

Each card’s “Enquire now” control should use one consistent behavior:

1. Set the category and card name in the form state/query string.
2. Move focus or scroll to the consultation form.
3. Preserve a WhatsApp fallback with a prefilled, URL-encoded message.

Recommended captured fields: name, company, phone, selected solution, requirements, source page, source card, timestamp, and consent status. Never put private form values into analytics events or URLs.

### 5.5 Metadata and structured data

Per page, generate:

- Title, description, canonical, Open Graph, and social image metadata.
- `BreadcrumbList` JSON-LD.
- `FAQPage` JSON-LD only when the visible questions/answers exactly match the markup and current search-engine policy permits it.
- A suitable service/offering representation tied to the XOFOZ organization; do not emit duplicate or conflicting LocalBusiness entities on every page.

Do not add `HowTo` schema: the category wireframe/content does not contain a visible step-by-step process. Schema must describe visible content and should be validated before release.

## 6. Phased delivery plan

### Phase 0 — Baseline and scope lock

Objective: establish the current application baseline and confirm what “done” means.

Work:

- Run the existing lint/build/test checks and record pre-existing failures.
- Inspect shared Header, Footer, design tokens, forms, sitemap, robots, and the service template.
- Record the exact reusable styling patterns from `ServicePageTemplate.tsx` and the service-page section of `styles.css`.
- Audit current Solutions menu behavior, including keyboard, pointer, mobile, focus, close-on-navigation, and menu capacity for ten links.
- Confirm whether `/solutions/` hub, industry routes, privacy page, and form backend exist.
- Define browser/device targets and performance/accessibility thresholds.
- Confirm whether this delivery includes the category hub and navigation mega-menu updates.

Deliverables:

- Baseline report.
- Service styling reuse matrix: reuse directly, extract as shared primitive, extend for solutions, or do not reuse.
- Header/menu link audit showing the current placeholder destinations and approved replacements.
- Final scope statement and route list.
- Dependency/blocker register.

Exit criteria:

- Ten routes and hub-page scope approved.
- Existing issues are separated from solution-page work.
- Form destination and analytics platform are known.

### Phase 1 — Content audit, normalization, and approval

Objective: turn the Markdown into an approved, consistent content source.

Work:

- Extract all ten metadata, hero, overview, card, differentiator, brand, industry, FAQ, and CTA sets.
- Resolve every inconsistency in Section 4.1.
- Verify claims listed in Section 4.2 with the business owner.
- Approve category names, navigation order, URLs, and canonical URLs.
- Define differentiation between overlapping categories.
- Approve the one-card AI layout or expand the AI card inventory.
- Edit copy for consistent UAE English, capitalization, punctuation, and non-absolute claims.
- Verify that visible FAQ answers and schema answers are identical.

Deliverables:

- Signed-off content matrix for ten pages.
- Claims evidence/approval sheet.
- Redirect map if any existing solution URLs differ.
- Editorial and naming rules.

Exit criteria:

- No unresolved placeholder, typo, count mismatch, or unverified public claim.
- Every category has an approved hero image brief and alt text.
- Every link target exists or has an approved launch plan.

### Phase 2 — Design system and responsive specification

Objective: translate the wireframe into a production design consistent with the current site.

Work:

- Map wireframe colors, typography, spacing, radii, shadows, and breakpoints to existing site tokens.
- Use the live service pages as the primary style reference for hero composition, page bands, section rhythm, cards, certification treatment, industries, FAQ, CTA/form, and motion.
- Specify which service selectors become shared primitives and which solution sections receive dedicated selectors, avoiding a second competing visual system.
- Produce desktop, tablet, and mobile behavior for every section.
- Define 4/2/1 card grid, uneven final-row behavior, long-title wrapping, and one-card AI presentation.
- Specify hover, focus-visible, active, loading, error, disabled, and success states.
- Specify header/menu desktop and mobile behavior with ten solution links, including overflow/scroll behavior for short-height screens.
- Specify FAQ keyboard behavior and motion/reduced-motion behavior.
- Select category imagery; prefer real XOFOZ people/projects where rights and quality permit.
- Define image aspect ratios and responsive sizes to avoid layout shift.

Deliverables:

- Approved responsive design specification.
- Component/state inventory.
- Service-to-solution styling mapping with screenshots or visual references for every reused pattern.
- Approved Solutions menu desktop/mobile design showing all ten links and the `/solutions` hub link.
- Asset list with source, license/permission, dimensions, format, alt text, and owner.

Exit criteria:

- All breakpoints and interactive states approved.
- No wireframe annotation is mistaken for production UI.
- Accessibility requirements are part of the design, not deferred to QA.

### Phase 3 — Foundation and reusable template

Objective: build the reusable architecture with representative content.

Work:

- Define TypeScript content types and validation rules.
- Create the solution registry and dynamic route.
- Implement template sections and reuse Header/Footer where compatible.
- Extract or reuse service-page visual primitives without changing existing service pages unintentionally; solution-specific CSS must be scoped and regression-tested.
- Implement metadata, canonical URLs, static params, breadcrumbs, and JSON-LD helpers.
- Build the accessible FAQ accordion.
- Build solution-card-to-form selection behavior and WhatsApp fallback.
- Implement image optimization, semantic landmarks, focus management, and reduced-motion handling.
- Add component/unit tests for slug resolution, metadata, counts, schema serialization, FAQ behavior, and form preselection.
- Create a shared solution navigation projection so route generation and menus use the same slugs.

Use three representative pages during template development:

- LV/ELV: maximum density with 15 cards.
- Server and Storage: short four-card category.
- AI: exceptional one-card layout.

Deliverables:

- Reusable `SolutionCategoryPage` implementation.
- Dynamic route and typed registry.
- Automated foundation tests.

Exit criteria:

- All three representative pages work at mobile/tablet/desktop sizes.
- Unknown slugs return 404.
- Counts and schema are derived correctly.
- No content-specific conditional code is needed except an approved layout variant.

### Phase 4 — Populate all ten categories

Objective: load all approved content and assets into the template.

Suggested batches:

- Batch A: LV/ELV, Cybersecurity, Data Backup.
- Batch B: Network, Server/Storage, IT Services.
- Batch C: Cloud, Software, Microsoft Cloud, AI.

For each page:

- Populate approved metadata and canonical.
- Populate hero/overview/cards/differentiators/brands/industries/FAQs/CTA.
- Assign meaningful icon keys and category imagery.
- Confirm card selection reaches the form with the correct value.
- Confirm every industry and breadcrumb link resolves.
- Review responsive wrapping with real copy, not placeholders.

Deliverables:

- Ten complete category pages.
- Per-page content and link checklist.

Exit criteria:

- All 72 approved cards render once and under the correct category.
- No placeholder text, dead link, duplicated ID, or missing asset.
- Every page has unique title, description, canonical, H1, and useful introductory copy.

### Phase 5 — Site integration and conversion flow

Objective: connect solution pages to the full XOFOZ website and make enquiries operational.

Work:

- Replace the current six hard-coded Solutions menu examples and `/#solutions` child destinations with the approved ten-category registry and individual `/solutions/[slug]` links.
- Change the Solutions parent/menu “View all” destination from `/#solutions` to `/solutions` once the hub exists.
- Preserve the existing three-panel menu styling and visual treatment while adapting it for ten child links and small-height/mobile screens.
- Add active-route/current-page indication where it improves orientation, and verify that selecting any solution closes the menu and navigates correctly.
- Keep Services menu behavior intact and run navigation regression tests so the solution change does not break existing service links.
- Build/update `/solutions/` hub and link all categories.
- Add solution routes to `app/sitemap.ts` with sensible last-modified handling.
- Add contextual links from the home page, relevant services, industries, footer, and related categories.
- Implement the form submission backend/integration, validation, spam defense, and operational notification path.
- Provide accessible success/failure feedback and prevent duplicate submissions.
- Add WhatsApp messages containing category/card context.
- Add privacy/consent handling appropriate to the collected data.

Deliverables:

- Complete internal-link graph.
- Header/menu link map covering the hub and all ten category destinations.
- Navigation regression results for Services, Solutions, Products, Industries, About, and Contact.
- Working production-equivalent lead flow.
- Sitemap/navigation integration.

Exit criteria:

- A test lead is received by the correct XOFOZ destination with full context.
- All ten pages are reachable through normal navigation, not only direct URLs.
- Every solution-menu child opens its matching category page; none falls back to `/#solutions`.
- The full ten-item subnavigation remains usable by keyboard and on mobile/short-height screens.
- No personal data is leaked to logs, URLs, or analytics.

### Phase 6 — SEO, analytics, performance, and accessibility

Objective: make the pages measurable, crawlable, fast, and inclusive.

Work:

- Validate indexability, robots behavior, canonicals, status codes, metadata, sitemap, and structured data.
- Test heading hierarchy, landmarks, link purpose, form labels/errors, color contrast, keyboard flow, focus visibility, and screen-reader announcements.
- Test with JavaScript disabled for core content visibility.
- Optimize images/fonts/client bundles and remove unnecessary hydration.
- Instrument privacy-safe events: consultation CTA, WhatsApp CTA, card enquiry, form start, submit success, and submit error.
- Include `category_slug`, `solution_id`, and placement in events; exclude names, phone numbers, and message content.
- Establish performance budgets, ideally targeting Core Web Vitals “good” thresholds at the 75th percentile and Lighthouse checks as regression signals rather than guarantees.

Deliverables:

- SEO/schema validation report.
- Accessibility audit and remediation log.
- Performance report and bundle observations.
- Analytics event dictionary.

Exit criteria:

- No critical/serious accessibility issue in agreed automated/manual audits.
- No broken schema or canonical mismatch.
- Pages meet agreed performance budgets on representative mobile conditions.
- Analytics events fire once with no personal information.

### Phase 7 — Cross-browser QA, stakeholder acceptance, and launch

Objective: release safely with clear rollback and ownership.

Work:

- Test supported browsers and representative viewport widths.
- Run visual regression for all ten pages at mobile and desktop, with focused tablet checks.
- Test long text, FAQ expansion, form errors, slow network, missing image, backend error, and duplicate submission scenarios.
- Crawl all solution routes for broken links, redirects, titles, descriptions, H1s, canonicals, and index directives.
- Have content, sales, technical, and compliance owners complete UAT.
- Prepare redirect/rollback steps and deploy during an agreed release window.
- Perform immediate production smoke testing.

Deliverables:

- Signed UAT checklist.
- Launch/rollback checklist.
- Production smoke-test record.

Exit criteria:

- Stakeholders sign off content, claims, design, and lead delivery.
- Production routes return 200, forms deliver, analytics records, and sitemap contains correct canonical routes.

### Phase 8 — Post-launch monitoring and optimization

Objective: confirm stability and improve conversion/search performance using evidence.

Monitoring windows:

- First 24 hours: errors, 404s, form delivery, analytics, layout regressions.
- First 7 days: crawl/indexing signals, Core Web Vitals field data when available, enquiry quality, top CTA/card interactions.
- First 30 days: impressions, queries, landing-page engagement, conversion by category, and content gaps.

Work:

- Monitor server/client errors and broken assets.
- Verify search engines discover canonical URLs and no accidental duplicates appear.
- Review enquiry routing and sales feedback.
- Use Search Console/query evidence to refine FAQs and internal links without keyword stuffing.
- Compare card-level engagement and improve weak pages, especially AI and overlapping cloud categories.

Deliverables:

- 24-hour, 7-day, and 30-day reports.
- Prioritized optimization backlog.

Exit criteria:

- Stable lead delivery and no unresolved high-severity production issue.
- Page ownership and recurring content-review cadence assigned.

## 7. Testing matrix

| Area | Required checks |
|---|---|
| Routing | 10 valid static routes; invalid slug 404; trailing-slash behavior consistent |
| Content | Correct category mapping; card count; no placeholder/typo; approved claims only |
| Metadata | Unique title/description/H1; canonical matches final route; OG data and image |
| Schema | Valid JSON; visible FAQ parity; breadcrumb URLs; no unsupported claims |
| Responsive | 4/2/1 grid; long headings; final rows; one-card AI; no overflow at 320px |
| Accessibility | Keyboard, focus, headings, landmarks, accordion, form errors, contrast, reduced motion |
| Forms | Validation; selected card/category; success/error; duplicate prevention; spam defense |
| WhatsApp | Correct number; URL encoding; category context; mobile and desktop behavior |
| Links | Breadcrumb, menu, industry, footer, CTA, map, phone, email; no dead ends |
| Menu | Ten unique solution child routes; `/solutions` parent link; keyboard/focus/mobile behavior; close after navigation; Services regression |
| Styling regression | Existing service pages remain visually unchanged unless an approved shared-token improvement is intentional |
| Performance | Optimized images; stable layout; minimal client JS; lazy map/secondary content |
| Analytics | Events fire once; correct dimensions; no PII |
| Security/privacy | Server-side validation; input handling; rate limit/spam control; consent and retention |

## 8. Definition of done

The solution-pages project is complete only when:

- All ten approved routes are live through one maintainable typed template.
- Solution pages visibly belong to the existing service-page design system while retaining the solution wireframe’s section structure.
- The main menu links directly to the hub and all ten individual solution pages, with no placeholder anchor destinations.
- The content owner has approved every public claim, client reference, certification, and partner label.
- Every page is responsive, semantic, keyboard accessible, and usable with assistive technology.
- Metadata, canonical URLs, breadcrumbs, sitemap, and eligible structured data are correct.
- All cards and CTAs lead to a functioning, context-aware enquiry path.
- Lead delivery and privacy-safe analytics have been proven in production.
- Automated tests, visual checks, crawl checks, accessibility checks, and stakeholder UAT pass.
- Launch monitoring finds no unresolved high-severity issue.

## 9. Recommended implementation order

Do not begin by copying ten pages. Complete the gates in this order:

1. Approve taxonomy, claims, URLs, and content corrections.
2. Approve responsive component design and assets.
3. Build one typed template using LV, Server/Storage, and AI as edge cases.
4. Populate the remaining seven categories in batches.
5. Integrate navigation, hub, sitemap, internal links, forms, and analytics.
6. Complete accessibility, SEO, schema, performance, cross-browser, and UAT gates.
7. Launch with production smoke tests and 30-day monitoring.

This sequence keeps content risk out of code, proves the layout against both maximum and minimum content density early, and makes all ten pages consistent without creating a maintenance burden.
