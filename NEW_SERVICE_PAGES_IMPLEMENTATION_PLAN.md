# XOFOZ New Service Pages — Implementation Plan

## Document purpose

This document defines the work required to add five requested service pages and one AWS cloud page to the XOFOZ website.

The attached document, `XOFOZ (1).pdf`, was reviewed separately from the implementation request. It primarily contains homepage, navigation, company, service-category, SEO, and footer copy. It does **not** contain complete page content for the requested Chip-Level, Data Recovery, Structured Cabling, ADHICS Compliance, Malaffi Integration, or AWS services. Those service-specific claims and copy must be supplied or approved before implementation.

## Requested pages

### Five service pages

1. Chip-Level Service
2. Data Recovery
3. Structured Cabling
4. ADHICS Compliance Services
5. Malaffi Integration

### Cloud page

6. AWS Cloud Services

## Proposed URLs

| Page | Proposed route | Proposed placement |
|---|---|---|
| Chip-Level Service | `/services/chip-level-repair-abu-dhabi` | IT Services or Hardware/AV |
| Data Recovery | `/services/data-recovery-abu-dhabi` | Data Backup and Protection |
| Structured Cabling | Existing `/services/structured-cabling-abu-dhabi` | Network Solutions |
| ADHICS Compliance | `/services/adhics-compliance-services-abu-dhabi` | IT Services or Cyber Security |
| Malaffi Integration | `/services/malaffi-integration-abu-dhabi` | Software Solutions or IT Services |
| AWS Cloud Services | `/services/aws-cloud-services-abu-dhabi` | Cloud |

The final URL choices should be confirmed before implementation because the project already has related routes for Structured Cabling and Data Backup and Recovery.

## Existing-page overlap review

The project already contains:

- Structured Cabling: `/services/structured-cabling-abu-dhabi`
- Data Backup and Recovery: `/services/data-backup-recovery-abu-dhabi`

Recommended approach:

- Enhance and retain the existing Structured Cabling page rather than create a duplicate page.
- Create a separate Data Recovery page only if its focus is file, disk, server, or device recovery rather than backup, disaster recovery, and business continuity.
- If an existing URL is replaced, add an explicit permanent redirect and update canonical links, sitemap entries, and internal navigation.

## Page wireframe

All new pages should use the established service-page structure implemented by `components/ServicePageTemplate.tsx`.

Each page should include:

1. Breadcrumb navigation
2. Hero section with eyebrow, H1, summary, CTA, trust statistics, and hero image
3. Service overview and comparison/risk panel
4. Problem or business-risk section
5. Included services or capabilities grid
6. Three-step delivery process
7. Service differentiators
8. Industries served
9. Frequently asked questions
10. Related services
11. Consultation form and WhatsApp CTA
12. Service and breadcrumb structured data

The visual design, spacing, animation, responsive behavior, and CTA treatment should remain consistent with the existing service pages.

## Content requirements

For every page, prepare and approve:

- Meta title
- Meta description
- Focus keyword and secondary keywords
- Canonical URL
- Breadcrumb label
- Hero eyebrow, H1, and summary
- Three or more customer pain points
- Service inclusions
- Delivery process
- Differentiators
- Industry use cases
- FAQs
- Consultation CTA and form labels
- Related services
- Service-specific claims and proof points

### Claim review requirements

- ADHICS content must use the correct official terminology and must not imply certification, approval, or compliance status without evidence.
- Malaffi content must distinguish integration and technical support from official authorization, accreditation, or regulatory approval.
- Data Recovery content must avoid guaranteeing successful recovery and should describe assessment, recovery conditions, and limitations.
- Chip-Level Service content should define supported device types, diagnosis, repair scope, warranty, and limitations.
- AWS content should clearly distinguish AWS services from the existing Azure and Microsoft Cloud services.

## Technical implementation

### Data and routing

Update the service data model and route generation in:

- `data/services.ts`
- `data/service-categories.ts` where category changes are needed
- `data/service-content.ts`
- `data/service-content-supplements.ts` where extended content is required
- `app/services/[slug]/page.tsx`
- `data/service-assets.ts`

The existing dynamic route supports both service-category pages and individual service pages. New content should follow the current field naming convention consumed by `ServicePageTemplate.tsx`.

### Navigation and internal links

Update:

- `components/Header.tsx`
- `components/Footer.tsx`
- `app/services/page.tsx`
- Cloud category navigation
- Related-service links
- Homepage service links where appropriate

Recommended menu placement:

- Chip-Level Service → IT Services or Hardware/AV Solutions
- Data Recovery → Data Backup and Protection
- Structured Cabling → Network Solutions
- ADHICS Compliance → IT Services or Cyber Security
- Malaffi Integration → Software Solutions or IT Services
- AWS Cloud Services → Cloud

### Images and assets

For each new standalone page:

- Add an approved hero image under `public/services/`
- Register the asset in `data/service-assets.ts`
- Add descriptive image alt text
- Add social/Open Graph image metadata

Generate the needed, contextually appropriate images for each page where approved source photography is unavailable. Images should visually represent the actual service, match the existing XOFOZ visual style, and be suitable for the hero section, social sharing, and responsive crops.

Image generation and review should include:

- Chip-Level Service: electronics repair, board-level diagnostics, or technician workbench imagery
- Data Recovery: secure storage, recovery diagnostics, or protected business data imagery
- Structured Cabling: professional rack, patch-panel, cabling, or network installation imagery
- ADHICS Compliance: healthcare IT, secure systems, compliance documentation, or hospital technology imagery
- Malaffi Integration: healthcare data exchange, interoperability, or connected clinical systems imagery
- AWS Cloud Services: secure cloud infrastructure, data centers, or abstract AWS-compatible cloud architecture imagery
- Desktop and mobile crops that preserve the main subject
- No unverified logos, certifications, facility identities, patient data, or misleading visual claims
- Consistent aspect ratios, color treatment, lighting, and composition across the service set

Generated images must be reviewed for brand fit, technical accuracy, licensing/usage suitability, accessibility, and unintended claims before release. Register final assets in `data/service-assets.ts` and identify any temporary images that still require replacement.

## SEO and discoverability

For each final page:

- Include one canonical URL
- Add the route to the sitemap through the existing route generation
- Add a `Service` schema and breadcrumb schema
- Add relevant internal links from the service hub and category page
- Avoid duplicate content between Data Recovery and Data Backup and Recovery
- Add explicit redirects for any retired or renamed URLs
- Verify metadata and structured data in the production build

## Implementation phases

### Phase 1 — Content and URL approval

- Obtain the missing service-specific source content.
- Confirm page names, slugs, category placement, and canonical URLs.
- Review ADHICS and Malaffi claims with the responsible subject-matter owner.
- Confirm AWS service scope and supported offerings.

### Phase 2 — Data model and assets

- Add or update service definitions.
- Add page content fields.
- Add approved hero and social assets.
- Add any extended content supplements.

### Phase 3 — Page and navigation implementation

- Render the pages through the existing service template.
- Enhance Structured Cabling if the existing page is retained.
- Add AWS to the Cloud category and navigation.
- Update service hub, mega menu, footer, and related links.

### Phase 4 — SEO, redirects, and quality checks

- Verify metadata, schema, sitemap, and canonical URLs.
- Add and test redirects if routes are changed.
- Check all internal links and CTA destinations.
- Verify responsive layouts and accessibility basics.

### Phase 5 — Release review

- Run TypeScript validation.
- Run ESLint.
- Run the production build.
- Test every new URL and relevant old URL.
- Review claims, images, content, and forms.
- Approve the release before deployment.

## Acceptance criteria

The work is complete when:

- All six requested pages render successfully.
- Structured Cabling does not create duplicate or competing canonical pages.
- Data Recovery is clearly differentiated from backup and disaster recovery.
- All new pages are reachable from appropriate service navigation.
- AWS appears under the Cloud service group.
- Metadata, sitemap, canonical URLs, and JSON-LD are valid.
- All consultation and WhatsApp CTAs preserve service context.
- No page has horizontal overflow on supported desktop or mobile viewports.
- TypeScript, lint, and production build checks pass.
- ADHICS, Malaffi, AWS, and recovery claims are approved by the relevant owner.

## Current blocker

Implementation should not begin until the detailed source content for the six requested pages is provided or approved. The attached PDF alone is insufficient for producing accurate, service-specific content.
