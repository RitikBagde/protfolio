"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects, type Project } from "@/config/site";
import { CardStack, useCardStack } from "@/components/animata/card/card-stack";

export function Projects() {
  const router = useRouter();

  return (
    <section
      id="projects"
      className="border-t border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-label">Selected Work</p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">
            Projects that prove I can deliver
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Real applications across AI, full-stack web, data analytics, and
            automation — the same skills I bring to client projects.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <CardStack
            items={projects}
            depth={4}
            autoplay
            autoplayInterval={4500}
          >
            <CardStack.Viewport className="w-full max-w-md mx-auto h-[360px] sm:h-[400px]">
              <CardStack.List>
                {(item, index) => {
                  const project = item as unknown as Project;
                  return (
                    <CardStack.Card
                      key={project.id}
                      className="cursor-pointer"
                    >
                      <CardContent
                        project={project}
                        index={index}
                        router={router}
                      />
                    </CardStack.Card>
                  );
                }}
              </CardStack.List>
            </CardStack.Viewport>
          </CardStack>
        </div>
      </div>
    </section>
  );
}

function CardContent({
  project,
  index,
  router,
}: {
  project: Project;
  index: number;
  router: ReturnType<typeof useRouter>;
}) {
  const { advance } = useCardStack();

  const handleNavigate = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    } else {
      router.push(`/projects/${project.slug}`);
    }
  };

  return (
    <div
      className="h-full overflow-hidden rounded-2xl border-2 border-foreground/20 bg-surface-elevated p-5 sm:p-7 flex flex-col"
      onClick={advance}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl">{project.emoji}</span>
          <span className="font-[family-name:var(--font-syne)] text-lg font-bold text-border/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <h3 className="mt-4 font-[family-name:var(--font-syne)] text-xl font-semibold leading-snug">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="rounded-md bg-accent-muted px-2 py-0.5 text-xs font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={handleNavigate}
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-cta self-start"
      >
        {project.link ? "Visit Site" : "View Details"}
        {project.link ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
      </button>
    </div>
  );
}
