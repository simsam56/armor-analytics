'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ_ITEMS } from '@/lib/constants';

const groupedFAQ = FAQ_ITEMS.reduce(
  (acc, item) => {
    const category = item.category || 'Autres';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  },
  {} as Record<string, typeof FAQ_ITEMS>
);

const CATEGORIES = [
  'Tout',
  'Fonctionnement',
  'Tarifs',
  'Prérequis',
  'Confidentialité',
  'Déroulement',
  'Résultats',
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const INITIAL_VISIBLE = 5;

export function FAQ() {
  const [activeTab, setActiveTab] = useState('Tout');
  const [showAll, setShowAll] = useState(false);

  const filteredItems =
    activeTab === 'Tout'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeTab);

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, INITIAL_VISIBLE);
  const hasMore = filteredItems.length > INITIAL_VISIBLE;

  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>

        {/* Category tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.filter(
            (cat) => cat === 'Tout' || (groupedFAQ[cat] && groupedFAQ[cat].length > 0)
          ).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setShowAll(false);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === cat
                  ? 'bg-breton-emerald text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {visibleItems.map((item, index) => (
              <AccordionItem
                key={`${item.category}-${index}`}
                value={`${item.category}-${index}`}
                className="bg-white rounded-xl px-5 border border-slate-200"
              >
                <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:text-breton-emerald py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Show more */}
        {hasMore && !showAll && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="text-sm font-medium text-breton-emerald hover:text-breton-moss transition-colors"
            >
              Voir {filteredItems.length - INITIAL_VISIBLE} questions de plus →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
