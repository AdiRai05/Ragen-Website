import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';
import { services, type Service } from '@/data/services';
import { images } from '@/data/images';

const serviceImages: Record<string, string> = {
  'web-development': images.codeAbstract,
  'saas-development': images.techPattern,
  'mobile-development': images.designAbstract,
  'ui-ux-design': images.darkGeometric,
  'ai-integrations': images.aiAbstract,
  'cloud-devops': images.serverRoom,
};

interface ServiceDetailProps {
  slug: string;
}

export function ServiceDetail({ slug }: ServiceDetailProps) {
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-foreground-muted">Service not found.</p>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={serviceImages[slug] || images.codeAbstract}
            alt=""
            fill
            className="object-cover opacity-30"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/85 via-surface/60 to-surface/95" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-6">
                Service — {service.number}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[0.96] tracking-[-0.03em] text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-stroke-subtle py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-8">
                What we deliver
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground-muted">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-blue shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <div className="text-xs text-foreground-faint uppercase tracking-wider mb-3">Technologies</div>
                <div className="flex flex-wrap gap-2">
                  {service.techTags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-xs rounded-full bg-surface-secondary border border-stroke text-foreground-muted">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-8">
                How we work
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">{service.idealFor}</p>
              <div className="p-5 bg-surface-secondary border border-stroke rounded-xl">
                <div className="text-xs text-foreground-faint uppercase tracking-wider mb-3">Process</div>
                <div className="space-y-3">
                  {['Discovery and requirements', 'Architecture and design', 'Sprint-based development', 'QA and testing', 'Deployment and handoff'].map((step, i) => (
                    <div key={i} className="flex gap-3 text-sm text-foreground-muted">
                      <span className="text-accent-blue font-mono text-xs mt-0.5">{`0${i + 1}`}</span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-stroke-subtle py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
              Ready to start?
            </h2>
            <p className="text-foreground-muted mb-8 max-w-md mx-auto">
              Tell us about your {service.title.toLowerCase()} needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all"
            >
              Start a Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
