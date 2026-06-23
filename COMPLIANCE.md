# Compliance: Ozark Pond Builders

Site-specific compliance rules and the exact copy blocks the site must use. This adapts the master COMPLIANCE_STANDARDS.md to this niche. Where the master standard is stricter or more specific, the master governs. Reconcile this file against it.

This is operational guidance, not legal advice. Have the consent and privacy language reviewed by counsel before promoting the site.

## 1. Core positioning: matching service, never a contractor

The site connects landowners with independent licensed contractors. It does not perform work and must never imply that it does.

Prohibited phrasing (do not use):
- we build, we dig, we install, we construct, our crew, our team builds, our equipment, our excavators, we did, our completed projects, our work.

Required phrasing (use instead):
- we connect you with, the contractor you are matched with, licensed local contractors, the pond builder we match to your project, independent local professionals.

## 2. Verbatim copy blocks (use exactly, adjust only the brand if the domain dictates)

### Header disclosure strip (top of every page)
Ozark Pond Builders is a free matching service, not a contractor. We connect southwest Missouri landowners with independent, licensed local pond and excavation professionals.

### Footer entity disclaimer (every page)
Ozark Pond Builders is operated by Compass Camper LLC, doing business as Compass Lead Group. We are a lead referral and matching service and do not perform construction work. All pond, lake, dam, and excavation work is performed by independent, licensed contractors. Contacting us connects you with one of those contractors.

### TCPA consent checkbox (on the lead form, unchecked by default, never pre-checked)
By checking this box and submitting this form, I agree that Ozark Pond Builders and the contractor I am matched with may contact me at the phone number and email I provided, including by automated dialing system, prerecorded voice, text message, and email, about my pond or excavation project. Consent is not a condition of any purchase or service. Message and data rates may apply. I can opt out at any time. I have read the Privacy Policy.

### How we make money disclosure (core statement on the disclosure page)
Ozark Pond Builders is free for landowners. We are paid a referral fee by the contractor we match you with. This fee never increases the price you pay for your project.

## 3. Prohibited content (never fabricate any of this)

Do not invent or imply any of the following anywhere on the site:
- Customer reviews, star ratings, testimonials, or quotes.
- Team members, staff, founder names, or bios.
- Company history, founding date, years in business, or tenure.
- Number of projects completed, ponds built, or jobs done.
- Awards, certifications, accreditations, memberships, or as-seen-in or press logos.
- Photos that imply the brand owns equipment, employs crews, or performed a pictured job. Use only imagery that does not misrepresent the matching-service model, and never imply a depicted project was ours.

If a trust element would require a fact we do not have, leave it out. Trust comes from honest disclosure, accurate local content, and authoritative outbound citations, not from invented signals.

## 4. Schema compliance

Allowed types: Organization, Service, BreadcrumbList, FAQPage, and Person (only for a real named editor who stands behind the content publicly).

Forbidden types: LocalBusiness, Review, AggregateRating, and ProfessionalService.
- ProfessionalService is excluded even though the master playbook permits it, because it is a subclass of LocalBusiness and implies a physical premises and reviews we do not have. Organization plus Service covers our needs without that risk.
- FAQPage is included for AI and assistant parsing only. Google deprecated FAQ rich results in May 2026. Do not add FAQ markup expecting a SERP rich snippet, and only include questions the page genuinely answers.
- Person schema requires a real editor. Do not invent a person. The default is brand-as-author using Organization.

Exact JSON-LD templates and per-page mapping are in docs/seo-spec.md.

## 5. Lead form and data handling

- The consent checkbox is unchecked by default and is not a condition of submitting an inquiry. A landowner can ask for information without consenting to automated contact, so do not block the form on the consent box unless the master standard requires it. Follow the master standard on this point.
- State clearly that message and data rates may apply and that the user can opt out.
- Link to the Privacy Policy from the form.
- Collect only what the matched contractor needs to quote the project (name, contact, location, project type, brief description). Do not collect more than necessary.

## 6. Privacy policy requirements

The privacy page must, at minimum:
- Identify the operator (Compass Camper LLC, doing business as Compass Lead Group).
- State what information is collected through the form.
- State that the information is shared with the independent contractor the user is matched with, for the purpose of contacting and quoting the project.
- State how a user can opt out or request deletion.
- Include the contact method for privacy requests.
- Reflect the TCPA consent terms.
Reconcile the full text against the master COMPLIANCE_STANDARDS.md and applicable Missouri and federal requirements.

## 7. Honesty in local content

Every per-location claim (soil character, watershed, permit posture, SWCD office) must be true and verified before the page goes live. Do not invent soil percentages, watershed assignments, USACE districts, or contact details. Unverified fields keep the page in draft. See docs/content-data.md. False or sloppy local data is both a trust failure under current E-E-A-T evaluation and a compliance problem.

## 8. Style

No em dashes anywhere, in copy or code. Use periods, commas, parentheses, colons, or the word to for ranges.

## 9. Pre-publish compliance checklist

Confirm before any page or the site goes live:
- Header disclosure strip present on every page.
- Footer entity disclaimer present on every page.
- Matching-service language only, no prohibited contractor phrasing.
- Lead form has the unchecked TCPA consent checkbox with the exact consent text and a privacy link.
- How we make money disclosure page present and accurate.
- Privacy policy present and complete.
- Schema limited to allowed types, no forbidden type anywhere, Person only if a real editor is set.
- No fabricated reviews, team, history, tenure, counts, awards, or misleading photos.
- Every location page carries verified local data or is held in draft.
- No em dashes anywhere.
