import { Link } from "@tanstack/react-router";
import { navLinks, site } from "@/data/studio";

const socials = [
  { label: "Instagram", href: site.instagram },
  { label: "Pinterest", href: site.pinterest },
  { label: "LinkedIn", href: site.linkedin },
];

export function Footer() {
  return (
    <footer className="hairline bg-background">
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl">
              Nuvya <span className="italic">Interiors</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-6">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-underline text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-6">Studio</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a className="link-underline hover:text-foreground" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a className="link-underline hover:text-foreground" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li className="max-w-[16rem] leading-relaxed">{site.address}</li>
            </ul>
            <ul className="mt-6 flex gap-5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="hairline mt-16 pt-8 text-xs tracking-[0.16em] text-muted-foreground uppercase">
          © 2026 Nuvya Interiors. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
