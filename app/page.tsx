import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import FeaturedCard from "@/components/FeaturedCard";
import WorkCard from "@/components/WorkCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Highlights</h2>
              <Link href="/work" className="label text-ink-soft hover:text-red transition-colors">
                All work &rarr;
              </Link>
            </div>
          </Reveal>
          <Reveal className="mt-14">
            <FeaturedCard />
          </Reveal>
          <div className="mt-20 grid gap-14 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
            {projects
              .filter((p) => p.slug !== "reflora" && p.slug !== "digital-product-passport")
              .map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <WorkCard href={`/work/${p.slug}`} {...p} image={p.coverImage ?? p.image} />
                </Reveal>
              ))}
          </div>
        </div>
      </section>
      <section className="bg-cream px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="font-display text-3xl leading-snug tracking-tight sm:text-4xl">
              Merchandise Assistant to the Team USA and LA28 Olympic Merchandise
              Director. Parsons Fashion Business Essentials.{" "}
              <span className="italic text-red">Creativity and strategy, together.</span>
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end" delay={120}>
            <Link href="/about" className="label border border-ink/30 px-6 py-4 transition-colors hover:border-red hover:bg-red hover:text-paper">
              About Madison
            </Link>
            <Link href="/contact" className="label border border-ink/30 px-6 py-4 transition-colors hover:border-red hover:bg-red hover:text-paper">
              Contact
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
