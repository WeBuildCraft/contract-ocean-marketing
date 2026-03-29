'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Clock,
  Users,
  EyeOff,
  RefreshCw,
  Sparkles,
  Send,
  BarChart3,
  FileText,
  Handshake,
  Brain,
  PenTool,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  ListChecks,
  UserPlus,
  Search,
  Settings,
} from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Slow offer letters',
    description:
      'New hires waiting days for offer letters and contracts, delaying start dates and creating a poor first impression.',
  },
  {
    icon: Users,
    title: 'Multiple contract types',
    description:
      'Managing different contract types for employees, contractors, and freelancers across disconnected tools.',
  },
  {
    icon: EyeOff,
    title: 'No signing visibility',
    description:
      'No central place to track which agreements have been signed, leaving HR in the dark on onboarding status.',
  },
  {
    icon: RefreshCw,
    title: 'Repetitive document work',
    description:
      'HR spending hours on repetitive document creation instead of focusing on people and culture.',
  },
];

const solutionBlocks = [
  {
    eyebrow: 'AI DRAFTING',
    headline: 'Generate offer letters and employment contracts with AI',
    body: 'Select the contract type, enter role details and compensation, and let AI generate a complete, professional agreement. From offer letters to contractor agreements, every document is ready in minutes — not hours.',
    icon: Sparkles,
  },
  {
    eyebrow: 'DIGITAL SIGNATURES',
    headline: 'Send agreements for digital signature — onboard faster',
    body: 'No more printing, scanning, or chasing signatures through email. Send contracts directly to candidates and employees, let them sign digitally from any device, and cut your onboarding timeline dramatically.',
    icon: Send,
  },
  {
    eyebrow: 'AGREEMENT TRACKING',
    headline: 'Track every employment agreement from offer to completion',
    body: 'See the status of every onboarding contract in one dashboard. Know who has signed, who is pending, and which agreements are overdue — all without sending a single follow-up email.',
    icon: BarChart3,
  },
];

const features = [
  {
    icon: FileText,
    title: 'Employment templates',
    description:
      'Pre-built templates for offer letters, employment agreements, and probation contracts — ready to customize.',
  },
  {
    icon: Handshake,
    title: 'Contractor agreements',
    description:
      'Dedicated templates for independent contractors, freelancers, and consultants with appropriate legal terms.',
  },
  {
    icon: Brain,
    title: 'AI-powered drafting',
    description:
      'Let AI handle the heavy lifting. Generate complete contracts from a few inputs — role, compensation, and terms.',
  },
  {
    icon: PenTool,
    title: 'Digital onboarding signatures',
    description:
      'Collect legally-binding e-signatures from candidates and employees on any device, anywhere.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance tracking',
    description:
      'Stay compliant with automatic audit trails, version history, and secure storage for every agreement.',
  },
  {
    icon: TrendingUp,
    title: 'Agreement analytics',
    description:
      'Understand your onboarding pipeline — average time-to-sign, completion rates, and bottleneck identification.',
  },
];

const workflowSteps = [
  {
    icon: ListChecks,
    title: 'Select employment contract type',
    description: 'Choose from offer letters, NDAs, contractor agreements, and more.',
  },
  {
    icon: Settings,
    title: 'Customize role details, compensation, and terms',
    description: 'Fill in the specifics or let AI suggest terms based on the role.',
  },
  {
    icon: Send,
    title: 'Send to candidate or employee for signature',
    description: 'Deliver the agreement digitally with a personal message and signing instructions.',
  },
  {
    icon: Search,
    title: 'Track signing status across all hires',
    description: 'Monitor every agreement in real-time from a single onboarding dashboard.',
  },
  {
    icon: UserPlus,
    title: 'Review onboarding contract performance',
    description: 'Analyze time-to-sign, completion rates, and optimize your process over time.',
  },
];

const stats = [
  { value: '85% faster', label: 'employee onboarding' },
  { value: 'Zero', label: 'paper contracts needed' },
  { value: 'Complete', label: 'audit trail for every agreement' },
];

export default function HRTeamsPage() {
  const hero = useScrollAnimation();
  const problemsSection = useScrollAnimation();
  const solutionSection = useScrollAnimation();
  const solution0 = useScrollAnimation();
  const solution1 = useScrollAnimation();
  const solution2 = useScrollAnimation();
  const featuresSection = useScrollAnimation();
  const workflowSection = useScrollAnimation();
  const benefitsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const solutionRefs = [solution0, solution1, solution2];

  return (
    <div className="min-h-screen bg-white font-['Inter',system-ui,sans-serif] antialiased overflow-x-hidden">
      <Header />
      <main>
        {/* ====== 1. Hero ====== */}
        <section className="gradient-hero relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(10, 122, 255, 0.12) 0%, transparent 70%)',
            }}
          />
          <div
            ref={hero.ref}
            className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-8"
          >
            <div className="mx-auto max-w-4xl text-center">
              <div className={`fade-up ${hero.isVisible ? 'visible' : ''}`}>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-600 shadow-sm backdrop-blur">
                  For HR Teams
                </span>
              </div>

              <h1
                className={`fade-up stagger-1 ${hero.isVisible ? 'visible' : ''} mt-6 text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-slate-900`}
              >
                Onboard employees and contractors{' '}
                <span className="gradient-text">without the paperwork chaos</span>
              </h1>

              <p
                className={`fade-up stagger-2 ${hero.isVisible ? 'visible' : ''} mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl`}
              >
                From offer letters to NDAs, manage every employment agreement in one
                place. Generate contracts with AI, collect signatures digitally, and
                track completion across your team.
              </p>

              <div
                className={`fade-up stagger-3 ${hero.isVisible ? 'visible' : ''} mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row`}
              >
                <a href="/signup" className="btn-primary">
                  Start free
                </a>
                <a href="/demo" className="btn-secondary">
                  Book a demo
                </a>
              </div>

              <p
                className={`fade-up stagger-3 ${hero.isVisible ? 'visible' : ''} mt-5 text-sm text-slate-400`}
              >
                Free to start &middot; No credit card required
              </p>
            </div>
          </div>
        </section>

        {/* ====== 2. Problems ====== */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div ref={problemsSection.ref} className={`fade-up ${problemsSection.isVisible ? 'visible' : ''}`}>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-widest text-ocean-500 font-semibold">
                  The Problem
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl mx-auto">
                  HR onboarding is slowed down by contract bottlenecks
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
                  Manual processes, scattered documents, and signature delays cost your
                  team time and create a poor candidate experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;
                  return (
                    <div
                      key={problem.title}
                      className={`fade-up ${problemsSection.isVisible ? 'visible' : ''} stagger-${index + 1} border border-slate-200/80 rounded-xl p-6 bg-white hover:shadow-md transition-all duration-200`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5 text-red-500" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1">{problem.title}</h3>
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

        {/* ====== 3. How Contract Ocean Helps ====== */}
        <section className="py-20 md:py-28 bg-slate-50/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              ref={solutionSection.ref}
              className={`text-center mb-16 fade-up ${solutionSection.isVisible ? 'visible' : ''}`}
            >
              <span className="text-xs uppercase tracking-widest text-ocean-500 font-semibold">
                The Solution
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl mx-auto">
                How Contract Ocean helps HR teams
              </h2>
            </div>

            <div className="space-y-20">
              {solutionBlocks.map((block, index) => {
                const Icon = block.icon;
                const anim = solutionRefs[index];
                const isReversed = index % 2 !== 0;

                return (
                  <div
                    key={block.headline}
                    ref={anim.ref}
                    className={`fade-up ${anim.isVisible ? 'visible' : ''} flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                  >
                    <div className="lg:w-1/2">
                      <span className="text-xs uppercase tracking-widest text-ocean-500 font-semibold">
                        {block.eyebrow}
                      </span>
                      <h3 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                        {block.headline}
                      </h3>
                      <p className="mt-4 text-slate-600 leading-relaxed">{block.body}</p>
                    </div>

                    <div className="lg:w-1/2">
                      <div
                        className="aspect-[16/10] w-full rounded-2xl shadow-lg"
                        style={{
                          background:
                            'linear-gradient(135deg, #e0ecff 0%, #f0f7ff 40%, #dbeafe 70%, #c7dbff 100%)',
                        }}
                      >
                        <div className="flex h-full flex-col items-center justify-center gap-3 text-slate-400">
                          <Icon className="h-12 w-12 opacity-40" />
                          <span className="text-sm font-medium">{block.eyebrow} Preview</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====== 4. Key Features ====== */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              ref={featuresSection.ref}
              className={`fade-up ${featuresSection.isVisible ? 'visible' : ''}`}
            >
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-widest text-ocean-500 font-semibold">
                  Features
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl mx-auto">
                  Key features for HR teams
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
                  Everything your HR team needs to create, send, and manage employment
                  agreements — without the admin overhead.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className={`fade-up ${featuresSection.isVisible ? 'visible' : ''} stagger-${(index % 3) + 1} border border-slate-200/80 rounded-xl p-6 bg-white hover:shadow-md transition-all duration-200`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-ocean-50 flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5 text-ocean-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ====== 5. Workflow ====== */}
        <section className="py-20 md:py-28 bg-slate-50/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              ref={workflowSection.ref}
              className={`fade-up ${workflowSection.isVisible ? 'visible' : ''}`}
            >
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-widest text-ocean-500 font-semibold">
                  How It Works
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl mx-auto">
                  From contract type to signed agreement in 5 steps
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-0">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className={`fade-up ${workflowSection.isVisible ? 'visible' : ''} stagger-${index + 1} flex gap-6 relative`}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center shrink-0 z-10">
                          <Icon className="h-5 w-5 text-ocean-600" />
                        </div>
                        {index < workflowSteps.length - 1 && (
                          <div className="w-px flex-1 bg-ocean-200 my-1" />
                        )}
                      </div>

                      <div className="pb-10">
                        <span className="text-xs font-semibold text-ocean-500 uppercase tracking-wider">
                          Step {index + 1}
                        </span>
                        <h3 className="font-semibold text-slate-900 mt-1">{step.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ====== 6. Benefits ====== */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              ref={benefitsSection.ref}
              className={`fade-up ${benefitsSection.isVisible ? 'visible' : ''}`}
            >
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-widest text-ocean-500 font-semibold">
                  Results
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl mx-auto">
                  The impact on your HR team
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div
                    key={stat.value}
                    className={`fade-up ${benefitsSection.isVisible ? 'visible' : ''} stagger-${index + 1} text-center rounded-2xl border border-slate-200/80 bg-gradient-to-br from-ocean-50/60 to-white p-8 hover:shadow-md transition-all duration-200`}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-ocean-600 mb-2">
                      {stat.value}
                    </div>
                    <p className="text-slate-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====== 7. CTA ====== */}
        <section className="gradient-cta py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-ocean-400/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-ocean-300/10 blur-3xl pointer-events-none" />

          <div
            ref={ctaSection.ref}
            className="max-w-4xl mx-auto px-6 text-center relative z-10"
          >
            <h2
              className={`text-3xl md:text-5xl font-bold text-white leading-tight fade-up ${ctaSection.isVisible ? 'visible' : ''}`}
            >
              Your HR team deserves an onboarding workflow that scales
            </h2>
            <p
              className={`text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto mt-6 leading-relaxed fade-up stagger-1 ${ctaSection.isVisible ? 'visible' : ''}`}
            >
              Stop losing top talent to slow paperwork. Start creating, sending, and
              tracking employment agreements in minutes.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 fade-up stagger-2 ${ctaSection.isVisible ? 'visible' : ''}`}
            >
              <a
                href="/signup"
                className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Start free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/demo"
                className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-center"
              >
                Book a demo
              </a>
            </div>
            <p
              className={`text-sm text-blue-300/60 mt-6 fade-up stagger-3 ${ctaSection.isVisible ? 'visible' : ''}`}
            >
              Free 14-day trial · No credit card required
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
