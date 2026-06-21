'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { EASE } from '@/lib/motion';

type CounterProps = {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Use Indian digit grouping (1,08,000) instead of international. */
  indian?: boolean;
  className?: string;
};

/** Counts up from `from` to `to` when scrolled into view. */
export function Counter({
  to,
  from = 0,
  duration = 1.8,
  decimals = 0,
  prefix = '',
  suffix = '',
  indian = false,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(to);
      return;
    }
    const controls = animate(from, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, from, to, duration, reduced]);

  const formatted = display.toLocaleString(indian ? 'en-IN' : 'en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
