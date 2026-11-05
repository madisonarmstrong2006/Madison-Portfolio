import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-10 pt-28">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-start">
        <div className="relative">
          <Reveal delay={100} className="relative z-10">
            <h1
              className="font-wide font-black uppercase leading-[1.05] tracking-[0.01em] text-[7vw] sm:text-[min(6.6vw,13vh)] lg:text-[min(6.25rem,13vh)]"
              style={{ fontStretch: "125%", fontVariationSettings: '"wdth" 125' }}
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
                  className="pointer-events-none absolute left-[calc(100%+0.25em-var(--ih)*0.1414)] top-1/2 -z-10 h-[var(--ih)] w-auto max-w-none -translate-y-[42%] [--ih:36svh] sm:[--ih:min(68svh,40rem)]"
                />
              </span>
              <span className="block text-red">Armstrong</span>
            </h1>
          </Reveal>
        </div>
      </div>
      <Reveal delay={240}>
        <p className="mx-auto mt-10 max-w-6xl text-base leading-relaxed text-ink-soft sm:text-lg">
          <span className="block max-w-md">
            Creative, passionate, and driven. Building a career where
            creativity and strategy come together to shape compelling fashion,
            beauty, and consumer brands that connect with audiences.
          </span>
        </p>
      </Reveal>
      <p className="absolute bottom-6 right-6 hidden label text-grey md:block">Portfolio &middot; 2026</p>
    </section>
  );
}
