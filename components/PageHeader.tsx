import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, intro, onRed, compact }: { eyebrow: string; title: React.ReactNode; intro?: string; onRed?: boolean; compact?: boolean }) {
  return (
    <div className={`mx-auto max-w-6xl px-6 ${compact ? "pt-24 sm:pt-28" : "pt-36 sm:pt-44"}`}>
      <Reveal>
        <p className={`label ${onRed ? "text-ink/70" : "text-ink/60"}`}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={100}>
        <h1 className={`display-caps leading-[0.98] ${compact ? "mt-4 text-4xl sm:text-5xl" : "mt-6 text-[clamp(2.75rem,8vw,6.5rem)]"}`}>{title}</h1>
      </Reveal>
      {intro ? (
        <Reveal delay={180}>
          <p className={`${compact ? "mt-5" : "mt-8"} max-w-xl text-lg leading-relaxed ${onRed ? "text-ink/85" : "text-ink-soft"}`}>{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
