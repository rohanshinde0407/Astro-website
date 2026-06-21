'use client';

import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { CTAButton } from '@/components/CTAButton';
import { fadeLeft, fadeRight } from '@/lib/motion';
import { GAME_LOGIN_URL } from '@/lib/utils';

export function GameCover() {
  return (
    <section className="relative border-y border-gold/12 bg-[#1a100b] px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal variants={fadeLeft} className="relative mx-auto w-full max-w-lg">
          <div className="aura absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full" />
          <div className="overflow-hidden rounded-[26px] border border-gold/30 shadow-warm transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/img/cover.png"
              alt="Official Ram Naam game cover art — Hanuman Ji at sunrise"
              width={560}
              height={360}
              className="h-auto w-full object-cover"
              unoptimized
            />
          </div>
        </Reveal>

        <Reveal variants={fadeRight}>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Astroite Gaming
          </span>
          <h2 className="mt-3 text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight">
            Bridging the Generational Gap
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We believe modern gaming can serve a higher purpose. By combining the
            immersive nature of digital play with historical, cultural, and
            spiritual depth, we make devotion both accessible and engaging.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            The <span className="font-semibold text-foreground">Ram Naam</span>{' '}
            game guides players through milestones — unlocking historical details
            and spiritual significance — so players gain both mental clarity and
            cultural values along the way.
          </p>
          <div className="mt-8">
            <CTAButton href={GAME_LOGIN_URL}>
              <span className="font-hindi">खेलें</span> · Login to Play
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
