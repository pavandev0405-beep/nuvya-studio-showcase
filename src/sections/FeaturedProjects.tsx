import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ActionLink } from "@/components/ui/action";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="work" className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          subtitle="A collection of homes shaped by thoughtful design."
        />
        <Reveal delay={0.1}>
          <ActionLink to="/work" variant="quiet" size="bare" className="link-underline">
            View All Projects →
          </ActionLink>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-x-10 gap-y-20 md:mt-24 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            className={i % 2 === 1 ? "md:mt-28" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
