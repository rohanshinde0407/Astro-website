'use client';

import { motion } from 'motion/react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { cn } from '@/lib/utils';

/**
 * Slow-drifting warm blooms (saffron · gold · temple-red) with faint
 * rising ॐ glyphs — the ambient sacred backdrop behind hero / CTA bands.
 */
export function GradientMesh({
  className,
  oms = true,
}: {
  className?: string;
  oms?: boolean;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 overflow-hidden',
        className,
      )}
      aria-hidden="true"
    >
      {/* saffron bloom */}
      <motion.div
        className="absolute -left-32 -top-24 h-[34rem] w-[34rem] rounded-full opacity-[0.22] blur-[120px]"
        style={{ background: 'var(--saffron-bright)' }}
        animate={reduced ? undefined : { x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* gold bloom */}
      <motion.div
        className="absolute left-1/3 top-10 h-[30rem] w-[30rem] rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: 'var(--gold)' }}
        animate={reduced ? undefined : { x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 23, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* temple-red bloom */}
      <motion.div
        className="absolute -right-20 top-1/3 h-[26rem] w-[26rem] rounded-full opacity-[0.18] blur-[110px]"
        style={{ background: 'var(--temple-red)' }}
        animate={reduced ? undefined : { x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut' }}
      />

      {oms && !reduced && (
        <div className="absolute inset-0">
          {OMS.map((o, i) => (
            <motion.span
              key={i}
              className="absolute select-none font-hindi text-gold/40"
              style={{ left: `${o.x}%`, top: `${o.y}%`, fontSize: o.size }}
              animate={{ y: [0, -40, 0], opacity: [0.12, 0.5, 0.12] }}
              transition={{
                duration: o.dur,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: o.delay,
              }}
            >
              ॐ
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
}

const OMS = [
  { x: 10, y: 28, size: '1.6rem', dur: 7, delay: 0 },
  { x: 26, y: 64, size: '1.1rem', dur: 8.5, delay: 1.2 },
  { x: 44, y: 20, size: '2rem', dur: 7.8, delay: 0.6 },
  { x: 63, y: 70, size: '1.3rem', dur: 9, delay: 2 },
  { x: 80, y: 34, size: '1.7rem', dur: 8, delay: 0.3 },
  { x: 88, y: 62, size: '1.1rem', dur: 7.4, delay: 1.6 },
  { x: 54, y: 46, size: '1.4rem', dur: 8.2, delay: 0.9 },
];
