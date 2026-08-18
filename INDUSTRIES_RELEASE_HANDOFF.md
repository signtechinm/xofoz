# Industries Pages Release Handoff

## Implemented routes

- `/industries`
- `/industries/hospitality`
- `/industries/real-estate`
- `/industries/construction`
- `/industries/logistics`
- `/industries/manufacturing`

## Local release status

- Reusable typed template: complete
- Five sector content records: complete
- Five generated hero images and production WebP variants: complete
- Header, homepage, footer, sitemap, and internal links: complete
- FAQ, form, WhatsApp payload, metadata, canonical, Open Graph, and JSON-LD: complete
- Responsive browser QA, lint, TypeScript, and production build: complete

## Required business approval before production

- Confirm NAP and business hours.
- Decide whether each named client can be shown publicly.
- Provide written approval and evidence for any case-study outcome or metric.
- Verify certification, partnership, dealer, reseller, and regulatory wording.
- Confirm support hours and any contractual response-time claim.
- Review the verification register before replacing safe sector-proof wording.

## Production launch checklist

- Deploy the complete build so the hub and five routes launch together.
- Confirm all six production URLs return 200.
- Confirm `sitemap.xml` contains all six URLs and submit/update it in search tooling.
- Test the WhatsApp enquiry flow on a real mobile device.
- Confirm analytics events and consent behavior in the production environment.
- Validate FAQ, Breadcrumb, and Service JSON-LD with the chosen production schema tool.
- Monitor 404s, image errors, form issues, Core Web Vitals, and indexing after launch.

## Rollback scope

The industry work is isolated to the new routes, data, components, `industries.css`, industry navigation links, homepage industry links, footer industry link, and sitemap entries. Generated source PNGs are preserved alongside production WebPs.

