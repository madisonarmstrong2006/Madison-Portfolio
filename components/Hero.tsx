import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center px-6 pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="label text-red">Merchandising &middot; Editorial &middot; Styling &middot; Buying</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-display mt-8 text-[13.5vw] leading-[0.95] tracking-[-0.02em] sm:text-[11vw] lg:text-[9.5rem]">
            Madison
            <br />
            <span className="italic text-red">Armstrong</span>
          </h1>
        </Reveal>
        <div className="mt-12 flex flex-col gap-8 border-t border-ink/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal delay={240}>
            <p className="max-w-md text-lg leading-relaxed text-ink-soft">
              Creative, passionate, and driven. Building a career where
              creativity and strategy come together to shape compelling
              fashion, beauty, and consumer brands that connect with
              audiences.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <Link
              href="/work"
              className="label group inline-flex items-center gap-3 text-ink hover:text-red transition-colors"
            >
              View the work
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </div>
      <p className="absolute bottom-6 right-6 hidden label text-grey md:block">Portfolio &middot; 2026</p>
    </section>
  );
}
