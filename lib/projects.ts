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
      src: "/images/journey.jpg",
      alt: "Customer archetype lifestyle image for the Reflora journey map",
      width: 580,
      height: 636,
    },
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
      src: "/images/dpp.jpg",
      alt: "Trench coat with a scannable digital product passport tag",
      width: 303,
      height: 409,
    },
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
      src: "/images/chanel-store.jpg",
      alt: "Historic Chanel storefront with period car",
      width: 592,
      height: 539,
    },
    extraImage: {
      src: "/images/chanel-no5.jpg",
      alt: "Vintage Chanel No. 5 perfume advertisement",
      width: 288,
      height: 363,
    },
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
