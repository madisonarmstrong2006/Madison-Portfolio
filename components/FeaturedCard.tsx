import Image from "next/image";
import Link from "next/link";
import { featured } from "@/lib/projects";

export default function FeaturedCard({ compact }: { compact?: boolean }) {
  return (
    <Link href={`/projects/${featured.slug}`} className={`group grid items-center grid-cols-12 gap-4 bg-ink p-4 text-paper sm:gap-8 ${compact ? "sm:p-6 lg:gap-8" : "sm:p-10 lg:gap-10"}`}>
      <div className="img-frame overflow-hidden col-span-5">
        <Image
          src={featured.image.src}
          alt={featured.image.alt}
          width={featured.image.width}
          height={featured.image.height}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className={`aspect-[4/5] w-full object-cover object-top ${compact ? "sm:aspect-square" : ""}`}
        />
      </div>
      <div className="col-span-7 min-w-0">
        <p className="label text-paper/60">Featured case study</p>
        <h3 className={`font-display mt-3 text-xl leading-[1.05] tracking-tight sm:mt-5 sm:text-4xl ${compact ? "lg:text-5xl" : "lg:text-6xl"}`}>
          Mischief <span className="italic text-paper/60">Maison</span> Studio
        </h3>
        <p className="label mt-4 text-paper/50">{featured.tag}</p>
        <p className="mt-3 max-w-xl text-xs leading-relaxed sm:mt-6 sm:text-base text-paper/75">{featured.summary}</p>
        <span className="label mt-4 inline-flex sm:mt-8 items-center gap-2 group-hover:text-paper transition-colors">
          Read the case study
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
