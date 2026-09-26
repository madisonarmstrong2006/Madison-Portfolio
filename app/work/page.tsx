import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import FeaturedCard from "@/components/FeaturedCard";
import WorkCard from "@/components/WorkCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies and projects by Madison Armstrong: Mischief Maison Studio, Reflora, a Digital Product Passport proposal, a Chanel brand timeline, and a lookbook.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title={<>Selected <span className="italic text-red">work</span></>}
        intro="Brand building, customer research, retail technology, brand history, and styling."
      />
      <section className="px-6 pb-28 pt-16 sm:pb-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <FeaturedCard />
          </Reveal>
          <div className="mt-20 grid gap-14 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 100}>
                <WorkCard href={`/work/${p.slug}`} {...p} image={p.coverImage ?? p.image} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
