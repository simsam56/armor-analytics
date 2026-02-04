/**
 * Constants V7 - Balise Data
 * Automatisation & pilotage des données pour PME bretonnes
 */

export const SITE_CONFIG = {
  name: 'Balise Data',
  tagline: 'Automatisation & pilotage des données pour PME bretonnes',
  description:
    'Balise Data aide les PME bretonnes à supprimer les tâches manuelles, fiabiliser leurs données et piloter leur activité.',
  url: 'https://balisedata.fr',
  email: 'contact@balisedata.fr',
  location: {
    region: 'Bretagne',
    city: 'Lorient',
    department: 'Morbihan',
  },
};

// Navigation V7 - Simplified
export const NAV_LINKS = [
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

// Zones d'intervention Bretagne
export const ZONES_BRETAGNE = [
  { name: 'Lorient', department: 'Morbihan', isBase: true },
  { name: 'Vannes', department: 'Morbihan', isBase: false },
  { name: 'Quimper', department: 'Finistère', isBase: false },
  { name: 'Brest', department: 'Finistère', isBase: false },
  { name: 'Rennes', department: 'Ille-et-Vilaine', isBase: false },
  { name: 'Saint-Brieuc', department: "Côtes-d'Armor", isBase: false },
];
