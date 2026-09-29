'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project, ProjectPictureGroup } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

function toPictureGroups(project: Project): ProjectPictureGroup[] {
  if (project.pictureGroups?.length) {
    return project.pictureGroups;
  }

  return [{ label: 'Screenshots', pictures: project.pictures }];
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const pictureGroups = useMemo(() => toPictureGroups(project), [project]);
  const [groupIndex, setGroupIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  const activeGroup = pictureGroups[groupIndex] ?? pictureGroups[0];
  const activePictures = activeGroup?.pictures ?? [];
  const pageLabels =
    activeGroup?.pictureLabels ??
    activePictures.map((_, index) => `View ${index + 1}`);
  const hasMultipleGroups = pictureGroups.length > 1;
  const hasMultiplePages = activePictures.length > 1;

  const hasGithubRepo = Boolean(project.githubRepo);
  const hasDeployedSite = Boolean(project.deployedSite);

  useEffect(() => {
    setGroupIndex(0);
    setPageIndex(0);
  }, [project.id]);

  useEffect(() => {
    setPageIndex(0);
  }, [groupIndex]);

  const goToPreviousPage = () => {
    setPageIndex((current) =>
      current === 0 ? activePictures.length - 1 : current - 1,
    );
  };

  const goToNextPage = () => {
    setPageIndex((current) =>
      current === activePictures.length - 1 ? 0 : current + 1,
    );
  };

  if (!activePictures.length) {
    return null;
  }

  return (
    <article className="card-neo p-6 md:p-8 animate-fade-in">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Project Info */}
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark">
            {project.title}
          </h2>

          {/* Action Buttons */}
          {(hasGithubRepo || hasDeployedSite) && (
            <div className="flex flex-wrap gap-3 mb-6">
              {hasGithubRepo && (
                <Link
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  GitHub Repo
                </Link>
              )}
              {hasDeployedSite && (
                <Link
                  href={project.deployedSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={hasGithubRepo ? 'btn-secondary text-sm' : 'btn-primary text-sm'}
                >
                  Launch App
                </Link>
              )}
            </div>
          )}

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
          {hasMultipleGroups && (
            <div className="mb-3">
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark text-center mb-2">
                Theme
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {pictureGroups.map((group, index) => (
                  <button
                    key={group.label}
                    type="button"
                    onClick={() => setGroupIndex(index)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      groupIndex === index
                        ? 'bg-accent-light text-white dark:bg-accent-dark dark:text-surface-dark shadow-lg scale-105'
                        : 'bg-surface-light-elevated dark:bg-surface-dark-elevated text-text-secondary-light dark:text-text-secondary-dark shadow-neo-light-sm dark:shadow-neo-dark-sm hover:scale-102'
                    }`}
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="relative aspect-video rounded-xl overflow-hidden mb-3 shadow-lg group">
            <Image
              src={activePictures[pageIndex]}
              alt={`${project.title} — ${activeGroup.label} — ${pageLabels[pageIndex] ?? 'screenshot'}`}
              fill
              className="object-cover object-top transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {hasMultiplePages && (
              <>
                <button
                  type="button"
                  onClick={goToPreviousPage}
                  aria-label="Previous screenshot"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={goToNextPage}
                  aria-label="Next screenshot"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {hasMultiplePages && (
            <div className="mb-4">
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark text-center mb-2">
                {hasMultipleGroups ? `${activeGroup.label} — ` : ''}
                Browse pages
              </p>
              <div className="flex justify-center gap-2 flex-wrap">
                {activePictures.map((pic, index) => (
                  <button
                    key={pic}
                    type="button"
                    onClick={() => setPageIndex(index)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      pageIndex === index
                        ? 'ring-2 ring-accent-light dark:ring-accent-dark bg-accent-light/10 dark:bg-accent-dark/10 text-text-primary-light dark:text-text-primary-dark'
                        : 'bg-surface-light-elevated dark:bg-surface-dark-elevated text-text-secondary-light dark:text-text-secondary-dark'
                    }`}
                  >
                    {pageLabels[index] ?? `View ${index + 1}`}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!hasMultipleGroups && hasMultiplePages && (
            <div className="space-y-2 mb-4">
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark text-center">
                Click thumbnails to view different screenshots
              </p>
              <div className="flex justify-center gap-3">
                {activePictures.map((pic, index) => (
                  <button
                    key={pic}
                    type="button"
                    onClick={() => setPageIndex(index)}
                    className={`relative w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                      pageIndex === index
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
          )}

          {/* Tech Stack */}
          <div className="mt-2">
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
