import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contract Ocean for Startups — Professional Contracts from Day One',
  description: 'Move fast on deals without cutting legal corners. Generate professional contracts with AI, get signatures in hours not days, and keep your legal house in order from day one.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
