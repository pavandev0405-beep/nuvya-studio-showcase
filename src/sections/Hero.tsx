import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { ActionLink } from "@/components/ui/action";

const slides = [
  { src: hero1, alt: "Warm minimalist apartment living room with oak and travertine" },
  { src: hero2, alt: "Contemporary apartment dining area with marble table" },
  { src: hero3, alt: "Serene apartment bedroom in warm neutral tones" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={slides[index].src}
          alt={slides[index].alt}
          width={1920}
          height={1200}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: 7, ease: "linear" } }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/65" />

      <div className="relative mx-auto flex h-full max-w-[1500px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-background/75"
        >
          Interior Design Studio · Hyderabad
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-[15ch] text-[clamp(2.6rem,7vw,6.2rem)] leading-[0.98] text-background"
        >
          Spaces Designed Around the Way You <span className="italic">Live.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-background/80"
        >
          Thoughtful interiors for modern homes — designed with character, comfort,
          and timeless elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <ActionLink to="/work" variant="ghost">
            Explore Our Work
          </ActionLink>
          <ActionLink
            to="/contact"
            variant="solid"
            className="bg-background text-foreground hover:bg-sand"
          >
            Start Your Project
          </ActionLink>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-6 hidden items-center gap-4 md:right-10 md:flex">
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.alt}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-px w-10 transition-colors duration-500 ${
                i === index ? "bg-background" : "bg-background/35"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-6 flex items-center gap-3 md:left-10"
      >
        <span className="block h-10 w-px bg-background/45" />
        <span className="text-[0.62rem] uppercase tracking-[0.28em] text-background/70">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
