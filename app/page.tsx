import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import FeaturedCard from "@/components/FeaturedCard";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Projects</h2>
              <Link href="/work" className="label text-ink-soft hover:text-red transition-colors">
                All work &rarr;
              </Link>
            </div>
          </Reveal>
          <Reveal className="mt-14">
            <FeaturedCard />
          </Reveal>
        </div>
      </section>
    </>
  );
}
