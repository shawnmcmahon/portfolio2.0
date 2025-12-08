'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
            <Image
              src="/Assets/sm_logo.png"
              alt="Shawn McMahon - Home"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
              priority
            />
          </Link>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} mounted={mounted} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-text-primary-light dark:bg-text-primary-dark transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-text-primary-light dark:bg-text-primary-dark transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-text-primary-light dark:bg-text-primary-dark transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} mounted={mounted} />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-xl font-medium text-text-primary-light dark:text-text-primary-dark
                         hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated
                         transition-all duration-200 hover:-translate-y-0.5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-surface-light dark:bg-surface-dark z-40 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark
                       hover:text-accent-light dark:hover:text-accent-dark
                       transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function ThemeToggle({ theme, toggleTheme, mounted }: { theme: string; toggleTheme: () => void; mounted: boolean }) {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full transition-all duration-300
                 bg-surface-light-elevated dark:bg-surface-dark-elevated
                 shadow-neo-light-sm dark:shadow-neo-dark-sm
                 hover:shadow-neo-light dark:hover:shadow-neo-dark"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span
        className={`absolute top-1 w-5 h-5 rounded-full transition-all duration-300
                    bg-accent-light dark:bg-accent-dark shadow-md
                    flex items-center justify-center text-xs
                    ${mounted && theme === 'dark' ? 'left-8' : 'left-1'}`}
      >
        {mounted ? (theme === 'dark' ? '🌙' : '☀️') : '☀️'}
      </span>
    </button>
  );
}
