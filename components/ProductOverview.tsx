'use client';

import { FileText, Edit3, Send, PenTool, BarChart3, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const capabilities = [
  { icon: FileText, title: 'Draft', description: 'Create contracts from scratch or with AI' },
  { icon: Edit3, title: 'Edit', description: 'Collaborate with a smart contract editor' },
  { icon: Send, title: 'Send', description: 'Route contracts to the right people' },
  { icon: PenTool, title: 'Sign', description: 'Collect legally binding e-signatures' },
  { icon: BarChart3, title: 'Track', description: 'Monitor progress and spot delays' },
  { icon: TrendingUp, title: 'Improve', description: 'Use insights to close deals faster' },
];

export default function ProductOverview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 gradient-ocean-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-ocean-500 font-semibold">
              The Solution
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl mx-auto">
              One workspace for every agreement
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Contract Ocean brings drafting, editing, sending, signing,
              tracking, and improving contracts into a single platform your
              whole team can use.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={capability.title}
                  className={`fade-up ${isVisible ? 'visible' : ''} stagger-${index + 1} bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
                >
                  <div className="w-10 h-10 rounded-lg bg-ocean-50 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-ocean-500" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{capability.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
