'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <article className="card-neo p-6 md:p-8 animate-fade-in">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Project Info */}
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark">
            {project.title}
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Link
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              GitHub Repo
            </Link>
            {project.deployedSite && (
              <Link
                href={project.deployedSite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                Launch App
              </Link>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-4 text-sm">
            <div>
              <span className="font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider text-xs">
                Date Completed
              </span>
              <p className="text-text-primary-light dark:text-text-primary-dark mt-1">
                {project.dateCompleted}
              </p>
            </div>

            <div>
              <span className="font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider text-xs">
                Application Type
              </span>
              <p className="text-text-primary-light dark:text-text-primary-dark mt-1">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    project.applicationType === 'Fullstack'
                      ? 'bg-accent-light/20 text-accent-light dark:bg-accent-dark/20 dark:text-accent-dark'
                      : 'bg-green-500/20 text-green-600 dark:bg-green-400/20 dark:text-green-400'
                  }`}
                >
                  {project.applicationType}
                </span>
              </p>
            </div>

            <div>
              <span className="font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider text-xs">
                Description
              </span>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.collaborators.length > 0 && (
              <div>
                <span className="font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider text-xs">
                  Collaborators
                </span>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1">
                  {project.collaborators.join(', ')}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="order-1 lg:order-2">
          {/* Main Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
            <Image
              src={project.pictures[selectedImage]}
              alt={`${project.title} screenshot ${selectedImage + 1}`}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Thumbnails */}
          <div className="space-y-2">
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark text-center">
              Click thumbnails to view different screenshots
            </p>
            <div className="flex justify-center gap-3">
              {project.pictures.map((pic, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedImage === index
                      ? 'ring-2 ring-accent-light dark:ring-accent-dark scale-105 shadow-lg'
                      : 'opacity-70 hover:opacity-100 hover:scale-102 shadow-neo-light-sm dark:shadow-neo-dark-sm'
                  }`}
                >
                  <Image
                    src={pic}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-6">
            <span className="font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider text-xs block mb-3 text-center">
              Technologies Used
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {project.technologiesUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium
                           bg-surface-light-elevated dark:bg-surface-dark-elevated
                           text-text-primary-light dark:text-text-primary-dark
                           shadow-neo-light-sm dark:shadow-neo-dark-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
