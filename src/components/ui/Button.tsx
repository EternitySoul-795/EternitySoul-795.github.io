"use client";

import type { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  showArrow = false,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-2xl font-sans text-sm font-medium transition-all duration-200 active:translate-y-[1px]";

  const styles =
    variant === "primary"
      ? "bg-zinc-950 text-white px-6 py-3 hover:bg-zinc-800 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_4px_16px_-4px_rgba(0,0,0,0.25)]"
      : "bg-white text-zinc-900 px-6 py-3 border border-zinc-200 hover:border-zinc-300 shadow-[var(--card-shadow)]";

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          weight="bold"
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {content}
    </button>
  );
}
