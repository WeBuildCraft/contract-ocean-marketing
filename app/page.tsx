import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Problem from '@/components/Problem';
import ProductOverview from '@/components/ProductOverview';
import Features from '@/components/Features';
import CreationFlow from '@/components/CreationFlow';
import AnalyticsShowcase from '@/components/AnalyticsShowcase';
import WhyContractOcean from '@/components/WhyContractOcean';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <ProductOverview />
        <Features />
        <CreationFlow />
        <AnalyticsShowcase />
        <WhyContractOcean />
        <UseCases />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
