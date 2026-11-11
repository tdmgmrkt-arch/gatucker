import { LICENSE_LOOKUP_URL } from "@/lib/business";

/**
 * Link to the California DCA license search. The label is the visible
 * "Verify license" text; the destination is the official lookup, not a
 * guessed direct-record URL.
 */
export function VerifyLicenseLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={LICENSE_LOOKUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline decoration-[#CEA53D]/50 underline-offset-2 hover:text-[#CEA53D] hover:decoration-[#CEA53D] transition-colors ${className}`}
    >
      Verify license
    </a>
  );
}
