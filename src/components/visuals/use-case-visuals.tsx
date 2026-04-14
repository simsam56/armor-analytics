'use client';

import { motion, useReducedMotion } from 'framer-motion';

const noMotion = { initial: {}, animate: {} };

// 1. Automatisation documentaire — OCR pipeline visuel
export function OcrVisual() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Document source */}
      <rect x="20" y="40" width="90" height="120" rx="8" fill="#E8E0D5" stroke="#0C1F3F" strokeWidth="1.5" />
      <rect x="32" y="56" width="50" height="4" rx="2" fill="#8B9AAB" />
      <rect x="32" y="66" width="66" height="4" rx="2" fill="#8B9AAB" />
      <rect x="32" y="76" width="40" height="4" rx="2" fill="#8B9AAB" />
      <rect x="32" y="90" width="66" height="20" rx="4" fill="#0C1F3F" opacity="0.1" />
      <rect x="32" y="118" width="50" height="4" rx="2" fill="#8B9AAB" />
      <rect x="32" y="128" width="66" height="4" rx="2" fill="#8B9AAB" />
      <text x="65" y="180" textAnchor="middle" className="text-[10px] fill-breton-granite font-medium">
        BDC / BL / Facture
      </text>

      {/* Arrow 1 */}
      <motion.path
        d="M120 100 L160 100"
        stroke="#1A6B4A"
        strokeWidth="2"
        strokeDasharray="6 3"
        initial={reduce ? {} : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <polygon points="158,96 166,100 158,104" fill="#1A6B4A" />

      {/* OCR box */}
      <rect x="170" y="60" width="80" height="80" rx="12" fill="#1A6B4A" />
      <text x="210" y="95" textAnchor="middle" className="text-[13px] fill-white font-bold">
        OCR
      </text>
      <text x="210" y="112" textAnchor="middle" className="text-[9px] fill-white/70">
        Extraction IA
      </text>
      <text x="210" y="160" textAnchor="middle" className="text-[10px] fill-breton-granite font-medium">
        Lecture auto
      </text>

      {/* Arrow 2 */}
      <motion.path
        d="M260 100 L300 100"
        stroke="#1A6B4A"
        strokeWidth="2"
        strokeDasharray="6 3"
        initial={reduce ? {} : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      <polygon points="298,96 306,100 298,104" fill="#1A6B4A" />

      {/* ERP box */}
      <rect x="310" y="60" width="80" height="80" rx="12" fill="#0C1F3F" />
      <text x="350" y="95" textAnchor="middle" className="text-[13px] fill-white font-bold">
        ERP
      </text>
      <text x="350" y="112" textAnchor="middle" className="text-[9px] fill-white/60">
        GPAO
      </text>
      <text x="350" y="160" textAnchor="middle" className="text-[10px] fill-breton-granite font-medium">
        Injection directe
      </text>

      {/* Check marks */}
      <motion.circle
        cx="350" cy="45" r="10" fill="#1A6B4A"
        initial={reduce ? {} : { scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring' }}
      />
      <motion.path
        d="M345 45 L348 48 L355 41"
        stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"
        initial={reduce ? {} : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.7, duration: 0.3 }}
      />
    </svg>
  );
}

// 2. Agent IA métier — Chat interface
export function AgentVisual() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Chat frame */}
      <rect x="60" y="20" width="280" height="220" rx="16" fill="white" stroke="#E8E0D5" strokeWidth="1.5" />
      <rect x="60" y="20" width="280" height="40" rx="16" fill="#0C1F3F" />
      <rect x="60" y="44" width="280" height="16" fill="#0C1F3F" />
      <circle cx="80" cy="40" r="6" fill="#1A6B4A" />
      <text x="96" y="44" className="text-[11px] fill-white font-semibold">Agent IA atelier</text>
      <circle cx="320" cy="40" r="4" fill="#2D7A4F" className="animate-pulse" />

      {/* User message */}
      <motion.g
        initial={reduce ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <rect x="160" y="72" width="168" height="36" rx="12" fill="#E8E0D5" />
        <text x="175" y="88" className="text-[9px] fill-breton-navy">Ma machine vibre au</text>
        <text x="175" y="100" className="text-[9px] fill-breton-navy">d\u00e9marrage, que faire ?</text>
      </motion.g>

      {/* AI response */}
      <motion.g
        initial={reduce ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <rect x="72" y="118" width="200" height="60" rx="12" fill="#F4F8F5" stroke="#E8E0D5" />
        <text x="84" y="136" className="text-[9px] fill-breton-navy font-medium">3 causes identifi\u00e9es :</text>
        <text x="84" y="150" className="text-[8px] fill-breton-slate">1. Roulement d\u00e9faillant (fiche #247)</text>
        <text x="84" y="162" className="text-[8px] fill-breton-slate">2. Courroie d\u00e9tendue (proc. Bernard)</text>
        <text x="84" y="174" className="text-[8px] fill-breton-slate">3. D\u00e9faut d\u2019alignement arbre</text>
      </motion.g>

      {/* Source tag */}
      <motion.g
        initial={reduce ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <rect x="72" y="186" width="120" height="20" rx="10" fill="#1A6B4A" opacity="0.1" />
        <text x="82" y="200" className="text-[8px] fill-breton-emerald font-medium">Source: base connaissances</text>
      </motion.g>
    </svg>
  );
}

// 3. Automatisation de flux — Pipeline
export function FluxVisual() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* GPAO */}
      <rect x="20" y="90" width="80" height="60" rx="10" fill="#0C1F3F" />
      <text x="60" y="118" textAnchor="middle" className="text-[11px] fill-white font-bold">GPAO</text>
      <text x="60" y="132" textAnchor="middle" className="text-[8px] fill-white/60">OF + Gammes</text>

      {/* Arrow to sync */}
      <motion.line x1="100" y1="120" x2="145" y2="120" stroke="#9A5F3A" strokeWidth="2"
        initial={reduce ? {} : { pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <polygon points="143,116 151,120 143,124" fill="#9A5F3A" />

      {/* Sync hub */}
      <motion.circle cx="200" cy="120" r="40" fill="#9A5F3A" opacity="0.1"
        initial={reduce ? {} : { scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
      />
      <circle cx="200" cy="120" r="28" fill="#9A5F3A" />
      <text x="200" y="117" textAnchor="middle" className="text-[10px] fill-white font-bold">SYNC</text>
      <text x="200" y="129" textAnchor="middle" className="text-[8px] fill-white/70">Temps r\u00e9el</text>

      {/* Arrow to MES */}
      <motion.line x1="228" y1="100" x2="290" y2="70" stroke="#9A5F3A" strokeWidth="2"
        initial={reduce ? {} : { pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <polygon points="286,64 294,68 288,74" fill="#9A5F3A" />

      {/* MES */}
      <rect x="294" y="40" width="80" height="60" rx="10" fill="#2E4057" />
      <text x="334" y="68" textAnchor="middle" className="text-[11px] fill-white font-bold">MES</text>
      <text x="334" y="82" textAnchor="middle" className="text-[8px] fill-white/60">Temps cycle</text>

      {/* Arrow to ERP */}
      <motion.line x1="228" y1="140" x2="290" y2="170" stroke="#9A5F3A" strokeWidth="2"
        initial={reduce ? {} : { pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <polygon points="286,166 294,172 288,176" fill="#9A5F3A" />

      {/* ERP */}
      <rect x="294" y="150" width="80" height="60" rx="10" fill="#0C1F3F" />
      <text x="334" y="178" textAnchor="middle" className="text-[11px] fill-white font-bold">ERP</text>
      <text x="334" y="192" textAnchor="middle" className="text-[8px] fill-white/60">Stocks + Achats</text>

      {/* Label */}
      <text x="200" y="240" textAnchor="middle" className="text-[10px] fill-breton-granite font-medium">Z\u00e9ro double saisie</text>
    </svg>
  );
}

// 4. Reporting & pilotage — Mini dashboard
export function DashboardVisual() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Dashboard frame */}
      <rect x="30" y="20" width="340" height="220" rx="12" fill="white" stroke="#E8E0D5" strokeWidth="1.5" />

      {/* Header */}
      <rect x="30" y="20" width="340" height="36" rx="12" fill="#0C1F3F" />
      <rect x="30" y="40" width="340" height="16" fill="#0C1F3F" />
      <text x="50" y="42" className="text-[10px] fill-white font-semibold">Pilotage production</text>
      <circle cx="348" cy="38" r="4" fill="#1A6B4A" />
      <text x="312" y="42" className="text-[8px] fill-white/60">LIVE</text>

      {/* KPI cards */}
      {[
        { x: 42, label: 'TRS', value: '87%', color: '#1A6B4A' },
        { x: 130, label: 'Encours', value: '142', color: '#9A5F3A' },
        { x: 218, label: 'Rebut', value: '1.2%', color: '#1A6B4A' },
        { x: 306, label: 'Cadence', value: '98/h', color: '#0C1F3F' },
      ].map((kpi, i) => (
        <motion.g key={kpi.label}
          initial={reduce ? {} : { opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.2 }}
        >
          <rect x={kpi.x} y="66" width="76" height="44" rx="6" fill="#F4F8F5" stroke="#E8E0D5" />
          <text x={kpi.x + 8} y="82" className="text-[8px] fill-breton-granite">{kpi.label}</text>
          <text x={kpi.x + 8} y="100" className="text-[16px] font-bold" fill={kpi.color}>{kpi.value}</text>
        </motion.g>
      ))}

      {/* Bar chart */}
      <motion.g
        initial={reduce ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[42, 62, 55, 70, 48, 65, 58, 72, 60, 68].map((h, i) => (
          <motion.rect
            key={i}
            x={52 + i * 30}
            y={220 - h}
            width="18"
            height={h}
            rx="3"
            fill={i === 9 ? '#1A6B4A' : '#E8E0D5'}
            initial={reduce ? {} : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.2 + i * 0.05, duration: 0.3 }}
            style={{ transformOrigin: 'bottom' }}
          />
        ))}
        <text x="52" y="235" className="text-[7px] fill-breton-granite">Lun</text>
        <text x="322" y="235" className="text-[7px] fill-breton-granite">Ven</text>
      </motion.g>
    </svg>
  );
}

// 5. Qualité & vision — Contrôle visuel
export function VisionVisual() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Conveyor belt */}
      <rect x="0" y="160" width="400" height="12" rx="6" fill="#E8E0D5" />
      <rect x="0" y="168" width="400" height="4" fill="#8B9AAB" opacity="0.3" />

      {/* Products on belt */}
      {[60, 140, 220, 300].map((x, i) => (
        <motion.rect
          key={i}
          x={x} y="130" width="40" height="30" rx="4"
          fill={i === 2 ? '#DC2626' : '#0C1F3F'} opacity={i === 2 ? 0.2 : 0.15}
          stroke={i === 2 ? '#DC2626' : '#0C1F3F'} strokeWidth="1.5"
          initial={reduce ? {} : { x: x + 40 }}
          animate={{ x }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
        />
      ))}

      {/* Camera */}
      <rect x="170" y="30" width="60" height="40" rx="8" fill="#0C1F3F" />
      <circle cx="200" cy="50" r="12" fill="#2E4057" stroke="#8B9AAB" strokeWidth="1" />
      <circle cx="200" cy="50" r="6" fill="#1A6B4A" />

      {/* Scan line */}
      <motion.line
        x1="200" y1="70" x2="200" y2="130"
        stroke="#1A6B4A" strokeWidth="2" strokeDasharray="4 2"
        initial={reduce ? {} : { opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      {/* Scan area */}
      <motion.rect
        x="215" y="100" width="50" height="30" rx="4"
        fill="none" stroke="#DC2626" strokeWidth="2"
        initial={reduce ? {} : { opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5] }}
        transition={{ delay: 1, duration: 1.5 }}
      />

      {/* Alert badge */}
      <motion.g
        initial={reduce ? {} : { scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring' }}
      >
        <rect x="280" y="40" width="100" height="50" rx="8" fill="white" stroke="#DC2626" strokeWidth="1.5" />
        <text x="295" y="58" className="text-[9px] fill-red-600 font-bold">D\u00e9faut d\u00e9tect\u00e9</text>
        <text x="295" y="72" className="text-[8px] fill-breton-slate">Pi\u00e8ce #247 \u2014 \u00e9cart</text>
        <text x="295" y="82" className="text-[8px] fill-breton-slate">dimensionnel 0.3mm</text>
      </motion.g>

      {/* Labels */}
      <text x="200" y="200" textAnchor="middle" className="text-[10px] fill-breton-emerald font-medium">Contr\u00f4le qualit\u00e9 en temps r\u00e9el</text>
      <text x="200" y="215" textAnchor="middle" className="text-[9px] fill-breton-granite">D\u00e9tection automatique de d\u00e9fauts en sortie de ligne</text>
    </svg>
  );
}
