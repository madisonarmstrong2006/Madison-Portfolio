import fs from "node:fs";
import path from "node:path";

/**
 * Blog posts are .mdx files in app/blog/posts. Each starts with a small block
 * between two "---" lines (the same approach as Vercel's blog template):
 *
 *   ---
 *   title: 'Post title'
 *   publishedAt: '2026-09-28'
 *   summary: 'One or two sentences shown on the blog page.'
 *   category: 'Sustainability'
 *   image: '/images/some-photo.jpg'
 *   imageAlt: 'Describe the photo'
 *   imagePosition: 'center 20%'   (optional: which part of the photo stays in frame)
 *   ---
 */
export type PostMeta = {
  title: string;
  publishedAt: string;
  summary: string;
  category: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export type Post = {
  slug: string;
  meta: PostMeta;
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "app", "blog", "posts");

function parseFrontmatter(raw: string) {
  const match = /^---\s*([\s\S]*?)\s*---/.exec(raw);
  if (!match) throw new Error("A blog post is missing its --- header block");

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim().replace(/^['"](.*)['"]$/, "$1");
    meta[key] = value;
  }

  return { meta: meta as unknown as PostMeta, content: raw.slice(match[0].length).trim() };
}

export function getPosts(): Post[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => {
      const { meta, content } = parseFrontmatter(fs.readFileSync(path.join(POSTS_DIR, file), "utf-8"));
      return { slug: path.basename(file, ".mdx"), meta, content };
    })
    .sort((a, b) => (a.meta.publishedAt < b.meta.publishedAt ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export function formatDate(date: string, style: "long" | "short" = "long") {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: style === "long" ? "long" : "short",
    day: "numeric",
    year: "numeric",
  });
}
