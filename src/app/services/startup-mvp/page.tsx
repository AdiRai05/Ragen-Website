import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Startup MVP Development Services — Ragen | Ship in Weeks',
  description:
    'Ragen builds startup MVPs in 4-8 weeks. From napkin sketch to working product with clean code and investor-ready documentation. Validate fast, ship faster.',
  alternates: {
    canonical: '/services/startup-mvp',
  },
  openGraph: {
    title: 'Startup MVP Development — Ragen | Ship in Weeks',
    description:
      'From napkin sketch to working product in weeks, not months. Validate fast, ship in weeks, investor-ready output.',
    url: 'https://ragen.org/services/startup-mvp',
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

export default function StartupMVPPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[0.96] tracking-[-0.03em] text-foreground mb-6">
                Startup MVP<br />
                <span className="gradient-text">Development</span>
              </h1>
              <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
                From napkin sketch to working product in weeks, not months. We help founders validate ideas, ship MVPs, and reach the milestones that matter to investors.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-stroke-subtle py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'Validate fast', desc: 'We strip features to the core value prop. No bloat, no over-engineering. Just enough to test whether the idea has legs with real users.' },
              { title: 'Ship in weeks', desc: 'Most MVPs ship in 4-8 weeks. We parallelize design and development, make pragmatic tech choices, and cut scope aggressively to hit launch dates.' },
              { title: 'Investor-ready output', desc: 'Clean code, proper infrastructure, and documentation that passes technical due diligence. Not throwaway prototype code.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 bg-surface-secondary border border-stroke rounded-2xl hover:border-accent-blue/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 hover:bg-surface-elevated">
<h3 className="font-display font-semibold text-foreground text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stroke-subtle py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">Got an idea?</h2>
            <p className="text-foreground-muted mb-8 max-w-md mx-auto">Tell us what you are building. We will help you figure out what to build first.</p>
            <Link href="/contact" className="inline-flex px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all">Start a Conversation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
