const values = [
  "Heart-centered teaching",
  "Personalized for every student",
  "Lifelong skills. Lasting joy.",
  "A supportive music community",
];

export function MissionStrip() {
  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-2 flex items-center justify-center gap-4" aria-hidden="true">
          <span className="h-0.5 w-28 bg-[var(--cyan)]" />
          <span className="butterfly-mini butterfly-mini-coral" />
          <span className="h-0.5 w-28 bg-[var(--cyan)]" />
        </div>
        <h2 className="font-serif text-4xl font-black text-[var(--ink)] sm:text-5xl">
          Music changes everything.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[var(--umber)]">
          At Heart of the Matter School of Music, we believe music is more than notes and rhythms. It is a path to confidence, connection, self-expression, and lifelong joy.
        </p>

        <div className="mt-9 grid gap-4 md:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={value}
              className="flex items-center gap-3 rounded-2xl border border-[rgba(58,42,34,0.12)] bg-[rgba(255,247,231,0.62)] p-4 text-left shadow-sm"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] ${
                  index % 2 === 0
                    ? "border-[var(--coral)] text-[var(--coral)]"
                    : "border-[var(--cyan)] text-[var(--cyan)]"
                }`}
                aria-hidden="true"
              >
                <span className="h-3 w-3 rounded-full bg-current" />
              </span>
              <p className="text-sm font-black leading-snug text-[var(--ink)]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
