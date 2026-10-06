import Image from "next/image";
import Link from "next/link";
import { featured } from "@/lib/projects";

export default function FeaturedCard() {
  return (
    <Link href={`/work/${featured.slug}`} className="group grid items-center gap-10 bg-ink p-6 text-paper sm:p-10 lg:grid-cols-12">
      <div className="img-frame overflow-hidden lg:col-span-5">
        <Image
          src={featured.image.src}
          alt={featured.image.alt}
          width={featured.image.width}
          height={featured.image.height}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="aspect-[4/5] w-full object-cover object-top"
        />
      </div>
      <div className="lg:col-span-7">
        <p className="label text-red-bright">Featured case study</p>
        <h3 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-6xl">
          Mischief <span className="italic text-red-bright">Maison</span> Studio
        </h3>
        <p className="label mt-4 text-paper/50">{featured.tag}</p>
        <p className="mt-6 max-w-xl leading-relaxed text-paper/75">{featured.summary}</p>
        <span className="label mt-8 inline-flex items-center gap-2 group-hover:text-red-bright transition-colors">
          Read the case study
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
