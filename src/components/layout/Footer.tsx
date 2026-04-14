import Link from 'next/link';
import { Linkedin, Mail, MapPin, Shield, Flag, Phone } from 'lucide-react';
import { NAV_LINKS, OFFER_LINKS, SITE_CONFIG, getContactEmail } from '@/lib/constants';
import { LogoWithIcon } from '@/components/ui/logo';

// Contours simplifiés de la Bretagne avec villes marquées
function BretagneMap() {
  const cities = [
    { name: 'Lorient', x: 115, y: 145, main: true },
    { name: 'Vannes', x: 148, y: 155 },
    { name: 'Quimper', x: 68, y: 130 },
    { name: 'Brest', x: 38, y: 85 },
    { name: 'Rennes', x: 225, y: 115 },
    { name: 'Saint-Brieuc', x: 155, y: 78 },
  ];

  return (
    <div className="relative">
      <svg
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-xs mx-auto opacity-80"
      >
        {/* Contour Bretagne simplifié */}
        <path
          d="M30 95 C25 85 20 75 28 65 C35 55 50 50 65 48 C80 46 95 42 110 40 C125 38 140 35 160 38 C175 40 190 42 205 50 C220 58 235 68 245 80 C250 86 252 95 248 105 C244 115 238 120 230 125 C222 130 212 135 205 142 C198 148 192 155 182 158 C172 161 160 162 148 160 C136 158 125 155 115 155 C105 155 95 158 85 155 C75 152 65 145 55 138 C45 131 35 125 30 115 C28 108 28 100 30 95 Z"
          stroke="white"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          fill="white"
          fillOpacity="0.05"
        />

        {/* Points villes */}
        {cities.map((city) => (
          <g key={city.name}>
            {/* Halo */}
            <circle
              cx={city.x}
              cy={city.y}
              r={city.main ? 8 : 5}
              fill="#C17F59"
              fillOpacity="0.2"
              className="city-pulse"
            />
            {/* Point */}
            <circle
              cx={city.x}
              cy={city.y}
              r={city.main ? 4 : 2.5}
              fill={city.main ? '#C17F59' : 'white'}
              fillOpacity={city.main ? 1 : 0.7}
            />
            {/* Label */}
            <text
              x={city.x}
              y={city.y - (city.main ? 12 : 8)}
              textAnchor="middle"
              fill="white"
              fillOpacity={city.main ? 0.9 : 0.5}
              fontSize={city.main ? 10 : 8}
              fontFamily="var(--font-geist-sans), sans-serif"
              fontWeight={city.main ? 600 : 400}
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-breton-navy">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand + carte */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center">
              <LogoWithIcon size="sm" variant="white" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/60 leading-relaxed">
              Pilotage production et IA pour PME industrielles bretonnes. Du diagnostic terrain
              à la mise en production, sur site en Bretagne.
            </p>

            {/* Badges confiance */}
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/70">
                <Flag className="h-3 w-3" />
                Données hébergées en France
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/70">
                <MapPin className="h-3 w-3" />
                Basés à Lorient
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/70">
                <Shield className="h-3 w-3" />
                NDA systématique
              </span>
            </div>

          </div>

          {/* Liens */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Navigation */}
            <div>
              <p className="text-sm font-semibold text-white/90">Navigation</p>
              <ul className="mt-4 space-y-2.5">
                {OFFER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-breton-copper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {NAV_LINKS.filter((link) => 'href' in link).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href!}
                      className="text-sm text-white/50 transition-colors hover:text-breton-copper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertises */}
            <div>
              <p className="text-sm font-semibold text-white/90">Expertises</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link
                    href="/intelligence-artificielle-bretagne"
                    className="text-sm text-white/50 transition-colors hover:text-breton-copper"
                  >
                    Intelligence artificielle
                  </Link>
                </li>
                <li>
                  <Link
                    href="/power-bi-bretagne"
                    className="text-sm text-white/50 transition-colors hover:text-breton-copper"
                  >
                    Power BI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/automatisation-commandes-pme"
                    className="text-sm text-white/50 transition-colors hover:text-breton-copper"
                  >
                    Automatisation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/formation-ia-pme"
                    className="text-sm text-white/50 transition-colors hover:text-breton-copper"
                  >
                    Formation IA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consultant-data-lorient"
                    className="text-sm text-white/50 transition-colors hover:text-breton-copper"
                  >
                    Consultant data
                  </Link>
                </li>
              </ul>
            </div>

            {/* Interventions */}
            <div>
              <p className="text-sm font-semibold text-white/90">Interventions</p>
              <ul className="mt-4 space-y-2.5">
                {['lorient', 'vannes', 'quimper', 'rennes', 'brest', 'saint-brieuc', 'nantes'].map((city) => (
                  <li key={city}>
                    <Link
                      href={`/interventions/${city}`}
                      className="text-sm text-white/50 transition-colors hover:text-breton-copper"
                    >
                      {city === 'saint-brieuc'
                        ? 'Saint-Brieuc'
                        : city.charAt(0).toUpperCase() + city.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm font-semibold text-white/90">Contact</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${getContactEmail()}`}
                    className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-breton-copper"
                  >
                    <Mail className="h-4 w-4" />
                    {getContactEmail()}
                  </a>
                </li>
                {SITE_CONFIG.phone && (
                  <li>
                    <a
                      href={`tel:+33${SITE_CONFIG.phone.replace(/\s/g, '').slice(1)}`}
                      className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-breton-copper"
                    >
                      <Phone className="h-4 w-4" />
                      {SITE_CONFIG.phone}
                    </a>
                  </li>
                )}
                {SITE_CONFIG.social.linkedin && (
                  <li>
                    <a
                      href={SITE_CONFIG.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-breton-copper"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">
              © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link
                href="/mentions-legales"
                className="text-sm text-white/60 transition-colors hover:text-breton-copper"
              >
                Mentions légales
              </Link>
              <span className="text-sm text-white/50">
                {SITE_CONFIG.location.city}, {SITE_CONFIG.location.region}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
