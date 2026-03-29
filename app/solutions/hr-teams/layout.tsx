import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contract Ocean for HR Teams — Smarter Employment Contracts',
  description: 'From offer letters to NDAs, manage every employment agreement in one place. Generate contracts with AI, collect signatures digitally, and track completion across your team.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
