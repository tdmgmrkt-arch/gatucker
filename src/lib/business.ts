/**
 * Public business facts used for visible NAP and JSON-LD.
 *
 * PUBLISH_STREET_ADDRESS is the single switch for the office street address.
 * Set it to false to hide the street on /contact, the footer, and the Murrieta
 * page, and to drop streetAddress / postalCode from Organization JSON-LD.
 * Never put any other street here (the registered-agent address is not public).
 */
export const PUBLISH_STREET_ADDRESS = true;

export const OFFICE_ADDRESS = {
  streetAddress: "25185 Madison Ave Ste A",
  addressLocality: "Murrieta",
  addressRegion: "CA",
  postalCode: "92562",
  addressCountry: "US",
} as const;

/** Main line already used across the site. */
export const MAIN_PHONE_DISPLAY = "909-964-8976";
export const MAIN_PHONE_TEL = "tel:909-964-8976";

export const LICENSE_NUMBER = "PI188351";
export const LICENSE_LOOKUP_URL = "https://search.dca.ca.gov/";

/** Existing Google place already cited in Organization sameAs. */
export const MAPS_PLACE_URL =
  "https://www.google.com/maps/place/?q=place_id:ChIJayO7FOV924AR4ZhvEEuHDBg";

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

export function officeAddressLines(): { line1: string; line2: string } | null {
  if (!PUBLISH_STREET_ADDRESS) return null;
  return {
    line1: OFFICE_ADDRESS.streetAddress,
    line2: `${OFFICE_ADDRESS.addressLocality}, ${OFFICE_ADDRESS.addressRegion} ${OFFICE_ADDRESS.postalCode}`,
  };
}

export function officeMapEmbedSrc(): string | null {
  const lines = officeAddressLines();
  if (!lines) return null;
  const query = encodeURIComponent(`${lines.line1}, ${lines.line2}`);
  return `https://maps.google.com/maps?q=${query}&z=16&output=embed`;
}

export function postalAddressSchema() {
  if (!PUBLISH_STREET_ADDRESS) {
    return {
      "@type": "PostalAddress",
      addressLocality: OFFICE_ADDRESS.addressLocality,
      addressRegion: OFFICE_ADDRESS.addressRegion,
      addressCountry: OFFICE_ADDRESS.addressCountry,
    };
  }
  return {
    "@type": "PostalAddress",
    streetAddress: OFFICE_ADDRESS.streetAddress,
    addressLocality: OFFICE_ADDRESS.addressLocality,
    addressRegion: OFFICE_ADDRESS.addressRegion,
    postalCode: OFFICE_ADDRESS.postalCode,
    addressCountry: OFFICE_ADDRESS.addressCountry,
  };
}
