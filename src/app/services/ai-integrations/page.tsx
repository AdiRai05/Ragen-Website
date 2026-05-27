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
  },
};

export default function Page() { return <ServiceDetail slug="ai-integrations" />; }
