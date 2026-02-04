import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { getBrand, getSeoConfig, siteConfig } from '@/lib/site-config';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const brand = getBrand();
const seoConfig = getSeoConfig();

export const metadata: Metadata = {
  metadataBase: new URL(`https://${brand.domain}`),
  title: {
    default: seoConfig.title,
    template: `%s | ${brand.name}`,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: brand.name }],
  creator: brand.name,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: `https://${brand.domain}`,
    siteName: brand.name,
    title: seoConfig.title,
    description: seoConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoConfig.title,
    description: seoConfig.description,
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
  alternates: {
    canonical: `https://${brand.domain}`,
  },
  other: {
    'geo.region': 'FR-BRE',
    'geo.placename': siteConfig.location.city,
    'geo.position': `${siteConfig.location.coordinates.lat};${siteConfig.location.coordinates.lng}`,
    'ICBM': `${siteConfig.location.coordinates.lat}, ${siteConfig.location.coordinates.lng}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
