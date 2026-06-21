'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal, RevealItem } from '@/components/Reveal';
import { CTAButton } from '@/components/CTAButton';
import { OmDivider } from '@/components/OmDivider';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { HOW_STEPS } from '@/data/content';
import { GAME_LOGIN_URL } from '@/lib/utils';

export function HowToPlay() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 60%'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [0, 1]);

  return (
    <section id="how" className="relative bg-[#1a100b] px-5 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <OmDivider className="mb-6" />
        <Reveal stagger>
          <RevealItem
            as="span"
            className="inline-block text-sm font-bold uppercase tracking-[0.18em] text-gold"
          >
            कैसे खेलें · How to Play
          </RevealItem>
          <RevealItem>
            <h2 className="mt-3 text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight">
              Three gentle steps to begin
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              No rules to learn, no pressure to feel. Just tap, fly, and grow
              your devotion — exactly as simple as a mala in your hand.
            </p>
          </RevealItem>
        </Reveal>
      </div>

      <div ref={ref} className="relative mx-auto mt-16 max-w-2xl">
        {/* progress line */}
        <div className="absolute left-[31px] bottom-6 top-6 w-0.5 bg-foreground/10">
          <motion.div
            className="h-full w-full origin-top warm-gradient"
            style={{ scaleY }}
          />
        </div>

        <ul className="space-y-6">
          {HOW_STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-5"
            >
              <span className="z-10 grid size-16 shrink-0 place-items-center rounded-2xl warm-gradient shadow-warm">
                <s.icon className="size-7 text-[#2a1306]" />
              </span>
              <div className="flex-1 rounded-[22px] glass p-5">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-xl font-bold">
                    <span className="mr-2 text-gold">{s.n}.</span>
                    {s.title}
                  </h3>
                  <span className="font-hindi text-base text-gold/80">{s.hi}</span>
                </div>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <CTAButton href={GAME_LOGIN_URL}>
            <span className="font-hindi">खेलें</span> · Begin Your Journey
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
