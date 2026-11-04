import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { featured } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-oxblood px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-baseline justify-between border-t border-ink/50 pt-4">
              <span className="label text-ink">01</span>
              <span className="label text-grey">Selected work</span>
            </div>
            <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
              <h2 className="display-caps text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95]">Projects</h2>
              <Link href="/projects" className="label ulink pb-3 text-ink">
                All projects &rarr;
              </Link>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <Link href={`/projects/${featured.slug}`} className="group block">
              <div className="slow-zoom overflow-hidden bg-cream">
                <Image
                  src={featured.image.src}
                  alt={featured.image.alt}
                  width={featured.image.width}
                  height={featured.image.height}
                  sizes="(min-width: 1152px) 1152px, 100vw"
                  priority
                  className="aspect-[4/5] w-full object-cover object-top sm:aspect-[16/11]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-ink/25 pb-5">
                <span className="label text-grey">Featured case study</span>
                <span className="label text-right text-grey">Parsons Capstone &middot; Brand Concept</span>
              </div>
              <h3 className="font-display mt-8 text-[clamp(1.75rem,3.2vw,2.5rem)] leading-tight transition-colors duration-500 group-hover:text-paper">
                Mischief <span className="italic">Maison</span> Studio
              </h3>
              <p className="mt-5 max-w-[560px] leading-relaxed text-ink-soft">{featured.summary}</p>
              <span className="label ulink mt-8 inline-block text-ink">Read the case study &rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
