/**
 * Site Configuration - Balise IA
 * Intelligence artificielle & automatisation pour PME bretonnes
 */

export type BrandName = 'balise-ia';

interface BrandConfig {
  name: string;
  tagline: string;
  description: string;
  domain: string;
  email: string;
  calendly: string;
  logo: {
    text: string;
    icon: 'brain' | 'compass';
  };
  colors: {
    primary: string;
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
    secondaryCity: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  social: {
    linkedin?: string;
    twitter?: string;
  };
  features: {
    enableAnimations: boolean;
    showTechStack: boolean;
  };
}

export const siteConfig: SiteConfig = {
  currentBrand: 'balise-ia',

  brands: {
    'balise-ia': {
      name: 'Balise IA',
      tagline: 'Intelligence artificielle & automatisation pour PME bretonnes',
      description:
        'IA utile, pragmatique, orientée terrain et résultats mesurables. Automatisation, pilotage par la donnée et intelligence artificielle pour dirigeants de PME à Lorient, Rennes et en Bretagne.',
      domain: 'balise-ia.fr',
      email: 'contact@balise-ia.fr',
      calendly: 'balise-ia/diagnostic',
      logo: {
        text: 'Balise IA',
        icon: 'brain',
      },
      colors: {
        primary: 'blue',
        accent: 'slate',
      },
      seo: {
        title: 'Balise IA | Intelligence artificielle pour PME en Bretagne',
        description:
          'Intelligence artificielle et automatisation pour PME bretonnes. Diagnostic IA gratuit, résultats mesurables. Basés à Lorient, interventions à Rennes et en Bretagne.',
        keywords: [
          'intelligence artificielle Bretagne',
          'IA Bretagne',
          'IA PME Bretagne',
          'intelligence artificielle Lorient',
          'intelligence artificielle Rennes',
          'automatisation PME Bretagne',
          'IA industrielle Bretagne',
          'pilotage par la donnée PME',
          'IA PME',
          'automatisation entreprise Bretagne',
        ],
      },
    },
  },

  location: {
    region: 'Bretagne',
    city: 'Lorient',
    secondaryCity: 'Rennes',
    coordinates: {
      lat: 47.7486,
      lng: -3.367,
    },
  },

  social: {
    linkedin: 'https://linkedin.com/company/balise-ia',
  },

  features: {
    enableAnimations: true,
    showTechStack: true,
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

export function getCalendlyUrl(): string {
  return `https://calendly.com/${getBrand().calendly}`;
}

export function getLocationString(): string {
  return `Basés à ${siteConfig.location.city}, interventions à ${siteConfig.location.secondaryCity} et en ${siteConfig.location.region}`;
}
