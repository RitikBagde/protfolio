"use client";

import { FormEvent, useState, useRef, useEffect } from "react";
import { Code2, Link2, Mail, Send, Briefcase, Globe } from "lucide-react";
import { gsap, createContext } from "@/lib/gsap";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Link2 },
  { label: "GitHub", href: siteConfig.links.github, icon: Code2 },
  { label: "Freelancer", href: siteConfig.links.freelancer, icon: Briefcase },
  { label: "Upwork", href: siteConfig.links.upwork, icon: Globe },
] as const;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const helper = createContext(sectionRef.current);
    const ctx = helper.run(({ $ }) => {
      const connectItems = $(".connect-item");
      const formEl = $(".contact-form")[0];

      gsap.fromTo(connectItems,
        { opacity: 0, x: -30 },
        { scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" }, opacity: 1, x: 0, duration: 0.6, stagger: 0.1 },
      );

      gsap.fromTo(formEl,
        { opacity: 0, x: 30 },
        { scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" }, opacity: 1, x: 0, duration: 0.8 },
      );
    });

    return () => ctx.revert();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="border-t border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-label">Contact</p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build your next project
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Have an AI integration, dashboard, automation workflow, or web app
            in mind? Send a message — I typically respond within 24 hours.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Connect directly
            </h3>
            <ul className="mt-5 space-y-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === "Email" ? undefined : "_blank"}
                    rel={label === "Email" ? undefined : "noopener noreferrer"}
                    className="connect-item group flex items-center gap-3 rounded-xl border border-border/80 bg-surface-elevated px-4 py-3 text-sm font-medium text-muted transition-all hover:border-accent/30 hover:bg-surface"
                  >
                    <Icon
                      size={18}
                      className="text-muted transition-colors group-hover:text-accent"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="contact-form card-glow lg:col-span-3 rounded-2xl border border-border/80 bg-surface-elevated p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/50"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/50"
                placeholder="Describe your project, timeline, and budget range..."
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cta py-3.5 text-sm font-semibold text-white transition-all hover:bg-cta-hover hover:shadow-[0_0_32px_color-mix(in_srgb,var(--cta)_35%,transparent)] sm:w-auto sm:px-8"
            >
              Send Message
              <Send size={16} />
            </button>

            {submitted && (
              <p className="mt-4 text-sm text-accent">
                Opening your email client — if it didn&apos;t open, email me
                directly at {siteConfig.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
