import Link from "next/link";
import { ButterflyMark } from "@/components/ButterflyMark";

const quickLinks = [
  { label: "Lessons", href: "/lessons" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Book", href: "/book" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="px-4 pb-8 pt-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 border-t border-[rgba(58,42,34,0.16)] pt-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <ButterflyMark size="sm" />
          <p className="mt-4 max-w-xs font-serif text-2xl font-bold italic text-[var(--cyan)]">
            Music for the heart. Skills for life.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--ink)]">
            Contact
          </h2>
          <address className="mt-4 space-y-2 not-italic text-sm font-semibold leading-6 text-[var(--umber)]">
            <p>
              <a href="mailto:elizabethsullivanmusic@gmail.com" className="hover:text-[var(--coral)]">
                elizabethsullivanmusic@gmail.com
              </a>
            </p>
            <p>Serving students online and in person</p>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--ink)]">
            Quick Links
          </h2>
          <nav aria-label="Footer navigation" className="mt-4 grid gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[var(--umber)] hover:text-[var(--coral)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--ink)]">
            Follow Along
          </h2>
          <div className="mt-4 flex gap-3" aria-label="Social links coming soon">
            {["f", "ig", "yt", "tk"].map((label) => (
              <span
                key={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] text-xs font-black uppercase text-white"
              >
                {label}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-[var(--umber)]">
            Where music meets heart.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-[rgba(58,42,34,0.1)] pt-5 text-xs font-semibold text-[var(--umber)] sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 Heart of the Matter School of Music. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="#" className="hover:text-[var(--coral)]">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-[var(--coral)]">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
