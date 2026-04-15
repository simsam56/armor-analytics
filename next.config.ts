import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' www.googletagmanager.com www.google-analytics.com www.clarity.ms snap.licdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: images.unsplash.com px.ads.linkedin.com; font-src 'self' fonts.gstatic.com; connect-src 'self' www.google-analytics.com region1.google-analytics.com www.clarity.ms; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/projets',
        destination: '/cas-clients',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/diagnostic-ia',
        permanent: true,
      },
      {
        source: '/ia',
        destination: '/automatisation-agents-ia',
        permanent: true,
      },
      {
        source: '/data',
        destination: '/pilotage-augmente',
        permanent: true,
      },
      {
        source: '/formation',
        destination: '/formation-ia',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
