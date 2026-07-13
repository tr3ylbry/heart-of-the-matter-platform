export function ContactFormPreview() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--coral)]">
            Send a Note
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black text-[var(--ink)] sm:text-5xl">
            Tell us what you are looking for.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--umber)]">
            Direct email is currently the fastest way to reach Elizabeth. This
            form opens your email app with the details you provide.
          </p>
        </div>

        {/* TODO: Wire this form to a proper email/form service in a future iteration. */}
        <form
          action="mailto:heartofthemattermusic@gmail.com?subject=Heart%20of%20the%20Matter%20lesson%20inquiry"
          method="post"
          encType="text/plain"
          className="rounded-2xl border border-[rgba(58,42,34,0.12)] bg-[rgba(255,247,231,0.7)] p-6 shadow-[0_12px_40px_rgba(58,42,34,0.07)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-[var(--ink)]">
              Name *
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                className="min-h-12 rounded-xl border border-[rgba(58,42,34,0.18)] bg-white px-4 text-base font-semibold text-[var(--ink)] outline-none focus:border-[var(--cyan)] focus:ring-4 focus:ring-[rgba(16,171,221,0.18)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-[var(--ink)]">
              Email *
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-h-12 rounded-xl border border-[rgba(58,42,34,0.18)] bg-white px-4 text-base font-semibold text-[var(--ink)] outline-none focus:border-[var(--cyan)] focus:ring-4 focus:ring-[rgba(16,171,221,0.18)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-[var(--ink)]">
              Student age if applicable
              <input
                name="student_age"
                type="text"
                inputMode="numeric"
                className="min-h-12 rounded-xl border border-[rgba(58,42,34,0.18)] bg-white px-4 text-base font-semibold text-[var(--ink)] outline-none focus:border-[var(--cyan)] focus:ring-4 focus:ring-[rgba(16,171,221,0.18)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-[var(--ink)]">
              Instrument or interest *
              <select
                name="interest"
                autoComplete="off"
                required
                className="min-h-12 rounded-xl border border-[rgba(58,42,34,0.18)] bg-white px-4 text-base font-semibold text-[var(--ink)] outline-none focus:border-[var(--cyan)] focus:ring-4 focus:ring-[rgba(16,171,221,0.18)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose an option
                </option>
                <option>Piano</option>
                <option>Voice</option>
                <option>Guitar</option>
                <option>Bass</option>
                <option>Drums</option>
                <option>Songwriting</option>
                <option>Music theory / ear training</option>
                <option>Not sure yet</option>
              </select>
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-black text-[var(--ink)]">
            Message *
            <textarea
              name="message"
              rows={6}
              autoComplete="off"
              required
              className="rounded-xl border border-[rgba(58,42,34,0.18)] bg-white px-4 py-3 text-base font-semibold text-[var(--ink)] outline-none focus:border-[var(--cyan)] focus:ring-4 focus:ring-[rgba(16,171,221,0.18)]"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-[var(--ink)] px-6 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--umber)] focus:outline-none focus:ring-4 focus:ring-[rgba(23,20,18,0.2)] sm:w-auto"
          >
            Email Elizabeth
          </button>
        </form>
      </div>
    </section>
  );
}
