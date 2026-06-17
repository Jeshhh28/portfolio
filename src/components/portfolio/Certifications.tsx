import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CERTS = [
  {
    title: "OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    detail: "Foundations of generative AI, large language models, prompt engineering and OCI AI services.",
  },
  {
    title: "OCI 2025 Certified Data Science Professional",
    issuer: "Oracle",
    detail: "End-to-end data science workflows, model building and deployment on Oracle Cloud Infrastructure.",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford",
    detail: "Supervised & unsupervised learning, neural networks and best practices in applied ML.",
  },
  {
    title: "DevOps, Agile & Design Thinking",
    issuer: "IBM",
    detail: "Modern software delivery, agile methodologies and human-centered design principles.",
  },
];

export function Certifications() {
  return (
    <section className="px-6 py-28 md:px-12 md:py-40 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="06" title="CERTIFICATIONS" />

        <div className="grid gap-px sm:grid-cols-2">
          {CERTS.map((c, idx) => (
            <Reveal key={c.title} delay={idx % 2}>
              <div className="group h-full border border-border bg-surface p-8 transition-colors duration-300 hover:border-primary/50 md:p-10">
                <p className="text-eyebrow">{c.issuer}</p>
                <h3 className="mt-4 font-display text-xl font-600 leading-snug tracking-tightest md:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-4 max-h-0 overflow-hidden text-base leading-relaxed text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  {c.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
