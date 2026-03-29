import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contract Ocean for Sales Teams — Close Deals Faster',
  description: 'Turn proposals into signed contracts in hours, not weeks. Track every deal, identify signature bottlenecks, and stop losing revenue to contract delays.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
