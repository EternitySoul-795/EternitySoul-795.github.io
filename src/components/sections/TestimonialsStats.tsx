import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { Star } from "@phosphor-icons/react/dist/ssr";

const TESTIMONIALS = [
  {
    quote:
      "Suraj delivered our entire platform in half the time we estimated. The code quality was exceptional — clean, documented, and easy to extend.",
    name: "Alex Morgan",
    role: "CTO, Fintech Startup",
    rating: 5,
  },
  {
    quote:
      "Working with Suraj felt like having a co-founder who happened to be a brilliant engineer. He saw problems we hadn't even thought of.",
    name: "Priya Nair",
    role: "Founder, EdTech Platform",
    rating: 5,
  },
  {
    quote:
      "The attention to detail in the UI was incredible. Our users noticed immediately — time on site up 40% in the first week after launch.",
    name: "James Chen",
    role: "Product Lead, SaaS Co.",
    rating: 5,
  },
];

const STATS = [
  { value: "50+", label: "Projects shipped" },
  { value: "100%", label: "On-time delivery" },
  { value: "4.9", label: "Average rating" },
  { value: "3+", label: "Years experience" },
];

export function TestimonialsStats() {
  return (
    <section className="relative border-t border-zinc-200 bg-background px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-14 flex flex-col gap-4">
          <AnimatedItem>
            <EyebrowBadge>Social proof</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[18ch] font-sans text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
              What clients <span className="text-accent">actually say.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        {/* Stats strip */}
        <AnimatedSection className="mb-10">
          <AnimatedItem>
            <div className="card-surface grid grid-cols-2 divide-x divide-y divide-zinc-100 md:grid-cols-4 md:divide-y-0">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-1 px-8 py-6 text-center"
                >
                  <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text font-sans text-3xl font-semibold text-transparent md:text-4xl">
                    {s.value}
                  </span>
                  <span className="font-sans text-xs text-zinc-500">{s.label}</span>
                </div>
              ))}
            </div>
          </AnimatedItem>
        </AnimatedSection>

        {/* Testimonial cards */}
        <AnimatedSection className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <AnimatedItem key={t.name}>
              <div className="card-surface flex h-full flex-col gap-5 p-7">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} weight="fill" className="text-amber-400" />
                  ))}
                </div>
                <blockquote className="font-sans text-base leading-relaxed text-zinc-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-auto">
                  <p className="font-sans text-sm font-medium text-foreground">{t.name}</p>
                  <p className="font-sans text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
