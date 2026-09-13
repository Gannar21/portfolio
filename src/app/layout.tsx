import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gannar21.github.io/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Asma Gannar | Software Engineering & AI/ML',
    template: '%s | Asma Gannar',
  },
  description:
    'Portfolio of Asma Gannar, a final-year Software Engineering student specializing in software engineering, AI/ML, LLMs, data, and cybersecurity. Open to PFE opportunities for 2027.',
  keywords: [
    'Asma Gannar',
    'Software Engineering',
    'AI ML',
    'LLMs',
    'Cybersecurity',
    'Tunisia',
    'MedTech',
    'SMU',
    'PFE internship',
    'software developer',
    'portfolio',
  ],
  authors: [{ name: 'Asma Gannar', url: 'https://github.com/Gannar21' }],
  creator: 'Asma Gannar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Asma Gannar — Portfolio',
    title: 'Asma Gannar | Software Engineering & AI/ML',
    description:
      'Portfolio of Asma Gannar, a final-year Software Engineering student specializing in software engineering, AI/ML, LLMs, data, and cybersecurity. Open to PFE opportunities for 2027.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asma Gannar | Software Engineering & AI/ML',
    description:
      'Final-year Software Engineering student at MedTech SMU. Specializing in software engineering, AI/ML, LLMs, and cybersecurity. Open to PFE/internship opportunities.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#07071A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
