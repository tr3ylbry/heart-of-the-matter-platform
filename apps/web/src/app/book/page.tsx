import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function BookPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-4 py-20 sm:px-6 lg:px-10">
        <section className="mx-auto max-w-3xl rounded-[32px] border border-[rgba(58,42,34,0.14)] bg-[rgba(255,247,231,0.76)] p-8 text-center shadow-[0_24px_80px_rgba(58,42,34,0.12)] sm:p-12">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--coral)]">
            Booking
          </p>
          <h1 className="mt-4 font-serif text-5xl font-black text-[var(--ink)] sm:text-6xl">
            Booking calendar coming soon.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--umber)]">
            The free trial lesson calendar will be connected here soon. For now,
            contact Elizabeth directly to begin your musical journey.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:elizabethsullivanmusic@gmail.com"
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[var(--coral)] px-6 py-4 text-base font-black text-white shadow-[0_16px_34px_rgba(242,45,33,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--coral-dark)] focus:outline-none focus:ring-4 focus:ring-[rgba(242,45,33,0.25)]"
            >
              Email Elizabeth
            </a>
            <Link
              href="/#pricing"
              className="inline-flex min-h-14 items-center justify-center rounded-lg border-2 border-[var(--cyan)] bg-[rgba(255,247,231,0.58)] px-6 py-4 text-base font-black text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-[rgba(16,171,221,0.22)]"
            >
              View Pricing
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
