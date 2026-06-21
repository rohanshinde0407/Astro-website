'use client';

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** when true, children animate with a stagger container */
  stagger?: boolean;
  variants?: Variants;
  as?: 'div' | 'section' | 'ul' | 'li' | 'span';
  amount?: number;
};

/** Fade/slide an element (or stagger its children) into view once. */
export function Reveal({
  children,
  className,
  stagger = false,
  variants,
  as = 'div',
  amount = 0.15,
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants ?? (stagger ? staggerContainer : fadeUp)}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  variants = fadeUp,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: 'div' | 'li' | 'span';
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={cn(className)} variants={variants}>
      {children}
    </MotionTag>
  );
}
