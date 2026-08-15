import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/studio";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-y-14 px-6 py-20 md:grid-cols-4 md:px-10 md:py-28">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-serif text-[clamp(2.6rem,5vw,4.2rem)] leading-none">
              <Counter value={s.value} />
              <span className="text-[0.5em]">{s.suffix}</span>
            </p>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
