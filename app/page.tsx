import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedCard from "@/components/FeaturedCard";
import WorkCard from "@/components/WorkCard";
import Contact from "@/components/Contact";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      <section id="about" className="scroll-mt-14">
        <PageHeader section eyebrow="About" title="About Me" />
        <About />
      </section>

      <section id="experience" className="scroll-mt-14 bg-cream/50">
        <PageHeader
          section
          eyebrow="Experience"
          title={<>Work &amp; <span className="italic text-red">education</span></>}
          intro="Supporting merchandise strategy for Team USA and the LA28 Olympic Merchandise Director, completing the Parsons Fashion Business Essentials course, and driving sales and client engagement for leading retail brands. These hands-on roles have given me a comprehensive understanding of what connects products to consumers, blending creative direction with retail analytics."
        />
        <Experience />
      </section>

      <section id="projects" className="scroll-mt-14 bg-red text-paper">
        <div style={{ zoom: 0.875 }}>
          <PageHeader
            section
            onRed
            compact
            eyebrow="Projects"
            title={<>Selected <span className="italic text-paper/75">projects</span></>}
            intro="Brand building, customer research, retail technology, brand history, and styling."
          />
          <div className="px-6 pb-20 pt-6 sm:pb-24">
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <FeaturedCard compact />
              </Reveal>
              <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
                {projects.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 2) * 100}>
                    <WorkCard href={`/projects/${p.slug}`} {...p} onRed image={p.coverImage ?? p.image} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact section />
    </>
  );
}
