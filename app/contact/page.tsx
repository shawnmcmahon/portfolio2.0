import Contact from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Shawn McMahon',
  description: 'Get in touch with Shawn McMahon - Software Engineer.',
};

export default function ContactPage() {
  return <Contact />;
}
