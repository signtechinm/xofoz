# XOFOZ Services Area — Execution Log

This log records phase status and verification evidence for
`SERVICES_AREA_REWORK_PLAN.md`.

## Phase 0 — Baseline

Status: Complete

Completed on: 2026-08-18

### Repository baseline

- Branch: `main`
- Starting commit: `104687a wire`
- Starting user/worktree content: no tracked source changes; the new planning
  document was untracked.
- Runtime: Node `v24.5.0`, npm `11.5.1`, Next.js `15.5.20`
- Repository-specific `AGENTS.md`: none within this project.

### Build and tooling baseline

- `npm run build`: passed after network access was allowed for the Google-hosted
  Geist font used by `next/font`.
- Production output before the rework: 40 static pages, including `/services`,
  20 statically generated service-detail paths, `/solutions`, and 10 solution
  category paths.
- `npx tsc --noEmit`: initially failed because `.next/types` referenced stale
  missing generated files; passed after the production build regenerated them.
- `npm run lint`: not usable as an automated check because `next lint` opens the
  first-time ESLint configuration prompt. This is a pre-existing tooling gap;
  Phase 12 must either configure ESLint deliberately or record lint as blocked
  while still running type-check and production build.

### Current architecture confirmed

- `data/services.ts` is a flat registry of 20 services.
- `components/Header.tsx` maps all 20 records directly into the Services menu.
- `app/services/page.tsx` maps the same 20 records directly into the hub grid.
- `app/services/[slug]/page.tsx` statically generates the 20 individual pages.
- `data/service-content.ts` parses the legacy 20-page content source.
- `components/ServicePageTemplate.tsx` renders the legacy page structure.
- `app/sitemap.ts` publishes all 20 current service URLs.
- `next.config.mjs` already redirects 20 older aliases to the current 20 URLs.
- `components/Footer.tsx`, `data/products.ts`, and related-service helpers contain
  direct links to current service-detail URLs.
- The solution area already provides a useful category-page architecture
  reference, but the new service implementation must preserve service-specific
  content and enquiry requirements.

### Baseline verification assets

- `tmp-verification/services-rework-baseline/services-desktop.png`
- `tmp-verification/services-rework-baseline/services-mobile.png`
- `tmp-verification/services-rework-baseline/menu-desktop.png`
- `tmp-verification/services-rework-baseline/menu-mobile.png`

### Phase 0 exit gate

- Current service URLs and primary consumers of the flat registry are
  inventoried.
- Existing compilation state is documented.
- Existing desktop and mobile Services hub/menu states are captured.
- Pre-existing lint and generated-type behaviours are documented.

## Phase status

| Phase | Status | Notes |
| --- | --- | --- |
| 0 — Baseline | Complete | Exit gate passed |
| 1 — Content approval | Complete | Supplied PDF adopted; sensitive claims flagged |
| 2 — URL strategy | Complete | Direct canonical/anchor map approved |
| 3 — Data foundation | Complete | 10 categories and 72 cards validated |
| 4 — Shared template | Complete | Reusable route/template compiled |
| 5 — IT Services pilot | Complete | Parser and 3/2/1 grid defects corrected |
| 6 — Category rollout | Complete | All category/count/layout checks passed |
| 7 — Header menu | Complete | Ten categories plus View all services |
| 8 — Services hub | Complete | Ten category-led cards |
| 9 — Enquiries | Complete | Category/sub-service/source preserved |
| 10 — Integrations | Complete | Footer, products, links, route consumers |
| 11 — SEO migration | Complete | 40 redirects and 10 sitemap URLs verified |
| 12 — QA | Complete with noted lint gap | Build/type/browser/redirect checks pass |
| 13 — Release | Ready for review | Production deployment requires authorization |
| 14 — Monitoring | Not started | Begins only after production deployment |

## Phase 1 — Taxonomy, content, naming, and claims audit

Status: Complete with publication safeguards

Completed on: 2026-08-18

### Approved source decisions

- The `SERVICES UPDATED` section of the supplied `XOFOZ.pdf` is the content
  source for the ten new category pages.
- The supplied HTML wireframe governs section hierarchy and responsive intent,
  not production colour, typography, component styling, or visible annotation.
- The category order and sub-service inventory in the rework plan are adopted:
  ten categories and 72 sub-services with counts
  `9, 9, 6, 4, 7, 15, 4, 1, 6, 11`.
- Page terminology follows the source: `Cyber Security`, `WiFi`,
  `Communication and LV`, and `Synchronized data storage` in public labels.
- Tally Prime is represented inside the `ERP software` sub-service because the
  supplied updated taxonomy does not define a separate Tally Prime card.
- Cloud and Microsoft Cloud remain separate parent categories.
- AI Solutions intentionally has one current sub-service and must use the
  featured-card layout.

### Publication safeguards

The supplied PDF is accepted as requested website copy, but it is not
independent evidence for factual business claims. The data model must allow
these claims to be flagged and revised without component changes.

Claims requiring business-owner confirmation include:

- ADMCC and engineer certification status
- Microsoft partner and Azure certification status
- HikVision, Tally Prime, Synology, QNAP, Fortinet, Sophos, ESET, Aruba, UniFi,
  and other authorised/certified partner wording
- named-client relationships, outcomes, and logo permission
- `150+` business/client/migration counts and `3+` years wording
- 24/7 availability or support implications
- response-time, zero-data-loss, official-pricing, and performance guarantees
- address, phone, WhatsApp, email, and opening-hours accuracy at launch

Implementation policy: preserve supplied copy as the requested content source,
store verification-sensitive content explicitly, do not invent additional
claims, and include final business verification in the release gate. If a
claim is rejected before release, replace it with neutral wording rather than
leaving an empty layout.

### Phase 1 exit gate

- Ten categories, order, slugs, terminology, and all 72 sub-services are fixed.
- Tally Prime placement and the Cloud/Microsoft Cloud split are defined.
- Sensitive claims have a safe implementation and release-review policy.
- No missing decision blocks typed data or template work.

## Phase 2 — Legacy URL migration strategy

Status: Complete

Completed on: 2026-08-18

### Migration policy

- The new ten category routes are canonical.
- Current 20 service-detail URLs permanently redirect to the closest new
  category/card after the category pages are available.
- The 20 older aliases already in `next.config.mjs` must be changed to point
  directly to the final destination, never through the current service URL.
- Query strings use the framework's normal redirect preservation behaviour.
- Stable anchors are part of the destination contract and must not be renamed
  without updating redirects.
- The redirect implementation is applied only in Phase 11, after destinations
  and internal links have passed QA.
- Rollback consists of reverting the explicit redirect table and restoring the
  retained legacy route registry; no wildcard redirect will be used.

### Current canonical URL mapping

| Current route | Final destination |
| --- | --- |
| `/services/it-amc-abu-dhabi` | `/services/it-services#it-amc-annual-maintenance-contract` |
| `/services/it-support-abu-dhabi` | `/services/it-services#it-support` |
| `/services/office-it-setup-abu-dhabi` | `/services/it-services#new-office-it-setup` |
| `/services/network-infrastructure-abu-dhabi` | `/services/network-solutions#network-solutions` |
| `/services/structured-cabling-abu-dhabi` | `/services/network-solutions#structured-cabling` |
| `/services/cybersecurity-solutions-abu-dhabi` | `/services/cyber-security#cyber-security-solutions` |
| `/services/cloud-solutions-microsoft-365-abu-dhabi` | `/services/microsoft-cloud#microsoft-365-solutions` |
| `/services/cctv-access-control-abu-dhabi` | `/services/communication-lv` |
| `/services/biometric-systems-abu-dhabi` | `/services/communication-lv#biometric-attendance-system` |
| `/services/hardware-av-solutions-abu-dhabi` | `/services/communication-lv#av-system` |
| `/services/pabx-telephone-systems-abu-dhabi` | `/services/communication-lv#ip-phone-solutions` |
| `/services/video-conferencing-abu-dhabi` | `/services/communication-lv#av-system` |
| `/services/pos-systems-abu-dhabi` | `/services/software-solutions#pos-software-solutions` |
| `/services/erp-solutions-abu-dhabi` | `/services/software-solutions#erp-software` |
| `/services/tally-prime-abu-dhabi` | `/services/software-solutions#erp-software` |
| `/services/data-backup-recovery-abu-dhabi` | `/services/data-backup-protection#backup-as-a-service` |
| `/services/server-management-abu-dhabi` | `/services/server-storage#server-solutions` |
| `/services/website-development-abu-dhabi` | `/services/software-solutions#web-design` |
| `/services/remote-it-support-abu-dhabi` | `/services/it-services#it-support` |
| `/services/vpn-network-security-abu-dhabi` | `/services/network-solutions#vpn-solutions` |

### Existing alias policy

Each old alias (`it-amc`, `on-call-it-support`, `office-it-setup`,
`network-and-infrastructure`, `structured-cabling`,
`cybersecurity-and-firewall`, `cloud-solutions-and-microsoft-365`,
`cctv-and-access-control`, `biometric-systems`, `hardware-and-av-solutions`,
`pabx-and-telephone-systems`, `video-conferencing`, `pos-systems`,
`erp-solutions`, `tally-prime`, `data-backup-and-recovery`,
`server-management`, `website-development`, `remote-it-support`, and
`vpn-and-network-security`) will use the same final destination as its current
canonical counterpart.

### Mapping rationale for combined pages

- CCTV and Access Control redirects to the Communication and LV category top
  because the old URL represents two distinct new cards.
- The combined Cloud/Microsoft 365 route redirects to Microsoft 365 Solutions
  because its old title and supplied content are predominantly Microsoft 365
  intent; the separate new Cloud category remains linked from that page.
- Tally Prime redirects to ERP Software because Tally is covered explicitly in
  that card in the updated taxonomy.
- Video Conferencing redirects to AV System because the updated category does
  not define a separate video-conferencing card.

### Phase 2 exit gate

- Every current route has one final destination.
- All prior aliases inherit the same direct destination.
- Every anchor is included in the Phase 3 data contract.
- No wildcard, redirect chain, or destination ambiguity remains.

## Phase 3 — Typed data foundation

Status: Complete

- Added `data/service-categories.ts` as the lightweight identity, navigation,
  route, image, summary, and count registry.
- Added `data/service-category-content.ts` as the server-only normalized content
  loader.
- Added the PDF text extraction as `public/plan/XOFOZ_PDF_EXTRACT.txt` so the
  supplied content remains locally reproducible and reviewable.
- Added stable card IDs, separate authorised/regular brand lists, typed hero,
  overview, reasons, industries, FAQs, CTA, and claim-review state.
- Replaced label-dependent category identity with stable IDs and slugs.
- Content report passes for all categories: 72 cards, 40 reasons, 50 industries,
  and 60 FAQs.

Phase 3 exit gate: passed.

## Phase 4 — Reusable category page

Status: Complete

- Added a reusable server-rendered category page with breadcrumbs, hero, trust
  content, overview, sub-service cards, brands, differentiators, industries,
  FAQs, structured data, and consultation area.
- Added static params and metadata for all ten category slugs.
- Retained the 20 old pages temporarily in the shared dynamic route so the
  migration remains non-breaking until redirects are applied in Phase 11.
- Added stable card anchors and a featured one-card variant.
- Added category-aware enquiry components and reduced-motion-aware scrolling.
- Production build passes and generates 30 service paths during transition.

Phase 4 exit gate: passed.

## Phase 5 — IT Services pilot

Status: Complete

- Verified exactly one H1, nine cards, correct metadata, no placeholder text,
  and zero horizontal overflow at 320, 390, 768, and 1440 pixels.
- Captured pilot screenshots in `tmp-verification/services-rework-pilot/`.
- Visual review found and corrected parser boundaries that exposed developer
  notes and NAP/schema text in visible content.
- Visual review found and corrected a four-column desktop grid inherited from
  Solutions; service category cards now follow the required 3/2/1 responsive
  grid.
- Authorised and regular brand pills render with separate treatments.
- The page retains the established XOFOZ dark visual system.

Phase 5 exit gate: passed.

## Phase 6 — Category rollout

Status: Complete

- All ten categories render from the shared content model and template.
- Automated browser checks passed at 390, 1024, and 1440 pixels for status,
  one-H1 structure, card counts, content cleanliness, and horizontal overflow.
- Responsive card columns pass at 1/2/3 for mobile/tablet/desktop.
- Communication and LV renders all 15 cards in five desktop rows.
- Microsoft Cloud renders all 11 cards and long titles without overflow.
- AI Solutions uses one intentional feature column at every viewport.
- Edge-case screenshots are stored in
  `tmp-verification/services-rework-categories/`.

Phase 6 exit gate: passed.

## Phase 7 — Services menu

Status: Complete

- Replaced the flat 20-link service list with the ten category registry.
- Added `View all services` to the Services submenu.
- Added `aria-controls`, Escape dismissal, and focus return to the menu trigger.
- Verified exactly ten service category links, keyboard dismissal, focus return,
  mobile rendering, and no horizontal overflow.

Phase 7 exit gate: passed.

## Phase 8 — Services hub

Status: Complete

- Replaced 20 equal service cards with ten parent-category cards.
- Each card contains summary copy, sub-service count, three representative
  sub-services, and one canonical category link.
- Updated hub metadata and introduction to explain the hierarchy.
- Verified ten cards at mobile, tablet, and desktop widths.

Phase 8 exit gate: passed.

## Phase 9 — Enquiry flow

Status: Complete

- Card CTAs pass category, sub-service, and CTA-source context to the form.
- All supplied category form fields render rather than discarding fields after
  the fourth entry.
- Form-generated WhatsApp text includes category, selected sub-service, source
  page, CTA source, and visitor-entered fields.
- Hero and consultation WhatsApp links include category context.
- Automated submission intercepted the outbound window and verified the
  prepared message without sending it externally.

Phase 9 exit gate: passed.

## Phase 10 — Site integrations

Status: Complete

- Updated footer service links to canonical categories.
- Updated product-to-service links to category card anchors.
- Updated related-service resolution to canonical categories and anchors.
- Removed the deprecated flat service registry from active routes, header, hub,
  and sitemap consumers.
- Existing legacy implementation files remain as inert compatibility/history
  code and can be removed separately after production monitoring.

Phase 10 exit gate: passed.

## Phase 11 — Redirects and technical SEO

Status: Complete

- Added 40 explicit permanent redirects: 20 older aliases and 20 current legacy
  canonical routes, all pointing directly to the final category/anchor.
- Verified all 40 sources are unique, return `308`, preserve a test query, end
  at a `200` page, and reference an existing anchor where applicable.
- Sitemap now publishes exactly the ten canonical service categories and no
  `-abu-dhabi` legacy service URLs.
- Category routes have unique metadata, self-referencing canonical paths, Open
  Graph content, breadcrumb schema, category Service/OfferCatalog schema, and
  FAQ schema based on visible content.
- Invalid category route returns `404`.

Phase 11 exit gate: passed.

## Phase 12 — QA

Status: Complete

Passing evidence:

- `npx tsc --noEmit`
- `npm run lint` (passes with 12 pre-existing `<img>` optimization warnings and
  no errors)
- `npm run build`: 30 static pages, including the hub and ten category paths
- All category counts and the total of 72 cards
- Browser checks at 320, 390, 768/1024, and 1440 pixels
- No horizontal overflow in tested service routes and hub/menu viewports
- One H1 and correct card count on each category
- No visible developer notes, NAP parser leakage, or category placeholders
- Keyboard Escape and menu-trigger focus return
- Category/sub-service enquiry context
- All 40 redirects and destination anchors
- Exactly ten canonical service sitemap URLs
- Invalid category `404`

Tooling improvement:

- Added ESLint 9, the matching Next.js ESLint configuration, a flat config, and
  a non-interactive `npm run lint` command. The pre-existing lint setup prompt
  is resolved. Twelve existing `<img>` optimization warnings remain outside the
  service-area rework; there are no lint errors.

Final verification captures are in `tmp-verification/services-rework-final/`.

Phase 12 exit gate: passed.
