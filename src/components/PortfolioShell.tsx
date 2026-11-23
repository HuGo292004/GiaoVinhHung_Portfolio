"use client";

import React from "react";
import { PortfolioProvider, usePortfolio } from "@/context/PortfolioContext";
import { Sidebar } from "./Sidebar";

function ShellContent({ children }: { children: React.ReactNode }) {
  const { toastVisible, t } = usePortfolio();

  return (
    <>
      <div className="max-w-7xl mx-auto px-gutter-md sm:px-gutter-xl py-gutter-lg flex flex-col lg:flex-row gap-gutter-xl items-start">
        <Sidebar />
        <main className="flex-1 min-w-0 w-full flex flex-col gap-section">
          {children}
        </main>
      </div>

      {/* Copy Confirmation Toast */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 right-gutter-lg z-50 items-center gap-gutter-sm px-gutter-md py-gutter-sm rounded-full bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary font-label text-label-md transition-opacity duration-state-change ${
          toastVisible ? "flex opacity-100" : "hidden opacity-0"
        }`}
      >
        <span
          className="material-symbols-outlined text-title-md"
          aria-hidden="true"
        >
          check
        </span>
        <span>{t.toast_copied}</span>
      </div>
    </>
  );
}

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  return (
    <PortfolioProvider>
      <ShellContent>{children}</ShellContent>
    </PortfolioProvider>
  );
}
