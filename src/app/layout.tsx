import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
  },
  title: {
    default: 'Ragen - Software Studio',
    template: '%s - Ragen',
  },
  description:
    'A development studio that operates at the intersection of engineering precision and design craft. We build software for startups, scale-ups, and enterprises.',
  metadataBase: new URL('https://ragen.org'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'software development',
    'web development',
    'mobile app development',
    'SaaS development',
    'UI/UX design',
    'AI integration',
    'cloud DevOps',
    'custom software',
    'white label development',
    'outsourcing',
  ],
  openGraph: {
    title: 'Ragen - Software Studio',
    description:
      'A development studio at the intersection of engineering precision and design craft.',
    url: 'https://ragen.org',
    siteName: 'Ragen',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Ragen - Software Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ragen - Software Studio',
    description:
      'A development studio at the intersection of engineering precision and design craft.',
    images: ['/hero-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased" style={{background:'#0D0D0D', color:'#FFFFFF'}}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Ragen',
                url: 'https://ragen.org',
                email: 'ragen@ragen.org',
                description:
                  'A development studio that operates at the intersection of engineering precision and design craft. We build software for startups, scale-ups, and enterprises.',
                foundingDate: '2020',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'IN',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'ragen@ragen.org',
                  contactType: 'sales',
                },
                sameAs: [
                  'https://instagram.com/ragen.org',
                  'https://facebook.com/ragen.org',
                  'https://linkedin.com/company/ragen',
                  'https://twitter.com/ragen_org',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Ragen',
                url: 'https://ragen.org',
                description:
                  'A development studio at the intersection of engineering precision and design craft.',
              },
            ]),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
