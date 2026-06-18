import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const PROJECTS = [
  {
    no: "01",
    name: "VitalVision",
    tag: "FEATURED PROJECT",
    desc: "An AI-powered healthcare monitoring platform that reads your vitals from a simple facial video. Using Computer Vision and rPPG, it estimates Heart Rate, SpO₂, stress and temperature proxies — pairing signal processing with deep learning to deliver contactless, privacy-first health assessment, automated alerts and session reporting.",
    tech: ["React", "FastAPI", "PostgreSQL", "Python", "OpenCV", "MediaPipe", "Deep Learning"],
    repo: "https://github.com/Jeshhh28/VITALVISION-final",
    heartbeat: true,
  },
  {
    no: "02",
    name: "NIOT Research Project",
    tag: "OCEAN DATA · WQI PREDICTION",
    desc: "Turning noisy ocean sensor data into clean, reliable insight. This research tackles oceanographic data gap-filling and Water Quality Index prediction with machine learning models trained on real-world datasets.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    no: "03",
    name: "Healthcare Connect",
    tag: "HEALTHCARE PLATFORM",
    desc: "A patient-first healthcare platform that brings hospital information, appointment scheduling and an intelligent chatbot assistant together into one seamless, accessible experience.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Firebase", "FastAPI"],
    repo: "https://github.com/Jeshhh28/appdev",
  },
];

function Heartbeat() {
  return (
    <svg viewBox="0 0 600 80" className="h-12 w-full" preserveAspectRatio="none">
      <path
        d="M0 40 H180 L200 40 L215 12 L235 68 L255 28 L270 40 H360 L380 40 L395 18 L415 62 L432 40 H600"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        className="hb-path"
      />
      <style>{`
        .hb-path { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: hb 3s linear infinite; }
        @keyframes hb { to { stroke-dashoffset: 0; } }
      `}</style>
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:px-12 md:py-40 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="02" title="PROJECTS" />

        <div className="space-y-px">
          {PROJECTS.map((p, idx) => {
            const flip = idx % 2 === 1;
            return (
              <Reveal key={p.no}>
                <article className="group grid gap-8 border-t border-border py-14 md:grid-cols-12 md:gap-12 md:py-20">
                  <div
                    className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-sm font-500 tracking-[0.2em] text-primary">
                        {p.no}
                      </span>
                      <span className="text-eyebrow">{p.tag}</span>
                    </div>
                    <h3 className="mt-4 font-display font-700 leading-none tracking-tightest text-[clamp(2.25rem,5vw,3.5rem)] transition-colors group-hover:text-primary">
                      {p.name}
                    </h3>
                    {p.heartbeat && (
                      <div className="mt-6 max-w-sm">
                        <Heartbeat />
                      </div>
                    )}
                  </div>
                  <div
                    className={`md:col-span-6 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}
                  >
                    <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                    <ul className="mt-8 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-border px-3 py-1 text-xs font-500 tracking-[0.06em] text-muted-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-500 tracking-[0.06em] text-primary transition-colors hover:text-foreground"
                      >
                        View Repository
                        <span aria-hidden>→</span>
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-eyebrow">OTHER PROJECTS</p>
            <a
              href="https://github.com/Jeshhh28?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-base font-500 tracking-[0.04em] text-primary transition-colors hover:text-foreground"
            >
              Explore all repositories on GitHub
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
