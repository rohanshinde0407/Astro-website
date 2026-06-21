'use client';

import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { CTAButton } from '@/components/CTAButton';
import { fadeLeft, fadeRight } from '@/lib/motion';
import { GAME_LOGIN_URL } from '@/lib/utils';

export function Vision() {
  return (
    <section id="vision" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal variants={fadeLeft}>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Spiritual Roots
          </span>
          <h2 className="mt-3 text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight">
            Ancient Roots with{' '}
            <span className="warm-gradient-text">Modern Vibes</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Our grandparents found inner peace, clarity, and deep family bonding
            by chanting the holy name using a traditional Beeds Mala. In today&apos;s
            fast-paced world, we want to preserve that beautiful practice.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Astroite Gaming has bridged the gap by introducing a modern,
            educational solution — transforming a timeless spiritual practice
            into an engaging digital experience, making daily devotion
            accessible, interactive, and meaningful for all generations.
          </p>
          <div className="mt-8">
            <CTAButton href={GAME_LOGIN_URL}>
              Start Chanting Now <span aria-hidden>→</span>
            </CTAButton>
          </div>
        </Reveal>

        <Reveal variants={fadeRight} className="relative mx-auto w-full max-w-sm">
          <div className="aura absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full" />
          <div className="overflow-hidden rounded-[26px] border border-gold/25 shadow-warm animate-pulse-glow">
            <Image
              src="/img/hanuman-stand.png"
              alt="Lord Hanuman seated, representing spiritual stability and strength"
              width={440}
              height={560}
              className="h-auto w-full object-cover"
              unoptimized
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
