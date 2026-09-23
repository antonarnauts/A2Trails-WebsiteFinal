export interface InsightArticle {
  id: string;
  slug: string;
  aliases?: string[];
  readTime: string;
  date: string;
  image: string;
  imagePosition?: string;
  tags: string[];
}

export const insightsData: InsightArticle[] = [
  {
    id: "choosing-bike-infrastructure-community",
    slug: "choosing-bike-infrastructure-community",
    aliases: [
      "choosing-the-right-bike-infrastructure-for-your-community",
      "bike-infrastructure-community",
      "kiezen-voor-de-juiste-fietsinfrastructuur-voor-uw-gemeente",
      "choisir-la-bonne-infrastructure-cyclable-pour-votre-communaute",
      "steden-en-gemeenten",
      "villes-et-communes",
      "article-4",
      "article4",
      "towns"
    ],
    readTime: "5",
    date: "September 2026",
    image: "/images/forestmeetingreal.jpeg",
    imagePosition: "object-center",
    tags: ["Municipalities", "Active Recreation", "Pumptracks", "Skills Parks", "MTB Trails"],
  },
  {
    id: "biking-infrastructure-municipalities",
    slug: "biking-infrastructure-municipalities",
    aliases: [
      "5-ways-biking-infrastructure-benefits-municipalities",
      "5-ways-biking-infrastructure",
      "municipalities",
      "5-ways",
      "article2",
      "article-2"
    ],
    readTime: "5",
    date: "September 2026",
    image: "/images/article2.webp",
    imagePosition: "object-left",
    tags: ["Municipalities", "Public Health", "Mobility", "Pumptracks"],
  },
  {
    id: "biking-infrastructure-partnerships",
    slug: "biking-infrastructure-partnerships",
    aliases: [
      "why-subcontractors-and-general-contractors-should-partner-with-trail-builders",
      "general-contractors-partnerships",
      "partnerships",
      "subcontractors",
      "article1",
      "article-1"
    ],
    readTime: "2",
    date: "September 2026",
    image: "/images/article1.webp",
    imagePosition: "object-center",
    tags: ["Partnerships", "Construction", "Project Quality", "Risk Reduction"],
  },
  {
    id: "phases-of-an-outdoor-project",
    slug: "phases-of-an-outdoor-project",
    aliases: [
      "the-right-specialist-at-the-right-stage",
      "phases-of-an-outdoor-project",
      "construction-companies",
      "bouwbedrijven",
      "de-juiste-specialist-op-het-juiste-moment",
      "pour-les-entreprises-de-construction",
      "article-3",
      "article3"
    ],
    readTime: "4",
    date: "September 2026",
    image: "/images/constructionprocess5phases.png",
    imagePosition: "object-center",
    tags: ["Construction", "Partnerships", "Groundworks", "Project Phases"],
  },
];

export function findArticle(query?: string | null): InsightArticle | null {
  if (!query) return null;
  const clean = query.trim().toLowerCase();
  return (
    insightsData.find(
      (a) =>
        a.id.toLowerCase() === clean ||
        a.slug.toLowerCase() === clean ||
        a.aliases?.some((alias) => alias.toLowerCase() === clean)
    ) || null
  );
}

