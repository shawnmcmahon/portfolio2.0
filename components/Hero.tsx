'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Assets/city1.webp"
          alt="New York City street at sunset"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-light/95 via-surface-light/80 to-surface-light/60 dark:from-surface-dark/95 dark:via-surface-dark/80 dark:to-surface-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full">
        <div className="max-w-2xl animate-fade-in">
          {/* Name Card */}
          <div className="card-neo mb-8 p-8 md:p-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-text-primary-light to-accent-light dark:from-text-primary-dark dark:to-accent-dark bg-clip-text text-transparent">
              Shawn McMahon
            </h1>
            <p className="text-xl md:text-2xl font-medium text-accent-light dark:text-accent-dark mb-6">
              Software Engineer
            </p>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg mb-8">
              Building beautiful, engaging web experiences with modern technologies.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio" className="btn-primary">
                View Portfolio
              </Link>
              <a
                href="/ShawnMcMahon_SoftwareEngineer.pdf"
                download="ShawnMcMahon_SoftwareEngineer.pdf"
                className="btn-secondary"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Credit */}
      <a
        href="https://unsplash.com/photos/low-light-photography-of-vehicle-crossing-road-between-high-rise-buildings-enGr5YbjQKQ"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 z-10 text-xs text-text-muted-light/60 dark:text-text-muted-dark/60 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
      >
        Photo by Malte Schmidt on Unsplash
      </a>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link href="#about" className="text-accent-light dark:text-accent-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
