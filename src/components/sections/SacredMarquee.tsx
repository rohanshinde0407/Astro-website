'use client';

import { motion } from 'motion/react';
import { SACRED_NAMES } from '@/data/content';

export function SacredMarquee() {
  return (
    <section
      className="border-y border-gold/12 bg-[#1a100b] py-12"
      aria-label="Sacred sites you can awaken"
    >
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
        The sacred geography your chants awaken
      </p>

      <div className="relative flex flex-col gap-5">
        <MarqueeRow direction="left" />
        <MarqueeRow direction="right" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1a100b] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1a100b] to-transparent" />
      </div>
    </section>
  );
}

function MarqueeRow({ direction }: { direction: 'left' | 'right' }) {
  const row = [...SACRED_NAMES, ...SACRED_NAMES];
  return (
    <div className="group flex overflow-hidden">
      <motion.div
        className="flex shrink-0 items-center gap-10 pr-10 group-hover:[animation-play-state:paused]"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
      >
        {[...row, ...row].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap text-lg font-medium text-muted-foreground transition-colors hover:text-gold"
          >
            {name}
            <span className="font-hindi text-gold/40">ॐ</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
