import Image from "next/image";
import Link from "next/link";

export default function WorkCard({
  href,
  num,
  title,
  tag,
  date,
  summary,
  image,
  onRed,
}: {
  href: string;
  num: string;
  title: string;
  tag: string;
  date: string;
  summary: string;
  image: { src: string; alt: string };
  onRed?: boolean;
}) {
  return (
    <Link href={href} className="group block">
      <div className="img-frame overflow-hidden bg-cream">
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={1000}
          sizes="(min-width: 640px) 50vw, 100vw"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <div className="mt-6">
        <div className="flex items-baseline justify-between gap-4">
          <span className={`label ${onRed ? "text-paper/70" : "text-grey"}`}>{num}</span>
          <span className={`label ${onRed ? "text-paper/70" : "text-grey"}`}>{date}</span>
        </div>
        <h3 className={`font-display mt-3 text-2xl tracking-tight transition-colors sm:text-[1.65rem] ${onRed ? "text-paper group-hover:text-paper/70" : "group-hover:text-red"}`}>
          {title}
        </h3>
        <p className={`label mt-2 ${onRed ? "text-cream" : "text-red"}`}>{tag}</p>
        <p className={`mt-4 max-w-prose text-sm leading-relaxed ${onRed ? "text-paper/85" : "text-ink-soft"}`}>{summary}</p>
        <span className={`label mt-5 inline-flex items-center gap-2 transition-colors ${onRed ? "text-paper group-hover:text-paper/70" : "text-ink group-hover:text-red"}`}>
          View project
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
