import Link from 'next/link';
import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ScrollReveal';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog — Software Development Insights & Guides | Ragen',
  description:
    'Practical guides on software development, SaaS architecture, AI engineering, agency scaling, and startup MVP strategy. Written by senior engineers who ship production code.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Software Development Insights & Guides | Ragen',
    description:
      'Practical engineering guides on software development, SaaS, AI, agency scaling, and startup strategy from senior engineers.',
    url: 'https://ragen.org/blog',
    siteName: 'Ragen',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/eloxee-1.jpg', width: 1200, height: 630, alt: 'Ragen Blog — Software Development Insights' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ragen Blog — Software Development Insights',
    description: 'Practical engineering guides from senior developers. SaaS, AI, startups, agencies.',
    images: ['/images/eloxee-1.jpg'],
  },
};

export default function BlogPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[0.96] tracking-[-0.03em] text-foreground mb-6 text-balance">
                Writing about software<br />
                <span className="gradient-text">that actually ships.</span>
              </h1>
              <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
                Practical guides from engineers who build production software every day. No fluff, no hype, no AI-generated filler.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-8 lg:py-12 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-surface border border-stroke rounded-2xl p-8 h-full flex flex-col hover:border-accent-blue/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-accent-blue uppercase tracking-[0.1em]">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground-faint">{post.date}</span>
                    <span className="text-xs text-foreground-faint">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-accent-blue transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-foreground-faint group-hover:text-foreground-muted transition-colors">
                    <span>Read more</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-stroke-subtle text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
              Have a topic you would like us to cover?
            </h2>
            <p className="text-foreground-muted mb-8 max-w-md mx-auto">
              We write about real engineering challenges. Tell us what you are wrestling with.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all duration-200"
            >
              Suggest a Topic
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
