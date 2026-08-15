import { createFileRoute } from "@tanstack/react-router";
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
      <div className="pt-24 md:pt-32">
        <Contact />
      </div>
    </SiteLayout>
  );
}
