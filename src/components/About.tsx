"use client";

import { useRef, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { gsap, createContext } from "@/lib/gsap";
import { siteConfig } from "@/config/site";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const helper = createContext(sectionRef.current);
    const ctx = helper.run(({ $ }) => {
      const headline = $(".about-headline")[0];
      const paragraphs = $(".about-paragraph");
      const highlights = $(".about-highlight");

      gsap.fromTo(headline,
        { opacity: 0, y: 40 },
        { scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" }, opacity: 1, y: 0, duration: 0.8 },
      );

      gsap.fromTo(paragraphs,
        { opacity: 0, y: 30 },
        { scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" }, opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
      );

      gsap.fromTo(highlights,
        { opacity: 0, x: -20 },
        { scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" }, opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="border-t border-border/60 bg-surface/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-label">About</p>
            <h2 className="about-headline mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">
              {siteConfig.about.headline}
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              {siteConfig.about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="about-paragraph"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-border/80 bg-surface-elevated p-8">
              <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold">
                Why clients work with me
              </h3>
              <ul className="mt-6 space-y-4">
                {siteConfig.about.highlights.map((item) => (
                  <li
                    key={item}
                    className="about-highlight flex items-start gap-3 text-sm text-muted"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-cta py-3 text-sm font-semibold text-white transition-all hover:bg-cta-hover hover:shadow-[0_0_24px_color-mix(in_srgb,var(--cta)_30%,transparent)]"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
