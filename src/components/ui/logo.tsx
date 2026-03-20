import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const BRAND_NAVY = '#0C1F3F';
const ACCENT_CYAN = '#00B4D8';

/**
 * Icône phare "Clean Silhouette" — V3
 * Silhouette épurée avec faisceau diagonal et fenêtre lanterne verte
 */
function PhareIcon({ size, variant = 'default' }: { size: number; variant?: 'default' | 'white' }) {
  const mainColor = variant === 'white' ? '#ffffff' : BRAND_NAVY;
  const accentColor = ACCENT_CYAN;
  const windowColor = variant === 'white' ? BRAND_NAVY : 'white';
  const windowOpacity = variant === 'white' ? 0.4 : 0.5;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* Phare — silhouette épurée */}
      <path
        d="M20 2 L16 10 L14 10 L14 18 L12 18 L15.5 56 L24.5 56 L28 18 L26 18 L26 10 L24 10 Z"
        fill={mainColor}
      />
      {/* Fenêtre lanterne */}
      <rect x="16" y="11" width="8" height="5" rx="1" fill={accentColor} opacity="0.6" />
      {/* Fenêtres corps */}
      <rect x="17" y="26" width="6" height="4" rx="1" fill={windowColor} opacity={windowOpacity} />
      <rect
        x="16.5"
        y="36"
        width="7"
        height="4"
        rx="1"
        fill={windowColor}
        opacity={windowOpacity * 0.8}
      />
      {/* Base élargie */}
      <rect x="10" y="56" width="20" height="5" rx="1.5" fill={mainColor} />
      {/* Faisceau lumineux */}
      <path d="M26 12 L52 2 L52 6 L26 14 Z" fill={accentColor} opacity="0.25" />
      <path d="M26 14 L48 14 L52 18 L26 16 Z" fill={accentColor} opacity="0.15" />
    </svg>
  );
}

/**
 * Logo texte seul — "balise ia"
 */
export function Logo({ className, variant = 'default', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { balise: 'text-lg', ia: 'text-sm' },
    md: { balise: 'text-xl', ia: 'text-base' },
    lg: { balise: 'text-2xl', ia: 'text-lg' },
    xl: { balise: 'text-3xl', ia: 'text-xl' },
  };

  const { balise, ia } = sizes[size];
  const mainColor = variant === 'white' ? 'text-white' : 'text-breton-navy';
  const accentColor = 'text-breton-accent';

  return (
    <div className={cn('flex items-baseline gap-1.5', className)}>
      <span className={cn('font-bold tracking-tight', balise, mainColor)}>balise</span>
      <span className={cn('font-light tracking-[0.2em]', ia, accentColor)}>ia</span>
    </div>
  );
}

/**
 * Logo avec icône phare Clean Silhouette V3
 */
export function LogoWithIcon({ className, variant = 'default', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 32, balise: 'text-xl', ia: 'text-sm' },
    md: { icon: 34, balise: 'text-xl', ia: 'text-base' },
    lg: { icon: 42, balise: 'text-2xl', ia: 'text-lg' },
    xl: { icon: 50, balise: 'text-3xl', ia: 'text-xl' },
  };

  const { icon, balise, ia } = sizes[size];
  const mainColor = variant === 'white' ? 'text-white' : 'text-breton-navy';
  const accentColor = 'text-breton-accent';

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <PhareIcon size={icon} variant={variant} />
      <div className="flex items-baseline gap-1.5">
        <span className={cn('font-bold tracking-tight', balise, mainColor)}>balise</span>
        <span className={cn('font-light tracking-[0.2em]', ia, accentColor)}>ia</span>
      </div>
    </div>
  );
}

/**
 * Logo icône seule pour favicon / petit format
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
      <path
        d="M28 8 L25 14 L23 14 L23 20 L21.5 20 L23.5 44 L32.5 44 L35 20 L33 20 L33 14 L31 14 Z"
        fill="white"
      />
      <rect x="25" y="15" width="6" height="4" rx="1" fill={ACCENT_CYAN} opacity="0.7" />
      <rect x="10" y="44" width="36" height="4" rx="1.5" fill="white" />
      <path d="M33 16 L46 10 L46 14 L33 18 Z" fill={ACCENT_CYAN} opacity="0.35" />
    </svg>
  );
}

/**
 * Logo compact pour mobile
 */
export function LogoCompact({ className, variant = 'default' }: Omit<LogoProps, 'size'>) {
  const mainColor = variant === 'white' ? 'text-white' : 'text-breton-navy';
  const accentColor = 'text-breton-accent';

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <PhareIcon size={24} variant={variant} />
      <div className="flex items-baseline gap-1">
        <span className={cn('font-bold text-base tracking-tight', mainColor)}>balise</span>
        <span className={cn('font-light text-sm tracking-[0.2em]', accentColor)}>ia</span>
      </div>
    </div>
  );
}

// Aliases
export const LogoHorizontal = LogoWithIcon;
