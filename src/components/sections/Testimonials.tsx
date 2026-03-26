'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import { staggerContainer, cardReveal } from '@/lib/animations';

const testimonials = PROJECTS.slice(0, 3).map((project) => ({
  id: project.id,
  quote: project.testimonial.quote,
  author: project.testimonial.author,
  sector: project.sector,
}));

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-white py-[80px] sm:py-[110px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-3">
            Témoignages
          </p>
          <h2 className="font-serif text-[32px] sm:text-[50px] leading-[1.08] font-normal text-breton-navy tracking-[-0.025em]">
            Ce qu&apos;en disent nos clients
          </h2>
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial={shouldReduceMotion ? undefined : 'hidden'}
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((testimonial) => (
            <motion.blockquote
              key={testimonial.id}
              variants={shouldReduceMotion ? undefined : cardReveal}
              className="bg-white border border-breton-sand rounded-2xl p-7
                         hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(12,31,63,0.1)]
                         transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <Quote className="w-8 h-8 text-breton-copper-light mb-5 flex-shrink-0" />
              <p className="text-[15px] text-breton-slate leading-relaxed italic">
                &laquo;&nbsp;{testimonial.quote}&nbsp;&raquo;
              </p>
              <div className="mt-5 pt-4 border-t border-breton-sand">
                <p className="text-[15px] font-semibold text-breton-navy">
                  {testimonial.author}
                </p>
                <p className="text-[13px] text-breton-granite mt-0.5">{testimonial.sector}</p>
              </div>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
