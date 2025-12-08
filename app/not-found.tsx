import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-surface-light dark:bg-surface-dark px-4">
      <div className="text-center max-w-lg">
        <div className="card-neo p-12">
          <h1 className="text-8xl font-bold text-accent-light dark:text-accent-dark mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
            Page Not Found
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="btn-primary inline-block">
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
