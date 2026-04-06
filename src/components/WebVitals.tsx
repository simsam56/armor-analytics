'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { trackEvent } from '@/components/Analytics';

export function WebVitals() {
  useReportWebVitals((metric) => {
    trackEvent('web_vitals', {
      metric_name: metric.name,
      metric_value: Math.round(metric.value),
      metric_rating: metric.rating || 'unknown',
    });
  });

  return null;
}
