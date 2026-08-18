# XOFOZ Services Area Rework Plan

## 1. Purpose

Rework the XOFOZ service experience so visitors first see the ten main service
categories, while the individual offerings beneath them are presented as
sub-services rather than as equal, top-level services.

This plan is based on:

- `/Users/shafeekelayadath/Downloads/XOFOZ.pdf` for the approved service
  taxonomy and page content
- `/Users/shafeekelayadath/Downloads/xofoz_service_category_page_wireframe.html`
  for category-page structure, responsive intent, and content hierarchy
- the current repository for the existing visual system, routes, navigation,
  content model, and implementation constraints

The attached documents are reference material only. Production pages must use
the current XOFOZ site's established visual language rather than copying the
wireframe's prototype styling or documentation annotations.

## 2. Current problem

The current `data/services.ts` exports one flat list of 20 services. Both the
header menu and `/services` page render that array directly. As a result,
parent-level offerings and narrower sub-services appear at the same level.

Examples of the current mismatch:

- Structured Cabling is shown as a main service instead of a sub-service of
  Network Solutions.
- Biometric Systems, PABX, and Video Conferencing are shown as main services
  instead of belonging to Communication and LV.
- ERP, Tally Prime, POS Systems, and Website Development are shown as main
  services instead of belonging to Software Solutions.
- Data Backup and Recovery and Server Management are presented as peers even
  though the new content separates Data Backup and Protection from Server and
  Storage.
- Cloud Solutions and Microsoft 365 are combined in the current model, while
  the supplied taxonomy defines Cloud and Microsoft Cloud as separate service
  categories.

The service information architecture, menu, hub, URL strategy, category pages,
and internal linking should be updated as one coordinated change.

## 3. Target service taxonomy

Only these ten categories should appear in the primary Services menu and as
top-level cards on the `/services` hub.

### 01 — IT Services (`/services/it-services`)

1. Managed IT services
2. IT support
3. IT relocation
4. IT consulting
5. ICT solutions
6. IT AMC — annual maintenance contract
7. New office IT setup
8. Cloud migration services
9. IT outsourcing

### 02 — Cyber Security (`/services/cyber-security`)

1. Cyber security solutions
2. Endpoint security
3. Device encryption
4. Identity and access management
5. SOC as a service
6. Next gen firewall
7. Email security
8. Vulnerability management
9. Enterprise mobility

### 03 — Data Backup and Protection (`/services/data-backup-protection`)

1. DLP solution
2. Disaster recovery solutions
3. Device management
4. Business continuity plan
5. Backup as a service
6. Mobile device management

### 04 — Server and Storage (`/services/server-storage`)

1. Server solutions
2. NAS storage
3. Server storage
4. Synchronized data storage

### 05 — Network Solutions (`/services/network-solutions`)

1. Network solutions
2. Switching and routing
3. Proxy services
4. Structured cabling
5. WiFi solutions
6. VPN solutions
7. Work from home IT

### 06 — Communication and LV (`/services/communication-lv`)

1. CCTV solutions
2. IP phone solutions
3. Access control
4. Call centre solutions
5. Biometric attendance system
6. Intercom systems
7. ELV systems
8. Guard tour system
9. Environment monitoring system
10. Solar CCTV and WiFi solutions
11. Gate barrier solutions
12. AV system
13. PA system
14. LED panel
15. Master clock system

### 07 — Cloud (`/services/cloud`)

1. Azure cloud solutions
2. Web hosting
3. Desktop as a service
4. User collaboration tools

### 08 — AI Solutions (`/services/ai-solutions`)

1. AI solutions for CCTV

The single-card layout should be intentionally featured rather than leaving an
apparently incomplete three-column row. The data structure must allow more AI
sub-services to be added later without redesigning the page.

### 09 — Software Solutions (`/services/software-solutions`)

1. ERP software
2. Design software
3. GPS tracking solutions
4. Visitor management system
5. POS software solutions
6. Web design

### 10 — Microsoft Cloud (`/services/microsoft-cloud`)

1. Microsoft 365 solutions
2. Microsoft 365 Copilot
3. Microsoft 365 apps and services
4. Microsoft Edge for business
5. Windows 365 Cloud PC
6. Microsoft 365 benefits
7. Microsoft 365 pricing plans
8. Microsoft 365 security
9. Microsoft 365 migrations and consultancy
10. Microsoft Modern Workplace
11. Microsoft SharePoint consulting

## 4. Information architecture and navigation

### Header menu

- Replace the current 20-item flat Services submenu with the ten parent
  categories above.
- Add a clearly visible `View all services` link to `/services`.
- Each category item must link to its category page, not directly to a child
  service page.
- Keep the existing menu's visual style and interaction pattern, but remove the
  special expanded state that exists only because the flat list has more than
  12 items if it is no longer needed.
- Ensure pointer hover, keyboard focus, touch activation, Escape-to-close, and
  focus return all work consistently.
- On mobile, show the ten category links in a readable single-column list with
  no hidden or hover-only content.

### Services hub (`/services`)

- Replace the 20 equal cards with ten category cards.
- Each card should contain the category name, a short plain-language summary,
  sub-service count, a small representative list of sub-services, and a clear
  link to the category page.
- Use the existing dark XOFOZ design system, responsive spacing, `Reveal`
  behaviour, and card interaction style.
- Provide a useful introduction explaining that each category contains a set
  of specialist services.
- Keep all category names and links in server-rendered HTML.

### Category pages

- Create one page for each of the ten categories using the supplied PDF copy.
- Sub-services appear as cards within the relevant category page.
- A sub-service card is the complete entry point for that offering, as specified
  by the wireframe; it does not require a new individual route.
- Each card contains an icon, H3 name, SEO description, relevant authorised and
  regular brand pills, and an `Enquire now` action.
- Enquiry actions should carry the selected category and sub-service into the
  contact form or WhatsApp message so the visitor does not need to repeat it.

## 5. Category-page template

Implement one reusable, data-driven template rather than ten duplicated page
components. The template should render:

1. Breadcrumb: Home / Services / Category
2. Hero with eyebrow, one H1, summary, badges, primary CTA, WhatsApp CTA, and
   category-specific image
3. Trust strip with category-relevant statistics
4. Category overview and plain-language definition
5. Sub-service grid containing every item in the category
6. Why XOFOZ / category-specific differentiators
7. Relevant brands, certifications, or partnerships
8. Industries served
9. Category-specific FAQs
10. Consultation CTA and lead form
11. Existing global footer

Responsive rules from the wireframe:

- Three sub-service columns on desktop
- Two columns on tablet
- One column on mobile
- No fixed card count or hard-coded row count
- An intentional wide/featured treatment for a one-card category
- No horizontal overflow at any supported viewport

The wireframe's white canvas, browser frame, SEO/AEO/GEO labels, developer
notes, placeholder tokens, and annotation colours must not appear in the final
site.

## 6. Data and component architecture

Replace the flat service definition with a typed category model. A category
record should contain:

- identity: menu label, display title, slug, order, description, and image
- metadata: title, description, canonical, focus keyword, and secondary
  keywords
- hero: eyebrow, H1, summary, badges, CTAs, and trust statistics
- overview copy
- `subServices[]`: name, icon, SEO description, authorised brands, regular
  brands, enquiry label, and optional legacy slugs
- differentiators and certifications
- industries and named proof points
- FAQs
- consultation content and form labels
- publication-verification flags for claims and partnerships

Suggested implementation boundaries:

- `data/service-categories.ts` — category identity, order, route, and menu data
- `data/service-category-content.ts` — normalized content for all ten pages
- `components/ServiceCategoryPage.tsx` — reusable server-rendered template
- `components/ServiceEnquiryButton.tsx` — category/sub-service-aware enquiry
- `components/ServiceLeadForm.tsx` — preselected enquiry context
- `app/services/[slug]/page.tsx` — static category routing, metadata, schema, and
  invalid-slug handling

Keep route identity separate from long-form content so navigation does not
need to import the entire content payload. Derive menu entries, hub cards,
static params, sitemap URLs, breadcrumbs, and category lookup from the same
category registry to prevent future drift.

## 7. Existing service URL migration

The current repository already has 20 individual service URLs. Removing them
without a migration could create broken links or lose accumulated search value.

Before implementation, produce a reviewed redirect matrix that maps each old
URL to its closest new parent category. Examples:

| Existing route | New destination |
| --- | --- |
| `/services/it-amc-abu-dhabi` | `/services/it-services#it-amc-annual-maintenance-contract` |
| `/services/structured-cabling-abu-dhabi` | `/services/network-solutions#structured-cabling` |
| `/services/biometric-systems-abu-dhabi` | `/services/communication-lv#biometric-attendance-system` |
| `/services/tally-prime-abu-dhabi` | `/services/software-solutions#erp-software` or the approved Tally-specific card |
| `/services/cloud-solutions-microsoft-365-abu-dhabi` | split by intent; default to `/services/microsoft-cloud` only after content/SEO review |

Implementation requirements:

- Add stable IDs to sub-service cards so old URLs can redirect to meaningful
  anchors.
- Use permanent redirects only after the mapping is approved.
- Update the header, footer, homepage links, related-service links, sitemap,
  canonical metadata, and any structured data in the same release.
- Search the repository for every old slug before removing the old route data.
- Do not create redirect chains.
- Preserve a legacy-slug lookup in data so redirects remain maintainable.
- If an existing individual page has meaningful rankings or backlinks, retain
  it temporarily with updated parent-category navigation rather than forcing an
  immediate redirect. Decide this using Search Console/analytics evidence when
  available.

## 8. SEO, AEO, and structured data

- Use exactly one descriptive H1 per category page and an H3 for each
  sub-service card.
- Keep the first category overview concise and answer-focused; it is the main
  extraction zone for search and AI systems.
- Server-render all descriptions and FAQ answers.
- Generate unique title, meta description, canonical, and Open Graph metadata
  for every category.
- Generate `BreadcrumbList`, one category-level `Service`, `FAQPage` when FAQs
  are visible, and the verified local-business entity reference.
- Do not mark every card as a separate local business or invent ratings,
  pricing, availability, or review data.
- Ensure sub-service names occur naturally in body copy and the first FAQ
  answer without keyword stuffing.
- Cross-link each service category to its matching solution category where the
  supplied content specifies one.
- Include only canonical category URLs in the sitemap after redirects launch.

Claims requiring verification before publication include certifications,
authorised-dealer status, current partner levels, client relationships, client
logos, client results, service counts, years in business, response times, 24/7
coverage, pricing statements, and zero-data-loss language. Unverified claims
should be flagged in content data and withheld or softened rather than silently
published.

## 9. Accessibility and interaction requirements

- Use semantic navigation, headings, lists, links, buttons, and form labels.
- Give every menu trigger an accurate `aria-expanded` and control relationship.
- Keep visible focus styles and logical tab order in the menu and card grid.
- Support keyboard, pointer, and touch navigation without hover dependence.
- Make card CTAs descriptive to assistive technology, for example `Enquire
  about Structured Cabling`.
- Give meaningful content images useful alt text and decorative imagery an
  empty alt attribute.
- Preserve reduced-motion behaviour for reveal and menu animation.
- Maintain sufficient contrast for body text, brand pills, borders, and focus
  rings.
- Make FAQ controls proper buttons with state exposed to assistive technology.

## 10. Phase-by-phase execution runbook

Work through the phases in order. Do not start a later phase until the exit
gate for the current phase passes. Record evidence beside every checkbox during
implementation; a completed phase means its code, content, tests, and review
evidence are complete, not merely that development has started.

### Phase 0 — Protect the current implementation and capture a baseline

Objective: establish what exists before changing routes, data, or UI.

#### Tasks

- [ ] Check repository instructions, dependency scripts, framework version,
  and current working-tree changes before editing.
- [ ] Preserve all unrelated user changes.
- [ ] Run the current lint, type-check, test, and production-build commands and
  record any pre-existing failures.
- [ ] Capture the current desktop and mobile Services menu.
- [ ] Capture the current `/services` page at desktop, tablet, and mobile sizes.
- [ ] Open representative existing service pages and record their route,
  metadata, sections, CTAs, and visual state.
- [ ] Export or record the current sitemap service URLs.
- [ ] Search all source and content files for `/services/`, current service
  slugs, `services`, and `resolveRelatedServiceHref` references.
- [ ] Inventory the components and styles used by the header, services hub,
  service template, forms, footer, schema, and sitemap.
- [ ] Record existing analytics events or tracking attributes attached to
  service links and enquiry actions.

#### Deliverables

- Baseline QA record with commands and results
- Current route and internal-link inventory
- Before-change screenshots for regression comparison
- List of pre-existing defects that are outside this rework

#### Exit gate

- [ ] Every current service URL and every code location that consumes the flat
  service array is known.
- [ ] The existing build state is documented, so new regressions can be
  distinguished from old problems.

### Phase 1 — Approve taxonomy, naming, content, and business claims

Objective: create one authoritative content specification before writing the
new data model.

#### Tasks

- [ ] Confirm the ten category names, display order, menu labels, and final
  slugs.
- [ ] Confirm all 72 sub-services and their parent categories against the PDF.
- [ ] Confirm capitalization and terminology, including `Cyber Security` versus
  `Cybersecurity`, `WiFi`, `LV/ELV`, and `Synchronized` spelling.
- [ ] Confirm whether Tally Prime must have a dedicated sub-service card or sit
  within `ERP software`.
- [ ] Confirm whether the old combined Cloud/Microsoft 365 route should map to
  Cloud, Microsoft Cloud, or remain temporarily available.
- [ ] Verify every service count used in hero badges, trust strips, copy, FAQs,
  and structured data.
- [ ] Review each page's metadata, hero, overview, sub-service descriptions,
  differentiators, industries, FAQs, consultation copy, and cross-links.
- [ ] Verify current office name, address, phone, WhatsApp, email, and business
  hours.
- [ ] Verify certification, partnership, authorised-dealer, and reseller claims
  individually, including expiry or annual renewal where relevant.
- [ ] Verify named clients, results, logos, and permission to publish them.
- [ ] Verify claims such as 150+ clients, years in business, 24/7 coverage,
  response time, official pricing, and zero-data-loss guarantees.
- [ ] Mark each sensitive claim as `approved`, `withhold`, or `rewrite`.
- [ ] Confirm the category image and alt-text requirement for every page.

#### Deliverables

- Approved taxonomy sheet: 10 categories and 72 sub-services
- Content completeness matrix for every category section
- Business-claim verification register
- List of missing assets and copy decisions

#### Exit gate

- [ ] No category, sub-service, count, brand treatment, or public claim remains
  ambiguous.
- [ ] Any unresolved item has an approved safe fallback that does not assert an
  unverified fact.

### Phase 2 — Decide the legacy URL migration strategy

Objective: protect existing links and search equity before replacing the
20-page route model.

#### Tasks

- [ ] List all 20 current canonical URLs and legacy aliases.
- [ ] Collect Search Console landing-page clicks, impressions, indexing status,
  and external-link data when access is available.
- [ ] Map every old URL to an exact new category and stable sub-service anchor.
- [ ] Choose one outcome for each old URL: permanent redirect, temporary
  retention, or exceptional standalone page.
- [ ] Document the reason for each non-redirect exception.
- [ ] Ensure each redirect ends at a canonical `200` URL in one hop.
- [ ] Check for conflicts between existing `legacySlug` handling and framework
  redirects.
- [ ] Include query-string preservation where appropriate.
- [ ] Define a rollback approach for redirects if production monitoring finds a
  material issue.
- [ ] Approve how the combined Cloud/Microsoft 365 URL and Tally Prime URL will
  be handled.

#### Deliverables

- Complete 20-row redirect/retention matrix
- Approved stable anchor names
- Redirect implementation and rollback specification

#### Exit gate

- [ ] Every existing URL has exactly one approved outcome.
- [ ] No destination is ambiguous, missing, non-canonical, or part of a redirect
  chain.

### Phase 3 — Build the typed service-category content foundation

Objective: establish a single source of truth shared by routes, navigation,
hub cards, sitemap, and content pages.

#### Tasks

- [ ] Define TypeScript types for category identity, metadata, hero, trust
  stats, overview, sub-services, brands, differentiators, industries, FAQs,
  consultation fields, images, cross-links, and verification state.
- [ ] Create the lightweight category registry used by navigation and routing.
- [ ] Create or generate the long-form category content dataset.
- [ ] Add all ten category slugs in the approved order.
- [ ] Add all 72 sub-services with stable, human-readable IDs.
- [ ] Add authorised and regular brand arrays separately.
- [ ] Add legacy slugs and redirect targets without mixing them into display
  labels.
- [ ] Add image path, intrinsic dimensions, alt text, and focal-position data.
- [ ] Add helpers for category lookup, route construction, anchor construction,
  related service resolution, and enquiry context.
- [ ] Replace fragile label-based lookups with stable IDs or slugs.
- [ ] Add validation for duplicate category slugs, duplicate sub-service IDs,
  missing sections, empty CTAs, invalid links, incorrect card counts, and
  unapproved claims.
- [ ] Add a content inventory assertion for expected counts:
  `9, 9, 6, 4, 7, 15, 4, 1, 6, 11`.
- [ ] Keep legacy exports temporarily if required to avoid breaking existing
  pages during incremental development.

#### Deliverables

- Typed category registry
- Complete normalized category content
- Content-validation command or automated tests
- Compatibility layer for the existing implementation, if needed

#### Exit gate

- [ ] Validation confirms exactly 10 unique categories and 72 unique
  sub-services.
- [ ] Every category is complete enough to render without placeholder text.
- [ ] Existing pages still compile before routing is switched.

### Phase 4 — Build the reusable category-page foundation

Objective: implement the shared page structure before multiplying it across all
categories.

#### Tasks

- [ ] Create the category route using static params for the ten valid slugs.
- [ ] Return a proper 404 for invalid category slugs.
- [ ] Implement server-rendered breadcrumbs with valid links.
- [ ] Implement the hero, badges, CTAs, and optimized responsive image.
- [ ] Implement the trust strip without hard-coded counts.
- [ ] Implement the overview section with controlled reading width.
- [ ] Implement the sub-service grid using stable card anchor IDs.
- [ ] Implement icon rendering and a fallback for invalid icon names.
- [ ] Implement authorised and regular brand-pill treatments.
- [ ] Implement category-specific differentiators and proof content.
- [ ] Implement industries and category-to-solution cross-links.
- [ ] Implement accessible FAQs with visible answers available to crawlers.
- [ ] Implement consultation content and form placement.
- [ ] Reuse the existing footer and site-wide components.
- [ ] Add empty-state protection for optional sections without leaving visual
  gaps or invalid headings.
- [ ] Extend existing design tokens and component patterns; do not copy the
  prototype's white background or annotations.
- [ ] Preserve reduced-motion preferences.

#### Deliverables

- Reusable `ServiceCategoryPage` implementation
- Shared category-page styles
- Static category route with invalid-slug handling

#### Exit gate

- [ ] The template can render short, normal, and long content without source
  code changes.
- [ ] All primary copy is server-rendered and the heading order is valid.
- [ ] No placeholder, wireframe annotation, or prototype styling reaches the
  rendered page.

### Phase 5 — Implement and approve the IT Services pilot

Objective: validate the template with real content before completing the other
nine pages.

#### Tasks

- [ ] Populate all nine IT Services cards and all other supplied sections.
- [ ] Add final metadata, canonical, Open Graph data, and structured data.
- [ ] Add the approved image and verify dimensions, crop, loading priority, and
  alt text.
- [ ] Connect hero and card enquiry actions with the correct service context.
- [ ] Test the page at 320, 390, 768, 1024, 1440, and wide-desktop widths.
- [ ] Review hierarchy, copy density, line length, card height variation,
  spacing, pills, hover/focus states, and CTA prominence.
- [ ] Test keyboard navigation, screen-reader names, reduced motion, and colour
  contrast.
- [ ] Compare the result with existing XOFOZ pages for brand continuity.
- [ ] Review the pilot with the stakeholder and record requested changes.
- [ ] Apply approved template-level changes before building other pages.

#### Deliverables

- Complete IT Services category page
- Responsive and accessibility QA evidence
- Approved template and design decisions

#### Exit gate

- [ ] The pilot is approved on content, visual design, responsive behaviour,
  accessibility, SEO, and conversion flow.
- [ ] No known template-level issue is deferred to category rollout.

### Phase 6 — Populate and verify all remaining category pages

Objective: complete the full category inventory while testing every layout edge
case.

#### Recommended batches

1. Cyber Security and Data Backup and Protection
2. Server and Storage and Network Solutions
3. Communication and LV
4. Cloud and AI Solutions
5. Software Solutions and Microsoft Cloud

#### Tasks for every category

- [ ] Add every approved section from the PDF with no omissions.
- [ ] Confirm category name, slug, H1, breadcrumb, focus keyword, and canonical
  agree.
- [ ] Confirm the rendered card count matches the approved count.
- [ ] Confirm every card name, description, icon, brand pill, anchor, and CTA.
- [ ] Confirm differentiators, industries, FAQs, consultation fields, and
  solution cross-link.
- [ ] Add and visually inspect the final optimized image and alt text.
- [ ] Validate metadata and structured data.
- [ ] Check desktop, tablet, and mobile layout.
- [ ] Check keyboard and touch interactions.
- [ ] Record completion in the category matrix before moving to the next batch.

#### Required edge-case checks

- [ ] Communication and LV: 15 cards across five desktop rows.
- [ ] AI Solutions: one intentional featured card with no empty-grid appearance.
- [ ] Microsoft Cloud: 11 cards, long titles, and dense descriptions.
- [ ] Server and Storage and Cloud: four-card grids balance correctly.
- [ ] Categories with long brand lists wrap without collision or overflow.

#### Deliverables

- Ten complete and reviewed category pages
- Per-category content and layout checklist
- Image inventory with paths, dimensions, and alt text

#### Exit gate

- [ ] All ten category URLs render successfully and contain all 72 approved
  cards exactly once.
- [ ] No category contains missing content, placeholder copy, incorrect brands,
  or unapproved claims.

### Phase 7 — Rework the Services menu

Objective: make the ten-category hierarchy clear and fully accessible in the
global navigation.

#### Tasks

- [ ] Replace the 20 flat service links with the ten category registry entries.
- [ ] Add a prominent `View all services` link.
- [ ] Link every category directly to its canonical category URL.
- [ ] Remove obsolete expanded-menu logic only after confirming other menus do
  not depend on it.
- [ ] Preserve the visual panel and motion language used by the current header.
- [ ] Close the menu after navigation and on backdrop click or Escape.
- [ ] Return focus to the menu trigger after keyboard dismissal.
- [ ] Keep `aria-expanded`, `aria-hidden`, labels, and controlled-element IDs in
  sync with actual state.
- [ ] Confirm hover does not prevent click or keyboard activation.
- [ ] Confirm the menu is usable at 200% zoom and on narrow screens.
- [ ] Confirm scroll locking is added and removed correctly.
- [ ] Verify Services, Products, Solutions, Industries, About, and Contact were
  not regressed.

#### Deliverables

- Ten-category desktop and mobile Services menu
- Navigation interaction test record

#### Exit gate

- [ ] The menu exposes exactly ten unique service category links plus `View all
  services`.
- [ ] The full menu works with mouse, keyboard, touch, zoom, and reduced motion.

### Phase 8 — Rework the `/services` hub

Objective: provide a clear category-level overview and discovery page.

#### Tasks

- [ ] Replace the 20-card flat grid with ten cards derived from the category
  registry.
- [ ] Add an H1 and introduction explaining the parent/sub-service structure.
- [ ] Show approved summary, service count, and representative sub-services on
  every card.
- [ ] Ensure the entire card or a clearly labelled CTA links to the canonical
  category page without nested interactive elements.
- [ ] Preserve server rendering and valid heading order.
- [ ] Use consistent card heights without truncating meaningful text.
- [ ] Test hover, focus, touch, and reduced-motion states.
- [ ] Check 320/390 mobile, tablet, desktop, 200% zoom, and text enlargement.
- [ ] Ensure category order matches the menu and sitemap.
- [ ] Add metadata, canonical, Open Graph data, and hub-level breadcrumbs if
  used by the design.

#### Deliverables

- Complete ten-category Services hub
- Responsive hub screenshots and accessibility checks

#### Exit gate

- [ ] The hub shows exactly ten categories in the approved order and no
  sub-service is presented as a top-level peer.
- [ ] Every card reaches the correct category URL.

### Phase 9 — Complete enquiry and conversion flows

Objective: ensure every CTA preserves user intent and reaches a working lead
channel.

#### Tasks

- [ ] Define a stable enquiry payload containing category ID, sub-service ID,
  labels, source URL, and CTA location.
- [ ] Preselect the category and sub-service when a card CTA opens the form.
- [ ] Preserve the selected context when scrolling to or opening the form.
- [ ] Prefill WhatsApp with concise, readable, URL-encoded context.
- [ ] Give users an opportunity to review/edit the message before sending.
- [ ] Validate required fields, helpful errors, loading state, success state,
  failure state, and duplicate-submission protection.
- [ ] Confirm form labels, autocomplete attributes, focus movement, and status
  announcements are accessible.
- [ ] Preserve existing spam protection and privacy/consent behaviour.
- [ ] Verify analytics events do not expose personal information.
- [ ] Test hero CTA, category CTA, every type of card CTA, and direct contact
  fallback on desktop and mobile.

#### Deliverables

- Category-aware lead form and WhatsApp flow
- End-to-end conversion test evidence

#### Exit gate

- [ ] A test enquiry from any sub-service arrives with the correct category,
  sub-service, source page, and CTA source.
- [ ] Failure states provide a usable alternative contact route.

### Phase 10 — Update all site integrations and internal links

Objective: remove remaining assumptions that services are a flat 20-item list.

#### Tasks

- [ ] Update homepage service sections and `View all services` links.
- [ ] Update footer service links.
- [ ] Update related-service resolution and cards.
- [ ] Update breadcrumbs and cross-links from solution pages where applicable.
- [ ] Update contact-form service choices.
- [ ] Update sitemap generation from the category registry.
- [ ] Update metadata helpers and canonical construction.
- [ ] Update JSON-LD references to new canonical URLs.
- [ ] Update robots or other discovery files only if actually required.
- [ ] Search source, public content, generated files, and configuration for all
  old slugs and review every remaining match.
- [ ] Ensure no UI imports the deprecated flat array after migration.
- [ ] Remove obsolete code only after all consumers are migrated and tested.

#### Deliverables

- Site-wide integration diff
- Reviewed report of remaining legacy-slug references and why they remain

#### Exit gate

- [ ] All user-facing service links use the new hierarchy.
- [ ] Remaining old slugs exist only in the approved redirect/compatibility
  layer.

### Phase 11 — Apply redirects and complete technical SEO

Objective: launch the new URLs without broken links, duplicate pages, or mixed
search signals.

#### Tasks

- [ ] Add permanent redirects exactly as approved in Phase 2.
- [ ] Confirm anchors exist on the destination pages.
- [ ] Confirm every old URL resolves in one redirect to a `200` destination.
- [ ] Confirm canonical URLs are self-referencing on all ten category pages and
  the Services hub.
- [ ] Remove redirected URLs from the sitemap and add all canonical category
  URLs.
- [ ] Ensure no canonical points to a redirected or missing URL.
- [ ] Verify unique title, description, H1, and Open Graph data per category.
- [ ] Validate `BreadcrumbList`, `Service`, `FAQPage`, and local-business entity
  references against the visible page content.
- [ ] Confirm FAQ schema includes only visible FAQ content.
- [ ] Confirm structured data contains no unverified ratings, pricing, or
  availability claims.
- [ ] Crawl the local production build for broken internal links, redirect
  chains, duplicate titles, duplicate descriptions, missing canonicals, and
  orphan category pages.
- [ ] Confirm an invalid category URL returns a true 404 and is not redirected
  to the hub.

#### Deliverables

- Implemented redirect set
- Final sitemap and canonical inventory
- Technical SEO validation report

#### Exit gate

- [ ] All approved legacy URLs, canonical category URLs, anchors, schema, and
  sitemap entries pass automated and manual checks.

### Phase 12 — Full regression, performance, and accessibility QA

Objective: prove the rework is release-ready and has not damaged other site
areas.

#### Functional checks

- [ ] Run formatting checks, lint, type check, automated tests, and production
  build.
- [ ] Verify the hub, all ten category pages, all approved redirects, and an
  invalid slug.
- [ ] Verify menu, breadcrumbs, cards, FAQs, forms, WhatsApp, footer, homepage
  links, and solution cross-links.
- [ ] Confirm the production build statically generates or serves every intended
  category route as designed.

#### Content checks

- [ ] Confirm counts `9, 9, 6, 4, 7, 15, 4, 1, 6, 11` and total `72`.
- [ ] Compare rendered content against the approved content matrix.
- [ ] Search rendered pages for placeholders, developer notes, wireframe labels,
  and unapproved claims.
- [ ] Proofread headings, punctuation, brand names, UAE terminology, phone
  numbers, and contact details.

#### Responsive and browser checks

- [ ] Test 320, 390, 768, 1024, 1440, and wide desktop widths.
- [ ] Test current Chrome, Safari, Firefox, and Edge where available.
- [ ] Test portrait and landscape mobile orientation.
- [ ] Verify no horizontal overflow, clipped text, overlapping controls,
  unexpected card truncation, or layout shift.

#### Accessibility checks

- [ ] Complete keyboard-only navigation.
- [ ] Verify focus visibility, focus order, menu focus return, skip navigation,
  form errors, and FAQ state.
- [ ] Run automated accessibility checks and manually review important findings.
- [ ] Test zoom/reflow at 200% and reduced-motion mode.
- [ ] Check heading hierarchy, landmarks, accessible names, alt text, and colour
  contrast.

#### Performance checks

- [ ] Review image formats, dimensions, responsive sizes, loading strategy, and
  unnecessary asset weight.
- [ ] Confirm only the hero image receives high loading priority where useful.
- [ ] Review client-side JavaScript added by menus, FAQs, and forms.
- [ ] Check representative mobile and desktop performance metrics and address
  material regressions.

#### Deliverables

- Completed master QA checklist
- Screenshots for hub, IT Services, Communication and LV, AI Solutions, and
  Microsoft Cloud at representative widths
- Defect log with severity and resolution

#### Exit gate

- [ ] No critical or high-severity issue remains.
- [ ] Medium issues have an explicit approved disposition.
- [ ] The production build and all required acceptance criteria pass.

### Phase 13 — Release, smoke test, and rollback readiness

Objective: release safely and verify production behaviour immediately.

#### Before release

- [ ] Confirm backup/version rollback path and responsible contact.
- [ ] Confirm production environment variables and lead-delivery configuration.
- [ ] Confirm claim, content, design, SEO, and QA approvals are recorded.
- [ ] Freeze the redirect matrix for the release.

#### Immediately after release

- [ ] Open `/services` and all ten category URLs in production.
- [ ] Test at least one old URL from each destination category.
- [ ] Test one invalid URL.
- [ ] Test desktop and mobile navigation.
- [ ] Submit one production-safe test form and one WhatsApp flow.
- [ ] Confirm analytics and conversion events fire once with no personal data.
- [ ] Inspect canonical, robots directive, sitemap, and JSON-LD in production.
- [ ] Check server/client logs for route, render, form, and image errors.
- [ ] Confirm cache/CDN behaviour does not serve old navigation or stale pages.

#### Rollback triggers

- Category routes return errors or widespread 404s.
- Enquiries fail or lose category/sub-service context.
- Redirect loops or broad incorrect redirects appear.
- Pages become non-indexable through accidental robots or canonical changes.
- Navigation becomes unusable on a major viewport or input method.

#### Exit gate

- [ ] Production smoke tests pass and no rollback trigger is present.
- [ ] Release notes record the final route set, redirects, and known low-risk
  follow-ups.

### Phase 14 — Post-launch monitoring and cleanup

Objective: verify that users and search engines transition successfully and
retire temporary compatibility code only when safe.

#### First 24 hours

- [ ] Monitor application errors, 404s, redirect anomalies, form delivery,
  WhatsApp clicks, menu usage, and performance.
- [ ] Check production logs for missing images and invalid category lookups.

#### First 7 days

- [ ] Review Search Console coverage, sitemap processing, canonical selection,
  crawl errors, and traffic to old/new URLs.
- [ ] Review category-page engagement and enquiry attribution.
- [ ] Correct unexpected external-link or internal-link destinations.

#### At 30 days

- [ ] Compare organic landing traffic, impressions, rankings, engagement, and
  conversions with the baseline.
- [ ] Review whether retained legacy pages can now redirect safely.
- [ ] Reconfirm time-sensitive certifications and partner claims.
- [ ] Add newly discovered redirects to the explicit matrix, not broad wildcard
  rules.
- [ ] Remove deprecated service data and compatibility helpers only when logs,
  search data, and code search show they are no longer needed.
- [ ] Update the maintenance documentation with the final content-editing and
  category-addition workflow.

#### Deliverables

- 24-hour, 7-day, and 30-day monitoring notes
- Final cleanup change, if required
- Maintainer handoff covering content, routes, redirects, and verification

#### Exit gate

- [ ] Search discovery and enquiry delivery are stable.
- [ ] Temporary compatibility code is either safely removed or documented with
  an owner and review date.

## 11. Master phase tracker

| Phase | Name | Required output | Status |
| --- | --- | --- | --- |
| 0 | Baseline | Route/link inventory and baseline QA | Complete |
| 1 | Content approval | Taxonomy, content matrix, verified claims | Complete |
| 2 | URL strategy | Approved 20-row migration matrix | Complete |
| 3 | Data foundation | Validated registry and 72 sub-services | Complete |
| 4 | Shared template | Reusable category page and route | Complete |
| 5 | IT Services pilot | Approved real-content pilot | Complete |
| 6 | Category rollout | All ten category pages | Complete |
| 7 | Header menu | Ten-category accessible menu | Complete |
| 8 | Services hub | Ten-category `/services` page | Complete |
| 9 | Enquiries | Context-aware form and WhatsApp flow | Complete |
| 10 | Integrations | Site-wide links and consumers updated | Complete |
| 11 | SEO migration | Redirects, sitemap, canonicals, schema | Complete |
| 12 | QA | Passing regression/performance/a11y record | Complete |
| 13 | Release | Production smoke test and release note | Ready for review |
| 14 | Monitoring | 24-hour, 7-day, and 30-day review | Not started |

Allowed status values: `Not started`, `In progress`, `Blocked`, `Ready for
review`, and `Complete`. A phase may be marked `Complete` only when its exit
gate and deliverables are satisfied.

## 12. Final acceptance criteria

The rework is complete when:

- the Services menu contains exactly ten top-level service categories;
- `/services` presents exactly the same ten categories in the same order;
- all 72 supplied sub-services appear once under the correct parent category;
- each category has a working, indexable page using the common template;
- sub-services are not presented as main menu peers;
- desktop, tablet, and mobile layouts meet the responsive rules;
- every enquiry retains its selected category and sub-service context;
- all approved legacy URLs resolve without redirect chains or 404s;
- internal links, breadcrumbs, sitemap, canonicals, metadata, and schema agree
  on the new route structure;
- unverified claims are not published as confirmed facts;
- lint, type check, production build, accessibility checks, and representative
  visual QA pass.

## 13. Out of scope for this plan

- Creating 72 new individual sub-service pages
- Redesigning Products, Solutions, Industries, About, or Contact beyond links
  required by the service migration
- Copying the wireframe's visual styling or annotation system
- Publishing unverified certification, partnership, client, or performance
  claims
- Deploying to production before the redirect matrix and business claims are
  approved
