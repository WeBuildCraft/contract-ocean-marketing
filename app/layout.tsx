import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.contractocean.com'),
  title: 'Contract Ocean — AI-Powered Contract Management Platform',
  description:
    'Create, send, sign, and improve contracts in one smart workspace. AI-powered contract generation, e-signatures, templates, and performance analytics for modern businesses.',
  openGraph: {
    title: 'Contract Ocean — AI-Powered Contract Management Platform',
    description:
      'Create, send, sign, and improve contracts in one smart workspace. AI contract generation, e-signatures, and analytics.',
    type: 'website',
    url: 'https://contractocean.com',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contract Ocean — AI-Powered Contract Management',
    description:
      'Create, send, sign, and improve contracts in one smart workspace.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
