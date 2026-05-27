import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ScrollReveal';
import { images } from '@/data/images';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Ragen is a software studio built on one principle: engineers only. Every person who writes code has at least six years of experience. No juniors touching production code.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Ragen - Software Studio',
    description:
      'A software studio built on one principle: engineers only. Senior developers, direct communication, and code that lasts.',
    url: 'https://ragen.org/about',
  },
};

const principles = [
  { number: '01', title: 'Engineers only. No juniors touching production code.', desc: 'Every person who writes code for you has at least six years of experience building and shipping software. We do not staff projects with people learning on your dime.' },
  { number: '02', title: 'We push back when something is a bad idea.', desc: 'Most agencies nod and bill. We tell you when a feature is not worth building, when a timeline is unrealistic, or when there is a simpler approach. We treat your budget like it is our own.' },
  { number: '03', title: 'Small by design. Obsessive by nature.', desc: 'We take on fewer projects than we could — deliberately. This is not a factory. Every engagement gets real attention from senior people who care about the outcome.' },
  { number: '04', title: 'The people who scope are the people who build.', desc: 'No handoffs between sales and delivery. No senior-dev-in-the-meeting-junior-dev-on-the-project routine. The engineers you meet are the ones who write the code.' },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0">
          <Image src={images.darkWorkspace} alt="" fill className="object-cover opacity-30" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/70 to-surface/95" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground-muted mb-6">About the Studio</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[0.96] tracking-[-0.03em] text-foreground mb-8 text-balance">
                We started this because the{' '}
                <span className="gradient-text">status quo</span> was not good enough.
              </h1>
              <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">Not a pitch. Just where we are coming from.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">Here is what we kept seeing.</h2>
                <div className="text-foreground-muted leading-relaxed space-y-4">
                  <p>Agencies that overpromise and underdeliver. Dev shops that ship spaghetti code. Design studios that make things pretty but forget they need to actually work. And consultancies that charge enterprise rates but rotate junior devs through your project like a training program.</p>
                  <p>We figured there had to be a better way to build software. One where the people writing the proposals are the same people writing the code. Where &ldquo;done&rdquo; means shipped, tested, and maintainable — not just &ldquo;the budget ran out.&rdquo;</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-stroke">
                  <Image src={images.codeAbstract} alt="" width={600} height={450} className="w-full h-full object-cover" unoptimized />
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">What we built instead.</h2>
                <div className="text-foreground-muted leading-relaxed space-y-4">
                  <p>A studio that is deliberately small by design. Senior engineers only — nobody with less than six years of experience touches production code. We take on fewer projects than we could so we can be obsessive about the ones we commit to.</p>
                  <p>The economics are not what a VC would back. But the work speaks for itself, and clients stick around for years. We are not trying to be the biggest. We are trying to be the one you call when it actually matters.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative py-16 lg:py-24 border-t border-stroke-subtle overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.gradientFluid} alt="" fill className="object-cover opacity-[0.1]" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/85 via-surface/80 to-surface/95" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 lg:mb-20">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">How we operate.</h2>
              <p className="text-foreground-muted max-w-xl">Four principles that shape every engagement.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-16 max-w-5xl">
            {principles.map((p, i) => (
              <ScrollReveal key={p.number} delay={i * 0.1}>
                <div>
                  <div className="text-xs font-mono text-foreground-faint mb-4">{p.number}</div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-3">{p.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-16 lg:py-24 border-t border-stroke-subtle overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.darkArchitecture} alt="" fill className="object-cover opacity-[0.08]" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/85 via-surface/80 to-surface/95" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 lg:mb-20">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">The team.</h2>
              <p className="text-foreground-muted max-w-xl">Senior engineers who become part of your team, not vendors who report to you.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Aditya Rai', role: 'Founder & Engineering Lead' },
              { name: 'Engineering', role: 'Full-Stack Architecture' },
              { name: 'Engineering', role: 'Backend & Infrastructure' },
              { name: 'Engineering', role: 'Frontend & Design Systems' },
            ].map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-stroke bg-surface-secondary/50 overflow-hidden group hover:border-stroke-highlight transition-colors">
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src={i === 0 ? images.darkWorkspace : i === 1 ? images.codeAbstract : i === 2 ? images.serverRoom : images.designAbstract}
                      alt=""
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-xs text-foreground-muted">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-stroke-subtle text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">Want to work with us?</h2>
            <p className="text-foreground-muted mb-8 max-w-md mx-auto">Schedule a call. We will tell you if we are a fit — no fluff, no pitch deck.</p>
            <Link href="/contact" className="inline-flex px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all duration-200">Get in Touch</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
