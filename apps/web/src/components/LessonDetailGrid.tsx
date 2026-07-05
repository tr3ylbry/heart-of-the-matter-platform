import { DecorativeIcon } from "@/components/DecorativeIcon";
import { lessonDetails } from "@/data/lessons";

const accentClasses = {
  coral: "bg-[var(--coral)] text-white",
  cyan: "bg-[var(--cyan)] text-[var(--ink)]",
  gold: "bg-[var(--gold)] text-[var(--ink)]",
  ink: "bg-[var(--ink)] text-white",
};

export function LessonDetailGrid() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="section-title">
          <span />
          <h2>Lesson Offerings</h2>
          <span />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {lessonDetails.map((lesson) => (
            <article
              key={lesson.name}
              className="rounded-[28px] border border-[rgba(58,42,34,0.12)] bg-[rgba(255,247,231,0.72)] p-6 shadow-[0_18px_55px_rgba(58,42,34,0.08)] sm:p-7"
            >
              <div className="flex flex-col gap-5 sm:flex-row">
                <div
                  className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${accentClasses[lesson.accent]}`}
                >
                  <DecorativeIcon icon={lesson.icon} />
                </div>
                <div>
                  <h3 className="font-serif text-4xl font-black text-[var(--ink)]">
                    {lesson.name}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--umber)]">
                    {lesson.description}
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm font-bold leading-6 text-[var(--umber)] sm:grid-cols-2">
                    {lesson.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--coral)]"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
