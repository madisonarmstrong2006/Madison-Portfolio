import type { Metadata } from "next";
import Capstone from "@/components/Capstone";

export const metadata: Metadata = {
  title: "Mischief Maison Studio",
  description: "A sustainable womenswear brand concept built end to end as Madison Armstrong's Parsons Fashion Business Essentials capstone.",
};

export default function MischiefMaisonPage() {
  return <Capstone />;
}
