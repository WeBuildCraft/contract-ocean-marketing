'use client';

import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FeatureData {
  eyebrow: string;
  headline: string;
  body: string;
  bullets: string[];
  screenshotSrc: string;
  screenshotAlt: string;
  bgClass: string;
}

const features: FeatureData[] = [
  {
    eyebrow: 'AI-POWERED',
    headline: 'Let AI do the heavy drafting',
    body: "Choose a contract type, enter your details, and let Contract Ocean's AI generate a professional, clause-ready agreement in minutes. No legal expertise needed.",
    bullets: [
      '9 contract types from service agreements to NDAs',
      'Smart clause suggestions based on your industry',
      'Guided 7-step flow anyone on your team can use',
      'Edit, refine, and customize after generation',
    ],
    screenshotSrc: '/screenshots/ai-generator.png',
    screenshotAlt: 'Contract Ocean AI Contract Generator',
    bgClass: 'bg-white',
  },
  {
    eyebrow: 'EDITOR',
    headline: 'Edit contracts with confidence, not complexity',
    body: 'A purpose-built contract editor with document outline, variable insertion, AI-powered rewrite suggestions, and real-time collaboration tools.',
    bullets: [
      'Structured document outline navigation',
      'Smart variables that auto-fill across sections',
      'AI assistant for clause suggestions and rewrites',
      'Readiness checklist before sending',
    ],
    screenshotSrc: '/screenshots/editor.png',
    screenshotAlt: 'Contract Ocean Smart Contract Editor',
    bgClass: 'bg-slate-50/50',
  },
  {
    eyebrow: 'TEMPLATES',
    headline: 'Start with structure, not a blank page',
    body: 'Choose from professionally crafted templates for every business scenario. Service agreements, NDAs, employment offers, freelancer contracts, and more — each one built for real-world use.',
    bullets: [
      '12+ professional templates across categories',
      'Personalized recommendations based on your activity',
      'Category filtering for fast discovery',
      'One-click start with editable variables',
    ],
    screenshotSrc: '/screenshots/templates.png',
    screenshotAlt: 'Contract Ocean Template Library',
    bgClass: 'bg-white',
  },
  {
    eyebrow: 'E-SIGNATURE',
    headline: 'Send contracts with clarity, not back-and-forth',
    body: 'Add recipients, place signature fields, write a personal message, and send — all in one guided flow. Track signing progress without chasing email threads.',
    bullets: [
      'Add signers, reviewers, and CC recipients',
      'Drag-and-drop signature field placement',
      'Custom signing messages with templates',
      'Real-time signature status tracking',
    ],
    screenshotSrc: '/screenshots/sign-send.png',
    screenshotAlt: 'Contract Ocean Sign and Send',
    bgClass: 'bg-slate-50/50',
  },
  {
    eyebrow: 'ANALYTICS',
    headline: 'See where contracts slow down — before revenue does',
    body: "Contract Ocean doesn't stop at signing. Track contract volume, signature turnaround time, completion rates, and category performance to uncover what's working and what's not.",
    bullets: [
      'Contract volume and trend tracking',
      'Signature turnaround time analysis',
      'Completion rate monitoring',
      'Category and template performance rankings',
    ],
    screenshotSrc: '/screenshots/analytics.png',
    screenshotAlt: 'Contract Ocean Analytics and Insights',
    bgClass: 'bg-white',
  },
  {
    eyebrow: 'CONTACTS',
    headline: 'Know who signs, who delays, and who matters',
    body: 'Smart contact management with automatic tagging, contract association, and activity tracking. See which contacts are frequent signers, high-value partners, or causing delays.',
    bullets: [
      'Auto-tagged contacts: frequent signer, high value, delayed',
      'Full contract history per contact',
      'Activity timeline for every relationship',
      'Custom tags and filtering',
    ],
    screenshotSrc: '/screenshots/contacts.png',
    screenshotAlt: 'Contract Ocean Contact and Workflow Tracking',
    bgClass: 'bg-slate-50/50',
  },
];

function FeatureBlock({ feature, index }: { feature: FeatureData; index: number }) {
  const textAnim = useScrollAnimation();
  const imageAnim = useScrollAnimation();

  const isOdd = index % 2 === 0;
  const textSlideClass = isOdd ? 'slide-left' : 'slide-right';
  const imageSlideClass = 'scale-in';

  const textContent = (
    <div
      ref={textAnim.ref}
      className={`${textSlideClass} ${textAnim.isVisible ? 'visible' : ''} flex flex-col justify-center`}
    >
      <span className="text-xs uppercase tracking-widest text-ocean-500 font-semibold">
        {feature.eyebrow}
      </span>
      <h3 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
        {feature.headline}
      </h3>
      <p className="mt-5 text-lg text-slate-600 leading-relaxed">
        {feature.body}
      </p>
      <ul className="mt-8 space-y-4">
        {feature.bullets.map((bullet, i) => (
          <li key={i} className={`flex items-start gap-3 stagger-${i + 1}-8`}>
            <span className="mt-0.5 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-ocean-50">
              <Check className="w-3.5 h-3.5 text-ocean-500" strokeWidth={3} />
            </span>
            <span className="text-slate-700">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const imageContent = (
    <div
      ref={imageAnim.ref}
      className={`${imageSlideClass} ${imageAnim.isVisible ? 'visible' : ''} flex items-center`}
    >
      <div className="screenshot-frame w-full">
        <img
          src={feature.screenshotSrc}
          alt={feature.screenshotAlt}
          className="w-full h-auto"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.style.background = 'linear-gradient(135deg, #f0f7ff, #e0efff)';
            target.parentElement!.style.minHeight = '300px';
          }}
        />
      </div>
    </div>
  );

  return (
    <div className={feature.bgClass}>
      <div className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {isOdd ? (
            <>
              {textContent}
              {imageContent}
            </>
          ) : (
            <>
              {imageContent}
              {textContent}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div id="features">
      {features.map((feature, index) => (
        <FeatureBlock key={index} feature={feature} index={index} />
      ))}
    </div>
  );
}
