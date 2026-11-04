import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] flex-col justify-center px-4 pb-24 pt-32 sm:px-6">
      <div className="absolute inset-y-0 right-0 hidden w-[8vw] min-w-16 bg-oxblood md:block" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl md:pr-[6vw]">
        <Reveal>
          <p className="label text-ink/60">Merchandising &middot; Editorial &middot; Styling &middot; Buying</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="display-caps mt-10 text-[clamp(3rem,10.5vw,9rem)] leading-[0.92] tracking-[0.02em]">
            Madison
            <br />
            <span className="italic text-ink/70">Armstrong</span>
          </h1>
        </Reveal>
        <div className="mt-16 flex flex-col gap-10 sm:flex-row sm:justify-end">
          <div className="max-w-[600px] sm:w-3/5">
            <Reveal delay={240}>
              <p className="font-display text-[clamp(1.35rem,2.4vw,1.85rem)] italic leading-snug text-ink">
                Creative, passionate, and driven. Building a career where
                creativity and strategy come together to shape compelling
                fashion, beauty, and consumer brands that connect with
                audiences.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <Link href="/projects" className="label ulink mt-10 inline-block text-ink">
                View the projects &rarr;
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
      <p className="label absolute bottom-8 right-[10vw] hidden text-grey md:block">Portfolio &middot; 2026</p>
    </section>
  );
}
