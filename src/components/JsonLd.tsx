import { SITE_CONFIG } from '@/lib/constants';

export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressRegion: SITE_CONFIG.location.region,
      addressLocality: SITE_CONFIG.location.city,
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 47.75,
        longitude: -3.37,
      },
      geoRadius: '150000',
    },
    serviceType: [
      'Automatisation de données',
      'Tableaux de bord',
      'Pilotage PME',
    ],
    knowsAbout: [
      'Automatisation',
      'Data',
      'PME industrielles',
      'Bretagne',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
