import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-10 pt-28">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center">
        <Reveal delay={100} className="relative z-10 shrink-0">
          <h1
            className="font-wide font-black uppercase leading-[1.05] tracking-[0.01em] text-[7vw] sm:text-[min(5.6vw,11vh)] lg:text-[min(5rem,11vh)]"
            style={{ fontStretch: "125%", fontVariationSettings: '"wdth" 125' }}
          >
            <span className="block text-ink">Madison</span>
            <span className="block text-red">Armstrong</span>
          </h1>
        </Reveal>
        <Reveal className="relative -ml-[40vw] shrink-0 sm:-ml-[9vw] lg:-ml-[7rem]">
          <Image
            src="/images/madison-hero.png"
            alt="Cutout photo of Madison Armstrong walking away in a fringe jacket and flared jeans"
            width={871}
            height={1600}
            priority
            className="h-[38svh] w-auto sm:h-[min(62svh,34rem)]"
          />
        </Reveal>
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
