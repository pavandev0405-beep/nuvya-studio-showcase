import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/studio";

export function Process() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeading
          eyebrow="How We Work"
          title="A Thoughtful Process."
          subtitle="Five stages, clearly defined, with no ambiguity about what happens next."
        />

        <ol className="mt-16 md:mt-24">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.05}>
              <div className="hairline grid gap-4 py-10 md:grid-cols-[7rem_1fr_1.2fr] md:items-baseline md:gap-10 md:py-12">
                <span className="font-serif text-3xl text-clay md:text-4xl">
                  {step.number}
                </span>
                <h3 className="text-3xl md:text-4xl">{step.title}</h3>
                <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
