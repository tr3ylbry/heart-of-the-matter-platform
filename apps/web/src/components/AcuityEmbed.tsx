const bookingSteps = [
  {
    title: "Choose your lesson",
    text: "Choose a free trial, drop-in lesson, or monthly package.",
  },
  {
    title: "Pick a time",
    text: "Select a time from Elizabeth's current availability.",
  },
  {
    title: "Receive confirmation",
    text: "Get your lesson details and confirmation automatically.",
  },
];

export function getAcuitySchedulerUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_ACUITY_SCHEDULER_URL?.trim();

  if (!configuredUrl) {
    return null;
  }

  try {
    const schedulerUrl = new URL(configuredUrl);

    return schedulerUrl.protocol === "https:" ? schedulerUrl.toString() : null;
  } catch {
    return null;
  }
}

export function AcuityEmbed() {
  const schedulerUrl = getAcuitySchedulerUrl();

  // TODO: Confirm final Acuity embed URL after Liz configures appointment types and Google Calendar sync.
  if (schedulerUrl) {
    return (
      <section
        id="scheduler"
        aria-labelledby="scheduler-heading"
        className="scroll-mt-28 px-4 py-14 sm:px-6 lg:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--coral)]">
              Schedule Online
            </p>
            <h2
              id="scheduler-heading"
              className="mt-3 font-serif text-4xl font-black text-[var(--ink)] sm:text-5xl"
            >
              Choose your lesson time.
            </h2>
          </div>
          <div className="mt-9 overflow-hidden rounded-2xl border border-[rgba(58,42,34,0.12)] bg-white shadow-[0_18px_55px_rgba(58,42,34,0.08)]">
            <iframe
              src={schedulerUrl}
              title="Schedule a lesson with Heart of the Matter School of Music"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-[900px] w-full border-0 sm:h-[1000px]"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--coral)]">
            Coming Soon
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black text-[var(--ink)] sm:text-5xl">
            A simple online scheduling flow.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[var(--umber)]">
            Once Acuity scheduling is configured, booking will happen here in
            three clear steps.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 lg:grid-cols-3">
          {bookingSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-[rgba(58,42,34,0.12)] bg-[rgba(255,247,231,0.72)] p-6 shadow-[0_8px_24px_rgba(58,42,34,0.05)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--coral)] text-lg font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 font-serif text-3xl font-black text-[var(--ink)]">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--umber)]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-[28px] bg-[linear-gradient(100deg,rgba(16,171,221,0.16),rgba(255,247,231,0.9)_52%,rgba(245,197,0,0.2))] p-6 text-center shadow-[0_20px_70px_rgba(58,42,34,0.1)] sm:p-8">
          <h2 className="font-serif text-3xl font-black text-[var(--ink)] sm:text-4xl">
            Ready to start the conversation now?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[var(--umber)]">
            Email Elizabeth with the student age, instrument or interest, and
            general availability.
          </p>
          <a
            href="mailto:heartofthemattermusic@gmail.com?subject=Free%20trial%20lesson%20request"
            className="mt-6 inline-flex min-h-14 items-center justify-center rounded-lg bg-[var(--coral)] px-7 py-4 text-base font-black text-white shadow-[0_16px_34px_rgba(226,43,32,0.24)] hover:bg-[var(--coral-dark)]"
          >
            Start with a Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
