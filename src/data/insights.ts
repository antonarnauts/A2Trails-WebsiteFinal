export interface InsightArticle {
  id: string;
  slug: string;
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
    readTime: "4 min",
    date: "September 2026",
    image: "/images/article2.webp",
    imagePosition: "object-left",
    tags: ["Municipalities", "Public Health", "Mobility", "Pumptracks"],
  },
  {
    id: "biking-infrastructure-partnerships",
    slug: "biking-infrastructure-partnerships",
    readTime: "4 min",
    date: "September 2026",
    image: "/images/article1.webp",
    imagePosition: "object-center",
    tags: ["Partnerships", "Construction", "Project Quality", "Risk Reduction"],
  },
];
