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

