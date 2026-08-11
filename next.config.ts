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
    ];
  },
};

export default nextConfig;
