import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { PricingPreview } from "@/components/PricingPreview";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  dropInLessons,
  freeTrialLesson,
  pricingDiscounts,
  pricingTiers,
} from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing | Heart of the Matter School of Music",
  description:
    "View free trial, monthly package, drop-in, loyalty, sibling, and semester prepay pricing for music lessons.",
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          eyebrow="Lesson Pricing"
          title="Choose a lesson rhythm that supports your growth"
          description="Start with a free trial, then choose the lesson length and commitment that best fit the student."
          primaryCta={{ label: "Book a Free Trial", href: "/book" }}
          secondaryCta={{ label: "Ask a Question", href: "/contact" }}
        />

        <section className="px-4 py-12 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[28px] border border-[rgba(58,42,34,0.12)] bg-[var(--paper)] p-6 shadow-[0_20px_70px_rgba(58,42,34,0.1)] sm:p-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--coral)]">
                Begin Here
              </p>
              <h2 className="mt-3 font-serif text-4xl font-black text-[var(--ink)] sm:text-5xl">
                {freeTrialLesson.name}
              </h2>
              <p className="mt-3 text-lg font-bold text-[var(--umber)]">
                {freeTrialLesson.lessonLength} - {freeTrialLesson.price}
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--umber)]">
                Meet Elizabeth, talk through goals, and experience the teaching
                approach before choosing a weekly plan.
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex min-h-14 w-full shrink-0 items-center justify-center rounded-lg bg-[var(--coral)] px-7 py-4 text-base font-black text-white shadow-[0_16px_34px_rgba(226,43,32,0.24)] hover:bg-[var(--coral-dark)] sm:w-auto"
            >
              Book a Free Trial
            </Link>
          </div>
        </section>

        <PricingPreview
          showDetailsLink={false}
          title="Monthly Lesson Packages"
          description="Each package includes four lessons per month at a consistent weekly lesson length."
        />

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="section-title">
              <span />
              <h2>Drop-In Lessons</h2>
              <span />
            </div>
            <div className="mt-9 grid gap-5 sm:grid-cols-3">
              {dropInLessons.map((lesson) => (
                <article
                  key={lesson.lessonLength}
                  className="rounded-2xl border border-[rgba(58,42,34,0.1)] bg-[rgba(255,247,231,0.64)] p-6 text-center shadow-[0_8px_24px_rgba(58,42,34,0.05)]"
                >
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--coral)]">
                    {lesson.lessonLength}
                  </p>
                  <p className="mt-3 font-serif text-5xl font-black text-[var(--ink)]">
                    {lesson.price}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--coral)]">
                Loyalty Pricing
              </p>
              <h2 className="mt-3 font-serif text-4xl font-black text-[var(--ink)] sm:text-5xl">
                Consistency is rewarded.
              </h2>
            </div>
            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <article
                  key={tier.name}
                  className="rounded-2xl border border-[rgba(58,42,34,0.1)] bg-[rgba(255,247,231,0.64)] p-6 shadow-[0_8px_24px_rgba(58,42,34,0.05)]"
                >
                  <h3 className="font-serif text-3xl font-black text-[var(--ink)]">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-[var(--umber)]">
                    {tier.lessonLength}
                  </p>
                  <dl className="mt-5 grid gap-4 text-[var(--umber)]">
                    <div className="flex items-center justify-between gap-4 border-b border-[rgba(58,42,34,0.12)] pb-3">
                      <dt className="font-bold">Standard</dt>
                      <dd className="font-black text-[var(--ink)]">
                        {tier.price}/month
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-b border-[rgba(58,42,34,0.12)] pb-3">
                      <dt className="font-bold">Committed - months 3-5</dt>
                      <dd className="font-black text-[var(--ink)]">
                        {tier.committedPrice}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="font-bold">Loyal - month 6+</dt>
                      <dd className="font-black text-[var(--ink)]">
                        {tier.loyalPrice}
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 sm:grid-cols-2">
              {pricingDiscounts.map((discount) => (
                <article
                  key={discount.name}
                  className="rounded-2xl border border-[rgba(58,42,34,0.1)] bg-[rgba(255,247,231,0.64)] p-6 shadow-[0_8px_24px_rgba(58,42,34,0.05)]"
                >
                  <h2 className="font-serif text-3xl font-black text-[var(--ink)]">
                    {discount.name}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-[var(--umber)]">
                    {discount.description}
                  </p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-4xl text-center text-base font-semibold leading-7 text-[var(--umber)]">
              Monthly packages include four weekly lessons. Scheduling, makeups,
              and billing details are confirmed during enrollment.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
