'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Redirects legacy /about page requests to the single-page hash target.
 */
export default function RedirectAbout() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/#vision');
  }, [router]);
  return null;
}
