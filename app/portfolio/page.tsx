import Portfolio from '@/components/Portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Shawn McMahon',
  description: 'View my projects and work as a Software Engineer.',
};

export default function PortfolioPage() {
  return <Portfolio />;
}
