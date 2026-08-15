import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteLayout } from "@/components/SiteLayout";
import { projects } from "@/data/projects";
import { CtaBanner } from "@/sections/CtaBanner";

const title = "Our Work — Apartment Interiors by Nuvya";
const description =
  "Selected apartment interior projects by Nuvya Interiors: warm minimalism, organic modern and quiet luxury homes across India.";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Portfolio"
        title="A collection of homes shaped by thoughtful design."
        intro="Every project below was designed, detailed and delivered by the three of us."
      />
      <div className="mx-auto max-w-[1500px] px-6 pb-24 md:px-10 md:pb-36">
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={i}
              className={i % 2 === 1 ? "md:mt-28" : undefined}
            />
          ))}
        </div>
      </div>
      <CtaBanner />
    </SiteLayout>
  );
}
