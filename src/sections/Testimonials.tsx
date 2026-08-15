import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/studio";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by the People We Design For."
      />

      <div className="mt-16 md:mt-24">
        {/* Mobile: horizontal snap carousel. Desktop: editorial columns. */}
        <ul className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-16 md:overflow-visible md:px-0 md:pb-0">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={(i % 3) * 0.07}
              className="w-[82vw] shrink-0 snap-start md:w-auto"
            >
              <figure className="hairline h-full pt-8">
                <blockquote className="font-serif text-[1.45rem] leading-[1.45] md:text-[1.6rem]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 text-sm">
                  <span className="block">— {t.name}</span>
                  <span className="mt-1 block text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {t.place}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
