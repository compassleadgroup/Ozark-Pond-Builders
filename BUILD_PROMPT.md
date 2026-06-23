# Build Prompt

The first-build order of record for this repository. The authoritative rules live in `CLAUDE.md`, `COMPLIANCE.md`, `docs/content-data.md`, and `docs/seo-spec.md`. If anything here conflicts with those files, follow them.

Project in one line: a matching service called Ozark Pond Builders that connects southwest Missouri landowners with licensed local pond and excavation contractors, ranking in organic search with no Google Business Profile. We are not a contractor and never perform work.

## Hard rules (full detail in CLAUDE.md)

- No em dashes anywhere, in code or copy.
- Matching-service language only. Never "we build", "our crew", "we install". Use "we connect you with" and "the contractor you are matched with".
- No fabricated reviews, ratings, testimonials, team, history, tenure, awards, or certifications.
- Schema limited to Organization, Service, BreadcrumbList, FAQPage, and Person only for a real named editor. Never LocalBusiness, Review, AggregateRating, or ProfessionalService.
- Header disclosure strip and footer entity disclaimer on every page. Unchecked TCPA consent on the form.
- Never publish a county or town page that still contains a VERIFY placeholder from content-data.md. Leave it in draft, add a TODO comment, and flag it in the summary.

## Stack and deploy (do not deviate)

- Astro with content collections for counties, towns, services, and guides.
- Tailwind via CDN in the base layout head. No Tailwind build step, no PostCSS config.
- Cloudflare Pages builds in the cloud on each GitHub push. Never run a local dev server or local build. Never use Wrangler. Build command `npm run build`, output `dist`.
- Web3Forms for the lead form (no backend). GA4 and Search Console snippets in the layout. TextNow number as a click to call link. Use the CONFIG values in CLAUDE.md, and leave TODO comments for any placeholder.

## Phase 1, scaffold and shared shell

- Initialize the Astro project, package.json, astro.config, sitemap, robots.txt.
- Create the base layout with the Tailwind CDN link, the GA4 snippet, the Search Console meta token, the Organization JSON-LD (every page), a header that includes the disclosure strip and primary nav, and a footer with the entity disclaimer and trust links.
- Create reusable components: breadcrumbs (BreadcrumbList schema), a Service schema block, an FAQ block (FAQPage schema), and the lead form component (posts to Web3Forms, includes the unchecked TCPA consent checkbox and consent text, links to the privacy policy).
- Design: clean, fast, mobile first, trustworthy, plain. No stock imagery implying our own crews or jobs we performed. Neutral outdoor and earth tones are fine.

## Phase 2, content collections and data

- Define content collections for counties, towns, services, and guides with typed frontmatter matching the field lists in content-data.md.
- Create the five county entries and seven town entries. Fill the known fields. For every VERIFY field, insert a clearly marked placeholder and a TODO, and keep that entry flagged as draft so it does not publish. Do not invent soil data, SWCD contacts, USACE districts, or watersheds.
- Create the four service entries and six guide entries.

## Phase 3, pages and routing

- Home page: the brand hub, the matching offer, the four services, a link to the locations hub and the pillar permit guide, an answer block at the top, and a clear path to /contact/.
- Four service pages with their money-keyword focus, an answer block, honest matching-service copy, a relevant FAQ block, and the Service schema.
- Locations hub as a thin bare-links index to the five counties and seven towns. Nothing more.
- County and town pages from the collections using getStaticPaths. Each must carry the unique local data and an answer block. Any page with unverified fields stays in draft.
- Six guides. The permit guide is the pillar. The cost guide is informational only, not optimized for lead capture. Cite the .gov and .edu sources from content-data.md as real outbound links.
- About, how we vet contractors (methodology), how we make money (disclosure), contact (with the form), and privacy (with full TCPA language) pages.

## Phase 4, SEO and technical pass

- Title tags and meta descriptions per page built around the page's money or guide query.
- One H1 per page, clean canonicals, internal linking exactly as specified in seo-spec.md.
- Generate the XML sitemap and robots.txt. Verify all URLs match the architecture in seo-spec.md.
- Confirm the schema set on every page type is correct and that no forbidden type is present.

## Phase 5, compliance and quality QA

Produce a checklist confirming: no em dashes anywhere, matching-service language only, header disclosure strip and footer entity disclaimer on every page, unchecked TCPA consent checkbox with correct text and a privacy link, schema limited to allowed types, no fabricated trust elements, every county and town page either verified or flagged draft with TODOs, and a list of every remaining CONFIG placeholder and every open VERIFY field.
