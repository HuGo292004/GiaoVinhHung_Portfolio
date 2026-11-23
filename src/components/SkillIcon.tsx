import React from "react";

export function SkillIcon({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "ReactJS":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-[#61DAFB]`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            transform="rotate(120 12 12)"
          />
        </svg>
      );
    case "JavaScript":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="3" fill="#F7DF1E" />
          <path
            d="M10.5 16.8c0 1.4-.8 2.2-2.2 2.2-1 0-1.7-.5-2.1-1.2l1.3-.8c.2.4.5.7.9.7.4 0 .7-.2.7-.9v-4.8h1.4v4.8zm3.8 2.2c-1.4 0-2.3-.7-2.8-1.6l1.2-.7c.3.5.8.9 1.6.9.7 0 1.1-.3 1.1-.8 0-.6-.5-.8-1.3-1.1l-.4-.2c-1.2-.5-2-1.1-2-2.5 0-1.2.9-2.2 2.4-2.2 1.1 0 1.8.4 2.3 1.3l-1.2.8c-.3-.5-.6-.7-1.1-.7-.5 0-.8.3-.8.7 0 .5.3.7 1.1 1l.4.2c1.4.6 2.2 1.2 2.2 2.6 0 1.5-1.2 2.3-2.7 2.3z"
            fill="#111"
          />
        </svg>
      );
    case "TailwindCSS":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-[#38BDF8]`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C15.6 7.2 14.5 6 12 6zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C10.6 13.2 9.5 12 7 12z" />
        </svg>
      );
    case "React Native":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-[#61DAFB]`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <ellipse
            cx="12"
            cy="12"
            rx="6"
            ry="2.5"
            transform="rotate(35 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="6"
            ry="2.5"
            transform="rotate(-35 12 12)"
          />
        </svg>
      );
    case "HTML5":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path d="M4 3l1.5 16.2L12 21l6.5-1.8L20 3H4z" fill="#E34F26" />
          <path d="M12 4.5v15l5.2-1.4L18.4 4.5H12z" fill="#EF652A" />
          <path
            d="M7.5 8h9l-.3 2.2H9.9l.2 2.2h5.9l-.6 5-3.4 1-3.4-1-.2-2.4h2.1l.1 1 1.4.4 1.4-.4.2-1.7H8.1L7.5 8z"
            fill="#fff"
          />
        </svg>
      );
    case "CSS3":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path d="M4 3l1.5 16.2L12 21l6.5-1.8L20 3H4z" fill="#1572B6" />
          <path d="M12 4.5v15l5.2-1.4L18.4 4.5H12z" fill="#33A9DC" />
          <path
            d="M7.5 8h9l-.3 2.2H12l3.9 1.6-.5 5.4-3.4 1-3.4-1-.2-2.2h2.1l.1.9 1.4.4 1.4-.4.2-2H8l.2-2h5.6l.2-1.7H7.5V8z"
            fill="#fff"
          />
        </svg>
      );
    case "Bootstrap":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <rect x="2" y="3" width="20" height="18" rx="4" fill="#7952B3" />
          <path
            d="M8.5 7.5h4.2c1.6 0 2.6.8 2.6 2.1 0 .9-.5 1.6-1.4 1.9 1.1.2 1.8 1 1.8 2.2 0 1.5-1.2 2.4-3 2.4H8.5V7.5zm2 3.5h1.9c.7 0 1.2-.4 1.2-1s-.5-1-1.2-1h-1.9v2zm0 3.6h2.1c.8 0 1.3-.4 1.3-1.1s-.5-1.1-1.3-1.1h-2.1v2.2z"
            fill="#fff"
          />
        </svg>
      );
    case "Vite":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M21 4.5L12.5 20a.6.6 0 01-1 0L3 4.5a.6.6 0 01.6-.9l8.4 1.5 8.4-1.5a.6.6 0 01.6.9z"
            fill="#646CFF"
          />
          <path
            d="M15.5 3L9.8 4.1l-.5 7.8 2.6-.6-.7 3.8 2.1-.6-.8 4.5 5.2-9.5-2.7.5.5-7z"
            fill="#FFD62E"
          />
        </svg>
      );
    case "Ant Design":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-[#1677FF]`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M12 3l8 8-3 3-5-5-5 5-3-3 8-8z" />
          <path d="M12 13l5 5-5 3-5-3 5-5z" stroke="#FF4D4F" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M12 2l8.5 4.9v9.8L12 22l-8.5-5.3V6.9L12 2z"
            fill="#539E43"
          />
          <path
            d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
            fill="#fff"
          />
        </svg>
      );
    case "Express.js":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-light-on-surface dark:text-dark-on-surface`}
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontSize="9"
            fontWeight="700"
            fontFamily="monospace"
            fill="currentColor"
          >
            ex
          </text>
        </svg>
      );
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M12 2.5c-2.5 3.4-5 6.8-5 10.7 0 3.3 2.1 5.9 4.5 6.9V22h1v-1.9c2.4-1 4.5-3.6 4.5-6.9 0-3.9-2.5-7.3-5-10.7z"
            fill="#47A248"
          />
          <path
            d="M12 2.5v17.6c2.4-1 4.5-3.6 4.5-6.9 0-3.9-2.5-7.3-5-10.7z"
            fill="#4DB33D"
          />
        </svg>
      );
    case "MySQL":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M4 16c2-5 6-9 11-9 2.5 0 4.5 1.2 5 3-2 0-3.5.8-4.5 2 1.2.4 2.2 1.4 2.5 2.8-1.8-.8-3.6-.8-5.2 0-1.5.7-2.6 2-3.3 3.2H4z"
            fill="#00758F"
          />
          <circle cx="15.5" cy="9.5" r="1" fill="#F29111" />
        </svg>
      );
    case "Java":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M9 17c-2.2.6-2.2 1.7 0 2.2 2.7.6 5.8.5 7.7-.2"
            stroke="#E76F00"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M8.5 14c-1.5.5-1.2 1.3.7 1.6 2.5.4 5.2.3 6.8-.3"
            stroke="#5382A1"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12.5 3.5c1.5 2-1.5 3.5 0 5.5M15 5c1 1.5-1 2.5 0 4"
            stroke="#E76F00"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M16.5 11.5h1.2a1.8 1.8 0 010 3.6h-1.2"
            stroke="#5382A1"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "C# .NET":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <rect x="2" y="3" width="20" height="18" rx="4" fill="#512BD4" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontSize="9.5"
            fontWeight="700"
            fontFamily="monospace"
            fill="#fff"
          >
            C#
          </text>
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <ellipse cx="12" cy="6.5" rx="7" ry="3" fill="#336791" />
          <path
            d="M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"
            stroke="#336791"
            strokeWidth="1.6"
            fill="#336791"
            fillOpacity="0.25"
          />
          <path
            d="M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"
            stroke="#336791"
            strokeWidth="1.6"
            fill="#336791"
            fillOpacity="0.15"
          />
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M12 3c-3 0-4.5 1.3-4.5 3.5V9h4.5v1H6.5C4.5 10 3 11.4 3 14c0 2.5 1.3 4 3.5 4H8v-2.5c0-1.7 1.3-3 3-3h4.5c1.4 0 2.5-1.1 2.5-2.5V6.5C18 4.3 15.8 3 12 3z"
            fill="#3776AB"
          />
          <path
            d="M12 21c3 0 4.5-1.3 4.5-3.5V15H12v-1h5.5c2 0 3.5-1.4 3.5-4 0-2.5-1.3-4-3.5-4H16v2.5c0 1.7-1.3 3-3 3H8.5C7.1 11.5 6 12.6 6 14v3.5C6 19.7 8.2 21 12 21z"
            fill="#FFD43B"
          />
          <circle cx="10" cy="6" r="0.9" fill="#fff" />
          <circle cx="14" cy="18" r="0.9" fill="#fff" />
        </svg>
      );
    case "Git":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M21.2 11.3L12.7 2.8a1 1 0 00-1.4 0L9.5 4.6l2.2 2.2a1.2 1.2 0 011.5 1.5l2.1 2.1a1.2 1.2 0 11-.7.7l-2-2v5.2a1.2 1.2 0 11-1 0V9a1.2 1.2 0 01-.7-1.6L8.8 5.3 2.8 11.3a1 1 0 000 1.4l8.5 8.5a1 1 0 001.4 0l8.5-8.5a1 1 0 000-1.4z"
            fill="#F05032"
          />
        </svg>
      );
    case "GitHub":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-light-on-surface dark:text-dark-on-surface`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0112 6.95c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.22 10.22 0 0022 12.23C22 6.58 17.52 2 12 2z"
          />
        </svg>
      );
    case "Postman":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" fill="#FF6C37" />
          <path
            d="M15.8 8.2l-5.6 5.6m5.6-5.6l-3.8 1.1m3.8-1.1l-1.1 3.8"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9.2" cy="14.8" r="1.4" fill="#fff" />
        </svg>
      );
    case "Cloudinary":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M17.5 18H7a4.5 4.5 0 01-.8-8.9A5.5 5.5 0 0117 10a4 4 0 01.5 8z"
            fill="#3448C5"
          />
          <path
            d="M12 10v5m0-5l-2 2m2-2l2 2"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
