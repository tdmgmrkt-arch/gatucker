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
  async redirects() {
    return [
      {
        source: '/testimonials',
        destination: '/reviews',
        permanent: true,
      },
      {
        source: '/hollywood-fixer',
        destination: '/high-profile-investigations',
        permanent: true,
      },
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
