import type { Metadata } from 'next';
import { ServiceDetail } from '@/components/ServiceDetail';
import { services } from '@/data/services';

const service = services.find((s) => s.slug === 'cloud-devops')!;

export const metadata: Metadata = {
  title: 'Cloud & DevOps',
  description: service.description,
  alternates: {
    canonical: '/services/cloud-devops',
  },
  openGraph: {
    title: 'Cloud & DevOps Services - Ragen',
    description: service.description,
    url: 'https://ragen.org/services/cloud-devops',
  },
};

export default function Page() { return <ServiceDetail slug="cloud-devops" />; }
