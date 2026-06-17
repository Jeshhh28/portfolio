import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const EDU = [
  {
    school: "Vellore Institute of Technology",
    degree: "B.Tech — Computer Science & Engineering (Data Science)",
    score: "CGPA 8.35",
    period: "2023 – 2027",
  },
  {
    school: "Ida Scudder School",
    degree: "Class XII",
    score: "85%",
    period: "2023",
  },
];

export function Education() {
  return (
    <section id="education" className="px-6 py-28 md:px-12 md:py-40 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="05" title="EDUCATION" />

        <div>
          {EDU.map((e, idx) => (
            <Reveal key={e.school} delay={idx}>
              <div className="grid gap-4 border-t border-border py-12 md:grid-cols-12 md:items-baseline">
                <div className="md:col-span-7">
                  <h3 className="font-display text-3xl font-600 leading-tight tracking-tightest md:text-4xl">
                    {e.school}
                  </h3>
                  <p className="mt-3 text-lg text-muted-foreground">{e.degree}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="font-display text-2xl font-600 tracking-tightest text-primary">
                    {e.score}
                  </p>
                </div>
                <div className="text-eyebrow md:col-span-2 md:text-right">
                  {e.period}
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
