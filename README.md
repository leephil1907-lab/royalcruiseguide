# Royal Cruise

A premium, responsive multi-page cruise discovery and enquiry website for the US market.

## Pages
- `index.html` — editorial homepage and destination discovery.
- `destinations.html` — Caribbean, Alaska, Mediterranean and Bahamas destination cards.
- `cruise-ideas.html` — travel styles and trip inspiration.
- `planning.html` — planning process and verification principles.
- `contact.html` — dedicated cruise enquiry form UI.
- `privacy.html`, `terms.html` — starter legal disclosures to review and customize.

## Visual system
Royal Cruise crest-inspired mark, midnight navy, antique gold and warm ivory, cinematic photography, animated page entrances, scroll reveals, responsive navigation and reduced-motion support. The static implementation uses lightweight CSS/JavaScript motion transitions; it does not import the React-only Framer Motion library.

## Deploy
Static HTML/CSS/JS; no build step required. GitHub Actions deployment is configured in `.github/workflows/pages.yml`. In repository Settings → Pages, set source to **GitHub Actions** if it is not enabled.

## Production notes
- The enquiry form intentionally does not send or store details until a verified service is connected. Demo submissions show a clear warning.
- No live cruise fares or sailing availability are invented. Verify exact sailing, total fare, taxes, cabin category and terms with a supplier.
- Add verified operator contact details and complete legal disclosures before launch.
- Confirm image licensing and final Pages URL; update `sitemap.xml` if needed.
- `api/enquiries.js` requires a compatible runtime and database; GitHub Pages cannot execute it.

This is an independent cruise travel guide concept and is not the official website of Royal Caribbean or any cruise line. Third-party marks belong to their respective owners.
