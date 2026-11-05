import Reveal from "./Reveal";

export default function Contact({ section, onRed }: { section?: boolean; onRed?: boolean }) {
  const Heading = section ? "h2" : "h1";
  return (
    <section id="contact" className={`min-h-[80vh] ${onRed ? "bg-red" : "bg-ink"} px-6 pb-28 pt-36 text-paper sm:pb-36 sm:pt-44 scroll-mt-0`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className={`label ${onRed ? "text-paper/70" : "text-red-bright"}`}>Contact</p>
          <Heading className="font-display mt-6 text-[2.625rem] leading-[0.98] tracking-[-0.02em] sm:text-[3.28rem]">Say hello</Heading>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-display mt-12 max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl">
            Excited to bring a fresh, creative perspective to the teams and
            brands I work with. <span className={`italic ${onRed ? "text-paper/75" : "text-red-bright"}`}>Let&rsquo;s connect.</span>
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:mearmstrong2006@gmail.com"
              className={`label border px-6 py-4 transition-colors ${onRed ? "border-paper/40 hover:border-paper hover:bg-paper hover:text-red" : "border-paper/30 hover:border-red-bright hover:bg-red-bright hover:text-paper"}`}
            >
              mearmstrong2006@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/madison-armstrongsf"
              target="_blank"
              rel="noopener noreferrer"
              className={`label border px-6 py-4 transition-colors ${onRed ? "border-paper/40 hover:border-paper hover:bg-paper hover:text-red" : "border-paper/30 hover:border-red-bright hover:bg-red-bright hover:text-paper"}`}
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
