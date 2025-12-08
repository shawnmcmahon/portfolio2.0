import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shawn McMahon | Software Engineer',
  description: 'Portfolio of Shawn McMahon - Software Engineer specializing in React, TypeScript, and modern web development.',
  keywords: ['Software Engineer', 'React', 'TypeScript', 'Next.js', 'Web Developer', 'Frontend Developer'],
  authors: [{ name: 'Shawn McMahon' }],
  openGraph: {
    title: 'Shawn McMahon | Software Engineer',
    description: 'Portfolio of Shawn McMahon - Software Engineer specializing in React, TypeScript, and modern web development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
