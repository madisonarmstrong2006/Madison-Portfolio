import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

function createHeading(level: 2 | 3) {
  const Heading = ({ children }: { children?: React.ReactNode }) => {
    const id = slugify(React.Children.toArray(children).join(""));
    return React.createElement(
      `h${level}`,
      { id },
      <a key="anchor" href={`#${id}`} className="anchor" aria-hidden="true" tabIndex={-1} />,
      children,
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href ?? "";
  if (href.startsWith("/")) return <Link href={href}>{props.children}</Link>;
  if (href.startsWith("#")) return <a {...props} />;
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

/** A photo inside a post: <Image src="/images/x.jpg" alt="..." width="800" height="600" caption="..." /> (sizes go in quotes) */
function PostImage({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  caption?: string;
}) {
  return (
    <figure>
      <div className="img-frame overflow-hidden bg-cream">
        <Image src={src} alt={alt} width={Number(width)} height={Number(height)} sizes="(min-width: 768px) 672px, 100vw" className="h-auto w-full" />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/** A big number with a line of explanation: <Stat value="74%">of consumers would pay more...</Stat> */
function Stat({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <div className="stat">
      <span className="stat-value">{value}</span>
      <span className="stat-text">{children}</span>
    </div>
  );
}

const components = {
  h2: createHeading(2),
  h3: createHeading(3),
  a: CustomLink,
  Image: PostImage,
  Stat,
};

export default function Mdx({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
