 'use client';

  import { useState, FormEvent } from 'react';
  import Link from 'next/link';
  import Image from 'next/image';
  import { ScrollReveal } from '@/components/ScrollReveal';
  import { images } from '@/data/images';

  const faqs = [
    {
      q: 'How does the trial sprint work?',
      a: 'We scope a small, paid sprint — typically 1-2 weeks — on a real task your team needs done. You pay for the sprint. We ship working code. If you like the quality and the process, we continue. If not, we part ways cleanly.',
    },
    {
      q: 'What is the minimum engagement?',
      a: 'For managed teams, we ask for a 3-month commitment to start, then month-to-month after that. For project work, it depends on the scope. For staff augmentation, there is no minimum — you can scale up or down as needed.',
    },
    {
      q: 'Who owns the code?',
      a: 'You do. All code, documentation, and intellectual property created during the engagement belongs to you. We work in your repositories, under your accounts, from day one.',
    },
    {
      q: 'How do you handle time zones?',
      a: 'We work primarily in IST (India Standard Time) but maintain significant overlap with US and European time zones. Our team is available during your working hours for standups and collaboration.',
    },
    {
      q: 'What technologies do you work with?',
      a: 'Our core stack is React, Next.js, Node.js, Python, and Go on the backend, with PostgreSQL, MongoDB, and Redis for data. We also have deep experience with AWS, GCP, Docker, and Kubernetes. If your stack is not listed, ask — we have likely worked with it.',
    },
  ];

  export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setSending(true);
      const formData = new FormData();
      formData.append('access_key', 'bce854da-5c12-4584-bad0-f3c1312a6c74');
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('company', form.company);
      formData.append('message', form.message);
      try {
        await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      } catch (_) {}
      setSending(false);
      setSubmitted(true);
    };

    return (
      <>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image src={images.darkGeometric} alt="" fill className="object-cover opacity-20" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/70 to-surface/95" />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[0.96] tracking-[-0.03em] text-foreground mb-8">
                  Let&rsquo;s talk about
                  <br />
                  <span className="gradient-text">what you need to build.</span>
                </h1>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-16 lg:py-24 border-t border-stroke-subtle">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Form */}
              <ScrollReveal>
                {submitted ? (
                  <div className="p-10 bg-surface-secondary border border-stroke rounded-2xl text-center">
                    <div className="w-14 h-14 rounded-2xl bg-accent-blue/[0.08] border border-accent-blue/[0.15] flex items-center justify-center mx-auto
  mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-blue">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      Message received.
                    </h3>
                    <p className="text-sm text-foreground-muted mb-6">
                      We typically respond within a few hours during business days.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', message: '' }); }}
                      className="text-sm text-accent-blue hover:text-accent-violet transition-colors">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs text-foreground-muted mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-secondary border border-stroke rounded-xl text-sm text-foreground
  placeholder:text-foreground-faint focus:outline-none focus:border-accent-blue transition-colors"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-foreground-muted mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-secondary border border-stroke rounded-xl text-sm text-foreground
  placeholder:text-foreground-faint focus:outline-none focus:border-accent-blue transition-colors"
                        placeholder="you@company.com" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs text-foreground-muted mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-secondary border border-stroke rounded-xl text-sm text-foreground
  placeholder:text-foreground-faint focus:outline-none focus:border-accent-blue transition-colors"
                        placeholder="Your company" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs text-foreground-muted mb-2">
                        What are you looking to build?
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-secondary border border-stroke rounded-xl text-sm text-foreground
  placeholder:text-foreground-faint focus:outline-none focus:border-accent-blue transition-colors resize-none"
                        placeholder="Tell us about your project, timeline, and what kind of help you need..." />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3.5 bg-white hover:bg-white/90 text-black font-medium text-sm rounded-xl transition-all disabled:opacity-60">
                      {sending ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xs font-semibold text-foreground-faint uppercase tracking-wider mb-4">
                      Email
                    </h3>
                    <a
                      href="mailto:ragen@ragen.org"
                      className="text-xl font-display font-medium text-foreground hover:text-accent-blue transition-colors">
                      ragen@ragen.org
                    </a>
                    <p className="text-sm text-foreground-muted mt-2">
                      We typically respond within a few hours during business days.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-foreground-faint uppercase tracking-wider mb-4">
                      Phone
                    </h3>
                    <a
                      href="tel:+917078082045"
                      className="text-xl font-display font-medium text-foreground hover:text-accent-blue transition-colors">
                      +91 70780 82045
                    </a>
                    <p className="text-sm text-foreground-muted mt-2">
                      Available during business hours, India time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-foreground-faint uppercase tracking-wider mb-4">
                      Location
                    </h3>
                    <p className="text-foreground-muted text-sm">India</p>
                    <p className="text-sm text-foreground-muted mt-1">
                      Working with teams across North America, Europe, and Asia-Pacific.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-foreground-faint uppercase tracking-wider mb-4">
                      What happens next
                    </h3>
                    <ol className="space-y-4">
                      {[
                        'You send us a message about what you need.',
                        'We reply within 24 hours to schedule a call.',
                        'We talk for 30 minutes about your project. No pitch deck.',
                        'If there is a fit, we propose a paid trial sprint — a real task, real code, real commitment.',
                      ].map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm text-foreground-muted">
                          <span className="text-xs font-mono text-foreground-faint shrink-0 mt-0.5">
                            {`0${i + 1}`}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="pt-6 border-t border-stroke">
                    <Link
                      href="/process"
                      className="text-sm text-foreground-muted hover:text-foreground transition-colors flex items-center gap-2">
                      Learn more about our process
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
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
        <section className="py-16 lg:py-24 border-t border-stroke-subtle">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <div className="mb-12 lg:mb-16">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                  Frequently asked questions.
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl divide-y divide-stroke">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <details className="group py-5">
                    <summary className="flex justify-between items-start gap-4 cursor-pointer list-none">
                      <span className="font-display font-medium text-foreground group-open:text-accent-blue transition-colors">
                        {faq.q}
                      </span>
                      <span className="text-foreground-faint group-open:rotate-45 transition-transform shrink-0 mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-foreground-muted leading-relaxed pr-8">{faq.a}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
