# Royal Cruise Admin Console

A standalone admin application, intentionally not linked in the public website navigation. It provides views for overview metrics, enquiries and status updates, support conversations/replies, destination records, website content, analytics, and settings.

## Security and deployment

- This frontend is not an authentication system by itself. It requires the authenticated server API in `../api/admin.js` and private server-side environment variables.
- Deploy this directory as a separate app/site. Configure `window.ROYAL_CRUISE_ADMIN_API = "https://YOUR-API-HOST/admin"` before `admin.js` loads, or use a deployment rewrite so the endpoint is available at `/api/admin`.
- The admin API must enforce authentication and authorization on every request, use HTTPS, rate-limit login attempts, and keep admin password/session secrets server-side.
- Do not deploy as production-ready until the backend and database migrations are deployed and access controls are tested.

## Features

Overview, searchable enquiry list, status updates, CSV export, enquiry detail view, support inbox and replies, destination editor, site content/settings editor, analytics, connection health, and sign out.

All displayed records come from the connected API. The dashboard does not invent sample business metrics.
