# XOFOZ Services Area — Release Handoff

## Release status

The local implementation is ready for production review. Phases 0–12 of
`SERVICES_AREA_REWORK_PLAN.md` are complete. Production deployment has not been
performed because it changes external state and requires explicit deployment
authorization and access.

## Canonical service routes

- `/services`
- `/services/it-services`
- `/services/cyber-security`
- `/services/data-backup-protection`
- `/services/server-storage`
- `/services/network-solutions`
- `/services/communication-lv`
- `/services/cloud`
- `/services/ai-solutions`
- `/services/software-solutions`
- `/services/microsoft-cloud`

## Pre-deployment approvals

- Confirm certifications, partner levels, and authorised-dealer claims.
- Confirm named-client relationships, results, and logo permissions.
- Confirm `150+`, years-in-business, 24/7, response-time, pricing, and
  zero-data-loss wording.
- Confirm office address, telephone, WhatsApp, email, and business hours.
- Review the 40 explicit legacy redirects in `next.config.mjs`.
- Review the Cloud/Microsoft 365, CCTV/Access Control, Tally Prime, and Video
  Conferencing redirect decisions documented in the execution log.
- Approve desktop/mobile screenshots under `tmp-verification/`.
- Confirm the deployment and rollback owner.

## Verified local release checks

- TypeScript check passes.
- Production build passes and generates ten category pages.
- Ten-category header menu and Services hub pass responsive checks.
- All 72 sub-services render with expected category counts.
- Category enquiry selection is carried into a reviewable WhatsApp message.
- All 40 legacy redirects resolve directly to a valid page/anchor.
- Sitemap exposes exactly ten canonical service category URLs.
- Invalid category slugs return `404`.
- No tested service page or hub/menu viewport has horizontal overflow.

ESLint is now configured non-interactively. Lint passes with 12 pre-existing
`<img>` optimization warnings outside the service-area rework and no errors.

## Production smoke test

Run immediately after an authorized deployment:

1. Open `/services` and all ten canonical category routes.
2. Open one old alias and one old canonical URL for each destination category;
   confirm one permanent redirect and the intended anchor.
3. Test the menu on desktop and mobile with pointer, touch, keyboard, and Escape.
4. Submit one clearly labelled production-safe test enquiry from a sub-service
   card and verify category, sub-service, source URL, and CTA source.
5. Open a hero WhatsApp link and confirm the category appears in the draft.
6. Confirm `/sitemap.xml`, canonical tags, robots directives, Open Graph tags,
   and JSON-LD use the production origin.
7. Check application, CDN, form, image, and 404 logs.
8. Confirm no stale cached header or Services hub remains.

## Rollback triggers

Rollback the release if any of these occur:

- category routes return server errors or widespread 404s;
- enquiries fail or lose service context;
- redirects loop, chain, or point to the wrong category;
- canonical or robots output makes the new pages non-indexable;
- the Services menu is unusable on a major viewport or input method;
- stale content exposes developer notes or invalid business claims.

Rollback should restore the previous deployment artifact. Do not replace the
explicit redirects with a broad wildcard rule during incident response.

## Phase 14 monitoring schedule

### First 24 hours

- Monitor application errors, 404s, redirects, enquiry delivery, WhatsApp
  clicks, image failures, menu usage, and performance.
- Check logs for unknown legacy URLs and add only reviewed explicit mappings.

### First 7 days

- Review Search Console sitemap processing, indexing, canonical selection,
  crawl errors, and traffic movement from old URLs to category pages.
- Review category engagement and enquiry attribution.
- Correct unexpected internal or external destination patterns.

### At 30 days

- Compare landing traffic, impressions, rankings, engagement, and conversions
  against the Phase 0 baseline.
- Reconfirm time-sensitive certifications and partnership claims.
- Decide whether the inactive legacy service template/content/assets can be
  removed safely.
- Record the final maintenance owner and next claim-review date.

Phase 13 may be marked complete only after deployment and production smoke
tests pass. Phase 14 may be marked complete only after the 30-day review.
