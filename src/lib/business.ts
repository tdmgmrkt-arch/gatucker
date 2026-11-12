/**
 * Public business facts used for visible NAP and JSON-LD.
 *
 * PUBLISH_STREET_ADDRESS is the single switch for the office street address.
 * Set it to false to publish city, region, and postal code only
 * (Murrieta, CA 92563) on the footer, contact page, and Murrieta page, and
 * in LocalBusiness / ProfessionalService JSON-LD. areaServed stays.
 * Phone and business name stay. Never substitute the registered-agent street.
 *
 * The mailbox street stays in this file so the switch can be turned back on.
 * While the switch is false the street string is a dead branch and must not
 * be emitted in the production build.
 */
export const PUBLISH_STREET_ADDRESS = false;

const STREET_WHEN_PUBLISHED = PUBLISH_STREET_ADDRESS
  ? "40477 Murrieta Hot Springs Rd, Ste D1 #123"
  : "";

export const OFFICE_ADDRESS = {
  streetAddress: STREET_WHEN_PUBLISHED,
  addressLocality: "Murrieta",
  addressRegion: "CA",
  postalCode: "92563",
  addressCountry: "US",
} as const;

/** Main line already used across the site. */
export const MAIN_PHONE_DISPLAY = "909-964-8976";
export const MAIN_PHONE_TEL = "tel:909-964-8976";

export const LICENSE_NUMBER = "PI188351";
export const LICENSE_LOOKUP_URL = "https://search.dca.ca.gov/";

export function localityLine(): string {
  return `${OFFICE_ADDRESS.addressLocality}, ${OFFICE_ADDRESS.addressRegion} ${OFFICE_ADDRESS.postalCode}`;
}

function mapsQuery(): string {
  if (PUBLISH_STREET_ADDRESS && OFFICE_ADDRESS.streetAddress) {
    return `${OFFICE_ADDRESS.streetAddress}, ${localityLine()}`;
  }
  return localityLine();
}

/** Search link for the published place. City-level while the street is hidden. */
export const MAPS_PLACE_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  mapsQuery(),
)}`;

/**
 * Profiles that match between the footer and schema.
 * Facebook and Yelp do not — those stay on their existing URLs in each place
 * until the owner picks one. See SOCIAL_UNRESOLVED.
 */
export const SOCIAL = {
  x: "https://x.com/ginvestigative",
  instagram: "https://www.instagram.com/gatuckerpi",
  googleMaps: MAPS_PLACE_URL,
} as const;

export const SOCIAL_UNRESOLVED = {
  facebookFooter: "https://facebook.com/161146941379347",
  facebookSchema: "https://www.facebook.com/gatuckerpi",
  yelpFooter: "https://yelp.com/biz/g-a-tucker-p-i-investigative-services-murrieta",
  yelpSchema: "https://www.yelp.com/biz/ga-tucker-pi",
} as const;

/** Street line plus city line, or null when the street is unpublished. */
export function officeAddressLines(): { line1: string; line2: string } | null {
  if (!PUBLISH_STREET_ADDRESS || !OFFICE_ADDRESS.streetAddress) return null;
  return {
    line1: OFFICE_ADDRESS.streetAddress,
    line2: localityLine(),
  };
}

export function officeMapEmbedSrc(): string | null {
  const lines = officeAddressLines();
  if (!lines) return null;
  const query = encodeURIComponent(`${lines.line1}, ${lines.line2}`);
  return `https://maps.google.com/maps?q=${query}&z=16&output=embed`;
}

/**
 * PostalAddress for LocalBusiness / ProfessionalService.
 * With the street hidden: locality, region, postal code, and country only.
 */
export function postalAddressSchema() {
  const published = {
    "@type": "PostalAddress" as const,
    addressLocality: OFFICE_ADDRESS.addressLocality,
    addressRegion: OFFICE_ADDRESS.addressRegion,
    postalCode: OFFICE_ADDRESS.postalCode,
    addressCountry: OFFICE_ADDRESS.addressCountry,
  };
  if (!PUBLISH_STREET_ADDRESS || !OFFICE_ADDRESS.streetAddress) return published;
  return {
    ...published,
    streetAddress: OFFICE_ADDRESS.streetAddress,
  };
}
