import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="butterfly-line left-[-90px] top-10 h-72 w-72 opacity-40" />
      <div className="butterfly-line right-[-120px] bottom-[-40px] h-80 w-80 opacity-30" />
      <div className="relative z-10 mx-auto min-w-0 max-w-5xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[var(--coral)]">
          {eyebrow}
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-4xl font-black leading-[1.02] text-[var(--ink)] sm:text-6xl sm:leading-[0.98] lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--umber)] sm:text-xl">
          {description}
        </p>
        {primaryCta || secondaryCta ? (
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[var(--coral)] px-6 py-4 text-base font-black text-white shadow-[0_16px_34px_rgba(242,45,33,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--coral-dark)] focus:outline-none focus:ring-4 focus:ring-[rgba(242,45,33,0.25)]"
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex min-h-14 items-center justify-center rounded-lg border-2 border-[var(--cyan)] bg-[rgba(255,247,231,0.58)] px-6 py-4 text-base font-black text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-[rgba(16,171,221,0.22)]"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
