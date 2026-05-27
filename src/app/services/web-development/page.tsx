import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Custom Web Development',
  description:
    'Full-stack web applications built with modern frameworks. React, Next.js, Node, Python, Go — real software that runs businesses. Not brochure sites.',
  alternates: {
    canonical: '/services/web-development',
  },
  openGraph: {
    title: 'Custom Web Development - Ragen',
    description:
      'Full-stack web applications built with modern frameworks. Dashboards, marketplaces, internal tools, and customer portals.',
    url: 'https://ragen.org/services/web-development',
  },
};

export default function WebDevPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground-muted mb-6">
                Service
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[0.96] tracking-[-0.03em] text-foreground mb-6">
                Custom Web<br />
                <span className="gradient-text">Development</span>
              </h1>
              <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
                Full-stack web applications built with modern frameworks. Not brochure sites — real software that runs businesses. Dashboards, marketplaces, internal tools, and customer portals.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-stroke-subtle py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-8">What we build</h2>
              <div className="space-y-6 text-foreground-muted leading-relaxed">
                <p>We build full-stack web applications that are fast, maintainable, and designed for real users. Every project starts with architecture decisions that prioritize long-term maintainability over short-term speed.</p>
                <p>Our team works across the entire modern web stack — from React and Next.js on the frontend to Node.js, Python, and Go on the backend. We do not cut corners on testing, accessibility, or performance.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {['React', 'Next.js', 'Vue', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'GraphQL', 'TypeScript', 'Tailwind CSS'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-xs rounded-full bg-surface-secondary border border-stroke text-foreground-muted">{tag}</span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-8">How we deliver</h2>
              <div className="space-y-4">
                {['Discovery and architecture planning', 'UI/UX design and prototyping', 'Sprint-based development in 1-2 week cycles', 'Automated testing and QA integrated into every sprint', 'CI/CD pipeline setup and deployment', 'Documentation, runbooks, and knowledge transfer'].map((step, i) => (
                  <div key={i} className="flex gap-3 text-sm text-foreground-muted">
                    <span className="text-accent-blue font-mono text-xs mt-0.5">{`0${i + 1}`}</span>
                    {step}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-stroke-subtle py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">Ready to build?</h2>
            <p className="text-foreground-muted mb-8 max-w-md mx-auto">Tell us about your web application project.</p>
            <Link href="/contact" className="inline-flex px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all">Start a Conversation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
