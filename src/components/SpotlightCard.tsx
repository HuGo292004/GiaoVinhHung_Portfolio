"use client";

import React, { useCallback } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "aside";
  children: React.ReactNode;
}

export function SpotlightCard({
  as = "div",
  className = "",
  children,
  onMouseMove,
  ...rest
}: SpotlightCardProps) {
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      onMouseMove?.(e);
    },
    [onMouseMove]
  );

  const Component = as;

  return (
    <Component
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
