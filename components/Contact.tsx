'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      value: 'shawnmcmahondev@gmail.com',
      href: 'mailto:shawnmcmahondev@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'github.com/shawnmcmahon',
      href: 'https://github.com/shawnmcmahon',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/shawnpmcmahon',
      href: 'https://www.linkedin.com/in/shawnpmcmahon/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-surface-light dark:bg-surface-dark relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Assets/valley.webp"
          alt="Mountain valley landscape"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-surface-light/95 via-surface-light/80 to-surface-light/60 dark:from-surface-dark/95 dark:via-surface-dark/80 dark:to-surface-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="section-container w-full">
          <div className="max-w-xl ml-auto animate-fade-in">
            <div className="card-neo p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-text-primary-light dark:text-text-primary-dark">
                Contact
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-8 text-accent-light dark:text-accent-dark">
                Shawn McMahon
              </h2>

              <div className="space-y-6">
                {contactLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200
                             bg-surface-light-elevated dark:bg-surface-dark-elevated
                             shadow-neo-light-sm dark:shadow-neo-dark-sm
                             hover:shadow-neo-light dark:hover:shadow-neo-dark
                             hover:-translate-y-1 group"
                  >
                    <div className="p-3 rounded-xl bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark group-hover:bg-accent-light group-hover:text-white dark:group-hover:bg-accent-dark dark:group-hover:text-surface-dark transition-colors">
                      {link.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">
                        {link.label}
                      </span>
                      <p className="text-text-primary-light dark:text-text-primary-dark font-medium group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-accent-light/10 dark:border-accent-dark/10 text-center">
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Credit */}
      <a
        href="https://www.istockphoto.com/photo/blyde-river-canyon-gm178925984-26592892"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 z-10 text-xs text-text-muted-light/60 dark:text-text-muted-dark/60 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
      >
        Photo by demerzel21 on iStockPhoto
      </a>
    </section>
  );
}
