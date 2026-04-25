import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-zinc-200 bg-zinc-950 px-6 py-32 md:px-8 md:py-40"
    >
      {/* Indigo glow behind */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(99,102,241,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[900px] flex-col items-center gap-8 text-center">
        <AnimatedSection className="flex flex-col items-center gap-6">
          <AnimatedItem>
            <EyebrowBadge>Let&rsquo;s build together</EyebrowBadge>
          </AnimatedItem>

          <AnimatedItem>
            <h2 className="font-sans text-4xl font-semibold leading-[1.0] tracking-tighter text-white md:text-6xl lg:text-7xl">
              Got a project
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                in mind?
              </span>
            </h2>
          </AnimatedItem>

          <AnimatedItem>
            <p className="max-w-[44ch] font-sans text-base leading-relaxed text-zinc-400">
              Whether it&rsquo;s a new product, a redesign, or you just want a second opinion —
              I&rsquo;d love to hear about it. Let&rsquo;s make something great.
            </p>
          </AnimatedItem>

          <AnimatedItem>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:ssurajdewangan2244@gmail.com"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-sans text-sm font-medium text-zinc-900 shadow-[0_4px_24px_-4px_rgba(255,255,255,0.2)] transition-all duration-200 hover:bg-zinc-100 active:translate-y-[1px]"
              >
                Send a message
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-7 py-3.5 font-sans text-sm font-medium text-white backdrop-blur-md transition-all duration-200 hover:bg-white/[0.1] active:translate-y-[1px]"
              >
                View GitHub
              </a>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
