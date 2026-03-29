'use client';

import { FileText, Building2, UserPlus, Scale, Sparkles, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  { icon: FileText, title: 'Choose contract type', description: 'Select from service agreements, NDAs, sales contracts, and more.' },
  { icon: Building2, title: 'Enter your details', description: 'Add your company information and key terms.' },
  { icon: UserPlus, title: 'Add counterparty', description: "Specify who you're contracting with." },
  { icon: Scale, title: 'Define terms', description: 'Set payment, duration, jurisdiction, and dispute resolution.' },
  { icon: Sparkles, title: 'Review & customize', description: 'AI generates your contract. Edit, refine, and finalize.' },
  { icon: Send, title: 'Send for signature', description: 'Route to recipients and track until fully signed.' },
];

export default function CreationFlow() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="creation-flow" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-ocean-500 font-semibold">How It Works</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 max-w-3xl mx-auto">
              Go from blank page to signed contract in minutes
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Contract Ocean&apos;s guided workflow takes the guesswork out of every step.
            </p>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-8 mb-4 max-w-5xl mx-auto">
              {steps.slice(0, 3).map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className={`fade-up ${isVisible ? 'visible' : ''} stagger-${index + 1} text-center`}>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-ocean-500 text-white font-semibold text-sm flex items-center justify-center">{index + 1}</div>
                      <div className="w-12 h-12 rounded-xl bg-ocean-50 flex items-center justify-center mt-4">
                        <Icon className="h-6 w-6 text-ocean-500" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mt-4">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-[220px]">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center max-w-5xl mx-auto mb-4">
              <div className="w-full border-t-2 border-dashed border-ocean-200" />
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.slice(3, 6).map((step, index) => {
                const Icon = step.icon;
                const stepNumber = index + 4;
                return (
                  <div key={step.title} className={`fade-up ${isVisible ? 'visible' : ''} stagger-${index + 4} text-center`}>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-ocean-500 text-white font-semibold text-sm flex items-center justify-center">{stepNumber}</div>
                      <div className="w-12 h-12 rounded-xl bg-ocean-50 flex items-center justify-center mt-4">
                        <Icon className="h-6 w-6 text-ocean-500" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mt-4">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-[220px]">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className={`fade-up ${isVisible ? 'visible' : ''} stagger-${index + 1} flex items-start gap-4`}>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-ocean-500 text-white font-semibold text-sm flex items-center justify-center">{index + 1}</div>
                    {index < steps.length - 1 && <div className="w-0.5 h-8 bg-ocean-200 mt-2 sm:hidden" />}
                  </div>
                  <div className="pt-1">
                    <div className="w-10 h-10 rounded-lg bg-ocean-50 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-ocean-500" />
                    </div>
                    <h3 className="font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
