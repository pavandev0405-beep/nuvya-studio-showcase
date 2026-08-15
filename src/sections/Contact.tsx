import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/studio";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Start a Project"
            title="Let's Create a Home That Feels Like You."
            subtitle="Tell us a little about your space, and let's start a conversation."
          />

          <Reveal delay={0.15}>
            <dl className="hairline mt-14 space-y-6 pt-10 text-sm">
              <div>
                <dt className="eyebrow mb-2">Phone</dt>
                <dd>
                  <a className="link-underline" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Email</dt>
                <dd>
                  <a className="link-underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Studio</dt>
                <dd className="max-w-xs leading-relaxed text-muted-foreground">
                  {site.address}
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Instagram</dt>
                <dd>
                  <a
                    className="link-underline"
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @nuvyainteriors
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 overflow-hidden bg-muted">
              <iframe
                title="Nuvya Interiors studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.38%2C17.40%2C78.44%2C17.45&layer=mapnik"
                loading="lazy"
                className="h-56 w-full grayscale"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:pt-4">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
