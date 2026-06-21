import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind class names with conflict resolution. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** The single destination every primary CTA navigates to: the game login. */
export const GAME_LOGIN_URL = 'https://astroite-gaming-60066817624.catalystserverless.in';

/**
 * Format a number with Indian-style digit grouping (e.g. 1,08,000).
 * Used for the devotional chant counters.
 */
export function formatIndian(n: number): string {
  return Math.round(n).toLocaleString('en-IN');
}
