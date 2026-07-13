import type { Metadata } from "next";
import Link from "next/link";
import { LessonDetailGrid } from "@/components/LessonDetailGrid";
import { PageHero } from "@/components/PageHero";
import { PricingPreview } from "@/components/PricingPreview";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Lessons | Heart of the Matter School of Music",
  description:
    "Private music lessons in piano, voice, guitar, bass, drums, songwriting, theory, and ear training.",
};

const pathways = [
  {
    title: "Young Beginners",
    text: "A warm, encouraging start for students building focus, rhythm, confidence, and foundational skills.",
  },
  {
    title: "Growing Musicians",
    text: "Support for students ready to deepen technique, expand repertoire, and find more personal expression.",
  },
  {
    title: "Adult Learners",
    text: "Flexible, respectful lessons for adults beginning again, starting fresh, or exploring a long-held musical goal.",
  },
];

const steps = [
  {
    title: "Start with a free trial",
    text: "Meet Elizabeth, talk through goals, and experience the teaching style before choosing a weekly plan.",
  },
  {
    title: "Choose your lesson rhythm",
    text: "Students can choose weekly 30, 45, or 60 minute lessons depending on age, goals, and season of life.",
  },
  {
    title: "Grow with weekly support",
    text: "Lessons combine consistent skill-building with encouragement, creativity, and room for each student to develop.",
  },
];

export default function LessonsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          eyebrow="Private Music Lessons"
          title="Lessons that meet each student where they are"
          description="Music lessons at Heart of the Matter are personalized, joyful, and grounded in strong musicianship. Students can explore piano, voice, guitar, bass, drums, songwriting, theory, and creative expression."
          primaryCta={{ label: "Book a Free Trial", href: "/book" }}
          secondaryCta={{ label: "View Pricing", href: "/pricing" }}
        />
        <LessonDetailGrid />

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="section-title">
              <span />
              <h2>Student Pathways</h2>
              <span />
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {pathways.map((pathway) => (
                <article
                  key={pathway.title}
                  className="rounded-2xl border border-[rgba(58,42,34,0.1)] bg-[rgba(255,247,231,0.62)] p-7 shadow-[0_8px_24px_rgba(58,42,34,0.05)]"
                >
                  <h3 className="font-serif text-4xl font-black text-[var(--ink)]">
                    {pathway.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--umber)]">
                    {pathway.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl rounded-[36px] bg-[linear-gradient(100deg,rgba(16,171,221,0.16),rgba(255,247,231,0.9)_52%,rgba(245,197,0,0.2))] p-6 shadow-[0_24px_80px_rgba(58,42,34,0.1)] sm:p-8">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--coral)]">
                How Lessons Work
              </p>
              <h2 className="mt-3 font-serif text-5xl font-black text-[var(--ink)]">
                A simple path into music.
              </h2>
            </div>
            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-[rgba(58,42,34,0.08)] bg-[rgba(255,247,231,0.7)] p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--coral)] text-lg font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 font-serif text-3xl font-black text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--umber)]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PricingPreview />
        <section className="px-4 py-10 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-[28px] bg-[var(--paper)] p-6 text-center shadow-[0_20px_70px_rgba(58,42,34,0.1)] sm:p-8 lg:flex-row lg:text-left">
            <div>
              <h2 className="font-serif text-4xl font-black text-[var(--ink)]">
                Ready to find your unique voice?
              </h2>
              <p className="mt-2 text-lg text-[var(--umber)]">
                Start with a free trial lesson and see what feels right.
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex min-h-14 shrink-0 items-center justify-center rounded-lg bg-[var(--coral)] px-7 py-4 text-base font-black text-white shadow-[0_16px_34px_rgba(242,45,33,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--coral-dark)] focus:outline-none focus:ring-4 focus:ring-[rgba(242,45,33,0.25)]"
            >
              Book a Free Trial
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
