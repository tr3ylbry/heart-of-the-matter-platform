import type { Metadata } from "next";
import { FinalCTA } from "@/components/FinalCTA";
import { FounderSection } from "@/components/FounderSection";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About | Heart of the Matter School of Music",
  description:
    "Meet Elizabeth Sullivan and learn about the heart-centered teaching philosophy behind Heart of the Matter School of Music.",
};

const teachingValues = [
  {
    title: "Strong Musicianship",
    text: "Lessons build practical skills, technique, rhythm, listening, and musical understanding.",
  },
  {
    title: "Personal Expression",
    text: "Students are encouraged to explore meaningful music and develop their own creative voice.",
  },
  {
    title: "Supportive Growth",
    text: "Each student is met with encouragement, clear guidance, and room to grow with confidence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          eyebrow="About the School"
          title="Music taught with heart"
          description="Heart of the Matter School of Music brings strong musicianship, personal expression, and supportive teaching together in every lesson."
          primaryCta={{ label: "Book a Free Trial", href: "/book" }}
          secondaryCta={{ label: "Explore Lessons", href: "/lessons" }}
        />

        <FounderSection />

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="section-title">
              <span />
              <h2>Teaching Philosophy</h2>
              <span />
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {teachingValues.map((value) => (
                <article
                  key={value.title}
                  className="rounded-2xl border border-[rgba(58,42,34,0.1)] bg-[rgba(255,247,231,0.64)] p-7 shadow-[0_8px_24px_rgba(58,42,34,0.05)]"
                >
                  <h3 className="font-serif text-3xl font-black text-[var(--ink)]">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--umber)]">
                    {value.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
