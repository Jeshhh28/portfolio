import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  const decimals = value % 1 !== 0 ? 2 : 0;

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 8.35, suffix: "", label: "CGPA" },
  { value: 5, suffix: "+", label: "Projects" },
  { value: 4, suffix: "+", label: "Certifications" },
  { value: 20, suffix: "+", label: "Technologies" },
];

const PARAS = [
  "I'm a B.Tech Computer Science (Data Science) student at Vellore Institute of Technology, where I focus on the intersection of rigorous research and practical engineering — turning complex datasets into intelligent, usable systems.",
  "My work spans Artificial Intelligence, Machine Learning, Computer Vision and Data Analytics. I care about clarity over complexity, and I build with a researcher's curiosity and an engineer's discipline.",
];

export function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-12 md:py-40 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="01" title="ABOUT" />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-eyebrow mb-4">Currently</p>
              <p className="font-display text-2xl font-500 leading-snug tracking-tightest md:text-3xl">
                Building intelligent systems at the intersection of research and
                engineering.
              </p>
            </Reveal>
          </div>
          <div className="space-y-6 md:col-span-6 md:col-start-7">
            {PARAS.map((p, idx) => (
              <Reveal key={idx} delay={idx + 1}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-y-12 border-t border-border pt-16 md:grid-cols-4">
          {STATS.map((s, idx) => (
            <Reveal key={s.label} delay={idx}>
              <div>
                <p className="font-display font-700 leading-none tracking-tightest text-[clamp(3rem,7vw,5.5rem)]">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-eyebrow mt-3">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
