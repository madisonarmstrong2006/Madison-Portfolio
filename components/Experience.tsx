import Reveal from "./Reveal";

const work = [
  {
    role: "Merchandise Assistant",
    org: "Team USA & LA28 Olympic Merchandise Director",
    dates: "May 2026 - Present",
    detail: "Source and curate products for Olympic and Paralympic sponsors; support initial pricing with target margins and Olympic royalty requirements; develop custom-branded merchandise concepts within brand standards and Olympic licensing rules.",
  },
  {
    role: "Sales Associate",
    org: "Isalis, Women's Clothing Store",
    dates: "May 2026 - Jul 2026",
    detail: "Managed floor operations, point-of-sale, and inventory; provided personalized styling consultations that drove daily sales targets and built client loyalty.",
  },
  {
    role: "Hostess",
    org: "La Mar",
    dates: "May 2026 - Aug 2026",
    detail: "Managed reservations, seating, and front-of-house operations in a high-volume, upscale restaurant while delivering exceptional guest service.",
  },
  {
    role: "Sales Associate",
    org: "Fred Segal",
    dates: "Sep 2023 - Feb 2024",
    detail: "Joined at the store's grand opening; consistently exceeded sales goals, including top salesperson in December.",
  },
  {
    role: "Social Media & Marketing Intern",
    org: "Earthbath",
    dates: "May 2023 - Aug 2023",
    detail: "Researched the competitive landscape, analyzed the most effective platforms for brand engagement, and presented social media strategies to the leadership team.",
  },
];

const education = [
  {
    org: "University of Colorado Boulder",
    detail: "Communication, Media, Design & Information major, Media Studies minor. ROAM Boulder Magazine (Styling and Marketing), PRSSA Club Member, Delta Gamma.",
    dates: "Aug 2025 - Present",
  },
  {
    org: "Parsons School of Design, Yellowbrick",
    detail: "Fashion Business Essentials: fashion business, marketing, branding, sourcing, and production through hands-on coursework. Capstone: Mischief Maison Studio.",
    dates: "Sep 2025 - Sep 2026",
  },
  {
    org: "Miami University of Ohio",
    detail: "Emerging Business, Technology & Design. Lacrosse club team, Delta Gamma.",
    dates: "Aug 2024 - May 2025",
  },
  {
    org: "Google AI Essentials, Coursera",
    detail: "Certificate in generative AI, prompt writing, and AI-driven productivity.",
    dates: "May 2026 - Aug 2026",
  },
];

function Row({ title, org, dates, detail }: { title: string; org: string; dates: string; detail: string }) {
  return (
    <div className="grid gap-2 border-t border-ink/15 py-7 sm:grid-cols-12 sm:gap-6">
      <p className="label text-grey sm:col-span-3 sm:pt-1">{dates}</p>
      <div className="sm:col-span-9">
        <h3 className="font-display text-xl tracking-tight">
          {title ? <>{title} <span className="text-grey">&middot;</span>{" "}</> : null}
          <span className={title ? "italic" : ""}>{org}</span>
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{detail}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="border-t border-ink/50 pt-4">
            <div className="flex items-baseline justify-between"><span className="label text-ink">01</span><span className="label text-grey">Work</span></div>
            <h2 className="display-caps mt-8 text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95]">Experience</h2>
          </div>
        </Reveal>
        <div className="mt-14">
          {work.map((w, i) => (
            <Reveal key={w.role + w.org} delay={i * 60}>
              <Row title={w.role} org={w.org} dates={w.dates} detail={w.detail} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div id="education" className="mt-24 border-t border-ink/50 pt-4">
            <div className="flex items-baseline justify-between"><span className="label text-ink">02</span><span className="label text-grey">Study</span></div>
            <h2 className="display-caps mt-8 text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95]">Education</h2>
          </div>
        </Reveal>
        <div className="mt-14">
          {education.map((e, i) => (
            <Reveal key={e.org} delay={i * 60}>
              <Row title="" org={e.org} dates={e.dates} detail={e.detail} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
