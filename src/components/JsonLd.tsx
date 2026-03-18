import { SITE_CONFIG } from '@/lib/constants';

export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.location.city,
      addressRegion: SITE_CONFIG.location.region,
      postalCode: '56100',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.7486,
      longitude: -3.3702,
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Bretagne',
      },
      {
        '@type': 'City',
        name: 'Lorient',
      },
      {
        '@type': 'City',
        name: 'Vannes',
      },
      {
        '@type': 'City',
        name: 'Quimper',
      },
      {
        '@type': 'City',
        name: 'Rennes',
      },
      {
        '@type': 'City',
        name: 'Brest',
      },
    ],
    sameAs: [SITE_CONFIG.social.linkedin],
    serviceType: [
      'Automatisation des données',
      'Tableaux de bord industriels',
      'Data Engineering',
      'Intelligence Artificielle',
    ],
    priceRange: '2000€ - 40000€ HT',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
