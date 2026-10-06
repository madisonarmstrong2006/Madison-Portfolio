import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import BlogCard from "@/components/BlogCard";
import { getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing by Madison Armstrong: thoughts, stories, and ideas.",
};

export default function BlogPage() {
  const posts = getPosts();
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title={<>Notes &amp; <span className="italic text-red">writing</span></>}
        intro="Thoughts, stories, and ideas from Madison Armstrong."
      />
      <section className="px-6 pb-28 pt-16 sm:pb-36">
        <div className="mx-auto max-w-6xl">
          {posts.length > 0 ? (
            <div className="grid gap-14 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 2) * 100}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <p className="label border-t border-ink/15 pt-8 text-grey">New posts coming soon</p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
