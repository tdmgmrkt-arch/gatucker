/**
 * /reviews — Dedicated Google reviews page
 *
 * RSC that fetches live data and renders all returned reviews.
 * Cards truncate long text and expand inline via "Read more".
 * Includes BreadcrumbList JSON-LD and AggregateRating schema.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getGoogleReviews, formatRating, formatReviewCount } from '@/lib/google-reviews';
import { ReviewCard } from '../components/review-card';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/navbar-shell'));
const Footer = dynamic(() =>
  import('../components/footer').then((mod) => ({ default: mod.Footer }))
);

const GBP_URL =
  'https://www.google.com/maps/place/?q=place_id:ChIJayO7FOV924AR4ZhvEEuHDBg';
const GBP_WRITE_REVIEW_URL =
  'https://search.google.com/local/writereview?placeid=ChIJayO7FOV924AR4ZhvEEuHDBg';
const BASE_URL = 'https://gatuckerpi.com';

// ── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Client Reviews',
  description:
    'Read 4.9-star verified Google reviews of California private investigator Greg A. Tucker. 67 reviews from clients across Southern California, the Bay Area, and beyond.',
  alternates: {
    canonical: '/reviews',
  },
  openGraph: {
    title: 'Client Reviews | G.A. Tucker PI',
    description:
      'See verified Google reviews from clients of California PI Greg A. Tucker. Rated 4.9★ from 67 Google reviews.',
    url: '/reviews',
    images: ['/og-image.png'],
  },
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function ReviewsPage() {
  const reviewData = await getGoogleReviews();

  const rating = formatRating(reviewData.rating) ?? '4.9';
  const count = formatReviewCount(reviewData.userRatingCount) ?? '67';
  const countRaw = reviewData.userRatingCount ?? 67;
  const reviews = reviewData.reviews;

  // JSON-LD: BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Client Reviews',
        item: `${BASE_URL}/reviews`,
      },
    ],
  };

  // JSON-LD: AggregateRating on this page (reinforces the root layout schema)
  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#organization`,
    name: 'G.A. Tucker PI',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: String(countRaw),
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
        <Navbar />

        <main>
          {/* ── Hero / page header ─────────────────────────────────────────── */}
          <header className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Gold ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#CEA53D]/6 rounded-full blur-[140px] pointer-events-none" />

            {/* Gold rule top */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent" />

            <div className="max-w-5xl mx-auto relative z-10">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <li>
                    <Link
                      href="/"
                      className="text-[#EDEDED]/50 hover:text-[#CEA53D] transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-[#CEA53D]/40" aria-hidden="true">/</li>
                  <li className="text-[#CEA53D] font-medium" aria-current="page">
                    Client Reviews
                  </li>
                </ol>
              </nav>

              {/* H1 */}
              <h1
                className="font-black uppercase tracking-tight text-[#EDEDED] mb-6 leading-tight"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                }}
              >
                What Our Clients Say
              </h1>

              {/* Subhead with live aggregate */}
              <p
                className="text-[#EDEDED]/70 text-lg leading-relaxed max-w-2xl mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Rated{' '}
                <span className="text-[#CEA53D] font-semibold">
                  {rating}
                  <span aria-hidden="true">★</span>
                </span>{' '}
                from{' '}
                <span className="text-[#CEA53D] font-semibold">{count} verified Google reviews</span>{' '}
                — verified via Google Business Profile.
              </p>

              {/* Gold rule */}
              <div
                className="h-0.5 w-24 bg-[#CEA53D]"
                style={{ boxShadow: '0 0 16px rgba(206,165,61,0.6)' }}
              />
            </div>
          </header>

          {/* ── Reviews grid ───────────────────────────────────────────────── */}
          <section
            className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20 overflow-hidden"
            aria-label="Client reviews"
          >
            {/* Top border */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/30 to-transparent z-30" />
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CEA53D]/10 to-transparent blur-sm z-30" />

            {/* Background image — matches homepage ReviewsSection for visual continuity */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/testimonialsbg.webp"
                alt=""
                fill
                className="object-cover object-center brightness-[0.6]"
                quality={90}
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/80 to-[#0D0D0D]/95 mix-blend-multiply z-10" />
            </div>

            {/* Ambient glows */}
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#CEA53D]/6 rounded-full blur-[140px] z-10 pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#FFA500]/6 rounded-full blur-[140px] z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-20">
              {reviews.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                  ))}

                  {/* Leave-a-review CTA tile — final slot converts the grid into a review-acquisition surface */}
                  <a
                    href={GBP_WRITE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Write a review for GA Tucker PI on Google — opens in new tab"
                    className="group relative flex flex-col items-center justify-center text-center rounded-lg border border-[#CEA53D]/40 bg-gradient-to-br from-[#CEA53D]/10 via-black to-black p-8 min-h-[280px] transition-all duration-300 hover:border-[#CEA53D] hover:from-[#CEA53D]/15 hover:shadow-[0_0_24px_rgba(206,165,61,0.25)] focus-visible:outline-2 focus-visible:outline-[#CEA53D]"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#CEA53D]/40 bg-black/40 group-hover:border-[#CEA53D] transition-colors">
                      <svg
                        viewBox="0 0 20 20"
                        className="h-7 w-7 text-[#CEA53D] fill-current"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <h3
                      className="text-[#EDEDED] font-black uppercase text-2xl mb-3 tracking-tight"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Worked With Greg?
                    </h3>

                    <p
                      className="text-[#EDEDED]/70 text-sm leading-relaxed mb-5 max-w-[240px]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Share your experience and help others find the truth.
                    </p>

                    <span
                      className="inline-flex items-center gap-2 text-[#CEA53D] font-bold uppercase text-xs tracking-widest group-hover:gap-3 transition-all"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Leave a Google review
                      <svg
                        viewBox="0 0 20 20"
                        className="h-3.5 w-3.5 fill-current"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              ) : (
                /* Fallback when API returned no reviews */
                <div className="max-w-2xl mx-auto text-center py-16">
                  <p
                    className="text-[#EDEDED]/60 text-base mb-6"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Reviews are loading from Google. In the meantime, you can read verified
                    reviews directly on our Google Business Profile.
                  </p>
                  <a
                    href={GBP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3 min-h-[44px] bg-black border-2 border-[#CEA53D] text-[#CEA53D] font-black uppercase tracking-wider text-sm hover:bg-[#CEA53D] hover:text-black transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#CEA53D]"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      boxShadow: '0 0 16px rgba(206,165,61,0.25)',
                    }}
                  >
                    View on Google Business Profile
                  </a>
                </div>
              )}
            </div>

            {/* Bottom border */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/30 to-transparent z-30" />
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CEA53D]/10 to-transparent blur-sm z-30" />
          </section>

          {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
          <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="font-black uppercase tracking-tight text-[#EDEDED] mb-4"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                }}
              >
                Have a Matter to Discuss?
              </h2>
              <p
                className="text-[#EDEDED]/60 text-base mb-8 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                All consultations are confidential. Let Greg A. Tucker and his team put
                27+ years of investigative experience to work for you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[44px] w-full sm:w-auto bg-black border-2 border-[#CEA53D] text-[#CEA53D] font-black uppercase tracking-wider text-sm hover:bg-[#CEA53D] hover:text-black transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#CEA53D]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    boxShadow: '0 0 20px rgba(206,165,61,0.3)',
                  }}
                >
                  Contact us
                </Link>
                <a
                  href={GBP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[44px] w-full sm:w-auto border border-[#CEA53D]/30 text-[#EDEDED]/60 text-sm hover:border-[#CEA53D]/60 hover:text-[#EDEDED] transition-all duration-300 rounded-sm focus-visible:outline-2 focus-visible:outline-[#CEA53D]"
                  aria-label="Leave a Google review — opens in new tab"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Leave a Google review
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3.5 w-3.5 fill-current opacity-60"
                    aria-hidden="true"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
