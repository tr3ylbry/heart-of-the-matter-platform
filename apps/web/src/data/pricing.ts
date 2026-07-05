export type PricingTier = {
  name: string;
  lessonLength: string;
  price: string;
  lessonsPerMonth: string;
  description: string;
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Caterpillar",
    lessonLength: "30-minute weekly lessons",
    price: "$200",
    lessonsPerMonth: "4 lessons per month",
    description:
      "A gentle starting point for building strong musical foundations.",
  },
  {
    name: "Chrysalis",
    lessonLength: "45-minute weekly lessons",
    price: "$280",
    lessonsPerMonth: "4 lessons per month",
    description:
      "More room to grow, explore, and transform through consistent practice.",
    featured: true,
  },
  {
    name: "Butterfly",
    lessonLength: "60-minute weekly lessons",
    price: "$345",
    lessonsPerMonth: "4 lessons per month",
    description:
      "Deeper weekly support for confidence, artistry, and full musical expression.",
  },
];
