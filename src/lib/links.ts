import { getCollection } from 'astro:content';

// A county or town page only exists once it is out of draft (all VERIFY fields
// resolved). These helpers let pages link to a location only if it is published,
// and fall back to the locations hub otherwise, so no internal link 404s.

export async function publishedCountySlugs(): Promise<Set<string>> {
  const entries = await getCollection('counties', ({ data }) => !data.draft);
  return new Set(entries.map((e) => e.id));
}

export async function publishedTownSlugs(): Promise<Set<string>> {
  const entries = await getCollection('towns', ({ data }) => !data.draft);
  return new Set(entries.map((e) => e.id));
}

export function countyUrl(slug: string, published: Set<string>): string {
  return published.has(slug) ? `/${slug}/` : '/locations/';
}

export function townUrl(slug: string, published: Set<string>): string {
  return published.has(slug) ? `/locations/${slug}/` : '/locations/';
}
