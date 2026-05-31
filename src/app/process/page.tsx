import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ScrollReveal';
import { images } from '@/data/images';

export const metadata: Metadata = {
  title: 'Our Software Development Process — Ragen | Discovery to Launch',
  description:
    'How Ragen delivers software projects: 7-step process from discovery and strategy through design, development, QA, deployment, and handoff. Predictable, transparent, risk-free.',
  alternates: {
    canonical: '/process',
  },
  openGraph: {
    title: 'Our Software Development Process — Ragen',
    description:
      'From conversation to production: Discovery, strategy, design, development, QA, deployment, and handoff. Senior engineers at every step.',
    url: 'https://ragen.org/process',
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

const fullProcess = [
  { number: '01', title: 'Discovery', duration: 'Typically 1 week', deliverables: 'Problem definition, technical assessment, initial recommendations', desc: 'We start by understanding what you are actually trying to accomplish — not just the feature list. We ask questions about your users, your business goals, your technical constraints, and what success looks like.' },
  { number: '02', title: 'Strategy', duration: 'Typically 1-2 weeks', deliverables: 'Architecture document, technology choices, scope of work, pricing', desc: 'We turn the discovery findings into a concrete plan. Architecture decisions, technology choices, milestone definitions, and a clear scope of work. Fixed-price where scope is clear. Time-and-materials where it is not.' },
  { number: '03', title: 'Design', duration: 'Typically 2-4 weeks', deliverables: 'Wireframes, user flows, high-fidelity mockups, design system', desc: 'Every project starts with design — even if it is rough. We get alignment on what we are building before anyone writes a line of code. Changes are cheap in Figma. They are expensive in production.' },
  { number: '04', title: 'Development', duration: 'Sprint-based, 2-week cycles', deliverables: 'Working software every sprint, deployed to staging', desc: 'We work in one or two-week sprints. You get access to the repo, the project board, and staging from day one. Every Friday, there is something new to see.' },
  { number: '05', title: 'QA & Testing', duration: 'Continuous, per-sprint', deliverables: 'Test reports, performance audits, accessibility audits', desc: 'Automated testing, manual QA, performance audits, and accessibility checks are integrated into every sprint. We catch issues before they reach users.' },
  { number: '06', title: 'Deployment', duration: 'Typically 1 week for setup', deliverables: 'CI/CD pipeline, staging environment, production rollout plan', desc: 'We set up CI/CD pipelines, staging environments, and production infrastructure. Every deployment is automated and repeatable. Rollback plans are built in.' },
  { number: '07', title: 'Scaling & Handoff', duration: 'Ongoing', deliverables: 'Documentation, runbooks, architecture decision records, knowledge transfer', desc: 'Clean documentation. Runbooks for deployment. Architecture decision records. If you have an internal team, they will understand everything. If not, we will keep running it.' },
];

export default function ProcessPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0">
          <Image src={images.darkGeometric} alt="" fill className="object-cover opacity-25" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/70 to-surface/95" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[0.96] tracking-[-0.03em] text-foreground mb-8 text-balance">
                A process designed<br />
                <span className="gradient-text">to reduce risk.</span>
              </h1>
              <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">Every engagement follows a proven sequence. It is not revolutionary. It just works — and it protects both sides from the usual agency pitfalls.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process steps */}
      <section className="border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {fullProcess.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.05}>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-16 lg:py-20 border-b border-stroke-subtle last:border-b-0">
<div className="lg:col-span-6">
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">{step.desc}</p>
                </div>
                <div className="lg:col-span-4 space-y-6">
                  <div>
                    <div className="text-xs text-foreground-faint uppercase tracking-[0.15em] mb-1">Duration</div>
                    <div className="text-sm text-foreground-muted">{step.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground-faint uppercase tracking-[0.15em] mb-1">What you receive</div>
                    <div className="text-sm text-foreground-muted">{step.deliverables}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Trial sprint */}
      <section className="py-20 lg:py-28 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-blue/[0.08] border border-accent-blue/[0.15] text-accent-blue text-xs font-semibold tracking-[0.15em] uppercase mb-8">The Trial Sprint</div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">Start small. Prove it. Then scale.</h2>
              <p className="text-foreground-muted leading-relaxed mb-8">Every engagement begins with a paid trial sprint — a real feature your team needs, delivered in 1-2 weeks. You pay for the sprint. We ship working code. If you like the quality and the process, we continue. If not, we part ways cleanly.</p>
              <Link href="/contact" className="inline-flex px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all duration-200">Start a Trial Sprint</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
