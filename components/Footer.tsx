'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://github.com/shawnmcmahon',
      icon: '/Assets/gh.png',
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/shawnpmcmahon/',
      icon: '/Assets/li.png',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="bg-surface-light-elevated dark:bg-surface-dark-elevated border-t border-accent-light/10 dark:border-accent-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark mb-2">
              Contact Shawn
            </h3>
            <a
              href="mailto:shawnmcmahondev@gmail.com"
              className="text-accent-light dark:text-accent-dark hover:underline transition-colors"
            >
              shawnmcmahondev@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark mb-4">
              Follow Shawn
            </h3>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl transition-all duration-200
                           bg-surface-light dark:bg-surface-dark
                           shadow-neo-light-sm dark:shadow-neo-dark-sm
                           hover:shadow-neo-light dark:hover:shadow-neo-dark
                           hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={24}
                    height={24}
                    className="w-6 h-6 transition-transform group-hover:scale-110"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
              © {currentYear} Shawn McMahon
            </p>
            <p className="text-xs text-text-muted-light/60 dark:text-text-muted-dark/60 mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
