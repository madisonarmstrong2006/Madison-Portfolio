import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, intro, onRed }: { eyebrow: string; title: React.ReactNode; intro?: string; onRed?: boolean }) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-24 sm:pt-28">
      <Reveal>
        <p className={`label ${onRed ? "text-paper/70" : "text-red"}`}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="font-display mt-4 text-5xl leading-[0.98] tracking-[-0.02em] sm:text-6xl">{title}</h1>
      </Reveal>
      {intro ? (
        <Reveal delay={180}>
          <p className={`mt-5 max-w-xl text-lg leading-relaxed ${onRed ? "text-paper/85" : "text-ink-soft"}`}>{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
