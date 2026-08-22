"use client";

import { useRef, useEffect } from "react";
import { ArrowRight, Send } from "lucide-react";
import { gsap, createContext } from "@/lib/gsap";
import { siteConfig } from "@/config/site";

export function WorkTogether() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const helper = createContext(sectionRef.current);
    const ctx = helper.run(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      }).from(
        subtitleRef.current,
        { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" },
        0.2,
      ).from(
        buttonRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        0.4,
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-border/60 bg-surface py-20 sm:py-32"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2
          ref={titleRef}
          className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          Let&apos;s build your next <span className="gradient-text">project</span>.
        </h2>

        <p
          ref={subtitleRef}
          className="mt-6 text-lg text-muted"
        >
          Whether it&apos;s an AI integration, data dashboard, automation workflow,
          or full-stack application — I&apos;m here to turn your ideas into working
          software.
        </p>

        <a
          ref={buttonRef as React.RefObject<HTMLAnchorElement>}
          href={`mailto:${siteConfig.email}`}
          className="group relative mt-10 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-cta px-8 py-4 text-lg font-semibold text-white"
        >
          <span className="absolute inset-0 -translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"></span>
          <span className="relative z-10 flex items-center gap-2">
            Get in touch
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </a>

        <div className="mt-16 flex flex-col items-center gap-2 text-sm text-muted">
          <div className="flex items-center gap-2">
            <Send size={16} className="text-accent" />
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-foreground"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
