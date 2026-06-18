import { motion } from "motion/react";
import { NeuralViz } from "./NeuralViz";
import resumeAsset from "@/assets/Jeswanth_G_Resume.pdf.asset.json";

export function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 md:px-12 lg:px-20">
      {/* Right-side viz */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-70 lg:block">
        <NeuralViz />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-800 leading-[0.92] tracking-tightest text-[clamp(3.5rem,12vw,9rem)]"
        >
          JESWANTH G
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Aspiring Data Scientist with strong analytical and problem-solving
          skills, passionate about extracting insights from complex datasets and
          building intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center gap-8"
        >
          <button
            onClick={() => go("projects")}
            className="link-underline font-display text-sm font-600 tracking-[0.18em] text-foreground"
          >
            VIEW PROJECTS
          </button>
          <a
            href={resumeAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            download="Jeswanth_G_Resume.pdf"
            className="link-underline font-display text-sm font-600 tracking-[0.18em] text-muted-foreground"
          >
            DOWNLOAD RESUME
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-eyebrow"
      >
        Scroll
      </motion.div>
    </section>
  );
}
