import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { designers } from "@/data/studio";

export function About() {
  return (
    <section id="about" className="bg-card">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-2 md:gap-24">
          <SectionHeading
            eyebrow="The Studio"
            title="Three Designers. One Shared Vision."
          />
          <Reveal delay={0.1} className="max-w-xl self-end">
            <p className="text-[0.95rem] leading-[1.9] text-muted-foreground">
              Nuvya was founded by three interior designers who believe a home should
              reflect the people living in it — not a catalogue, not a trend. We work
              exclusively on apartments, which means we know how to find generosity in
              tight plans and warmth in concrete shells.
            </p>
            <p className="mt-5 text-[0.95rem] leading-[1.9] text-muted-foreground">
              Every project is led personally by one of us, from the first
              conversation to the day you move back in.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-14 md:mt-28 md:grid-cols-3 md:gap-10">
          {designers.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.08}>
              <figure className="group">
                <div className="overflow-hidden bg-muted">
                  <img
                    src={d.image}
                    alt={`Portrait of ${d.name}, ${d.role} at Nuvya Interiors`}
                    loading="lazy"
                    width={912}
                    height={1200}
                    className="aspect-[3/4] w-full object-cover grayscale-[0.15] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                </div>
                <figcaption className="mt-6">
                  <p className="eyebrow">{d.label}</p>
                  <h3 className="mt-3 text-2xl">{d.name}</h3>
                  <p className="mt-1 text-[0.78rem] uppercase tracking-[0.18em] text-clay">
                    {d.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {d.bio}
                  </p>
                  <p className="hairline mt-5 pt-5 font-serif text-lg italic leading-snug">
                    “{d.philosophy}”
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
