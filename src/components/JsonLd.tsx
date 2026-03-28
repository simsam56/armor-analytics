import { SITE_CONFIG } from '@/lib/constants';

export function JsonLd() {
  const address = {
    '@type': 'PostalAddress',
    addressLocality: SITE_CONFIG.location.city,
    addressRegion: SITE_CONFIG.location.region,
    postalCode: '56100',
    addressCountry: 'FR',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        email: SITE_CONFIG.email,
        telephone: '+33663857739',
        address,
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
          'Audit data',
          'Data Engineering',
          'Tableaux de bord',
          'Intelligence Artificielle',
          'Formation data',
          'Accompagnement PME',
        ],
        priceRange: '800\u20ac - 30000\u20ac HT',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
      {
        '@type': 'Organization',
        name: 'balise-ia',
        url: 'https://www.balise-ia.fr',
        email: 'contact@balise-ia.fr',
        telephone: '06 63 85 77 39',
        logo: 'https://www.balise-ia.fr/api/og',
        founder: {
          '@type': 'Person',
          name: 'Simon Hingant',
          jobTitle: 'Fondateur',
        },
        address,
        sameAs: ['https://www.linkedin.com/company/balise-ia'],
        knowsAbout: [
          'intelligence artificielle',
          'data',
          'automatisation',
          'Power BI',
          'PME industrielle',
        ],
      },
      {
        '@type': 'VideoObject',
        name: 'Vue a\u00e9rienne du littoral breton \u2014 balise-ia',
        description:
          'Vid\u00e9o drone du littoral breton illustrant l\u2019ancrage local de balise-ia, collectif data et IA pour les PME bretonnes.',
        thumbnailUrl: 'https://www.balise-ia.fr/videos/poster-sunset.jpg',
        uploadDate: '2026-03-27',
        contentUrl: 'https://www.balise-ia.fr/videos/drone-sunset-voilier.mp4',
        duration: 'PT12S',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
