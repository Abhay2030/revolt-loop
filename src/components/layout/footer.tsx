import Link from 'next/link';
import { Leaf } from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Impact', href: '/impact' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/about#careers' },
      { label: 'Press', href: '/about#press' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Book a Pickup', href: '/app/bookings/new' },
      { label: 'Enterprise ITAD', href: '/enterprise' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Verify Certificate', href: '/verify-certificate/demo' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Help Center', href: '/contact' },
      { label: 'API Documentation', href: '/blog' },
      { label: 'Partner Program', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Data Processing', href: '/privacy' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-1/50">
      <div className="container mx-auto px-6 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <Leaf className="h-4 w-4 text-accent-foreground" />
              </div>
              <span className="font-[family-name:var(--font-outfit)] text-lg font-bold tracking-tighter">
                ReVolt<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Powering a Circular Future. Responsible e-waste recycling made simple, traceable, and impactful.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {['X', 'Li', 'In', 'Gh'].map((icon) => (
                <div
                  key={icon}
                  className="h-9 w-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-xs font-bold text-muted-foreground hover:text-foreground hover:border-accent/30 transition-all cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-semibold text-sm mb-1">Stay in the loop</h4>
            <p className="text-xs text-muted-foreground">Get the latest on sustainable tech and circular economy insights.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-64 h-10 rounded-xl border border-border bg-surface-1 px-4 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40"
              aria-label="Email for newsletter"
            />
            <button className="h-10 px-5 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ReVolt Energy Pvt. Ltd. All rights reserved. Built in India 🇮🇳
        </div>
      </div>
    </footer>
  );
}
