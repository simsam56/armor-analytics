import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const BRAND_NAVY = '#0C1F3F';
const ACCENT_CYAN = '#00B4D8';

/**
 * Icône phare "Faisceau Géométrique" — V9
 * Phare minimaliste avec faisceau triangle franc.
 * Évoque le guidage data pour les PME.
 */
function PhareIcon({
  size,
  variant = 'default',
}: {
  size: number;
  variant?: 'default' | 'white';
}) {
  const mainColor = variant === 'white' ? '#ffffff' : BRAND_NAVY;
  const accentColor = ACCENT_CYAN;
  const beamOpacity = variant === 'white' ? 0.22 : 0.16;

  return (
    <svg
      width={size}
      height={(size * 52) / 34}
      viewBox="0 0 34 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* Faisceau géométrique */}
      <path d="M21 7.5 L34 2 L34 13 L21 10.5 Z" fill={accentColor} opacity={beamOpacity} />
      {/* Tour trapézoïdale */}
      <path d="M19 11 L14 11 L11 47 L22.5 47 Z" fill={mainColor} />
      {/* Lanterne cyan */}
      <rect x="12.5" y="5.5" width="8.5" height="5.5" rx="1.2" fill={accentColor} />
      {/* Pointe */}
      <path d="M16.75 1.5 L12.5 5.5 L21 5.5 Z" fill={mainColor} />
      {/* Base */}
      <rect x="7" y="47" width="19.5" height="3.5" rx="1.2" fill={mainColor} />
    </svg>
  );
}

/**
 * Logo texte seul — "balise ia" (kerning serré, V9)
 */
export function Logo({ className, variant = 'default', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { balise: 'text-lg', ia: 'text-lg' },
    md: { balise: 'text-xl', ia: 'text-xl' },
    lg: { balise: 'text-2xl', ia: 'text-2xl' },
    xl: { balise: 'text-3xl', ia: 'text-3xl' },
  };

  const { balise, ia } = sizes[size];
  const mainColor = variant === 'white' ? 'text-white' : 'text-breton-navy';
  const accentColor = 'text-breton-accent';

  return (
    <div className={cn('flex items-baseline', className)}>
      <span className={cn('font-bold tracking-tight', balise, mainColor)}>balise</span>
      <span className={cn('ml-1 font-medium tracking-tight', ia, accentColor)}>ia</span>
    </div>
  );
}

/**
 * Logo avec icône phare Faisceau Géométrique V9
 */
export function LogoWithIcon({ className, variant = 'default', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 22, balise: 'text-xl', ia: 'text-xl' },
    md: { icon: 26, balise: 'text-xl', ia: 'text-xl' },
    lg: { icon: 32, balise: 'text-2xl', ia: 'text-2xl' },
    xl: { icon: 40, balise: 'text-3xl', ia: 'text-3xl' },
  };

  const { icon, balise, ia } = sizes[size];
  const mainColor = variant === 'white' ? 'text-white' : 'text-breton-navy';
  const accentColor = 'text-breton-accent';

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <PhareIcon size={icon} variant={variant} />
      <div className="flex items-baseline">
        <span className={cn('font-bold tracking-tight', balise, mainColor)}>balise</span>
        <span className={cn('ml-1 font-medium tracking-tight', ia, accentColor)}>ia</span>
      </div>
    </div>
  );
}

/**
 * Logo icône seule pour favicon / petit format — V9
 */
export function LogoIcon({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="56" height="56" rx="12" fill={BRAND_NAVY} />
      {/* Faisceau */}
      <path d="M30 10 L46 5 L46 16 L30 13 Z" fill={ACCENT_CYAN} opacity="0.3" />
      {/* Tour */}
      <path d="M29 13 L22 13 L19 43 L32.5 43 Z" fill="white" />
      {/* Lanterne */}
      <rect x="20.5" y="7" width="10" height="6" rx="1" fill={ACCENT_CYAN} />
      {/* Pointe */}
      <path d="M25.5 3 L20.5 7 L30.5 7 Z" fill="white" />
      {/* Base */}
      <rect x="15" y="43" width="22" height="4" rx="1.2" fill="white" />
    </svg>
  );
}

/**
 * Logo compact pour mobile — V9
 */
export function LogoCompact({ className, variant = 'default' }: Omit<LogoProps, 'size'>) {
  const mainColor = variant === 'white' ? 'text-white' : 'text-breton-navy';
  const accentColor = 'text-breton-accent';

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <PhareIcon size={18} variant={variant} />
      <div className="flex items-baseline">
        <span className={cn('font-bold text-base tracking-tight', mainColor)}>balise</span>
        <span className={cn('ml-0.5 font-medium text-base tracking-tight', accentColor)}>ia</span>
      </div>
    </div>
  );
}

// Aliases
export const LogoHorizontal = LogoWithIcon;
