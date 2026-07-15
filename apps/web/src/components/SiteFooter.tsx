import Link from "next/link";
import { ButterflyMark } from "@/components/ButterflyMark";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Lessons", href: "/lessons" },
  { label: "Programs", href: "/programs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book", href: "/book" },
  { label: "About", href: "/about" },
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
              <a
                href="mailto:heartofthemattermusic@gmail.com"
                className="[overflow-wrap:anywhere] hover:text-[var(--coral)]"
              >
                heartofthemattermusic@gmail.com
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
          {/* TODO: Replace social placeholders with real Instagram and YouTube URLs. */}
          <div
            className="mt-4 grid gap-2"
            aria-label="Social profiles coming soon"
          >
            {["Instagram", "YouTube"].map((label) => (
              <span
                key={label}
                className="text-sm font-bold text-[var(--umber)]"
              >
                {label} - Coming soon
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-[var(--umber)]">
            Where music meets heart.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-[rgba(58,42,34,0.1)] pt-5 text-xs font-semibold text-[var(--umber)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          (c) 2026 Heart of the Matter School of Music. All rights reserved.
        </p>
        {/* TODO: Link Privacy Policy and Terms when the documents are approved. */}
        <div className="flex gap-5" aria-label="Legal pages coming soon">
          <span>Privacy Policy - Coming soon</span>
          <span>Terms - Coming soon</span>
        </div>
      </div>
    </footer>
  );
}
