'use client';

import { useState } from 'react';
import { projectCategoryOrder, projects } from '@/lib/projects';
import ProjectCard from './ProjectCard';

export default function Portfolio() {
  const [currentProjectId, setCurrentProjectId] = useState(projects[0]?.id ?? 0);

  const currentProject =
    projects.find((project) => project.id === currentProjectId) ?? projects[0];

  const groupedProjects = projectCategoryOrder.map((category) => ({
    category,
    projects: projects.filter((project) => project.category === category),
  }));

  return (
    <section
      id="projects"
      className="min-h-screen bg-surface-light dark:bg-surface-dark pt-20 pb-12"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-text-primary-light to-accent-light dark:from-text-primary-dark dark:to-accent-dark bg-clip-text text-transparent">
            PROJECTS
          </h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            A collection of freelance work, personal builds, and school
            projects.
          </p>
        </div>

        {/* Project Navigation */}
        <div className="max-w-5xl mx-auto space-y-6 mb-8">
          {groupedProjects.map(({ category, projects: categoryProjects }) => (
            <div key={category} className="space-y-3">
              <h2 className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-text-muted-light dark:text-text-muted-dark">
                {category}
              </h2>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {categoryProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setCurrentProjectId(project.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      currentProjectId === project.id
                        ? 'bg-accent-light text-white dark:bg-accent-dark dark:text-surface-dark shadow-lg scale-105'
                        : 'bg-surface-light-elevated dark:bg-surface-dark-elevated text-text-primary-light dark:text-text-primary-dark shadow-neo-light-sm dark:shadow-neo-dark-sm hover:shadow-neo-light dark:hover:shadow-neo-dark hover:-translate-y-0.5'
                    }`}
                  >
                    {project.shortTitle || project.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Current Project Display */}
        {currentProject && <ProjectCard project={currentProject} />}
      </div>
    </section>
  );
}
