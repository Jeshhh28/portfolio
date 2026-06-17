import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ITEMS = [
  {
    org: "Christian Medical College & Hospital",
    role: "Intern",
    year: "2025",
    desc: "Built VitalVision — an AI-powered healthcare monitoring platform using Computer Vision and rPPG to estimate Heart Rate, SpO₂, stress levels and temperature proxies from facial video. Delivered video-based health assessment, automated alerts, session reporting and privacy-focused workflows with React.js, FastAPI, PostgreSQL, MediaPipe and OpenCV.",
  },
  {
    org: "Gravitas",
    role: "Event Coordinator",
    year: "2025",
    desc: "Managed technical event coordination, participant engagement and on-ground event execution at scale.",
  },
  {
    org: "Riviera",
    role: "Event Manager",
    year: "2025",
    desc: "Led event planning, scheduling and large-scale cultural event management across multiple teams.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28 md:px-12 md:py-40 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="03" title="EXPERIENCE" />

        <div>
          {ITEMS.map((it, idx) => (
            <Reveal key={it.org} delay={idx}>
              <div className="group grid gap-4 border-t border-border py-10 md:grid-cols-12 md:gap-8 md:py-12">
                <div className="md:col-span-2">
                  <span className="font-display text-lg font-600 tracking-tightest text-primary">
                    {it.year}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl font-600 leading-tight tracking-tightest md:text-3xl">
                    {it.org}
                  </h3>
                  <p className="text-eyebrow mt-2">{it.role}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {it.desc}
                  </p>
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
