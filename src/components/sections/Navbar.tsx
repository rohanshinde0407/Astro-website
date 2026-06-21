'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Brand';
import { CTAButton } from '@/components/CTAButton';
import { NAV_LINKS } from '@/data/content';
import { GAME_LOGIN_URL, cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > lastY && y > 140) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: hidden && !open ? -110 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-gold/15 bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-300 lg:px-8',
          scrolled ? 'h-16' : 'h-20',
        )}
      >
        <a href="#home" aria-label="RamNaam home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton href={GAME_LOGIN_URL} className="px-5 py-2.5 text-sm">
            <span className="font-hindi">खेलें</span>
            <span className="text-[#2a1306]/70">·</span> Play Now
          </CTAButton>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-xl text-foreground lg:hidden"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-gold/15 bg-background/97 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                  >
                    <span>{l.label}</span>
                    <span className="font-hindi text-sm text-gold/70">{l.hi}</span>
                  </a>
                </li>
              ))}
              <li className="mt-2 px-1">
                <CTAButton
                  href={GAME_LOGIN_URL}
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-hindi">खेलें</span> · Play Now
                </CTAButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
