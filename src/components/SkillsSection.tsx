"use client";

import { useState } from "react";
import { SKILLS, SkillCategory, Translations } from "@/data/portfolio";
import { SkillIcon } from "./SkillIcon";

interface SkillsSectionProps {
  t: Translations;
}

const FILTER_TABS: { key: SkillCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend & DB" },
  { key: "tools", label: "Tools" },
];

export function SkillsSection({ t }: SkillsSectionProps) {
  const [filter, setFilter] = useState<SkillCategory>("all");
  const [inspectedSkill, setInspectedSkill] = useState<string | null>(null);

  const visibleSkills =
    filter === "all"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === filter);

  return (
    <section
      id="skills"
      className="p-gutter-xl rounded-xl bg-light-surface-container-low dark:bg-dark-surface-container-low border border-light-outline-variant/40 dark:border-dark-outline-variant/40 flex flex-col gap-gutter-md"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-gutter-sm">
        <div>
          <span className="font-mono text-mono-sm text-light-primary dark:text-dark-primary">
            TECH STACK
          </span>
          <h2 className="font-headline text-headline-md text-light-on-surface dark:text-dark-on-surface">
            {t.skills_title}
          </h2>
          <p className="font-body text-body-md text-light-outline dark:text-dark-outline text-balance">
            {inspectedSkill ?? t.skills_subtitle}
          </p>
        </div>

        <div
          className="flex flex-wrap items-center gap-gutter-xs"
          role="tablist"
          aria-label="Skill category filter"
        >
          {FILTER_TABS.map((tab) => {
            const isSelected = filter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setFilter(tab.key)}
                className={`px-gutter-md py-gutter-xs rounded-full font-label text-label-md transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary"
                    : "bg-light-surface-container dark:bg-dark-surface-container text-light-outline dark:text-dark-outline hover:text-light-on-surface dark:hover:text-dark-on-surface"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-gutter-md pt-gutter-sm pb-gutter-lg">
        {visibleSkills.map((skill) => {
          const readout = `${skill.name} — ${skill.usedIn}`;
          return (
            <button
              key={skill.name}
              type="button"
              aria-label={skill.name}
              onMouseEnter={() => setInspectedSkill(readout)}
              onFocus={() => setInspectedSkill(readout)}
              onClick={() => setInspectedSkill(readout)}
              className="group relative flex flex-col items-center focus:outline-none cursor-pointer"
            >
              <span className="relative inline-flex items-center justify-center w-12 h-12">
                <span
                  className="absolute inset-0 rounded-full translate-x-1 -translate-y-1 opacity-85 transition-transform duration-state-change group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
                  style={{ backgroundColor: skill.accent }}
                />
                <span className="relative w-12 h-12 rounded-full flex items-center justify-center bg-light-surface-container/90 dark:bg-dark-surface-container/90 border border-light-outline-variant/50 dark:border-dark-outline-variant/60 backdrop-blur-sm transition-transform duration-state-change group-hover:-translate-y-0.5">
                  <SkillIcon name={skill.name} />
                </span>
              </span>
              <span className="pointer-events-none absolute top-full mt-gutter-xs left-1/2 -translate-x-1/2 whitespace-nowrap font-label text-label-md text-light-on-surface dark:text-dark-on-surface opacity-0 translate-y-1 transition-all duration-state-change group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 z-20">
                {skill.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
