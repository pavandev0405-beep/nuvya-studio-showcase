import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/studio";
import { ActionLink } from "@/components/ui/action";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const overHero = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled
          ? "border-b border-border/70 bg-background/85 py-4 backdrop-blur-xl"
          : "py-7",
      )}
    >
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className={cn(
            "font-serif text-xl tracking-[0.02em] transition-colors duration-500 md:text-2xl",
            overHero ? "text-background" : "text-foreground",
          )}
        >
          Nuvya <span className="italic">Interiors</span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "link-underline text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-500",
                  overHero ? "text-background/85 hover:text-background" : "text-foreground/70 hover:text-foreground",
                )}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{
                  className: overHero ? "text-background" : "text-foreground",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ActionLink
            to="/contact"
            size="sm"
            variant={overHero ? "ghost" : "outline"}
            className="hidden sm:inline-flex"
          >
            Start a Project
          </ActionLink>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[7px] lg:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "block h-px w-7 origin-center",
                open || !overHero ? "bg-foreground" : "bg-background",
              )}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "block h-px w-7 origin-center",
                open || !overHero ? "bg-foreground" : "bg-background",
              )}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 z-40 flex flex-col justify-center bg-background px-8 lg:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.to}
                    className="block font-serif text-[2.4rem] leading-tight text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-12">
              <ActionLink to="/contact" variant="solid" className="w-full">
                Start a Project
              </ActionLink>
              <p className="mt-8 text-xs tracking-widest text-muted-foreground uppercase">
                {site.phone}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
