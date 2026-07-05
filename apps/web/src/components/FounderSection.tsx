import Image from "next/image";

export function FounderSection() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-10">
      <div className="butterfly-line right-[-88px] top-24 h-72 w-72 opacity-45" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[36px] bg-[linear-gradient(100deg,rgba(16,171,221,0.18),rgba(255,247,231,0.86)_55%,rgba(245,197,0,0.18))] p-6 sm:p-8 lg:grid-cols-[0.75fr_1fr_0.9fr] lg:p-10">
        <div className="relative min-h-80 overflow-hidden rounded-[40px] bg-[linear-gradient(160deg,#f5c500,#f7b8a7_45%,#10abdd)] shadow-[0_24px_70px_rgba(58,42,34,0.18)]">
          <Image
            src="/elizabeth-sullivan-headshot.png"
            alt="Elizabeth Sullivan, Founder and Lead Educator"
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--coral)]">
            Meet Our Founder
          </p>
          <h2 className="mt-3 font-serif text-5xl font-black text-[var(--ink)]">
            Elizabeth Sullivan.
          </h2>
          <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-[var(--umber)]">
            Founder & Lead Educator
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--umber)]">
            With over 20 years of teaching experience, Elizabeth creates a supportive space where students feel seen, inspired, and empowered to discover their unique musical voice.
          </p>
        </div>

        <figure className="rounded-3xl bg-[rgba(255,247,231,0.86)] p-7 shadow-[0_20px_60px_rgba(58,42,34,0.1)]">
          <blockquote className="font-serif text-2xl font-bold leading-snug text-[var(--ink)]">
            My greatest joy is helping students discover not just how to make music, but the confidence to be themselves through it.
          </blockquote>
          <figcaption className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-[var(--coral)]">
            Elizabeth Sullivan
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
