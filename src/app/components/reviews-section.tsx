/**
 * ReviewsSection — Server Component
 *
 * Receives pre-fetched Google review data from the parent RSC (page.tsx)
 * and renders a live testimonials section. Does NOT call getGoogleReviews()
 * itself — data flows down as props to preserve the single fetch per request.
 *
 * Falls back gracefully when reviews array is empty (API failure).
 */
import Link from 'next/link';
import Image from 'next/image';
import type { GoogleReview } from '@/lib/google-reviews';
import { ReviewCard } from './review-card';

const GBP_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJayO7FOV924AR4ZhvEEuHDBg';
const GBP_WRITE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJayO7FOV924AR4ZhvEEuHDBg';

type ReviewsSectionProps = {
  rating: string;
  count: string;
  reviews: GoogleReview[];
};

export function ReviewsSection({ rating, count, reviews }: ReviewsSectionProps) {
  // Fallback: if API failed and reviews is empty, render a trust signal block
  if (reviews.length === 0) {
    return (
      <section
        id="client-reviews"
        className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-label="Client trust"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/30 to-transparent" />
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-[#CEA53D] uppercase tracking-widest text-sm font-semibold mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Trusted by Clients Across California
          </p>
          <h2
            className="text-[#EDEDED] font-black uppercase mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            Discretion. Results. Integrity.
          </h2>
          <p className="text-[#EDEDED]/70 text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Greg A. Tucker PI has served California clients for over 27 years. Read verified reviews on{' '}
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CEA53D] hover:text-[#CEA53D]/80 underline underline-offset-2"
            >
              Google Business Profile
            </a>
            .
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/30 to-transparent" />
      </section>
    );
  }

  return (
    <section
      id="client-reviews"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/30 to-transparent z-30" />
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CEA53D]/10 to-transparent blur-sm z-30" />

      {/* Background Image — ported from prior TestimonialsSection for visual continuity */}
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

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#CEA53D]/6 rounded-full blur-[140px] z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#FFA500]/6 rounded-full blur-[140px] z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-6 px-5 py-2 rounded-sm border border-[#CEA53D]/30 bg-[#CEA53D]/5 backdrop-blur-sm">
            <svg
              viewBox="0 0 20 20"
              className="h-4 w-4 text-[#CEA53D] fill-current"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span
              className="text-[#CEA53D] font-semibold text-xs uppercase tracking-widest"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Verified Google Reviews
            </span>
          </div>

          <h2
            id="reviews-heading"
            className="font-black uppercase tracking-tight text-[#EDEDED] mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            What Our Clients Say
          </h2>

          {/* Live aggregate */}
          <p className="text-[#EDEDED]/70 text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
            Rated{' '}
            <span className="text-[#CEA53D] font-semibold">
              {rating}
              <span className="text-[#CEA53D] ml-0.5" aria-hidden="true">★</span>
            </span>{' '}
            from{' '}
            <span className="text-[#CEA53D] font-semibold">{count} Google reviews</span>
          </p>

          {/* Gold rule */}
          <div
            className="h-0.5 w-24 bg-[#CEA53D] mx-auto mt-6"
            style={{ boxShadow: '0 0 16px rgba(206,165,61,0.6)' }}
          />
        </div>

        {/* Review cards: 1 col mobile → 2 col sm → 3 col lg. 5 reviews + 1 CTA card = 6 tiles, fills a clean 2x3 grid. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {reviews.slice(0, 5).map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}

          {/* Leave-a-review CTA tile — fills the empty 6th grid slot and converts it into a review-acquisition surface */}
          <a
            href={GBP_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Write a review for GA Tucker PI on Google — opens in new tab"
            className="group relative flex flex-col items-center justify-center text-center rounded-lg border border-[#CEA53D]/40 bg-gradient-to-br from-[#CEA53D]/10 via-black to-black p-8 min-h-[280px] transition-all duration-300 hover:border-[#CEA53D] hover:from-[#CEA53D]/15 hover:shadow-[0_0_24px_rgba(206,165,61,0.25)] focus-visible:outline-2 focus-visible:outline-[#CEA53D]"
          >
            {/* Star burst icon */}
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

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 px-7 py-3 min-h-[44px] bg-black border-2 border-[#CEA53D] text-[#CEA53D] font-black uppercase tracking-wider text-sm hover:bg-[#CEA53D] hover:text-black transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#CEA53D]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              boxShadow: '0 0 16px rgba(206,165,61,0.25)',
            }}
          >
            Read all reviews
            <svg
              viewBox="0 0 20 20"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 min-h-[44px] bg-transparent border border-[#CEA53D]/30 text-[#EDEDED]/70 text-sm hover:border-[#CEA53D]/60 hover:text-[#EDEDED] transition-all duration-300 rounded-sm focus-visible:outline-2 focus-visible:outline-[#CEA53D]"
            aria-label="View all reviews on Google Business Profile — opens in new tab"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View on Google
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

      {/* Bottom border */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/30 to-transparent z-30" />
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CEA53D]/10 to-transparent blur-sm z-30" />
    </section>
  );
}
