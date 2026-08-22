"use client";

import { useRef, useEffect } from "react";
import { skillGroups } from "@/config/site";
import { gsap, createContext } from "@/lib/gsap";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const helper = createContext(sectionRef.current);
    const ctx = helper.run(({ $ }) => {
      const cards = $(".skill-card");
      cards.forEach((card, i: number) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          { scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" }, opacity: 1, y: 0, duration: 0.8, delay: i * 0.1 },
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="border-t border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-label">Skills</p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">
            Tools I actually use on client work
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            No inflated skill lists — these match what you&apos;ll see on my
            Freelancer, Upwork profiles, and project proposals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="skill-card rounded-2xl border border-border/80 bg-surface-elevated p-6"
            >
              <h3 className="font-[family-name:var(--font-syne)] text-sm font-semibold uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
