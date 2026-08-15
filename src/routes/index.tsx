import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { Hero } from "@/sections/Hero";
import { Process } from "@/sections/Process";
import { Services } from "@/sections/Services";
import { Stats } from "@/sections/Stats";
import { StudioLife } from "@/sections/StudioLife";
import { Testimonials } from "@/sections/Testimonials";

const title = "Nuvya Interiors — Apartment Interior Design Studio";
const description =
  "Nuvya Interiors is a boutique studio designing warm, functional apartment interiors in Hyderabad, Bangalore and Chennai.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <FeaturedProjects />
      <About />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <StudioLife />
      <Contact />
    </SiteLayout>
  );
}
