'use client';

import { motion } from 'motion/react';
import { Reveal, RevealItem } from '@/components/Reveal';
import { OmDivider } from '@/components/OmDivider';
import { SPRING } from '@/lib/motion';
import { BADGES } from '@/data/content';
import { cn, formatIndian } from '@/lib/utils';

export function Milestones() {
  return (
    <section id="milestones" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <OmDivider className="mb-6" />
        <Reveal stagger>
          <RevealItem
            as="span"
            className="inline-block text-sm font-bold uppercase tracking-[0.18em] text-gold"
          >
            पड़ाव · Milestone Badges
          </RevealItem>
          <RevealItem>
            <h2 className="mt-3 text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight">
              Your chants, a ladder of merit
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              From your first 108 to over a lakh — a blessing awaits at every
              milestone. Your count never resets; it only climbs.
            </p>
          </RevealItem>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        {/* central mala thread */}
        <span className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 sm:block" />

        <ul className="space-y-6 sm:space-y-10">
          {BADGES.map((b, i) => {
            const left = i % 2 === 0;
            return (
              <li
                key={b.count}
                className={cn(
                  'relative flex items-center gap-5 sm:w-1/2',
                  left ? 'sm:mr-auto sm:pr-10' : 'sm:ml-auto sm:flex-row-reverse sm:pl-10',
                )}
              >
                {/* medallion */}
                <motion.span
                  initial={{ scale: 0, rotate: -25, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={SPRING}
                  className="grid size-16 shrink-0 place-items-center rounded-full warm-gradient text-3xl shadow-glow"
                >
                  {b.icon}
                </motion.span>

                {/* card */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={cn(
                    'flex-1 rounded-[20px] glass p-5',
                    !left && 'sm:text-right',
                  )}
                >
                  <p className="font-display text-2xl font-black text-gold tabular-nums">
                    {formatIndian(b.count)}
                  </p>
                  <p className="font-display font-bold">{b.name}</p>
                  <p className="mt-1 font-hindi text-sm text-muted-foreground">
                    {b.toast}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
