import {
  Armchair,
  KeyRound,
  Lamp,
  Layers,
  LayoutGrid,
  PenLine,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/studio";

const icons: Record<string, LucideIcon> = {
  PenLine,
  LayoutGrid,
  Armchair,
  Layers,
  Lamp,
  KeyRound,
};

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
      <SectionHeading
        eyebrow="Services"
        title="From First Sketch to Final Detail."
        subtitle="Six disciplines, one team, one continuous line of accountability."
      />

      <div className="mt-16 grid md:mt-24 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.07}>
              <article className="group hairline h-full px-0 py-10 transition-colors duration-700 md:px-8 md:py-12 lg:hover:bg-card">
                <div className="flex items-start justify-between gap-6">
                  <Icon
                    className="h-5 w-5 stroke-[1.2] text-clay transition-transform duration-700 group-hover:-translate-y-1"
                    aria-hidden
                  />
                  <span className="font-serif text-sm text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl leading-snug">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
