"use client";

import { useEffect, useState } from "react";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import {
  NeumorphicSync,
  OrbVisual,
  NeumorphicBarChart,
  NeumorphicClock,
} from "@/components/ui/NeumorphicAssets";

// ── Typewriter ─────────────────────────────────────────────────────────────────
const STACK = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"];

function useTypewriter(phrases: string[]) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = phrases[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text.length < cur.length) {
      t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 65);
    } else if (!del) {
      t = setTimeout(() => setDel(true), 1800);
    } else if (text.length > 0) {
      t = setTimeout(() => setText(cur.slice(0, text.length - 1)), 38);
    } else {
      setDel(false);
      setIdx((p) => (p + 1) % phrases.length);
    }
    return () => clearTimeout(t);
  }, [text, del, idx, phrases]);

  return text;
}

const STATS = [
  { value: "50+", label: "Projects Shipped" },
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Happy Clients" },
];

export function BentoFeatures() {
  const typed = useTypewriter(STACK);

  return (
    <section
      id="about"
      className="relative border-t border-zinc-200 bg-background px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-14 flex flex-col gap-4">
          <AnimatedItem>
            <EyebrowBadge>About the work</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[18ch] font-sans text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
              Tools, skills &amp;{" "}
              <span className="text-accent">why it matters.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        {/* Bento grid */}
        <AnimatedSection className="grid grid-cols-1 gap-5 md:grid-cols-[2fr_3fr] lg:grid-cols-[2fr_3fr_2fr]">
          {/* Typewriter card */}
          <AnimatedItem className="md:col-span-1">
            <div className="card-surface flex h-full min-h-[220px] flex-col justify-between p-7">
              <EyebrowBadge>Tech stack</EyebrowBadge>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-400">
                  Currently building with
                </p>
                <p className="mt-2 font-sans text-3xl font-semibold tracking-tight text-foreground">
                  {typed}
                  <span className="text-accent opacity-80">_</span>
                </p>
              </div>
            </div>
          </AnimatedItem>

          {/* Orb visual card */}
          <AnimatedItem className="md:col-span-1">
            <div className="card-surface h-full min-h-[220px] p-7">
              <EyebrowBadge>Ecosystem</EyebrowBadge>
              <OrbVisual />
            </div>
          </AnimatedItem>

          {/* 3D Cube card */}
          <AnimatedItem className="md:col-span-1 lg:col-span-1">
            <div className="card-surface h-full min-h-[220px] p-7">
              <EyebrowBadge>3D &amp; Motion</EyebrowBadge>
              <NeumorphicSync />
            </div>
          </AnimatedItem>

          {/* Stats row */}
          <AnimatedItem className="md:col-span-2 lg:col-span-3">
            <div className="card-surface p-7">
              <div className="grid grid-cols-3 divide-x divide-zinc-100">
                {STATS.map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-1 px-6 text-center first:pl-0 last:pr-0">
                    <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text font-sans text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                      {s.value}
                    </span>
                    <span className="font-sans text-sm text-zinc-500">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedItem>

          {/* Bar chart card */}
          <AnimatedItem className="md:col-span-1">
            <div className="card-surface h-full min-h-[200px] p-7">
              <EyebrowBadge>Delivery rate</EyebrowBadge>
              <NeumorphicBarChart />
            </div>
          </AnimatedItem>

          {/* Clock card */}
          <AnimatedItem className="md:col-span-1">
            <div className="card-surface h-full min-h-[200px] p-7">
              <EyebrowBadge>Always on time</EyebrowBadge>
              <NeumorphicClock />
            </div>
          </AnimatedItem>

          {/* Tagline card */}
          <AnimatedItem className="md:col-span-2 lg:col-span-1">
            <div className="card-surface flex h-full min-h-[200px] flex-col justify-between bg-zinc-950 p-7">
              <EyebrowBadge>Approach</EyebrowBadge>
              <p className="font-sans text-2xl font-semibold leading-snug tracking-tight text-white">
                &ldquo;Ship fast,
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  learn faster.
                </span>
                &rdquo;
              </p>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
