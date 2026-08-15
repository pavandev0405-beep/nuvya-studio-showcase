import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SiteLayout } from "@/components/SiteLayout";
import { CtaBanner } from "@/sections/CtaBanner";
import { Process } from "@/sections/Process";
import { Services } from "@/sections/Services";

const title = "Services — Interior Design & Turnkey Execution | Nuvya";
const description =
  "Interior design, space planning, custom furniture, material curation, lighting design and turnkey execution for apartments.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="From First Sketch to Final Detail."
        intro="Engage us for a single stage or hand us the keys — the standard of detail stays the same."
      />
      <Services />
      <Process />
      <CtaBanner />
    </SiteLayout>
  );
}
