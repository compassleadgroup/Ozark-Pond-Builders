# SEO Spec

This reflects the 2026 search reality from the strategy pressure test. The core premise (organic-only local lead capture, no Google Business Profile) holds for transactional local queries, which trigger AI Overviews only a small share of the time and remain reachable. Informational and cost queries are heavily cannibalized by AI Overviews, so we treat those as link bait and trust content, not lead capture.

Read alongside `CLAUDE.md` (rules) and `docs/content-data.md` (unique local data).

---

## 1. Keyword strategy: transactional first

Lead the money pages with transactional local terms. Demote generic cost terms to a single informational guide.

### Money pages (primary lead capture)
- Home: pond builders southwest Missouri, Ozarks pond builders, pond construction company Missouri (brand hub, broad region)
- Service: farm and stock pond construction: farm pond construction Missouri, stock pond builder, livestock pond construction, irrigation pond
- Service: recreational lake construction: lake construction Missouri, recreational pond builder, fishing pond construction
- Service: pond dredging and renovation: pond dredging Missouri, pond renovation, pond restoration, pond cleanout
- Service: dam construction and engineered repair: dam construction Missouri, engineered dam repair, pond dam repair contractor (engineered and planned framing, never emergency)
- County pages: pond builders [county] county MO, farm pond construction [county] county Missouri, pond contractors [county] county
- Town pages: pond builder [town] MO, pond excavation [town] MO, pond builders near [town], farm pond construction near [town]

### Informational and link-bait pages (not lead capture, expect AI Overview cannibalization)
- Missouri pond permit guide: do I need a permit to build a pond in Missouri, Missouri 35 foot dam rule, Section 404 farm pond exemption
- Farm pond vs recreational pond: difference and the 404(f) exemption
- Pond watershed sizing: how big a watershed for a one acre pond, watershed to pond ratio Missouri
- Will my pond hold water: Ozark soil pond, clay core pond, pond liner vs clay Missouri
- Cost to build a pond in Missouri: cost to build a pond, farm pond cost (informational only, do not optimize for lead capture, AI Overview heavy)
- Dam safety and spillways: pond spillway design, dam safety basics

### Queries to deliberately ignore
Emergency phrasing (pond leaking now, dam failing, emergency), and generic national cost terms as money pages. The cost content exists only to earn links and AI citations.

### Use-case modifiers to work into copy naturally
livestock pond, fishing pond, irrigation pond, retention pond, recreational lake, farm pond, stock pond.

---

## 2. Site architecture and URLs (about 29 pages, tight)

Do not build service-times-town combinatorial pages. The locations hub is a thin bare-links index.

```
/                                             Home
/services/farm-and-stock-pond-construction/   Service
/services/recreational-lake-construction/      Service
/services/pond-dredging-and-renovation/         Service
/services/dam-construction-and-repair/          Service
/locations/                                     Locations hub (bare links)
/greene-county-mo/                              County
/christian-county-mo/                           County
/webster-county-mo/                             County
/polk-county-mo/                                County
/dallas-county-mo/                              County
/locations/marshfield-mo/                       Town
/locations/rogersville-mo/                      Town
/locations/ozark-mo/                            Town
/locations/republic-mo/                         Town
/locations/buffalo-mo/                          Town
/locations/bolivar-mo/                          Town
/locations/nixa-mo/                             Town
/guides/missouri-pond-permit-guide/             Guide (link bait, pillar)
/guides/farm-pond-vs-recreational-pond/         Guide
/guides/pond-watershed-sizing/                  Guide
/guides/will-my-pond-hold-water/                Guide
/guides/cost-to-build-a-pond-in-missouri/       Guide (informational only)
/guides/dam-safety-and-spillways/               Guide
/about/                                         Trust
/how-we-vet-contractors/                        Trust (methodology)
/how-we-make-money/                             Trust (disclosure)
/contact/                                       Lead form
/privacy/                                       Privacy and TCPA
```

County pages live at the root for keyword cleanliness. Town pages nest under /locations/.

---

## 3. Internal linking

- Home links to all four service pages, the locations hub, and the pillar permit guide.
- Locations hub links to the five county pages and seven town pages as plain links, nothing more.
- County page links to its own towns (see `content-data.md` for which towns belong to which county), the four service pages, and the relevant guides (permit, watershed, hold-water).
- Town page links to its parent county page and the two or three most relevant service pages.
- Guides interlink and each links to one relevant service page and one relevant county page. The permit guide is the pillar that the county and town pages link up to.
- Trust pages (about, methodology, disclosure) are linked in the header and footer on every page.

---

## 4. The AI answer block (top of every money and guide page)

Open each page with a two to three sentence block that directly answers the page intent in plain, extractable language, then go deeper. This serves both the human skimmer and AI and assistant extraction. Keep it truthful and matching-service framed.

Town page example:
"Looking for a pond builder near Ozark, Missouri? Ozark Pond Builders connects Christian County landowners with licensed local pond and excavation contractors for farm ponds, recreational lakes, dredging, and dam work. Most ponds in this area fall below Missouri's 35 foot dam permit threshold, so qualifying projects can move forward without a state dam safety permit."

Permit guide example:
"In Missouri, a non-federal pond dam under 35 feet in height generally does not require a state dam safety permit, while dams 35 feet or higher do. A separate federal Section 404 permit may apply if the pond affects a stream or wetland, although many farm and stock ponds are exempt under Section 404(f)."

Rules for answer blocks: state the fact, attribute the regulatory specifics to the source later in the body, never overstate, never use em dashes.

---

## 5. Schema mapping (templates)

Allowed types only: Organization, Service, BreadcrumbList, FAQPage, and Person (real named editor only, see note). Never LocalBusiness, Review, AggregateRating, or ProfessionalService.

Organization (in the base layout, on every page):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ozark Pond Builders",
  "url": "https://ozarkspondbuilders.com",
  "description": "A free matching service connecting southwest Missouri landowners with licensed local pond and excavation contractors.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "SET_CONTACT_PHONE",
    "contactType": "customer service",
    "areaServed": "US-MO",
    "availableLanguage": "English"
  }
}
```

Service (on each service page; set areaServed to the five counties):
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Farm and stock pond construction",
  "provider": { "@type": "Organization", "name": "Ozark Pond Builders" },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Greene County, Missouri" },
    { "@type": "AdministrativeArea", "name": "Christian County, Missouri" },
    { "@type": "AdministrativeArea", "name": "Webster County, Missouri" },
    { "@type": "AdministrativeArea", "name": "Polk County, Missouri" },
    { "@type": "AdministrativeArea", "name": "Dallas County, Missouri" }
  ]
}
```

BreadcrumbList (every non-home page, reflecting the URL path).

FAQPage (guides and service pages, only for questions the page genuinely answers). For AI and assistant parsing. Do not expect Google rich results, FAQ rich results were deprecated in May 2026. Keep it to three to six honest questions.

Person (optional, only if a real named human is the editor and is willing to stand behind the content publicly). Do not invent a person. Default is brand-as-author using Organization. If using a real editor, add their Person schema and a short, true author bio on guide pages.

---

## 6. E-E-A-T and trust build

Trust is the dominant pillar in 2026 and overrides everything else for a no-premises lead-gen site. Required:
- About page: a clear, honest description of the matching service and the legal entity.
- How we vet contractors (methodology): how a contractor is selected and what licensed and insured means here. Truthful, no invented vetting steps.
- How we make money (disclosure): we are paid a referral fee by the contractor we match you with, and it never increases your cost. Plain language.
- Authorship: brand-as-author by default (Organization), or a real named editor with Person schema. Never a fabricated author.
- Outbound citations: link regulatory and design claims to the .gov and .edu sources in `content-data.md`. This is a trust signal competitors skip.
- Consistency: keep factual claims identical across the site and any off-site brand mentions, so AI systems and reviewers see a coherent entity.

---

## 7. Technical SEO

- Static Astro output, Tailwind via CDN, minimal JS. Fast Core Web Vitals are an advantage and a ranking factor.
- Mobile first. The operator and many landowners browse on phones.
- Clean canonical tags, one H1 per page, descriptive title tags and meta descriptions built around the page's money or guide query.
- XML sitemap and robots.txt. Submit the sitemap in Search Console.
- Descriptive, keyword-clean URLs as listed above. No URL parameters.
- Image alt text that is descriptive and honest (no stock photos implying our own crews or completed jobs we did not do).

---

## 8. Off-site and links (operational, post-launch, free only)

Linkable assets to build first (these are the pillar guides): the Missouri pond permit guide and the dam safety guide are the strongest citation magnets, followed by watershed sizing and the hold-water soil guide.

Free outreach and citation targets:
- County Soil and Water Conservation District resource pages, MU Extension and Missouri Department of Conservation adjacent landowner resources, and local land and acreage blogs (resource-page and guest-post links).
- Journalist sourcing for editorial links: the relaunched free HARO at Featured.com, Source of Sources, the Qwoted free tier, and the JournoRequest hashtag on X. The old HARO and Connectively are gone, use these.
- Forums and communities for authentic brand mentions (nofollow, but real referral and AI-citation value): the Pond Boss community, r/homestead, r/farming, r/Missouri, and r/landscaping. Participate honestly, do not spam.

Reddit is an opportunity, not a threat, for this niche. It may hold some broad informational discussion positions, but it does not compete for our transactional local terms. Use it for brand mentions and referral traffic, do not try to outrank it on discussion queries.

Avoid entirely: paid links, paid directories at scale, link exchanges, low-quality guest-post farms. They do not fit the budget and carry risk under current spam policy.

---

## 9. What to measure

Track in GA4 and Search Console: form submissions (the revenue event), impressions and clicks on the money queries, average position on town and county terms, and whether AI Overviews are appearing on the transactional terms over time. Watch branded search volume as a survival signal. If transactional terms begin triggering AI Overviews at scale, shift toward deeper hyper-local long-tail and lean harder on the brand and trust pages.
