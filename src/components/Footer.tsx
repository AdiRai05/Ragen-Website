import Link from 'next/link';

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'SaaS Development', href: '/services/saas-development' },
    { label: 'Mobile Apps', href: '/services/mobile-development' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    { label: 'AI Integrations', href: '/services/ai-integrations' },
    { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-stroke">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        {/* Top: Logo + Brand Statement */}
        <div className="mb-16 lg:mb-20">
          <img src="/logo.png" alt="Ragen" className="h-10 w-auto mb-8" />
          <p className="text-2xl lg:text-3xl font-display font-medium text-foreground max-w-2xl text-balance leading-snug">
            A development studio at the intersection of engineering precision and design craft.
          </p>
        </div>

        {/* Middle: Link Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-foreground-faint uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-semibold text-foreground-faint uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@ragen.dev"
                  className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                >
                  hello@ragen.dev
                </a>
              </li>
              <li>
                <span className="text-sm text-foreground-muted">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-stroke">
          <p className="text-xs text-foreground-faint">
            &copy; {new Date().getFullYear()} Ragen. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-xs text-foreground-muted hover:text-foreground transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
