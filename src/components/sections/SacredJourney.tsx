'use client';

import Image from 'next/image';
import { Reveal, RevealItem } from '@/components/Reveal';
import { CTAButton } from '@/components/CTAButton';
import { OmDivider } from '@/components/OmDivider';
import { fadeUp, scaleIn } from '@/lib/motion';
import { SACRED_POINTS } from '@/data/content';
import { GAME_LOGIN_URL } from '@/lib/utils';

export function SacredJourney() {
  return (
    <section id="journey" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <OmDivider className="mb-6" />
        <Reveal stagger>
          <RevealItem
            as="span"
            className="inline-block text-sm font-bold uppercase tracking-[0.18em] text-gold"
          >
            Interactive Road Map
          </RevealItem>
          <RevealItem>
            <h2 className="mt-3 text-balance text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight">
              Discover the Sacred Journey
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              This is more than a game — it is a spiritual and educational
              journey. Progressing connects you directly to India&apos;s sacred
              landmarks: <span className="text-foreground">108 Shaktipeethas</span>{' '}
              &amp; <span className="text-foreground">12 Jyotirlingas</span>.
            </p>
          </RevealItem>
        </Reveal>
      </div>

      {/* hero map showcase */}
      <Reveal
        variants={scaleIn}
        className="relative mx-auto mt-14 max-w-5xl"
      >
        <div className="aura absolute inset-x-10 top-10 -z-10 h-72 rounded-full" />
        <p className="mb-4 text-center font-hindi text-gold">
          🕉️ श्री राम कार्य सिद्धि — The Sacred Map of 108 Shaktipeethas &amp; 12 Jyotirlingas
        </p>
        <div className="overflow-hidden rounded-[26px] border border-gold/25 shadow-warm">
          <Image
            src="/img/shaktipith.png"
            alt="The Ram Naam sacred map — Hanuman Ji flying across the 108 Shaktipeethas and 12 Jyotirlingas"
            width={1200}
            height={720}
            className="h-auto w-full object-cover"
            unoptimized
          />
        </div>
      </Reveal>

      {/* three pillars */}
      <Reveal stagger className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
        {SACRED_POINTS.map((p) => (
          <RevealItem
            key={p.title}
            variants={fadeUp}
            className="rounded-[22px] glass p-7 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="grid size-14 place-items-center rounded-2xl bg-foreground/[0.05] text-3xl">
              {p.icon}
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{p.body}</p>
          </RevealItem>
        ))}
      </Reveal>

      <div className="mt-12 text-center">
        <CTAButton href={GAME_LOGIN_URL}>
          Unlock India&apos;s Heritage <span aria-hidden>→</span>
        </CTAButton>
      </div>
    </section>
  );
}
