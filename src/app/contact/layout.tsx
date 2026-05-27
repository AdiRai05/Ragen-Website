import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ragen. Tell us what you need to build and we will respond within a few hours. No pitch deck — just a conversation.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Ragen - Software Studio',
    description:
      'Get in touch with Ragen. Tell us what you need to build and we will respond within a few hours.',
    url: 'https://ragen.org/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
