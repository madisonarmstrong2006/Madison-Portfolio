import Image from "next/image";
import Reveal from "./Reveal";

/*
 * --f is the name's font size and --h is the photo's height. The name scales with the
 * window width so it spans most of a wide screen; the photo is capped by the window
 * height so it never runs off the page. Everything else is derived from those two.
 */
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-8 pt-20 sm:px-10">
      <div className="relative mx-auto w-full [--f:min(9vw,8.5vh)] [--h:calc(var(--f)*7.7)] sm:[--f:min(10vw,20vh)] sm:[--h:min(calc(var(--f)*7.7),80svh)]">
        <Reveal delay={100} className="relative z-10">
          <h1
            className="font-wide font-black uppercase leading-[1.05] tracking-[0.01em]"
            style={{
              fontSize: "var(--f)",
              fontStretch: "125%",
              fontVariationSettings: '"wdth" 125',
              paddingTop: "max(0px, calc(var(--h) * 0.42 - var(--f) * 0.525))",
              paddingBottom: "max(0px, calc(var(--h) * 0.58 - var(--f) * 1.575))",
            }}
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
                className="pointer-events-none absolute left-[calc(100%+0.25em-0.1414*var(--h))] top-1/2 -z-10 h-[var(--h)] w-auto max-w-none -translate-y-[42%]"
              />
            </span>
            <span className="block text-red">Armstrong</span>
          </h1>
        </Reveal>
        <Reveal
          delay={240}
          className="mt-2 sm:absolute sm:bottom-0 sm:left-0 sm:mt-0 sm:w-[min(32rem,calc(var(--f)*6.65-0.1414*var(--h)-2rem))]"
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
