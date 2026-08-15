import { SectionHeading } from "@/components/SectionHeading";
import { ActionAnchor } from "@/components/ui/action";
import { Reveal } from "@/components/ui/reveal";
import { galleryImages, site } from "@/data/studio";

export function StudioLife() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Instagram" title="Life at the Studio" />
          <Reveal delay={0.1}>
            <ActionAnchor
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              variant="quiet"
              size="bare"
              className="link-underline"
            >
              Follow us on Instagram →
            </ActionAnchor>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-2 md:mt-20 md:grid-cols-3 md:gap-3">
          {galleryImages.map((img, i) => (
            <Reveal key={img.alt} delay={(i % 3) * 0.06}>
              <div className="group overflow-hidden bg-muted">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="aspect-square w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
