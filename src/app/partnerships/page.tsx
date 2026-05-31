import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ScrollReveal';
import { images } from '@/data/images';

export const metadata: Metadata = {
  title: 'White-Label Software Development for Agencies — Ragen Partnerships',
  description:
    'White-label software development for agencies. Managed dev pods, staff augmentation, project-based builds. We work behind your brand — your clients never know we exist.',
  alternates: {
    canonical: '/partnerships',
  },
  openGraph: {
    title: 'White-Label Software Development for Agencies — Ragen',
    description:
      'White-label development for agencies. Managed dev pods, staff augmentation, and project-based build work behind your brand.',
    url: 'https://ragen.org/partnerships',
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

const partnerModels = [
  {
    number: '01',
    title: 'Managed Dev Pod',
    tagline: 'Your dedicated team, sprint by sprint.',
    desc: '2 senior devs + 1 QA, working exclusively on your projects. You scope, we build. Weekly standups, your tools, our execution. Minimum 3-month engagement.',
    features: ['2 developers + 1 QA engineer', 'Weekly sprints & standups', 'Your project management tools', 'Direct Slack/Discord access', 'Code delivered under your repo'],
  },
  {
    number: '02',
    title: 'Staff Augmentation',
    tagline: 'Embedded engineers on your team.',
    desc: 'Individual developers who join your existing team. They attend your standups, use your stack, and report to your PM. You get a senior engineer without the hiring headache.',
    features: ['Senior engineers only (6+ yrs avg)', 'Works in your timezone', 'Reports to your PM directly', 'No minimum engagement', 'Scale up or down weekly'],
  },
  {
    number: '03',
    title: 'Project-Based Build',
    tagline: 'Fixed scope, fixed price, clean handoff.',
    desc: 'You define the spec, we quote a fixed price, and we ship by the deadline. Best for agencies that know exactly what they need and want zero management overhead.',
    features: ['Fixed price & timeline', 'Milestone-based delivery', 'QA included', 'Post-launch support available', 'Handoff includes documentation'],
  },
];

const howItWorks = [
  { step: '01', title: 'You scope the project with your client.', desc: 'You know their needs, their brand, their budget. We stay invisible.' },
  { step: '02', title: 'We estimate and price behind the scenes.', desc: 'Transparent pricing. No markups hidden under layers. You set your client rate.' },
  { step: '03', title: 'Your client signs with you.', desc: 'Your contract, your brand, your relationship. We never surface.' },
  { step: '04', title: 'We build. You review. We deliver.', desc: 'Clean code, weekly demos, direct Slack access. You approve before anything reaches the client.' },
];

const guarantees = [
  { title: 'No client contact. Ever.', desc: 'We do not exist to your clients. No branding, no watermarks, no portfolio mention without your written permission. Your reputation, our code.' },
  { title: 'The engineers who scope are the engineers who build.', desc: 'No bait-and-switch. No "senior in the sales call, junior on the project" routine. What you hear in the intro call is who writes the code.' },
  { title: 'Weekly billing. No surprises.', desc: 'You pay weekly for hours worked. Transparent timesheets. Cancel anytime after the minimum engagement. No hidden fees, no long-term lock-in.' },
  { title: 'Code that does not need rewriting.', desc: 'We write production-grade code with tests, documentation, and clean architecture. The kind of code your internal team can pick up without wanting to quit.' },
];

const faqs = [
  { q: 'What is the minimum engagement?', a: 'Managed pods: 3 months. Staff augmentation: no minimum. Project-based: defined by the scope. We recommend starting with a 2-week paid trial sprint to see if we are a good fit.' },
  { q: 'How do you handle communication?', a: 'Slack or Discord for daily chat. Weekly Zoom/Google Meet for sprint reviews. We work in your timezone — overlap of at least 4 hours with US/UK/Canada business hours.' },
  { q: 'What if I have never outsourced before?', a: 'That is actually ideal. We have onboarded dozens of agencies through their first outsourced project. The 2-week trial sprint is designed specifically for this — low risk, fixed scope, quick feedback loop.' },
  { q: 'What stacks do you cover?', a: 'Frontend: React, Next.js, Vue, Angular. Backend: Node.js, Python, Go, .NET. Mobile: React Native, Flutter. Cloud: AWS, GCP, Azure. We match the stack to the project, not the other way around.' },
  { q: 'Do you handle design?', a: 'We can, but most agency partners prefer to keep design in-house. Our sweet spot is taking your Figma files and building them pixel-perfect. If you need design support, we have UI/UX specialists available.' },
];

export default function PartnershipsPage() {
  return (
    <div className="w-full">
      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20">
        <div className="absolute inset-0">
          <Image src={images.darkWorkspace} alt="" fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/70 to-surface" />

        <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[0.96] tracking-[-0.03em] text-foreground mb-6 text-balance">
              Your clients think you built it.<br />
              <span className="gradient-text">That is exactly how it should be.</span>
            </h1>
            <p className="text-lg lg:text-xl text-foreground-muted max-w-xl leading-relaxed text-balance mb-10">
              We are the engineering team behind other agencies. White-label development that keeps your brand front and centre — and keeps us invisible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all duration-200 text-center">
                Start a Trial Sprint
              </Link>
              <a href="mailto:ragen@ragen.org" className="px-8 py-3.5 border border-stroke hover:border-stroke-highlight text-foreground font-medium text-sm rounded-xl transition-all duration-200 text-center">
                ragen@ragen.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUSTED BY / STATS
          ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {[
              { value: '40+', label: 'Projects shipped for agencies' },
              { value: '6+', label: 'Years per engineer' },
              { value: '92%', label: 'Agency return rate' },
              { value: '0', label: 'Times a client knew we existed' },
            ].map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-xs text-foreground-faint uppercase tracking-[0.15em]">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ENGAGEMENT MODELS
          ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">Three ways to work with us.</h2>
              <p className="text-lg text-foreground-muted max-w-xl">Pick what fits. Switch anytime. No drama.</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnerModels.map((model, i) => (
              <ScrollReveal key={model.number} delay={i * 0.1}>
                <div className="bg-surface border border-stroke rounded-2xl p-8 lg:p-10 h-full flex flex-col hover:border-accent-blue/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20">
<h3 className="text-xl font-display font-bold text-foreground mb-2">{model.title}</h3>
                  <p className="text-sm text-foreground-muted mb-3">{model.tagline}</p>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-8">{model.desc}</p>
                  <ul className="space-y-3 mt-auto">
                    {model.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-foreground-muted">
                        <svg className="w-4 h-4 mt-0.5 shrink-0 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
          ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">You handle the client. We handle everything else.</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="relative pt-8">
                  {i < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-[19px] left-8 right-0 h-px bg-stroke" />
                  )}
                  <div className="absolute top-[16px] left-0 w-[7px] h-[7px] rounded-full bg-accent-blue" />
<h4 className="font-display font-semibold text-foreground text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-foreground-muted leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GUARANTEES
          ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">Things we absolutely will not do.</h2>
              <p className="text-lg text-foreground-muted max-w-xl">And things we guarantee. No fine print.</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-8 lg:gap-16">
            {guarantees.map((g, i) => (
              <ScrollReveal key={g.title} delay={i * 0.1}>
                <div className="border-l-2 border-stroke pl-6 py-2 hover:border-accent-blue transition-colors">
                  <h4 className="font-display font-semibold text-foreground mb-3 text-lg">{g.title}</h4>
                  <p className="text-sm text-foreground-muted leading-relaxed">{g.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
          ══════════════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
      <section className="py-20 lg:py-28 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">Questions we get asked.</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl space-y-1">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.05}>
                <details className="group border-b border-stroke-subtle">
                  <summary className="py-5 cursor-pointer list-none flex justify-between items-start gap-4">
                    <span className="font-display font-medium text-foreground group-hover:text-accent-blue transition-colors">{faq.q}</span>
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-foreground-faint group-open:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </summary>
                  <p className="pb-5 text-sm text-foreground-muted leading-relaxed">{faq.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
          ══════════════════════════════════════ */}
      <section className="relative py-32 lg:py-48 border-t border-stroke-subtle">
        <div className="absolute inset-0">
          <Image src={images.gradientFluid} alt="" fill className="object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/80 to-surface" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground mb-6 text-balance">
              Ready to be our next<br />
              <span className="gradient-text">behind-the-scenes partner?</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-lg mx-auto mb-12 leading-relaxed">
              The best way to start is a 2-week paid trial sprint. Fixed scope, low risk, quick feedback loop. If we are not a fit, we shake hands and part ways.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all duration-200">
                Start a Trial Sprint
              </Link>
              <a href="mailto:ragen@ragen.org" className="px-8 py-3.5 border border-stroke hover:border-stroke-highlight text-foreground font-medium text-sm rounded-xl transition-all duration-200">
                ragen@ragen.org
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
