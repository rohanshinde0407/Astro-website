'use client';

import { Reveal, RevealItem } from '@/components/Reveal';
import { OmDivider } from '@/components/OmDivider';
import { fadeUp } from '@/lib/motion';
import { ELDER_FEATURES } from '@/data/content';

export function ForElders() {
  return (
    <section id="elders" className="relative px-5 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <OmDivider className="mb-6" />
        <Reveal stagger>
          <RevealItem
            as="span"
            className="inline-block text-sm font-bold uppercase tracking-[0.18em] text-gold"
          >
            बुज़ुर्गों और बच्चों के लिए
          </RevealItem>
          <RevealItem>
            <h2 className="mt-3 text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight">
              Made for Elders &amp; Children
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Every decision serves them first. Big, calm, slow, and forgiving —
              so a grandparent and a grandchild can chant side by side.
            </p>
          </RevealItem>
        </Reveal>
      </div>

      <Reveal stagger className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
        {ELDER_FEATURES.map((f) => (
          <RevealItem
            key={f.title}
            variants={fadeUp}
            className="flex gap-4 rounded-[20px] glass p-6"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-foreground/[0.05]">
              <f.icon className="size-6 text-saffron" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
