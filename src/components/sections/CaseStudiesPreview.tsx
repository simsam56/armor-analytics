'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '@/data/case-studies';
import { LazyVideo } from '@/components/ui/LazyVideo';
import { staggerContainer, cardReveal } from '@/lib/animations';

const videoCases = CASE_STUDIES.filter((c) => c.image.endsWith('.mp4')).slice(0, 3);

export function CaseStudiesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-white py-16 sm:py-[110px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-3">
              R&eacute;alisations
            </p>
            <h2 className="font-serif text-[36px] sm:text-[56px] leading-[1.06] font-normal text-breton-navy tracking-[-0.025em]">
              Cas clients
            </h2>
          </div>
          <Link
            href="/cas-clients"
            className="text-sm text-breton-navy font-semibold whitespace-nowrap hover:text-breton-emerald transition-colors"
          >
            Tout voir &rarr;
          </Link>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={isInView ? 'visible' : 'hidden'}
        >
          {videoCases.map((cs) => (
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
                <LazyVideo
                  src={cs.image}
                  className="aspect-video bg-breton-foam"
                />
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
      </div>
    </section>
  );
}
