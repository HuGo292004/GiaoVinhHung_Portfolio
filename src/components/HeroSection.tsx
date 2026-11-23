"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { ROLES, TerminalTabKey } from "@/data/portfolio";
import BlurText from "./BlurText";
import { SpotlightCard } from "./SpotlightCard";

const TERMINAL_TABS: { key: TerminalTabKey; label: string }[] = [
  { key: "profile", label: "profile.json" },
  { key: "experience", label: "fpt_intern.log" },
  { key: "hire", label: "contact.sh" },
];

export function HeroSection() {
  const { lang, t, copyEmail } = usePortfolio();
  const [roleIdx, setRoleIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<TerminalTabKey>("profile");

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % ROLES.en.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const currentRole = ROLES[lang][roleIdx % ROLES[lang].length];

  return (
    <section
      id="hero"
      className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center"
    >
      {/* Left 6 Cols: Bold Kinetic Intro */}
      <div className="lg:col-span-6 flex flex-col gap-gutter-lg">
        <div className="flex items-center gap-gutter-sm">
          <span className="w-2 h-2 rounded-full bg-light-primary dark:bg-dark-primary status-pulse" />
          <span
            key={`${lang}-${roleIdx}`}
            className="font-mono text-mono-sm text-light-primary dark:text-dark-primary animate-role"
          >
            {currentRole}
          </span>
        </div>

        <div role="heading" aria-level={1}>
          <BlurText
            key={lang}
            text={t.hero_title}
            animateBy="words"
            direction="bottom"
            delay={70}
            trigger="load"
            className="font-display text-display-lg-mobile md:text-display-lg text-light-on-surface dark:text-dark-on-surface text-balance"
          />
        </div>

        <div className="flex flex-wrap items-center gap-gutter-sm">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-gutter-sm rounded-md bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary font-label text-label-lg transition-transform duration-state-change hover:-translate-y-0.5 cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-title-md"
              aria-hidden="true"
            >
              content_copy
            </span>
            <span>{t.btn_copy_email}</span>
          </button>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-gutter-sm px-gutter-md py-gutter-sm rounded-md bg-light-surface-container dark:bg-dark-surface-container border border-light-outline-variant/40 dark:border-dark-outline-variant/40 text-light-on-surface dark:text-dark-on-surface font-label text-label-lg transition-transform duration-state-change hover:-translate-y-0.5 hover:border-light-primary/60 dark:hover:border-dark-primary/60"
          >
            <span
              className="material-symbols-outlined text-title-md text-light-primary dark:text-dark-primary"
              aria-hidden="true"
            >
              deployed_code
            </span>
            <span>{t.btn_explore_work}</span>
          </Link>
        </div>
      </div>

      {/* Right 6 Cols: Interactive Developer Terminal Window */}
      <div className="lg:col-span-6">
        <SpotlightCard className="rounded-xl bg-light-surface-container-lowest dark:bg-dark-surface-container-lowest border border-light-outline-variant/50 dark:border-dark-outline-variant/60">
          {/* Terminal Title Bar & Clickable File Tabs */}
          <div className="px-gutter-md py-gutter-sm bg-light-surface-container dark:bg-dark-surface-container border-b border-light-outline-variant/40 dark:border-dark-outline-variant/40 flex flex-wrap items-center justify-between gap-gutter-sm">
            <div className="flex items-center gap-gutter-xs" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-light-primary-container dark:bg-dark-primary-container" />
              <span className="w-3 h-3 rounded-full bg-light-outline/50 dark:bg-dark-outline/50" />
              <span className="w-3 h-3 rounded-full bg-light-outline/30 dark:bg-dark-outline/30" />
            </div>
            <div
              className="flex items-center gap-gutter-xs"
              role="tablist"
              aria-label="Developer terminal files"
            >
              {TERMINAL_TABS.map((tab) => {
                const active = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-gutter-sm py-gutter-xs rounded-sm font-mono text-mono-sm transition-colors cursor-pointer ${
                      active
                        ? "bg-light-surface-container-highest dark:bg-dark-surface-container-highest text-light-on-surface dark:text-dark-on-surface"
                        : "text-light-outline dark:text-dark-outline hover:text-light-on-surface dark:hover:text-dark-on-surface"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-gutter-lg font-mono text-mono-sm leading-relaxed flex flex-col gap-gutter-xs min-h-[240px]">
            {activeTab === "profile" && (
              <>
                <div className="whitespace-pre-wrap">
                  <span className="text-light-outline dark:text-dark-outline">
                    {"{"}
                  </span>
                </div>
                <div className="whitespace-pre-wrap">
                  {"  "}
                  <span className="text-light-primary dark:text-dark-primary">
                    &quot;name&quot;
                  </span>
                  : &quot;Giao Vinh Hung&quot;,
                </div>
                <div className="whitespace-pre-wrap">
                  {"  "}
                  <span className="text-light-primary dark:text-dark-primary">
                    &quot;role&quot;
                  </span>
                  : &quot;Front-end / Full-stack Intern&quot;,
                </div>
                <div className="whitespace-pre-wrap">
                  {"  "}
                  <span className="text-light-primary dark:text-dark-primary">
                    &quot;university&quot;
                  </span>
                  : &quot;FPT University HCMC (2022–2026)&quot;,
                </div>
                <div className="whitespace-pre-wrap">
                  {"  "}
                  <span className="text-light-primary dark:text-dark-primary">
                    &quot;location&quot;
                  </span>
                  : &quot;District 9, Ho Chi Minh City&quot;,
                </div>
                <div className="whitespace-pre-wrap">
                  {"  "}
                  <span className="text-light-primary dark:text-dark-primary">
                    &quot;stack&quot;
                  </span>
                  : [&quot;ReactJS&quot;, &quot;TailwindCSS&quot;,
                  &quot;Node.js&quot;, &quot;MongoDB&quot;]
                </div>
                <div className="whitespace-pre-wrap">
                  <span className="text-light-outline dark:text-dark-outline">
                    {"}"}
                  </span>
                </div>
              </>
            )}

            {activeTab === "experience" && (
              <>
                <div className="whitespace-pre-wrap">
                  <span className="text-light-primary dark:text-dark-primary">
                    [Jan 2025 – Apr 2025]
                  </span>{" "}
                  FPT Software Ho Chi Minh
                </div>
                <div className="whitespace-pre-wrap">
                  <span className="text-light-outline dark:text-dark-outline">
                    ├─
                  </span>{" "}
                  Role: Intern Front-end Developer (Agile/Scrum)
                </div>
                <div className="whitespace-pre-wrap">
                  <span className="text-light-outline dark:text-dark-outline">
                    ├─
                  </span>{" "}
                  Built responsive UIs with ReactJS + Tailwind + Vite
                </div>
                <div className="whitespace-pre-wrap">
                  <span className="text-light-outline dark:text-dark-outline">
                    ├─
                  </span>{" "}
                  Integrated RESTful APIs with Back-end team
                </div>
                <div className="whitespace-pre-wrap">
                  <span className="text-light-outline dark:text-dark-outline">
                    └─
                  </span>{" "}
                  Code reviews, bug fixing &amp; performance tuning
                </div>
              </>
            )}

            {activeTab === "hire" && (
              <>
                <div className="whitespace-pre-wrap">
                  <span className="text-light-primary dark:text-dark-primary">
                    #!/bin/bash
                  </span>
                </div>
                <div className="whitespace-pre-wrap">
                  echo &quot;Email: devhugo292004@gmail.com&quot;
                </div>
                <div className="whitespace-pre-wrap">
                  echo &quot;Phone: 0348 296 335&quot;
                </div>
                <div className="whitespace-pre-wrap">
                  echo &quot;GitHub: github.com/HuGo292004&quot;
                </div>
                <div className="whitespace-pre-wrap">
                  echo &quot;Live Demo: hugo-clo.vercel.app&quot;
                </div>
                <div className="whitespace-pre-wrap">
                  <span className="text-light-primary dark:text-dark-primary">
                    # Ready to join your engineering team!
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Interactive Command Footer */}
          <div className="px-gutter-lg py-gutter-sm bg-light-surface-container-low dark:bg-dark-surface-container-low border-t border-light-outline-variant/30 dark:border-dark-outline-variant/30 flex items-center justify-between gap-gutter-sm">
            <span className="font-mono text-mono-sm text-light-outline dark:text-dark-outline">
              $ npx hugo --status
            </span>
            <button
              type="button"
              onClick={() => setActiveTab("hire")}
              className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-xs rounded-sm bg-light-primary-container dark:bg-dark-primary-container text-light-on-primary-container dark:text-dark-on-primary-container font-mono text-mono-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span
                className="material-symbols-outlined text-label-lg"
                aria-hidden="true"
              >
                play_arrow
              </span>
              <span>{t.btn_run_cmd}</span>
            </button>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
