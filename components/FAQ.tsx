'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  { question: 'What is Contract Ocean?', answer: 'Contract Ocean is a contract workflow platform that helps businesses create, send, sign, and improve contracts in one workspace. It combines AI-powered contract generation, professional templates, e-signatures, and performance analytics to replace scattered tools and manual processes.' },
  { question: 'How does the AI contract generator work?', answer: 'Our AI contract generator guides you through a simple 7-step process. Choose your contract type, enter your details and counterparty information, define key terms, and select relevant clauses. The AI generates a professional, legally-structured contract that you can review, edit, and customize before sending.' },
  { question: 'Can I send contracts for e-signature?', answer: 'Yes. Contract Ocean includes built-in e-signature functionality. You can add recipients, place signature fields, write personalized signing messages, and track signing progress — all without leaving the platform.' },
  { question: 'Is Contract Ocean built for small businesses?', answer: "Absolutely. Contract Ocean is designed specifically for SMEs, startups, agencies, consultancies, and growing teams. You don't need a legal department or enterprise budget to create and manage professional contracts." },
  { question: 'Can I use pre-built contract templates?', answer: 'Yes. Contract Ocean includes 12+ professionally crafted templates covering service agreements, NDAs, employment contracts, freelancer agreements, vendor contracts, partnerships, and more. Each template is built for real business use cases with editable variables.' },
  { question: 'What makes Contract Ocean different from basic e-signature tools?', answer: "Most e-signature tools stop at collecting signatures. Contract Ocean covers the entire contract lifecycle — from AI-powered creation and smart templates to signature tracking and performance analytics. You get visibility into what's slowing deals down, which templates perform best, and how to improve your completion rate." },
  { question: 'Can I track contract performance and bottlenecks?', answer: 'Yes. The Growth plan includes advanced analytics, bottleneck detection, and smart insights. You can track contract volume trends, signature turnaround times, completion rates, and category performance to identify and fix issues before they impact revenue.' },
  { question: 'Do I need legal experience to use Contract Ocean?', answer: 'No. Contract Ocean is built for business teams, not just legal departments. The AI-guided creation flow, smart templates, and clause suggestions make it easy for anyone to create professional contracts without legal expertise.' },
  { question: 'Is there a free trial?', answer: 'Yes. Both plans include a 14-day free trial with full access to all features. No credit card required to start.' },
  { question: 'What industries is Contract Ocean best for?', answer: 'Contract Ocean works well across industries — including agencies, consulting firms, technology companies, professional services, marketing teams, HR departments, and any business that regularly creates and manages contracts.' },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-slate-50 py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 fade-up ${isVisible ? 'visible' : ''}`}>
          <p className="text-xs uppercase tracking-widest text-ocean-500 mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border border-slate-200/80 mb-3 overflow-hidden transition-all fade-up stagger-1-8 ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center cursor-pointer hover:bg-slate-50/50 text-left"
              >
                <span className="font-medium text-slate-900 text-[15px]">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 ml-4 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-slate-600 text-[15px] leading-relaxed">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
