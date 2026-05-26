'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Work', href: '/work' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Web Development', href: '/services/web-development', desc: 'Full-stack applications' },
      { label: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant platforms' },
      { label: 'Mobile Apps', href: '/services/mobile-development', desc: 'iOS & Android' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design', desc: 'Interface & design systems' },
      { label: 'AI Integrations', href: '/services/ai-integrations', desc: 'LLMs & automation' },
      { label: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'Infrastructure' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'AI', href: '/ai' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Show/hide based on scroll direction
    if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
      // Scrolling down — hide
      setVisible(false);
      setServicesOpen(false);
    } else {
      // Scrolling up — show
      setVisible(true);
    }

    // Glass effect when scrolled
    setScrolled(currentScrollY > 20);
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4',
          visible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <nav
          className={cn(
            'max-w-[1400px] mx-auto flex items-center justify-between h-16 px-6 lg:px-8 transition-all duration-300 rounded-2xl',
            scrolled
              ? 'bg-surface/85 backdrop-blur-xl border border-stroke shadow-2xl shadow-black/20'
              : 'bg-surface/60 backdrop-blur-md border border-stroke/50'
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img src="/logo.png" alt="Ragen" className="h-11 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="px-5 py-2.5 text-[15px] font-medium text-foreground-muted hover:text-foreground transition-colors rounded-lg"
                  >
                    {link.label}
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-surface-elevated/95 backdrop-blur-xl border border-stroke rounded-2xl p-2 shadow-2xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 rounded-xl hover:bg-white/[0.04] transition-colors"
                        >
                          <div className="text-sm font-medium text-foreground">{child.label}</div>
                          <div className="text-xs text-foreground-faint mt-0.5">{child.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-5 py-2.5 text-[15px] font-medium text-foreground-muted hover:text-foreground transition-colors rounded-lg"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/contact"
              className="px-6 py-2.5 text-[15px] font-semibold bg-white hover:bg-white/90 text-black rounded-xl transition-all duration-200"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full border border-stroke"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                'block w-5 h-px bg-foreground rounded-full transition-all duration-300',
                mobileOpen && 'rotate-45 translate-y-[3.5px]'
              )}
            />
            <span
              className={cn(
                'block w-5 h-px bg-foreground rounded-full transition-all duration-300',
                mobileOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block w-5 h-px bg-foreground rounded-full transition-all duration-300',
                mobileOpen && '-rotate-45 -translate-y-[3.5px]'
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-surface border-l border-stroke p-8 pt-24 flex flex-col">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div className="text-sm font-medium text-foreground-muted px-3 py-2">{link.label}</div>
                    <div className="ml-3 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-sm text-foreground-muted hover:text-foreground transition-colors rounded-lg"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-lg font-medium text-foreground-muted hover:text-foreground transition-colors rounded-lg"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
            <div className="mt-auto pt-8 border-t border-stroke">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full py-3 text-center text-sm font-medium bg-white text-black rounded-xl"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
