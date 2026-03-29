'use client';

import Link from 'next/link';
import { Palette, Rocket, Briefcase, Target, Users, Settings, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface UseCase {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}

const useCases: UseCase[] = [
  { icon: Palette, title: 'Agencies', description: 'Manage client contracts, SOWs, and NDAs without the admin overhead. Create, send, and track agreements across every account.', href: '/solutions/agencies' },
  { icon: Rocket, title: 'Startups', description: 'Move fast without cutting corners. Generate professional contracts with AI, get signatures faster, and keep your legal house in order from day one.', href: '/solutions/startups' },
  { icon: Briefcase, title: 'Consultancies', description: 'Standardize engagement letters and consulting agreements. Track which contracts are pending and follow up before deals go cold.', href: '/solutions/consultancies' },
  { icon: Target, title: 'Sales Teams', description: 'Turn proposals into signed contracts faster. Track signature turnaround, identify bottlenecks, and close deals with fewer follow-ups.', href: '/solutions/sales-teams' },
  { icon: Users, title: 'HR & Hiring', description: 'Onboard employees and contractors with ready-to-use templates. Employment offers, freelancer agreements, and NDAs — all in one place.', href: '/solutions/hr-teams' },
  { icon: Settings, title: 'Operations', description: 'Bring visibility to every contract across the organization. Track vendor agreements, renewals, and compliance from a single dashboard.', href: '/solutions/operations' },
];

export default function UseCases() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="solutions" className="bg-slate-50 py-20 md:py-28">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-ocean-500 font-semibold mb-4">SOLUTIONS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built for teams that run on contracts</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            Whether you&apos;re closing client deals, onboarding employees, or managing vendor
            relationships — Contract Ocean adapts to how your team works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className={`bg-white rounded-xl p-6 border border-slate-200/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-up stagger-1-8 ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="w-12 h-12 rounded-xl bg-ocean-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-ocean-600" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mt-4">{useCase.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{useCase.description}</p>
                <Link href={useCase.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-ocean-600 mt-4 hover:text-ocean-700 transition-colors group/link">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}
