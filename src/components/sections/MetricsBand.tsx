'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { KEY_METRICS } from '@/lib/constants';

interface MetricItem {
  value: string;
  label: string;
}

const METRICS: MetricItem[] = [
  { value: KEY_METRICS.timesSaved, label: KEY_METRICS.timesSavedContext },
  { value: KEY_METRICS.errorReduction, label: KEY_METRICS.errorReductionContext },
  { value: KEY_METRICS.projectsDelivered, label: KEY_METRICS.projectsDeliveredContext },
  { value: KEY_METRICS.responseTime, label: KEY_METRICS.responseTimeContext },
];

function parseMetric(value: string): { prefix: string; num: number; suffix: string } {
  // Handles: "1h30", "145%", "3 jours", "7 ans", "4h", "12+"
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return { prefix: '', num: 0, suffix: value };
  return { prefix: match[1], num: parseInt(match[2], 10), suffix: match[3] };
}

function AnimatedCounter({ value, label }: MetricItem) {
  const shouldReduceMotion = useReducedMotion();
  const { prefix, num, suffix } = parseMetric(value);
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (shouldReduceMotion) {
      requestAnimationFrame(() => setDisplay(num));
      return;
    }
    const duration = 800;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * num));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [isInView, num, shouldReduceMotion]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="font-serif text-[32px] sm:text-[48px] font-normal text-breton-navy tracking-tight">
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="text-sm text-breton-slate/70 mt-1">{label}</span>
    </div>
  );
}

export function MetricsBand() {
  return (
    <section className="bg-breton-sand py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: row with separators */}
        <div className="hidden sm:flex justify-center items-center gap-16">
          {METRICS.map((metric, i) => (
            <Fragment key={metric.value}>
              <AnimatedCounter value={metric.value} label={metric.label} />
              {i < METRICS.length - 1 && (
                <div className="w-px self-stretch bg-breton-navy/10" />
              )}
            </Fragment>
          ))}
        </div>

        {/* Mobile: 2×2 grid */}
        <div className="grid grid-cols-2 gap-8 sm:hidden">
          {METRICS.map((metric) => (
            <AnimatedCounter key={metric.value} value={metric.value} label={metric.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
