// ═══════════════════════════════════════════════════════════════
//  balise-ia — Pack de 4 composants animés
//  Fichier : src/components/animations/index.tsx
//
//  Contient :
//    1. FlockCanvas       — Banc de poissons (boids)
//    2. LocationBadge     — Badge Lorient sonar
//    3. ScanDivider       — Séparateur de section scanné
//    4. LogoBalise        — Logo phare double flash isophase
//
//  Usage : importer depuis ce fichier ou séparer en fichiers individuels
// ═══════════════════════════════════════════════════════════════

'use client';

import { useEffect, useRef } from 'react';

// ───────────────────────────────────────────────────────────────
//  1. FLOCK CANVAS — Banc de poissons (boids algorithm)
// ───────────────────────────────────────────────────────────────

interface FlockCanvasProps {
  height?: number;
  count?: number;
  className?: string;
}

export function FlockCanvas({ height = 220, count = 60, className = '' }: FlockCanvasProps) {
  const cvRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d')!;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const W = cv!.offsetWidth;
      cv!.width = W * DPR;
      cv!.height = height * DPR;
      cv!.style.height = height + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(cv);

    let mx = -999,
      my = -999;
    const onMove = (e: MouseEvent) => {
      const r = cv!.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const onLeave = () => {
      mx = -999;
      my = -999;
    };
    cv.addEventListener('mousemove', onMove);
    cv.addEventListener('mouseleave', onLeave);

    const boids = Array.from({ length: count }, () => ({
      x: Math.random() * cv.offsetWidth,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 1.5 + 1,
    }));

    ctx.fillStyle = '#060f1e';
    ctx.fillRect(0, 0, cv.offsetWidth, height);

    let raf: number;

    function draw() {
      const W = cv!.offsetWidth,
        H = height;
      ctx.fillStyle = 'rgba(6,15,30,.12)';
      ctx.fillRect(0, 0, W, H);

      boids.forEach((b) => {
        let ax = 0,
          ay = 0;
        let sx = 0,
          sy = 0;
        let cx2 = 0,
          cy2 = 0;
        let count2 = 0;
        let fx = 0,
          fy = 0;

        const dmx = b.x - mx,
          dmy = b.y - my;
        const dm = Math.sqrt(dmx * dmx + dmy * dmy);
        if (dm < 60 && dm > 0) {
          fx = (dmx / dm) * 2;
          fy = (dmy / dm) * 2;
        }

        boids.forEach((o) => {
          if (o === b) return;
          const dx = o.x - b.x,
            dy = o.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 60) {
            cx2 += o.x;
            cy2 += o.y;
            ax += o.vx;
            ay += o.vy;
            if (d < 20) {
              sx -= dx / (d || 1);
              sy -= dy / (d || 1);
            }
            count2++;
          }
        });

        if (count2 > 0) {
          b.vx +=
            ((cx2 / count2 - b.x) * 0.002 +
              (ax / count2 - b.vx) * 0.05 +
              sx * 0.05 +
              fx * 0.1);
          b.vy +=
            ((cy2 / count2 - b.y) * 0.002 +
              (ay / count2 - b.vy) * 0.05 +
              sy * 0.05 +
              fy * 0.1);
        }

        const spd = Math.sqrt(b.vx * b.vx + b.vy * b.vy) || 1;
        const maxS = 1.8;
        if (spd > maxS) {
          b.vx = (b.vx / spd) * maxS;
          b.vy = (b.vy / spd) * maxS;
        }

        b.x += b.vx;
        b.y += b.vy;
        if (b.x < 0) b.x = W;
        if (b.x > W) b.x = 0;
        if (b.y < 0) b.y = H;
        if (b.y > H) b.y = 0;

        const angle = Math.atan2(b.vy, b.vx);
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(b.size * 3, 0);
        ctx.lineTo(-b.size * 2, b.size);
        ctx.lineTo(-b.size, 0);
        ctx.lineTo(-b.size * 2, -b.size);
        ctx.closePath();
        ctx.fillStyle = 'rgba(34,197,94,.7)';
        ctx.fill();
        ctx.restore();
      });

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      cv.removeEventListener('mousemove', onMove);
      cv.removeEventListener('mouseleave', onLeave);
    };
  }, [height, count]);

  return (
    <canvas
      ref={cvRef}
      className={`w-full block cursor-crosshair ${className}`}
      style={{ height, background: '#060f1e' }}
    />
  );
}

// ───────────────────────────────────────────────────────────────
//  2. LOCATION BADGE — Badge "Lorient, Bretagne" avec sonar animé
// ───────────────────────────────────────────────────────────────

interface LocationBadgeProps {
  city?: string;
  region?: string;
  variant?: 'dark' | 'light';
  className?: string;
}

export function LocationBadge({
  city = 'Lorient',
  region = 'Bretagne',
  variant = 'dark',
  className = '',
}: LocationBadgeProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`
        inline-flex items-center gap-2.5 rounded-full px-4 py-2 pl-2
        ${
          isDark
            ? 'bg-white/8 border border-white/14 backdrop-blur-md'
            : 'bg-[#f4f8f5] border border-[#0c1f3f]/10'
        }
        ${className}
      `}
    >
      {/* Sonar animé */}
      <div className="relative w-6 h-6 flex-shrink-0 flex items-center justify-center">
        {[0, 0.7, 1.4].map((delay, i) => (
          <span
            key={i}
            className="absolute rounded-full border border-[#22c55e]/55"
            style={{
              width: 8 + i * 8,
              height: 8 + i * 8,
              animation: `sonar-ring 2.5s ease-out ${delay}s infinite`,
            }}
          />
        ))}
        <span
          className="relative z-10 w-2 h-2 rounded-full bg-[#22c55e]"
          style={{ boxShadow: '0 0 6px rgba(34,197,94,.8)' }}
        />
      </div>

      {/* Texte */}
      <span
        className={`text-[0.82rem] font-semibold tracking-[0.01em] whitespace-nowrap ${
          isDark ? 'text-white/88' : 'text-[#0c1f3f]'
        }`}
      >
        <span className="text-[#22c55e]">{city}</span>
        <span className={isDark ? 'text-white/45' : 'text-[#0c1f3f]/45'}>, {region}</span>
      </span>

      <style>{`
        @keyframes sonar-ring {
          0%   { transform: scale(0); opacity: 0.7; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────
//  3. SCAN DIVIDER — Séparateur de section avec scan lumineux
// ───────────────────────────────────────────────────────────────

interface ScanDividerProps {
  label?: string;
  variant?: 'dark' | 'light';
  className?: string;
  speed?: number;
}

export function ScanDivider({
  label,
  variant = 'light',
  className = '',
  speed = 3,
}: ScanDividerProps) {
  const isDark = variant === 'dark';
  const baseColor = isDark ? 'rgba(255,255,255,.08)' : 'rgba(12,31,63,.08)';
  const scanColor = isDark ? 'rgba(34,197,94,1)' : 'rgba(26,122,94,1)';
  const textColor = isDark ? 'rgba(255,255,255,.3)' : 'rgba(12,31,63,.3)';
  const bgColor = isDark ? '#0c1f3f' : 'white';

  if (label) {
    return (
      <div className={`relative flex items-center justify-center my-8 ${className}`}>
        <div className="flex-1 relative h-px overflow-hidden" style={{ background: baseColor }}>
          <div
            className="absolute top-0 h-full w-[30%] rounded"
            style={{
              background: `linear-gradient(90deg, transparent, ${scanColor}, transparent)`,
              animation: `scan-move ${speed}s ease-in-out infinite`,
            }}
          />
        </div>

        <span
          className="relative z-10 px-4 text-[0.65rem] font-semibold tracking-[.18em] uppercase whitespace-nowrap"
          style={{ color: textColor, background: bgColor }}
        >
          {label}
        </span>

        <div className="flex-1 relative h-px overflow-hidden" style={{ background: baseColor }}>
          <div
            className="absolute top-0 h-full w-[30%] rounded"
            style={{
              background: `linear-gradient(90deg, transparent, ${scanColor}, transparent)`,
              animation: `scan-move ${speed}s ease-in-out ${speed * 0.5}s infinite`,
            }}
          />
        </div>

        <style>{`
          @keyframes scan-move {
            0%   { left: -30%; }
            100% { left: 130%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-px overflow-hidden my-8 ${className}`}
      style={{ background: baseColor }}
    >
      <div
        className="absolute top-0 h-full w-[30%] rounded"
        style={{
          background: `linear-gradient(90deg, transparent, ${scanColor}, transparent)`,
          animation: `scan-move ${speed}s ease-in-out infinite`,
        }}
      />
      <style>{`
        @keyframes scan-move {
          0%   { left: -30%; }
          100% { left: 130%; }
        }
      `}</style>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────
//  4. LOGO BALISE — Phare avec double flash isophase
// ───────────────────────────────────────────────────────────────

interface LogoBaliseProps {
  size?: number;
  textSize?: string;
  className?: string;
  href?: string;
  dark?: boolean;
}

export function LogoBalise({
  size = 36,
  textSize = 'text-[1.15rem]',
  className = '',
  href = '/',
  dark = false,
}: LogoBaliseProps) {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  const LX = size / 2;
  const LY = (14.4 / 56) * size;
  const LEN = size * 0.65;
  const PAD = Math.round(LEN + 8);
  const CW = size + PAD * 2;
  const CH = size + PAD * 2;
  const OX = PAD + LX;
  const OY = PAD + LY;

  useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d')!;
    const DPR = window.devicePixelRatio || 2;

    cv.width = CW * DPR;
    cv.height = CH * DPR;

    const state = { phase: 0, alpha: 0, timer: 0 };

    function drawRay(angle: number, alpha: number) {
      ctx.save();
      ctx.scale(DPR, DPR);
      ctx.globalAlpha = alpha;

      const ex = OX + Math.cos(angle) * LEN;
      const ey = OY + Math.sin(angle) * LEN;
      const coneW = 0.07;

      ctx.beginPath();
      ctx.moveTo(OX, OY);
      ctx.lineTo(OX + Math.cos(angle - coneW) * LEN, OY + Math.sin(angle - coneW) * LEN);
      ctx.lineTo(OX + Math.cos(angle + coneW) * LEN, OY + Math.sin(angle + coneW) * LEN);
      ctx.closePath();
      const cg = ctx.createLinearGradient(OX, OY, ex, ey);
      cg.addColorStop(0, 'rgba(255,215,130,.25)');
      cg.addColorStop(0.5, 'rgba(255,200,100,.06)');
      cg.addColorStop(1, 'rgba(255,200,100,0)');
      ctx.fillStyle = cg;
      ctx.fill();

      const lg = ctx.createLinearGradient(OX, OY, ex, ey);
      lg.addColorStop(0, 'rgba(255,205,110,.92)');
      lg.addColorStop(0.5, 'rgba(193,127,89,.45)');
      lg.addColorStop(1, 'rgba(193,127,89,0)');
      ctx.beginPath();
      ctx.moveTo(OX, OY);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = lg;
      ctx.lineWidth = 1.2;
      ctx.lineCap = 'round';
      ctx.stroke();

      const sg = ctx.createRadialGradient(OX, OY, 0, OX, OY, 5.5);
      sg.addColorStop(0, 'rgba(255,215,140,.7)');
      sg.addColorStop(1, 'transparent');
      ctx.fillStyle = sg;
      ctx.beginPath();
      ctx.arc(OX, OY, 5.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    function tick() {
      ctx.clearRect(0, 0, CW * DPR, CH * DPR);

      state.timer++;
      const t = state.timer % 200;

      if (t < 50) {
        state.phase = 0;
        state.alpha = Math.min(1, state.alpha + 0.06);
      } else if (t < 70) {
        state.alpha = Math.max(0, state.alpha - 0.07);
      } else if (t < 120) {
        state.phase = Math.PI;
        state.alpha = Math.min(1, state.alpha + 0.06);
      } else {
        state.alpha = Math.max(0, state.alpha - 0.04);
      }

      if (state.alpha > 0) drawRay(state.phase, state.alpha);
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [size, CW, CH, OX, OY, LEN]);

  const iconColor = dark ? 'rgba(255,255,255,0.28)' : '#0C1F3F';
  const bodyColor = dark ? '#ffffff' : '#0C1F3F';

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-[11px] no-underline cursor-pointer ${className}`}
    >
      <div
        className="relative flex-shrink-0 overflow-visible"
        style={{ width: size, height: size }}
      >
        <canvas
          ref={cvRef}
          className="absolute pointer-events-none z-[3]"
          style={{ top: -PAD, left: -PAD, width: CW, height: CH }}
        />

        <svg
          width={size}
          height={size}
          viewBox="0 0 56 56"
          fill="none"
          className="relative z-[2] block"
          aria-hidden="true"
        >
          <circle cx={28} cy={28} r={26.5} stroke={iconColor} strokeWidth={1} fill="none" />
          <path
            d="M32 14 Q42 12 56 11 Q56 14 50 16 Q40 16 32 18 Z"
            fill="#C17F59"
            opacity={0.08}
          />
          <circle cx={28} cy={5.5} r={1.8} fill={bodyColor} />
          <path d="M23.5 11 Q23.5 7 28 7 Q32.5 7 32.5 11 Z" fill={bodyColor} />
          <rect x={22.5} y={11} width={11} height={7} rx={4.5} fill="#C17F59" />
          <rect x={24.5} y={12.2} width={1.6} height={5} rx={0.8} fill="white" opacity={0.32} />
          <rect x={27.2} y={12.2} width={1.6} height={5} rx={0.8} fill="white" opacity={0.22} />
          <rect x={21} y={18} width={14} height={1.8} rx={0.9} fill={bodyColor} />
          <path d="M23.5 19.8 L22.5 26 L33.5 26 L32.5 19.8 Z" fill={bodyColor} />
          <path d="M22.5 26 L21.5 33 L34.5 33 L33.5 26 Z" fill="#C17F59" opacity={0.28} />
          <path d="M21.5 33 L20.5 39.5 L35.5 39.5 L34.5 33 Z" fill={bodyColor} />
          <rect x={19.5} y={39.5} width={17} height={2} rx={1} fill={bodyColor} />
          <path d="M20.5 41.5 L19 51 L37 51 L35.5 41.5 Z" fill={bodyColor} />
          <rect x={17.5} y={51} width={21} height={3} rx={1.5} fill={bodyColor} />
        </svg>
      </div>

      <span
        className={`font-bold tracking-tight leading-none select-none ${textSize}`}
        style={{ color: dark ? '#ffffff' : '#0c1f3f' }}
      >
        balise
        <span style={{ color: '#c17f59' }}>-</span>
        ia
      </span>
    </a>
  );
}
