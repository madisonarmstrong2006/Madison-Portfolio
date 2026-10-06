import Image from "next/image";
import Link from "next/link";
import { formatDate, type Post } from "@/lib/blog";

/**
 * One post on the blog page. The photo leads; the date, topic, title and
 * summary sit directly on the page underneath (no box or background).
 */
export default function BlogCard({ post }: { post: Post }) {
  const { slug, meta } = post;
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="img-frame relative aspect-[4/3] overflow-hidden bg-cream">
        <Image
          src={meta.image}
          alt={meta.imageAlt}
          fill
          sizes="(min-width: 1152px) 540px, (min-width: 640px) 45vw, 100vw"
          style={meta.imagePosition ? { objectPosition: meta.imagePosition } : undefined}
          className="object-cover"
        />
      </div>
      <div className="mt-6">
        <div className="flex items-baseline justify-between gap-4">
          <span className="label text-red">{meta.category}</span>
          <time dateTime={meta.publishedAt} className="label text-grey">
            {formatDate(meta.publishedAt, "short")}
          </time>
        </div>
        <h2 className="font-display mt-3 text-2xl tracking-tight transition-colors group-hover:text-red sm:text-[1.65rem]">
          {meta.title}
        </h2>
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-soft">{meta.summary}</p>
      </div>
    </Link>
  );
}
