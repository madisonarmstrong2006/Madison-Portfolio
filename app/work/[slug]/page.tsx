import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ProjectNav from "@/components/ProjectNav";
import { projects } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <article className="px-6 pb-28 pt-32 sm:pb-36 sm:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="label text-grey">
            <Link href="/work" className="hover:text-red transition-colors">Work</Link>
            <span className="mx-3 text-ink/30">/</span>
            <span className="text-red">{p.tag}</span>
          </p>
        </Reveal>
        <div className={`mt-10 grid gap-12 border-t border-ink/15 pt-14 ${p.wide ? "" : "lg:grid-cols-12"}`}>
          <div className={p.wide ? "" : "lg:col-span-6"}>
            <Reveal>
              <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">{p.title}</h1>
            </Reveal>
            <Reveal delay={100}>
              <dl className="mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-6">
                <div><dt className="label text-grey">Project</dt><dd className="mt-2 text-sm leading-relaxed">{p.tag}</dd></div>
                <div><dt className="label text-grey">Date</dt><dd className="mt-2 text-sm leading-relaxed">{p.date}</dd></div>
              </dl>
            </Reveal>
            <div className="mt-10 max-w-prose space-y-5">
              {p.body.map((para, i) => (
                <Reveal key={i} delay={160 + i * 80}>
                  <p className="text-lg leading-relaxed text-ink-soft">{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className={p.wide ? "" : "lg:col-span-6"}>
            <Reveal delay={120}>
              <div className="img-frame overflow-hidden bg-cream">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  width={p.image.width}
                  height={p.image.height}
                  priority
                  sizes={p.wide ? "(min-width: 1152px) 1104px, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            {p.extraImage ? (
              <Reveal delay={200}>
                <div className="img-frame mt-6 max-w-xs overflow-hidden bg-cream">
                  <Image
                    src={p.extraImage.src}
                    alt={p.extraImage.alt}
                    width={p.extraImage.width}
                    height={p.extraImage.height}
                    sizes="320px"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </Reveal>
            ) : null}
            {p.gallery?.map((img, i) => (
              <Reveal key={img.src} delay={200 + i * 80}>
                <div className="img-frame mt-6 overflow-hidden bg-cream">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes={p.wide ? "(min-width: 1152px) 1104px, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <ProjectNav slug={p.slug} />
      </div>
    </article>
  );
}
