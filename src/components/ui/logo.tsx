import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const BRAND_NAVY = '#0C1F3F';
// ACCENT_COPPER = '#9A5F3A' — used via Tailwind class `text-breton-copper` in text components
const ACCENT_COPPER_LIGHT = '#C17F59';

/**
 * Icône phare V18-E — "Faisceau Horizontal + Bande Copper + Cercle Centré"
 * Phare rayé centré dans un cercle, faisceau horizontal breakout,
 * bande copper bold dans le corps. Typo Jakarta, tiret copper séparé.
 */
function PhareIcon({
  size,
  variant = 'default',
}: {
  size: number;
  variant?: 'default' | 'white';
}) {
  const mainColor = variant === 'white' ? '#ffffff' : BRAND_NAVY;
  const accentColor = ACCENT_COPPER_LIGHT;
  const beamOpacity = variant === 'white' ? 0.13 : 0.08;
  const beamOpacity2 = variant === 'white' ? 0.09 : 0.06;
  const cyanBandOpacity = variant === 'white' ? 0.35 : 0.3;
  const whiteStripeColor = variant === 'white' ? BRAND_NAVY : mainColor;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* Cercle centré sur le milieu du phare */}
      <circle cx="26" cy="28" r="26" stroke={mainColor} strokeWidth="1.3" fill="none" />
      {/* Faisceau horizontal breakout */}
      <path
        d="M32 14 Q42 12 56 11 Q56 14 50 16 Q40 16 32 18 Z"
        fill={accentColor}
        opacity={beamOpacity}
      />
      <path
        d="M32 15 Q39 14 48 13 Q48 15 44 16 Q38 16 32 17.5 Z"
        fill={accentColor}
        opacity={beamOpacity2}
      />
      {/* Boule sommitale */}
      <circle cx="26" cy="5.5" r="1.7" fill={mainColor} />
      {/* Dôme arrondi */}
      <path d="M21.8 11 Q21.8 7, 26 7 Q30.2 7, 30.2 11 Z" fill={mainColor} />
      {/* Lanterne vitrée */}
      <rect x="21.2" y="11" width="9.6" height="6.8" rx="3.8" fill={accentColor} />
      <rect x="23.2" y="12.2" width="1.5" height="4.8" rx=".75" fill="white" opacity=".3" />
      <rect x="25.8" y="12.2" width="1.5" height="4.8" rx=".75" fill="white" opacity=".2" />
      {/* Galerie / corniche */}
      <rect x="19.8" y="17.8" width="12.4" height="1.7" rx=".85" fill={mainColor} />
      {/* Bande navy */}
      <path d="M21.8 19.5 L21.2 25.5 L30.8 25.5 L30.2 19.5 Z" fill={mainColor} />
      {/* Bande CYAN bold */}
      <path
        d="M21.2 25.5 L20.4 32 L31.6 32 L30.8 25.5 Z"
        fill={accentColor}
        opacity={cyanBandOpacity}
        stroke={accentColor}
        strokeWidth=".5"
      />
      {/* Bande navy */}
      <path d="M20.4 32 L19.6 38.5 L32.4 38.5 L31.6 32 Z" fill={mainColor} />
      {/* Bande blanche (outline) */}
      <path
        d="M19.6 38.5 L19.4 40.5 L32.6 40.5 L32.4 38.5 Z"
        fill="none"
        stroke={whiteStripeColor}
        strokeWidth=".5"
      />
      {/* Base évasée */}
      <path d="M18 40.5 L34 40.5 L35.5 43 L16.5 43 Z" fill={mainColor} />
      <rect x="14.5" y="43" width="23" height="3.2" rx="1.2" fill={mainColor} />
    </svg>
  );
}

/**
 * Logo texte seul — "balise-ia" (tiret copper séparé, V18)
 */
export function Logo({ className, variant = 'default', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const textSize = sizes[size];
  const mainColor = variant === 'white' ? 'text-white' : 'text-breton-navy';
  const accentColor = 'text-breton-copper';

  return (
    <div className={cn('flex items-baseline', className)}>
      <span className={cn('font-bold tracking-tight', textSize, mainColor)}>balise</span>
      <span className={cn('font-bold tracking-tight', textSize, accentColor)}>-</span>
      <span className={cn('font-semibold tracking-tight', textSize, accentColor)}>ia</span>
    </div>
  );
}

/**
 * Logo avec icône phare V18-E — Cercle centré + faisceau horizontal breakout
 */
export function LogoWithIcon({ className, variant = 'default', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 28, textSize: 'text-xl' },
    md: { icon: 32, textSize: 'text-xl' },
    lg: { icon: 38, textSize: 'text-2xl' },
    xl: { icon: 46, textSize: 'text-3xl' },
  };

  const { icon, textSize } = sizes[size];
  const mainColor = variant === 'white' ? 'text-white' : 'text-breton-navy';
  const accentColor = 'text-breton-copper';

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <PhareIcon size={icon} variant={variant} />
      <div className="flex items-baseline">
        <span className={cn('font-bold tracking-tight', textSize, mainColor)}>balise</span>
        <span className={cn('font-bold tracking-tight', textSize, accentColor)}>-</span>
        <span className={cn('font-semibold tracking-tight', textSize, accentColor)}>ia</span>
      </div>
    </div>
  );
}

/**
 * Logo icône seule pour favicon / petit format — V18
 */
export function LogoIcon({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="44" height="44" rx="11" fill={BRAND_NAVY} />
      {/* Cercle centré */}
      <circle cx="22" cy="22" r="18" stroke="white" strokeWidth="1" fill="none" />
      {/* Faisceau horizontal breakout */}
      <path d="M28 13 Q33 12 38 11.5 Q38 13 35 14.5 L28 15 Z" fill={ACCENT_COPPER_LIGHT} opacity=".18" />
      {/* Boule */}
      <circle cx="22" cy="6.5" r="1" fill="white" />
      {/* Dôme */}
      <path d="M19.5 10 Q19.5 8, 22 8 Q24.5 8, 24.5 10 Z" fill="white" />
      {/* Lanterne */}
      <rect x="19" y="10" width="6" height="4.8" rx="2.5" fill={ACCENT_COPPER_LIGHT} />
      {/* Galerie */}
      <rect x="18" y="14.8" width="8" height="1.1" rx=".55" fill="white" />
      {/* Bande navy/blanche */}
      <path d="M19 15.9 L18.5 21 L25.5 21 L25 15.9 Z" fill="white" />
      {/* Bande cyan */}
      <path d="M18.5 21 L17.8 27 L26.2 27 L25.5 21 Z" fill={ACCENT_COPPER_LIGHT} opacity=".3" />
      {/* Bande blanche */}
      <path d="M17.8 27 L17.1 32 L26.9 32 L26.2 27 Z" fill="white" />
      {/* Base */}
      <path d="M15.5 33.5 L28.5 33.5 L29.5 35 L14.5 35 Z" fill="white" />
      <rect x="13" y="35" width="18" height="2.2" rx=".7" fill="white" />
    </svg>
  );
}

/**
 * Logo compact pour mobile — V18
 */
export function LogoCompact({ className, variant = 'default' }: Omit<LogoProps, 'size'>) {
  const mainColor = variant === 'white' ? 'text-white' : 'text-breton-navy';
  const accentColor = 'text-breton-copper';

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <PhareIcon size={22} variant={variant} />
      <div className="flex items-baseline">
        <span className={cn('font-bold text-base tracking-tight', mainColor)}>balise</span>
        <span className={cn('font-bold text-base tracking-tight', accentColor)}>-</span>
        <span className={cn('font-semibold text-base tracking-tight', accentColor)}>ia</span>
      </div>
    </div>
  );
}

// Aliases
export const LogoHorizontal = LogoWithIcon;
