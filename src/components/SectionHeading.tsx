import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <p className="eyebrow mb-6">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.06]">{title}</h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
