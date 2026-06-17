import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-primary"
    />
  );
}

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="aurora-blob-1 absolute -left-[10%] top-[5%] h-[55vw] w-[55vw] rounded-full bg-primary/20 blur-[120px]" />
      <div className="aurora-blob-2 absolute -right-[10%] bottom-[0%] h-[50vw] w-[50vw] rounded-full bg-primary/10 blur-[140px]" />
    </div>
  );
}
