import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.contractocean.com'),
  title: 'Contract Ocean — AI Contract Creation & Signing Platform',
  description:
    'Create, send, sign, and track contracts in one place. Contract Ocean helps modern businesses move faster with AI-powered workflows.',
  openGraph: {
    title: 'Contract Ocean — AI Contract Creation & Signing Platform',
    description:
      'Create, send, sign, and track contracts in one place. Contract Ocean helps modern businesses move faster with AI-powered workflows.',
    type: 'website',
    url: 'https://www.contractocean.com',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contract Ocean — AI Contract Creation & Signing Platform',
    description:
      'Create, send, sign, and track contracts in one place. Contract Ocean helps modern businesses move faster with AI-powered workflows.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
