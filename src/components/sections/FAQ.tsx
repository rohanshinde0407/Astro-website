'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { Reveal, RevealItem } from '@/components/Reveal';
import { OmDivider } from '@/components/OmDivider';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQPageSchema } from '@/utils/schema';
import { FAQS } from '@/data/content';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  const faqSchema = getFAQPageSchema({
    questions: FAQS.map((f) => ({ question: f.question, answer: f.answer })),
  });

  return (
    <section
      id="faq"
      className="relative border-t border-gold/12 bg-[#1a100b] px-5 py-24 lg:px-8 lg:py-32"
    >
      <SchemaMarkup schema={faqSchema} />

      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <OmDivider className="mb-6" />
          <Reveal stagger>
            <RevealItem
              as="span"
              className="inline-block text-sm font-bold uppercase tracking-[0.18em] text-gold"
            >
              प्रश्न · FAQ
            </RevealItem>
            <RevealItem>
              <h2 className="mt-3 text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight">
                Frequently Asked Questions
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Answers to common questions about the Ram Naam Chanting Game and
                its spiritual features.
              </p>
            </RevealItem>
          </Reveal>
        </div>

        <Reveal stagger className="mt-12 flex flex-col gap-4">
          {FAQS.map((item, i) => {
            const isOpen = active === i;
            return (
              <RevealItem
                key={i}
                className={cn(
                  'overflow-hidden rounded-[18px] border transition-colors',
                  isOpen
                    ? 'border-saffron/40 bg-foreground/[0.05]'
                    : 'border-gold/15 bg-foreground/[0.02] hover:border-gold/30',
                )}
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-saffron/15 text-saffron"
                  >
                    <Plus className="size-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
