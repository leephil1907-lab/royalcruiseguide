# Royal Cruise

A premium, responsive multi-page cruise discovery and enquiry website for the US market.

## Public pages
- `index.html` — homepage and destination discovery.
- `destinations.html`, `cruise-ideas.html`, `planning.html`, `contact.html` — travel planning pages.
- `privacy.html`, `terms.html` — starter legal disclosures to review and customize.

## Live support and admin console
- A floating **Live support** chat button is included across the public pages. It answers common cruise questions and submits visitor messages to the separate support inbox.
- Admin console: https://royal-cruise-admin.hatchable.site
- The console is a separate Hatchable project. Its dashboard page and admin data APIs are protected by Hatchable's project-admin access gate. Features include overview metrics, enquiry management and status updates, CSV export, support inbox and staff replies, destination management, website settings, and analytics.
- Admin project: https://hatchable.com/console/projects/royal-cruise-admin
- The admin project’s **Visibility must be changed from Personal to Public** in its console Settings for the public website’s intake endpoints to accept visitor submissions. The dashboard page and management APIs remain protected by their declared `access = "admin"` gates. This visibility toggle is a manual platform action.
- The public website form and chat widget use `https://royal-cruise-admin.hatchable.site/api/intake` and `/api/support-intake`. These endpoints validate submissions, persist records in the admin database, and allow staff to reply from the console.
- Database schema lives in the admin project's `migrations/001_admin_console.sql`. Notification emails can be configured under Site Settings in the admin console.

## Visual system and deployment
Midnight navy, antique gold, warm ivory, cinematic photography, responsive navigation, and reduced-motion support. The public site uses lightweight CSS/JavaScript transitions; it does not import the React-only Framer Motion library. GitHub Actions deployment is configured in `.github/workflows/pages.yml`.

## Production notes
- The public enquiry form displays a reference only after the backend confirms that the enquiry was stored.
- No live cruise fares or sailing availability are invented.
- GitHub Pages deployment needs to be enabled and healthy in repository Settings → Pages; check the Actions run if a new push does not appear on the live site.
- Configure an enquiry notification email, add spam protection/rate limiting, verify the contact and legal disclosures, and test the complete visitor-to-admin flow after the admin project visibility change.
- This is an independent cruise travel guide concept and is not the official website of Royal Caribbean or any cruise line. Third-party marks belong to their respective owners.
