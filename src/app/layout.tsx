import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { PortfolioShell } from "@/components/PortfolioShell";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giao Vinh Hung — Portfolio",
  description:
    "Final-year Software Engineering student at FPT University HCMC (ex-FPT Software Intern). Focused on ReactJS, Tailwind CSS, Node.js, Express, and MongoDB.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${montserrat.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body antialiased selection:bg-light-primary/20 dark:selection:bg-dark-primary/20 min-h-screen subtle-grid-bg pb-section">
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
