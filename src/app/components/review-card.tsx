'use client';

import { useState } from 'react';
import type { GoogleReview } from '@/lib/google-reviews';

const TRUNCATE_LENGTH = 200;

/** Inline Google "G" mark */
function GoogleGMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

type ReviewCardProps = {
  review: GoogleReview;
  /** When true, show full text without truncation (used on /reviews page) */
  fullText?: boolean;
};

export function ReviewCard({ review, fullText = false }: ReviewCardProps) {
  const isLong = review.text.length > TRUNCATE_LENGTH;
  const [expanded, setExpanded] = useState(false);

  const displayText =
    fullText || !isLong || expanded
      ? review.text
      : review.text.slice(0, TRUNCATE_LENGTH).trimEnd() + '…';

  const initials = review.authorName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="relative flex flex-col h-full bg-black/80 backdrop-blur-md border-2 border-[#CEA53D]/20 rounded-xl p-6 md:p-8 hover:border-[#CEA53D]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(206,165,61,0.15)]">
      {/* Header: avatar + name + time + stars */}
      <header className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="w-12 h-12 rounded-sm bg-black border-2 border-[#CEA53D] flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <span
              className="text-[#CEA53D] font-black text-base"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {initials}
            </span>
          </div>
          <div>
            <p
              className="text-[#EDEDED] font-bold text-base leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {review.authorName}
            </p>
            <p className="text-[#EDEDED]/50 text-xs mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
              {review.relativePublishTime}
            </p>
          </div>
        </div>
        {/* Google G mark */}
        <GoogleGMark className="h-5 w-5 shrink-0 mt-0.5" />
      </header>

      {/* Stars */}
      <div
        className="flex gap-0.5 mb-4"
        aria-label={`${review.rating} out of 5 stars`}
        role="img"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={`h-4 w-4 ${i < review.rating ? 'text-[#CEA53D]' : 'text-[#CEA53D]/20'}`}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p
        className="text-[#EDEDED]/80 leading-relaxed flex-grow text-sm md:text-base"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        &ldquo;{displayText}&rdquo;
      </p>

      {/* Expand toggle — only when truncated */}
      {!fullText && isLong && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-3 text-[#CEA53D] text-xs font-semibold hover:text-[#CEA53D]/80 transition-colors focus-visible:outline-2 focus-visible:outline-[#CEA53D] self-start"
          aria-expanded={expanded}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </article>
  );
}
