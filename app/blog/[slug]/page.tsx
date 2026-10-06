import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Mdx from "@/components/Mdx";
import { formatDate, getPost, getPosts } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const { title, summary, publishedAt } = post.meta;
  return {
    title,
    description: summary,
    openGraph: { title, description: summary, type: "article", publishedTime: publishedAt },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { meta } = post;

  return (
    <article className="px-6 pb-28 pt-32 sm:pb-36 sm:pt-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="label text-grey">
            <Link href="/blog" className="hover:text-red transition-colors">Blog</Link>
            <span className="mx-3 text-ink/30">/</span>
            <span className="text-red">{meta.category}</span>
          </p>
        </Reveal>

        <div className="mt-10 border-t border-ink/15 pt-14">
          <Reveal>
            <h1 className="font-display max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-6xl">{meta.title}</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">{meta.summary}</p>
            <p className="label mt-8 text-grey">
              <time dateTime={meta.publishedAt}>{formatDate(meta.publishedAt)}</time>
              <span className="mx-3 text-ink/30">&middot;</span>
              Madison Armstrong
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="img-frame relative mt-14 aspect-[3/2] overflow-hidden bg-cream">
            <Image
              src={meta.image}
              alt={meta.imageAlt}
              fill
              priority
              sizes="(min-width: 896px) 848px, 100vw"
              style={meta.imagePosition ? { objectPosition: meta.imagePosition } : undefined}
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="prose mt-16 max-w-2xl">
          <Mdx source={post.content} />
        </div>

        <div className="mt-20 border-t border-ink/15 pt-8">
          <Link href="/blog" className="label group inline-flex items-center gap-2 text-ink hover:text-red transition-colors">
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
            All posts
          </Link>
        </div>
      </div>
    </article>
  );
}
