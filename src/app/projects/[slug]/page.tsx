import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle, Layers, Target, Lightbulb } from "lucide-react";
import { projects } from "@/config/site";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Not Found" };
    return {
      title: `${project.title} — Ritik`,
      description: project.description,
    };
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent mb-10"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {project.image && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-border/80">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {!project.image && (
          <div className="mb-10 flex items-center justify-center h-64 rounded-2xl border border-border/80 bg-gradient-to-br from-surface-elevated to-surface">
            <span className="text-7xl">{project.emoji}</span>
          </div>
        )}

        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl sm:text-5xl">{project.emoji}</span>
          <div>
            <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl font-bold tracking-tight">
              {project.title}
            </h1>
            {project.featured && (
              <span className="mt-1 inline-block rounded-full bg-accent-muted px-3 py-0.5 text-xs font-medium text-accent">
                Featured Project
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-accent-muted px-3 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-cta px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-cta-hover hover:shadow-[0_0_24px_color-mix(in_srgb,var(--cta)_30%,transparent)] mb-10"
          >
            Visit Live Site
            <ExternalLink size={16} />
          </a>
        )}

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Target size={20} className="text-accent" />
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold">
                Overview
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted">
              {project.longDescription}
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-surface-elevated p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle size={20} className="text-accent" />
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold">
                Key Features
              </h2>
            </div>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/80 bg-surface-elevated p-6">
              <div className="flex items-center gap-2 mb-4">
                <Layers size={20} className="text-accent" />
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold">
                  Tech Stack
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border/80 bg-surface-elevated p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb size={20} className="text-accent" />
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold">
                  Type
                </h3>
              </div>
              <p className="text-sm text-muted">
                {project.featured
                  ? "Client-facing production application"
                  : "Personal project / Research"}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-cta transition-colors"
                >
                  View Live
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
