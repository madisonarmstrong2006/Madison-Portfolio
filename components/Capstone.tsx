import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import ProjectNav from "./ProjectNav";

const model = [
  {
    title: "Reimagine",
    points: [
      "Take back pre-loved Mischief Maison garments from customers",
      "Repurpose fabrics into patchwork, panels, color blocks, and new silhouettes",
      "Reuse buttons and zippers; transform garments into accessory pieces",
      "Use fabric for detailing: bows, pockets, trims, and designs",
    ],
  },
  {
    title: "Redirect",
    points: [
      "Partner with organizations supporting women entering the workforce",
      "Provide business attire to women who lack the resources for it",
      "Lend clothing for job interviews and key moments, then return it for the next woman",
      "Second purpose: support women and create opportunities",
    ],
  },
  {
    title: "Benefit",
    points: [
      "Customers receive store credit for every pre-loved item they bring back",
      "Keeps the product line fresh, mysterious, and exclusive",
      "Contributes to a sustainable fashion industry and creates opportunities for women",
      "Builds community, customer loyalty, women's empowerment, and positive change",
    ],
  },
];

const journey = [
  {
    stage: "Awareness",
    body: "A woman is searching for outfit inspiration on Pinterest for her new job in fashion marketing. She clicks on a pin that catches her eye, then uses the shop search tool to find where the top is from. This redirects her to the Mischief Maison Studio website, where the top is for sale.",
  },
  {
    stage: "Consideration",
    body: "She starts browsing the store website and loves the timeless, classy, and fun style that resonates with her. She goes to the home page and is intrigued after reading about the sustainability and reimagine-or-redirect model.",
  },
  {
    stage: "Purchase",
    body: "She adds multiple pieces to her cart and checks out, ordering them directly through the website. She spends a good amount on just a few items because she believes they pair with pieces she already owns, and she appreciates the company's unique business model.",
  },
  {
    stage: "Retention",
    body: "She loves what she received and wears the pieces in and outside of work. She starts following the brand on Instagram, and wants to eventually bring in her old garments to support women getting into business, contribute to limited-edition pieces, and earn store credit for future shopping.",
  },
  {
    stage: "Advocacy",
    body: "She recommends the brand to coworkers and friends, telling them about the positive brand model and why they should consider investing in it. She posts images on her social media, tagging the company and captioning the posts with all the perks the brand offers.",
  },
];

const marketing = [
  { title: "Social Media", body: "Presence across Pinterest, Instagram, and TikTok, meeting the customer where she looks for inspiration." },
  { title: "Pop-ups", body: "Garments featured at pop-up shops in collaboration with philanthropic organizations for women in business." },
  { title: "Influencers", body: "Creators wear the pieces and share them, alongside stories from women who have benefited from the redirect initiatives." },
  { title: "Advertising", body: "Building traction through online content and placement in magazines and online advertisements." },
];

const forecast: [string, string, string, string][] = [
  ["Total orders", "750", "1,500", "2,750"],
  ["Average order value", "$200", "$215", "$230"],
  ["Gross revenue", "$150,000", "$322,500", "$632,500"],
  ["Cost of goods sold", "$57,000", "$122,550", "$240,350"],
  ["Gross profit", "$93,000", "$199,950", "$392,150"],
  ["Operating expenses", "$120,000", "$140,000", "$210,000"],
  ["Net profit / loss", "($27,000)", "$59,950", "$182,150"],
];

const funding = [
  { label: "Marketing", amount: "$50,000", pct: "33.3%" },
  { label: "E-Commerce & Operations", amount: "$40,000", pct: "26.7%" },
  { label: "Employees", amount: "$30,000", pct: "20%" },
  { label: "Working Capital", amount: "$30,000", pct: "20%" },
];

const mood = [
  { src: "/images/mood-1.jpg", alt: "Street style look with a fur stole and flared denim, product line inspiration" },
  { src: "/images/mood-2.jpg", alt: "Tailored neutral outfit with a headscarf, product line inspiration" },
  { src: "/images/mood-3.jpg", alt: "Fur stole over a pastel pleated gown, product line inspiration" },
  { src: "/images/mood-4.jpg", alt: "Black tee and leather trousers with a statement bag, product line inspiration" },
  { src: "/images/mood-5.jpg", alt: "Camel and mustard long coats in an editorial spread, product line inspiration" },
  { src: "/images/mood-6.jpg", alt: "Street style in a white shirt and dark denim, product line inspiration" },
  { src: "/images/mood-7.jpg", alt: "Satin column skirt with crisp shirting, product line inspiration" },
  { src: "/images/mood-8.jpg", alt: "Runway look with an open white shirt and a gold fringed hip scarf, product line inspiration" },
  { src: "/images/mood-9.jpg", alt: "Velvet patchwork looks with knit beanies, product line inspiration" },
];

export default function Capstone() {
  return (
    <section id="capstone" className="bg-ink text-paper px-6 pb-28 pt-32 sm:pb-36 sm:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="label text-paper/50">
            <Link href="/work" className="hover:text-red-bright transition-colors">Work</Link>
            <span className="mx-3 text-paper/30">/</span>
            <span className="text-red-bright">Featured case study</span>
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 border-t border-paper/15 pt-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">
              Mischief <span className="italic text-red-bright">Maison</span> Studio
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
              A sustainable womenswear brand concept built end to end as the
              capstone for the Parsons Fashion Business Essentials course:
              creative direction, brand identity, market research, strategy,
              sourcing, production, logistics, marketing, and a three-year
              financial forecast.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div><dt className="label text-paper/50">Course</dt><dd className="mt-2 text-sm leading-relaxed">Parsons Fashion Business Essentials</dd></div>
              <div><dt className="label text-paper/50">Year</dt><dd className="mt-2 text-sm leading-relaxed">2026</dd></div>
              <div><dt className="label text-paper/50">Deliverable</dt><dd className="mt-2 text-sm leading-relaxed">Complete business concept and brand plan</dd></div>
              <div><dt className="label text-paper/50">Values</dt><dd className="mt-2 text-sm leading-relaxed">Sustainability, women&rsquo;s empowerment, clothing lifecycle, creativity, timeless versatility</dd></div>
            </dl>
          </Reveal>
        </div>

        <Reveal>
          <blockquote className="font-display mt-24 max-w-3xl text-2xl leading-snug tracking-tight text-paper/90 sm:text-3xl">
            &ldquo;Our mission is to build a community of stylish women who
            support creativity, more equal opportunities for other women, and
            a more sustainable future.&rdquo;
          </blockquote>
        </Reveal>

        <div className="mt-24 grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="label text-red-bright">The problem</h2>
            <p className="mt-4 leading-relaxed text-paper/75">
              Fast fashion is taking over, creating unsustainable products and
              enormous waste. Women are seeking brands that value ethical
              products, sustainability, and timeless style rather than
              trend-based garments. At the same time, women who cannot afford
              professional attire face fewer opportunities when entering the
              workforce.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="label text-red-bright">The solution</h2>
            <p className="mt-4 leading-relaxed text-paper/75">
              Ethical, sustainable, high-quality pieces with timeless, classy
              style, from everyday wear to business and formal. A reimagine-or-
              redirect model keeps the clothing lifecycle positive: pre-loved
              garments become limited-edition pieces or support women entering
              the workforce through partner organizations.
            </p>
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <h2 className="label text-red-bright">The model</h2>
          </Reveal>
          <div className="mt-8 grid gap-px bg-paper/15 md:grid-cols-3">
            {model.map((col, i) => (
              <Reveal key={col.title} delay={i * 90} className="bg-ink">
                <div className="h-full p-8">
                  <h5 className="font-display text-2xl italic tracking-tight">{col.title}</h5>
                  <ul className="mt-5 space-y-3">
                    {col.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-paper/70">
                        <span aria-hidden="true" className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-red-bright" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-12 gap-x-4 gap-y-10 sm:gap-x-8 lg:gap-x-10">
          <Reveal className="col-span-5 row-start-1 lg:row-span-2">
            <div className="img-frame overflow-hidden">
              <Image
                src="/images/capstone-customer.jpg"
                alt="Mischief Maison Studio target customer in a grey turtleneck sweater dress and burgundy tights, effortless and timeless"
                width={516}
                height={865}
                sizes="(min-width: 1024px) 40vw, 42vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
          <div className="col-span-7 col-start-6 row-start-1 min-w-0 self-center lg:self-start">
            <Reveal>
              <h2 className="label text-red-bright">Target customer</h2>
              <p className="font-display mt-4 text-2xl leading-snug tracking-tight sm:text-3xl">
                Urban, career-driven women, mid-twenties to forty, who value
                quality and sustainability over fast fashion.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-8 grid gap-x-10 gap-y-3 text-xs leading-relaxed text-paper/70 sm:text-sm lg:grid-cols-2">
                <li>Income $80&ndash;100k, city living</li>
                <li>Style: classy, effortless, timeless, fun</li>
                <li>Supports women&rsquo;s empowerment and philanthropy</li>
                <li>Wants pieces that move between streetwear, business casual, and formal</li>
                <li>Appreciates staple pieces and one-of-a-kind statements</li>
                <li>Cares about the economics of the fashion industry</li>
              </ul>
            </Reveal>
          </div>
          <div className="col-span-12 min-w-0 lg:col-span-7 lg:col-start-6 lg:row-start-2 lg:self-end">
            <Reveal delay={160}>
              <div className="grid gap-6 sm:grid-cols-2">
                {marketing.map((m) => (
                  <div key={m.title} className="border-t border-paper/15 pt-4">
                    <h5 className="label text-paper/85">{m.title}</h5>
                    <p className="mt-2 text-sm leading-relaxed text-paper/60">{m.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <h2 className="label text-red-bright">Customer journey</h2>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {journey.map((j, i) => (
              <Reveal key={j.stage} delay={i * 80} className="border-t border-paper/15 pt-5">
                <span className="label text-paper/40">0{i + 1}</span>
                <h5 className="font-display mt-2 text-xl italic tracking-tight">{j.stage}</h5>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">{j.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-12">
          <Reveal className="min-w-0 lg:col-span-7">
            <h2 className="label text-red-bright">Three-year revenue forecast</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="label text-paper/50">
                    <th className="py-3 pr-4 font-medium">Metric</th>
                    <th className="py-3 pr-4 font-medium">Year 1</th>
                    <th className="py-3 pr-4 font-medium">Year 2</th>
                    <th className="py-3 font-medium">Year 3</th>
                  </tr>
                </thead>
                <tbody>
                  {forecast.map((row) => (
                    <tr key={row[0]} className="border-t border-paper/10">
                      <td className="py-3 pr-4 text-paper/80">{row[0]}</td>
                      <td className="py-3 pr-4 tabular-nums text-paper/60">{row[1]}</td>
                      <td className="py-3 pr-4 tabular-nums text-paper/60">{row[2]}</td>
                      <td className="py-3 tabular-nums text-paper/90">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={100}>
            <h2 className="label text-red-bright">Funding request: $150,000</h2>
            <ul className="mt-6 space-y-4">
              {funding.map((f) => (
                <li key={f.label} className="flex items-baseline justify-between gap-4 border-t border-paper/10 pt-4">
                  <span className="text-sm text-paper/80">{f.label}</span>
                  <span className="text-sm tabular-nums text-paper/60">{f.amount} &middot; {f.pct}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="label text-red-bright">Product line inspiration</h2>
              <p className="label text-paper/40">Mood board from the capstone</p>
            </div>
          </Reveal>
          <div className="mt-8 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
            {mood.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 80}>
                <div className="img-frame overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <ProjectNav slug="mischief-maison" dark />
      </div>
    </section>
  );
}
