'use client';

import { FolderOpen, Clock, EyeOff, RefreshCw } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const problems = [
  {
    icon: FolderOpen,
    title: 'Scattered across tools',
    description:
      'Contracts live in Google Docs, Word files, email threads, and shared drives with no single source of truth.',
  },
  {
    icon: Clock,
    title: 'Signatures get stuck',
    description:
      'Follow-ups are manual, reminders are forgotten, and deals stall waiting for someone to sign.',
  },
  {
    icon: EyeOff,
    title: 'No visibility into progress',
    description:
      "You can't see which contracts are delayed, stuck in review, or close to expiring.",
  },
  {
    icon: RefreshCw,
    title: 'Time lost on repetitive work',
    description:
      'Every contract starts from scratch. No templates, no reuse, no smart defaults.',
  },
];

export default function Problem() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-ocean-500 font-semibold">
              The Problem
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl mx-auto">
              Most contracts don&rsquo;t fail in the document. They fail in the
              process.
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
              Messy workflows, scattered files, and manual follow-ups cost teams
              hours every week — and let critical deals slip through the cracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={problem.title}
                  className={`fade-up ${isVisible ? 'visible' : ''} stagger-${index + 1} border border-slate-200/80 rounded-xl p-6 bg-white hover:shadow-md transition-all duration-200`}
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
