"use client";

import { SpotlightCard } from "@/components/SpotlightCard";
import { usePortfolio } from "@/context/PortfolioContext";

export default function AboutPage() {
  const { t } = usePortfolio();

  return (
    <>
      {/* 1. Full Introduction */}
      <section className="flex flex-col gap-gutter-md">
        <span className="font-mono text-mono-sm text-light-primary dark:text-dark-primary">
          {t.about_eyebrow}
        </span>
        <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-on-surface dark:text-dark-on-surface text-balance">
          {t.about_title}
        </h1>

        <SpotlightCard className="p-gutter-xl rounded-xl bg-light-surface-container dark:bg-dark-surface-container border border-light-outline-variant/40 dark:border-dark-outline-variant/40 flex flex-col gap-gutter-md">
          <p className="font-body text-body-lg text-light-on-surface dark:text-dark-on-surface text-pretty">
            {t.about_p1}
          </p>
          <p className="font-body text-body-md text-light-on-surface-variant dark:text-dark-on-surface-variant text-pretty">
            {t.about_p2}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md pt-gutter-sm border-t border-light-outline-variant/30 dark:border-dark-outline-variant/30">
            <div className="flex flex-col gap-gutter-xs">
              <span className="font-mono text-mono-sm text-light-primary dark:text-dark-primary">
                {t.stat_1_label}
              </span>
              <span className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
                Front-end / Full-stack Intern
              </span>
            </div>
            <div className="flex flex-col gap-gutter-xs">
              <span className="font-mono text-mono-sm text-light-primary dark:text-dark-primary">
                {t.stat_3_label}
              </span>
              <span className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
                District 9, Ho Chi Minh City
              </span>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* 2. Work Experience & Education */}
      <section
        aria-label="Experience and Education"
        className="flex flex-col gap-gutter-md"
      >
        <div className="flex flex-col gap-gutter-xs">
          <span className="font-mono text-mono-sm text-light-primary dark:text-dark-primary">
            {t.journey_eyebrow}
          </span>
          <h2 className="font-headline text-headline-lg text-light-on-surface dark:text-dark-on-surface">
            {t.journey_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-md items-stretch">
          <SpotlightCard
            as="article"
            className="h-full p-gutter-xl rounded-xl bg-light-surface-container dark:bg-dark-surface-container border border-light-outline-variant/40 dark:border-dark-outline-variant/40 flex flex-col gap-gutter-md"
          >
            <header className="flex items-center justify-between gap-gutter-sm">
              <span className="px-gutter-sm py-gutter-xs rounded-sm bg-light-primary-container dark:bg-dark-primary-container text-light-on-primary-container dark:text-dark-on-primary-container font-mono text-mono-sm">
                {t.tag_intern}
              </span>
              <span className="font-mono text-mono-sm text-light-outline dark:text-dark-outline tabular-nums">
                Jan 2025 - Apr 2025
              </span>
            </header>
            <div>
              <h3 className="font-title text-title-lg text-light-on-surface dark:text-dark-on-surface">
                FPT Software Ho Chi Minh
              </h3>
              <p className="font-body text-body-md text-light-primary dark:text-dark-primary">
                {t.exp_role}
              </p>
            </div>
            <ul className="flex flex-col gap-gutter-xs font-body text-body-md text-light-on-surface-variant dark:text-dark-on-surface-variant list-disc pl-gutter-md">
              <li>{t.exp_b1}</li>
              <li>{t.exp_b2}</li>
              <li>{t.exp_b3}</li>
              <li>{t.exp_b4}</li>
            </ul>
          </SpotlightCard>

          <SpotlightCard
            as="article"
            className="h-full p-gutter-xl rounded-xl bg-light-surface-container dark:bg-dark-surface-container border border-light-outline-variant/40 dark:border-dark-outline-variant/40 flex flex-col justify-between gap-gutter-md"
          >
            <div className="flex flex-col gap-gutter-md">
              <header className="flex items-center justify-between gap-gutter-sm">
                <span className="px-gutter-sm py-gutter-xs rounded-sm bg-light-surface-container-high dark:bg-dark-surface-container-high text-light-on-surface dark:text-dark-on-surface font-mono text-mono-sm">
                  {t.tag_edu}
                </span>
                <span className="font-mono text-mono-sm text-light-outline dark:text-dark-outline tabular-nums">
                  2022 - 2026
                </span>
              </header>
              <div>
                <h3 className="font-title text-title-lg text-light-on-surface dark:text-dark-on-surface">
                  FPT University — Ho Chi Minh Campus
                </h3>
                <p className="font-body text-body-md text-light-primary dark:text-dark-primary">
                  {t.edu_degree}
                </p>
              </div>
              <p className="font-body text-body-md text-light-on-surface-variant dark:text-dark-on-surface-variant text-pretty">
                {t.edu_courses}
              </p>
            </div>
          </SpotlightCard>
        </div>
      </section>
    </>
  );
}
