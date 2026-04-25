import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const SERVICES = [
  {
    icon: "⬡",
    title: "Web Development",
    body: "From landing pages to complex web apps — React, Next.js, TypeScript and modern tooling, shipped with care.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: "◈",
    title: "UI / UX Design",
    body: "Interfaces that feel inevitable. Figma to production with full-fidelity design systems and polished interactions.",
    tags: ["Figma", "Framer", "Tailwind"],
  },
  {
    icon: "⬭",
    title: "Backend & APIs",
    body: "Node.js, databases, third-party integrations — the invisible layer that makes everything work at scale.",
    tags: ["Node.js", "PostgreSQL", "REST / GraphQL"],
  },
];

export function CoreServices() {
  return (
    <section
      id="services"
      className="relative border-t border-zinc-200 bg-background px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-14 flex flex-col gap-4">
          <AnimatedItem>
            <EyebrowBadge>What I do</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[18ch] font-sans text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
              Services built for <span className="text-accent">real results.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <AnimatedItem key={s.title}>
              <div className="card-surface flex h-full flex-col gap-6 p-7">
                <span className="text-3xl leading-none">{s.icon}</span>

                <div className="flex flex-col gap-3">
                  <h3 className="font-sans text-lg font-semibold tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-zinc-500">{s.body}</p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group mt-2 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-accent"
                >
                  Learn more
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
