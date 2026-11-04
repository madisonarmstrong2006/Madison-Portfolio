import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, intro, onRed, compact, section }: { section?: boolean; eyebrow: string; title: React.ReactNode; intro?: string; onRed?: boolean; compact?: boolean }) {
  const Heading = section ? "h2" : "h1";
  return (
    <div className={`mx-auto max-w-6xl px-6 ${section ? "pt-24 sm:pt-28" : compact ? "pt-24 sm:pt-28" : "pt-36 sm:pt-44"}`}>
      <Reveal>
        <p className={`label ${onRed ? "text-paper/70" : "text-red"}`}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={100}>
        <Heading className={`font-display leading-[0.98] tracking-[-0.02em] ${compact ? "mt-4 text-5xl sm:text-6xl" : "mt-6 text-6xl sm:text-8xl"}`}>{title}</Heading>
      </Reveal>
      {intro ? (
        <Reveal delay={180}>
          <p className={`${compact ? "mt-5" : "mt-8"} max-w-xl text-lg leading-relaxed ${onRed ? "text-paper/85" : "text-ink-soft"}`}>{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
