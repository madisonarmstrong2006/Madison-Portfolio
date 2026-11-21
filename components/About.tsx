import Image from "next/image";
import Reveal from "./Reveal";

const paragraphs = [
  "I'm a student at the University of Colorado Boulder studying Communication, Media, Design, and Information, with a minor in Media Studies. My interests center on the intersection of creativity and business, particularly how brands use storytelling, visual expression, and strategy to connect with their audiences.",
  "Through experience in merchandising, styling, brand development, and retail, I've built a foundation in creative direction, marketing strategy, and customer engagement. I approach my work with curiosity, a collaborative mindset, and a focus on turning ideas into well-considered concepts. Outside of work, I'm drawn to photography, travel, playing guitar, and time with family and friends.",
];

export default function About({ onRed, photo, header }: { onRed?: boolean; photo?: boolean; header?: React.ReactNode }) {
  return (
    <section className={`px-6 pb-16 ${header ? "pt-24 sm:pb-20 sm:pt-28" : "pt-6 sm:pb-20 sm:pt-8"}`}>
      <div className={`mx-auto max-w-6xl ${photo ? "grid gap-8 sm:grid-cols-[minmax(0,1fr)_clamp(10rem,32vw,26rem)] sm:items-stretch sm:gap-10 lg:gap-16" : ""}`}>
        <div className="max-w-3xl">
          {header}
          <div className={`space-y-7 ${header ? "mt-6 sm:mt-8" : ""}`}>
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p
                className={`text-lg leading-relaxed ${onRed ? "text-paper/85" : "text-ink-soft"}`}
              >
                {p}
              </p>
            </Reveal>
          ))}
          </div>
        </div>
        {photo && (
          <Reveal delay={200} className="mx-auto w-full max-w-sm sm:relative sm:mx-0 sm:max-w-none">
            <div className="relative w-full sm:absolute sm:inset-0">
              <Image
                src="/images/madison-polaroid-clean.png"
                alt="Instant-film style photo of Madison Armstrong in black and white on a red background, in white sunglasses with a leather tote"
                width={1508}
                height={2381}
                className="h-auto w-full sm:h-full sm:object-contain sm:object-left"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
