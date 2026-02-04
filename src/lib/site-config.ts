/**
 * Site Configuration - Balise Data V6
 * Automatisation & pilotage des données pour PME bretonnes
 */

export type BrandName = 'balise-data';

interface BrandConfig {
  name: string;
  tagline: string;
  description: string;
  domain: string;
  email: string;
  logo: {
    text: string;
    icon: 'compass' | 'anchor';
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

interface SiteConfig {
  currentBrand: BrandName;
  brands: Record<BrandName, BrandConfig>;
  location: {
    region: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  social: {
    linkedin?: string;
  };
  features: {
    enableAnimations: boolean;
  };
}

export const siteConfig: SiteConfig = {
  currentBrand: 'balise-data',

  brands: {
    'balise-data': {
      name: 'Balise Data',
      tagline: 'Automatisation & pilotage des données pour PME bretonnes',
      description:
        'Balise Data aide les PME bretonnes à supprimer les tâches manuelles, fiabiliser leurs données et piloter leur activité avec des solutions concrètes et progressives.',
      domain: 'balisedata.fr',
      email: 'contact@balisedata.fr',
      logo: {
        text: 'Balise Data',
        icon: 'compass',
      },
      colors: {
        primary: 'blue',
        secondary: 'slate',
        accent: 'blue',
      },
      seo: {
        title: 'Balise Data | Automatisation & pilotage des données pour PME bretonnes',
        description:
          'Balise Data aide les PME bretonnes à supprimer les tâches manuelles, fiabiliser leurs données et piloter leur activité. Basés à Lorient, interventions en Bretagne.',
        keywords: [
          'automatisation PME Bretagne',
          'automatisation processus PME',
          'reporting direction PME',
          'pilotage des données PME',
          'consultant data Lorient',
          'gestion données PME',
          'tableau de bord PME',
          'automatisation Excel',
          'connexion ERP PME',
          'data PME Bretagne',
        ],
      },
    },
  },

  location: {
    region: 'Bretagne',
    city: 'Lorient',
    coordinates: {
      lat: 47.7486,
      lng: -3.367,
    },
  },

  social: {
    linkedin: 'https://linkedin.com/company/balise-data',
  },

  features: {
    enableAnimations: true,
  },
};

// Helper functions
export function getBrand(): BrandConfig {
  return siteConfig.brands[siteConfig.currentBrand];
}

export function getBrandName(): string {
  return getBrand().name;
}

export function getTagline(): string {
  return getBrand().tagline;
}

export function getSeoConfig() {
  return getBrand().seo;
}

export function getContactEmail(): string {
  return getBrand().email;
}

export function getLocationString(): string {
  return `Basés à ${siteConfig.location.city}, interventions en ${siteConfig.location.region}`;
}
