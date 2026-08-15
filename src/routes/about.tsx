import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SiteLayout } from "@/components/SiteLayout";
import { About } from "@/sections/About";
import { CtaBanner } from "@/sections/CtaBanner";
import { Process } from "@/sections/Process";
import { Stats } from "@/sections/Stats";

const title = "About the Studio — Nuvya Interiors";
const description =
  "Three interior designers who believe a home should reflect the people living in it. Meet the studio behind Nuvya Interiors.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="A small studio, deliberately."
        intro="We take on a limited number of homes each year so that each one gets the attention it deserves."
      />
      <About />
      <Stats />
      <Process />
      <CtaBanner />
    </SiteLayout>
  );
}
