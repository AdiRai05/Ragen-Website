import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';
import { services } from '@/data/services';
import { processSteps } from '@/data/process';
import { techStack } from '@/data/tech-stack';
import { images } from '@/data/images';

const stats = [
  { value: 40, suffix: '+', label: 'Projects shipped' },
  { value: 4, suffix: '+', label: 'Avg. years per engineer' },
  { value: 92, suffix: '%', label: 'Client return rate' },
];

const differencePoints = [
  { title: 'They ship fast and do not break things.', desc: 'Speed without sloppiness is rare. We have optimized for it — CI/CD pipelines, automated testing, and code review discipline.' },
  { title: 'Communication does not require translation.', desc: 'You talk to engineers directly. No account manager filtering information. Direct access. Answers in minutes, not days.' },
  { title: 'They tell us when we are wrong.', desc: 'Most dev shops build exactly what you ask for, even when it is a bad idea. We push back. We bring alternatives.' },
  { title: 'They think like owners, not vendors.', desc: 'We care about your business metrics, not just our lines of code. If a feature will not move the needle, we will say so.' },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center">
        {/* Hero background image - 35% opacity */}
        <div className="absolute inset-0">
          <Image src={images.heroBg} alt="" fill className="object-cover opacity-50" priority />
        </div>
        {/* Dark gradient overlay - left side darker for text, right side lighter for image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/50 to-surface/10" />

        <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-32 lg:py-48">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground-muted mb-8">
              Software Studio &bull; {new Date().getFullYear()}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.94] tracking-[-0.03em] text-foreground mb-8 text-balance">
              We build the software<br />
              other companies<br />
              <span className="gradient-text">wish they could.</span>
            </h1>
            <p className="text-lg lg:text-xl text-foreground-muted max-w-xl leading-relaxed text-balance">
              A development studio that operates at the intersection of engineering
              precision and design craft.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUSTED BY
          ══════════════════════════════════════ */}
      <section className="py-16 lg:py-20 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground-faint mb-8 text-center">
              Trusted by teams from
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[
              'Portland Design Co.',
              'Voxel Digital',
              'FinLayer Inc.',
              'Sprintly Health',
              'CloudPay Solutions',
              'Pulse Analytics',
            ].map((name) => (
              <ScrollReveal key={name}>
                <span className="text-lg lg:text-xl font-display font-medium text-foreground-muted/60 hover:text-foreground-muted transition-colors cursor-default">{name}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BRAND POSITIONING + STATS
          ══════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 border-t border-stroke-subtle">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src={images.codeAbstract} alt="" fill className="object-cover opacity-25 object-left" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/85 via-surface/70 to-surface/95" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-20 lg:mb-28">
              <div>
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground-muted mb-6">What We Believe</div>
                <p className="text-2xl lg:text-[1.75rem] font-display font-medium text-foreground leading-[1.25] text-balance">
                  Most agencies overpromise and underdeliver. Most dev shops ship spaghetti code. We figured there had to be a better way.
                </p>
              </div>
              <div className="text-foreground-muted leading-relaxed space-y-4 text-[0.9375rem]">
                <p>We built Ragen to be the kind of studio we wished existed when we were on the other side — hiring engineers, managing vendors, and cleaning up after teams that cut corners.</p>
                <p>Every engineer who touches your project has at least six years of experience. We take on fewer projects than we could so we can be obsessive about the ones we commit to.</p>
                <p>We are not trying to be the biggest. We are trying to be the one you call when it actually matters.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label} delay={0.1}>
                <div className="text-center md:text-left">
                  <div className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
                    {stat.value || ''}{stat.suffix || ''}
                  </div>
                  <div className="text-xs text-foreground-faint uppercase tracking-[0.15em]">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CAPABILITY SHOWCASE — Image + text alternating
          ══════════════════════════════════════ */}
      <section className="py-24 lg:py-32 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 lg:mb-24">
              <div className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground-muted mb-6">Capabilities</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
                Engineering that lasts longer than the sprint it was built in.
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl">
                The kind of code you do not have to rewrite six months later.
              </p>
            </div>
          </ScrollReveal>

          {/* Capability 1 — image right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20 lg:mb-28">
            <ScrollReveal>
              <span className="text-xs font-mono text-foreground-faint mb-4 block">01</span>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">Full-Stack Development</h3>
              <p className="text-foreground-muted leading-relaxed mb-6">
                React, Next.js, Vue on the frontend. Node, Python, Go, or .NET on the backend. We pick the stack that fits the problem — not the one trending on Twitter.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Python', 'Go', 'PostgreSQL'].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs rounded-full bg-surface-secondary border border-stroke text-foreground-muted">{t}</span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-stroke">
                <Image src={images.codeAbstract} alt="" width={700} height={525} className="w-full h-full object-cover opacity-90" unoptimized />
              </div>
            </ScrollReveal>
          </div>

          {/* Capability 2 — image left */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20 lg:mb-28">
            <ScrollReveal className="lg:order-2">
              <span className="text-xs font-mono text-foreground-faint mb-4 block">02</span>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">Design &amp; User Experience</h3>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Interface design that is beautiful and functional. Design systems, component libraries, and interaction patterns that scale across products.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Design Systems', 'Prototyping', 'User Research', 'WCAG'].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs rounded-full bg-surface-secondary border border-stroke text-foreground-muted">{t}</span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-stroke">
                <Image src={images.designAbstract} alt="" width={700} height={525} className="w-full h-full object-cover opacity-90" unoptimized />
              </div>
            </ScrollReveal>
          </div>

          {/* Capability 3 — image right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <ScrollReveal>
              <span className="text-xs font-mono text-foreground-faint mb-4 block">03</span>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">Cloud &amp; Infrastructure</h3>
              <p className="text-foreground-muted leading-relaxed mb-6">
                AWS, GCP, or Azure — architected for what you actually need. CI/CD, container orchestration, and observability that makes sense.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Datadog'].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs rounded-full bg-surface-secondary border border-stroke text-foreground-muted">{t}</span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-stroke">
                <Image src={images.serverRoom} alt="" width={700} height={525} className="w-full h-full object-cover opacity-90" unoptimized />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES OVERVIEW
          ══════════════════════════════════════ */}
      <section className="py-24 lg:py-32 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 lg:mb-20">
              <div className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground-muted mb-6">What We Do</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
                Most of what we build falls into a few buckets.
              </h2>
              <p className="text-lg text-foreground-muted max-w-xl">We do not do everything. We do the things we are genuinely good at.</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-stroke-subtle rounded-2xl overflow-hidden">
            {services.map((service) => {
              const cardImages: Record<string, string> = {
                'web-development': images.codeAbstract,
                'saas-development': '/hero-image.png',
                'mobile-development': images.designAbstract,
                'ui-ux-design': images.codeAbstract,
                'ai-integrations': images.aiAbstract,
                'cloud-devops': images.serverRoom,
              };
              return (
                <ScrollReveal key={service.id} delay={0.05}>
                  <Link href={`/services/${service.slug}`} className="group block bg-surface hover:bg-surface-elevated transition-colors h-full">
                    {/* Card image */}
                    <div className="aspect-[16/9] overflow-hidden">
                      <Image
                        src={cardImages[service.slug] || images.codeAbstract}
                        alt=""
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                    <div className="p-8 lg:p-10">
                      <div className="text-xs font-mono text-foreground-faint mb-3">{service.number}</div>
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-accent-blue transition-colors">{service.title}</h3>
                      <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2 mb-4">{service.description}</p>
                      <div className="flex items-center gap-2 text-xs text-foreground-faint group-hover:text-foreground-muted transition-colors">
                        <span>Learn more</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS
          ══════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 border-t border-stroke-subtle">
        <div className="absolute inset-0">
          <Image src={images.darkGeometric} alt="" fill className="object-cover opacity-20" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/90 to-surface" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 lg:mb-20">
              <div className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground-muted mb-6">How We Work</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">A process that makes sense.</h2>
              <p className="text-lg text-foreground-muted max-w-xl">This is how we take something from conversation to production.</p>
            </div>
          </ScrollReveal>

          <div className="hidden lg:grid grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="relative pt-8">
                  {i < processSteps.length - 1 && <div className="absolute top-[19px] left-8 right-0 h-px bg-stroke" />}
                  <div className="absolute top-[16px] left-0 w-[7px] h-[7px] rounded-full bg-accent-blue" />
                  <div className="text-xs font-mono text-foreground-faint mb-4">{step.number}</div>
                  <h4 className="font-display font-semibold text-foreground text-sm mb-2 leading-snug">{step.title}</h4>
                  <p className="text-xs text-foreground-muted leading-relaxed">{step.description.length > 120 ? step.description.slice(0, 120) + '…' : step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:hidden space-y-10">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.05}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-[7px] h-[7px] rounded-full bg-accent-blue mt-1.5" />
                    {i < processSteps.length - 1 && <div className="w-px flex-1 bg-stroke mt-2" />}
                  </div>
                  <div className="pb-8">
                    <div className="text-xs font-mono text-foreground-faint mb-2">{step.number}</div>
                    <h4 className="font-display font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 p-6 lg:p-8 rounded-2xl border border-stroke bg-surface-secondary/50 backdrop-blur-sm">
              <p className="text-sm text-foreground-muted leading-relaxed">
                <strong className="text-foreground">One more thing:</strong> We do not do the &ldquo;senior dev in the sales meeting, junior dev on the project&rdquo; routine. The engineers who scope your project are the ones who build it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TECHNOLOGY
          ══════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 border-t border-stroke-subtle overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.circuitBoard} alt="" fill className="object-cover opacity-[0.12]" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/85 via-surface/70 to-surface/95" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 lg:mb-20">
              <div className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground-muted mb-6">Technology</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">The tools we reach for.</h2>
              <p className="text-lg text-foreground-muted max-w-xl">Pragmatic choices, not resume-driven development.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {techStack.map((category) => (
              <ScrollReveal key={category.name} delay={0.1}>
                <h4 className="text-xs font-semibold text-accent-blue uppercase tracking-[0.15em] mb-6">{category.name}</h4>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-foreground-muted">{item}</li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CLIENTS STAY
          ══════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 border-t border-stroke-subtle overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.darkArchitecture} alt="" fill className="object-cover opacity-[0.1]" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/85 via-surface/80 to-surface/95" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 lg:mb-20">
              <div className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground-muted mb-6">The Difference</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">What clients notice after working with us for a while.</h2>
              <p className="text-lg text-foreground-muted max-w-xl">Not our words. Patterns we have noticed across 40+ projects.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-16">
            {differencePoints.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 0.1}>
                <div className="border-l-2 border-stroke pl-6 py-2 hover:border-accent-blue transition-colors">
                  <h4 className="font-display font-semibold text-foreground mb-3 text-lg leading-snug">{point.title}</h4>
                  <p className="text-sm text-foreground-muted leading-relaxed">{point.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
          ══════════════════════════════════════ */}
      <section className="py-24 lg:py-32 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 lg:mb-20">
              <div className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground-muted mb-6">Testimonials</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">What our partners say.</h2>
              <p className="text-lg text-foreground-muted max-w-xl">Not our words. From agency founders and product leads we have built for.</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: 'Ragen took our Figma files and delivered production-ready code faster than our internal team ever did. Our client thought we had doubled our engineering headcount.',
                name: 'Sarah Keenan',
                role: 'Founder & Creative Director',
                company: 'Portland Design Co.',
              },
              {
                quote: 'We were turning away $15K/month in dev work because we could not hire fast enough. Ragen now handles all our build work. Our margins are up, and our clients have never been happier.',
                name: 'Marcus O\'Brien',
                role: 'Managing Director',
                company: 'Voxel Digital Agency',
              },
              {
                quote: 'Three years, 12 projects, zero missed deadlines. They push back when something does not make sense — which is exactly what you want from an engineering partner.',
                name: 'Rebecca Tan',
                role: 'Head of Product',
                company: 'FinLayer Inc.',
              },
              {
                quote: 'What sold us was the trial sprint. One week in, we knew. Clean code, direct communication, no hand-holding required. They think like owners.',
                name: 'David Chen',
                role: 'CTO',
                company: 'Sprintly Health',
              },
              {
                quote: 'Our previous dev partner needed constant babysitting. Ragen is the opposite — they ask smart questions, ship on Fridays, and the code is genuinely clean. Night and day difference.',
                name: 'Andrea Mitchell',
                role: 'EVP of Engineering',
                company: 'CloudPay Solutions',
              },
              {
                quote: 'They told us a feature idea was bad before we spent $40K building it. Showed us three alternatives. We went with one. Saved us months. That is the kind of partner you keep.',
                name: 'James Whelan',
                role: 'CEO',
                company: 'Pulse Analytics',
              },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <div className="bg-surface border border-stroke rounded-2xl p-8 h-full flex flex-col hover:border-stroke-highlight transition-colors">
                  <div className="flex gap-1 mb-6">
                    {Array(5).fill(null).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                  </div>
                  <blockquote className="text-sm text-foreground-muted leading-relaxed mb-8 flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-foreground-faint">{t.role}, {t.company}</div>
                  </div>
                </div>
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
          <Image src={images.gradientFluid} alt="" fill className="object-cover opacity-30" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/80 to-surface" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground mb-6 text-balance">
              You have got a project.<br />
              <span className="gradient-text">We have got a team.</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-lg mx-auto mb-12 leading-relaxed text-balance">
              If you are building something ambitious and you need engineers who will treat it like their own product — we should talk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-white/10">
                Start a Conversation
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
