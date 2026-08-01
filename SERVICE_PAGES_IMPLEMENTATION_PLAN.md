# XOFOZ Service Pages — Implementation Plan

## Purpose

Build 20 complete, responsive, SEO-ready service pages from:

- `public/plan/xofoz_service_page_wireframe.html`
- `public/plan/XOFOZ.md`

The wireframe defines content hierarchy and conversion flow. It is not the
visual design to copy. The current XOFOZ homepage is the visual source of truth
for every service page.

## Non-negotiable visual direction

All service pages must feel like a natural continuation of the existing
homepage.

Reuse the current design language:

- Dark navy background and layered blue radial gradients
- Cyan accent colour and restrained success green
- Existing Geist typography and heading weights
- Existing sticky glass header and full site footer
- Existing `page-band` horizontal spacing and responsive breakpoints
- Thin translucent borders using the current `--line` token
- Dark blue surface cards using `--surface` and `--surface-2`
- Existing button shapes, hover states, shadows, and CTA hierarchy
- Existing `Reveal` motion pattern and reduced-motion behaviour
- Editorial image treatment already used on the homepage
- Compact uppercase cyan eyebrow labels
- Generous vertical rhythm and readable text widths

Do not copy the wireframe's white background, gray cards, blue prototype
buttons, browser chrome, annotations, or SEO badges into production. Those are
documentation devices only.

New service-page CSS should primarily use the existing variables in
`styles.css`:

- `--bg`
- `--bg-soft`
- `--surface`
- `--surface-2`
- `--text`
- `--muted`
- `--line`
- `--brand-blue`
- `--brand-blue-2`
- `--brand-navy`
- `--accent`
- `--success`
- `--shadow`
- `--radius`
- `--hero-gradient`

## Source review and known blockers

The wireframe defines a consistent page flow:

1. Breadcrumb
2. Hero
3. Service explanation and comparison
4. Problems caused by not having the service
5. Inclusions
6. Three-step process
7. Why XOFOZ
8. Industries served
9. FAQs
10. Client trust block
11. Related services
12. Consultation form and local contact information
13. Existing global footer

The source content is substantially complete for 19 pages. The Cloud Solutions
and Microsoft 365 entry stops during Section 5 and is missing the remainder of
the page. It must not be presented as complete until the missing copy is
provided or approved.

Claims that require business verification before publication:

- 150+ active clients
- 150+ businesses migrated
- 24/7 availability
- Response-time promises
- Zero-data-loss guarantees
- ADMCC certification
- Microsoft and other vendor partnership levels
- Named-client service relationships
- Named-client results or metrics
- Permission to display client names and logos
- Exact office address, phone, email, and working hours

Unverified claims should be marked in the content data and withheld rather than
silently published.

## Page and content architecture

Use one reusable service-page template fed by structured service data. Do not
build 20 independent page components or paste large content blocks directly
into JSX.

Each service record should contain:

- Menu label and final slug
- Meta title and description
- Canonical URL
- Focus and secondary keywords
- Breadcrumb label
- Hero eyebrow, H1, summary, CTAs, and trust statistics
- Overview paragraphs
- Comparison headings and lists
- Pain points
- Inclusion list
- Custom plan panel
- Three process steps
- Differentiators
- Certifications and partnerships
- Industries
- FAQs
- Client proof
- Related services
- Consultation copy and form fields
- Image path, alt text, width, and height
- Open Graph image
- Verification state for sensitive claims

Suggested components:

- `ServiceBreadcrumbs`
- `ServiceHero`
- `ServiceTrustStats`
- `ServiceOverviewComparison`
- `ServicePainPoints`
- `ServiceInclusions`
- `ServiceProcess`
- `ServiceDifferentiators`
- `ServiceIndustries`
- `ServiceFaq`
- `ServiceClientProof`
- `RelatedServices`
- `ServiceConsultation`
- `ServiceStructuredData`

All primary content must be server-rendered and visible to crawlers without
requiring interaction.

## URL plan

Use the final SEO URLs supplied in `XOFOZ.md`, including:

- `/services/it-amc-abu-dhabi`
- `/services/it-support-abu-dhabi`
- `/services/office-it-setup-abu-dhabi`
- `/services/network-infrastructure-abu-dhabi`
- `/services/structured-cabling-abu-dhabi`
- `/services/cybersecurity-solutions-abu-dhabi`
- `/services/cloud-solutions-microsoft-365-abu-dhabi`
- `/services/cctv-access-control-abu-dhabi`
- `/services/biometric-systems-abu-dhabi`
- `/services/hardware-av-solutions-abu-dhabi`
- `/services/pabx-telephone-systems-abu-dhabi`
- `/services/video-conferencing-abu-dhabi`
- `/services/pos-systems-abu-dhabi`
- `/services/erp-solutions-abu-dhabi`
- `/services/tally-prime-abu-dhabi`
- `/services/data-backup-recovery-abu-dhabi`
- `/services/server-management-abu-dhabi`
- `/services/website-development-abu-dhabi`
- `/services/remote-it-support-abu-dhabi`
- `/services/vpn-network-security-abu-dhabi`

Add permanent redirects from every current placeholder URL to its final URL.
Update the header menu, related-service cards, footer, sitemap, and canonical
metadata together.

## Phase 1 — Foundation and content normalization

1. Convert the Markdown source into a typed content structure.
2. Preserve all supplied wording without accidental omissions.
3. Normalize escaped characters, phone numbers, separators, and headings.
4. Add explicit verification flags for factual claims.
5. Identify missing content and broken related-service destinations.
6. Create the final slug map and redirect map.
7. Create a content completeness check for every required section.
8. Confirm that invalid slugs return a proper 404.

Deliverable: validated service content and route data, without final page
styling.

## Phase 2 — Reusable visual template

Build the complete service template using homepage styling.

Responsive behaviour:

- Two-column hero on desktop; stacked hero on mobile
- Two-column comparison; stacked on narrow screens
- Three pain-point cards; two and then one at smaller breakpoints
- Inclusion checklist beside the custom-plan panel
- Horizontal three-step process; vertical mobile sequence
- Five industry cards desktop, two tablet, one mobile
- Three related-service cards desktop, one mobile
- FAQ controls accessible by keyboard
- Consultation form and NAP panel side by side, then stacked
- No horizontal overflow at any viewport

Content should remain easy to scan despite the page length. Use alternating
surface bands, measured line lengths, visual section markers, and repeated
conversion opportunities without making every section look like a card grid.

Deliverable: a complete empty/template page matching the homepage design.

## Phase 3 — IT AMC pilot

IT AMC is the pilot because its content is complete and it uses every section.

1. Populate all IT AMC content.
2. Produce and optimize its hero image.
3. Apply metadata, canonical URL, breadcrumbs, and schema.
4. Connect WhatsApp, quote, and form actions.
5. Validate desktop, tablet, and mobile.
6. Review typography, section pacing, image treatment, and conversion flow.
7. Adjust the reusable template before rolling out other pages.

No remaining page should receive independent styling before the pilot template
is approved.

## Phase 4 — Image system

Each page receives a distinct, service-relevant hero image. Generic server-room
imagery should not be reused across all services.

Visual requirements:

- Premium realistic commercial IT imagery
- Abu Dhabi/UAE business context where appropriate
- Navy and cyan colour treatment compatible with the homepage
- Accurate equipment and believable environments
- Composition with safe negative space for hero copy
- No generated text, fake logos, fake certifications, or unreadable screens
- No AI-generated people represented as real XOFOZ employees
- No client brands or identifiable client premises without permission

Asset requirements:

- Hero master around 1800 × 1200
- Optimized WebP/AVIF derivative around 1600 × 1000
- Open Graph crop at 1200 × 630
- Optional supporting image around 1400 × 900
- Final-slug-based filenames
- Natural descriptive alt text without keyword stuffing
- Responsive `next/image` sizing
- Hero preload only where it improves Largest Contentful Paint

Hero concepts:

1. IT AMC — engineer monitoring business systems
2. On-call support — engineer assisting an office user
3. Office setup — newly installed UAE office technology
4. Network infrastructure — switches, firewall, racks, and access points
5. Structured cabling — labelled patch panels and organized cabling
6. Cybersecurity — firewall and security monitoring environment
7. Cloud/Microsoft 365 — cloud-enabled collaborative workplace
8. CCTV/access control — commercial surveillance control station
9. Biometrics — professional door-access terminal
10. Hardware/AV — workstation and meeting-room installation
11. PABX — business telephony infrastructure
12. Video conferencing — modern boardroom conferencing system
13. POS — retail or hospitality checkout environment
14. ERP — business operations dashboard environment
15. Tally Prime — accounting workstation without copied protected UI
16. Backup/recovery — protected storage and recovery workflow
17. Server management — engineer in a managed server room
18. Website development — design and development workspace
19. Remote support — secure remote troubleshooting environment
20. VPN/security — encrypted branch-to-office connection concept

Generate and approve images per rollout batch so visual feedback can be applied
before producing all 20.

## Phase 5 — Page rollout

### Batch A — Managed IT

1. IT AMC
2. On-call IT Support
3. Remote IT Support
4. Server Management
5. Data Backup and Recovery

### Batch B — Infrastructure

6. Office IT Setup
7. Network and Infrastructure
8. Structured Cabling
9. Hardware and AV Solutions
10. PABX and Telephone Systems

### Batch C — Security

11. Cybersecurity and Firewall
12. VPN and Network Security
13. CCTV and Access Control
14. Biometric Systems

### Batch D — Cloud and collaboration

15. Cloud Solutions and Microsoft 365
16. Video Conferencing

The cloud page remains blocked until its missing content is supplied or
approved.

### Batch E — Business applications and digital

17. POS Systems
18. ERP Solutions
19. Tally Prime
20. Website Development

Each batch includes content normalization, imagery, implementation, responsive
testing, SEO checks, and review before continuing.

## Internal-linking plan

- Create a real crawlable `/services` hub page.
- Link breadcrumbs through the Services hub.
- Connect every menu item to its final service URL.
- Give each page three genuinely related service links.
- Link industry cards only when the destination pages exist.
- Update footer links to important service pages.
- Generate or update the sitemap with all final canonical URLs.
- Avoid anchor placeholders and broken links.

Examples:

- IT AMC → On-call Support, Server Management, Microsoft 365
- Structured Cabling → Network Infrastructure, CCTV, Office IT Setup
- Cybersecurity → VPN Security, Backup and Recovery, IT AMC
- POS Systems → ERP, Tally Prime, Network Infrastructure

## SEO and structured-data plan

For every service page:

- Unique title and meta description
- One H1 only
- Logical H2 and H3 hierarchy
- Final canonical URL
- Server-rendered visible copy
- Direct plain-language definition near the top
- Natural keyword placement
- Descriptive image filenames and alt text
- Open Graph title, description, URL, and image
- Breadcrumb links and `BreadcrumbList`
- Accurate `Service` data
- Site-level `Organization` and `LocalBusiness`
- Internal links to relevant pages
- No unsupported rating markup
- No schema describing content hidden from visitors

Current Google notes:

- HowTo rich results are deprecated. Keep the useful visible three-step section,
  but do not promise a HowTo search feature.
- FAQ rich results are generally restricted to authoritative government and
  health sites. Keep FAQs for visitors and topical coverage, not as a rich-result
  promise.
- Self-serving AggregateRating markup for XOFOZ should not be used to seek star
  snippets.
- Structured data must be accurate and match visible content.

References:

- <https://developers.google.com/search/blog/2023/08/howto-faq-changes>
- <https://developers.google.com/search/docs/appearance/structured-data/sd-policies>
- <https://developers.google.com/search/docs/appearance/structured-data/breadcrumb>
- <https://developers.google.com/search/docs/appearance/structured-data/review-snippet>

## Consultation form plan

The form must be functional before launch:

- Decide submission destination
- Add server-side processing
- Validate required fields
- Add spam protection
- Include originating service slug in each lead
- Add accessible success and error states
- Track form, telephone, WhatsApp, and quote interactions
- Keep private credentials server-side
- Add privacy/consent language where required

All pages should use one shared form component with service-specific fields.

## Quality assurance

For every page:

- TypeScript validation
- Production build
- Route and redirect tests
- Desktop, tablet, and mobile visual review
- Chrome and Safari checks
- Keyboard navigation
- Visible focus states
- FAQ accessibility
- Colour contrast
- Reduced-motion support
- Image dimensions and performance
- No cumulative layout shift
- No horizontal overflow
- Server-rendered content confirmation
- 404 check for unknown slugs
- Sitemap and robots checks
- Broken-link crawl
- Schema Markup Validator
- Google Rich Results Test for supported types
- Lighthouse performance, accessibility, SEO, and best-practice review
- Form and CTA submission tests

## Approval gates

1. Verify business facts, NAP, certifications, and client permissions.
2. Approve the IT AMC design and initial image direction.
3. Approve each rollout batch before starting the next.
4. Approve forms, SEO output, redirects, and final production launch.

## Definition of done

A service page is complete only when:

- All supplied sections are present
- Content has passed the verification check
- The design clearly matches the existing homepage
- The correct unique image is optimized and accessible
- Menu, breadcrumb, related links, and canonical URL agree
- Metadata and supported structured data validate
- CTAs and form work
- Responsive and accessibility checks pass
- The production build passes without errors

