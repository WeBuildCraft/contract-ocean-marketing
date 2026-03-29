'use client';

import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const essentialsFeatures = [
  'Unlimited contracts',
  'Professional templates',
  'E-signatures',
  'AI contract generation',
  'Basic analytics',
  'Contact management',
  'PDF export',
];

const growthFeatures = [
  'Everything in Essentials',
  'Smart Insights',
  'Bottleneck detection',
  'Advanced analytics dashboard',
  'Smart recommendations',
  'Template performance tracking',
  'Priority support',
];

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 fade-up ${isVisible ? 'visible' : ''}`}>
          <p className="text-xs uppercase tracking-widest text-ocean-500 mb-4">PRICING</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing, powerful contracts</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the plan that matches how your team works. No hidden fees, no per-signature charges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
          <div className={`bg-white border border-slate-200 rounded-2xl p-8 fade-up stagger-1-8 ${isVisible ? 'visible' : ''}`}>
            <p className="font-semibold text-xl mb-2">Essentials</p>
            <p className="text-slate-600 mb-6">Everything you need to create and send contracts</p>
            <div className="mb-6">
              <span className="text-5xl font-bold">$15</span>
              <span className="text-slate-500">/month</span>
            </div>
            <button className="btn-secondary w-full mb-8">Start with Essentials</button>
            <ul className="space-y-3">
              {essentialsFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-[15px]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`pricing-highlight relative bg-white rounded-2xl p-8 fade-up stagger-1-8 ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: '100ms' }}
          >
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ocean-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
              Recommended
            </span>
            <p className="font-semibold text-xl mb-2">Growth</p>
            <p className="text-slate-600 mb-6">
              Everything you need to close contracts faster and uncover what&apos;s slowing deals down
            </p>
            <div className="mb-6">
              <span className="text-5xl font-bold">$49</span>
              <span className="text-slate-500">/month</span>
            </div>
            <button className="btn-primary w-full mb-8">Start with Growth</button>
            <ul className="space-y-3">
              {growthFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-[15px]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={`text-center text-sm text-slate-500 mt-10 fade-up ${isVisible ? 'visible' : ''}`}>
          Both plans include a 14-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  );
}
