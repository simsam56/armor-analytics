import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ_ITEMS } from '@/lib/constants';

// Group FAQ items by category
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

const categoryOrder = [
  'Fonctionnement',
  'Tarifs',
  'Prérequis',
  'Confidentialité',
  'Déroulement',
  'Résultats',
];

// Generate FAQ schema.org structured data
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

export function FAQ() {
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
          <p className="mt-4 text-lg text-slate-600">
            On répond clairement à vos questions sur notre fonctionnement, nos tarifs et nos
            engagements.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {categoryOrder.map((category) => {
            const items = groupedFAQ[category];
            if (!items || items.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-breton-emerald mb-4">
                  {category}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {items.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category}-${index}`}
                      className="bg-white rounded-xl mb-2 px-5 border border-slate-200"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
