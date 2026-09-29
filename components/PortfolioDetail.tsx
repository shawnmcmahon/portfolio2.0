'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import type { Project } from '@/lib/projects';
import styles from './PortfolioWorkspace.module.css';

export default function PortfolioDetail({ project }: { project: Project }) {
  const groups = project.pictureGroups?.length
    ? project.pictureGroups
    : [{ label: 'Screenshots', pictures: project.pictures }];
  const [detailTab, setDetailTab] = useState('overview');
  const detailTabs = useRef<(HTMLButtonElement | null)[]>([]);
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'build', label: 'Build notes' },
  ];
  function navigateDetails(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft')
      next = 1 - index;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = 1;
    else return;
    event.preventDefault();
    setDetailTab(sections[next].id);
    detailTabs.current[next]?.focus({ preventScroll: true });
  }
  const [groupIndex, setGroupIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const group = groups[groupIndex] ?? groups[0];
  const pictures = group?.pictures ?? [];
  const labels =
    group?.pictureLabels ?? pictures.map((_, i) => `View ${i + 1}`);
  function changeGroup(value: number) {
    setGroupIndex(value);
    setPageIndex(0);
  }

  return (
    <article className={styles.detail}>
      <header className={styles.detailHeader}>
        <div>
          <p className={styles.category}>
            {project.category} <span>/ {project.applicationType}</span>
          </p>
          <h2>{project.title}</h2>
        </div>
        <div className={styles.actions}>
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              View code<span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          {project.deployedSite && (
            <a
              href={project.deployedSite}
              className={styles.primaryAction}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit project
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </header>
      <div className={styles.detailBody}>
        <section
          className={styles.gallery}
          aria-label={`${project.title} screenshots`}
        >
          <div className={styles.galleryToolbar}>
            {groups.length > 1 && (
              <label>
                Theme
                <select
                  aria-label="Screenshot theme"
                  value={groupIndex}
                  onChange={(e) => changeGroup(Number(e.target.value))}
                >
                  {groups.map((g, i) => (
                    <option key={g.label} value={i}>
                      {g.label}
                    </option>
                  ))}
                </select>
              </label>
            )}
            {pictures.length > 1 ? (
              <label>
                Screenshot
                <select
                  aria-label="Choose screenshot"
                  value={pageIndex}
                  onChange={(e) => setPageIndex(Number(e.target.value))}
                >
                  {pictures.map((pic, i) => (
                    <option key={pic} value={i}>
                      {labels[i] ?? `View ${i + 1}`}
                    </option>
                  ))}
                </select>
              </label>
            ) : (
              <p>PROJECT PREVIEW</p>
            )}
            <span className={styles.pageCounter}>
              {pictures.length ? pageIndex + 1 : 0} / {pictures.length}
            </span>
          </div>
          <div className={styles.imageStage}>
            {pictures[pageIndex] ? (
              <Image
                key={pictures[pageIndex]}
                src={pictures[pageIndex]}
                alt={`${project.title} — ${group.label} — ${labels[pageIndex] ?? 'Screenshot'}`}
                fill
                sizes="(min-width: 1100px) 48vw, (min-width: 900px) 38vw, 100vw"
                className={styles.screenshot}
                priority
              />
            ) : (
              <p>No screenshot available.</p>
            )}
          </div>
          <div className={styles.galleryFooter}>
            <p aria-live="polite" aria-atomic="true">
              {groups.length > 1 ? `${group.label} · ` : ''}
              {labels[pageIndex] ?? 'Preview'}
            </p>
            {pictures.length > 1 && (
              <div>
                <button
                  type="button"
                  aria-label="Previous screenshot"
                  onClick={() =>
                    setPageIndex(
                      (i) => (i - 1 + pictures.length) % pictures.length,
                    )
                  }
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next screenshot"
                  onClick={() => setPageIndex((i) => (i + 1) % pictures.length)}
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </section>
        <section
          className={styles.projectInfo}
          aria-label={`${project.title} details`}
        >
          <div
            className={styles.detailTabs}
            role="tablist"
            aria-label="Project details"
          >
            {sections.map((section, index) => (
              <button
                key={section.id}
                type="button"
                role="tab"
                id={`detail-tab-${section.id}`}
                aria-controls={`detail-${section.id}`}
                aria-selected={detailTab === section.id}
                tabIndex={detailTab === section.id ? 0 : -1}
                ref={(el) => {
                  detailTabs.current[index] = el;
                }}
                onClick={() => setDetailTab(section.id)}
                onKeyDown={(event) => navigateDetails(event, index)}
              >
                {section.label}
              </button>
            ))}
          </div>
          <div
            id="detail-overview"
            role="tabpanel"
            aria-labelledby="detail-tab-overview"
            tabIndex={0}
            hidden={detailTab !== 'overview'}
          >
            <dl className={styles.metadata}>
              <div>
                <dt>Completed</dt>
                <dd>{project.dateCompleted}</dd>
              </div>
              <div>
                <dt>Project scope</dt>
                <dd>{project.time}</dd>
              </div>
            </dl>

            <div className={styles.infoBlock}>
              <h3>About the project</h3>
              <p>{project.description}</p>
            </div>
          </div>
          <div
            id="detail-build"
            role="tabpanel"
            aria-labelledby="detail-tab-build"
            tabIndex={0}
            hidden={detailTab !== 'build'}
          >
            <div className={styles.infoBlock}>
              <h3>Built with</h3>
              <ul className={styles.technologies}>
                {project.technologiesUsed.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            {project.learningGoals.length > 0 && (
              <div className={styles.infoBlock}>
                <h3>Focus & learning</h3>
                <ul className={styles.learningGoals}>
                  {project.learningGoals.map((goal) => (
                    <li key={goal}>{goal}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.collaborators.length > 0 && (
              <div className={styles.infoBlock}>
                <h3>Collaborators</h3>
                <p>{project.collaborators.join(', ')}</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </article>
  );
}
