import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    body: "Deep-dive into your goals, users, and constraints. No assumptions — just sharp questions and clear answers before a single line is written.",
  },
  {
    num: "02",
    title: "Design & Build",
    body: "Rapid iteration from wireframes to working product. I keep you in the loop at every milestone so there are no surprises at the finish line.",
  },
  {
    num: "03",
    title: "Launch & Iterate",
    body: "Ship confidently, measure what matters, keep improving. Handoff includes full documentation so you can own the codebase going forward.",
  },
];

export function ProcessMethodology() {
  return (
    <section
      id="process"
      className="relative border-t border-zinc-200 bg-background px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-14 flex flex-col gap-4">
          <AnimatedItem>
            <EyebrowBadge>How I work</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[18ch] font-sans text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
              A process you can <span className="text-accent">trust.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((step) => (
            <AnimatedItem key={step.num}>
              <div className="card-surface flex h-full flex-col gap-6 p-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                  {step.num}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-zinc-500">{step.body}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
