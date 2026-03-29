'use client';

const pillars = [
  {
    key: 'ia',
    title: 'Intelligence artificielle',
    accentFrom: 'rgba(193,127,89,.8)',
    accentTo: 'rgba(193,127,89,.1)',
    svg: <IASvg />,
  },
  {
    key: 'data',
    title: 'Pilotage data',
    accentFrom: 'rgba(232,224,213,.6)',
    accentTo: 'rgba(232,224,213,.1)',
    svg: <DataSvg />,
  },
  {
    key: 'formation',
    title: 'Formation des \u00e9quipes',
    accentFrom: 'rgba(26,107,74,.8)',
    accentTo: 'rgba(26,107,74,.1)',
    svg: <FormationSvg />,
  },
];

export function ThreePillars() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mx-auto">
      {pillars.map((p) => (
        <Card key={p.key} accentFrom={p.accentFrom} accentTo={p.accentTo}>
          {p.svg}
          <span className="text-[13.5px] font-bold text-[#E8E0D5]/88 tracking-tight leading-snug text-center">
            {p.title}
          </span>
        </Card>
      ))}
    </div>
  );
}

/* \u2500\u2500 Card wrapper \u2500\u2500 */
function Card({
  children,
  accentFrom,
  accentTo,
}: {
  children: React.ReactNode;
  accentFrom: string;
  accentTo: string;
}) {
  return (
    <div
      className="
        group relative overflow-hidden
        flex flex-col items-center gap-5
        px-5 pt-8 pb-7 rounded-[22px]
        bg-white/[0.07] backdrop-blur-xl
        border border-white/[0.12]
        cursor-default text-center
        transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)]
        hover:bg-white/[0.11] hover:border-white/20 hover:-translate-y-[6px]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
    >
      {/* Ligne accent bas au hover */}
      <span
        className="
          absolute bottom-0 left-0 right-0 h-[2px] rounded-b-[22px]
          scale-x-0 origin-left
          transition-transform duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)]
          group-hover:scale-x-100
        "
        style={{
          background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
        }}
      />
      {children}
    </div>
  );
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   SVG 1 \u00b7 INTELLIGENCE ARTIFICIELLE
   Inputs \u2192 N\u0153ud IA \u2192 Outputs check\u00e9s
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
function IASvg() {
  return (
    <svg width="78" height="56" viewBox="0 0 78 56" fill="none" overflow="visible">
      {/* Inputs */}
      {[4, 18, 32].map((y) => (
        <g
          key={y}
          className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
          style={{ transitionDelay: '30ms' }}
        >
          <rect
            x="2"
            y={y}
            width="16"
            height="9"
            rx="3"
            fill="rgba(193,127,89,.1)"
            stroke="rgba(193,127,89,.45)"
            strokeWidth="1.2"
          />
          <line
            x1="5"
            y1={y + 4.5}
            x2="15"
            y2={y + 4.5}
            stroke="rgba(193,127,89,.35)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* Fl\u00e8ches input \u2192 n\u0153ud */}
      {['M18 8.5 Q27 8.5 27 27', 'M18 22.5 L27 27', 'M18 36.5 Q27 36.5 27 27'].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="rgba(193,127,89,.35)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="300"
          strokeDashoffset="300"
          className="transition-[stroke-dashoffset] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:[stroke-dashoffset:0]"
          style={{ transitionDelay: `${i * 120}ms` }}
        />
      ))}

      {/* N\u0153ud IA */}
      <g
        className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
        style={{ transitionDelay: '100ms' }}
      >
        <rect
          x="23"
          y="18"
          width="22"
          height="18"
          rx="6"
          fill="rgba(193,127,89,.18)"
          stroke="rgba(193,127,89,.8)"
          strokeWidth="1.5"
        />
        <text
          x="34"
          y="30.5"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="800"
          fill="rgba(193,127,89,.95)"
          fontFamily="-apple-system,sans-serif"
        >
          IA
        </text>
      </g>

      {/* Fl\u00e8ches n\u0153ud \u2192 outputs */}
      {['M45 27 Q53 27 55 16', 'M45 27 L55 27', 'M45 27 Q53 27 55 38'].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="rgba(232,224,213,.35)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="300"
          strokeDashoffset="300"
          className="transition-[stroke-dashoffset] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:[stroke-dashoffset:0]"
          style={{ transitionDelay: `${260 + i * 80}ms` }}
        />
      ))}

      {/* Outputs */}
      {[
        { y: 11, delay: 270 },
        { y: 22, delay: 360 },
        { y: 33, delay: 450 },
      ].map(({ y, delay }) => (
        <g
          key={y}
          className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
          style={{ transitionDelay: `${delay}ms` }}
        >
          <rect
            x="55"
            y={y}
            width="20"
            height="10"
            rx="3"
            fill="rgba(232,224,213,.1)"
            stroke="rgba(232,224,213,.4)"
            strokeWidth="1.2"
          />
          <path
            d={`M58 ${y + 5} L60 ${y + 7} L64 ${y + 2}`}
            stroke="rgba(232,224,213,.88)"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="66"
            y1={y + 5}
            x2="72"
            y2={y + 5}
            stroke="rgba(232,224,213,.28)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  );
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   SVG 2 \u00b7 PILOTAGE DATA
   Mini dashboard avec barres + courbe live
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
function DataSvg() {
  return (
    <svg width="72" height="58" viewBox="0 0 72 58" fill="none">
      {/* Frame */}
      <rect
        className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
        style={{ transitionDelay: '30ms' }}
        x="2"
        y="2"
        width="68"
        height="54"
        rx="7"
        fill="rgba(232,224,213,.04)"
        stroke="rgba(232,224,213,.18)"
        strokeWidth="1.2"
      />

      {/* Barre titre */}
      <rect
        className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
        style={{ transitionDelay: '30ms' }}
        x="2"
        y="2"
        width="68"
        height="12"
        rx="7"
        fill="rgba(232,224,213,.07)"
      />
      <rect
        x="2"
        y="8"
        width="68"
        height="6"
        fill="rgba(232,224,213,.07)"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ transitionDelay: '30ms' }}
      />

      {/* Dots fen\u00eatre */}
      {[
        { cx: 10, fill: 'rgba(248,113,113,.55)' },
        { cx: 17, fill: 'rgba(251,191,36,.55)' },
        { cx: 24, fill: 'rgba(74,222,128,.55)' },
      ].map(({ cx, fill }) => (
        <circle
          key={cx}
          cx={cx}
          cy="8"
          r="2.2"
          fill={fill}
          className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
          style={{ transitionDelay: '30ms' }}
        />
      ))}

      {/* Axe */}
      <line x1="10" y1="50" x2="64" y2="50" stroke="rgba(255,255,255,.08)" strokeWidth="1" />

      {/* Barres */}
      {[
        { x: 11, y: 33, h: 17, a: '.15', b: '.2', delay: 70 },
        { x: 24, y: 24, h: 26, a: '.22', b: '.3', delay: 160 },
        { x: 37, y: 14, h: 36, a: '.55', b: '.72', delay: 250 },
        { x: 50, y: 20, h: 30, a: '.25', b: '.35', delay: 340 },
      ].map(({ x, y, h, a, b, delay }) => (
        <rect
          key={x}
          x={x}
          y={y}
          width="9"
          height={h}
          rx="2.5"
          fill={`rgba(232,224,213,${a})`}
          stroke={`rgba(232,224,213,${b})`}
          strokeWidth="1"
          className="origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100"
          style={{ transitionDelay: `${delay}ms` }}
        />
      ))}

      {/* Courbe */}
      <path
        d="M15.5 33 C26 22 38 13 54.5 19.5"
        stroke="rgba(232,224,213,.75)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="300"
        strokeDashoffset="300"
        className="transition-[stroke-dashoffset] duration-[800ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:[stroke-dashoffset:0]"
        style={{ transitionDelay: '120ms' }}
      />

      {/* Dot live */}
      <circle
        cx="54.5"
        cy="19.5"
        r="7"
        fill="rgba(232,224,213,.08)"
        stroke="rgba(232,224,213,.2)"
        strokeWidth="1"
        className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
        style={{ transitionDelay: '360ms' }}
      />
      <circle
        cx="54.5"
        cy="19.5"
        r="3.5"
        fill="rgba(232,224,213,.95)"
        className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
        style={{ transitionDelay: '360ms' }}
      />

      {/* LIVE label */}
      <text
        x="54.5"
        y="13"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="800"
        fill="rgba(232,224,213,.8)"
        fontFamily="-apple-system,sans-serif"
        letterSpacing=".5"
        className="opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0"
        style={{ transitionDelay: '520ms' }}
      >
        LIVE
      </text>
    </svg>
  );
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   SVG 3 \u00b7 FORMATION DES \u00c9QUIPES
   Livre ouvert + check + progress bar
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
function FormationSvg() {
  return (
    <svg width="72" height="60" viewBox="0 0 72 60" fill="none">
      {/* Pages du livre */}
      {[
        'M36 10 C30 8 20 9 10 12 L10 52 C20 49 30 50 36 52 Z',
        'M36 10 C42 8 52 9 62 12 L62 52 C52 49 42 50 36 52 Z',
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          fill="rgba(26,107,74,.08)"
          stroke="rgba(26,107,74,.45)"
          strokeWidth="1.4"
          className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
          style={{ transitionDelay: '30ms' }}
        />
      ))}

      {/* Spine */}
      <line
        x1="36"
        y1="10"
        x2="36"
        y2="52"
        stroke="rgba(26,107,74,.35)"
        strokeWidth="1.5"
        strokeDasharray="300"
        strokeDashoffset="300"
        className="transition-[stroke-dashoffset] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:[stroke-dashoffset:0]"
        style={{ transitionDelay: '0ms' }}
      />

      {/* Lignes de texte */}
      {[
        { x2: 32, delay: 120 },
        { x2: 30, delay: 240 },
        { x2: 27, delay: 360 },
        { x2: 29, delay: 480 },
      ].map(({ x2, delay }, i) => (
        <line
          key={i}
          x1="14"
          y1={21 + i * 7}
          x2={x2}
          y2={21 + i * 7}
          stroke={`rgba(26,107,74,${['.45', '.32', '.25', '.2'][i]})`}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeDasharray="60"
          strokeDashoffset="60"
          className="transition-[stroke-dashoffset] duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:[stroke-dashoffset:0]"
          style={{ transitionDelay: `${delay}ms` }}
        />
      ))}

      {/* Check cercle */}
      <circle
        cx="49"
        cy="28"
        r="11"
        fill="rgba(26,107,74,.14)"
        stroke="rgba(26,107,74,.55)"
        strokeWidth="1.5"
        className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
        style={{ transitionDelay: '270ms' }}
      />

      {/* Check mark */}
      <path
        d="M44 28 L48 32 L55 22"
        stroke="rgba(26,107,74,.92)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
        style={{ transitionDelay: '360ms' }}
      />

      {/* Progress bar fond */}
      <rect
        x="10"
        y="48"
        width="52"
        height="5"
        rx="2.5"
        fill="rgba(26,107,74,.07)"
        stroke="rgba(26,107,74,.15)"
        strokeWidth="1"
        className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
        style={{ transitionDelay: '450ms' }}
      />

      {/* Progress fill */}
      <rect
        x="10"
        y="48"
        width="36"
        height="5"
        rx="2.5"
        fill="rgba(26,107,74,.6)"
        className="opacity-0 scale-[.08] origin-center transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100"
        style={{ transitionDelay: '540ms' }}
      />

      {/* % label */}
      <text
        x="49"
        y="53"
        fontSize="6"
        fontWeight="800"
        fill="rgba(26,107,74,.85)"
        fontFamily="-apple-system,sans-serif"
        className="opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
        style={{ transitionDelay: '680ms' }}
      >
        70%
      </text>
    </svg>
  );
}
