'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type CTAProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'gradient' | 'glass';
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

/** Magnetic CTA button with a gradient sheen sweep on hover. Min 60px tall (elder-friendly). */
export function CTAButton({
  children,
  href = '#',
  variant = 'gradient',
  className,
  onClick,
  ariaLabel,
}: CTAProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.2, y: y * 0.28 });
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.4 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'group relative inline-flex min-h-[58px] items-center justify-center gap-2 overflow-hidden rounded-[16px] px-7 py-3.5 text-base font-semibold transition-colors',
        variant === 'gradient'
          ? 'warm-gradient text-[#2a1306] shadow-warm'
          : 'glass text-foreground hover:bg-foreground/[0.06]',
        className,
      )}
    >
      {variant === 'gradient' && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
}
