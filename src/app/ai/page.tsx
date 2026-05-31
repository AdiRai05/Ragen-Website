import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ScrollReveal';
import { images } from '@/data/images';

export const metadata: Metadata = {
  title: 'AI Development Services — Ragen | LLM, RAG, AI Agents & Automation',
  description:
    'Ragen builds production-ready AI solutions: LLM-powered features, RAG pipelines, AI agents, intelligent automation. Practical AI engineering that delivers real business value, not just demos.',
  alternates: {
    canonical: '/ai',
  },
  openGraph: {
    title: 'AI Development Services — Ragen | LLM, RAG, Agents & Automation',
    description:
      'LLM-powered features, RAG pipelines, AI agents, and workflow automation that ships to production. Real AI engineering that delivers business results.',
    url: 'https://ragen.org/ai',
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

const capabilities = [
  { number: '01', title: 'LLM-Powered Features', desc: 'Embedding intelligent chat, search, summarization, and content generation directly into your product. We handle context windows, prompt engineering, streaming, and the edge cases that make or break the user experience.', tags: ['OpenAI', 'Streaming', 'Prompt Engineering', 'Context Management'] },
  { number: '02', title: 'RAG & Knowledge Systems', desc: 'Retrieval-augmented generation pipelines that connect LLMs to your actual data. Vector databases, chunking strategies, hybrid search — the plumbing that makes AI useful instead of just impressive in a demo video.', tags: ['Vector DBs', 'LangChain', 'Hybrid Search', 'Embeddings'] },
  { number: '03', title: 'Intelligent Automation', desc: 'Workflows that connect your tools and reduce manual work. Document processing, email triage, data extraction, report generation. The boring-but-valuable stuff that saves thousands of hours when done right.', tags: ['Python', 'FastAPI', 'Workflow Engines', 'OCR'] },
  { number: '04', title: 'AI Agents & Decision Systems', desc: 'Multi-step reasoning agents that can research, analyze, and act. We build these for internal operations — customer support triage, lead qualification, compliance checks — where the ROI is immediate and measurable.', tags: ['Agents', 'Tool Use', 'Multi-step Reasoning', 'Evaluation'] },
];

export default function AIPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0">
          <Image src={images.aiAbstract} alt="" fill className="object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/70 to-surface/95" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[0.96] tracking-[-0.03em] text-foreground mb-8 text-balance">
                AI that <span className="gradient-text">actually ships.</span><br />Not just a demo.
              </h1>
              <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">We have been building with LLMs since before it was a marketing category. Practical AI that delivers measurable results, not hype.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.number} delay={i * 0.1}>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 py-16 lg:py-20 border-b border-stroke-subtle last:border-b-0 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-stroke group hover:border-accent-blue/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20">
                    <Image
                      src={i === 0 ? images.aiAbstract : i === 1 ? images.codeAbstract : i === 2 ? images.circuitBoard : images.gradientFluid}
                      alt={cap.title}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div>
<h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">{cap.title}</h3>
                  <p className="text-foreground-muted leading-relaxed mb-6">{cap.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 text-xs rounded-full bg-surface-secondary border border-stroke text-foreground-muted">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 lg:py-28 border-t border-stroke-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">How we approach AI.</h2>
              <p className="text-foreground-muted max-w-xl">Principles that keep us grounded in outcomes, not hype.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
            {['Start with the problem. AI is a means, not an end.', 'Ship to production, not demos. Build for real users from day one.', 'Measure what matters. Define success metrics before writing code.', 'Keep humans in the loop. The best AI knows when to escalate.', 'Use the right model. Not everything needs GPT-4.', 'Build for change. The AI landscape shifts monthly.'].map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="p-6 rounded-xl border border-stroke bg-surface-secondary/30 hover:border-accent-blue/20 hover:bg-surface-secondary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10">
<p className="text-sm text-foreground-muted leading-relaxed">{p}</p>
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
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">Have an AI project in mind?</h2>
            <p className="text-foreground-muted mb-8 max-w-md mx-auto">Tell us what you are trying to accomplish. We will tell you if AI is the answer.</p>
            <Link href="/contact" className="inline-flex px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all duration-200">Start a Conversation</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
