export function ContactFormPreview() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--coral)]">
            Send a Note
          </p>
          <h2 className="mt-3 font-serif text-5xl font-black text-[var(--ink)]">
            Tell us what you are looking for.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--umber)]">
            This form is a visual preview for the MVP site. For now, the button opens your email app so you can send Elizabeth a message directly.
          </p>
        </div>

        {/* TODO: Wire this form to a proper email/form service in a future iteration. */}
        <form
          action="mailto:elizabethsullivanmusic@gmail.com?subject=Heart%20of%20the%20Matter%20lesson%20inquiry"
          method="post"
          encType="text/plain"
          className="rounded-[32px] border border-[rgba(58,42,34,0.14)] bg-[rgba(255,247,231,0.76)] p-6 shadow-[0_24px_80px_rgba(58,42,34,0.1)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-[var(--ink)]">
              Name
              <input
                name="name"
                type="text"
                className="min-h-12 rounded-xl border border-[rgba(58,42,34,0.18)] bg-white px-4 text-base font-semibold text-[var(--ink)] outline-none focus:border-[var(--cyan)] focus:ring-4 focus:ring-[rgba(16,171,221,0.18)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-[var(--ink)]">
              Email
              <input
                name="email"
                type="email"
                className="min-h-12 rounded-xl border border-[rgba(58,42,34,0.18)] bg-white px-4 text-base font-semibold text-[var(--ink)] outline-none focus:border-[var(--cyan)] focus:ring-4 focus:ring-[rgba(16,171,221,0.18)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-[var(--ink)]">
              Student age if applicable
              <input
                name="student_age"
                type="text"
                className="min-h-12 rounded-xl border border-[rgba(58,42,34,0.18)] bg-white px-4 text-base font-semibold text-[var(--ink)] outline-none focus:border-[var(--cyan)] focus:ring-4 focus:ring-[rgba(16,171,221,0.18)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-[var(--ink)]">
              Instrument or interest
              <select
                name="interest"
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
            Message
            <textarea
              name="message"
              rows={6}
              className="rounded-xl border border-[rgba(58,42,34,0.18)] bg-white px-4 py-3 text-base font-semibold text-[var(--ink)] outline-none focus:border-[var(--cyan)] focus:ring-4 focus:ring-[rgba(16,171,221,0.18)]"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-[var(--coral)] px-6 py-4 text-base font-black text-white shadow-[0_16px_34px_rgba(242,45,33,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--coral-dark)] focus:outline-none focus:ring-4 focus:ring-[rgba(242,45,33,0.25)] sm:w-auto"
          >
            Email Elizabeth
          </button>
        </form>
      </div>
    </section>
  );
}
