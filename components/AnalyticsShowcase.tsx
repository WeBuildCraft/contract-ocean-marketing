'use client';

import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const metrics = [
  { value: '87%', label: 'completion rate', description: 'Track how many contracts reach fully signed status' },
  { value: '2.4 day', label: 'avg turnaround', description: 'Monitor how quickly contracts move from sent to signed' },
  { value: '23%', label: 'faster this quarter', description: 'Compare performance across time periods' },
];

export default function AnalyticsShowcase() {
  const { ref, isVisible } = useScrollAnimation();
  const [screenshotError, setScreenshotError] = useState(false);

  return (
    <section id="analytics" className="bg-slate-900 text-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-ocean-400 font-semibold">Contract Intelligence</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto">
              Turn contract activity into performance insights
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
              Most tools stop at the signature. Contract Ocean shows you what happens
              before, during, and after — so you can close deals faster and fix what&apos;s
              not working.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`fade-up ${isVisible ? 'visible' : ''} stagger-${index + 1} bg-slate-800/50 border border-slate-700/50 rounded-xl p-5`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-white">{metric.value}</span>
                    <span className="text-base font-medium text-slate-300">{metric.label}</span>
                    <div className="ml-auto flex items-center gap-1 text-emerald-400">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">{metric.description}</p>
                </div>
              ))}
            </div>

            <div className={`fade-up ${isVisible ? 'visible' : ''} stagger-4 relative`}>
              <div className="absolute inset-0 bg-ocean-500/10 blur-3xl rounded-full scale-110" />
              <div className="relative screenshot-frame-elevated">
                {screenshotError ? (
                  <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-ocean-600/20 to-ocean-400/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-xl bg-slate-700/50 flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-8 w-8 text-ocean-400" />
                      </div>
                      <p className="text-sm text-slate-400">Analytics Dashboard Preview</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src="/screenshots/analytics.png"
                    alt="Contract Ocean analytics dashboard showing contract performance metrics, completion rates, and turnaround times"
                    className="w-full rounded-lg"
                    onError={() => setScreenshotError(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
