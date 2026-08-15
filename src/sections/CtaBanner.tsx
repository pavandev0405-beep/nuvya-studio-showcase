import { ActionLink } from "@/components/ui/action";
import { Reveal } from "@/components/ui/reveal";

export function CtaBanner() {
  return (
    <section className="hairline">
      <div className="mx-auto flex max-w-[1500px] flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-10 md:py-28">
        <Reveal>
          <h2 className="max-w-[16ch] text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.08]">
            Have a space in mind? Let's talk about it.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <ActionLink to="/contact" variant="solid">
            Book a Consultation
          </ActionLink>
        </Reveal>
      </div>
    </section>
  );
}
