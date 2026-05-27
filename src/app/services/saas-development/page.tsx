import type { Metadata } from 'next';
import { ServiceDetail } from '@/components/ServiceDetail';
import { services } from '@/data/services';

const service = services.find((s) => s.slug === 'saas-development')!;

export const metadata: Metadata = {
  title: 'SaaS Development',
  description: service.description,
  alternates: {
    canonical: '/services/saas-development',
  },
  openGraph: {
    title: 'SaaS Development - Ragen',
    description: service.description,
    url: 'https://ragen.org/services/saas-development',
  },
};

export default function Page() { return <ServiceDetail slug="saas-development" />; }
