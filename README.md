# Royal Cruise Travel Guide

A premium, responsive cruise discovery website concept for the US market.

## Experience
- Cinematic ocean photography with a refined navy, cream and gold visual identity.
- Responsive mobile navigation and scroll-reveal transitions, with reduced-motion support.
- Destination discovery for the Caribbean, Bahamas, Alaska and Mediterranean.
- Cruise inspiration cards, trip-planning guidance, FAQs and enquiry form UI.
- SEO metadata, Open Graph tags, robots.txt, sitemap.xml, privacy notice and website terms.

## Project files
- `index.html`, `styles.css`, `app.js`: static frontend.
- `api/enquiries.js`: server endpoint source written for the Hatchable runtime.
- `migrations/`: PostgreSQL schema for enquiry records and optional notification settings.
- `privacy.html`, `terms.html`: starter legal disclosures that must be reviewed and customized.
- `.github/workflows/pages.yml`: GitHub Pages deployment workflow.

## Run / deploy
The frontend is plain HTML, CSS and JavaScript. Run it locally with any static web server rooted at the repository root.

A GitHub Actions workflow is included to deploy the static site to GitHub Pages on pushes to `main`. In repository Settings → Pages, set the build/deployment source to **GitHub Actions** if it is not already enabled.

**Important:** The enquiry form currently validates fields but does not send or store customer information. This is deliberate: no verified enquiry destination or backend connection has been configured. The supplied `api/enquiries.js` endpoint requires the Hatchable runtime and its database; GitHub Pages cannot execute it. Connect and test a compatible backend or enquiry provider before collecting real leads.

## Pricing and booking integrity
The site does not invent live cruise fares or availability. An enquiry is not a reservation. Verify current pricing and sailing availability with a reliable supplier before presenting them as confirmed.

## Brand and trademarks
Royal Cruise Travel Guide is a standalone travel-guide concept and does not claim to be the official Royal Caribbean website or to be endorsed by any cruise line. Third-party names and marks remain the property of their owners.

## Before public launch
- Add a verified business contact method and complete legal disclosures for the actual operator and jurisdiction.
- Configure and test end-to-end enquiry capture and notification delivery.
- Verify image usage rights for the intended production use.
- Confirm the final Pages URL and update sitemap.xml if the URL differs.
- Connect a reliable live cruise inventory/pricing source if displaying current fares is required.
