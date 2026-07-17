import type { Metadata } from "next";
import Link from "next/link";
import { ContactFormPreview } from "@/components/ContactFormPreview";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { socialLinks } from "@/data/socials";

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
      <main id="main-content" tabIndex={-1}>
        <PageHero
          eyebrow="Contact"
          title="Let us start the conversation"
          description="Whether you are ready to book a free trial, have a question about lessons, or want to learn more about Heart of the Matter School of Music, reach out anytime."
          primaryCta={{ label: "Book a Free Trial", href: "/book" }}
          secondaryCta={{
            label: "Email Elizabeth",
            href: "mailto:heartofthemattermusic@gmail.com",
          }}
        />

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            <a
              href="mailto:heartofthemattermusic@gmail.com"
              aria-label="Email Elizabeth at heartofthemattermusic@gmail.com"
              className="group min-w-0 rounded-2xl border border-[rgba(58,42,34,0.1)] bg-[rgba(255,247,231,0.64)] p-7 shadow-[0_8px_24px_rgba(58,42,34,0.05)] transition hover:-translate-y-0.5 hover:border-[var(--coral)]"
            >
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--coral)]">
                Email
              </p>
              <h2 className="mt-3 font-serif text-2xl font-black text-[var(--ink)] [overflow-wrap:anywhere] sm:text-3xl">
                heartofthemattermusic@gmail.com
              </h2>
              <span className="mt-4 inline-block text-sm font-black text-[var(--coral)] underline underline-offset-4 group-hover:text-[var(--coral-dark)]">
                Send an email
              </span>
            </a>
            <article className="min-w-0 rounded-2xl border border-[rgba(58,42,34,0.1)] bg-[rgba(255,247,231,0.64)] p-7 shadow-[0_8px_24px_rgba(58,42,34,0.05)]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--coral)]">
                Location
              </p>
              <h2 className="mt-3 font-serif text-2xl font-black text-[var(--ink)] sm:text-3xl">
                Serving students online and in person
              </h2>
            </article>
            <article className="min-w-0 rounded-2xl border border-[rgba(58,42,34,0.1)] bg-[rgba(255,247,231,0.64)] p-7 shadow-[0_8px_24px_rgba(58,42,34,0.05)]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--coral)]">
                Socials
              </p>
              {/* TODO: Replace the YouTube placeholder with the real URL. */}
              <div
                className="mt-4 flex flex-wrap gap-3"
                aria-label="Social profiles"
              >
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Heart of the Matter School of Music on Instagram (opens in a new tab)"
                  className="rounded-full border border-[var(--coral)] bg-[var(--paper)] px-4 py-2 text-sm font-bold text-[var(--ink)] transition hover:bg-[rgba(226,43,32,0.08)]"
                >
                  Instagram
                </a>
                <span className="rounded-full border border-[rgba(58,42,34,0.24)] bg-[var(--paper)] px-4 py-2 text-sm font-bold text-[var(--umber)]">
                  YouTube - Coming soon
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
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-5">
              {inquiryTypes.map((type) => (
                <article
                  key={type}
                  className="rounded-2xl border border-[rgba(58,42,34,0.1)] bg-[rgba(255,247,231,0.62)] p-4 text-center shadow-[0_8px_24px_rgba(58,42,34,0.05)] last:col-span-2 lg:last:col-span-1"
                >
                  <span
                    aria-hidden="true"
                    className="mx-auto block h-12 w-12 rounded-full border-[3px] border-[var(--cyan)] bg-[var(--paper)]"
                  />
                  <h3 className="mt-4 font-serif text-xl font-black text-[var(--ink)] sm:text-2xl">
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
              Book a Free Trial
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
