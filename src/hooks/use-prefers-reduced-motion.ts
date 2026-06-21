'use client';

import { useReducedMotion } from 'motion/react';

/**
 * Returns true when the user prefers reduced motion.
 * Used to gate looping / parallax animations down to simple fades —
 * important for the elderly & children this experience is built for.
 */
export function usePrefersReducedMotion() {
  return useReducedMotion() ?? false;
}
