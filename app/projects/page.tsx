import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import FeaturedCard from "@/components/FeaturedCard";
import WorkCard from "@/components/WorkCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and projects by Madison Armstrong: Mischief Maison Studio, Reflora, a Digital Product Passport proposal, a Chanel brand timeline, and a lookbook.",
};

export default function WorkPage() {
  return (
    <div className="bg-oxblood text-ink" style={{ zoom: 0.875 }}>
      <PageHeader
        onRed
        compact
        eyebrow="Projects"
        title={<>Selected <span className="italic text-ink/70">projects</span></>}
        intro="Brand building, customer research, retail technology, brand history, and styling."
      />
      <section className="px-6 pb-20 pt-6 sm:pb-24">
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
      </section>
    </div>
  );
}
