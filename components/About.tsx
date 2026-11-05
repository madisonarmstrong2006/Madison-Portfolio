import Reveal from "./Reveal";

const paragraphs = [
  "I'm a student at the University of Colorado Boulder, studying Communication, Media, Design, and Information with a minor in Media Studies. I'm passionate about the intersection of creativity and business, with a particular interest in how brands use storytelling, visual expression, and thoughtful strategy to connect with their audiences.",
  "My professional experience includes working as a personal intern to a merchandiser on the Staples Olympic Team, contributing to styling and marketing for ROAM Boulder Magazine, completing the Parsons Fashion Business Essentials course, and gaining experience in retail sales. Through these experiences, I've developed skills in merchandising, product sourcing and pricing, brand development, creative direction, marketing strategy, styling, and customer engagement.",
  "I bring a creative and strategic perspective to my work, with an ability to learn quickly, collaborate with others, and approach new challenges with curiosity. I enjoy turning ideas into thoughtful concepts, whether through visual storytelling, brand development, marketing initiatives, or product strategy.",
  "Outside of work, I enjoy photography, traveling, playing guitar, and planning activities that bring my family and friends together.",
];

export default function About({ onRed }: { onRed?: boolean }) {
  return (
    <section className="pb-28 pt-16 sm:pb-36 sm:pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-7">
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
    </section>
  );
}
