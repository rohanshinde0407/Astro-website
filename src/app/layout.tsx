import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getOrganizationSchema, getWebsiteSchema } from '@/utils/schema';

export const metadata: Metadata = {
  title: 'RamNaam Chanting Game | Devotional Gaming by Astroite Gaming',
  description:
    'Namaste & Sita Ram. Transform traditional spiritual chanting into an interactive digital experience. Chant RamNaam daily, learn about India\'s 108 Shaktipeethas & 12 Jyotirlingas, and find inner peace.',
  metadataBase: new URL('https://ramnaam.astroite.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema({
    name: 'Astroite Gaming',
    url: 'https://ramnaam.astroite.com',
    logo: 'https://ramnaam.astroite.com/logo.png',
    description:
      'Astroite Gaming is a modern, educational gaming studio bridging the gap between ancient roots and modern vibes through interactive devotional games.',
  });

  const websiteSchema = getWebsiteSchema({
    name: 'RamNaam Chanting Game',
    url: 'https://ramnaam.astroite.com',
  });

  return (
    <html lang="en">
      <head>
        <SchemaMarkup schema={[orgSchema, websiteSchema]} />
      </head>
      <body>
        <div className="app-container">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
