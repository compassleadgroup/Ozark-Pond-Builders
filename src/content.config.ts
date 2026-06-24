import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faqItem = z.object({
  q: z.string(),
  a: z.string(),
});

// Service pages (money pages). No unverified data, so all publish.
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    h1: z.string(),
    description: z.string(),
    serviceType: z.string(),
    order: z.number().default(0),
    answer: z.string(),
    keywords: z.array(z.string()).default([]),
    faq: z.array(faqItem).default([]),
    relatedGuides: z.array(z.string()).default([]),
  }),
});

// Guides (link bait and trust content). The permit guide is the pillar.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    h1: z.string(),
    description: z.string(),
    answer: z.string(),
    order: z.number().default(0),
    pillar: z.boolean().default(false),
    // Cost guide sets this false: informational only, not optimized for lead capture.
    leadCapture: z.boolean().default(true),
    faq: z.array(faqItem).default([]),
    relatedService: z.string().optional(),
    relatedCounty: z.string().optional(),
    relatedGuides: z.array(z.string()).default([]),
  }),
});

// County pages. Every county currently has VERIFY fields, so draft defaults true.
// A county must not publish until soils, watershed, SWCD office, USACE district,
// and floodplain note are verified per docs/content-data.md.
const counties = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/counties' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    h1: z.string(),
    description: z.string(),
    county_seat: z.string(),
    towns_in_set: z.array(z.string()).default([]),
    primary_drainages: z.string(),
    usace_district: z.string(),
    dominant_soils: z.string(),
    clay_suitability: z.string(),
    swcd_office: z.string(),
    floodplain_or_grading_note: z.string(),
    answer: z.string(),
    draft: z.boolean().default(true),
  }),
});

// Town pages. Same draft gate as counties until local fields are verified.
const towns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/towns' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    h1: z.string(),
    description: z.string(),
    county: z.string(),
    countyName: z.string(),
    nearest_swcd: z.string(),
    local_waterbody_or_drainage: z.string(),
    one_local_detail: z.string(),
    relatedServices: z.array(z.string()).default([]),
    answer: z.string(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { services, guides, counties, towns };
