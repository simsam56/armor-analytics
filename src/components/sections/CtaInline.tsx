import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCalendlyUrl } from '@/lib/constants';

interface CtaInlineProps {
  title?: string;
  subtitle?: string;
}

export function CtaInline({
  title = 'Ces résultats vous parlent ?',
  subtitle = '30 minutes pour en discuter. Gratuit, sans engagement.',
}: CtaInlineProps) {
  return (
    <div className="py-12 bg-breton-foam">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-semibold text-breton-navy">{title}</p>
        <p className="mt-1 text-sm text-breton-slate/70">{subtitle}</p>
        <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="sm" className="bg-breton-navy hover:bg-breton-slate gap-2">
            <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
              <Calendar className="h-4 w-4" />
              Diagnostic gratuit
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" className="border-breton-navy/20 gap-2">
            <Link href="/contact">
              Nous contacter
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
