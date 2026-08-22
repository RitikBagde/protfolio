"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap, createContext } from "@/lib/gsap";
import { siteConfig } from "@/config/site";

export function Hero({ sectionRef }: { sectionRef?: React.RefObject<HTMLElement | null> }) {
  const internalRef = useRef<HTMLElement>(null);
  const container = sectionRef ?? internalRef;
  const headline = useRef<HTMLHeadingElement>(null);
  const subhead = useRef<HTMLParagraphElement>(null);
  const buttons = useRef<HTMLDivElement>(null);
  const stats = useRef<HTMLDivElement>(null);
  const badge = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!container.current) return;
    const helper = createContext(container.current);
    const ctx = helper.run(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badge.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
      )
        .fromTo(
          headline.current,
          { opacity: 0, y: "120%", rotation: 2 },
          { opacity: 1, y: "0%", rotation: 0, duration: 1.2, ease: "elastic.out(1, 0.6)" },
          0.1,
        )
        .fromTo(
          wordRefs.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          0.4,
        )
        .fromTo(
          buttons.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.7,
        )
        .fromTo(
          stats.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.9,
        );
    });

    let mouseX = 0;
    let mouseY = 0;
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX - innerWidth / 2) / innerWidth;
      mouseY = (e.clientY - innerHeight / 2) / innerHeight;
      if (headline.current) {
        gsap.to(headline.current, {
          x: mouseX * 10,
          y: mouseY * 5,
          duration: 1.5,
          ease: "power2.out",
        });
      }
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const words = siteConfig.tagline.split(" ");

  return (
    <section
      ref={container}
      className="relative min-h-screen overflow-hidden pt-40 pb-20 sm:pt-52 sm:pb-28"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="absolute -top-24 right-10 h-96 w-96 -z-10 rounded-full bg-cta/5 blur-[100px]" />
      <div className="absolute bottom-0 left-10 h-80 w-80 -z-10 rounded-full bg-accent/8 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div
          ref={badge}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-4 py-1.5 text-sm text-muted"
        >
          <Sparkles size={14} className="text-accent" />
          Available for freelance projects
        </div>

        <h1
          ref={headline}
          className="mt-8 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="gradient-text">{siteConfig.role}</span>
        </h1>

        <p
          ref={subhead}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85 sm:text-xl"
        >
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => { if (el) wordRefs.current[i] = el; }}
              className="inline-block"
            >
              {word}&nbsp;
            </span>
          ))}
        </p>

        <p className="mt-4 max-w-xl text-base text-foreground/70">
          I help clients ship AI integrations, data dashboards, automation
          pipelines, and full-stack web apps — from idea to production.
        </p>

        <div ref={buttons} className="mt-10">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-[0_0_32px_rgba(37,99,235,0.45)]"
          >
            <span className="absolute inset-0 -translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"></span>
            <span className="relative z-10 flex items-center gap-2">
              Contact Me
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </a>
        </div>

        <div ref={stats} className="mt-16 grid grid-cols-2 gap-6 border-t border-border/60 pt-10 sm:grid-cols-4">
          {[
            { value: "6+", label: "Shipped projects" },
            { value: "AI + Data", label: "Core focus" },
            { value: "Full-Stack", label: "End-to-end delivery" },
            { value: "Remote", label: "Worldwide clients" },
          ].map((stat, i) => (
            <div key={stat.label} className="relative">
              <div
                className="font-[family-name:var(--font-syne)] text-2xl font-bold text-foreground"
              >
                {stat.value}
              </div>
              <div
                className="mt-1 text-sm text-muted"
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
