import type { ReactNode } from "react";

export function EyebrowBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400 backdrop-blur-md">
      {children}
    </span>
  );
}
