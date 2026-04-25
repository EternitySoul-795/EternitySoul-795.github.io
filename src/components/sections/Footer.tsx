import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const LINKS = [
  { label: "Work",     href: "#work" },
  { label: "About",   href: "#about" },
  { label: "Skills",  href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#05050b] py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 self-start">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
            </span>
            <span className="font-sans text-sm font-semibold tracking-tight text-white">
              Khileshwar<span className="text-violet-400">.</span>
            </span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-sm text-zinc-500 transition-colors duration-200 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Email */}
          <a
            href="mailto:khileshwar.uiux@gmail.com"
            className="group inline-flex items-center gap-1.5 font-sans text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            khileshwar.uiux@gmail.com
            <ArrowUpRight
              size={12}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-8 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-700">
            &copy; 2025 Khileshwar Dewangan — All rights reserved
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-700">
            Creative Developer &amp; Designer
          </span>
        </div>
      </div>
    </footer>
  );
}
