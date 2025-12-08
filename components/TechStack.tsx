'use client';

import Image from 'next/image';
import Link from 'next/link';

const technologies = [
  { src: '/Assets/icons/react-original-wordmark.svg', alt: 'React' },
  { src: '/Assets/icons/nextjs-original-wordmark.svg', alt: 'Next.js', darkInvert: true },
  { src: '/Assets/icons/javascript-plain.svg', alt: 'JavaScript' },
  { src: '/Assets/icons/typescript-plain.svg', alt: 'TypeScript' },
  { src: '/Assets/icons/cypressio-original-wordmark.svg', alt: 'Cypress', darkInvert: true },
  { src: '/Assets/icons/mocha-plain.svg', alt: 'Mocha' },
  { src: '/Assets/icons/html5-plain.svg', alt: 'HTML5' },
  { src: '/Assets/icons/css3-plain.svg', alt: 'CSS3' },
  { src: '/Assets/icons/nodejs-original-wordmark.svg', alt: 'Node.js' },
  { src: '/Assets/icons/express-original-wordmark.svg', alt: 'Express', darkInvert: true },
  { src: '/Assets/icons/csharp-original.svg', alt: 'C#' },
  { src: '/Assets/icons/dot-net-plain-wordmark.svg', alt: '.NET' },
  { src: '/Assets/icons/microsoftsqlserver-plain-wordmark.svg', alt: 'MS SQL Server' },
  { src: '/Assets/icons/postgresql-original-wordmark.svg', alt: 'PostgreSQL' },
  { src: '/Assets/icons/amazonwebservices-original-wordmark.svg', alt: 'AWS', darkInvert: true },
];

export default function TechStack() {
  return (
    <section className="bg-surface-light-elevated dark:bg-surface-dark-elevated py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent-light dark:text-accent-dark">
            Technical Expertise
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            A diverse toolkit built through years of professional experience and
            continuous learning.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.alt}
              className="card-neo p-4 flex items-center justify-center aspect-square
                       hover:scale-105 hover:shadow-neo-light dark:hover:shadow-neo-dark
                       transition-all duration-300 group"
            >
              <Image
                src={tech.src}
                alt={`${tech.alt} logo`}
                width={48}
                height={48}
                className={`w-4/5 h-auto object-contain
                           group-hover:scale-110 transition-transform duration-300
                           ${tech.darkInvert ? 'dark:invert dark:brightness-200' : ''}`}
              />
            </div>
          ))}

          {/* AWS Badge with link */}
          <Link
            href="https://www.credly.com/badges/256655d2-7c58-4e2f-93e5-f950ccc4b281/embedded"
            target="_blank"
            rel="noopener noreferrer"
            className="card-neo p-4 flex items-center justify-center aspect-square
                     hover:scale-105 hover:shadow-neo-light dark:hover:shadow-neo-dark
                     transition-all duration-300 group cursor-pointer"
          >
            <Image
              src="/Assets/icons/aws.png"
              alt="AWS Developer Associate Badge"
              width={48}
              height={48}
              className="w-4/5 h-auto object-contain
                       group-hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
