'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '@/data/case-studies';
import { LazyVideo } from '@/components/ui/LazyVideo';
import { staggerContainer, cardReveal } from '@/lib/animations';

export function CaseStudyGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={prefersReducedMotion ? undefined : staggerContainer}
      initial={prefersReducedMotion ? undefined : 'hidden'}
      animate={isInView ? 'visible' : 'hidden'}
    >
      {caseStudies.map((cs) => (
        <motion.article
          key={cs.slug}
          variants={prefersReducedMotion ? undefined : cardReveal}
        >
          <Link
            href={`/cas-clients/${cs.slug}`}
            className="group block rounded-[22px] border border-breton-sand bg-white overflow-hidden
              hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(12,31,63,0.1)]
              transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            {cs.image.endsWith('.mp4') ? (
              <LazyVideo src={cs.image} className="aspect-video bg-breton-foam" />
            ) : (
              <div className="aspect-video bg-breton-foam relative">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-5">
              <span className="text-[11px] text-breton-emerald font-semibold uppercase tracking-[0.08em]">
                {cs.sector} &middot; {cs.location}
              </span>
              <h3 className="font-serif text-lg text-breton-navy mt-1 group-hover:text-breton-emerald transition-colors">
                {cs.title}
              </h3>
              <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-breton-copper group-hover:gap-2 transition-all">
                Voir le cas <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}
