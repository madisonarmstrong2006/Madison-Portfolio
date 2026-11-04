import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col px-6 pb-10 pt-28 sm:pt-32">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between gap-10">
        <Reveal>
          <p className="label text-red">Merchandising &middot; Editorial &middot; Styling &middot; Buying</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="font-display flex items-end gap-[0.14em] text-[13.5vw] leading-[0.95] tracking-[-0.02em] sm:text-[min(11vw,17vh)] lg:text-[min(9.5rem,17vh)]">
            <Image
              src="/images/madison-outline.png"
              alt="Cutout photo of Madison Armstrong looking over her shoulder with a leather tote bag"
              width={489}
              height={1400}
              priority
              className="h-[2.7em] w-auto shrink-0"
            />
            <h1>
              Madison
              <br />
              <span className="italic text-red">Armstrong</span>
            </h1>
          </div>
        </Reveal>
        <div className="flex flex-col gap-8 border-t border-ink/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
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
              href="/projects"
              className="label group inline-flex items-center gap-3 text-ink hover:text-red transition-colors"
            >
              View the projects
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </div>
            <p className="absolute bottom-6 right-6 hidden label text-grey md:block">Portfolio &middot; 2026</p>
    </section>
  );
}
