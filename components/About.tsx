import Reveal from "./Reveal";

const sections = [
  {
    title: "Parsons Fashion Business Essentials",
    body: "Through the Parsons Fashion Business Essentials course, I developed a capstone project centered around creating my own unique fashion brand. The project gave me the opportunity to explore the full process of developing a fashion brand, from creative direction and brand identity to market research, data analysis, strategy, sourcing, production, and logistics. It strengthened my ability to think both creatively and analytically.",
  },
  {
    title: "Photography & Visual Storytelling",
    body: "Photography has been a long-standing interest of mine and has strengthened my appreciation for visual storytelling. I am fascinated by the way composition, styling, lighting, and imagery can transform how a product or brand is perceived, and it complements my passion for fashion editorial and visual presentation.",
  },
  {
    title: "Curiosity & Perspective",
    body: "I am an adventurous and curious person who is always looking for new experiences and opportunities to learn. I enjoy being pushed outside of my comfort zone because it challenges me to think critically, adapt to new situations, and approach problems from different perspectives.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 pb-28 pt-20 sm:pb-36 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline gap-6">
            <span className="label text-red">01</span>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Bio</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-2xl leading-snug tracking-tight text-ink sm:text-[1.7rem]">
              Pursuing dynamic roles across the fashion, beauty, and lifestyle
              industries with particular interests in merchandising, buying,
              editorial work, and brand strategy.
            </p>
            <p className="mt-6 leading-relaxed text-ink-soft">
              My experience includes supporting merchandise strategy for Team
              USA and the LA28 Olympic Merchandise Director, completing the
              Parsons Fashion Business Essentials course, and driving sales
              and client engagement for leading retail brands. These
              hands-on roles have given me a comprehensive understanding of
              what connects products to consumers, blending creative
              direction with retail analytics.
            </p>
          </Reveal>
          <div className="lg:col-span-7">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="border-t border-ink/15 py-8 first:pt-0 first:border-t-0">
                  <h3 className="label text-red">{s.title}</h3>
                  <p className="mt-4 leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
