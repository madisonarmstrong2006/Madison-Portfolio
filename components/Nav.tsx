"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-5 sm:px-6">
        <Link
          href="/"
          className="font-display whitespace-nowrap text-[0.8rem] uppercase tracking-[0.22em] transition-colors hover:text-red sm:text-base"
        >
          Madison Armstrong
        </Link>
        <ul className="flex items-center gap-3 sm:gap-9">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`label max-sm:text-[9px]! max-sm:tracking-[0.1em]! pb-1 transition-colors hover:text-red ${active ? "border-b border-ink text-ink" : "text-ink-soft"}`}
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
