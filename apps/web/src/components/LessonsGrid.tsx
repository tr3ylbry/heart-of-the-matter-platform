import { DecorativeIcon } from "@/components/DecorativeIcon";
import { lessons } from "@/data/lessons";

const accentClasses = {
  coral: "bg-[var(--coral)] text-white",
  cyan: "bg-[var(--cyan)] text-[var(--ink)]",
  gold: "bg-[var(--gold)] text-[var(--ink)]",
  ink: "bg-[var(--ink)] text-white",
};

export function LessonsGrid() {
  return (
    <section id="lessons" className="px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="section-title">
          <span />
          <h2>Our Lessons</h2>
          <span />
        </div>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <article
              key={lesson.name}
              className="flex min-h-[22rem] flex-col items-center justify-start rounded-2xl border border-[rgba(58,42,34,0.12)] bg-[rgba(255,247,231,0.68)] p-7 text-center shadow-[0_18px_50px_rgba(58,42,34,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(58,42,34,0.14)]"
            >
              <div
                className={`mx-auto flex h-28 w-28 shrink-0 items-center justify-center rounded-full ${accentClasses[lesson.accent]}`}
              >
                <DecorativeIcon icon={lesson.icon} />
              </div>
              <h3 className="mt-5 font-serif text-4xl font-black text-[var(--ink)]">
                {lesson.name}
              </h3>
              <p className="mt-4 max-w-56 text-base font-semibold leading-7 text-[var(--umber)]">
                {lesson.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
