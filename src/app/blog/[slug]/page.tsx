import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ScrollReveal';
import { blogPosts } from '@/data/blog';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://ragen.org/blog/${post.slug}`,
      siteName: 'Ragen',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: '/images/eloxee-1.jpg', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/images/eloxee-1.jpg'],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="w-full">
      {/* Article Header */}
      <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors mb-8"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold text-accent-blue uppercase tracking-[0.1em]">{post.category}</span>
                <span className="text-xs text-foreground-faint">{post.date}</span>
                <span className="text-xs text-foreground-faint">{post.readTime} read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[1.1] tracking-[-0.03em] text-foreground mb-6 text-balance">
                {post.title}
              </h1>
              <p className="text-lg text-foreground-muted leading-relaxed">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="text-sm font-medium text-foreground">{post.author}</div>
                <span className="text-foreground-faint text-xs">{post.tags.join(' · ')}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 lg:py-12 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <article className="max-w-3xl mx-auto">
            <div className="prose-custom">
              {post.content.split('\n').map((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) return <br key={i} />;
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-2xl lg:text-3xl font-display font-bold text-foreground mt-12 mb-4">
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }
                if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                  return (
                    <h3 key={i} className="text-lg font-display font-semibold text-foreground mt-8 mb-3">
                      {trimmed.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ') || trimmed.startsWith('4. ') || trimmed.startsWith('5. ')) {
                  return (
                    <p key={i} className="text-foreground-muted leading-relaxed ml-4 mb-2">
                      {trimmed}
                    </p>
                  );
                }
                if (trimmed.startsWith('- ')) {
                  return (
                    <p key={i} className="text-foreground-muted leading-relaxed ml-4 mb-2">
                      {trimmed}
                    </p>
                  );
                }
                if (trimmed.startsWith('|')) {
                  return (
                    <p key={i} className="text-sm text-foreground-faint font-mono leading-relaxed mb-1 overflow-x-auto">
                      {trimmed}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-foreground-muted leading-relaxed mb-4">
                    {trimmed}
                  </p>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-stroke-subtle text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
              Need help with your project?
            </h2>
            <p className="text-foreground-muted mb-8 max-w-md mx-auto">
              We do not just write about software — we build it. Let us talk about what you are working on.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all duration-200"
            >
              Start a Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
