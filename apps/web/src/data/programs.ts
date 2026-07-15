export type Program = {
  slug: string;
  name: string;
  audience: string;
  schedule: string;
  price: string;
  description: string;
  contactEmail: string;
  flyerImage: string | null;
};

export const programs: Program[] = [
  {
    slug: "rock-band-club",
    name: "Rock Band Club",
    audience: "5th-8th Grade",
    schedule: "Tuesdays, 3:10-4:10 PM",
    price: "$175 per quarter",
    description:
      "An after-school music experience for students who want to build confidence, rhythm, teamwork, and musicianship in a fun rock band setting.",
    contactEmail: "elizabeth.sullivan@lemanacademy.com",
    flyerImage: "/rock-band-club-flyer.jpeg",
  },
];

export const featuredProgram = programs[0];
