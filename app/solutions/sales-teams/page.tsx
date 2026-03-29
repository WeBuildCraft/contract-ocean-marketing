'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Eye,
  FileText,
  PenTool,
  BarChart3,
  Clock,
  Sparkles,
  Send,
  Search,
  Bell,
  LineChart,
} from 'lucide-react';

export default function SalesTeamsPage() {
  const hero = useScrollAnimation();
  const problems = useScrollAnimation();
  const howItHelps = useScrollAnimation();
  const features = useScrollAnimation();
  const workflow = useScrollAnimation();
  const benefits = useScrollAnimation();
  const cta = useScrollAnimation();

  const problemCards = [
    {
      icon: <Clock className="w-6 h-6 text-ocean-600" />,
      title: 'Deals going cold',
      description: 'Deals going cold while contracts sit unsigned in inboxes',
    },
    {
      icon: <Eye className="w-6 h-6 text-ocean-600" />,
      title: 'No visibility',
      description: 'No visibility into where contracts are stuck in the pipeline',
    },
    {
      icon: <FileText className="w-6 h-6 text-ocean-600" />,
      title: 'Paperwork over selling',
      description: 'Sales reps spending time on paperwork instead of selling',
    },
    {
      icon: <Bell className="w-6 h-6 text-ocean-600" />,
      title: 'Manual follow-ups',
      description: 'Manually following up on every unsigned agreement',
    },
  ];

  const helpBlocks = [
    {
      eyebrow: 'AI-POWERED GENERATION',
      headline: 'Generate sales contracts and proposals with AI in minutes',
      description:
        'Stop copying and pasting from old contracts. Describe your deal and let AI draft a professional proposal with the right terms, pricing, and clauses — ready to send.',
      icon: <Sparkles className="w-16 h-16 text-ocean-500/60" />,
    },
    {
      eyebrow: 'BUILT-IN E-SIGNATURES',
      headline: 'Send contracts with built-in e-signatures — no third-party tools',
      description:
        'Keep everything in one platform. Send contracts for signature directly from Contract Ocean with legally binding e-signatures. No switching between tools, no extra costs.',
      icon: <PenTool className="w-16 h-16 text-ocean-500/60" />,
    },
    {
      eyebrow: 'PIPELINE TRACKING',
      headline: 'Track signature status and spot bottlenecks before deals slip',
      description:
        'See exactly where every contract stands — who opened it, who signed, and who is holding things up. Take action before a deal goes cold.',
      icon: <Search className="w-16 h-16 text-ocean-500/60" />,
    },
  ];

  const featureCards = [
    {
      icon: <Sparkles className="w-6 h-6 text-ocean-600" />,
      title: 'AI proposal drafting',
      description: 'Generate professional proposals from deal details in minutes using AI.',
    },
    {
      icon: <FileText className="w-6 h-6 text-ocean-600" />,
      title: 'Sales contract templates',
      description: 'Pre-built templates for common sales agreements, MSAs, and order forms.',
    },
    {
      icon: <PenTool className="w-6 h-6 text-ocean-600" />,
      title: 'One-click e-signatures',
      description: 'Send for signature instantly — no switching to third-party tools.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-ocean-600" />,
      title: 'Pipeline visibility',
      description: 'See every contract status at a glance across your entire sales pipeline.',
    },
    {
      icon: <LineChart className="w-6 h-6 text-ocean-600" />,
      title: 'Deal analytics',
      description: 'Measure deal velocity, identify slow stages, and optimize your close rate.',
    },
    {
      icon: <Bell className="w-6 h-6 text-ocean-600" />,
      title: 'Automated reminders',
      description: 'Automatic nudges to signers so you never have to manually follow up.',
    },
  ];

  const workflowSteps = [
    {
      step: 1,
      title: 'Generate a contract from your deal details',
      description: 'Enter key deal information and let AI create a ready-to-send contract.',
    },
    {
      step: 2,
      title: 'Customize pricing, terms, and clauses',
      description: 'Fine-tune the contract with your specific pricing, terms, and legal clauses.',
    },
    {
      step: 3,
      title: 'Send to prospect with signing instructions',
      description: 'Deliver the contract directly to your prospect with clear signing steps.',
    },
    {
      step: 4,
      title: 'Track opens, views, and signature progress',
      description: 'Monitor engagement in real time — know exactly when they open and sign.',
    },
    {
      step: 5,
      title: 'Analyze deal velocity and improve turnaround',
      description: 'Use analytics to identify bottlenecks and continuously speed up your close.',
    },
  ];

  const statCards = [
    {
      stat: '47% faster',
      label: 'deal closure',
      description: 'Close deals nearly twice as fast with streamlined contract workflows.',
    },
    {
      stat: '3x fewer',
      label: 'follow-up touchpoints needed',
      description: 'Automated reminders and tracking eliminate manual chasing.',
    },
    {
      stat: 'Real-time',
      label: 'visibility into every contract',
      description: 'Always know where every deal stands without asking anyone.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter',system-ui,sans-serif] antialiased overflow-x-hidden">
      <Header />
      <main>
        {/* Hero */}
        <section
          ref={hero.ref}
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-ocean-50 to-white overflow-hidden"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span
              className={`inline-block px-4 py-1.5 rounded-full bg-ocean-100 text-ocean-700 text-xs font-semibold tracking-widest uppercase mb-6 transition-all duration-700 ${
                hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              FOR SALES TEAMS
            </span>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 transition-all duration-700 delay-100 ${
                hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Close deals faster when contracts stop slowing you down
            </h1>
            <p
              className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${
                hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Turn proposals into signed contracts in hours, not weeks. Track every deal, identify
              signature bottlenecks, and stop losing revenue to contract delays.
            </p>
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
                hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="/signup"
                className="px-8 py-3.5 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold rounded-xl shadow-lg shadow-ocean-600/25 transition-all duration-200 hover:shadow-xl"
              >
                Start free
              </a>
              <a
                href="/demo"
                className="px-8 py-3.5 border-2 border-ocean-200 hover:border-ocean-300 text-ocean-700 font-semibold rounded-xl transition-all duration-200 hover:bg-ocean-50"
              >
                Book a demo
              </a>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section ref={problems.ref} className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 mb-4 transition-all duration-700 ${
                  problems.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Sound familiar?
              </h2>
              <p
                className={`text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
                  problems.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                These contract headaches cost sales teams deals every single day.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problemCards.map((card, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-ocean-200 hover:shadow-md transition-all duration-700 ${
                    problems.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${150 + i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{card.title}</h3>
                      <p className="text-slate-600">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Contract Ocean helps */}
        <section ref={howItHelps.ref} className="py-20 lg:py-28 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 mb-4 transition-all duration-700 ${
                  howItHelps.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                How Contract Ocean helps
              </h2>
              <p
                className={`text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
                  howItHelps.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Everything your sales team needs to move from proposal to signed contract — fast.
              </p>
            </div>
            <div className="space-y-20">
              {helpBlocks.map((block, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${
                    i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } items-center gap-12 transition-all duration-700 ${
                    howItHelps.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${200 + i * 150}ms` }}
                >
                  <div className="flex-1">
                    <span className="inline-block text-xs font-semibold tracking-widest text-ocean-600 uppercase mb-3">
                      {block.eyebrow}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {block.headline}
                    </h3>
                    <p className="text-lg text-slate-600">{block.description}</p>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center shadow-sm">
                      {block.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key features for sales teams */}
        <section ref={features.ref} className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 mb-4 transition-all duration-700 ${
                  features.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Key features for sales teams
              </h2>
              <p
                className={`text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
                  features.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Purpose-built tools to help you close more deals, faster.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCards.map((card, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border border-slate-200 bg-white hover:border-ocean-200 hover:shadow-lg transition-all duration-700 ${
                    features.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${150 + i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section ref={workflow.ref} className="py-20 lg:py-28 bg-slate-50/50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 mb-4 transition-all duration-700 ${
                  workflow.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                From deal to signed contract in 5 steps
              </h2>
              <p
                className={`text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
                  workflow.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                A streamlined workflow designed for sales speed.
              </p>
            </div>
            <div className="space-y-6">
              {workflowSteps.map((step, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-200 hover:border-ocean-200 hover:shadow-md transition-all duration-700 ${
                    workflow.isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-6'
                  }`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ocean-600 text-white flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefits.ref} className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 mb-4 transition-all duration-700 ${
                  benefits.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                The impact on your pipeline
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {statCards.map((card, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-2xl bg-gradient-to-br from-ocean-50 to-ocean-100 border border-ocean-200 text-center transition-all duration-700 ${
                    benefits.isVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-6 scale-95'
                  }`}
                  style={{ transitionDelay: `${150 + i * 120}ms` }}
                >
                  <p className="text-4xl md:text-5xl font-bold text-ocean-700 mb-2">{card.stat}</p>
                  <p className="text-lg font-semibold text-slate-900 mb-2">{card.label}</p>
                  <p className="text-slate-600 text-sm">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          ref={cta.ref}
          className="py-20 lg:py-28 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-600"
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-700 ${
                cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Your pipeline deserves contracts that close themselves
            </h2>
            <p
              className={`text-lg text-ocean-100 mb-10 transition-all duration-700 delay-100 ${
                cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Join sales teams who have transformed their contract workflow with Contract Ocean.
            </p>
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200 ${
                cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="/signup"
                className="px-8 py-3.5 bg-white hover:bg-ocean-50 text-ocean-700 font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                Start free
              </a>
              <a
                href="/demo"
                className="px-8 py-3.5 border-2 border-ocean-300 hover:border-white text-white font-semibold rounded-xl transition-all duration-200"
              >
                Book a demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
