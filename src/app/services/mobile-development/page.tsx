import type { Metadata } from 'next';
import { ServiceDetail } from '@/components/ServiceDetail';
import { services } from '@/data/services';

const service = services.find((s) => s.slug === 'mobile-development')!;

export const metadata: Metadata = {
  title: 'Mobile App Development',
  description: service.description,
  alternates: {
    canonical: '/services/mobile-development',
  },
  openGraph: {
    title: 'Mobile App Development - Ragen',
    description: service.description,
    url: 'https://ragen.org/services/mobile-development',
  },
};

export default function Page() { return <ServiceDetail slug="mobile-development" />; }
