import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contract Ocean for Operations — Contract Visibility at Scale',
  description: 'Track vendor agreements, manage renewals, detect bottlenecks, and ensure compliance — all from a single contract workspace built for operations teams.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
