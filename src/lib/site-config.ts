/**
 * Site Configuration for balise-ia
 */

interface SiteConfig {
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
  location: {
    region: string;
    city: string;
    department: string;
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
    showTechStack: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: 'balise-ia',
  tagline: 'Data & automatisation pour PME industrielles',
  description:
    'Collectif data/IA spécialisé PME industrielles bretonnes. On supprime vos ressaisies et votre reporting manuel.',
  domain: 'balise-ia.fr',
  email: 'contact@balise-ia.fr',
  calendly: 'balise-ia/diagnostic',
  logo: {
    text: 'balise-ia',
    icon: 'compass',
  },
  colors: {
    primary: 'blue',
    accent: 'slate',
  },
  seo: {
    title: 'balise-ia | Data & automatisation pour PME industrielles bretonnes',
    description:
      'On supprime vos ressaisies et votre reporting manuel. Collectif data/IA spécialisé PME industrielles en Bretagne. Diagnostic gratuit, ROI démontré.',
    keywords: [
      'automatisation PME',
      'data industrie Bretagne',
      'tableau de bord industriel',
      'ERP PME',
      'reporting automatisé',
      'IA industrie',
      'consultant data Bretagne',
      'transformation digitale PME',
      'Lorient',
    ],
  },
  location: {
    region: 'Bretagne',
    city: 'Lorient',
    department: 'Morbihan',
    coordinates: {
      lat: 47.7486,
      lng: -3.3702,
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
export function getBrandName(): string {
  return siteConfig.name;
}

export function getTagline(): string {
  return siteConfig.tagline;
}

export function getSeoConfig() {
  return siteConfig.seo;
}

export function getContactEmail(): string {
  return siteConfig.email;
}

export function getCalendlyUrl(): string {
  return `https://calendly.com/${siteConfig.calendly}`;
}
