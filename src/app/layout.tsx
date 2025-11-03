import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Space_Grotesk, Orbitron } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'SentinelSec — Cybersecurity Specialists',
    template: '%s — SentinelSec',
  },
  description:
    'Elite cybersecurity: penetration testing, threat intelligence, cloud security, DFIR, and red team operations. Built with Next.js 14.',
  applicationName: 'SentinelSec',
  keywords: ['cybersecurity', 'penetration testing', 'red team', 'DFIR', 'cloud security', 'threat intelligence'],
  openGraph: {
    title: 'SentinelSec — Cybersecurity Specialists',
    description:
      'Elite cybersecurity: penetration testing, threat intelligence, cloud security, DFIR, and red team operations.',
    url: 'https://example.com',
    siteName: 'SentinelSec',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SentinelSec — Cybersecurity Specialists',
    description:
      'Elite cybersecurity: penetration testing, threat intelligence, cloud security, DFIR, and red team operations.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${orbitron.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
