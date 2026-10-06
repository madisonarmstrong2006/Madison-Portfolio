"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-ink/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4">
        <Link
          href="/"
          className="font-display whitespace-nowrap text-sm tracking-tight hover:text-red transition-colors sm:text-lg"
        >
          Madison Armstrong
        </Link>
        <ul className="flex items-center gap-2.5 sm:gap-8">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`label max-sm:text-[10px]! max-sm:tracking-[0.06em]! transition-colors hover:text-red ${active ? "text-red" : "text-ink-soft"}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
