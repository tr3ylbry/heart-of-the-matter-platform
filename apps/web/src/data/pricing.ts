export type PricingTier = {
  name: string;
  lessonLength: string;
  price: string;
  lessonsPerMonth: string;
  description: string;
  committedPrice: string;
  loyalPrice: string;
  featured?: boolean;
};

export type DropInLesson = {
  lessonLength: string;
  price: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Caterpillar",
    lessonLength: "30-minute weekly lessons",
    price: "$200",
    lessonsPerMonth: "4 lessons per month",
    description:
      "A gentle starting point for building strong musical foundations.",
    committedPrice: "$190/month",
    loyalPrice: "$180/month",
  },
  {
    name: "Chrysalis",
    lessonLength: "45-minute weekly lessons",
    price: "$280",
    lessonsPerMonth: "4 lessons per month",
    description:
      "More room to grow, explore, and transform through consistent practice.",
    committedPrice: "$268/month",
    loyalPrice: "$255/month",
    featured: true,
  },
  {
    name: "Butterfly",
    lessonLength: "60-minute weekly lessons",
    price: "$345",
    lessonsPerMonth: "4 lessons per month",
    description:
      "Deeper weekly support for confidence, artistry, and full musical expression.",
    committedPrice: "$328/month",
    loyalPrice: "$310/month",
  },
];

export const freeTrialLesson = {
  name: "Free Trial Lesson",
  lessonLength: "30 minutes",
  price: "Free",
};

export const dropInLessons: DropInLesson[] = [
  { lessonLength: "30 minutes", price: "$60" },
  { lessonLength: "45 minutes", price: "$80" },
  { lessonLength: "60 minutes", price: "$100" },
];

export const pricingDiscounts = [
  {
    name: "Sibling Discount",
    description: "The second student receives 10% off a monthly package.",
  },
  {
    name: "Semester Prepay",
    description: "Prepay 16 lessons and receive 8% off.",
  },
];
