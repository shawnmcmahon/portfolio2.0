'use client';

export default function About() {
  return (
    <section
      id="about"
      className="bg-surface-light dark:bg-surface-dark py-20 md:py-28"
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="card-neo-inset p-8 md:p-12 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              My name is{' '}
              <span className="text-accent-light dark:text-accent-dark">
                Shawn
              </span>
              ...
            </h2>

            <p className="text-xl md:text-2xl font-medium text-accent-light dark:text-accent-dark mb-8">
              ...and I am on a mission to create beautiful, engaging websites.
            </p>

            <div className="space-y-6 text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
              <p>
                Currently serving as a Software Engineer II at Vertafore, I specialize
                in building robust, scalable applications using modern technologies
                including React, TypeScript, and .NET Framework. My expertise spans
                full-stack development, with particular strengths in front-end
                architecture, API design, and cloud-native solutions. I thrive in
                collaborative environments where I can leverage my technical skills
                alongside my background in management and real estate to deliver
                exceptional user experiences and drive business value.
              </p>

              <p>
                Throughout my career, I&apos;ve demonstrated a unique ability to bridge
                technical complexity with user-centric design, ensuring that every
                solution not only meets functional requirements but also exceeds user
                expectations. My experience in client-facing roles has honed my ability
                to translate business needs into elegant technical solutions, while my
                leadership background enables me to mentor junior developers and
                contribute to team growth.
              </p>

              <p className="text-lg font-medium text-accent-light dark:text-accent-dark pt-4">
                Let&apos;s build something beautiful together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
