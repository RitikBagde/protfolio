"use client";

import { useRef, useEffect } from "react";
import { Brain, ChartColumn, Code2, Workflow } from "lucide-react";
import { gsap, createContext } from "@/lib/gsap";
import { services } from "@/config/site";

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const helper = createContext(sectionRef.current);
    const ctx = helper.run(({ $ }) => {
      const cards = $(".service-card");
      cards.forEach((card, i: number) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.1,
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="border-t border-border/60 bg-surface/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-label">Services</p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">
            Specific outcomes, not vague promises
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Tell me your problem — I&apos;ll match it to a proven capability.
            Here&apos;s what clients hire me for.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-accent/20 bg-accent-muted/30 p-6 sm:p-8">
          <p className="text-center text-base text-foreground sm:text-lg">
            Need something that spans multiple areas?{" "}
            <a
              href="#contact"
              className="font-semibold text-accent underline-offset-4 hover:underline"
            >
              Let&apos;s talk
            </a>{" "}
            — most client projects combine AI, data, and full-stack work.
          </p>
        </div>
      </div>
    </section>
  );
}

const iconMap = {
  brain: Brain,
  chart: ChartColumn,
  workflow: Workflow,
  code: Code2,
} as const;

type Service = (typeof services)[number];

function ServiceCard({ service }: { service: Service }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -4,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const Icon = iconMap[service.icon];

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="service-card card-glow rounded-2xl border border-border/80 bg-surface p-6 transition-all duration-300"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-muted text-accent">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 font-[family-name:var(--font-syne)] text-xl font-semibold">
        {service.title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {service.outcomes.map((outcome) => (
          <li
            key={outcome}
            className="flex items-center gap-2.5 text-sm text-muted"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {outcome}
          </li>
        ))}
      </ul>
    </article>
  );
}
