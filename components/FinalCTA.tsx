'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="gradient-cta py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-ocean-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-ocean-300/10 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className={`text-3xl md:text-5xl font-bold text-white leading-tight fade-up ${isVisible ? 'visible' : ''}`}>
          Stop losing time between draft and signature
        </h2>
        <p className={`text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto mt-6 leading-relaxed fade-up stagger-1 ${isVisible ? 'visible' : ''}`}>
          Create contracts faster, send them with confidence, and improve how
          your business closes agreements.
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 fade-up stagger-2 ${isVisible ? 'visible' : ''}`}>
          <button className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2 group">
            Start with Contract Ocean
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200">
            Book a demo
          </button>
        </div>
        <p className={`text-sm text-blue-300/60 mt-6 fade-up stagger-3 ${isVisible ? 'visible' : ''}`}>
          Free 14-day trial · No credit card required
        </p>
      </div>
    </section>
  );
}
