import { cn } from './ui/utils';

/** Inline Google "G" mark — official brand colors */
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

type GoogleRatingBadgeProps = {
  rating: string;
  count: string;
  href: string;
  className?: string;
};

/**
 * Compact header badge: "G ★ 4.9 · 67 reviews"
 * Matches the ga-tucker-pi dark/gold design system.
 * On mobile (< md) only shows "★ 4.9" to avoid crowding the nav.
 */
export function GoogleRatingBadge({
  rating,
  count,
  href,
  className,
}: GoogleRatingBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Rated ${rating} out of 5 stars from ${count} Google reviews — opens in new tab`}
      className={cn(
        'inline-flex items-center gap-1 rounded-sm px-2 py-0.5 min-h-[26px]',
        'border border-[#CEA53D]/30 bg-[#CEA53D]/5 backdrop-blur-sm',
        'text-[#EDEDED] hover:border-[#CEA53D]/60 hover:bg-[#CEA53D]/10',
        'transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#CEA53D]',
        className
      )}
    >
      <GoogleGMark className="h-3 w-3 shrink-0" />
      {/* Star icon — always visible */}
      <span className="text-[#CEA53D] text-[10px] leading-none" aria-hidden="true">
        ★
      </span>
      <span className="text-[11px] font-bold text-[#EDEDED] leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
        {rating}
      </span>
      {/* Review count — hide on small screens to prevent nav crowding */}
      <span className="hidden sm:inline text-[10px] text-[#EDEDED]/60 font-light leading-none">
        · {count} reviews
      </span>
    </a>
  );
}
