import Link from 'next/link';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/ragen.dev',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/ragen.org',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/ragen-dev',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <circle cx="4" cy="4" r="2" />
        <rect x="2" y="8" width="4" height="12" rx="0.5" />
        <path d="M14 12c0-1.105.895-2 2-2h0c1.105 0 2 .895 2 2v8h-4v-8z" />
        <rect x="8" y="8" width="4" height="12" rx="0.5" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/ragen_dev',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

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
    { label: 'Partnerships', href: '/partnerships' },
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
                  href="mailto:ragen@ragen.org"
                  className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                >
                  ragen@ragen.org
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
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-foreground-faint hover:text-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <Link href="/contact" className="text-xs text-foreground-muted hover:text-foreground transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
