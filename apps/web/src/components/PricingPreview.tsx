import Link from "next/link";
import { pricingTiers } from "@/data/pricing";

type PricingPreviewProps = {
  showDetailsLink?: boolean;
  title?: string;
  description?: string;
};

export function PricingPreview({
  showDetailsLink = true,
  title = "Simple, Flexible Pricing",
  description = "Choose the weekly rhythm that supports each student.",
}: PricingPreviewProps) {
  return (
    <section id="pricing" className="px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[rgba(58,42,34,0.14)] bg-[rgba(255,247,231,0.58)] p-4 shadow-[0_24px_80px_rgba(58,42,34,0.1)] sm:p-6 lg:p-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-black text-[var(--ink)] sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base font-semibold text-[var(--umber)]">
            {description}
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl border bg-[var(--paper)] shadow-[0_18px_55px_rgba(58,42,34,0.1)] ${
                tier.featured
                  ? "border-[var(--coral)] lg:-mt-4"
                  : "border-[rgba(58,42,34,0.12)]"
              }`}
            >
              {tier.featured ? (
                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-lg bg-[var(--gold)] px-5 py-1 text-xs font-black uppercase tracking-[0.14em] text-[var(--ink)]">
                  Most Popular
                </div>
              ) : null}
              <div
                className={`px-6 py-7 text-center ${
                  tier.featured
                    ? "bg-[var(--coral)] text-white"
                    : tier.name === "Caterpillar"
                      ? "bg-[var(--cyan)] text-[var(--ink)]"
                      : "bg-[var(--gold)] text-[var(--ink)]"
                }`}
              >
                <p className="text-sm font-black uppercase tracking-[0.2em]">
                  {tier.lessonLength}
                </p>
                <h3 className="mt-3 font-serif text-5xl font-black">
                  {tier.name}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-serif text-5xl font-black text-[var(--ink)]">
                  {tier.price}
                  <span className="font-sans text-base font-bold">
                    {" "}
                    / month
                  </span>
                </p>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.14em] text-[var(--coral)]">
                  {tier.lessonsPerMonth}
                </p>
                <p className="mt-5 flex-1 text-base leading-7 text-[var(--umber)]">
                  {tier.description}
                </p>
                <Link
                  href="/book"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--coral)] px-5 py-3 text-center text-sm font-black text-white shadow-[0_14px_30px_rgba(226,43,32,0.2)] transition hover:-translate-y-0.5 hover:bg-[var(--coral-dark)]"
                >
                  Start with a Free Trial
                </Link>
              </div>
            </article>
          ))}
        </div>

        {showDetailsLink ? (
          <div className="mt-7 text-center">
            <Link
              href="/pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 text-base font-black text-[var(--coral)] underline decoration-[var(--gold)] decoration-2 underline-offset-8 hover:text-[var(--coral-dark)]"
            >
              View full pricing details
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
