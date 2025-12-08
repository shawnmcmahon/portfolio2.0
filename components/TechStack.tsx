'use client';

import Image from 'next/image';
import Link from 'next/link';

const technologies = [
  { src: '/Assets/icons/react-original-wordmark.svg', alt: 'React', url: 'https://react.dev' },
  { src: '/Assets/icons/nextjs-original-wordmark.svg', alt: 'Next.js', darkInvert: true, url: 'https://nextjs.org' },
  { src: '/Assets/icons/javascript-plain.svg', alt: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { src: '/Assets/icons/typescript-plain.svg', alt: 'TypeScript', url: 'https://www.typescriptlang.org' },
  { src: '/Assets/icons/cypressio-original-wordmark.svg', alt: 'Cypress', darkInvert: true, url: 'https://www.cypress.io' },
  { src: '/Assets/icons/mocha-plain.svg', alt: 'Mocha', url: 'https://mochajs.org' },
  { src: '/Assets/icons/html5-plain.svg', alt: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { src: '/Assets/icons/css3-plain.svg', alt: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { src: '/Assets/icons/nodejs-original-wordmark.svg', alt: 'Node.js', url: 'https://nodejs.org' },
  { src: '/Assets/icons/express-original-wordmark.svg', alt: 'Express', darkInvert: true, url: 'https://expressjs.com' },
  { src: '/Assets/icons/visualbasic-plain.svg', alt: 'Visual Basic', url: 'https://learn.microsoft.com/en-us/dotnet/visual-basic/' },
  { src: '/Assets/icons/csharp-original.svg', alt: 'C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
  { src: '/Assets/icons/dot-net-plain-wordmark.svg', alt: '.NET', url: 'https://dotnet.microsoft.com' },
  { src: '/Assets/icons/microsoftsqlserver-plain-wordmark.svg', alt: 'MS SQL Server', url: 'https://www.microsoft.com/en-us/sql-server' },
  { src: '/Assets/icons/postgresql-original-wordmark.svg', alt: 'PostgreSQL', url: 'https://www.postgresql.org' },
  { src: '/Assets/icons/supabase-original-wordmark.svg', alt: 'Supabase', url: 'https://supabase.com' },
  { src: '/Assets/icons/firebase-original-wordmark.svg', alt: 'Firebase', url: 'https://firebase.google.com' },
  { src: '/Assets/icons/netlify-original-wordmark.svg', alt: 'Netlify', url: 'https://www.netlify.com' },
  { src: '/Assets/icons/cloudflare-original-wordmark.svg', alt: 'Cloudflare', url: 'https://www.cloudflare.com' },
  { src: '/Assets/icons/vercel-original-wordmark.svg', alt: 'Vercel', darkInvert: true, url: 'https://vercel.com' },
  { src: '/Assets/icons/heroku-original-wordmark.svg', alt: 'Heroku', url: 'https://www.heroku.com' },
  { src: '/Assets/icons/wix-original-wordmark.svg', alt: 'Wix', url: 'https://www.wix.com' },
  { src: '/Assets/icons/cursor.svg', alt: 'Cursor IDE', url: 'https://cursor.sh' },
  { src: '/Assets/icons/amazonwebservices-original-wordmark.svg', alt: 'AWS', darkInvert: true, url: 'https://aws.amazon.com' },
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
            <Link
              key={tech.alt}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-neo p-4 flex items-center justify-center aspect-square
                       hover:scale-105 hover:shadow-neo-light dark:hover:shadow-neo-dark
                       transition-all duration-300 group cursor-pointer"
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
            </Link>
          ))}
        </div>

        {/* Certification Section */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent-light dark:text-accent-dark">
              AWS Certified
            </h2>
          </div>
          
          <div className="flex justify-center">
            <Link
              href="https://cp.certmetrics.com/amazon/en/public/verify/credential/aca41749fc4943e685d96008093882d0"
              target="_blank"
              rel="noopener noreferrer"
              className=" w-2/5 md:w-1/5 card-neo p-4 flex items-center justify-center aspect-square
                       hover:scale-105 hover:shadow-neo-light dark:hover:shadow-neo-dark
                       transition-all duration-300 group cursor-pointer"
            >
              <Image
                src="/Assets/icons/aws.png"
                alt="AWS Developer Associate Badge"
                width={800}
                height={800}
                className="w-full h-auto object-contain
                         group-hover:scale-110 transition-transform duration-300"
                quality={100}
                priority
              />
            </Link>
          </div>
          
          <p className="text-center text-sm text-text-secondary-light dark:text-text-secondary-dark mt-4">
            Exp. 2028
          </p>
        </div>
      </div>
    </section>
  );
}
