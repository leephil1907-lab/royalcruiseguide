# Royal Cruise Travel Guide

A premium, responsive cruise discovery and enquiry website for the US market.

## Experience
- Cinematic ocean photography, refined navy/cream/gold brand system, and Playfair Display + DM Sans typography.
- Responsive mobile navigation and accessible scroll-reveal transitions with reduced-motion support.
- Destination discovery for the Caribbean, Bahamas, Alaska, and Mediterranean.
- Cruise inspiration cards, planning guidance, FAQ, and enquiry form.
- Search metadata, Open Graph tags, robots.txt, sitemap.xml, privacy notice, and website terms.

## Project files
- `public/index.html`, `public/styles.css`, `public/app.js`: frontend.
- `api/enquiries.js`: enquiry endpoint written for the Hatchable runtime.
- `migrations/`: PostgreSQL schema for enquiry records and optional notification settings.
- `public/privacy.html`, `public/terms.html`: starter legal disclosures to review and customize.

## Run / deploy
The frontend is plain HTML, CSS, and JavaScript. Preview it locally with any static web server rooted at `public/`.

The enquiry form posts to `/api/enquiries`; that endpoint requires the Hatchable runtime and its database. A static-only host such as GitHub Pages cannot execute the API function or persist enquiries. Configure a compatible backend and update the form endpoint before using a static host for real leads.

## Pricing and booking integrity
This site does not invent live cruise fares or availability. An enquiry is not a reservation. Current pricing and sailing availability must be verified with a reliable supplier before being represented as confirmed.

## Brand and trademarks
Royal Cruise Travel Guide is a standalone travel-guide concept and does not claim to be the official Royal Caribbean website or to be endorsed by any cruise line. Third-party names and marks remain the property of their owners.

## Before public launch
- Add a verified business contact method and complete legal disclosures for the actual operator and jurisdiction.
- Configure enquiry notification delivery and test end-to-end lead capture.
- Verify all destination imagery and licenses for the intended production use.
- Replace the example sitemap hostname with the final production domain.
- Connect a live cruise inventory/pricing source if displaying current fares is required.
