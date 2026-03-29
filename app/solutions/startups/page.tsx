'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Rocket,
  FileText,
  PenTool,
  BarChart3,
  Clock,
  Zap,
  ArrowRight,
  AlertTriangle,
  Users,
  FolderSearch,
  Hourglass,
  Brain,
  Layout,
  MousePointerClick,
  Target,
  LineChart,
  UserPlus,
} from 'lucide-react';

export default function StartupsPage() {
  const hero = useScrollAnimation();
  const problems = useScrollAnimation();
  const howWeHelp = useScrollAnimation();
  const features = useScrollAnimation();
  const workflow = useScrollAnimation();
  const benefits = useScrollAnimation();
  const cta = useScrollAnimation();

  const problemCards = [
    {
      icon: FileText,
      title: 'Unprofessional contract tools',
      description:
        'Using Google Docs and PDFs for contracts that need to look professional to investors and partners.',
    },
    {
      icon: Hourglass,
      title: 'Founder time wasted on legal admin',
      description:
        'Spending founder time on legal admin instead of building your product and growing your business.',
    },
    {
      icon: FolderSearch,
      title: 'No tracking system',
      description:
        "No system to track what's been signed and what hasn't — agreements get lost across inboxes and drives.",
    },
    {
      icon: AlertTriangle,
      title: 'Deals stalling',
      description:
        'Deals stalling because contracts take too long to turn around, costing you momentum and revenue.',
    },
  ];

  const howBlocks = [
    {
      title: 'Generate investor-ready contracts with AI in minutes',
      description:
        'Describe what you need in plain English and let our AI draft a polished, legally sound contract. No templates to hunt for, no formatting headaches — just professional agreements ready for review.',
      gradient: 'from-ocean-500 to-ocean-700',
    },
    {
      title: 'Send and collect signatures without chasing inboxes',
      description:
        'Add your signers, hit send, and let Contract Ocean handle the rest. Automatic reminders, mobile-friendly signing, and real-time status updates keep deals moving without the back-and-forth.',
      gradient: 'from-ocean-600 to-ocean-500',
    },
    {
      title: 'Track every agreement from a single dashboard',
      description:
        'See all your contracts in one place — pending, signed, expired. Filter by status, search by name, and never wonder where a deal stands again.',
      gradient: 'from-ocean-700 to-ocean-600',
    },
  ];

  const featureCards = [
    {
      icon: Brain,
      title: 'AI-powered drafting',
      description:
        'Generate contracts from natural language prompts. Our AI understands startup legal needs.',
    },
    {
      icon: Layout,
      title: 'Professional templates',
      description:
        'Start with investor-ready templates for SAFEs, NDAs, service agreements, and more.',
    },
    {
      icon: MousePointerClick,
      title: 'One-click signatures',
      description:
        'Legally binding e-signatures with a single click. No accounts required for signers.',
    },
    {
      icon: Target,
      title: 'Deal tracking',
      description:
        'Follow every contract from draft to signed. Know exactly where each deal stands.',
    },
    {
      icon: LineChart,
      title: 'Smart analytics',
      description:
        'Understand your contract performance — average turnaround, bottlenecks, and trends.',
    },
    {
      icon: UserPlus,
      title: 'Fast onboarding',
      description:
        'Get your whole team up and running in minutes. No training, no complex setup required.',
    },
  ];

  const workflowSteps = [
    {
      step: 1,
      title: 'Describe your contract need to AI',
      description:
        'Tell the AI what kind of agreement you need and who it involves.',
    },
    {
      step: 2,
      title: 'Review and customize the generated draft',
      description:
        'Fine-tune the AI-generated contract to match your exact requirements.',
    },
    {
      step: 3,
      title: 'Add signers and send',
      description:
        'Enter signer details and send the contract out for signatures in one click.',
    },
    {
      step: 4,
      title: 'Track signature status in real time',
      description:
        'Monitor who has signed and who still needs to — with automatic reminders.',
    },
    {
      step: 5,
      title: 'Analyze and improve turnaround',
      description:
        'Use analytics to identify bottlenecks and speed up your contract process.',
    },
  ];

  const statCards = [
    {
      stat: '5 minutes',
      label: 'Average contract creation time',
      icon: Clock,
    },
    {
      stat: '60% faster',
      label: 'Deal closure',
      icon: Zap,
    },
    {
      stat: 'Zero',
      label: 'Contracts lost in email threads',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter',system-ui,sans-serif] antialiased overflow-x-hidden">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-ocean-50 via-white to-ocean-100 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-ocean-100/60 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-ocean-50/80 blur-3xl pointer-events-none" />

          <div
            ref={hero.ref}
            className="max-w-4xl mx-auto px-6 text-center relative z-10"
          >
            <span
              className={`inline-block text-sm font-semibold tracking-widest text-ocean-600 uppercase mb-4 fade-up ${hero.isVisible ? 'visible' : ''}`}
            >
              FOR STARTUPS
            </span>
            <h1
              className={`text-4xl md:text-6xl font-bold text-slate-900 leading-tight fade-up stagger-1 ${hero.isVisible ? 'visible' : ''}`}
            >
              Move fast on deals without cutting legal corners
            </h1>
            <p
              className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-6 leading-relaxed fade-up stagger-2 ${hero.isVisible ? 'visible' : ''}`}
            >
              Generate professional contracts with AI, get signatures in hours
              not days, and keep your legal house in order from day one.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 fade-up stagger-3 ${hero.isVisible ? 'visible' : ''}`}
            >
              <button className="bg-ocean-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-ocean-700 transition-all duration-200 flex items-center justify-center gap-2 group">
                Start free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-ocean-200 text-ocean-700 font-semibold px-8 py-4 rounded-xl hover:bg-ocean-50 transition-all duration-200">
                Book a demo
              </button>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-20 md:py-28 bg-white">
          <div ref={problems.ref} className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 fade-up ${problems.isVisible ? 'visible' : ''}`}
              >
                Sound familiar?
              </h2>
              <p
                className={`text-lg text-slate-600 mt-4 max-w-2xl mx-auto fade-up stagger-1 ${problems.isVisible ? 'visible' : ''}`}
              >
                These are the contract headaches that slow startups down every
                day.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {problemCards.map((card, i) => (
                <div
                  key={i}
                  className={`bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 fade-up stagger-${i + 2} ${problems.isVisible ? 'visible' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center mb-5">
                    <card.icon className="w-6 h-6 text-ocean-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Contract Ocean Helps */}
        <section className="py-20 md:py-28 bg-ocean-50/30">
          <div ref={howWeHelp.ref} className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 fade-up ${howWeHelp.isVisible ? 'visible' : ''}`}
              >
                How Contract Ocean helps
              </h2>
              <p
                className={`text-lg text-slate-600 mt-4 max-w-2xl mx-auto fade-up stagger-1 ${howWeHelp.isVisible ? 'visible' : ''}`}
              >
                A contract workflow built for the speed startups need.
              </p>
            </div>

            <div className="space-y-20">
              {howBlocks.map((block, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center fade-up stagger-${i + 2} ${howWeHelp.isVisible ? 'visible' : ''}`}
                >
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {block.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                  <div className="flex-1 w-full">
                    <div
                      className={`bg-gradient-to-br ${block.gradient} rounded-2xl aspect-[4/3] flex items-center justify-center shadow-lg`}
                    >
                      <div className="text-white/40 text-sm font-medium tracking-wider uppercase">
                        Screenshot placeholder
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 md:py-28 bg-white">
          <div ref={features.ref} className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 fade-up ${features.isVisible ? 'visible' : ''}`}
              >
                Key features for startups
              </h2>
              <p
                className={`text-lg text-slate-600 mt-4 max-w-2xl mx-auto fade-up stagger-1 ${features.isVisible ? 'visible' : ''}`}
              >
                Everything you need to manage contracts like a company ten times
                your size.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featureCards.map((card, i) => (
                <div
                  key={i}
                  className={`bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:border-ocean-200 transition-all duration-300 fade-up stagger-${i + 2} ${features.isVisible ? 'visible' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center mb-5">
                    <card.icon className="w-6 h-6 text-ocean-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Timeline */}
        <section className="py-20 md:py-28 bg-ocean-50/30">
          <div ref={workflow.ref} className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 fade-up ${workflow.isVisible ? 'visible' : ''}`}
              >
                From idea to signed in five steps
              </h2>
              <p
                className={`text-lg text-slate-600 mt-4 max-w-2xl mx-auto fade-up stagger-1 ${workflow.isVisible ? 'visible' : ''}`}
              >
                A simple workflow that gets contracts done fast.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-ocean-200" />

              <div className="space-y-10">
                {workflowSteps.map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-6 md:gap-8 items-start fade-up stagger-${i + 2} ${workflow.isVisible ? 'visible' : ''}`}
                  >
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-ocean-600 text-white flex items-center justify-center font-bold text-lg md:text-xl shadow-lg shadow-ocean-600/20">
                      {item.step}
                    </div>
                    <div className="pt-1 md:pt-3">
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits / Outcomes */}
        <section className="py-20 md:py-28 bg-white">
          <div ref={benefits.ref} className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold text-slate-900 fade-up ${benefits.isVisible ? 'visible' : ''}`}
              >
                Results that matter
              </h2>
              <p
                className={`text-lg text-slate-600 mt-4 max-w-2xl mx-auto fade-up stagger-1 ${benefits.isVisible ? 'visible' : ''}`}
              >
                Startups using Contract Ocean close deals faster and stay
                organized.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {statCards.map((card, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br from-ocean-50 to-ocean-100 border border-ocean-200/50 rounded-2xl p-10 text-center hover:shadow-lg transition-all duration-300 fade-up stagger-${i + 2} ${benefits.isVisible ? 'visible' : ''}`}
                >
                  <div className="w-14 h-14 rounded-full bg-ocean-600 flex items-center justify-center mx-auto mb-6">
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-ocean-700 mb-2">
                    {card.stat}
                  </div>
                  <p className="text-slate-600 font-medium">{card.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="gradient-cta py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-ocean-400/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-ocean-300/10 blur-3xl pointer-events-none" />

          <div
            ref={cta.ref}
            className="max-w-4xl mx-auto px-6 text-center relative z-10"
          >
            <h2
              className={`text-3xl md:text-5xl font-bold text-white leading-tight fade-up ${cta.isVisible ? 'visible' : ''}`}
            >
              Your startup deserves a contract workflow that scales with you
            </h2>
            <p
              className={`text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto mt-6 leading-relaxed fade-up stagger-1 ${cta.isVisible ? 'visible' : ''}`}
            >
              Start closing deals faster with professional contracts, seamless
              signatures, and full visibility into every agreement.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 fade-up stagger-2 ${cta.isVisible ? 'visible' : ''}`}
            >
              <button className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2 group">
                Start free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200">
                Book a demo
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
