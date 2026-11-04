"use client";

import { usePathname } from "next/navigation";

/** Wraps the site chrome; the home page gets the dark charcoal theme. */
export default function ThemeScope({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const dark = pathname === "/";
  return <div className={dark ? "theme-dark min-h-screen bg-paper text-ink" : undefined}>{children}</div>;
}
