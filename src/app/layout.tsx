import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';

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
  // Icons & manifest
  icons: {
    icon: '/favicon.png',
  },

  // Title template — used across all pages
  title: {
    default: 'Ragen — Software Development Company | Web, Mobile & SaaS Apps',
    template: '%s | Ragen',
  },
  description:
    'Ragen is a premium software development company based in India. We build custom web applications, SaaS platforms, mobile apps (iOS & Android), AI-powered solutions, and cloud infrastructure. Senior engineers only — every developer has 6+ years of experience. Hire us for your next project.',
  metadataBase: new URL('https://ragen.org'),
  alternates: {
    canonical: '/',
  },
  applicationName: 'Ragen',
  generator: 'Next.js',
  keywords: [
    'software development company',
    'custom software development',
    'web application development',
    'mobile app development company',
    'SaaS development company',
    'UI UX design services',
    'AI development company',
    'cloud DevOps services',
    'hire software developers',
    'software development india',
    'offshore software development',
    'white label software development',
    'agency software partner',
    'React Next.js development',
    'full stack development',
    'MVP development for startups',
    'startup software development',
    'enterprise software development',
    'custom SaaS platform',
    'mobile app development india',
    'Ragen',
    'ragen software',
  ],
  category: 'software',
  classification: 'Software Development',
  referrer: 'origin-when-cross-origin',
  creator: 'Ragen',
  publisher: 'Ragen',

  // Open Graph — rich social previews
  openGraph: {
    title: 'Ragen — Software Development Company | Web, Mobile, SaaS & AI',
    description:
      'Premium software development company. Custom web apps, SaaS platforms, mobile apps, AI integrations, and cloud DevOps. Senior engineers with 6+ years avg. Based in India, serving worldwide.',
    url: 'https://ragen.org',
    siteName: 'Ragen',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/eloxee-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Ragen — Premium Software Development Company — We build the software other companies wish they could',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@ragen_dev',
    creator: '@ragen_dev',
    title: 'Ragen — Software Development Company',
    description:
      'Premium software development. Web apps, SaaS, mobile, AI, cloud. Senior engineers, predictable delivery. Based in India.',
    images: ['/images/eloxee-1.jpg'],
  },

  // Robots & Crawling
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Site verification
  verification: {
    google: 'google4a49eff10750459c',
  },

  // Additional meta
  other: {
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body
        className="min-h-screen antialiased"
        style={{ background: '#0D0D0D', color: '#FFFFFF' }}
      >
        {/* ══════════════════════════════════════
            WORLD-CLASS STRUCTURED DATA (JSON-LD)
            ══════════════════════════════════════ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              // ── ProfessionalService (primary entity) ──
              {
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                '@id': 'https://ragen.org/#service',
                name: 'Ragen — Premium Software Development',
                alternateName: ['Ragen', 'Ragen Software', 'Ragen Dev'],
                url: 'https://ragen.org',
                email: 'ragen@ragen.org',
                telephone: '+91-70780-82045',
                description:
                  'Ragen is a premium software development company specializing in custom web applications, SaaS platforms, mobile apps, AI-powered solutions, and cloud DevOps. Every engineer has 6+ years of experience. Based in India, serving startups, agencies, and enterprises worldwide.',
                image: 'https://ragen.org/images/eloxee-1.jpg',
                logo: 'https://ragen.org/logo.png',
                foundingDate: '2020',
                foundingLocation: {
                  '@type': 'Place',
                  address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'IN',
                  },
                },
                areaServed: {
                  '@type': 'Country',
                  name: 'Worldwide',
                },
                priceRange: '$$',
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Software Development Services',
                  itemListElement: [
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Custom Web Development',
                        description:
                          'Full-stack web applications built with React, Next.js, Node.js, Python, Go. Not brochure sites — real software that runs businesses.',
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'SaaS Development',
                        description:
                          'Multi-tenant platforms, subscription engines, B2B products. From napkin to revenue.',
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Mobile App Development',
                        description:
                          'iOS and Android apps — native and cross-platform. Consumer-facing and enterprise.',
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'UI/UX Design',
                        description:
                          'Interface design, design systems, component libraries. Beautiful and functional.',
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'AI Solutions & Automation',
                        description:
                          'LLM-powered features, RAG pipelines, intelligent agents. AI that ships to production.',
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Cloud & DevOps',
                        description:
                          'AWS, GCP, Azure — CI/CD, container orchestration, observability.',
                      },
                    },
                  ],
                },
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'IN',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'ragen@ragen.org',
                  telephone: '+91-70780-82045',
                  contactType: 'sales',
                  availableLanguage: ['English', 'Hindi'],
                },
                sameAs: [
                  'https://instagram.com/ragentechnology',
                  'https://facebook.com/ragen.org',
                  'https://linkedin.com/company/ragentechnologies',
                  'https://twitter.com/ragen_dev',
                ],
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.8',
                  reviewCount: '40',
                  bestRating: '5',
                },
              },

              // ── Organization ──
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                '@id': 'https://ragen.org/#organization',
                name: 'Ragen',
                alternateName: ['Ragen Software', 'Ragen Dev'],
                url: 'https://ragen.org',
                email: 'ragen@ragen.org',
                telephone: '+91-70780-82045',
                description:
                  'Premium software development company. Senior engineers only (6+ years). Web, mobile, SaaS, AI, cloud.',
                logo: 'https://ragen.org/logo.png',
                image: 'https://ragen.org/images/eloxee-1.jpg',
                foundingDate: '2020',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'IN',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'ragen@ragen.org',
                  telephone: '+91-70780-82045',
                  contactType: 'sales',
                  availableLanguage: ['English', 'Hindi'],
                },
                sameAs: [
                  'https://instagram.com/ragentechnology',
                  'https://facebook.com/ragen.org',
                  'https://linkedin.com/company/ragentechnologies',
                  'https://twitter.com/ragen_dev',
                ],
              },

              // ── WebSite ──
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': 'https://ragen.org/#website',
                name: 'Ragen — Software Development Company',
                url: 'https://ragen.org',
                description:
                  'Premium software development company. Custom web apps, SaaS, mobile, AI, cloud. Senior engineers, predictable delivery.',
                inLanguage: 'en',
                publisher: {
                  '@id': 'https://ragen.org/#organization',
                },
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://ragen.org/?s={search_term_string}',
                  },
                  'query-input': 'required name=search_term_string',
                },
              },

              // ── BreadcrumbList (global) ──
              {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://ragen.org',
                  },
                ],
              },

              // ── LocalBusiness ──
              {
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                '@id': 'https://ragen.org/#local',
                name: 'Ragen',
                image: 'https://ragen.org/images/eloxee-1.jpg',
                logo: 'https://ragen.org/logo.png',
                url: 'https://ragen.org',
                email: 'ragen@ragen.org',
                telephone: '+91-70780-82045',
                priceRange: '$$',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'IN',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: '20.5937',
                  longitude: '78.9629',
                },
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                  ],
                  opens: '09:00',
                  closes: '18:00',
                  timeZone: 'Asia/Kolkata',
                },
              },
            ]),
          }}
        />

        <Navbar />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
