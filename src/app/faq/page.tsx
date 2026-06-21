'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Redirects legacy /faq page requests to the single-page hash target.
 */
export default function RedirectFAQ() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/#faq');
  }, [router]);
  return null;
}
