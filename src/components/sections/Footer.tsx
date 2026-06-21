'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Logo } from '@/components/Brand';
import { FOOTER_COLUMNS, BLESSING } from '@/data/content';
import { cn } from '@/lib/utils';

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative border-t border-gold/15 bg-[#120a07] px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* blessing */}
        <p className="mb-12 text-center font-hindi text-lg text-gold/90 sm:text-xl">
          {BLESSING}
        </p>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Logo size={52} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A modern, educational gaming experience by Astroite Gaming —
              bridging timeless spiritual tradition with the modern digital age,
              for every generation.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={cn(
                        'text-sm transition-colors hover:text-foreground',
                        'accent' in l && l.accent
                          ? 'font-semibold text-gold'
                          : 'text-muted-foreground',
                      )}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-gold/10 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Astroite Gaming. All rights reserved. Made with
            devotion · भक्ति के साथ बनाया गया.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#home"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-40 hidden size-12 place-items-center rounded-full warm-gradient text-[#2a1306] shadow-warm lg:grid"
            aria-label="Back to top"
          >
            <ArrowUp className="size-5" />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
