import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const GROUPS = [
  {
    title: "Programming",
    items: ["Python", "Java", "JavaScript", "SQL", "Bash"],
  },
  {
    title: "Data Science",
    items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Generative AI", "Streamlit"],
  },
  {
    title: "Frontend",
    items: ["ReactJS", "Tailwind CSS", "Flutter", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Flask", "FastAPI", "REST APIs", "Docker", "Git"],
  },
  {
    title: "Cloud",
    items: ["AWS", "Firebase", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:px-12 md:py-40 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="04" title="SKILLS" />

        <div className="space-y-12">
          {GROUPS.map((g, idx) => (
            <Reveal key={g.title} delay={idx}>
              <div className="grid gap-6 border-t border-border pt-10 md:grid-cols-12">
                <h3 className="text-eyebrow md:col-span-3">{g.title}</h3>
                <ul className="flex flex-wrap gap-3 md:col-span-9">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-500 text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
