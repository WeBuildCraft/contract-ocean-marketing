'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  FolderOpen,
  CalendarClock,
  SearchSlash,
  FileSpreadsheet,
  Database,
  Users,
  Bell,
  BarChart3,
  ShieldCheck,
  Workflow,
  ArrowRight,
  Upload,
  UserCheck,
  Eye,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  Clock,
  Timer,
} from 'lucide-react';

export default function OperationsPage() {
  const hero = useScrollAnimation();
  const problems = useScrollAnimation();
  const howItHelps = useScrollAnimation();
  const features = useScrollAnimation();
  const workflow = useScrollAnimation();
  const benefits = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white font-['Inter',system-ui,sans-serif] antialiased overflow-x-hidden">
      <Header />
      <main>
        {/* ===== 1. HERO ===== */}
        <section
          ref={hero.ref}
          className={`fade-up ${hero.isVisible ? 'visible' : ''} relative py-24 md:py-32 bg-gradient-to-b from-ocean-50 to-white`}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-ocean-600 mb-4">
              For Operations Teams
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Bring visibility and control to every contract across your organization
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Track vendor agreements, manage renewals, detect bottlenecks, and ensure
              compliance&nbsp;&mdash; all from a single contract workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/signup" className="btn-primary">
                Start free
              </a>
              <a href="/demo" className="btn-secondary">
                Book a demo
              </a>
            </div>
          </div>
        </section>

        {/* ===== 2. PROBLEMS ===== */}
        <section
          ref={problems.ref}
          className={`fade-up ${problems.isVisible ? 'visible' : ''} py-20 md:py-28 bg-white`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Sound familiar?
            </h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14">
              Operations teams carry the weight of contract management without the tools to match.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FolderOpen className="w-6 h-6 text-ocean-600" />,
                  title: 'Contracts scattered across departments with no central system',
                  desc: 'Agreements live in different drives, inboxes, and filing systems across teams. There is no single source of truth for active contracts.',
                },
                {
                  icon: <CalendarClock className="w-6 h-6 text-ocean-600" />,
                  title: 'Missed renewals costing the business money',
                  desc: 'Without proactive alerts, renewal deadlines slip by unnoticed, leading to auto-renewals on unfavorable terms or costly lapses in coverage.',
                },
                {
                  icon: <SearchSlash className="w-6 h-6 text-ocean-600" />,
                  title: 'No way to identify which vendors or agreements are causing delays',
                  desc: 'You know something is slowing things down, but without data you cannot pinpoint which contracts or vendors are the bottleneck.',
                },
                {
                  icon: <FileSpreadsheet className="w-6 h-6 text-ocean-600" />,
                  title: 'Manual tracking in spreadsheets that quickly go out of date',
                  desc: 'Spreadsheet trackers fall behind the moment someone forgets to update them, leaving the team working from stale information.',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`fade-up ${problems.isVisible ? 'visible' : ''} stagger-${i + 1} bg-gray-50 border border-gray-100 rounded-2xl p-8`}
                >
                  <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. HOW CONTRACT OCEAN HELPS ===== */}
        <section
          ref={howItHelps.ref}
          className={`fade-up ${howItHelps.isVisible ? 'visible' : ''} py-20 md:py-28 bg-ocean-50`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              How Contract Ocean helps your operations team
            </h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
              One workspace to centralize, track, and optimize every contract across the organization.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Centralize every contract in one searchable workspace
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bring contracts from every department, vendor, and team into a single organized hub.
                  Search by name, type, status, or owner and find what you need in seconds instead of
                  hours.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="screenshot-frame">
                  <div className="w-full h-64 rounded-xl bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center">
                    <Database className="w-16 h-16 text-ocean-500 opacity-60" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Set up renewal tracking and never miss a deadline
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Attach renewal dates to every contract and receive automated alerts before deadlines
                  arrive. No more surprises, no more auto-renewals you did not intend, and no more
                  coverage gaps.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="screenshot-frame">
                  <div className="w-full h-64 rounded-xl bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center">
                    <Bell className="w-16 h-16 text-ocean-500 opacity-60" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Use analytics to spot bottlenecks and improve contract flow
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  See which contracts are stalling, which vendors are slow to respond, and where
                  processes break down. Data-driven insights help your team continuously improve
                  how agreements move through the organization.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="screenshot-frame">
                  <div className="w-full h-64 rounded-xl bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-ocean-500 opacity-60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. KEY FEATURES FOR OPERATIONS ===== */}
        <section
          ref={features.ref}
          className={`fade-up ${features.isVisible ? 'visible' : ''} py-20 md:py-28 bg-white`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Key features for operations
            </h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14">
              Purpose-built tools to give operations teams full control over every contract.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Database className="w-6 h-6 text-ocean-600" />,
                  title: 'Centralized contract hub',
                  desc: 'Every agreement across every department in one searchable, organized workspace. No more hunting through shared drives.',
                },
                {
                  icon: <Users className="w-6 h-6 text-ocean-600" />,
                  title: 'Vendor management',
                  desc: 'Track all vendor contracts, contact details, and renewal terms in one place. Understand your vendor relationships at a glance.',
                },
                {
                  icon: <Bell className="w-6 h-6 text-ocean-600" />,
                  title: 'Renewal alerts',
                  desc: 'Automated notifications before renewal deadlines. Never miss a date or get locked into unfavorable auto-renewals again.',
                },
                {
                  icon: <BarChart3 className="w-6 h-6 text-ocean-600" />,
                  title: 'Cross-team analytics',
                  desc: 'Dashboards that show contract volume, turnaround times, and bottlenecks across every team and department.',
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-ocean-600" />,
                  title: 'Compliance monitoring',
                  desc: 'Track contract compliance requirements, flag at-risk agreements, and ensure every contract meets organizational standards.',
                },
                {
                  icon: <Workflow className="w-6 h-6 text-ocean-600" />,
                  title: 'Workflow automation',
                  desc: 'Automate approval chains, status updates, and handoffs so contracts move through your process without manual intervention.',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className={`fade-up ${features.isVisible ? 'visible' : ''} stagger-${i + 1} bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 5. WORKFLOW ===== */}
        <section
          ref={workflow.ref}
          className={`fade-up ${workflow.isVisible ? 'visible' : ''} py-20 md:py-28 bg-ocean-50`}
        >
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              From import to insight — in five steps
            </h2>
            <p className="text-center text-gray-500 max-w-xl mx-auto mb-16">
              See how operations teams use Contract Ocean to bring order to every agreement.
            </p>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-ocean-200" />

              {[
                {
                  step: 1,
                  title: 'Import or create contracts in the central workspace',
                  desc: 'Upload existing contracts or create new ones directly in Contract Ocean. Everything starts in one place from day one.',
                  icon: <Upload className="w-5 h-5 text-white" />,
                },
                {
                  step: 2,
                  title: 'Assign ownership and set renewal dates',
                  desc: 'Tag each contract with an owner, department, and renewal date so nothing falls through the cracks.',
                  icon: <UserCheck className="w-5 h-5 text-white" />,
                },
                {
                  step: 3,
                  title: 'Track contract status across every department',
                  desc: 'See which contracts are active, pending, expiring, or completed at a glance from your operations dashboard.',
                  icon: <Eye className="w-5 h-5 text-white" />,
                },
                {
                  step: 4,
                  title: 'Identify bottlenecks and delays with analytics',
                  desc: 'Surface contracts that are stalling, vendors that are slow, and processes that need attention using built-in analytics.',
                  icon: <TrendingUp className="w-5 h-5 text-white" />,
                },
                {
                  step: 5,
                  title: 'Optimize processes with performance insights',
                  desc: 'Use data to continuously refine workflows, reduce cycle times, and improve how your organization handles contracts.',
                  icon: <Lightbulb className="w-5 h-5 text-white" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`fade-up ${workflow.isVisible ? 'visible' : ''} stagger-${i + 1} relative flex items-start gap-6 mb-12 last:mb-0`}
                >
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-ocean-600 flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                  <div className="pt-1">
                    <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
                      Step {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. BENEFITS / OUTCOMES ===== */}
        <section
          ref={benefits.ref}
          className={`fade-up ${benefits.isVisible ? 'visible' : ''} py-20 md:py-28 bg-white`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Results operations teams see with Contract Ocean
            </h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14">
              Full visibility, zero missed deadlines, and dramatically less admin overhead.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  stat: '100%',
                  label: 'contract visibility across departments',
                  desc: 'Every contract, every vendor, every department visible from one centralized dashboard. No more blind spots.',
                  icon: <CheckCircle className="w-8 h-8 text-ocean-600" />,
                },
                {
                  stat: 'Zero',
                  label: 'missed renewals',
                  desc: 'Automated alerts and proactive tracking ensure every renewal is handled on time, every time.',
                  icon: <Clock className="w-8 h-8 text-ocean-600" />,
                },
                {
                  stat: '40% less',
                  label: 'time on contract administration',
                  desc: 'Workflow automation and centralized management free your team to focus on strategic work instead of chasing paperwork.',
                  icon: <Timer className="w-8 h-8 text-ocean-600" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`fade-up ${benefits.isVisible ? 'visible' : ''} stagger-${i + 1} bg-ocean-50 border border-ocean-100 rounded-2xl p-10 text-center`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-ocean-100 flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-ocean-700 mb-2">{item.stat}</p>
                  <p className="text-lg font-semibold text-gray-900 mb-3">{item.label}</p>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7. CTA SECTION ===== */}
        <section
          ref={ctaSection.ref}
          className={`fade-up ${ctaSection.isVisible ? 'visible' : ''} gradient-cta py-20 md:py-28`}
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your operations team deserves a contract system that scales with the business
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
              Centralize every agreement, automate renewals, and gain the visibility you need to
              run operations with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/signup" className="btn-primary">
                Start free
                <ArrowRight className="w-4 h-4 ml-2 inline-block" />
              </a>
              <a href="/demo" className="btn-secondary">
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
