import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description: "Madison Armstrong's background and interests in fashion merchandising, editorial, styling, and buying.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Bio" />
      <About />
    </>
  );
}
