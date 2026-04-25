"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const FAQS = [
  {
    q: "What does your typical engagement look like?",
    a: "Most projects start with a scoping call where we map out goals, timeline, and budget. From there I work in focused sprints with weekly check-ins. You'll always know where things stand.",
  },
  {
    q: "Do you work with startups or established companies?",
    a: "Both. I enjoy the speed of early-stage startups and the rigour of scaling products. The common thread is teams who care deeply about quality and user experience.",
  },
  {
    q: "How do you handle revisions and feedback?",
    a: "Revisions are part of the process, not extras. I build in feedback cycles at key milestones so we catch misalignments early — not after weeks of work.",
  },
  {
    q: "Can you help after the project launches?",
    a: "Yes. I offer retainer arrangements for ongoing development, and I'm always available for critical fixes. Good handoff documentation is non-negotiable even if you're going in-house.",
  },
  {
    q: "What's the best way to start working together?",
    a: "Send a message or book a call — whichever feels easier. We'll spend 30 minutes understanding your project and I'll give you an honest assessment of fit, timeline, and cost.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-sans text-base font-medium text-foreground">{q}</span>
        <span className="flex-none text-accent">
          {open ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 font-sans text-sm leading-relaxed text-zinc-500">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative border-t border-zinc-200 bg-background px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[5fr_6fr] md:gap-20">
          <AnimatedSection className="flex flex-col gap-4">
            <AnimatedItem>
              <EyebrowBadge>Got questions?</EyebrowBadge>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="max-w-[16ch] font-sans text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
                Frequently <span className="text-accent">asked.</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="max-w-[40ch] font-sans text-base leading-relaxed text-zinc-500">
                Can&rsquo;t find the answer you&rsquo;re looking for?{" "}
                <a href="#contact" className="text-accent underline-offset-2 hover:underline">
                  Send me a message
                </a>{" "}
                and I&rsquo;ll get back to you within 24 hours.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="flex flex-col">
            {FAQS.map((faq) => (
              <AnimatedItem key={faq.q}>
                <FAQItem q={faq.q} a={faq.a} />
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
