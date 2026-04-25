"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

const LINKS = [
  { label: "Work",     href: "#work" },
  { label: "About",   href: "#about" },
  { label: "Skills",  href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#05050b]/80 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
          </span>
          <span className="font-sans text-sm font-semibold tracking-tight text-white">
            EternitySoul<span className="text-violet-400">.</span>
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-sans text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 font-sans text-xs font-medium text-violet-300 backdrop-blur-sm transition-all duration-200 hover:border-violet-500/60 hover:bg-violet-500/20 active:translate-y-[1px]"
        >
          Let&rsquo;s Talk
          <ArrowUpRight size={12} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}
