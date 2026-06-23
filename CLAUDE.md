# CLAUDE.md

Persistent instructions for this repository. Read this file in full at the start of every session before editing anything. Also read `PROJECT_BRIEF.md` (why this site exists), `COMPLIANCE.md` (the authoritative compliance rules and verbatim copy blocks), `docs/content-data.md` (verified local data), and `docs/seo-spec.md` (keyword map, architecture, schema templates) before building or editing any page.

This is a rank-and-rent (local lead generation) site. We rank in classic organic search and route the leads to one local contractor for a fee. We are a matching service. We are not a contractor and we never perform work.

---

## CONFIG (set these before first build, then keep them consistent everywhere)

- BRAND_NAME: Ozark Pond Builders   (recommended default; change if the domain dictates)
- DOMAIN: ozarkspondbuilders.com   (replace with the registered domain)
- LEGAL_ENTITY: Compass Camper LLC, doing business as Compass Lead Group
- CONTACT_PHONE: (set the TextNow number here)
- CONTACT_EMAIL: (set a forwarding address on the domain, e.g. hello@DOMAIN)
- WEB3FORMS_ACCESS_KEY: (paste the free Web3Forms key here; used in the form action)
- GA4_MEASUREMENT_ID: (paste the GA4 ID, e.g. G-XXXXXXXXXX)
- GSC_VERIFICATION: (paste the Search Console verification meta token, or verify by DNS)

When any of these is still a placeholder, leave a visible `TODO:` comment in the code and tell me in your summary. Do not invent values.

---

## What this site is and is not

This site connects landowners in southwest Missouri with licensed, local pond and excavation contractors. The services we generate leads for: farm and stock pond construction, recreational lake construction, pond dredging and renovation, and dam construction and engineered repair.

Geography (tight county cluster, do not expand without instruction): Greene, Christian, Webster, Polk, and Dallas counties. Town pages: Marshfield, Rogersville, Ozark, Republic, Buffalo, Bolivar, and Nixa.

Business reality that drives every decision:
- There is NO Google Business Profile. We rank in organic blue links only (positions 1 to 10). We never rely on the map pack. Design and content target planned, research-driven buyers who scroll to organic and submit a form over days or weeks, not emergency callers.
- High ticket. Typical projects run $30,000 to $150,000. The buyer researches before contacting anyone, which is exactly why organic capture works here.
- The moat is regulatory and physical content (permitting, dam rules, soils, watershed) that competitors do not bother to assemble. That content is our ranking edge, our link bait, and our trust signal. See `docs/content-data.md`.

---

## HARD RULES (these are not negotiable; a violation is a defect)

### Voice and copy
- Never use em dashes anywhere, in code comments or in site copy. Use periods, commas, parentheses, colons, or the word "to" for ranges. This is a strict rule.
- We are a matching service. Never write "we build", "our crew", "we install", "we dig", or anything implying we do the work. Use "we connect you with", "the contractor you are matched with", "licensed local contractors", "the pond builder we match to your project".
- Never fabricate. No invented testimonials, reviews, star ratings, team members, founder bios, years in business, number of projects, awards, or certifications. If a trust element would require a fact we do not have, leave it out.
- Plain, honest, useful tone. No hype, no fake urgency. Short sentences. US measurements.
- Cite regulatory and code claims to .gov or .edu sources with real outbound links (see `docs/content-data.md` for the canonical source list).

### Compliance elements required on every page
Use the verbatim copy blocks in `COMPLIANCE.md` for the disclosure strip, footer disclaimer, and TCPA consent. Do not paraphrase them.
- Header disclosure strip (top of every page, above the fold): a one line statement that BRAND_NAME is a free matching service, not a contractor, that connects landowners with independent local pond and excavation professionals.
- Footer entity disclaimer (every page): BRAND_NAME is operated by Compass Camper LLC, doing business as Compass Lead Group. It is a lead referral service and does not perform construction work. All work is performed by independent, licensed contractors.
- The lead form must include an unchecked TCPA consent checkbox. Never pre-check it. Use the exact consent text in `COMPLIANCE.md`, and link to the privacy policy.

### Schema (structured data) rules
Allowed types only: `Organization`, `Service`, `BreadcrumbList`, `FAQPage`, and `Person` (under one strict condition below).
- Do NOT use `LocalBusiness`, `Review`, or `AggregateRating`. Ever.
- `Person` schema is permitted only for a real, named human editor who is willing to stand behind the content publicly. Do not invent a person. The default is brand-as-author using `Organization`. If no real editor is designated, do not add `Person` schema and do not put a named byline anywhere.
- Do NOT use `ProfessionalService` on this site. The playbook permits it, but `ProfessionalService` is a subclass of `LocalBusiness` and implies a physical premises and reviews we do not have. `Organization` plus `Service` covers our needs without that risk.
- `FAQPage` is included for AI and assistant parsing only. Google deprecated FAQ rich results in May 2026, so do not expect SERP rich snippets from it. Keep the markup lean and truthful (only questions the page actually answers).
- Exact JSON-LD templates and per-page-type schema mapping are in `docs/seo-spec.md`. Follow them.

### Location-page data integrity
- Never publish a county or town page that still contains placeholder or unverified local data (soil character, watershed, SWCD office, USACE district). Each location page must carry genuinely unique, verified local data per `docs/content-data.md`. If a field is not yet verified, leave the page in draft, leave a `TODO:` comment, and flag it in your summary. Thin or duplicated location pages are the single biggest ranking risk for this site after the 2025 spam updates.

---

## Tech stack and build method

- Framework: Astro, using content collections for the county, town, service, and guide content. The unique per-location data lives as structured frontmatter so each location page is generated from real data, not duplicated boilerplate.
- Styling: Tailwind via CDN, loaded in the base layout head. Do not add a Tailwind build step or PostCSS config. Keep it CDN only so there is nothing to break in a cloud build.
- No local build step is ever run by the operator. The operator edits on iPad and commits to GitHub. Cloudflare Pages runs `npm run build` in its cloud on each push. Never use Wrangler. Never instruct the operator to run a local dev server or build.
- Hosting and deploy: Cloudflare Pages connected to the GitHub repo (Git integration, not Wrangler). Build command `npm run build`, output directory `dist`.
- Forms: Web3Forms (free). The form posts to `https://api.web3forms.com/submit` with the access key from CONFIG. No backend.
- Analytics: GA4 via the gtag snippet in the base layout, using GA4_MEASUREMENT_ID. Search Console verification via the meta token in CONFIG or DNS.
- Phone: the TextNow number from CONFIG, shown as a click to call link.

Performance: keep pages fast and light (static HTML, minimal JS, no heavy frameworks beyond Astro output). Core Web Vitals are a ranking factor and our static build is an advantage. Do not add client libraries unless I ask.

Accessibility: semantic HTML, labeled form fields, alt text on images, sufficient contrast.

---

## Page inventory (target footprint, hold to roughly 29 pages)

Do not create combinatorial service-times-town pages. The locations hub is a thin bare-links index. Full architecture, URLs, and keyword targets are in `docs/seo-spec.md`.

1. Home
2 to 5. Service pages (4): farm and stock pond construction, recreational lake construction, pond dredging and renovation, dam construction and engineered repair
6. Locations hub (thin bare-links index)
7 to 11. County pages (5): Greene, Christian, Webster, Polk, Dallas
12 to 18. Town pages (7): Marshfield, Rogersville, Ozark, Republic, Buffalo, Bolivar, Nixa
19 to 24. Guides (6): Missouri pond permit guide, farm pond vs recreational pond, pond watershed sizing, will my pond hold water, cost to build a pond in Missouri, dam safety and spillways
25. About
26. How we vet contractors (methodology)
27. How we make money (disclosure)
28. Contact (with the lead form)
29. Privacy policy (with TCPA language)

---

## How I should work in this repo

- At session start, read this file, `docs/content-data.md`, and `docs/seo-spec.md`. Confirm in one or two lines that you have, then proceed.
- Build in the order in `BUILD_PROMPT.md` if it is the first build. For edits, make the change, keep it consistent with these rules, and summarize what changed and why.
- Reuse the base layout, header, footer, schema components, and the form component. Do not duplicate markup across pages.
- After any change, sanity check for the hard rules: no em dashes, matching-service language only, no forbidden schema, no fabricated trust elements, location pages have verified data or are flagged draft.
- Keep commits small and descriptive so the operator can review them on mobile.
- If something here conflicts with an instruction I give in chat, follow the chat instruction and note the conflict.
