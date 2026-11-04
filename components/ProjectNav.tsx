import Link from "next/link";
import { allWork } from "@/lib/projects";

export default function ProjectNav({ slug, dark = false }: { slug: string; dark?: boolean }) {
  const i = allWork.findIndex((w) => w.slug === slug);
  const prev = allWork[(i - 1 + allWork.length) % allWork.length];
  const next = allWork[(i + 1) % allWork.length];
  const muted = dark ? "text-paper/50" : "text-grey";
  const hover = dark ? "hover:text-red-bright" : "hover:text-red";
  return (
    <nav aria-label="More projects" className={`mx-auto mt-24 grid max-w-6xl gap-8 border-t pt-10 sm:grid-cols-2 ${dark ? "border-paper/15" : "border-ink/15"}`}>
      <Link href={`/projects/${prev.slug}`} className={`group block transition-colors ${hover}`}>
        <span className={`label ${muted}`}>&larr; Previous</span>
        <span className="font-display mt-2 block text-2xl tracking-tight">{prev.title}</span>
      </Link>
      <Link href={`/projects/${next.slug}`} className={`group block transition-colors sm:text-right ${hover}`}>
        <span className={`label ${muted}`}>Next &rarr;</span>
        <span className="font-display mt-2 block text-2xl tracking-tight">{next.title}</span>
      </Link>
    </nav>
  );
}
