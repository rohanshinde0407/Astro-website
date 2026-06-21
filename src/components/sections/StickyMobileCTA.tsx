'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GAME_LOGIN_URL } from '@/lib/utils';

/**
 * Bottom-fixed Play bar shown only on phones/tablets (the desktop nav already
 * has a visible Play button). Appears after the hero scrolls away and respects
 * the iOS safe-area inset.
 */
export function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/20 bg-background/90 px-4 pt-3 backdrop-blur-xl lg:hidden"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        >
          <a
            href={GAME_LOGIN_URL}
            className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl warm-gradient text-lg font-bold text-[#2a1306] shadow-warm active:scale-[0.98]"
          >
            <span className="font-hindi">खेलें</span> · Login to Play
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
