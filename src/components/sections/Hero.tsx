'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { CTAButton } from '@/components/CTAButton';
import { Counter } from '@/components/Counter';
import { GradientMesh } from '@/components/GradientMesh';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { GAME_LOGIN_URL } from '@/lib/utils';

const HEAD_WORDS: { w: string; accent: boolean }[] = [
  { w: 'Welcome', accent: false },
  { w: 'to', accent: false },
  { w: 'Ram', accent: true },
  { w: 'Naam', accent: true },
];

const CHIPS = ['108 Shaktipeethas', '12 Jyotirlingas', 'Free Forever', 'Made for Elders'];

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:pt-40 lg:px-8 lg:pb-28">
      <GradientMesh />
      {/* warm vignette toward the page below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-foreground/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-saffron" />
            </span>
            Namaste &amp; Sita Ram
          </motion.span>

          <h1 className="mt-6 text-balance font-display text-[clamp(2.7rem,6vw,5.2rem)] font-extrabold leading-[1.04] tracking-tight">
            {HEAD_WORDS.map(({ w, accent }, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={accent ? 'warm-gradient-text inline-block' : 'inline-block'}
              >
                {w}
                {i < HEAD_WORDS.length - 1 ? ' ' : ''}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Welcome to a sacred space where devotion meets the modern age. We are
            deeply grateful for the strength and vision to create a beautiful,
            immersive experience dedicated to the chanting of{' '}
            <span className="font-semibold text-foreground">Ram Naam</span> —
            where every tap is one holy chant that never resets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.78 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <CTAButton href={GAME_LOGIN_URL}>
              <span className="font-hindi">खेलें</span> · Login to Play
              <span aria-hidden>→</span>
            </CTAButton>
            <CTAButton href="#vision" variant="glass">
              Our Vision
            </CTAButton>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-9 flex flex-wrap gap-x-3 gap-y-2.5"
          >
            {CHIPS.map((c) => (
              <li
                key={c}
                className="rounded-full border border-gold/20 bg-foreground/[0.03] px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* visual */}
        <HeroVisual reduced={reduced} />
      </div>
    </section>
  );
}

function HeroVisual({ reduced }: { reduced: boolean }) {
  const arcPath = 'M28 250 L120 188 L196 214 L290 96 L372 52';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* aura */}
      <div className="aura absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full" />

      {/* the "game preview" glass card */}
      <div className="relative rounded-[26px] glass p-3 shadow-warm">
        {/* sky scene with flying Hanuman + rising chant arc */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#3a1404] via-[#7a2310] to-[#c7442e]" />
          <Image
            src="/img/hanuman-fly.png"
            alt="Hanuman Ji flying through a devotional sky"
            fill
            sizes="(max-width: 768px) 90vw, 28rem"
            className="object-cover object-center opacity-95"
            priority
            unoptimized
          />
          {/* rising chant arc */}
          <svg
            viewBox="0 0 400 300"
            className="absolute inset-0 h-full w-full overflow-visible"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="hero-arc" x1="0" y1="300" x2="400" y2="0">
                <stop offset="0%" stopColor="#ff7a1a" />
                <stop offset="55%" stopColor="#e8b04b" />
                <stop offset="100%" stopColor="#f5d9a6" />
              </linearGradient>
            </defs>
            <motion.path
              d={arcPath}
              stroke="url(#hero-arc)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0.9 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: reduced ? 0 : 1, delay: 0.7, ease: 'easeInOut' }}
              style={{ filter: 'drop-shadow(0 0 6px rgba(255,170,80,0.6))' }}
            />
            {!reduced && (
              <motion.text
                fontSize="22"
                fill="#fff3e8"
                initial={{ offsetDistance: '0%' }}
                animate={{ offsetDistance: '100%' }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1.7 }}
                style={{
                  offsetPath: `path('${arcPath}')`,
                  filter: 'drop-shadow(0 0 8px #ffce8a)',
                }}
              >
                ॐ
              </motion.text>
            )}
          </svg>

          {/* live chip */}
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/35 px-2.5 py-1 text-[0.7rem] font-medium text-cream backdrop-blur">
            <span className="size-1.5 rounded-full bg-saffron" /> Live · ॐ
          </span>

          {/* chant count overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 text-center">
            <p className="font-display text-3xl font-black text-cream drop-shadow">
              <Counter to={108} />
            </p>
            <p className="font-hindi text-sm text-cream/85">राम जप · Ram chants</p>
          </div>
        </div>

        {/* RAM button + mini stats */}
        <div className="mt-3 grid grid-cols-[1.1fr_1fr] gap-3">
          <div className="grid place-items-center rounded-2xl warm-gradient p-4 text-center shadow-glow animate-pulse-glow">
            <span className="font-display text-2xl font-black leading-none text-[#2a1306]">
              राम
            </span>
            <span className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#2a1306]/70">
              Tap to chant
            </span>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className="rounded-xl bg-foreground/[0.05] px-3 py-2">
              <p className="text-[0.65rem] text-muted-foreground">Chanted today</p>
              <p className="font-display text-lg font-bold tabular-nums text-gold">
                <Counter to={86400} indian />
              </p>
            </div>
            <div className="rounded-xl bg-foreground/[0.05] px-3 py-2">
              <p className="text-[0.65rem] text-muted-foreground">Inner peace</p>
              <p className="warm-gradient-text font-display text-lg font-bold tabular-nums">
                <Counter from={60} to={98} suffix="%" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
