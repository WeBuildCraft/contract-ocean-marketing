'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Waves, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Templates', href: '#templates' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ocean-500 text-white transition-colors group-hover:bg-ocean-600">
              <Waves className="h-4.5 w-4.5" strokeWidth={2.25} />
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-slate-900">
              Contract Ocean
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-3.5 py-2 text-[13.5px] font-medium text-slate-600 rounded-lg transition-colors hover:text-slate-900 hover:bg-slate-100/70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#signin"
              className="px-3.5 py-2 text-[13.5px] font-medium text-slate-600 rounded-lg transition-colors hover:text-slate-900 hover:bg-slate-100/70"
            >
              Sign in
            </a>
            <a
              href="#start"
              className="inline-flex items-center justify-center h-9 px-4 text-[13.5px] font-semibold text-white bg-ocean-500 rounded-lg transition-all hover:bg-ocean-600 active:bg-ocean-700 shadow-[0_1px_2px_rgba(10,122,255,0.3),inset_0_1px_0_rgba(255,255,255,0.15)]"
            >
              Start free
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[calc(100dvh-4rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/60 px-4 pb-6 pt-2 sm:px-6">
          <ul className="space-y-0.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-slate-200/60 space-y-2">
            <a
              href="#signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-center text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              Sign in
            </a>
            <a
              href="#start"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-lg py-2.5 text-center text-[15px] font-semibold text-white bg-ocean-500 transition-colors hover:bg-ocean-600 active:bg-ocean-700 shadow-[0_1px_2px_rgba(10,122,255,0.3)]"
            >
              Start free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
