"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePortfolio } from "@/context/PortfolioContext";
import { CONTACT_PHONE, IMAGES } from "@/data/portfolio";
import { SpotlightCard } from "./SpotlightCard";

export function Sidebar() {
  const pathname = usePathname();
  const { lang, setLang, isDark, toggleTheme, t } = usePortfolio();

  const navItems = [
    { href: "/", icon: "home", label: t.nav_home },
    { href: "/about", icon: "person", label: t.nav_about },
    { href: "/projects", icon: "deployed_code", label: t.nav_projects },
    { href: "/contact", icon: "alternate_email", label: t.nav_contact },
  ];

  return (
    <SpotlightCard
      as="aside"
      aria-label="Profile sidebar"
      className="w-full lg:w-[300px] lg:shrink-0 lg:sticky lg:top-gutter-lg rounded-xl bg-light-surface-container dark:bg-dark-surface-container border border-light-outline-variant/40 dark:border-dark-outline-variant/40 p-gutter-lg flex flex-col gap-gutter-md"
    >
      {/* Top Utility Row: Language & Theme */}
      <div className="flex items-center justify-between gap-gutter-sm">
        <div
          className="inline-flex items-center p-gutter-xs rounded-full bg-light-surface-container-high dark:bg-dark-surface-container-high border border-light-outline-variant/40 dark:border-dark-outline-variant/40"
          role="group"
          aria-label="Language switcher"
        >
          {(["en", "vi"] as const).map((code) => {
            const active = lang === code;
            return (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`px-gutter-sm py-gutter-xs rounded-full font-mono text-mono-sm transition-colors duration-state-change cursor-pointer ${
                  active
                    ? "bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary"
                    : "text-light-outline dark:text-dark-outline hover:text-light-on-surface dark:hover:text-dark-on-surface"
                }`}
              >
                {code.toUpperCase()}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-light-surface-container-high dark:bg-dark-surface-container-high border border-light-outline-variant/40 dark:border-dark-outline-variant/40 text-light-on-surface dark:text-dark-on-surface hover:border-light-primary/60 dark:hover:border-dark-primary/60 transition-colors duration-state-change cursor-pointer"
        >
          <span
            className="material-symbols-outlined text-title-md"
            aria-hidden="true"
          >
            {isDark ? "light_mode" : "dark_mode"}
          </span>
        </button>
      </div>

      {/* Large Clear Portrait */}
      <div className="w-full max-w-[220px] lg:max-w-none mx-auto aspect-square rounded-xl overflow-hidden border border-light-primary/50 dark:border-dark-primary/50 bg-light-surface-container-lowest dark:bg-dark-surface-container-lowest relative">
        <Image
          src={IMAGES.avatar}
          alt="Giao Vinh Hung"
          fill
          sizes="(max-width: 1024px) 220px, 252px"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Identity & Availability */}
      <div className="flex flex-col gap-gutter-xs">
        <div className="flex items-center gap-gutter-xs">
          <span className="font-headline text-title-lg text-light-on-surface dark:text-dark-on-surface">
            Giao Vinh Hung
          </span>
          <span
            className="material-symbols-outlined text-title-md text-verified"
            style={{ fontVariationSettings: "'FILL' 1" }}
            aria-hidden="true"
          >
            verified
          </span>
        </div>
        <span className="font-mono text-mono-sm text-light-outline dark:text-dark-outline">
          FPT University HCMC · HCMC
        </span>
        <div className="mt-gutter-xs flex flex-col gap-gutter-xs font-mono text-mono-sm text-light-on-surface-variant dark:text-dark-on-surface-variant">
          <a
            href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-gutter-xs hover:text-light-primary dark:hover:text-dark-primary transition-colors tabular-nums"
          >
            <span
              className="material-symbols-outlined text-label-lg text-light-primary dark:text-dark-primary"
              aria-hidden="true"
            >
              call
            </span>
            <span>{CONTACT_PHONE}</span>
          </a>
          <span className="inline-flex items-center gap-gutter-xs">
            <span
              className="material-symbols-outlined text-label-lg text-light-primary dark:text-dark-primary"
              aria-hidden="true"
            >
              location_on
            </span>
            <span>District 9, Ho Chi Minh City</span>
          </span>
        </div>
        <span className="mt-gutter-xs w-fit inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-xs rounded-full bg-light-primary-container dark:bg-dark-primary-container text-light-on-primary-container dark:text-dark-on-primary-container font-mono text-mono-sm">
          <span className="w-2 h-2 rounded-full bg-light-on-primary-container dark:bg-dark-on-primary-container status-pulse" />
          <span>{t.hero_badge}</span>
        </span>
      </div>

      {/* Vertical Navigation */}
      <nav
        aria-label="Primary navigation"
        className="flex flex-row flex-wrap lg:flex-col gap-gutter-xs pt-gutter-sm border-t border-light-outline-variant/30 dark:border-dark-outline-variant/30"
      >
        {navItems.map((item) => {
          const isCurrent = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent ? "page" : undefined}
              className={`inline-flex items-center gap-gutter-sm px-gutter-md py-gutter-xs rounded-md font-label text-label-md transition-colors ${
                isCurrent
                  ? "bg-light-surface-container-high dark:bg-dark-surface-container-high text-light-on-surface dark:text-dark-on-surface"
                  : "text-light-on-surface-variant dark:text-dark-on-surface-variant hover:bg-light-surface-container-high dark:hover:bg-dark-surface-container-high hover:text-light-on-surface dark:hover:text-dark-on-surface"
              }`}
            >
              <span
                className="material-symbols-outlined text-title-md text-light-primary dark:text-dark-primary"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </SpotlightCard>
  );
}
