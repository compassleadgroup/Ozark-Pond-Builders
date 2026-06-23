# Ozark Pond Builders

Rank-and-rent lead generation site for pond and lake construction in southwest Missouri. We rank in organic search and route landowner inquiries to one licensed local contractor for a fee. This is a matching service. It does not perform construction work.

Operator note: the authoritative build and compliance rules live in `CLAUDE.md`. The unique local data lives in `docs/content-data.md`. The keyword and architecture spec lives in `docs/seo-spec.md`. Read those before editing.

## Stack

- Astro (content collections for counties, towns, services, and guides)
- Tailwind via CDN (no Tailwind build step)
- Web3Forms for the lead form (no backend)
- GA4 and Google Search Console for measurement
- Hosted on Cloudflare Pages, deployed from GitHub

## Deploy (Cloudflare Pages, GitHub integration)

This project never builds locally. Edits are committed to GitHub from the iPad, and Cloudflare Pages builds in its cloud on each push. Wrangler is not used.

One time setup:
1. Create the GitHub repo and push this project.
2. In Cloudflare Pages, create a project and connect the GitHub repo.
3. Build settings: framework preset Astro, build command `npm run build`, output directory `dist`.
4. Add the custom domain in Cloudflare Pages and point DNS.
5. Set the CONFIG values in `CLAUDE.md` and in the code (brand, domain, Web3Forms key, GA4 ID, phone, Search Console token).

Ongoing:
- Commit a change to the repo. Cloudflare Pages builds and deploys automatically. There is no local build or dev server step.

## Project structure

```
/CLAUDE.md                      build and compliance rules (read first)
/README.md                      this file
/docs/content-data.md           verified local data and the regulatory moat
/docs/seo-spec.md               keyword map, URLs, schema, answer-block format
/src/layouts/                   base layout, header strip, footer disclaimer
/src/components/                schema components, lead form, breadcrumbs
/src/content/counties/          one entry per county (unique data as frontmatter)
/src/content/towns/             one entry per town (unique data as frontmatter)
/src/content/services/          one entry per service
/src/content/guides/            one entry per guide
/src/pages/                     page routes and getStaticPaths for collections
/public/                        static assets
```

## Adding a county or town later (only on instruction)

1. Add a content entry with all required fields filled and verified (see `docs/content-data.md` for the field list and the verification sources).
2. Do not publish until the soil character, watershed, SWCD office, and USACE district fields are verified for that location. Placeholder data must not go live.
3. Keep the footprint tight. More near-duplicate pages hurt rankings. Each page must pass the test of staying useful if the town name were removed.

## Compliance summary (full rules in CLAUDE.md)

- Matching-service language only. Never claim to build or perform work.
- Header disclosure strip and footer entity disclaimer on every page.
- Unchecked TCPA consent on the form.
- Schema limited to Organization, Service, BreadcrumbList, FAQPage. Never LocalBusiness, Review, AggregateRating, or ProfessionalService.
- No fabricated reviews, team, history, or claims.
- No em dashes anywhere.
