import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Target modern browsers only - removes legacy polyfills
  transpilePackages: [],
  // Legacy URL map. Every source below was confirmed live as a 404 on 2026-11-09
  // against the Wayback URL history of all three site generations.
  // NOTE: Next normalises the trailing slash before matching, so '/foo' also
  // catches the WordPress-era '/foo/'. Do not add slashed duplicates.
  async redirects() {
    return [
      // --- Legacy city pages — highest-equity losses ---
      { source: '/riverside-county-private-investigator', destination: '/locations/riverside-county', permanent: true },
      { source: '/los-angeles-private-investigator', destination: '/locations/los-angeles-county', permanent: true },
      { source: '/orange-county-private-investigator', destination: '/locations', permanent: true },
      { source: '/san-diego-private-investigator', destination: '/locations', permanent: true },

      // --- Legacy service pages ---
      { source: '/surveillance', destination: '/investigations', permanent: true },
      { source: '/surveillance-private-investigator', destination: '/investigations', permanent: true },
      { source: '/criminal-investigation', destination: '/investigations', permanent: true },
      { source: '/criminal-investigations', destination: '/investigations', permanent: true },
      { source: '/civil-investigations', destination: '/investigations', permanent: true },
      { source: '/background-checks-private-investigator', destination: '/background-checks', permanent: true },
      { source: '/corporate-background-checks', destination: '/background-checks', permanent: true },
      { source: '/personal-background-check', destination: '/background-checks', permanent: true },
      { source: '/asset-searches', destination: '/background-checks', permanent: true },
      { source: '/child-custody-private-investigator', destination: '/child-custody', permanent: true },
      { source: '/infidelity-private-investigator', destination: '/infidelity', permanent: true },
      { source: '/domestic-investigation', destination: '/infidelity', permanent: true },
      { source: '/fidelity', destination: '/infidelity', permanent: true },
      { source: '/missing-person', destination: '/missing-persons', permanent: true },
      { source: '/missing-persons-private-investigator', destination: '/missing-persons', permanent: true },
      { source: '/profiler', destination: '/forensic-behavioral-profiling', permanent: true },
      { source: '/profiling', destination: '/forensic-behavioral-profiling', permanent: true },
      { source: '/profiling-private-investigator', destination: '/forensic-behavioral-profiling', permanent: true },
      { source: '/behavioral-analysis-consulting', destination: '/forensic-behavioral-profiling', permanent: true },
      { source: '/counter-intelligence', destination: '/forensic-behavioral-profiling', permanent: true },
      { source: '/counter-intelligence-private-investigator', destination: '/forensic-behavioral-profiling', permanent: true },
      { source: '/cyberbullying-private-investigator', destination: '/forensic-behavioral-profiling', permanent: true },
      { source: '/forensic-linguistics', destination: '/forensic-behavioral-profiling', permanent: true },
      { source: '/forensic-linguistics-private-investigator', destination: '/forensic-behavioral-profiling', permanent: true },
      { source: '/risk-management-private-investigator', destination: '/risk-management', permanent: true },
      { source: '/threat-assessment', destination: '/risk-management', permanent: true },
      { source: '/threat-assessment-private-investigator', destination: '/risk-management', permanent: true },
      { source: '/stalking-consulting-services', destination: '/risk-management', permanent: true },
      { source: '/trial-consulting', destination: '/consulting', permanent: true },
      { source: '/jury-consulting', destination: '/consulting', permanent: true },
      { source: '/attorney-services', destination: '/consulting', permanent: true },
      { source: '/private-investigator-for-attorneys', destination: '/consulting', permanent: true },
      { source: '/corporate-services', destination: '/consulting', permanent: true },
      { source: '/process-service', destination: '/services', permanent: true },
      { source: '/process-server-private-investigator', destination: '/services', permanent: true },
      { source: '/our-services', destination: '/services', permanent: true },

      // --- Legacy top-level pages ---
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/associations', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/start-your-case', destination: '/contact', permanent: true },
      { source: '/thank-you', destination: '/contact', permanent: true },
      { source: '/thank-you-old', destination: '/contact', permanent: true },
      { source: '/payment', destination: '/contact', permanent: true },
      { source: '/client-payment-portal', destination: '/contact', permanent: true },
      { source: '/client-testimonials', destination: '/reviews', permanent: true },
      { source: '/testimonials', destination: '/reviews', permanent: true },
      { source: '/testimonial', destination: '/reviews', permanent: true },
      { source: '/hollywood-fixer', destination: '/high-profile-investigations', permanent: true },
      { source: '/wpautoterms/privacy-policy', destination: '/privacy-policy', permanent: true },
      { source: '/wpautoterms/terms-and-conditions', destination: '/terms-and-conditions', permanent: true },

      // --- Legacy blog posts ---
      { source: '/how-much-do-private-investigators-cost-for-a-small-case', destination: '/blog/how-to-hire-private-investigator-california', permanent: true },
      { source: '/how-much-do-private-investigators-cost-for-a-small-case-2', destination: '/blog/how-to-hire-private-investigator-california', permanent: true },
      { source: '/conducting-a-background-check-on-prospective-employees', destination: '/blog/employment-background-checks-california-employers', permanent: true },
      { source: '/the-stalker', destination: '/blog/behavioral-threat-assessment-families-executives', permanent: true },
      { source: '/benefits-of-having-professional-manage-security', destination: '/blog/executive-protection-risk-management-guide', permanent: true },
      { source: '/now-clients-finally-know-the-truth-for-peace-of-mind', destination: '/reviews', permanent: true },
      { source: '/now-clients-finally-know-the-truth-for-peace-of-mind-2', destination: '/reviews', permanent: true },
      { source: '/security-guards-flooding-new-york-after-looting-binge', destination: '/blog', permanent: true },
      { source: '/security-guards-flooding-new-york-after-looting-binge-2', destination: '/blog', permanent: true },
      { source: '/hello-world', destination: '/blog', permanent: true },

      // --- WordPress archives — named ones first, then catch-alls ---
      { source: '/category/background-checks', destination: '/background-checks', permanent: true },
      { source: '/category/child-custody', destination: '/child-custody', permanent: true },
      { source: '/category/investigations', destination: '/investigations', permanent: true },
      { source: '/category/security-guards', destination: '/risk-management', permanent: true },
      { source: '/tag/backgrounds', destination: '/background-checks', permanent: true },
      { source: '/tag/assets', destination: '/background-checks', permanent: true },
      { source: '/tag/investigation', destination: '/investigations', permanent: true },
      { source: '/tag/security', destination: '/risk-management', permanent: true },
      { source: '/category/:path*', destination: '/blog', permanent: true },
      { source: '/tag/:path*', destination: '/blog', permanent: true },
      { source: '/author/:path*', destination: '/about', permanent: true },
      { source: '/feed', destination: '/blog', permanent: true },
      { source: '/feed/:path*', destination: '/blog', permanent: true },
      { source: '/sitemap.rss', destination: '/sitemap.xml', permanent: true },

      // --- Orphaned duplicate — SEO-PUNCHLIST A2/A3 (also carried the wrong 'San Diego, CA' line) ---
      { source: '/services/background-checks', destination: '/background-checks', permanent: true },

      // --- Still 404 on 2026-11-10. Destinations confirmed in src/app before adding. ---
      { source: '/request-service', destination: '/request-service-form', permanent: true },
      { source: '/4-questions-to-ask-when-hiring-a-private-investigator', destination: '/blog/how-to-hire-private-investigator-california', permanent: true },
      { source: '/find-a-person', destination: '/missing-persons', permanent: true },
      { source: '/guidelines', destination: '/faqs', permanent: true },
      { source: '/merital-infidelity', destination: '/infidelity', permanent: true },
      { source: '/833-747-3783', destination: '/contact', permanent: true },
      { source: '/dmPageNotFound', destination: '/', permanent: true },
      { source: '/elementor-hf/footer', destination: '/', permanent: true },
      { source: '/elementor-hf/header', destination: '/', permanent: true },
      { source: '/elementor-hf/site-footer', destination: '/', permanent: true },
      { source: '/wpautoterms', destination: '/privacy-policy', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

export default nextConfig;
