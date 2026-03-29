'use client';

import { Check, X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ComparisonRow {
  feature: string;
  basicTools: 'check' | 'x' | string;
  contractOcean: 'check' | string;
}

const comparisonData: ComparisonRow[] = [
  { feature: 'E-signatures', basicTools: 'check', contractOcean: 'check' },
  { feature: 'AI contract generation', basicTools: 'x', contractOcean: 'check' },
  { feature: 'Professional templates', basicTools: 'Limited', contractOcean: '12+ templates' },
  { feature: 'Smart contract editor', basicTools: 'x', contractOcean: 'check' },
  { feature: 'Performance analytics', basicTools: 'x', contractOcean: 'check' },
  { feature: 'Bottleneck detection', basicTools: 'x', contractOcean: 'check' },
  { feature: 'Smart insights', basicTools: 'x', contractOcean: 'check' },
  { feature: 'Contact management', basicTools: 'x', contractOcean: 'check' },
  { feature: 'Guided creation flow', basicTools: 'x', contractOcean: 'check' },
];

function CellValue({ value, isOcean }: { value: string; isOcean?: boolean }) {
  if (value === 'check') {
    return (
      <span className="comparison-check inline-flex items-center justify-center">
        <Check className="w-5 h-5 text-emerald-500" />
      </span>
    );
  }
  if (value === 'x') {
    return (
      <span className="comparison-x inline-flex items-center justify-center">
        <X className="w-5 h-5 text-slate-300" />
      </span>
    );
  }
  return (
    <span className={isOcean ? 'text-ocean-700 font-medium text-sm' : 'text-slate-400 text-sm'}>
      {value}
    </span>
  );
}

export default function WhyContractOcean() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why" className="bg-white py-20 md:py-28">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-up ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-ocean-500 font-semibold mb-4">WHY CONTRACT OCEAN</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            More than an e-signature tool.{' '}
            <span className="gradient-text">Smarter than a document editor.</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            Most tools solve one piece of the puzzle. Contract Ocean handles the entire contract
            workflow — from first draft to final insight.
          </p>
        </div>

        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-200/60">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200/60">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-500 bg-slate-50/50 w-1/3">Feature</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-slate-500 bg-slate-50/50 w-1/3">Basic e-sign tools</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold bg-ocean-50 text-ocean-700 w-1/3">Contract Ocean</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-200/60 last:border-b-0 ${isVisible ? 'visible' : ''} stagger-1-8`}
                    style={{ transitionDelay: isVisible ? `${index * 60}ms` : '0ms' }}
                  >
                    <td className="py-4 px-6 text-sm font-medium text-slate-700">{row.feature}</td>
                    <td className="py-4 px-6 text-center"><CellValue value={row.basicTools} /></td>
                    <td className="py-4 px-6 text-center bg-ocean-50/40"><CellValue value={row.contractOcean} isOcean /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:hidden max-w-md mx-auto space-y-3">
          {comparisonData.map((row, index) => (
            <div
              key={row.feature}
              className={`rounded-xl border border-slate-200/80 p-4 bg-white fade-up ${isVisible ? 'visible' : ''} stagger-1-8`}
              style={{ transitionDelay: isVisible ? `${index * 60}ms` : '0ms' }}
            >
              <p className="text-sm font-medium text-slate-800 mb-3">{row.feature}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>Basic tools:</span>
                  <CellValue value={row.basicTools} />
                </div>
                <div className="flex items-center gap-2 text-xs text-ocean-700 font-medium">
                  <span>Contract Ocean:</span>
                  <CellValue value={row.contractOcean} isOcean />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" />
    </section>
  );
}
