# Content Data: the moat and the unique local data

This file is the reason the site can rank without a Google Business Profile and survive Google's scaled-content enforcement. It has two parts:

- Part A: verified, citable facts that apply statewide. Use these across the site and link to the .gov or .edu source.
- Part B: per-county and per-town data. Some fields are filled with safe, known values. Fields marked VERIFY must be confirmed from the named source before the page goes live. Do not publish a location page with an unverified field.

Hard rule from CLAUDE.md: never publish a county or town page that still contains a VERIFY placeholder. Leave it in draft and flag it.

---

## PART A: Statewide verified facts (cite these)

### Missouri is a pond state
Missouri has over 300,000 privately owned ponds and lakes, used for livestock water, fishing, irrigation, and recreation.
Source: Missouri Department of Conservation, Ponds: Construction and Maintenance. https://mdc.mo.gov/your-property/improve-your-property/habitat-management/pond-stream-management/ponds-construction

### Missouri dam height permit thresholds (the 35 foot rule)
For non-federal, non-agricultural dams in Missouri:
- Under 25 feet in height: not regulated by the state dam safety program.
- 25 to 35 feet in height: inventoried but not permitted.
- 35 feet and higher: a construction permit is required, prepared by a Missouri registered professional engineer, plus a safety permit to operate.
Most private farm ponds fall below 35 feet, so they typically do not require a state dam safety permit. This is a key reassurance point for landowners and a strong differentiator versus thin competitor pages.
Authority: Missouri Dam and Reservoir Safety Law, Chapter 236 RSMo, and 10 CSR 22, administered by the Missouri Department of Natural Resources Dam and Reservoir Safety Program.
Source: Missouri DNR Dam and Reservoir Safety. https://dnr.mo.gov/land-geology/dam-reservoir-safety/dams and https://dnr.mo.gov/land-geology/businesses-landowners-permittees/permits/dam-reservoir-safety

### Federal Clean Water Act Section 404
A federal permit from the US Army Corps of Engineers may be required to discharge dredged or fill material into waters of the United States. There is no acreage trigger. The trigger is impact to a stream, wetland, or other water of the US.
- The 404(f)(1) exemption generally covers construction and maintenance of farm and stock ponds, so many true farm ponds are exempt.
- Recreational ponds or lakes that dam or fill a stream or wetland are often not exempt and require avoid, minimize, and mitigate review.
Source: US EPA, Permit Program under CWA Section 404. https://www.epa.gov/cwa-404/permit-program-under-cwa-section-404
Also note Section 401 water quality certification and any state land disturbance or stormwater permits where applicable (Missouri DNR water permits). https://dnr.mo.gov/water/what-were-doing/citizens-guide-permits

### NRCS Conservation Practice Standard 378 (Pond)
The USDA Natural Resources Conservation Service standard for ponds. It applies where the effective dam height is 35 feet or less and the product of storage times effective height is under 3,000. It sets design requirements for the dam, spillway, seepage control, freeboard, and a settlement allowance. Cost share through NRCS programs may be available for qualifying agricultural ponds, which is a planned-demand trigger worth referencing.
Source: USDA NRCS, Conservation Practice Standard Pond Code 378. https://www.nrcs.usda.gov/sites/default/files/2022-09/Pond_378_NHCP_PO_2022.pdf

### MU Extension pond design guidance (watershed sizing and construction)
University of Missouri Extension guidance for Missouri ponds:
- Watershed to water ratio: maintain roughly 10 to 20 acres of drainage area for each surface acre of water in Missouri, adjusted for land use and soils.
- Many Missouri ponds need a compacted clay core, and the waterside slope should be no steeper than 1 in 3.
- Provide adequate depth (commonly at least 6 to 7 feet at the deepest point) to limit weeds and support fish.
Source: MU Extension, Managing Ponds and Lakes, G9474. https://extension.missouri.edu/publications/g9474

### Regional soils reality in the Ozarks (use as a genuine differentiator)
Southwest Missouri Ozark soils are commonly cherty silt loams over fractured bedrock and are frequently low in clay. Many sites in this region will not hold water without a compacted clay core, imported clay, or a liner. This contrasts with the clay-rich glacial soils of northern Missouri. This regional fact powers the "will my pond hold water" guide and the per-county soil notes. State it generally with the MU Extension and NRCS sources, then back it per county with Web Soil Survey data (Part B).
Verification source for per-site soils: USDA NRCS Web Soil Survey. https://websoilsurvey.nrcs.usda.gov/

### Build season (non-emergency framing)
Late summer through winter is a common build window in Missouri because drier conditions improve compaction, though work occurs year round. Frame all timing content as planning guidance, never as emergency response.

---

## PART B: Per-county and per-town data

For each county, fill and verify every field, then write the unique body prose using those facts. Each county page must read as if written by someone who knows that county. The town pages inherit the county data and add one local detail.

### Required fields per COUNTY
- name, slug, county_seat
- towns_in_set (which of our town pages sit in this county)
- primary_drainages: the main rivers and creeks that define watershed sizing locally. VERIFY exact basin via USGS or NRCS.
- usace_district: which Army Corps district reviews Section 404 here. This varies by basin within the cluster, so VERIFY per project and state it carefully (White River basin tends toward the Little Rock District, Osage and Missouri River tributaries tend toward the Kansas City District). Confirm at https://www.usace.army.mil/Locations/ and the regulatory boundary maps.
- dominant_soils and clay_suitability: VERIFY from NRCS Web Soil Survey for the county. Summarize whether typical soils hold water or need amendment.
- swcd_office: the county Soil and Water Conservation District office, with current address and phone. VERIFY at the Missouri Soil and Water Conservation Program district directory (search "Missouri SWCD district directory" on dnr.mo.gov) before listing contact details. Do not invent an address or phone.
- floodplain_or_grading_note: any county or municipal floodplain or land disturbance consideration. VERIFY at the county or city site.
- body: unique prose tying the above together for a landowner planning a pond in this county.

### Required fields per TOWN
- name, slug, county (parent)
- nearest_swcd: usually the parent county SWCD
- local_waterbody_or_drainage: one real local lake, river, or creek near the town. VERIFY.
- one_local_detail: a single specific, true local fact (a nearby reservoir, a known watershed, a terrain note). VERIFY.
- body: unique prose. Must stay useful if the town name were swapped out only because the local facts, not the boilerplate, carry it.

---

### Greene County
- county_seat: Springfield
- towns_in_set: Republic (Rogersville extends into Greene from Webster)
- primary_drainages: James River, Sac River, Wilson Creek, Pearson Creek, Little Sac River. Springfield area reservoirs include Fellows Lake, McDaniel Lake, and Lake Springfield. VERIFY basin boundaries.
- usace_district: VERIFY. James and White River basin portions tend toward the Little Rock District. Sac and Little Sac (Osage and Missouri basin) portions tend toward the Kansas City District.
- dominant_soils and clay_suitability: VERIFY via Web Soil Survey. Expect cherty silt loams typical of the Springfield Plateau, many needing a clay core or liner.
- swcd_office: VERIFY (Greene County SWCD).
- floodplain_or_grading_note: VERIFY (City of Springfield and Greene County land disturbance and floodplain rules where applicable).
- body: TODO after fields verified.

### Christian County
- county_seat: Ozark
- towns_in_set: Ozark, Nixa
- primary_drainages: Finley Creek, James River, Bull Creek; the county drains south toward the White River and Table Rock Lake basin. VERIFY.
- usace_district: VERIFY. White River basin orientation suggests the Little Rock District for many sites.
- dominant_soils and clay_suitability: VERIFY via Web Soil Survey. Expect cherty Ozark soils, often low clay.
- swcd_office: VERIFY (Christian County SWCD).
- floodplain_or_grading_note: VERIFY (Christian County and city of Ozark or Nixa).
- body: TODO after fields verified.

### Webster County
- county_seat: Marshfield
- towns_in_set: Marshfield, Rogersville
- primary_drainages: headwaters county. James River headwaters, Niangua River headwaters, Osage Fork of the Gasconade, and Gasconade tributaries originate here. VERIFY which basin each project sits in.
- usace_district: VERIFY. Mixed county. James (White River basin) versus Niangua and Gasconade (Osage and Missouri basin) point to different districts.
- dominant_soils and clay_suitability: VERIFY via Web Soil Survey.
- swcd_office: VERIFY (Webster County SWCD).
- floodplain_or_grading_note: VERIFY.
- body: TODO after fields verified. The headwaters character is a genuine local angle: smaller drainage areas near divides affect watershed sizing.

### Polk County
- county_seat: Bolivar
- towns_in_set: Bolivar
- primary_drainages: Sac River, Pomme de Terre River, Little Sac River. Osage and Missouri River basin. VERIFY.
- usace_district: VERIFY. Osage basin orientation suggests the Kansas City District for many sites.
- dominant_soils and clay_suitability: VERIFY via Web Soil Survey.
- swcd_office: VERIFY (Polk County SWCD).
- floodplain_or_grading_note: VERIFY.
- body: TODO after fields verified.

### Dallas County
- county_seat: Buffalo
- towns_in_set: Buffalo
- primary_drainages: Niangua River, Pomme de Terre River. Osage and Missouri River basin; Pomme de Terre Lake lies downstream. VERIFY.
- usace_district: VERIFY. Osage basin orientation suggests the Kansas City District for many sites.
- dominant_soils and clay_suitability: VERIFY via Web Soil Survey.
- swcd_office: VERIFY (Dallas County SWCD).
- floodplain_or_grading_note: VERIFY.
- body: TODO after fields verified.

---

### Town entries (fill local_waterbody and one_local_detail, then verify)

- Marshfield, slug marshfield-mo, county Webster. local detail VERIFY (near the James River and Niangua headwaters divide). 
- Rogersville, slug rogersville-mo, county Webster (extends into Greene). local detail VERIFY (Finley Creek and James River drainage nearby).
- Ozark, slug ozark-mo, county Christian. local detail VERIFY (Finley Creek through town; Lake Springfield and Table Rock basin context).
- Republic, slug republic-mo, county Greene. local detail VERIFY (Wilson Creek and James River drainage).
- Buffalo, slug buffalo-mo, county Dallas. local detail VERIFY (Niangua and Pomme de Terre drainage; Pomme de Terre Lake downstream).
- Bolivar, slug bolivar-mo, county Polk. local detail VERIFY (Sac River and Stockton Lake context downstream).
- Nixa, slug nixa-mo, county Christian. local detail VERIFY (James River and Finley Creek drainage).

---

## How to use this data in the unique body prose

Every county and town page body should weave at least three of these into honest, plain prose:
1. The relevant permit posture (under 35 feet typically no state dam permit; whether a project likely triggers Section 404 based on stream impact; NRCS 378 design context).
2. The local soils and water-holding reality for that county (from Web Soil Survey), including whether a clay core or liner is commonly needed.
3. The local watershed and drainage, tied to the 10 to 20 acre per surface acre sizing rule, so a landowner gets a sense of how much watershed their pond size needs.
4. The local SWCD office as a real resource (verified contact), and NRCS cost share where relevant.

Open each location page with a two to three sentence answer block (see `docs/seo-spec.md`) that states the matching offer and one true local fact. Then go deeper. Link out to the .gov and .edu sources in Part A.
