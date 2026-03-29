import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contract Ocean for Consultancies — Streamlined Engagement Contracts',
  description: 'Spend more time advising clients, less time chasing signatures. Standardize engagement letters, automate agreement workflows, and track every consulting contract.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
