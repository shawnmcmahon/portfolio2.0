'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { projectCategoryOrder, projects } from '@/lib/projects';
import PortfolioDetail from './PortfolioDetail';
import styles from './PortfolioWorkspace.module.css';

const groups = projectCategoryOrder
  .map((category) => ({
    category,
    projects: projects.filter((p) => p.category === category),
  }))
  .filter((group) => group.projects.length > 0);
const orderedProjects = groups.flatMap((group) => group.projects);

export default function PortfolioWorkspace() {
  const [selectedId, setSelectedId] = useState(orderedProjects[0]?.id ?? 0);
  const buttons = useRef(new Map<number, HTMLButtonElement>());
  const currentProject =
    projects.find((p) => p.id === selectedId) ?? projects[0];

  function navigate(event: KeyboardEvent<HTMLButtonElement>, id: number) {
    const index = orderedProjects.findIndex((p) => p.id === id);
    let next = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight')
      next = (index + 1) % orderedProjects.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft')
      next = (index - 1 + orderedProjects.length) % orderedProjects.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = orderedProjects.length - 1;
    else return;
    event.preventDefault();
    const nextId = orderedProjects[next].id;
    setSelectedId(nextId);
    buttons.current.get(nextId)?.focus({ preventScroll: true });
  }

  return (
    <section
      id="projects"
      className={styles.workspace}
      aria-label="Project portfolio"
    >
      <div className={styles.topbar}>
        <h1>Selected work</h1>
      </div>
      <div className={styles.mobileSelector}>
        <label htmlFor="portfolio-project">Choose a project</label>
        <select
          id="portfolio-project"
          value={selectedId}
          onChange={(e) => setSelectedId(Number(e.target.value))}
        >
          {groups.map((group) => (
            <optgroup key={group.category} label={group.category}>
              {group.projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
      <div className={styles.panels}>
        <aside className={styles.selector} aria-label="Project collection">
          <div className={styles.selectorHeading}>
            <span>THE COLLECTION</span>
            <span>{projects.length}</span>
          </div>
          <div
            role="tablist"
            aria-label="Select a project"
            aria-orientation="vertical"
            className={styles.projectList}
          >
            {groups.map((group) => (
              <div
                key={group.category}
                className={styles.projectGroup}
                role="presentation"
              >
                <h2>{group.category}</h2>
                <div className={styles.projectButtons} role="presentation">
                  {group.projects.map((project) => (
                    <button
                      key={project.id}
                      type="button"
                      role="tab"
                      id={`project-tab-${project.id}`}
                      aria-controls="project-panel"
                      aria-selected={project.id === selectedId}
                      tabIndex={project.id === selectedId ? 0 : -1}
                      title={project.title}
                      ref={(el) => {
                        if (el) buttons.current.set(project.id, el);
                        else buttons.current.delete(project.id);
                      }}
                      onKeyDown={(e) => navigate(e, project.id)}
                      onClick={() => setSelectedId(project.id)}
                    >
                      <span>{project.shortTitle || project.title}</span>
                      {project.id === selectedId && (
                        <span
                          aria-hidden="true"
                          className={styles.selectedMark}
                        >
                          ●
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
        <div
          id="project-panel"
          role="tabpanel"
          aria-label={`${currentProject.title} project`}
          className={styles.detailPanel}
          tabIndex={0}
        >
          <PortfolioDetail key={currentProject.id} project={currentProject} />
        </div>
      </div>
    </section>
  );
}
