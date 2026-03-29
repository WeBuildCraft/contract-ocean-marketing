'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  ArrowRight,
  FileText,
  Sparkles,
  PenTool,
  Users,
  BarChart3,
  RefreshCw,
  AlertTriangle,
  Clock,
  Eye,
  Layers,
  CheckCircle2,
  Send,
  Search,
  TrendingUp,
} from 'lucide-react';

const problems = [
  {
    icon: Layers,
    title: 'Starting from scratch every time',
    description:
      'Recreating engagement letters from scratch for every new client wastes hours that could be spent on advisory work.',
  },
  {
    icon: Clock,
    title: 'Proposals going cold',
    description:
      'Proposals go cold because contracts take too long to draft, review, and send — losing deals to faster competitors.',
  },
  {
    icon: Eye,
    title: 'No visibility into pending signatures',
    description:
      'No clear view of which engagements are pending signatures, leaving revenue stuck in limbo.',
  },
  {
    icon: AlertTriangle,
    title: 'Manual term management',
    description:
      'Managing different contract terms across multiple clients manually leads to errors, inconsistencies, and compliance risk.',
  },
];

const helpBlocks = [
  {
    eyebrow: 'TEMPLATE LIBRARY',
    title: 'Standardize your engagement templates once, reuse everywhere',
    description:
      'Build a library of pre-approved engagement letter templates tailored to your practice areas. Lock critical clauses, set default fee structures, and let your team generate polished contracts in seconds — not hours.',
    gradient: 'from-ocean-500/20 via-ocean-400/10 to-blue-300/20',
  },
  {
    eyebrow: 'SAME-DAY SIGNATURES',
    title: 'Send polished contracts and collect signatures the same day',
    description:
      'Generate professional engagement letters, add digital signature fields, and send directly to clients — all from one workflow. No more printing, scanning, or chasing wet signatures.',
    gradient: 'from-blue-400/20 via-ocean-500/15 to-indigo-300/20',
  },
  {
    eyebrow: 'CONTRACT TRACKING',
    title: 'Track which agreements are pending, signed, or at risk',
    description:
      'A single dashboard shows every engagement across your consultancy. See what is out for signature, what is overdue, and what needs renewal — so nothing falls through the cracks.',
    gradient: 'from-indigo-400/20 via-ocean-400/15 to-ocean-300/20',
  },
];

const features = [
  {
    icon: FileText,
    title: 'Engagement letter templates',
    description:
      'Pre-built and customizable templates for every type of consulting engagement.',
  },
  {
    icon: Sparkles,
    title: 'AI clause suggestions',
    description:
      'Smart recommendations for scope, liability, and termination clauses based on engagement type.',
  },
  {
    icon: PenTool,
    title: 'Digital signatures',
    description:
      'Legally binding e-signatures that let clients sign from any device, anywhere.',
  },
  {
    icon: Users,
    title: 'Client management',
    description:
      'Organize contracts by client, engagement type, and status in one central hub.',
  },
  {
    icon: BarChart3,
    title: 'Contract analytics',
    description:
      'Track turnaround times, signature rates, and engagement values across your practice.',
  },
  {
    icon: RefreshCw,
    title: 'Renewal tracking',
    description:
      'Automated reminders for expiring engagements so you never miss a renewal opportunity.',
  },
];

const workflowSteps = [
  {
    icon: FileText,
    title: 'Select your engagement template',
    description: 'Choose from your library of pre-approved templates.',
  },
  {
    icon: Sparkles,
    title: 'Customize scope, fees, and terms',
    description: 'Tailor the engagement details to the specific client and project.',
  },
  {
    icon: Send,
    title: 'Send to client for review and signature',
    description: 'Deliver a polished contract with built-in e-signature fields.',
  },
  {
    icon: Search,
    title: 'Monitor signing progress',
    description: 'Track opens, views, and signature status in real time.',
  },
  {
    icon: TrendingUp,
    title: 'Review engagement performance over time',
    description: 'Analyze contract data to improve your consulting operations.',
  },
];

const benefits = [
  {
    stat: '80% less',
    label: 'time on contract admin',
    description: 'Automate repetitive tasks so your team focuses on client work.',
  },
  {
    stat: '2x faster',
    label: 'client onboarding',
    description: 'From proposal to signed engagement in half the time.',
  },
  {
    stat: '100%',
    label: 'contract visibility across engagements',
    description: 'Every agreement tracked, searchable, and accessible.',
  },
];

export default function ConsultanciesPage() {
  const hero = useScrollAnimation();
  const problemsSection = useScrollAnimation();
  const helpSection = useScrollAnimation();
  const featuresSection = useScrollAnimation();
  const workflowSection = useScrollAnimation();
  const benefitsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white font-['Inter',system-ui,sans-serif] antialiased overflow-x-hidden">
      <Header />
      <main>
        {/* Hero */}
        <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-ocean-400/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-ocean-300/5 blur-3xl pointer-events-none" />

          <div ref={hero.ref} className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <p
              className={`text-xs uppercase tracking-widest text-ocean-500 font-semibold mb-4 fade-up ${hero.isVisible ? 'visible' : ''}`}
            >
              FOR CONSULTANCIES
            </p>
            <h1
              className={`text-4xl md:text-6xl font-bold text-slate-900 leading-tight fade-up stagger-1 ${hero.isVisible ? 'visible' : ''}`}
            >
              Spend more time advising clients,{' '}
              <span className="gradient-text">less time chasing signatures</span>
            </h1>
            <p
              className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-6 leading-relaxed fade-up stagger-2 ${hero.isVisible ? 'visible' : ''}`}
            >
              Standardize engagement letters, automate agreement workflows, and track
              every consulting contract from proposal to completion.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 fade-up stagger-3 ${hero.isVisible ? 'visible' : ''}`}
            >
              <button className="btn-primary inline-flex items-center justify-center gap-2 group">
                Start free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="btn-secondary inline-flex items-center justify-center gap-2">
                Book a demo
              </button>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div ref={problemsSection.ref} className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p
                className={`text-xs uppercase tracking-widest text-ocean-500 font-semibold mb-4 fade-up ${problemsSection.isVisible ? 'visible' : ''}`}
              >
                THE PROBLEM
              </p>
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 fade-up stagger-1 ${problemsSection.isVisible ? 'visible' : ''}`}
              >
                Contracts shouldn&apos;t slow your consultancy down
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow fade-up stagger-${index + 2} ${problemsSection.isVisible ? 'visible' : ''}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How Contract Ocean Helps */}
        <section className="py-20 md:py-28">
          <div ref={helpSection.ref} className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p
                className={`text-xs uppercase tracking-widest text-ocean-500 font-semibold mb-4 fade-up ${helpSection.isVisible ? 'visible' : ''}`}
              >
                THE SOLUTION
              </p>
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 fade-up stagger-1 ${helpSection.isVisible ? 'visible' : ''}`}
              >
                How Contract Ocean helps
              </h2>
            </div>

            <div className="space-y-20">
              {helpBlocks.map((block, index) => {
                const isReversed = index % 2 === 1;
                return (
                  <div
                    key={index}
                    className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 fade-up stagger-${index + 2} ${helpSection.isVisible ? 'visible' : ''}`}
                  >
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-widest text-ocean-500 font-semibold mb-3">
                        {block.eyebrow}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        {block.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {block.description}
                      </p>
                    </div>
                    <div className="flex-1 w-full">
                      <div
                        className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${block.gradient} border border-slate-100 flex items-center justify-center`}
                      >
                        <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm">
                          <CheckCircle2 className="w-8 h-8 text-ocean-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 md:py-28 bg-ocean-50">
          <div ref={featuresSection.ref} className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p
                className={`text-xs uppercase tracking-widest text-ocean-500 font-semibold mb-4 fade-up ${featuresSection.isVisible ? 'visible' : ''}`}
              >
                KEY FEATURES
              </p>
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 fade-up stagger-1 ${featuresSection.isVisible ? 'visible' : ''}`}
              >
                Everything your consultancy needs
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow fade-up stagger-${index + 2} ${featuresSection.isVisible ? 'visible' : ''}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-ocean-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-ocean-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-20 md:py-28">
          <div ref={workflowSection.ref} className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-14">
              <p
                className={`text-xs uppercase tracking-widest text-ocean-500 font-semibold mb-4 fade-up ${workflowSection.isVisible ? 'visible' : ''}`}
              >
                HOW IT WORKS
              </p>
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 fade-up stagger-1 ${workflowSection.isVisible ? 'visible' : ''}`}
              >
                From template to signed engagement in five steps
              </h2>
            </div>
            <div className="space-y-0">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-6 fade-up stagger-${index + 2} ${workflowSection.isVisible ? 'visible' : ''}`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-ocean-500 text-white font-semibold text-sm flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      {index < workflowSteps.length - 1 && (
                        <div className="w-0.5 h-16 bg-ocean-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-12">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-ocean-50 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-ocean-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed ml-13">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div ref={benefitsSection.ref} className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p
                className={`text-xs uppercase tracking-widest text-ocean-500 font-semibold mb-4 fade-up ${benefitsSection.isVisible ? 'visible' : ''}`}
              >
                THE IMPACT
              </p>
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 fade-up stagger-1 ${benefitsSection.isVisible ? 'visible' : ''}`}
              >
                Results that speak for themselves
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 border border-slate-100 shadow-sm text-center fade-up stagger-${index + 2} ${benefitsSection.isVisible ? 'visible' : ''}`}
                >
                  <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {benefit.stat}
                  </p>
                  <p className="text-lg font-semibold text-slate-900 mb-2">
                    {benefit.label}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-cta py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-ocean-400/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-ocean-300/10 blur-3xl pointer-events-none" />

          <div ref={ctaSection.ref} className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2
              className={`text-3xl md:text-5xl font-bold text-white leading-tight fade-up ${ctaSection.isVisible ? 'visible' : ''}`}
            >
              Your consulting practice deserves contracts that close as fast as your
              advice
            </h2>
            <p
              className={`text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto mt-6 leading-relaxed fade-up stagger-1 ${ctaSection.isVisible ? 'visible' : ''}`}
            >
              Join consultancies that have streamlined their engagement workflows with
              Contract Ocean.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 fade-up stagger-2 ${ctaSection.isVisible ? 'visible' : ''}`}
            >
              <button className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2 group">
                Start free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200">
                Book a demo
              </button>
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
