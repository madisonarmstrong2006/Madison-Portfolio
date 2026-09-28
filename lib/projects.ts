export type Project = {
  slug: string;
  num: string;
  title: string;
  tag: string;
  date: string;
  summary: string;
  body: string[];
  image: { src: string; alt: string; width: number; height: number };
  extraImage?: { src: string; alt: string; width: number; height: number };
  /** Optional thumbnail for the work list card; falls back to `image` when omitted. */
  coverImage?: { src: string; alt: string; width: number; height: number };
  /** Additional full-width pages shown after `image`, e.g. more pages of a document/deck. */
  gallery?: { src: string; alt: string; width: number; height: number }[];
  wide?: boolean;
};

export const featured = {
  slug: "mischief-maison",
  num: "01",
  title: "Mischief Maison Studio",
  tag: "Parsons capstone · Brand concept",
  date: "2026",
  summary:
    "A sustainable womenswear brand concept built end to end: creative direction, brand identity, market research, strategy, sourcing, production, logistics, marketing, and a three-year financial forecast.",
  image: {
    src: "/images/capstone-cover.jpg",
    alt: "Crossed legs in strappy rhinestone heels resting on a black leather bench, Mischief Maison Studio cover image",
    width: 950,
    height: 1178,
  },
};

export const projects: Project[] = [
  {
    slug: "reflora",
    num: "02",
    title: "Customer Journey Map",
    tag: "Reflora",
    date: "July 2026",
    summary:
      "A customer archetype and her five-stage journey, from discovering a piece on Pinterest to purchase, retention, and advocacy.",
    body: [
      "Built a full customer archetype, Mason Livermoor, a 25-year-old Manhattan merchandising director who values sustainability and timeless style, and mapped her five-stage journey from discovering a piece on Pinterest through purchase, retention, and advocacy.",
    ],
    image: {
      src: "/images/reflora-journey-map.jpg",
      alt: "Reflora customer journey map document: Mason Livermoor's archetype profile and her five-stage awareness to advocacy journey",
      width: 1728,
      height: 2304,
    },
    coverImage: {
      src: "/images/reflora-cover.jpg",
      alt: "Woman in a blue sweater and brown trousers seated on the floor, Reflora customer archetype",
      width: 1200,
      height: 1600,
    },
    wide: true,
  },
  {
    slug: "digital-product-passport",
    num: "03",
    title: "Digital Product Passport Proposal",
    tag: "The Impact of Retail Technology",
    date: "July 2026",
    summary:
      "Scannable QR and RFID passports that disclose a garment's origin, production, environmental impact, and authenticity.",
    body: [
      "A proposal for scannable QR and RFID passports that disclose a garment's origin, production, environmental impact, and authenticity.",
      "Grounded in consumer data: 74% of consumers will pay more for fully traceable garments, and 54% of US and UK consumers want a sustainable fashion industry.",
    ],
    image: {
      src: "/images/dpp-document.jpg",
      alt: "Digital Product Passport (DPP) proposal document: what it is, adoption statistics, and the benefit to the target client",
      width: 1545,
      height: 1999,
    },
    coverImage: {
      src: "/images/dpp-cover.jpg",
      alt: "Runway show staged on a landfill, models in red and orange looks walking a path through waste",
      width: 736,
      height: 675,
    },
    wide: true,
  },
  {
    slug: "chanel-timeline",
    num: "04",
    title: "Chanel Brand Timeline",
    tag: "Brand history research",
    date: "November 2025",
    summary:
      "Chanel's history from Coco Chanel's 1909 millinery shop to the modern ready-to-wear era.",
    body: [
      "Researched and mapped Chanel's history from Coco Chanel's 1909 millinery shop through wartime closure, reinvention, and the modern ready-to-wear era.",
      "The project studied how the house stayed true to a chic, classic identity while evolving with each generation.",
    ],
    image: {
      src: "/images/chanel-timeline-p1.jpg",
      alt: "Chanel Timeline title page and brand history overview",
      width: 1600,
      height: 1600,
    },
    gallery: [
      {
        src: "/images/chanel-timeline-p2.jpg",
        alt: "Chanel timeline, 1909 through WWII: the millinery shop, Chanel No. 5, and the wartime closure",
        width: 1600,
        height: 1600,
      },
      {
        src: "/images/chanel-timeline-p3.jpg",
        alt: "Chanel timeline, 1970s through 2000s: Alain Wertheimer, Karl Lagerfeld, and the fur-free decision",
        width: 1600,
        height: 1600,
      },
    ],
    coverImage: {
      src: "/images/chanel-cover.jpg",
      alt: "Woman in a classic Chanel tweed suit and gloves outside the Chanel boutique",
      width: 735,
      height: 1099,
    },
    wide: true,
  },
  {
    slug: "lookbook",
    num: "05",
    title: "Lookbook",
    tag: "Styling & curation",
    date: "2026",
    summary:
      "Nine complete outfits curated head to toe, mixing high and low, vintage and new.",
    body: [
      "A nine-look styling exercise: complete outfits curated head to toe, mixing high and low, vintage and new.",
      "An exploration of how composition and pairing turn individual pieces into a point of view.",
    ],
    image: {
      src: "/images/lookbook.jpg",
      alt: "Grid of nine curated outfits from Madison's lookbook",
      width: 1400,
      height: 1866,
    },
    wide: true,
  },
];

export const allWork = [
  { slug: featured.slug, title: featured.title },
  ...projects.map((p) => ({ slug: p.slug, title: p.title })),
];
