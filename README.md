# Royal Cruise

A premium, responsive multi-page cruise discovery and enquiry website for the US market.

## Public pages
- `index.html` — homepage and destination discovery.
- `destinations.html`, `cruise-ideas.html`, `planning.html`, `contact.html` — travel planning pages.
- `privacy.html`, `terms.html` — starter legal disclosures to review and customize.

## Support chat and separate admin console
- A floating **Live support** widget is included across the public pages. It answers common destination, pricing, and booking questions and polls for staff replies when the support API is configured.
- The separate `admin-dashboard/` application provides an admin sign-in, overview, enquiry search/status management/CSV export, support inbox and replies, destination editor, website content and settings, analytics, connection health, and sign out. It is not linked from public website navigation.
- API routes: `api/support.js` and `api/admin.js`. Database setup: `api/admin-schema.sql`.
- Configure server-side environment variables `ROYAL_CRUISE_ADMIN_EMAIL`, `ROYAL_CRUISE_ADMIN_PASSWORD`, and `ROYAL_CRUISE_ADMIN_SECRET`. Use a strong unique password and a long random secret. Never commit secrets.
- Run `api/admin-schema.sql` once against the connected PostgreSQL database. The existing `cruise_enquiries` table must contain `reference`, `first_name`, `last_name`, `email`, `destination`, `timing`, `travelers`, `budget`, `notes`, `consent`, and `created_at` fields; it also needs the `status` field added by the migration.
- Deploy the API on a compatible runtime. GitHub Pages only serves static files and does not execute `api/*.js`. Configure `window.ROYAL_CRUISE_API_BASE` to the deployed API base ending in `/api` for public support, and configure `window.ROYAL_CRUISE_ADMIN_API` to the deployed `/api/admin` endpoint for the separate dashboard.
- Configure HTTPS and CORS for both site origins, rate-limit login and public chat endpoints, add spam protection, use a secure session/auth provider for production, and test authorization, privacy disclosures, data retention, and backups. The admin API uses signed expiring bearer tokens, but production deployment still requires platform-level protections and security review.

## Visual system and deployment
Midnight navy, antique gold, warm ivory, cinematic photography, responsive navigation, and reduced-motion support. The public site uses lightweight CSS/JavaScript transitions; it does not import the React-only Framer Motion library. GitHub Actions deployment is configured in `.github/workflows/pages.yml`.

## Production notes
- The public enquiry form intentionally avoids claiming success until a verified service is connected.
- No live cruise fares or sailing availability are invented.
- Confirm image licensing, final Pages URL, and legal disclosures before launch.
- This is an independent cruise travel guide concept and is not the official website of Royal Caribbean or any cruise line. Third-party marks belong to their respective owners.
