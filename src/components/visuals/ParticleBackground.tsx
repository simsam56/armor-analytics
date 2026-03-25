'use client';

import { useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  drift: number;
  color: 'cyan' | 'white';
}

interface ConnectionLine {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
}

const PARTICLE_COUNT = 25;
const LINE_COUNT = 6;

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateParticles(): Particle[] {
  const rand = seededRandom(42);
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: rand() * 100,
    y: rand() * 100,
    size: 2 + rand() * 4,
    opacity: 0.1 + rand() * 0.3,
    duration: 15 + rand() * 25,
    delay: rand() * -20,
    drift: -10 + rand() * 20,
    color: rand() > 0.7 ? ('white' as const) : ('cyan' as const),
  }));
}

function generateLines(): ConnectionLine[] {
  const rand = seededRandom(99);
  return Array.from({ length: LINE_COUNT }, (_, i) => ({
    id: i,
    x1: rand() * 100,
    y1: 20 + rand() * 60,
    x2: rand() * 100,
    y2: 20 + rand() * 60,
    opacity: 0.06 + rand() * 0.08,
  }));
}

const CYAN = '#9A5F3A';

const keyframesCSS = `
@keyframes particle-float {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-50vh) translateX(var(--drift));
  }
  100% {
    transform: translateY(-100vh) translateX(0);
  }
}

@keyframes line-pulse {
  0%, 100% {
    opacity: var(--line-opacity);
  }
  50% {
    opacity: 0;
  }
}
`;

export default function ParticleBackground() {
  const prefersReducedMotion = useReducedMotion();

  const particles = useMemo(() => generateParticles(), []);
  const lines = useMemo(() => generateLines(), []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ pointerEvents: 'none' }}>
      <style dangerouslySetInnerHTML={{ __html: keyframesCSS }} />

      {/* Connecting lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {lines.map((line) => (
          <line
            key={`line-${line.id}`}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            strokeWidth={1}
            style={{
              stroke: CYAN,
              opacity: line.opacity,
              ['--line-opacity' as string]: line.opacity,
              animation: prefersReducedMotion
                ? 'none'
                : `line-pulse ${20 + line.id * 4}s ease-in-out infinite`,
              animationDelay: `${-line.id * 3}s`,
            }}
          />
        ))}
      </svg>

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={`particle-${p.id}`}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            backgroundColor: p.color === 'cyan' ? CYAN : '#ffffff',
            opacity: p.opacity,
            ['--drift' as string]: `${p.drift}px`,
            animation: prefersReducedMotion
              ? 'none'
              : `particle-float ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            willChange: prefersReducedMotion ? 'auto' : 'transform',
          }}
        />
      ))}
    </div>
  );
}
