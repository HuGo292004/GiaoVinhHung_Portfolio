"use client";

import Image from "next/image";
import { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { PROJECTS, ProjectItem } from "@/data/portfolio";
import { SkillIcon } from "./SkillIcon";
import { SpotlightCard } from "./SpotlightCard";

function ProjectCard({ project }: { project: ProjectItem }) {
  const { lang, t } = usePortfolio();
  const [activeHighlightIdx, setActiveHighlightIdx] = useState(0);

  const currentHighlight =
    project.highlights[activeHighlightIdx] ?? project.highlights[0];

  return (
    <SpotlightCard
      as="article"
      className="rounded-xl bg-light-surface-container dark:bg-dark-surface-container border border-light-outline-variant/50 dark:border-dark-outline-variant/50"
    >
      {/* Top Action Bar */}
      <div className="px-gutter-lg py-gutter-sm bg-light-surface-container-high dark:bg-dark-surface-container-high border-b border-light-outline-variant/40 dark:border-dark-outline-variant/40 flex flex-wrap items-center justify-end gap-gutter-md">
        <div className="flex items-center gap-gutter-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-xs rounded-md bg-light-surface-container dark:bg-dark-surface-container text-light-on-surface dark:text-dark-on-surface font-label text-label-md hover:text-light-primary dark:hover:text-dark-primary transition-colors"
          >
            <span
              className="material-symbols-outlined text-label-lg"
              aria-hidden="true"
            >
              code
            </span>
            <span>GitHub</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-xs rounded-md bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary font-label text-label-md hover:opacity-90 transition-opacity"
            >
              <span
                className="material-symbols-outlined text-label-lg"
                aria-hidden="true"
              >
                open_in_new
              </span>
              <span>{t.btn_view_live}</span>
            </a>
          )}
        </div>
      </div>

      {/* Content Split (6/6) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-6 bg-light-surface-container-lowest dark:bg-dark-surface-container-lowest flex items-center justify-center p-gutter-sm overflow-hidden">
          <Image
            src={project.img}
            alt={project.alt}
            width={1920}
            height={1080}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="w-full h-auto max-h-96 lg:max-h-full object-contain rounded-md transition-transform duration-surface-enter hover:scale-105"
          />
        </div>

        <div className="lg:col-span-6 p-gutter-lg flex flex-col justify-between gap-gutter-md">
          <div className="flex flex-col gap-gutter-sm">
            <div className="flex items-center justify-between gap-gutter-sm">
              <span className="font-mono text-mono-sm text-light-primary dark:text-dark-primary">
                {project.role}
              </span>
              <span className="font-mono text-mono-sm text-light-outline dark:text-dark-outline tabular-nums">
                {project.date}
              </span>
            </div>

            <h2 className="font-headline text-title-lg text-light-on-surface dark:text-dark-on-surface">
              {project.title}
            </h2>

            <p className="font-body text-body-md text-light-on-surface-variant dark:text-dark-on-surface-variant text-pretty">
              {project.desc[lang]}
            </p>

            {/* Interactive Engineering Highlights */}
            <div className="flex flex-col gap-gutter-xs pt-gutter-sm">
              <span className="font-mono text-mono-sm text-light-outline dark:text-dark-outline">
                {t.proj_highlights_label}
              </span>
              <div className="flex flex-wrap gap-gutter-xs">
                {project.highlights.map((h, idx) => {
                  const isSelected = idx === activeHighlightIdx;
                  return (
                    <button
                      key={h.label}
                      type="button"
                      onClick={() => setActiveHighlightIdx(idx)}
                      className={`px-gutter-md py-gutter-xs rounded-full font-mono text-mono-sm transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary"
                          : "bg-light-surface-container-high dark:bg-dark-surface-container-high text-light-on-surface dark:text-dark-on-surface hover:text-light-primary dark:hover:text-dark-primary"
                      }`}
                    >
                      {h.label}
                    </button>
                  );
                })}
              </div>
              <p className="mt-gutter-xs p-gutter-md rounded-md bg-light-surface-container-high dark:bg-dark-surface-container-high font-body text-body-md text-light-on-surface dark:text-dark-on-surface text-pretty">
                {currentHighlight.detail[lang]}
              </p>
            </div>
          </div>

          {/* Tech Stack with Colored Icons */}
          <div className="flex flex-wrap gap-gutter-xs pt-gutter-sm border-t border-light-outline-variant/30 dark:border-dark-outline-variant/30">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-gutter-xs px-gutter-sm py-gutter-xs rounded-sm bg-light-surface-container-high dark:bg-dark-surface-container-high font-mono text-mono-sm text-light-on-surface-variant dark:text-dark-on-surface-variant"
              >
                <SkillIcon name={tech} className="w-4 h-4 shrink-0" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

export function ProjectShowcase() {
  const { t } = usePortfolio();

  return (
    <section id="projects" className="flex flex-col gap-gutter-xl">
      <div className="flex flex-col gap-gutter-xs">
        <h1 className="font-display text-headline-lg text-light-on-surface dark:text-dark-on-surface">
          {t.proj_title}
        </h1>
      </div>

      {PROJECTS.map((project) => (
        <ProjectCard key={project.key} project={project} />
      ))}
    </section>
  );
}
