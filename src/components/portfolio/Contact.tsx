import { Reveal } from "./Reveal";

const DETAILS = [
  { label: "Email", value: "jeswanth28804@gmail.com", href: "mailto:jeswanth28804@gmail.com" },
  { label: "Phone", value: "+91 94427 44955", href: "tel:+919442744955" },
  { label: "Location", value: "Vellore, Tamil Nadu", href: undefined },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jeswanth-g-74612928b/" },
  { label: "GitHub", href: "https://github.com/Jeshhh28" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border px-6 py-28 md:px-12 md:py-40 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-eyebrow mb-8">[ 07 ] — Contact</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="max-w-5xl font-display font-700 leading-[0.95] tracking-tightest text-[clamp(2.5rem,8vw,6rem)]">
            LET'S BUILD SOMETHING MEANINGFUL
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-12">
          <div className="space-y-8 md:col-span-6">
            {DETAILS.map((d, idx) => (
              <Reveal key={d.label} delay={idx}>
                <div className="border-t border-border pt-5">
                  <p className="text-eyebrow mb-2">{d.label}</p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="link-underline font-display text-xl font-500 tracking-tightest md:text-2xl"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="font-display text-xl font-500 tracking-tightest md:text-2xl">
                      {d.value}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Open to internships and placement opportunities in Data Science,
                Machine Learning and AI. Reach out — I'd love to talk about
                research, building, or solving hard problems.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-8 flex flex-wrap gap-6">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-display text-sm font-600 tracking-[0.18em]"
                  >
                    {s.label.toUpperCase()}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-28 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <p className="font-display font-600 tracking-tightest text-foreground">
            JESWANTH G
          </p>
          <p>© {new Date().getFullYear()} — Designed & built with intent.</p>
        </div>
      </div>
    </section>
  );
}
