import type { Metadata } from 'next';
import { ServiceDetail } from '@/components/ServiceDetail';
import { services } from '@/data/services';

const service = services.find((s) => s.slug === 'ai-integrations')!;

export const metadata: Metadata = {
  title: 'AI Solutions & Automation',
  description: service.description,
  alternates: {
    canonical: '/services/ai-integrations',
  },
  openGraph: {
    title: 'AI Solutions & Automation - Ragen',
    description: service.description,
    url: 'https://ragen.org/services/ai-integrations',
    siteName: 'Ragen',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/eloxee-1.jpg', width: 1200, height: 630, alt: 'Ragen — Software Development Company' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ragen — Software Development Company',
    description: 'Premium software development. Web apps, SaaS, mobile, AI, cloud. Senior engineers, predictable delivery.',
    images: ['/images/eloxee-1.jpg'],
  },
};

export default function Page() { return <ServiceDetail slug="ai-integrations" />; }
