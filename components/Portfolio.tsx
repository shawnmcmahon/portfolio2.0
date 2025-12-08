'use client';

import { useState } from 'react';
import { projects, type Project } from '@/lib/projects';
import ProjectCard from './ProjectCard';

export default function Portfolio() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];

  return (
    <section
      id="projects"
      className="min-h-screen bg-surface-light dark:bg-surface-dark pt-24 pb-16"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-text-primary-light to-accent-light dark:from-text-primary-dark dark:to-accent-dark bg-clip-text text-transparent">
            PROJECTS
          </h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            A collection of my work showcasing full-stack development, modern
            frameworks, and creative problem-solving.
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setCurrentProjectIndex(index)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                ${
                  currentProjectIndex === index
                    ? 'bg-accent-light text-white dark:bg-accent-dark dark:text-surface-dark shadow-lg scale-105'
                    : 'bg-surface-light-elevated dark:bg-surface-dark-elevated text-text-primary-light dark:text-text-primary-dark shadow-neo-light-sm dark:shadow-neo-dark-sm hover:shadow-neo-light dark:hover:shadow-neo-dark hover:-translate-y-0.5'
                }`}
            >
              {project.shortTitle || project.title}
            </button>
          ))}
        </div>

        {/* Current Project Display */}
        <ProjectCard project={currentProject} />
      </div>
    </section>
  );
}
