import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import '@/shared/styles/globals.scss';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0B0910',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Zaviko — Premium Digital Product, AI & Engineering Studio',
  description:
    'Zaviko designs, engineers, and automates digital experiences for ambitious businesses — from high-performance web applications and mobile apps to intelligent AI systems and scalable e-commerce.',
  keywords: [
    'Zaviko',
    'Digital Agency',
    'AI Systems',
    'Next.js Development',
    'Product Design',
    'SaaS Engineering',
    'Shopify Plus',
    'Mobile App Development',
    'Business Automation',
  ],
  authors: [{ name: 'Zaviko Studio', url: 'https://zaviko.agency' }],
  creator: 'Zaviko Digital Studio',
  openGraph: {
    title: 'Zaviko — Premium Digital Product, AI & Engineering Studio',
    description:
      'Designing, engineering, and automating digital experiences for ambitious market leaders.',
    url: 'https://zaviko.agency',
    siteName: 'Zaviko Digital Agency',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaviko — Digital Product & Engineering Studio',
    description:
      'Designing, engineering, and automating digital experiences for ambitious businesses.',
    creator: '@zavikostudio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${montserrat.variable} ${montserrat.className} bg-bg-1 text-text-1 min-h-screen selection:bg-primary selection:text-bg-1`}>
        <SmoothScrollProvider>
          <main className="relative flex min-h-screen flex-col overflow-x-clip">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
