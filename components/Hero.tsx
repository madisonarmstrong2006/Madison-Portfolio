import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col px-6 pb-10 pt-28">
      <div className="mx-auto flex w-full max-w-6xl flex-1 items-end gap-5 sm:gap-10 lg:gap-14">
        <Reveal className="shrink-0">
          <Image
            src="/images/madison-outline.png"
            alt="Cutout photo of Madison Armstrong looking over her shoulder with a leather tote bag"
            width={489}
            height={1400}
            priority
            className="h-[calc(100svh-9.5rem)] min-h-[26rem] w-auto"
          />
        </Reveal>
        <div className="flex min-w-0 flex-col gap-8 sm:gap-10">
          <Reveal delay={120}>
            <h1 className="font-display text-[12vw] leading-[0.95] tracking-[-0.02em] sm:text-[min(10.5vw,18vh)] lg:text-[min(11rem,18vh)]">
              Madison
              <br />
              <span className="italic text-red">Armstrong</span>
            </h1>
          </Reveal>
          <div className="flex flex-col gap-6 border-t border-ink/15 pt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <Reveal delay={240}>
              <p className="max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
                Creative, passionate, and driven. Building a career where
                creativity and strategy come together to shape compelling
                fashion, beauty, and consumer brands that connect with
                audiences.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <p className="absolute bottom-6 right-6 hidden label text-grey md:block">Portfolio &middot; 2026</p>
    </section>
  );
}
