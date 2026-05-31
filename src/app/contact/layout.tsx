import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Ragen — Hire Software Developers | Start Your Project',
  description:
    'Contact Ragen, a software development company. Tell us about your web, mobile, SaaS, or AI project and get a response within hours. Start a trial sprint today.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Ragen — Software Development Company',
    description:
      'Get in touch with Ragen. Tell us about your project and we will respond within a few hours.',
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
