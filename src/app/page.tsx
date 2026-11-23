"use client";

import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { SpotlightCard } from "@/components/SpotlightCard";
import { usePortfolio } from "@/context/PortfolioContext";

export default function HomePage() {
  const { t } = usePortfolio();

  return (
    <>
      <HeroSection />

      {/* Quick Highlights Strip */}
      <section
        aria-label="Quick highlights"
        className="grid grid-cols-1 md:grid-cols-3 gap-gutter-md"
      >
        <Link href="/about" className="block">
          <SpotlightCard className="h-full p-gutter-lg rounded-xl bg-light-surface-container dark:bg-dark-surface-container border border-light-outline-variant/40 dark:border-dark-outline-variant/40 flex flex-col gap-gutter-xs transition-transform duration-state-change hover:-translate-y-0.5 hover:border-light-primary/60 dark:hover:border-dark-primary/60">
            <span className="font-mono text-mono-sm text-light-primary dark:text-dark-primary">
              {t.hl_1_tag}
            </span>
            <span className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
              FPT Software HCMC
            </span>
            <span className="font-body text-body-md text-light-outline dark:text-dark-outline">
              {t.hl_1_sub}
            </span>
          </SpotlightCard>
        </Link>

        <Link href="/projects" className="block">
          <SpotlightCard className="h-full p-gutter-lg rounded-xl bg-light-surface-container dark:bg-dark-surface-container border border-light-outline-variant/40 dark:border-dark-outline-variant/40 flex flex-col gap-gutter-xs transition-transform duration-state-change hover:-translate-y-0.5 hover:border-light-primary/60 dark:hover:border-dark-primary/60">
            <span className="font-mono text-mono-sm text-light-primary dark:text-dark-primary">
              {t.hl_2_tag}
            </span>
            <span className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
              {t.hl_2_title}
            </span>
            <span className="font-body text-body-md text-light-outline dark:text-dark-outline">
              HugoClo &amp; Smart Parking
            </span>
          </SpotlightCard>
        </Link>

        <Link href="/contact" className="block">
          <SpotlightCard className="h-full p-gutter-lg rounded-xl bg-light-surface-container dark:bg-dark-surface-container border border-light-outline-variant/40 dark:border-dark-outline-variant/40 flex flex-col gap-gutter-xs transition-transform duration-state-change hover:-translate-y-0.5 hover:border-light-primary/60 dark:hover:border-dark-primary/60">
            <span className="font-mono text-mono-sm text-light-primary dark:text-dark-primary">
              {t.hl_3_tag}
            </span>
            <span className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
              {t.hl_3_title}
            </span>
            <span className="font-body text-body-md text-light-outline dark:text-dark-outline">
              {t.hl_3_sub}
            </span>
          </SpotlightCard>
        </Link>
      </section>

      <SkillsSection t={t} />
    </>
  );
}
