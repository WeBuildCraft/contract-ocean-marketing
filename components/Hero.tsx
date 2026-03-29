'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="gradient-hero relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(10, 122, 255, 0.12) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-4xl text-center">
          <div className={`fade-up ${isVisible ? 'visible' : ''}`}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2l2.09 6.26L20 9.27l-4.91 3.82L16.18 20 12 16.77 7.82 20l1.09-6.91L4 9.27l5.91-1.01z" />
              </svg>
              AI-powered contract platform
            </span>
          </div>

          <h1
            className={`fade-up ${isVisible ? 'visible' : ''} mt-6 text-[28px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight text-slate-900`}
          >
            Contracts that move{' '}
            <span className="gradient-text">as fast as</span>{' '}
            your business
          </h1>

          <p
            className={`fade-up stagger-1 ${isVisible ? 'visible' : ''} mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl`}
          >
            Create professional contracts with AI, send them for signature, and
            track performance&nbsp;&mdash; all in one workspace. No scattered docs, no
            email chains, no bottlenecks.
          </p>

          <div
            className={`fade-up stagger-2 ${isVisible ? 'visible' : ''} mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row`}
          >
            <a href="#get-started" className="btn-primary">
              Start free
            </a>
            <a href="#demo" className="btn-secondary">
              Book a demo
            </a>
          </div>

          <p
            className={`fade-up stagger-2 ${isVisible ? 'visible' : ''} mt-5 text-sm text-slate-400`}
          >
            Free to start &middot; No credit card required
          </p>
        </div>

        <div
          className={`fade-up stagger-3 ${isVisible ? 'visible' : ''} mx-auto mt-16 max-w-5xl`}
        >
          <div className="screenshot-frame-elevated animate-float">
            <div className="browser-mockup">
              <div className="browser-mockup-bar">
                <div className="flex items-center gap-1.5">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                </div>
                <div className="browser-url">app.contractocean.com</div>
              </div>

              <div className="relative w-full overflow-hidden">
                <img
                  src="/screenshots/dashboard.png"
                  alt="Contract Ocean dashboard"
                  className="block w-full"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div
                  className="hidden aspect-[16/9] w-full rounded-b-lg"
                  style={{
                    background:
                      'linear-gradient(135deg, #e0ecff 0%, #f0f7ff 40%, #dbeafe 70%, #c7dbff 100%)',
                  }}
                >
                  <div className="flex h-full flex-col items-center justify-center gap-3 text-slate-400">
                    <svg
                      className="h-12 w-12 opacity-40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span className="text-sm font-medium">Dashboard Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
