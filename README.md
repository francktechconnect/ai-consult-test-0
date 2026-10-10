# Agentic Growth OS — Next.js interactive prototype

A **gold-first + navy-blue**, responsive, phone-friendly product demonstration for Agentic Consulting and potential real-estate customers. **All people, companies, events, financial values and metrics in the UI are fictional.** No real lead collection, messaging, analytics, AI inference or CRM sync happens in this demo.

## What is inside

- Next.js App Router + React + TypeScript + Tailwind CSS + Lucide icons
- Gold/navy branded desktop sidebar, responsive phone navigation, industry switcher
- 9 screens: Command Center, Lead CRM, Lead Intelligence, Content Studio, Conversion Hub, Campaigns, Analytics, Automations, Settings & Integrations
- Fictional sample datasets for **Real Estate**, **AI Consulting**, and **Home Services**
- Interactive search/filter, lead details, demo lead creation, task completion, editable draft templates, CSV export, content performance bars, mock integration states
- No external database, API key, Python, Docker, or model required for local or Vercel demo

## Start in 3 commands

**Prerequisites:** Node.js 20+ (Node 22 recommended) and npm. Run from the folder containing `package.json`.

```bash
npm install
npm run dev
```

Open **http://localhost:3000**. On a phone on the same Wi-Fi network, use `http://YOUR_COMPUTER_LAN_IP:3000` (your firewall must allow port 3000). `npm run dev` already binds to `0.0.0.0`.

For a production-style local check:

```bash
npm run build
npm run start
```

### Docker alternative

With Docker Desktop running:

```bash
docker compose up --build -d
```

Open http://localhost:3000. Stop with `docker compose down`.

**Note:** This package was assembled in a network-restricted build environment, so package installation and a complete Next.js build could not be verified here. Run `npm install && npm run build` on your machine or in Vercel and resolve any reported dependency/build issues before a customer presentation. Version ranges in package.json may resolve to later compatible versions.

## Put it online quickly — recommended: Vercel

1. Create a free GitHub repository (private is fine) and push the **contents** of this folder, not the ZIP.
2. Open https://vercel.com/new and choose **Import Git Repository**.
3. Select your repo; Vercel should detect **Next.js** automatically.
4. Keep the root directory at the folder containing `package.json`, build command `next build`, and default framework settings. **No environment variables are needed.**
5. Click **Deploy**. Use the provided `*.vercel.app` HTTPS URL on your phone or send it to prospects.
6. Optional: add a custom domain in Project → Settings → Domains.

**Alternative:** Netlify (Next.js support), Render (Node web service), or a Docker host such as Railway/Fly.io. Vercel is the lowest-operations route for this particular frontend-only prototype. Confirm current free-tier limits and commercial eligibility on the vendor's current official pricing pages.

### Quick Git commands

```bash
git init
git add .
git commit -m "Initial Agentic Growth OS Next.js demo"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Create the GitHub repo first. Use your own URL.

## Show it to a realtor — 7-minute demo

1. **Overview** — point out the high-priority leads, appointments, revenue pipeline and suggested next actions.
2. **Lead Intelligence** — open an evidence card; emphasize explainability and consent checks.
3. **Lead CRM** — filter Hot leads; inspect a buyer and a seller; add a demo lead.
4. **Conversion Hub** — review an overdue follow-up and mark it completed.
5. **Content Studio** — compare reach, inquiries and meetings; generate and edit a draft.
6. **Analytics** — demonstrate content-to-meeting attribution.
7. **Automations** — explain how the same horizontal system can work for other industries. Switch the header from Real Estate to AI Consulting.

Ask the prospect: “Which of these problems happens most often in your business? Which CRM do you use? How many inquiries do you receive monthly? Could we pilot this with a limited authorized dataset?”

## What is real versus simulated

| Capability | Prototype | Production next step |
|---|---|---|
| Responsive navigation and interface | Working | Accessibility / browser QA |
| Industry packs | Working in UI | Server-managed configs |
| Search/filter CRM records | Working on fictional data | PostgreSQL + CRM connector |
| Add lead, mark task done | Browser-session state only | Authenticated backend mutations |
| CSV export | Working on fictional data | Authorized export with audit |
| AI scoring | Precomputed demo numbers | Evidence-backed scoring, evaluations |
| AI draft | Editable template | LLM service, source checks, approval |
| Analytics | Fictional chart values | Matomo/PostHog + CRM outcomes |
| Messaging | No send capability | Consent validation + provider API |
| Workflows | Illustrative UI | Durable Python runner (DBOS/Hatchet/Temporal) |
| Multi-tenancy | UI-only industry switch | Tenant isolation, roles, audit |
| Persistence | None | Postgres and migrations |

**Do not claim this frontend is already a production lead-generation AI system.** It is a customer-discovery and product-design demonstration.

## Reconnect the earlier FastAPI/PostgreSQL starter

The earlier starter is separate. Keep its API as a backend and replace demo data with authenticated API calls.

Suggested layout for the full product:

```text
agentic-growth-os/
  apps/web/                    # this Next.js app
  services/api/                # FastAPI business API
  services/workers/            # durable workflows
  packages/contracts/          # API schemas / OpenAPI clients
  packages/industry-packs/     # real estate, consulting, trades
  infra/                       # Docker, Terraform, migrations
```

Suggested API boundaries:

```text
GET    /api/v1/leads
POST   /api/v1/leads
GET    /api/v1/leads/{id}/evidence
POST   /api/v1/leads/{id}/score
GET    /api/v1/content/recommendations
POST   /api/v1/content/drafts
GET    /api/v1/tasks
POST   /api/v1/tasks/{id}/complete
GET    /api/v1/analytics/funnel
GET    /api/v1/integrations
```

Use server-side secrets, signed sessions, role-based permissions, CORS allowlists, rate limiting, request validation, tenant scoping, audit logs, retry/idempotency controls, and backups before processing client information. Never place provider API keys in `NEXT_PUBLIC_*` environment variables.

## Data and design customization

- `lib/data.ts`: fictional records, industry names and sample performance metrics.
- `app/page.tsx`: all interactive demo screens, actions and layout.
- `app/globals.css`: reusable design classes.
- `tailwind.config.ts`: gold and navy color palette.
- `app/layout.tsx`: page metadata.

The primary colors are gold (`#E9B62E`, `#D69B16`) and deep navy (`#071327`, `#0B1D38`). The interface is built from Tailwind utility classes and simple reusable React helpers. No proprietary design assets or paid icon libraries are required.

## GPT Sites / website generation tools

AI site builders or “Sites” experiences can help create landing pages, copy and visual directions quickly, but their generated sites may not offer the exact code ownership, integrations, persistence, backend security or export flexibility required for this application. For this product demo, a Git-controlled Next.js codebase deployed to Vercel is more predictable. You can use a site builder separately for a marketing landing page linking to the demo. Verify the exact “Sites in GPT” product, export rights and hosting terms before relying on it.

## Legal / safety notes

- All contacts use reserved `example.com` addresses and fictional 555-style phone numbers.
- The UI does not contact or scrape anyone.
- Actual Canadian outreach must respect CASL, applicable privacy rules, and brokerage/MLS licensing conditions.
- Scoring is illustrative, not a statistical prediction of purchase probability.
- A publicly accessible demo URL is not a secure environment for real customer data.

## Documentation references

- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Vercel deployment: https://vercel.com/docs/deployments/overview
- Vercel pricing: https://vercel.com/pricing
- Docker Compose: https://docs.docker.com/compose/
- FastAPI: https://fastapi.tiangolo.com/
