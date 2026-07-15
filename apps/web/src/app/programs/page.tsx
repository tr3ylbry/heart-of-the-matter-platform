import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredProgram } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs & Clubs | Heart of the Matter School of Music",
  description:
    "Explore group music programs and clubs from Heart of the Matter School of Music, including Rock Band Club for 5th-8th grade students.",
};

const programDetails = [
  { label: "Audience", value: featuredProgram.audience },
  { label: "Schedule", value: featuredProgram.schedule },
  { label: "Price", value: featuredProgram.price },
];

export default function ProgramsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          eyebrow="Group Music Experiences"
          title="Programs & Clubs"
          description="Group music experiences for students ready to play, collaborate, and grow."
          primaryCta={{
            label: "Email About Rock Band Club",
            href: `mailto:${featuredProgram.contactEmail}?subject=Rock%20Band%20Club%20Inquiry`,
          }}
          secondaryCta={{ label: "Explore Private Lessons", href: "/lessons" }}
        />

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div
            className={`mx-auto grid gap-8 ${
              featuredProgram.flyerImage
                ? "max-w-7xl lg:grid-cols-[0.85fr_1.15fr]"
                : "max-w-5xl"
            }`}
          >
            {featuredProgram.flyerImage ? (
              <figure className="overflow-hidden rounded-2xl border border-[rgba(58,42,34,0.12)] bg-[var(--paper)] p-3 shadow-[0_18px_50px_rgba(58,42,34,0.09)]">
                <Image
                  src={featuredProgram.flyerImage}
                  alt="Rock Band Club flyer with grade, schedule, price, and contact information"
                  width={1545}
                  height={1999}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-auto w-full rounded-xl object-contain"
                />
                <figcaption className="px-2 pb-1 pt-3 text-center text-sm font-semibold text-[var(--umber)]">
                  Rock Band Club program flyer
                </figcaption>
              </figure>
            ) : null}

            <article className="overflow-hidden rounded-[28px] border border-[rgba(58,42,34,0.12)] bg-[var(--paper)] shadow-[0_20px_60px_rgba(58,42,34,0.09)]">
              <div className="bg-[var(--ink)] px-6 py-8 text-white sm:px-9 sm:py-10">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--soft-gold)]">
                  After-School Music Experience
                </p>
                <h2 className="mt-4 font-serif text-4xl font-black sm:text-6xl">
                  {featuredProgram.name}
                </h2>
              </div>

              <div className="p-6 sm:p-9">
                <dl className="grid gap-4 sm:grid-cols-3">
                  {programDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="rounded-xl border border-[rgba(58,42,34,0.1)] bg-[rgba(245,233,208,0.46)] p-5"
                    >
                      <dt className="text-xs font-black uppercase tracking-[0.18em] text-[var(--coral)]">
                        {detail.label}
                      </dt>
                      <dd className="mt-2 text-lg font-black leading-6 text-[var(--ink)]">
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-7 text-lg leading-8 text-[var(--umber)]">
                  {featuredProgram.description}
                </p>

                <div className="mt-8 border-t border-[rgba(58,42,34,0.12)] pt-7">
                  {/* TODO: Replace temporary email CTA with Stripe Payment Link once Liz creates the Rock Band Club product. */}
                  {/* TODO: Confirm whether Rock Band Club payments should use Stripe Payment Links or Acuity classes. */}
                  {/* TODO: Confirm whether Leman Academy location/disclaimer language should appear on the website. */}
                  <Link
                    href={`mailto:${featuredProgram.contactEmail}?subject=Rock%20Band%20Club%20Inquiry`}
                    className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-[var(--coral)] px-6 py-4 text-center text-base font-black text-white shadow-[0_16px_34px_rgba(226,43,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--coral-dark)] sm:w-auto"
                  >
                    Email About Rock Band Club
                  </Link>
                  <p className="mt-4 text-sm font-bold text-[var(--umber)]">
                    Online payment coming soon.
                  </p>
                  <p className="mt-2 text-sm text-[var(--umber)] [overflow-wrap:anywhere]">
                    Questions can be sent directly to{" "}
                    <a
                      href={`mailto:${featuredProgram.contactEmail}`}
                      className="font-bold text-[var(--coral)] underline underline-offset-4 hover:text-[var(--coral-dark)]"
                    >
                      {featuredProgram.contactEmail}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
