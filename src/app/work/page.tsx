import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ScrollReveal';
import { images } from '@/data/images';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects from the Ragen portfolio. SaaS platforms, AI-powered tools, mobile apps, and platform migrations — built for startups, agencies, and enterprises.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Our Work - Ragen',
    description:
      'Selected projects: SaaS platforms, AI-powered tools, mobile apps, and platform migrations built for startups, agencies, and enterprises.',
    url: 'https://ragen.org/work',
  },
};

const projects = [
  { title: 'Multi-tenant SaaS Platform', category: 'SaaS Development', desc: 'Designed and built a multi-tenant SaaS platform from scratch. Subscription management, tenant isolation, usage-based billing, and a customer-facing dashboard.', tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'], img: '/hero-image.png' },
  { title: 'AI-Powered Document Processing', category: 'AI & Automation', desc: 'Built a RAG pipeline that processes thousands of legal documents daily. Users query in natural language and get cited answers from their document corpus.', tech: ['Python', 'LangChain', 'FastAPI', 'OpenAI', 'Vector DB'], img: images.aiAbstract },
  { title: 'Mobile Banking Application', category: 'Mobile Development', desc: 'Developed a cross-platform mobile banking app with offline-first architecture, biometric auth, push notifications, and deep link routing.', tech: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase'], img: images.designAbstract },
  { title: 'E-Commerce Platform Migration', category: 'Web Development', desc: 'Migrated a legacy e-commerce platform to a modern microservices architecture. Zero downtime during cutover. 3x improvement in page load times.', tech: ['Next.js', 'Go', 'Kubernetes', 'AWS', 'GraphQL'], img: images.serverRoom },
];

export default function WorkPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0">
          <Image src={images.codeAbstract} alt="" fill className="object-cover opacity-25" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/70 to-surface/95" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground-muted mb-6">Work</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[0.96] tracking-[-0.03em] text-foreground mb-8 text-balance">
                Projects we are<br />
                <span className="gradient-text">proud of.</span>
              </h1>
              <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">A selection of work across industries and technologies. Each project represents a close partnership with a client team.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-16 lg:py-24 border-b border-stroke-subtle last:border-b-0 items-center">
                <div className="lg:col-span-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-stroke">
                    <Image src={project.img} alt="" width={500} height={375} className="w-full h-full object-cover" unoptimized />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="text-xs font-semibold text-accent-blue uppercase tracking-[0.15em] mb-3">{project.category}</div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">{project.title}</h3>
                  <p className="text-foreground-muted leading-relaxed mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 text-xs rounded-full bg-surface-secondary border border-stroke text-foreground-muted">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 flex lg:justify-end">
                  <Link href="/contact" className="text-sm text-foreground-muted hover:text-foreground transition-colors flex items-center gap-2">
                    Similar project?
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-stroke-subtle text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">Have a project in mind?</h2>
            <p className="text-foreground-muted mb-8 max-w-md mx-auto">We would love to hear about it. No commitment, no pitch deck — just a conversation.</p>
            <Link href="/contact" className="inline-flex px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all duration-200">Start a Conversation</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
