import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Couleur brand V11 - Vert phare breton
const BRAND_GREEN = '#1B4D3E';
const BRAND_GREEN_LIGHT = '#2D6A4F';

/**
 * Logo BALISE Data V11
 * Inspiré du phare breton dans un cercle (image fournie)
 * Couleur: vert foncé breton #1B4D3E
 */
export function Logo({ className, variant = 'default', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { balise: 'text-lg', data: 'text-sm' },
    md: { balise: 'text-xl', data: 'text-base' },
    lg: { balise: 'text-2xl', data: 'text-lg' },
    xl: { balise: 'text-3xl', data: 'text-xl' },
  };

  const { balise, data } = sizes[size];
  const color = variant === 'white' ? 'text-white' : 'text-[#1B4D3E]';

  return (
    <div className={cn('flex items-baseline gap-1', className)}>
      <span className={cn('font-bold tracking-tight', balise, color)}>
        BALISE
      </span>
      <span className={cn('font-normal', data, color)}>
        Data
      </span>
    </div>
  );
}

/**
 * Logo avec icône phare V11 - Design inspiré de l'image fournie
 * Phare dans cercle avec rayons lumineux
 */
export function LogoWithIcon({ className, variant = 'default', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 32, balise: 'text-lg', data: 'text-sm' },
    md: { icon: 40, balise: 'text-xl', data: 'text-base' },
    lg: { icon: 48, balise: 'text-2xl', data: 'text-lg' },
    xl: { icon: 56, balise: 'text-3xl', data: 'text-xl' },
  };

  const { icon, balise, data } = sizes[size];
  const color = variant === 'white' ? 'text-white' : 'text-[#1B4D3E]';
  const iconColor = variant === 'white' ? '#FFFFFF' : BRAND_GREEN;

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {/* Icône phare V11 - cercle avec phare et rayons */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Cercle extérieur */}
        <circle cx="32" cy="32" r="30" stroke={iconColor} strokeWidth="3" fill="none" />

        {/* Phare - corps principal */}
        <path
          d="M28 20h8v4h-8v-4Z"
          fill={iconColor}
        />
        {/* Toit du phare */}
        <path
          d="M32 14l-6 6h12l-6-6Z"
          fill={iconColor}
        />
        {/* Corps trapézoïdal */}
        <path
          d="M26 24h12l-2 22h-8l-2-22Z"
          fill={iconColor}
        />
        {/* Fenêtres */}
        <rect x="29" y="28" width="6" height="4" rx="0.5" fill={variant === 'white' ? BRAND_GREEN : 'white'} />
        <rect x="29" y="36" width="6" height="4" rx="0.5" fill={variant === 'white' ? BRAND_GREEN : 'white'} />
        {/* Base */}
        <rect x="24" y="46" width="16" height="4" rx="1" fill={iconColor} />

        {/* Rayons lumineux gauche */}
        <path
          d="M8 22h12M6 32h10"
          stroke={iconColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Rayons lumineux droite */}
        <path
          d="M44 22h12M48 32h10"
          stroke={iconColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex items-baseline gap-1">
        <span className={cn('font-bold tracking-tight', balise, color)}>
          BALISE
        </span>
        <span className={cn('font-normal', data, color)}>
          Data
        </span>
      </div>
    </div>
  );
}

/**
 * Logo icône seule V11 pour favicon / petit format
 */
export function LogoIcon({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Fond vert */}
      <rect width="64" height="64" rx="12" fill={BRAND_GREEN} />

      {/* Cercle */}
      <circle cx="32" cy="32" r="24" stroke="white" strokeWidth="2" fill="none" />

      {/* Phare simplifié */}
      <path d="M32 12l-4 4h8l-4-4Z" fill="white" />
      <path d="M28 16h8v3h-8v-3Z" fill="white" />
      <path d="M26 19h12l-2 20h-8l-2-20Z" fill="white" />
      <rect x="29" y="23" width="6" height="3" rx="0.5" fill={BRAND_GREEN} />
      <rect x="29" y="30" width="6" height="3" rx="0.5" fill={BRAND_GREEN} />
      <rect x="24" y="39" width="16" height="3" rx="1" fill="white" />

      {/* Rayons */}
      <path d="M8 20h10M8 28h8M46 20h10M48 28h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Logo compact pour mobile V11
 */
export function LogoCompact({ className, variant = 'default' }: Omit<LogoProps, 'size'>) {
  const color = variant === 'white' ? 'text-white' : 'text-[#1B4D3E]';
  const iconColor = variant === 'white' ? '#FFFFFF' : BRAND_GREEN;

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg
        width={28}
        height={28}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="32" cy="32" r="30" stroke={iconColor} strokeWidth="3" fill="none" />
        <path d="M32 14l-6 6h12l-6-6Z" fill={iconColor} />
        <path d="M28 20h8v4h-8v-4Z" fill={iconColor} />
        <path d="M26 24h12l-2 22h-8l-2-22Z" fill={iconColor} />
        <rect x="24" y="46" width="16" height="4" rx="1" fill={iconColor} />
        <path d="M8 22h12M44 22h12" stroke={iconColor} strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="flex items-baseline gap-0.5">
        <span className={cn('font-bold text-base tracking-tight', color)}>
          BALISE
        </span>
        <span className={cn('font-normal text-sm', color)}>
          Data
        </span>
      </div>
    </div>
  );
}

// Aliases
export const LogoHorizontal = LogoWithIcon;
