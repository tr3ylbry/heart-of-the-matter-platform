import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 lg:px-10 lg:pb-20">
      <div className="butterfly-line left-[-84px] top-16 h-72 w-72 opacity-45" />
      <div className="mx-auto grid min-w-0 max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 min-w-0">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-[var(--coral)]">
            Heart-led music lessons
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-black leading-[0.98] text-[var(--ink)] sm:text-7xl sm:leading-[0.92] lg:text-8xl">
            Find Your Unique Voice.
          </h1>
          <div className="my-8 flex items-center gap-4" aria-hidden="true">
            <span className="h-0.5 min-w-0 flex-1 max-w-36 bg-[var(--gold)]" />
            <span className="butterfly-mini" />
            <span className="h-0.5 min-w-0 flex-1 max-w-36 bg-[var(--gold)]" />
          </div>
          <p className="max-w-xl text-2xl leading-snug text-[var(--umber)] sm:text-3xl">
            Transform through music. Learn with heart. Grow with joy.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[var(--coral)] px-6 py-4 text-base font-black text-white shadow-[0_16px_34px_rgba(242,45,33,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--coral-dark)] focus:outline-none focus:ring-4 focus:ring-[rgba(242,45,33,0.25)]"
            >
              Book a Free Trial
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-14 items-center justify-center rounded-lg border-2 border-[var(--cyan)] bg-[rgba(255,247,231,0.58)] px-6 py-4 text-base font-black text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-[rgba(16,171,221,0.22)]"
            >
              View Pricing
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[540px]">
          <div className="absolute inset-x-0 bottom-2 h-12 rounded-[999px] bg-[rgba(16,171,221,0.72)]" />
          <div className="hero-photo relative h-full min-h-[420px] overflow-hidden bg-[linear-gradient(135deg,#f8d199,#fff7e7_42%,#f4b9a6)] shadow-[0_24px_70px_rgba(58,42,34,0.22)]">
            <Image
              src="/elizabeth-teaching-student.png"
              alt="Elizabeth Sullivan teaching a student at the piano"
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,20,18,0.08),transparent_42%,rgba(245,197,0,0.08))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
