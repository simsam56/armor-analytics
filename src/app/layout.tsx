import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Instrument_Serif } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Header, Footer } from '@/components/layout';
import { StickyCta } from '@/components/ui/sticky-cta';
import { CookieBanner } from '@/components/ui/cookie-banner';
import { GoogleAnalytics, GoogleTagManager, GoogleTagManagerNoscript } from '@/components/Analytics';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  keywords: [
    'automatisation PME Bretagne',
    'IA PME Bretagne',
    'intelligence artificielle Bretagne',
    'tableau de bord PME Bretagne',
    'Power BI Bretagne',
    'consultant data Lorient',
    'consultant IA Bretagne',
    'data engineering PME',
    'OCR automatisation',
    'reporting automatisé PME',
    'audit IA PME',
    'formation IA entreprise Bretagne',
    'dashboards temps réel PME',
    'éliminer ressaisies PME',
    'pilotage données PME',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/api/og`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/api/og`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-breton-navy focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyCta />
        <CookieBanner />
        <Analytics />
        <GoogleAnalytics />
        <GoogleTagManager />
        <GoogleTagManagerNoscript />
      </body>
    </html>
  );
}
