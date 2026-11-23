"use client";

import Link from "next/link";
import { SpotlightCard } from "@/components/SpotlightCard";
import { usePortfolio } from "@/context/PortfolioContext";
import { CONTACT_EMAIL } from "@/data/portfolio";

export default function ContactPage() {
  const { t, copyEmail } = usePortfolio();

  return (
    <>
      {/* 1. Contact Header */}
      <section className="flex flex-col gap-gutter-md">
        <div className="flex items-center justify-between gap-gutter-sm">
          <span className="font-mono text-mono-sm text-light-primary dark:text-dark-primary">
            {t.contact_eyebrow}
          </span>
          <Link
            href="/"
            className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-xs rounded-full bg-light-surface-container dark:bg-dark-surface-container border border-light-outline-variant/40 dark:border-dark-outline-variant/40 font-label text-label-md text-light-on-surface dark:text-dark-on-surface hover:border-light-primary/60 dark:hover:border-dark-primary/60 transition-colors"
          >
            <span
              className="material-symbols-outlined text-label-lg"
              aria-hidden="true"
            >
              arrow_back
            </span>
            <span>{t.btn_back}</span>
          </Link>
        </div>

        <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-on-surface dark:text-dark-on-surface text-balance">
          {t.contact_title}
        </h1>

        <p className="font-body text-body-lg text-light-on-surface-variant dark:text-dark-on-surface-variant max-w-prose text-pretty">
          {t.contact_subtitle}
        </p>
      </section>

      {/* 2. Four Social & Direct Channels Grid (Email, GitHub, Facebook, Instagram) */}
      <section
        aria-label="Contact channels"
        className="grid grid-cols-1 md:grid-cols-2 gap-gutter-md"
      >
        {/* Email Card */}
        <SpotlightCard
          as="article"
          className="p-gutter-xl rounded-xl bg-gradient-to-br from-[#EA4335]/12 via-light-surface-container to-light-surface-container dark:from-[#EA4335]/20 dark:via-dark-surface-container dark:to-dark-surface-container border border-[#EA4335]/30 dark:border-[#EA4335]/35 flex flex-col justify-between gap-gutter-lg transition-transform duration-state-change hover:-translate-y-0.5 hover:border-[#EA4335]/75"
        >
          <div className="flex items-start justify-between gap-gutter-md">
            <div className="w-12 h-12 rounded-xl bg-[#EA4335] text-white flex items-center justify-center shadow-sm">
              <span
                className="material-symbols-outlined text-headline-md"
                aria-hidden="true"
              >
                mail
              </span>
            </div>
            <span className="px-gutter-sm py-gutter-xs rounded-sm bg-[#EA4335]/15 font-mono text-mono-sm text-[#EA4335] dark:text-[#FF8A80]">
              {t.tag_primary}
            </span>
          </div>
          <div className="flex flex-col gap-gutter-xs">
            <h2 className="font-headline text-title-lg text-light-on-surface dark:text-dark-on-surface">
              Email
            </h2>
            <p className="font-mono text-mono-sm text-light-on-surface-variant dark:text-dark-on-surface-variant break-all">
              {CONTACT_EMAIL}
            </p>
            <p className="font-body text-body-md text-light-outline dark:text-dark-outline">
              {t.desc_email}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-gutter-sm">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-xs rounded-md bg-[#EA4335] text-white font-label text-label-md hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span
                className="material-symbols-outlined text-label-lg"
                aria-hidden="true"
              >
                content_copy
              </span>
              <span>{t.btn_copy_email}</span>
            </button>
          </div>
        </SpotlightCard>

        {/* GitHub Card */}
        <SpotlightCard
          as="article"
          className="p-gutter-xl rounded-xl bg-gradient-to-br from-[#24292F]/12 via-light-surface-container to-light-surface-container dark:from-[#6E7681]/22 dark:via-dark-surface-container dark:to-dark-surface-container border border-[#24292F]/25 dark:border-[#8B949E]/35 flex flex-col justify-between gap-gutter-lg transition-transform duration-state-change hover:-translate-y-0.5 hover:border-[#24292F]/65 dark:hover:border-[#C9D1D9]/70"
        >
          <div className="flex items-start justify-between gap-gutter-md">
            <div className="w-12 h-12 rounded-xl bg-[#24292F] dark:bg-[#30363D] text-white flex items-center justify-center shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0112 6.95c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.22 10.22 0 0022 12.23C22 6.58 17.52 2 12 2z"
                />
              </svg>
            </div>
            <span className="px-gutter-sm py-gutter-xs rounded-sm bg-[#24292F]/12 dark:bg-[#8B949E]/20 font-mono text-mono-sm text-[#24292F] dark:text-[#C9D1D9]">
              CODE
            </span>
          </div>
          <div className="flex flex-col gap-gutter-xs">
            <h2 className="font-headline text-title-lg text-light-on-surface dark:text-dark-on-surface">
              GitHub
            </h2>
            <p className="font-mono text-mono-sm text-light-on-surface-variant dark:text-dark-on-surface-variant">
              github.com/HuGo292004
            </p>
            <p className="font-body text-body-md text-light-outline dark:text-dark-outline">
              {t.desc_github}
            </p>
          </div>
          <div>
            <a
              href="https://github.com/HuGo292004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-xs rounded-md bg-[#24292F] dark:bg-[#30363D] text-white font-label text-label-md hover:opacity-90 transition-opacity"
            >
              <span>{t.btn_open_github}</span>
              <span
                className="material-symbols-outlined text-label-lg"
                aria-hidden="true"
              >
                open_in_new
              </span>
            </a>
          </div>
        </SpotlightCard>

        {/* Facebook Card */}
        <SpotlightCard
          as="article"
          className="p-gutter-xl rounded-xl bg-gradient-to-br from-[#1877F2]/12 via-light-surface-container to-light-surface-container dark:from-[#1877F2]/22 dark:via-dark-surface-container dark:to-dark-surface-container border border-[#1877F2]/30 dark:border-[#1877F2]/35 flex flex-col justify-between gap-gutter-lg transition-transform duration-state-change hover:-translate-y-0.5 hover:border-[#1877F2]/75"
        >
          <div className="flex items-start justify-between gap-gutter-md">
            <div className="w-12 h-12 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z" />
              </svg>
            </div>
            <span className="px-gutter-sm py-gutter-xs rounded-sm bg-[#1877F2]/15 font-mono text-mono-sm text-[#1877F2] dark:text-[#60A5FA]">
              SOCIAL
            </span>
          </div>
          <div className="flex flex-col gap-gutter-xs">
            <h2 className="font-headline text-title-lg text-light-on-surface dark:text-dark-on-surface">
              Facebook
            </h2>
            <p className="font-mono text-mono-sm text-light-on-surface-variant dark:text-dark-on-surface-variant">
              fb.com/VinhHung2004s
            </p>
            <p className="font-body text-body-md text-light-outline dark:text-dark-outline">
              {t.desc_facebook}
            </p>
          </div>
          <div>
            <a
              href="https://www.facebook.com/VinhHung2004s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-xs rounded-md bg-[#1877F2] text-white font-label text-label-md hover:opacity-90 transition-opacity"
            >
              <span>{t.btn_open_fb}</span>
              <span
                className="material-symbols-outlined text-label-lg"
                aria-hidden="true"
              >
                open_in_new
              </span>
            </a>
          </div>
        </SpotlightCard>

        {/* Instagram Card */}
        <SpotlightCard
          as="article"
          className="p-gutter-xl rounded-xl bg-gradient-to-br from-[#DD2A7B]/12 via-[#8134AF]/8 to-light-surface-container dark:from-[#DD2A7B]/22 dark:via-[#8134AF]/14 dark:to-dark-surface-container border border-[#DD2A7B]/30 dark:border-[#DD2A7B]/35 flex flex-col justify-between gap-gutter-lg transition-transform duration-state-change hover:-translate-y-0.5 hover:border-[#DD2A7B]/75"
        >
          <div className="flex items-start justify-between gap-gutter-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <span className="px-gutter-sm py-gutter-xs rounded-sm bg-[#DD2A7B]/15 font-mono text-mono-sm text-[#DD2A7B] dark:text-[#F472B6]">
              SOCIAL
            </span>
          </div>
          <div className="flex flex-col gap-gutter-xs">
            <h2 className="font-headline text-title-lg text-light-on-surface dark:text-dark-on-surface">
              Instagram
            </h2>
            <p className="font-mono text-mono-sm text-light-on-surface-variant dark:text-dark-on-surface-variant">
              @giaovinhhung
            </p>
            <p className="font-body text-body-md text-light-outline dark:text-dark-outline">
              {t.desc_instagram}
            </p>
          </div>
          <div>
            <a
              href="https://www.instagram.com/giaovinhhung/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-xs rounded-md bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-label text-label-md hover:opacity-90 transition-opacity"
            >
              <span>{t.btn_open_ig}</span>
              <span
                className="material-symbols-outlined text-label-lg"
                aria-hidden="true"
              >
                open_in_new
              </span>
            </a>
          </div>
        </SpotlightCard>
      </section>
    </>
  );
}
