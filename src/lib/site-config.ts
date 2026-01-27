/**
 * Site Configuration for Brand Switching
 * Toggle between "Balise Data" and "Donnée Ouest"
 */

export type BrandName = 'balise-data' | 'donnee-ouest';

interface BrandConfig {
  name: string;
  tagline: string;
  description: string;
  domain: string;
  email: string;
  calendly: string;
  logo: {
    text: string;
    icon: 'compass' | 'anchor';
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
    showBrandSwitcher: boolean;
    enableAnimations: boolean;
    showTechStack: boolean;
  };
}

export const siteConfig: SiteConfig = {
  currentBrand: 'balise-data',

  brands: {
    'balise-data': {
      name: 'Balise Data',
      tagline: 'Data & automatisation pour PME industrielles',
      description: 'Collectif data/IA spécialisé PME industrielles bretonnes. On supprime vos ressaisies et votre reporting manuel.',
      domain: 'balisedata.fr',
      email: 'contact@balisedata.fr',
      calendly: 'balisedata/diagnostic',
      logo: {
        text: 'Balise Data',
        icon: 'compass',
      },
      colors: {
        primary: 'blue',
        accent: 'slate',
      },
      seo: {
        title: 'Balise Data | Data & automatisation pour PME industrielles bretonnes',
        description: 'On supprime vos ressaisies et votre reporting manuel. Collectif data/IA spécialisé PME industrielles en Bretagne. Diagnostic gratuit, ROI démontré.',
        keywords: [
          'automatisation PME',
          'data industrie Bretagne',
          'tableau de bord industriel',
          'ERP PME',
          'reporting automatisé',
          'IA industrie',
          'consultant data Bretagne',
          'transformation digitale PME',
        ],
      },
    },
    'donnee-ouest': {
      name: 'Donnée Ouest',
      tagline: 'Data & automatisation pour PME industrielles',
      description: 'Collectif data/IA spécialisé PME industrielles du Grand Ouest. On supprime vos ressaisies et votre reporting manuel.',
      domain: 'donneeouest.fr',
      email: 'contact@donneeouest.fr',
      calendly: 'donneeouest/diagnostic',
      logo: {
        text: 'Donnée Ouest',
        icon: 'anchor',
      },
      colors: {
        primary: 'blue',
        accent: 'slate',
      },
      seo: {
        title: 'Donnée Ouest | Data & automatisation pour PME industrielles',
        description: 'On supprime vos ressaisies et votre reporting manuel. Collectif data/IA spécialisé PME industrielles. Diagnostic gratuit, ROI démontré.',
        keywords: [
          'automatisation PME',
          'data industrie',
          'tableau de bord industriel',
          'ERP PME',
          'reporting automatisé',
          'IA industrie',
          'consultant data',
          'transformation digitale PME',
        ],
      },
    },
  },

  location: {
    region: 'Bretagne',
    city: 'Lorient',
    coordinates: {
      lat: 47.7486,
      lng: -3.3670,
    },
  },

  social: {
    linkedin: 'https://linkedin.com/company/balise-data',
  },

  features: {
    showBrandSwitcher: false,
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
