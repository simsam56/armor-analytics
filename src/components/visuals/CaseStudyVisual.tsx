/**
 * SVG Visual components for Case Studies
 * Each visual represents an industrial sector
 */

interface VisualProps {
  className?: string;
}

// Agroalimentaire - Production line / food processing
export function AgroVisual({ className = '' }: VisualProps) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={`w-full h-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="400" height="200" fill="#f8fafc" rx="8" />

      {/* Production conveyor */}
      <rect x="20" y="140" width="360" height="12" fill="#e2e8f0" rx="2" />
      <rect x="20" y="148" width="360" height="4" fill="#cbd5e1" />

      {/* Conveyor wheels */}
      <circle cx="50" cy="152" r="8" fill="#94a3b8" />
      <circle cx="200" cy="152" r="8" fill="#94a3b8" />
      <circle cx="350" cy="152" r="8" fill="#94a3b8" />

      {/* Products on conveyor */}
      <rect x="60" y="120" width="30" height="20" fill="#22c55e" rx="3" />
      <rect x="120" y="115" width="25" height="25" fill="#16a34a" rx="3" />
      <rect x="180" y="118" width="28" height="22" fill="#22c55e" rx="3" />
      <rect x="240" y="120" width="30" height="20" fill="#16a34a" rx="3" />
      <rect x="300" y="115" width="25" height="25" fill="#22c55e" rx="3" />

      {/* Processing machine */}
      <rect x="140" y="50" width="120" height="70" fill="#3b82f6" rx="4" />
      <rect x="150" y="60" width="40" height="30" fill="#1e40af" rx="2" />
      <rect x="200" y="60" width="50" height="20" fill="#60a5fa" rx="2" />

      {/* Screen/display on machine */}
      <rect x="205" y="65" width="40" height="10" fill="#dbeafe" rx="1" />
      <line x1="210" y1="70" x2="240" y2="70" stroke="#3b82f6" strokeWidth="2" />

      {/* Data flow arrows */}
      <path
        d="M200 45 L200 30 L280 30 L280 60"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="4"
      />
      <polygon points="280,65 275,55 285,55" fill="#3b82f6" />

      {/* Dashboard panel */}
      <rect x="300" y="30" width="80" height="50" fill="#1e293b" rx="4" />
      <rect x="310" y="40" width="25" height="8" fill="#22c55e" rx="1" />
      <rect x="340" y="40" width="30" height="8" fill="#3b82f6" rx="1" />
      <rect x="310" y="55" width="60" height="15" fill="#334155" rx="2" />
      <text x="320" y="66" fill="#94a3b8" fontSize="8" fontFamily="monospace">
        -42% waste
      </text>

      {/* Sensor indicators */}
      <circle cx="160" cy="100" r="5" fill="#22c55e" />
      <circle cx="230" cy="100" r="5" fill="#22c55e" />
    </svg>
  );
}

// Métallurgie - Metal workshop / CNC
export function MetallurgieVisual({ className = '' }: VisualProps) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={`w-full h-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="400" height="200" fill="#f8fafc" rx="8" />

      {/* CNC Machine body */}
      <rect x="50" y="60" width="150" height="100" fill="#475569" rx="4" />
      <rect x="60" y="70" width="80" height="60" fill="#1e293b" rx="2" />

      {/* Machine window/viewport */}
      <rect x="65" y="75" width="70" height="50" fill="#0f172a" rx="2" />

      {/* Workpiece inside */}
      <rect x="85" y="95" width="30" height="20" fill="#94a3b8" rx="1" />

      {/* Tool head */}
      <rect x="95" y="80" width="10" height="15" fill="#f59e0b" />
      <polygon points="100,95 95,100 105,100" fill="#f59e0b" />

      {/* Sparks */}
      <circle cx="100" cy="95" r="2" fill="#fbbf24" opacity="0.8" />
      <circle cx="105" cy="92" r="1.5" fill="#fcd34d" opacity="0.6" />
      <circle cx="95" cy="93" r="1" fill="#fbbf24" opacity="0.7" />

      {/* Control panel */}
      <rect x="150" y="80" width="40" height="50" fill="#334155" rx="2" />
      <rect x="155" y="85" width="30" height="15" fill="#22c55e" rx="1" />
      <circle cx="160" cy="115" r="4" fill="#ef4444" />
      <circle cx="175" cy="115" r="4" fill="#22c55e" />

      {/* Data connection lines */}
      <path
        d="M200 100 L240 100 L240 50 L280 50"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="4"
      />

      {/* Dashboard */}
      <rect x="280" y="30" width="100" height="80" fill="#1e293b" rx="4" />

      {/* Dashboard content */}
      <rect x="290" y="40" width="40" height="25" fill="#334155" rx="2" />
      <rect x="335" y="40" width="35" height="25" fill="#334155" rx="2" />

      {/* Chart bars */}
      <rect x="295" y="55" width="6" height="5" fill="#ef4444" />
      <rect x="304" y="50" width="6" height="10" fill="#f59e0b" />
      <rect x="313" y="45" width="6" height="15" fill="#22c55e" />

      {/* Metrics */}
      <text x="340" y="55" fill="#22c55e" fontSize="8" fontFamily="monospace">
        98%
      </text>
      <text x="340" y="62" fill="#64748b" fontSize="6">
        uptime
      </text>

      <rect x="290" y="75" width="80" height="25" fill="#334155" rx="2" />
      <text x="300" y="90" fill="#94a3b8" fontSize="8" fontFamily="monospace">
        +2.5h/jour
      </text>

      {/* Metal parts below */}
      <rect x="60" y="170" width="40" height="15" fill="#94a3b8" rx="2" />
      <rect x="110" y="170" width="35" height="15" fill="#94a3b8" rx="2" />
      <rect x="155" y="170" width="45" height="15" fill="#94a3b8" rx="2" />
    </svg>
  );
}

// Plasturgie - Injection molding
export function PlasturgieVisual({ className = '' }: VisualProps) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={`w-full h-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="400" height="200" fill="#f8fafc" rx="8" />

      {/* Injection machine base */}
      <rect x="30" y="80" width="180" height="80" fill="#64748b" rx="4" />

      {/* Hopper */}
      <polygon points="60,80 90,80 85,50 65,50" fill="#475569" />
      <rect x="68" y="55" width="14" height="10" fill="#3b82f6" opacity="0.3" />

      {/* Barrel */}
      <rect x="90" y="100" width="100" height="30" fill="#475569" rx="2" />

      {/* Heating zones */}
      <rect x="95" y="105" width="20" height="20" fill="#ef4444" opacity="0.3" rx="1" />
      <rect x="120" y="105" width="20" height="20" fill="#f59e0b" opacity="0.3" rx="1" />
      <rect x="145" y="105" width="20" height="20" fill="#22c55e" opacity="0.3" rx="1" />

      {/* Mold */}
      <rect x="190" y="90" width="40" height="50" fill="#1e293b" rx="2" />
      <rect x="195" y="100" width="30" height="30" fill="#334155" rx="2" />

      {/* Produced parts */}
      <ellipse cx="270" cy="130" rx="15" ry="10" fill="#3b82f6" />
      <ellipse cx="300" cy="130" rx="15" ry="10" fill="#3b82f6" />
      <ellipse cx="330" cy="130" rx="15" ry="10" fill="#3b82f6" />

      {/* Conveyor */}
      <rect x="250" y="145" width="130" height="8" fill="#e2e8f0" rx="2" />

      {/* Control screen */}
      <rect x="40" y="90" width="40" height="30" fill="#0f172a" rx="2" />
      <rect x="45" y="95" width="30" height="8" fill="#22c55e" opacity="0.8" rx="1" />
      <rect x="45" y="107" width="20" height="6" fill="#3b82f6" opacity="0.8" rx="1" />

      {/* Dashboard panel */}
      <rect x="280" y="30" width="100" height="70" fill="#1e293b" rx="4" />

      {/* Cycle time display */}
      <rect x="290" y="40" width="80" height="20" fill="#334155" rx="2" />
      <text x="300" y="54" fill="#22c55e" fontSize="10" fontFamily="monospace">
        Cycle: 12s
      </text>

      {/* Quality metrics */}
      <rect x="290" y="65" width="35" height="25" fill="#334155" rx="2" />
      <text x="295" y="80" fill="#22c55e" fontSize="8" fontFamily="monospace">
        99.2%
      </text>
      <text x="295" y="88" fill="#64748b" fontSize="6">
        qualité
      </text>

      <rect x="330" y="65" width="40" height="25" fill="#334155" rx="2" />
      <text x="335" y="80" fill="#3b82f6" fontSize="8" fontFamily="monospace">
        -15%
      </text>
      <text x="335" y="88" fill="#64748b" fontSize="6">
        rebuts
      </text>

      {/* Data flow */}
      <path
        d="M80 90 L80 50 L270 50 L270 65"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="4"
      />
      <polygon points="270,70 265,60 275,60" fill="#3b82f6" />
    </svg>
  );
}

// Generic industrial visual for fallback
export function IndustrialVisual({ className = '' }: VisualProps) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={`w-full h-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="400" height="200" fill="#f8fafc" rx="8" />

      {/* Factory building */}
      <rect x="30" y="80" width="120" height="90" fill="#475569" rx="4" />
      <rect x="40" y="90" width="30" height="25" fill="#0f172a" rx="2" />
      <rect x="80" y="90" width="30" height="25" fill="#0f172a" rx="2" />
      <rect x="40" y="125" width="30" height="25" fill="#0f172a" rx="2" />
      <rect x="80" y="125" width="30" height="25" fill="#0f172a" rx="2" />

      {/* Chimney */}
      <rect x="120" y="50" width="20" height="40" fill="#64748b" />

      {/* Data cloud */}
      <ellipse cx="280" cy="60" rx="60" ry="30" fill="#dbeafe" />
      <ellipse cx="250" cy="55" rx="25" ry="20" fill="#dbeafe" />
      <ellipse cx="310" cy="55" rx="25" ry="20" fill="#dbeafe" />

      {/* Cloud content - data visualization */}
      <rect x="255" y="50" width="50" height="25" fill="#3b82f6" rx="2" />
      <rect x="260" y="55" width="8" height="15" fill="#1e40af" />
      <rect x="272" y="60" width="8" height="10" fill="#1e40af" />
      <rect x="284" y="52" width="8" height="18" fill="#1e40af" />

      {/* Connection lines */}
      <path
        d="M150 100 L200 100 L200 60 L220 60"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="4"
      />

      {/* Dashboard panel */}
      <rect x="200" y="110" width="170" height="60" fill="#1e293b" rx="4" />

      {/* KPI cards */}
      <rect x="210" y="120" width="45" height="40" fill="#334155" rx="2" />
      <text x="220" y="140" fill="#22c55e" fontSize="12" fontFamily="monospace">
        +35%
      </text>
      <text x="218" y="152" fill="#64748b" fontSize="7">
        productivité
      </text>

      <rect x="260" y="120" width="45" height="40" fill="#334155" rx="2" />
      <text x="272" y="140" fill="#3b82f6" fontSize="12" fontFamily="monospace">
        -8h
      </text>
      <text x="268" y="152" fill="#64748b" fontSize="7">
        par semaine
      </text>

      <rect x="310" y="120" width="50" height="40" fill="#334155" rx="2" />
      <text x="320" y="140" fill="#f59e0b" fontSize="12" fontFamily="monospace">
        ROI
      </text>
      <text x="318" y="152" fill="#64748b" fontSize="7">
        démontrable
      </text>
    </svg>
  );
}

// Hero illustration - Before/After automation
export function HeroIllustration({ className = '' }: VisualProps) {
  return (
    <svg
      viewBox="0 0 500 300"
      className={`w-full h-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="500" height="300" fill="#f8fafc" rx="12" />

      {/* BEFORE Section - Left side */}
      <rect x="20" y="40" width="200" height="220" fill="#fef2f2" rx="8" />
      <text x="120" y="65" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="600">
        AVANT
      </text>

      {/* Messy desk with papers */}
      <rect x="40" y="90" width="160" height="80" fill="#fecaca" rx="4" />

      {/* Scattered papers */}
      <rect
        x="50"
        y="100"
        width="30"
        height="40"
        fill="white"
        rx="2"
        transform="rotate(-5 50 100)"
      />
      <rect x="85" y="95" width="30" height="40" fill="white" rx="2" transform="rotate(8 85 95)" />
      <rect
        x="120"
        y="100"
        width="30"
        height="40"
        fill="white"
        rx="2"
        transform="rotate(-3 120 100)"
      />
      <rect
        x="155"
        y="98"
        width="30"
        height="40"
        fill="white"
        rx="2"
        transform="rotate(10 155 98)"
      />

      {/* Stressed person */}
      <circle cx="120" cy="200" r="20" fill="#fca5a5" />
      <circle cx="113" cy="195" r="2" fill="#1e293b" />
      <circle cx="127" cy="195" r="2" fill="#1e293b" />
      <path d="M110 208 Q120 202 130 208" stroke="#1e293b" strokeWidth="2" fill="none" />

      {/* Sweat drops */}
      <ellipse cx="100" cy="190" rx="3" ry="4" fill="#60a5fa" />
      <ellipse cx="140" cy="188" rx="3" ry="4" fill="#60a5fa" />

      {/* Clock showing 8 hours */}
      <circle cx="65" cy="230" r="15" fill="white" stroke="#ef4444" strokeWidth="2" />
      <text x="65" y="235" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">
        8h
      </text>

      {/* ARROW in middle */}
      <rect x="230" y="120" width="40" height="60" fill="#3b82f6" rx="4" />
      <polygon points="270,150 290,150 280,165" fill="#3b82f6" />
      <text x="250" y="145" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        AUTO
      </text>
      <text x="250" y="157" textAnchor="middle" fill="white" fontSize="8">
        MATION
      </text>

      {/* AFTER Section - Right side */}
      <rect x="280" y="40" width="200" height="220" fill="#f0fdf4" rx="8" />
      <text x="380" y="65" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="600">
        APRES
      </text>

      {/* Clean dashboard */}
      <rect x="300" y="90" width="160" height="80" fill="#dcfce7" rx="4" />

      {/* Dashboard screens */}
      <rect
        x="310"
        y="100"
        width="65"
        height="60"
        fill="white"
        rx="4"
        stroke="#22c55e"
        strokeWidth="2"
      />
      <rect
        x="385"
        y="100"
        width="65"
        height="60"
        fill="white"
        rx="4"
        stroke="#22c55e"
        strokeWidth="2"
      />

      {/* Chart in first screen */}
      <rect x="320" y="120" width="8" height="25" fill="#22c55e" />
      <rect x="332" y="115" width="8" height="30" fill="#22c55e" />
      <rect x="344" y="110" width="8" height="35" fill="#22c55e" />
      <rect x="356" y="105" width="8" height="40" fill="#16a34a" />

      {/* KPI in second screen */}
      <text x="417" y="125" textAnchor="middle" fill="#22c55e" fontSize="16" fontWeight="bold">
        +35%
      </text>
      <text x="417" y="145" textAnchor="middle" fill="#64748b" fontSize="8">
        productivité
      </text>

      {/* Happy person */}
      <circle cx="380" cy="200" r="20" fill="#bbf7d0" />
      <circle cx="373" cy="195" r="2" fill="#1e293b" />
      <circle cx="387" cy="195" r="2" fill="#1e293b" />
      <path d="M370 205 Q380 212 390 205" stroke="#1e293b" strokeWidth="2" fill="none" />

      {/* Coffee cup (relaxed) */}
      <rect x="410" y="195" width="15" height="20" fill="#78350f" rx="2" />
      <ellipse cx="417" cy="195" rx="7" ry="3" fill="#92400e" />

      {/* Clock showing 30 min */}
      <circle cx="435" cy="230" r="15" fill="white" stroke="#22c55e" strokeWidth="2" />
      <text x="435" y="235" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">
        30min
      </text>
    </svg>
  );
}

// Before/After Metrics visual
export function MetricsBeforeAfter({ className = '' }: VisualProps) {
  return (
    <svg
      viewBox="0 0 600 200"
      className={`w-full h-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="600" height="200" fill="#f8fafc" rx="8" />

      {/* Before section */}
      <rect x="20" y="20" width="260" height="160" fill="#fef2f2" rx="8" />
      <text x="150" y="45" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="600">
        Avant balise-ia
      </text>

      {/* Before metrics */}
      <rect x="35" y="60" width="110" height="50" fill="white" rx="4" />
      <text x="90" y="85" textAnchor="middle" fill="#dc2626" fontSize="18" fontWeight="bold">
        8h/jour
      </text>
      <text x="90" y="100" textAnchor="middle" fill="#64748b" fontSize="9">
        ressaisies manuelles
      </text>

      <rect x="155" y="60" width="110" height="50" fill="white" rx="4" />
      <text x="210" y="85" textAnchor="middle" fill="#dc2626" fontSize="18" fontWeight="bold">
        3 jours
      </text>
      <text x="210" y="100" textAnchor="middle" fill="#64748b" fontSize="9">
        pour un reporting
      </text>

      <rect x="35" y="120" width="110" height="50" fill="white" rx="4" />
      <text x="90" y="145" textAnchor="middle" fill="#dc2626" fontSize="18" fontWeight="bold">
        15%
      </text>
      <text x="90" y="160" textAnchor="middle" fill="#64748b" fontSize="9">
        taux d&apos;erreur
      </text>

      <rect x="155" y="120" width="110" height="50" fill="white" rx="4" />
      <text x="210" y="145" textAnchor="middle" fill="#dc2626" fontSize="18" fontWeight="bold">
        0
      </text>
      <text x="210" y="160" textAnchor="middle" fill="#64748b" fontSize="9">
        visibilité temps réel
      </text>

      {/* Arrow */}
      <polygon points="290,100 320,80 320,90 340,90 340,110 320,110 320,120" fill="#3b82f6" />

      {/* After section */}
      <rect x="320" y="20" width="260" height="160" fill="#f0fdf4" rx="8" />
      <text x="450" y="45" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="600">
        Après balise-ia
      </text>

      {/* After metrics */}
      <rect x="335" y="60" width="110" height="50" fill="white" rx="4" />
      <text x="390" y="85" textAnchor="middle" fill="#16a34a" fontSize="18" fontWeight="bold">
        30min
      </text>
      <text x="390" y="100" textAnchor="middle" fill="#64748b" fontSize="9">
        supervision auto
      </text>

      <rect x="455" y="60" width="110" height="50" fill="white" rx="4" />
      <text x="510" y="85" textAnchor="middle" fill="#16a34a" fontSize="18" fontWeight="bold">
        Temps réel
      </text>
      <text x="510" y="100" textAnchor="middle" fill="#64748b" fontSize="9">
        reporting automatisé
      </text>

      <rect x="335" y="120" width="110" height="50" fill="white" rx="4" />
      <text x="390" y="145" textAnchor="middle" fill="#16a34a" fontSize="18" fontWeight="bold">
        &lt;1%
      </text>
      <text x="390" y="160" textAnchor="middle" fill="#64748b" fontSize="9">
        taux d&apos;erreur
      </text>

      <rect x="455" y="120" width="110" height="50" fill="white" rx="4" />
      <text x="510" y="145" textAnchor="middle" fill="#16a34a" fontSize="18" fontWeight="bold">
        100%
      </text>
      <text x="510" y="160" textAnchor="middle" fill="#64748b" fontSize="9">
        données accessibles
      </text>
    </svg>
  );
}

// Export all visuals
export const CaseStudyVisuals = {
  agro: AgroVisual,
  metallurgie: MetallurgieVisual,
  plasturgie: PlasturgieVisual,
  default: IndustrialVisual,
};
