import type { Metadata, Viewport } from 'next';
import { Cinzel_Decorative, Tiro_Devanagari_Hindi, Mukta } from 'next/font/google';
import './globals.css';
import hanumanLogo from '@/assets/logo-hanuman.webp';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { StickyMobileCTA } from '@/components/sections/StickyMobileCTA';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getOrganizationSchema, getWebsiteSchema } from '@/utils/schema';

const cinzel = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const tiro = Tiro_Devanagari_Hindi({
  weight: '400',
  subsets: ['devanagari', 'latin'],
  variable: '--font-tiro',
  display: 'swap',
});

const mukta = Mukta({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['devanagari', 'latin'],
  variable: '--font-mukta',
  display: 'swap',
});

const SITE_URL = 'https://ramnaam.astroite.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'RamNaam Chanting Game | Devotional Gaming by Astroite Gaming',
  description:
    'Namaste & Sita Ram. Chant Ram Naam in a calm, beautiful game — every tap is one Ram chant that never resets. Fly with Hanuman Ji and unlock all 108 Shaktipeethas & 12 Jyotirlingas. Free, made for elders and children.',
  keywords: [
    'Ram Naam chanting game',
    'Hanuman Ji game',
    'devotional game',
    'Shaktipeethas',
    'Jyotirlingas',
    'Ram chant counter',
    'spiritual game India',
    'Astroite Gaming',
  ],
  openGraph: {
    type: 'website',
    title: 'RamNaam Chanting Game — हनुमान जी की यात्रा',
    description:
      'Every tap is one Ram chant. Fly with Hanuman Ji, unlock 108 Shaktipeethas & 12 Jyotirlingas, and find inner peace. Free & made for all generations.',
    url: SITE_URL,
    siteName: 'RamNaam Chanting Game',
    images: [
      {
        url: hanumanLogo.src,
        width: hanumanLogo.width,
        height: hanumanLogo.height,
        alt: 'RamNaam — Hanuman Ji medallion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [hanumanLogo.src],
    title: 'RamNaam Chanting Game — हनुमान जी की यात्रा',
    description:
      'Every tap is one Ram chant. Fly with Hanuman Ji and unlock India\'s sacred geography. Free & made for all generations.',
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: '#160d09',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema({
    name: 'Astroite Gaming',
    url: SITE_URL,
    logo: `${SITE_URL}${hanumanLogo.src}`,
    description:
      'Astroite Gaming is a modern, educational gaming studio bridging the gap between ancient roots and modern vibes through interactive devotional games.',
  });

  const websiteSchema = getWebsiteSchema({
    name: 'RamNaam Chanting Game',
    url: SITE_URL,
  });

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${tiro.variable} ${mukta.variable}`}
    >
      <head>
        <SchemaMarkup schema={[orgSchema, websiteSchema]} />
      </head>
      <body>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-saffron focus:px-4 focus:py-2 focus:font-semibold focus:text-[#2a1306]"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="home">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
