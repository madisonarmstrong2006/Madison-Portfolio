import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="min-h-[80vh] bg-oxblood px-6 pb-28 pt-36 text-ink sm:pb-36 sm:pt-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="label text-ink/70">Contact</p>
          <h1 className="display-caps mt-6 text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95]">Say <span className="italic">hello</span></h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-display mt-12 max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl">
            Excited to bring a fresh, creative perspective to the teams and
            brands I work with. <span className="italic text-ink/70">Let&rsquo;s connect.</span>
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:mearmstrong2006@gmail.com"
              className="label border border-ink/30 px-6 py-4 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              mearmstrong2006@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/madison-armstrongsf"
              target="_blank"
              rel="noopener noreferrer"
              className="label border border-ink/30 px-6 py-4 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
