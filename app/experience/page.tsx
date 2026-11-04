import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Madison Armstrong's work experience and education in fashion merchandising, editorial, styling, and buying.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title={<>Work &amp; <span className="italic text-ink/70">education</span></>}
        intro="Supporting merchandise strategy for Team USA and the LA28 Olympic Merchandise Director, completing the Parsons Fashion Business Essentials course, and driving sales and client engagement for leading retail brands. These hands-on roles have given me a comprehensive understanding of what connects products to consumers, blending creative direction with retail analytics."
      />
      <Experience />
    </>
  );
}
