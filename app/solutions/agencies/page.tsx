'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  FileText,
  Clock,
  Eye,
  Copy,
  Sparkles,
  LayoutTemplate,
  PenTool,
  Users,
  BarChart3,
  AlertTriangle,
  Zap,
  Send,
  Settings,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Mail,
  Search,
} from 'lucide-react';

export default function AgenciesPage() {
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
              For Agencies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Stop losing billable hours to contract admin
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Manage client contracts, SOWs, NDAs, and proposals across every account — without
              the overhead. Contract Ocean gives your agency a single workspace to create, send,
              sign, and track agreements in minutes, not days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/signup" className="btn-primary">Start free</a>
              <a href="/demo" className="btn-secondary">Book a demo</a>
            </div>
          </div>
        </section>

        {/* ===== 2. PROBLEMS ===== */}
        <section
          ref={problems.ref}
          className={`fade-up ${problems.isVisible ? 'visible' : ''} py-20 md:py-28 bg-white`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Sound familiar?</h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14">
              Agencies juggle dozens of client relationships — and the contract chaos that comes with them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Copy className="w-6 h-6 text-ocean-600" />, title: 'Scattered contracts across tools and emails', desc: 'Contracts live in Google Drive, Dropbox, email threads, and Slack messages. Nothing is centralised and nothing is searchable.' },
                { icon: <Clock className="w-6 h-6 text-ocean-600" />, title: 'Clients waiting too long for proposals and agreements', desc: 'Every new project means starting from scratch, slowing down kick-offs and frustrating clients who are ready to go.' },
                { icon: <Eye className="w-6 h-6 text-ocean-600" />, title: 'No visibility into which contracts are stuck', desc: "You have no idea which agreements are pending, who hasn't signed, or where bottlenecks are hiding in your pipeline." },
                { icon: <FileText className="w-6 h-6 text-ocean-600" />, title: 'Time wasted recreating similar contracts from scratch', desc: 'Your team writes the same clauses over and over. Templates are outdated or non-existent, eating into billable hours.' },
              ].map((card, i) => (
                <div key={i} className={`fade-up ${problems.isVisible ? 'visible' : ''} stagger-${i + 1} bg-gray-50 border border-gray-100 rounded-2xl p-8`}>
                  <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center mb-5">{card.icon}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">How Contract Ocean helps your agency</h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">A purpose-built workspace that turns contract chaos into a competitive advantage.</p>
            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Create client contracts in minutes with AI</h3>
                <p className="text-gray-600 leading-relaxed">Describe what you need — an SOW, NDA, or retainer agreement — and let AI draft a polished, ready-to-send contract. Customise the details and hit send before your coffee gets cold.</p>
              </div>
              <div className="md:w-1/2">
                <div className="screenshot-frame">
                  <div className="w-full h-64 rounded-xl bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-ocean-500 opacity-60" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send, sign, and track every agreement from one workspace</h3>
                <p className="text-gray-600 leading-relaxed">No more switching between email, Dropbox, and a spreadsheet tracker. Every contract lives in one place — from draft to signed — with built-in e-signatures and real-time status updates.</p>
              </div>
              <div className="md:w-1/2">
                <div className="screenshot-frame">
                  <div className="w-full h-64 rounded-xl bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center">
                    <Send className="w-16 h-16 text-ocean-500 opacity-60" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Spot delays before they cost you revenue</h3>
                <p className="text-gray-600 leading-relaxed">Performance analytics and bottleneck detection show you exactly where contracts stall. Follow up at the right time, close faster, and keep projects on schedule.</p>
              </div>
              <div className="md:w-1/2">
                <div className="screenshot-frame">
                  <div className="w-full h-64 rounded-xl bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center">
                    <Search className="w-16 h-16 text-ocean-500 opacity-60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. KEY FEATURES ===== */}
        <section
          ref={features.ref}
          className={`fade-up ${features.isVisible ? 'visible' : ''} py-20 md:py-28 bg-white`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Key features for agencies</h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14">Everything your team needs to move from proposal to signed contract — fast.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Sparkles className="w-6 h-6 text-ocean-600" />, title: 'AI contract generation', desc: 'Describe your deal and get a professional contract draft in seconds, powered by AI that understands agency workflows.' },
                { icon: <LayoutTemplate className="w-6 h-6 text-ocean-600" />, title: 'Template library', desc: 'Save your best contracts as reusable templates. SOWs, NDAs, retainers — always ready, always consistent.' },
                { icon: <PenTool className="w-6 h-6 text-ocean-600" />, title: 'E-signatures', desc: 'Collect legally-binding signatures without leaving the platform. Clients sign from any device in seconds.' },
                { icon: <Users className="w-6 h-6 text-ocean-600" />, title: 'Client workspace', desc: 'Organise contracts by client or project. Give your team instant access to every agreement in one clean dashboard.' },
                { icon: <BarChart3 className="w-6 h-6 text-ocean-600" />, title: 'Performance analytics', desc: "Track turnaround times, signature rates, and contract volume. Know what's working and where to improve." },
                { icon: <AlertTriangle className="w-6 h-6 text-ocean-600" />, title: 'Bottleneck detection', desc: 'Automatically surface contracts that are stalling. Get alerts before delays impact your revenue or relationships.' },
              ].map((feature, i) => (
                <div key={i} className={`fade-up ${features.isVisible ? 'visible' : ''} stagger-${i + 1} bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300`}>
                  <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center mb-5">{feature.icon}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">From template to signed — in five steps</h2>
            <p className="text-center text-gray-500 max-w-xl mx-auto mb-16">See how agencies use Contract Ocean to close contracts faster.</p>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-ocean-200" />
              {[
                { step: 1, title: 'Choose a template or generate with AI', desc: 'Pick from your library of proven templates or describe your deal and let AI create a draft instantly.', icon: <LayoutTemplate className="w-5 h-5 text-white" /> },
                { step: 2, title: 'Customize terms for your client', desc: 'Adjust scope, pricing, timelines, and clauses. The editor makes it easy to tailor every detail.', icon: <Settings className="w-5 h-5 text-white" /> },
                { step: 3, title: 'Send for signature', desc: 'Share the contract with your client via email. They can review and sign from any device.', icon: <Send className="w-5 h-5 text-white" /> },
                { step: 4, title: 'Track progress and follow up', desc: 'See who has viewed, signed, or is holding things up. Send reminders with one click.', icon: <Eye className="w-5 h-5 text-white" /> },
                { step: 5, title: 'Review performance insights', desc: 'After signing, analyse turnaround time and contract health to continuously improve your process.', icon: <TrendingUp className="w-5 h-5 text-white" /> },
              ].map((item, i) => (
                <div key={i} className={`fade-up ${workflow.isVisible ? 'visible' : ''} stagger-${i + 1} relative flex items-start gap-6 mb-12 last:mb-0`}>
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-ocean-600 flex items-center justify-center shadow-md">{item.icon}</div>
                  <div className="pt-1">
                    <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">Step {item.step}</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. BENEFITS ===== */}
        <section
          ref={benefits.ref}
          className={`fade-up ${benefits.isVisible ? 'visible' : ''} py-20 md:py-28 bg-white`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Results agencies see with Contract Ocean</h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14">Faster contracts mean faster revenue. Here is what you can expect.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { stat: '74% faster', label: 'contract turnaround', desc: 'From days of back-and-forth to hours. AI drafting and e-signatures cut the cycle dramatically.', icon: <Zap className="w-8 h-8 text-ocean-600" /> },
                { stat: '3x fewer', label: 'follow-up emails', desc: 'Automated reminders and real-time tracking mean less chasing and more doing.', icon: <Mail className="w-8 h-8 text-ocean-600" /> },
                { stat: '100%', label: 'visibility into contract status', desc: 'Every contract, every client, every stage — visible at a glance from your dashboard.', icon: <CheckCircle className="w-8 h-8 text-ocean-600" /> },
              ].map((item, i) => (
                <div key={i} className={`fade-up ${benefits.isVisible ? 'visible' : ''} stagger-${i + 1} bg-ocean-50 border border-ocean-100 rounded-2xl p-10 text-center`}>
                  <div className="w-16 h-16 rounded-2xl bg-ocean-100 flex items-center justify-center mx-auto mb-6">{item.icon}</div>
                  <p className="text-4xl md:text-5xl font-bold text-ocean-700 mb-2">{item.stat}</p>
                  <p className="text-lg font-semibold text-gray-900 mb-3">{item.label}</p>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7. CTA ===== */}
        <section
          ref={ctaSection.ref}
          className={`fade-up ${ctaSection.isVisible ? 'visible' : ''} gradient-cta py-20 md:py-28`}
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your agency deserves contracts that keep up</h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">Join hundreds of agencies using Contract Ocean to close deals faster, reduce admin, and keep clients happy.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/signup" className="btn-primary">Start free <ArrowRight className="w-4 h-4 ml-2 inline-block" /></a>
              <a href="/demo" className="btn-secondary">Book a demo</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
