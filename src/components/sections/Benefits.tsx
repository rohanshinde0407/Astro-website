'use client';

import { Reveal, RevealItem } from '@/components/Reveal';
import { CTAButton } from '@/components/CTAButton';
import { fadeUp } from '@/lib/motion';
import { BENEFITS } from '@/data/content';
import { GAME_LOGIN_URL } from '@/lib/utils';

export function Benefits() {
  return (
    <section
      id="benefits"
      className="relative border-y border-gold/12 bg-[#1a100b] px-5 py-16 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* AEO direct-answer block */}
        <Reveal className="mx-auto mb-16 max-w-3xl rounded-r-2xl border-l-4 border-saffron bg-foreground/[0.04] p-6">
          <p className="text-lg leading-relaxed text-foreground">
            <strong className="text-saffron">
              How does the Ram Naam game connect modern gaming and devotion?
            </strong>{' '}
            It bridges the generational gap by uniting traditional Beeds Mala
            chanting with gentle digital progression. Every completed chant
            guides you through India&apos;s sacred geography — offering mental
            clarity, sharper decision-making, and inner peace in an interactive,
            family-friendly format.
          </p>
        </Reveal>

        <div className="text-center">
          <Reveal stagger>
            <RevealItem
              as="span"
              className="inline-block text-sm font-bold uppercase tracking-[0.18em] text-gold"
            >
              The Gift of Chanting
            </RevealItem>
            <RevealItem>
              <h2 className="mt-3 text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight">
                Why Chant <span className="warm-gradient-text">Ram Naam</span>?
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Beyond the digital milestones, the act of chanting brings
                profound benefits to your mind and your day.
              </p>
            </RevealItem>
          </Reveal>
        </div>

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <RevealItem
              key={b.title}
              variants={fadeUp}
              className="group rounded-[22px] glass p-7 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="grid size-14 place-items-center rounded-2xl bg-foreground/[0.05] transition-colors group-hover:bg-saffron/15">
                <b.icon className="size-7 text-saffron" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{b.body}</p>
            </RevealItem>
          ))}
        </Reveal>

        <div className="mt-12 text-center">
          <CTAButton href={GAME_LOGIN_URL}>
            Chant for Inner Peace Now
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
