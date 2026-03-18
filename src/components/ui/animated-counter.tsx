'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, duration = 1500, className = '' }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const animateValue = useCallback(() => {
    const match = value.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const [, sign, numStr, suffix] = match;
    const targetNum = parseFloat(numStr);
    const isDecimal = numStr.includes('.');
    const decimalPlaces = isDecimal ? numStr.split('.')[1].length : 0;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = targetNum * easeOut;

      if (isDecimal) {
        setDisplayValue(`${sign}${currentValue.toFixed(decimalPlaces)}${suffix}`);
      } else {
        setDisplayValue(`${sign}${Math.round(currentValue)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateValue();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, animateValue]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
