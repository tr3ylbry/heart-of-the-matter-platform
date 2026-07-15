import Link from "next/link";
import { featuredProgram } from "@/data/programs";

export function ProgramsPreview() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="section-title">
          <span />
          <h2>Programs & Clubs</h2>
          <span />
        </div>

        <article className="mx-auto mt-9 grid max-w-6xl overflow-hidden rounded-[28px] border border-[rgba(58,42,34,0.12)] bg-[var(--paper)] shadow-[0_20px_60px_rgba(58,42,34,0.09)] lg:grid-cols-[0.75fr_1.25fr]">
          <div className="flex min-h-56 flex-col justify-between bg-[var(--ink)] p-7 text-white sm:p-9">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--soft-gold)]">
                After-School Program
              </p>
              <h3 className="mt-4 font-serif text-4xl font-black sm:text-5xl">
                {featuredProgram.name}
              </h3>
            </div>
            <p className="mt-8 text-lg font-black text-white">
              {featuredProgram.audience}
            </p>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-black uppercase tracking-[0.12em] text-[var(--coral)] sm:text-base">
              <p>{featuredProgram.schedule}</p>
              <p>{featuredProgram.price}</p>
            </div>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--umber)] sm:text-lg sm:leading-8">
              {featuredProgram.description}
            </p>
            <Link
              href="/programs"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center self-start rounded-lg border-2 border-[var(--cyan)] px-5 py-3 text-center text-sm font-black text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[rgba(16,171,221,0.1)] sm:w-auto"
            >
              Explore Programs
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
