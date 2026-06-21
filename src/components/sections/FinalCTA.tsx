'use client';

import { motion } from 'motion/react';
import { CTAButton } from '@/components/CTAButton';
import { GradientMesh } from '@/components/GradientMesh';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { GAME_LOGIN_URL } from '@/lib/utils';

export function FinalCTA() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative px-5 py-24 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] warm-gradient px-6 py-20 text-center shadow-warm sm:px-10">
        <GradientMesh oms className="opacity-50 mix-blend-soft-light" />

        {/* big breathing ॐ aura */}
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-hindi text-[clamp(8rem,26vw,20rem)] text-white/10 animate-om-breathe"
          aria-hidden="true"
        >
          ॐ
        </span>

        {/* drawing arc */}
        <svg
          viewBox="0 0 600 120"
          className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-20 w-full max-w-2xl opacity-30"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M20 100 L160 70 L300 82 L440 30 L580 14"
            stroke="#fff8e7"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduced ? 0 : 1.4, ease: 'easeInOut' }}
          />
        </svg>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative font-display text-balance text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-tight text-[#2a1306]"
        >
          Start Your Spiritual Devotion Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto mt-4 max-w-xl text-pretty text-lg text-[#3a1a00]/85"
        >
          Connect with your roots, build mental clarity, and learn India&apos;s
          heritage. Join devotees chanting Ram Naam — free, forever.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <CTAButton
            href={GAME_LOGIN_URL}
            variant="glass"
            className="border-transparent bg-[#2a1306] text-cream hover:bg-[#3a1a08]"
          >
            <span className="font-hindi">अभी जप शुरू करें</span> · Login to Play
          </CTAButton>
          <CTAButton
            href="#how"
            variant="glass"
            className="border-[#2a1306]/30 bg-transparent text-[#2a1306] hover:bg-[#2a1306]/10"
          >
            How it Works
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
