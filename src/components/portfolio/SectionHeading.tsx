import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  title,
  className = "",
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`mb-16 flex items-end justify-between gap-6 ${className}`}>
      <Reveal>
        <h2 className="font-display font-700 leading-[0.9] tracking-tightest text-[clamp(2.75rem,8vw,5rem)]">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={1}>
        <span className="hidden font-display text-sm font-500 tracking-[0.2em] text-muted-foreground md:block">
          [ {index} ]
        </span>
      </Reveal>
    </div>
  );
}
