import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ScrollReveal';
import { services } from '@/data/services';
import { images } from '@/data/images';

export const metadata: Metadata = {
  title: 'Software Development Services — Web, Mobile, SaaS, AI & Cloud',
  description:
    'Ragen offers custom software development services: web apps, SaaS platforms, mobile apps (iOS & Android), UI/UX design, AI integrations, and cloud DevOps. Senior engineers, predictable delivery.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Software Development Services — Ragen | Web, Mobile, SaaS, AI',
    description:
      'Custom software development services: web apps, SaaS, mobile apps, UI/UX design, AI integrations, and cloud DevOps — all with senior engineers.',
    url: 'https://ragen.org/services',
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

const serviceImages: Record<string, string> = {
  'web-development': images.codeAbstract,
  'saas-development': images.dashboard,
  'mobile-development': images.designAbstract,
  'ui-ux-design': images.heroAlt,
  'ai-integrations': images.aiAbstract,
  'cloud-devops': images.serverRoom,
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0">
          <Image src={images.techPattern} alt="" fill className="object-cover opacity-25" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/75 to-surface/95" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[0.96] tracking-[-0.03em] text-foreground mb-8 text-balance">
                Six services.<br />
                <span className="gradient-text">One standard.</span>
              </h1>
              <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">Pick the one that fits. Mix and match. Every engagement gets the same level of senior engineering attention.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Modules with images */}
      <div className="border-t border-stroke-subtle">
        {services.map((service, i) => (
          <section key={service.id} id={service.slug} className="border-b border-stroke-subtle">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-stroke group hover:border-accent-blue/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20">
                    <Image
                      src={serviceImages[service.slug] || images.codeAbstract}
                      alt={service.title}
                      width={700}
                      height={525}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>

                {/* Content */}
                <ScrollReveal>
                  <div>
                    <div className="text-xs font-mono text-foreground-faint mb-4">{service.number}</div>
                    <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-foreground-muted leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-foreground-muted">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-blue shrink-0 mt-0.5"><path d="M20 6L9 17l-5-5"/></svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.techTags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 text-xs rounded-full bg-surface-secondary border border-stroke text-foreground-muted">{tag}</span>
                      ))}
                    </div>
                    <div className="p-4 bg-surface-secondary/50 border border-stroke rounded-xl mb-6">
                      <div className="text-xs text-foreground-faint mb-1">Ideal for</div>
                      <div className="text-sm text-foreground-muted">{service.idealFor}</div>
                    </div>
                    <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-blue transition-colors">
                      View details
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 lg:py-28 text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">Not sure what you need?</h2>
            <p className="text-foreground-muted mb-8 max-w-md mx-auto">Tell us what you are working on. We will tell you which approach fits.</p>
            <Link href="/contact" className="inline-flex px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all duration-200">Talk to Us</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
