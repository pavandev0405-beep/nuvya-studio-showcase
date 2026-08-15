import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SiteLayout } from "@/components/SiteLayout";
import { Contact } from "@/sections/Contact";

const title = "Start a Project — Contact Nuvya Interiors";
const description =
  "Tell us about your apartment and we'll be in touch within two working days to schedule a consultation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Let's Create a Home That Feels Like You."
        intro="Tell us a little about your space, and let's start a conversation."
      />
      <Contact />
    </SiteLayout>
  );
}
