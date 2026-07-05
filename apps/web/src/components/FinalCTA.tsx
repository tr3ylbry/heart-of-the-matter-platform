import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-[28px] bg-[var(--paper)] p-6 text-center shadow-[0_20px_70px_rgba(58,42,34,0.1)] sm:p-8 lg:flex-row lg:text-left">
        <div>
          <h2 className="font-serif text-4xl font-black text-[var(--ink)]">
            Ready to begin your musical journey?
          </h2>
          <p className="mt-2 text-lg text-[var(--umber)]">
            Booking is easy - choose your time and let us make music together.
          </p>
        </div>
        <Link
          href="/book"
          className="inline-flex min-h-14 shrink-0 items-center justify-center rounded-lg bg-[var(--coral)] px-7 py-4 text-base font-black text-white shadow-[0_16px_34px_rgba(242,45,33,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--coral-dark)] focus:outline-none focus:ring-4 focus:ring-[rgba(242,45,33,0.25)]"
        >
          Book Your Free Trial
        </Link>
      </div>
    </section>
  );
}
