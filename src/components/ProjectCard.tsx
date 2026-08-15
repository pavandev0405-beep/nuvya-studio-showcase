import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index = 0,
  className,
}: {
  project: Project;
  index?: number;
  className?: string | undefined;
}) {
  return (
    <Reveal delay={(index % 2) * 0.08} className={className}>
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="group block"
      >
        <div className="relative overflow-hidden bg-muted">
          <img
            src={project.cover}
            alt={`${project.name} — ${project.type} in ${project.location}`}
            loading="lazy"
            width={1200}
            height={1500}
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/25" />
          <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-background/90">
              View project
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl leading-snug">{project.name}</h3>
            <p className="mt-1 text-[0.78rem] uppercase tracking-[0.18em] text-muted-foreground">
              {project.location} · {project.type}
            </p>
          </div>
          <p className="whitespace-nowrap pt-2 text-[0.7rem] uppercase tracking-[0.18em] text-clay">
            {project.style}
          </p>
        </div>
        <p className={cn("mt-3 max-w-md text-sm leading-relaxed text-muted-foreground")}>
          {project.excerpt}
        </p>
      </Link>
    </Reveal>
  );
}
