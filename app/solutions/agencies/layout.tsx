import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contract Ocean for Agencies — Smarter Client Contracts',
  description: 'Stop losing billable hours to contract admin. Create, send, sign, and track client contracts, SOWs, and NDAs from one smart workspace built for agencies.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
