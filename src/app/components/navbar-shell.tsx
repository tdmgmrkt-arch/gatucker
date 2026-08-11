/**
 * NavbarShell — Server Component wrapper for Navbar.
 *
 * Fetches live Google rating (24h ISR cache) and passes the badge
 * down to the Navbar client component as a prop. This keeps all
 * client-side interactivity in Navbar untouched while still surfacing
 * live review data in the server-rendered HTML.
 */
import { Navbar } from './navbar';
import { GoogleRatingBadge } from './google-rating-badge';
import { getGoogleReviews, formatRating, formatReviewCount } from '@/lib/google-reviews';

const FALLBACK_RATING = '4.9';
const FALLBACK_COUNT = '67';
const GBP_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJayO7FOV924AR4ZhvEEuHDBg';

export default async function NavbarShell() {
  const data = await getGoogleReviews();

  const rating = formatRating(data.rating) ?? FALLBACK_RATING;
  const count = formatReviewCount(data.userRatingCount) ?? FALLBACK_COUNT;

  const ratingBadge = (
    <GoogleRatingBadge
      rating={rating}
      count={count}
      href={GBP_URL}
    />
  );

  return <Navbar ratingBadge={ratingBadge} />;
}
