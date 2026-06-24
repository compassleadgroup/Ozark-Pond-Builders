// Central site configuration. Set the TODO values before promoting the site.
//
// Domain note: the chat instruction set the registered domain to
// ozarkpondbuilders.com. The earlier docs used a placeholder spelling
// (ozarkspondbuilders.com). The registered domain governs, so the whole site
// uses ozarkpondbuilders.com (canonical URLs, sitemap, Organization schema).

export const SITE = {
  brand: 'Ozark Pond Builders',
  domain: 'ozarkpondbuilders.com',
  url: 'https://ozarkpondbuilders.com',
  legalEntity: 'Compass Camper LLC, doing business as Compass Lead Group',
  description:
    'A free matching service connecting southwest Missouri landowners with licensed local pond and excavation contractors.',

  // TODO: CONFIG. Set the TextNow click to call number, e.g. '(417) 555-0123'.
  // Leave empty to hide the call link site wide until it is set.
  phone: '',

  // TODO: CONFIG. Confirm or create this forwarding address on the domain.
  email: 'hello@ozarkpondbuilders.com',

  // TODO: CONFIG. Paste the free Web3Forms access key. The lead form will not
  // deliver submissions until this is set.
  web3formsKey: '',

  // TODO: CONFIG. Paste the GA4 measurement id, e.g. 'G-XXXXXXXXXX'.
  // Analytics stays off until this is set.
  ga4Id: '',

  // TODO: CONFIG. Paste the Google Search Console verification token, or verify
  // by DNS. The verification meta tag stays off until this is set.
  gscVerification: '',
} as const;

// Service area used in the Service schema areaServed and in copy.
export const AREA_COUNTIES = [
  'Greene County, Missouri',
  'Christian County, Missouri',
  'Webster County, Missouri',
  'Polk County, Missouri',
  'Dallas County, Missouri',
] as const;

// Build a tel: href from a display phone number.
export const telHref = (p: string): string => 'tel:' + p.replace(/[^0-9+]/g, '');
