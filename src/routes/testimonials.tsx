import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SiteLayout } from "@/components/SiteLayout";
import { CtaBanner } from "@/sections/CtaBanner";
import { Stats } from "@/sections/Stats";
import { Testimonials } from "@/sections/Testimonials";

const title = "Client Testimonials — Nuvya Interiors";
const description =
  "What homeowners in Hyderabad, Bangalore and Chennai say about working with the Nuvya Interiors studio.";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Testimonials"
        title="Loved by the People We Design For."
        intro="Six homes, six families, one consistent way of working."
      />
      <Testimonials />
      <Stats />
      <CtaBanner />
    </SiteLayout>
  );
}
