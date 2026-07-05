import Link from "next/link";
import { ButterflyMark } from "@/components/ButterflyMark";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Lessons", href: "/lessons" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Book", href: "/book" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(58,42,34,0.08)] bg-[rgba(245,233,208,0.86)] px-4 py-4 backdrop-blur-md sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <Link href="/" aria-label="Heart of the Matter School of Music home">
          <ButterflyMark />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-sm font-bold text-[var(--ink)] lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="underline-offset-8 transition hover:text-[var(--coral)] hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book"
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--coral)] px-4 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(242,45,33,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--coral-dark)] focus:outline-none focus:ring-4 focus:ring-[rgba(242,45,33,0.25)] sm:px-5"
        >
          Book a Free Trial
        </Link>
      </div>
    </header>
  );
}
