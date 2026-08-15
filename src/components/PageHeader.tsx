import { Reveal } from "@/components/ui/reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-[1500px] px-6 pb-6 pt-40 md:px-10 md:pb-14 md:pt-52">
      <Reveal>
        <p className="eyebrow mb-6">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="max-w-[18ch] text-[clamp(2.4rem,6vw,5rem)] leading-[1.02]">
          {title}
        </h1>
      </Reveal>
      {intro ? (
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </header>
  );
}
