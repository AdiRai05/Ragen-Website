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
  metadataBase: new URL('https://ragen-website.vercel.app'),
  openGraph: {
    title: 'Ragen - Software Studio',
    description:
      'A development studio at the intersection of engineering precision and design craft.',
    url: 'https://ragen-website.vercel.app',
    siteName: 'Ragen',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
