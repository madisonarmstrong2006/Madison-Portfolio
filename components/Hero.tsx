import Image from "next/image";
import Reveal from "./Reveal";

/*
 * Everything in the hero is sized from one unit, --f (the name's font size), so the
 * name, the photo and the paragraph always keep the same proportions at any window size.
 */
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-8 pt-20 sm:px-10">
      <div className="relative mx-auto w-full max-w-[100rem] [--f:min(9vw,8.5vh)] sm:[--f:min(9.4vw,10vh)]">
        <Reveal delay={100} className="relative z-10">
          <h1
            className="font-wide font-black uppercase pb-[3em] pt-[2.7em] leading-[1.05] tracking-[0.01em]"
            style={{ fontSize: "var(--f)", fontStretch: "125%", fontVariationSettings: '"wdth" 125' }}
          >
            <span className="relative block w-fit text-ink">
              Madison
              {/* Photo starts right where the N ends, rising above and falling below the name. */}
              <Image
                src="/images/madison-hero.png"
                alt="Cutout photo of Madison Armstrong walking away in a fringe jacket and flared jeans"
                width={871}
                height={1600}
                priority
                className="pointer-events-none absolute left-[calc(100%+0.25em-1.09em)] top-1/2 -z-10 h-[7.7em] w-auto max-w-none -translate-y-[42%]"
              />
            </span>
            <span className="block text-red">Armstrong</span>
          </h1>
        </Reveal>
        <Reveal
          delay={240}
          className="mt-2 sm:absolute sm:bottom-0 sm:left-0 sm:mt-0 sm:w-[calc(var(--f)*5.2)]"
        >
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            Creative, passionate, and driven. Building a career where
            creativity and strategy come together to shape compelling fashion,
            beauty, and consumer brands that connect with audiences.
          </p>
        </Reveal>
      </div>
      <p className="absolute bottom-6 right-6 hidden label text-grey md:block">Portfolio &middot; 2026</p>
    </section>
  );
}
