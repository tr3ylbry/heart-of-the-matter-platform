import type { Metadata } from "next";
import Link from "next/link";
import { ContactFormPreview } from "@/components/ContactFormPreview";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | Heart of the Matter School of Music",
  description:
    "Contact Heart of the Matter School of Music about lessons, free trials, questions, workshops, and school inquiries.",
};

const inquiryTypes = [
  "Private lessons",
  "Free trial lessons",
  "Parent/student questions",
  "Future workshops or songwriting classes",
  "Educator/school inquiries",
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Let us start the conversation"
          description="Whether you are ready to book a free trial, have a question about lessons, or want to learn more about Heart of the Matter School of Music, reach out anytime."
          primaryCta={{ label: "Book a Free Trial", href: "/book" }}
          secondaryCta={{
            label: "Email Elizabeth",
            href: "mailto:elizabethsullivanmusic@gmail.com",
          }}
        />

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            <article className="rounded-[28px] border border-[rgba(58,42,34,0.12)] bg-[rgba(255,247,231,0.72)] p-7 shadow-[0_18px_55px_rgba(58,42,34,0.08)]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--coral)]">
                Email
              </p>
              <h2 className="mt-3 break-words font-serif text-3xl font-black text-[var(--ink)]">
                elizabethsullivanmusic@gmail.com
              </h2>
            </article>
            <article className="rounded-[28px] border border-[rgba(58,42,34,0.12)] bg-[rgba(255,247,231,0.72)] p-7 shadow-[0_18px_55px_rgba(58,42,34,0.08)]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--coral)]">
                Location
              </p>
              <h2 className="mt-3 font-serif text-3xl font-black text-[var(--ink)]">
                Serving students online and in person
              </h2>
            </article>
            <article className="rounded-[28px] border border-[rgba(58,42,34,0.12)] bg-[rgba(255,247,231,0.72)] p-7 shadow-[0_18px_55px_rgba(58,42,34,0.08)]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--coral)]">
                Socials
              </p>
              <div className="mt-4 flex gap-3">
                <span className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-black uppercase text-white">
                  Instagram
                </span>
                <span className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-black uppercase text-white">
                  YouTube
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="section-title">
              <span />
              <h2>How We Can Help</h2>
              <span />
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {inquiryTypes.map((type) => (
                <article
                  key={type}
                  className="rounded-3xl border border-[rgba(58,42,34,0.12)] bg-[rgba(255,247,231,0.72)] p-5 text-center shadow-[0_18px_55px_rgba(58,42,34,0.08)]"
                >
                  <span
                    aria-hidden="true"
                    className="mx-auto block h-12 w-12 rounded-full border-[3px] border-[var(--cyan)] bg-[var(--paper)]"
                  />
                  <h3 className="mt-4 font-serif text-2xl font-black text-[var(--ink)]">
                    {type}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactFormPreview />

        <section className="px-4 py-10 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-[28px] bg-[var(--paper)] p-6 text-center shadow-[0_20px_70px_rgba(58,42,34,0.1)] sm:p-8 lg:flex-row lg:text-left">
            <h2 className="font-serif text-4xl font-black text-[var(--ink)]">
              Prefer to begin with a lesson?
            </h2>
            <Link
              href="/book"
              className="inline-flex min-h-14 shrink-0 items-center justify-center rounded-lg bg-[var(--coral)] px-7 py-4 text-base font-black text-white shadow-[0_16px_34px_rgba(242,45,33,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--coral-dark)] focus:outline-none focus:ring-4 focus:ring-[rgba(242,45,33,0.25)]"
            >
              Book Your Free Trial
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
