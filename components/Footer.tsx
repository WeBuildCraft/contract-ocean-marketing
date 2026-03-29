'use client';

import Link from 'next/link';
import { Waves, Twitter, Linkedin, Github } from 'lucide-react';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Create Contracts', href: '#' },
      { label: 'Templates', href: '#' },
      { label: 'AI Generator', href: '#' },
      { label: 'Sign & Send', href: '#' },
      { label: 'Analytics', href: '#' },
      { label: 'Editor', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Agencies', href: '/solutions/agencies' },
      { label: 'Startups', href: '/solutions/startups' },
      { label: 'Consultancies', href: '/solutions/consultancies' },
      { label: 'Sales Teams', href: '/solutions/sales-teams' },
      { label: 'HR Teams', href: '/solutions/hr-teams' },
      { label: 'Operations', href: '/solutions/operations' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'API', href: '#' },
      { label: "What's New", href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

const socialLinks = [
  { label: 'Twitter', icon: Twitter, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'GitHub', icon: Github, href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-25">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
            <div className="col-span-2 sm:col-span-3 lg:col-span-2 lg:pr-8">
              <Link href="/" className="inline-flex items-center gap-2.5 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ocean-500 text-white transition-colors group-hover:bg-ocean-600">
                  <Waves className="h-4.5 w-4.5" strokeWidth={2.25} />
                </div>
                <span className="text-[15px] font-semibold tracking-tight text-slate-900">Contract Ocean</span>
              </Link>
              <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-slate-500">
                Smarter contract workflows for modern businesses
              </p>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[12.5px] font-semibold uppercase tracking-wider text-slate-400">{column.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('/') ? (
                        <Link href={link.href} className="text-[13.5px] text-slate-600 transition-colors hover:text-slate-900">{link.label}</Link>
                      ) : (
                        <a href={link.href} className="text-[13.5px] text-slate-600 transition-colors hover:text-slate-900">{link.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 py-6 sm:flex-row">
          <p className="text-[13px] text-slate-400">&copy; 2026 Contract Ocean. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
