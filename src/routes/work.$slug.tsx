import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ActionLink } from "@/components/ui/action";
import { Reveal } from "@/components/ui/reveal";
import { getProject, projects } from "@/data/projects";
import { CtaBanner } from "@/sections/CtaBanner";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Nuvya Interiors" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.project;
    const title = `${p.name} — ${p.type}, ${p.location} | Nuvya Interiors`;
    return {
      meta: [
        { title },
        { name: "description", content: p.overview },
        { property: "og:title", content: title },
        { property: "og:description", content: p.overview },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-[1500px] px-6 py-52 md:px-10">
        <h1 className="text-5xl">This project isn't here.</h1>
        <p className="mt-5 text-sm text-muted-foreground">
          It may have moved. Browse the full portfolio instead.
        </p>
        <ActionLink to="/work" variant="outline" className="mt-10">
          View all projects
        </ActionLink>
      </div>
    </SiteLayout>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const facts = [
    { label: "Location", value: project.location },
    { label: "Area", value: project.area },
    { label: "Property Type", value: project.type },
    { label: "Design Style", value: project.style },
    { label: "Year", value: project.year },
  ];

  return (
    <SiteLayout>
      <section className="relative h-[78svh] min-h-[520px] w-full overflow-hidden">
        <img
          src={project.hero}
          alt={`${project.name} — ${project.type} in ${project.location}`}
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 to-ink/65" />
        <div className="relative mx-auto flex h-full max-w-[1500px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-20">
          <p className="eyebrow text-background/70">{project.style}</p>
          <h1 className="mt-5 max-w-[16ch] text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] text-background">
            {project.name}
          </h1>
          <p className="mt-4 text-[0.78rem] uppercase tracking-[0.2em] text-background/75">
            {project.location} · {project.type} · {project.year}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28">
        <dl className="hairline grid grid-cols-2 gap-y-8 pt-10 md:grid-cols-5">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow mb-2">{f.label}</dt>
              <dd className="text-sm">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-24">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.12]">
              Project Overview
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[0.98rem] leading-[1.95] text-muted-foreground">
              {project.overview}
            </p>
            <p className="mt-6 text-[0.98rem] leading-[1.95] text-muted-foreground">
              {project.concept}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pb-24 md:px-10 md:pb-36">
        <p className="eyebrow mb-12">Room by Room</p>
        <div className="space-y-16 md:space-y-28">
          {project.rooms.map((room, i) => (
            <Reveal key={room.name} delay={0.04}>
              <figure
                className={
                  i % 3 === 0
                    ? "w-full"
                    : i % 3 === 1
                      ? "md:ml-auto md:w-[72%]"
                      : "md:w-[72%]"
                }
              >
                <div className="group overflow-hidden bg-muted">
                  <img
                    src={room.image}
                    alt={`${room.name} — ${project.name}`}
                    loading="lazy"
                    width={1600}
                    height={1000}
                    className="w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-5 flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-2xl">{room.name}</h3>
                  <p className="max-w-md text-sm text-muted-foreground">{room.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow mb-12">Next Projects</p>
          <div className="grid gap-10 md:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="overflow-hidden bg-muted">
                  <img
                    src={p.cover}
                    alt={`${p.name} — ${p.type} in ${p.location}`}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-2xl">{p.name}</h3>
                <p className="mt-1 text-[0.75rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.location} · {p.type}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
