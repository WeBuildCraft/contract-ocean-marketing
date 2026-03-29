'use client';

import React from 'react';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';

const companies = [
  'Meridian Tech',
  'CloudVault',
  'GreenLeaf',
  'ApexGroup',
  'BrightWave',
  'SecureNet',
];

interface StatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  isVisible: boolean;
}

const StatCounter: React.FC<StatProps> = ({
  end,
  suffix = '',
  prefix = '',
  decimals = 0,
  label,
  isVisible,
}) => {
  const count = useCountUp(end, 2000, isVisible);
  const divisor = Math.pow(10, decimals);
  const display = decimals > 0 ? (count / divisor).toFixed(decimals) : count.toLocaleString();

  return (
    <div className="flex flex-col items-center px-6 py-4">
      <span className="text-3xl font-bold text-slate-900 md:text-4xl">
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="mt-1 text-sm text-slate-500">{label}</span>
    </div>
  );
};

const SocialProof: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-slate-50 py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p
          className={`fade-up ${isVisible ? 'visible' : ''} text-center text-sm font-semibold uppercase tracking-wider text-slate-500`}
        >
          Trusted by teams managing contracts faster
        </p>

        <div
          className={`fade-up stagger-1 ${isVisible ? 'visible' : ''} mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14`}
        >
          {companies.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center opacity-40 grayscale transition-all duration-300 hover:opacity-70"
            >
              <span className="select-none whitespace-nowrap text-lg font-semibold tracking-tight text-slate-700 md:text-xl">
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="mx-auto my-12 h-px max-w-md bg-slate-200" />

        <div
          className={`fade-up stagger-2 ${isVisible ? 'visible' : ''} flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12 md:gap-16`}
        >
          <StatCounter end={2400} suffix="+" label="Contracts created" isVisible={isVisible} />
          <StatCounter end={87} suffix="%" label="Average completion rate" isVisible={isVisible} />
          <StatCounter end={24} decimals={1} suffix=" days" label="Average signature time" isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
