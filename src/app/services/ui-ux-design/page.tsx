import type { Metadata } from 'next';
import { ServiceDetail } from '@/components/ServiceDetail';
import { services } from '@/data/services';

const service = services.find((s) => s.slug === 'ui-ux-design')!;

export const metadata: Metadata = {
  title: 'UI/UX Design',
  description: service.description,
  alternates: {
    canonical: '/services/ui-ux-design',
  },
  openGraph: {
    title: 'UI/UX Design Services - Ragen',
    description: service.description,
    url: 'https://ragen.org/services/ui-ux-design',
  },
};

export default function Page() { return <ServiceDetail slug="ui-ux-design" />; }
