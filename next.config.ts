import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // V7 - Allow external images from Unsplash
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // V7 redirections - redirect old V6 pages to homepage
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projets',
        destination: '/',
        permanent: true,
      },
      {
        source: '/offres',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cas-usage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/methode',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bretagne',
        destination: '/',
        permanent: true,
      },
      {
        source: '/newsletter',
        destination: '/',
        permanent: true,
      },
      {
        source: '/automatisation-pme-bretagne',
        destination: '/',
        permanent: true,
      },
      {
        source: '/intelligence-artificielle-pme-bretagne',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
