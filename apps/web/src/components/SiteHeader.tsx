"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButterflyMark } from "@/components/ButterflyMark";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Lessons", href: "/lessons" },
  { label: "Programs", href: "/programs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book", href: "/book" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ariaCurrent = (href: string) =>
    !href.includes("#") && pathname === href ? "page" : undefined;

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(58,42,34,0.08)] bg-[rgba(245,233,208,0.92)] px-4 py-3 backdrop-blur-md sm:px-6 sm:py-4 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex min-w-0 items-center justify-between gap-3 lg:gap-5">
          <Link
            href="/"
            aria-label="Heart of the Matter School of Music home"
            className="min-w-0"
          >
            <ButterflyMark />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-5 text-sm font-bold text-[var(--ink)] xl:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={ariaCurrent(item.href)}
                className="underline-offset-8 transition hover:text-[var(--coral)] hover:underline aria-[current=page]:text-[var(--coral)] aria-[current=page]:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg border-2 border-[var(--ink)] bg-[var(--paper)] px-3 py-2 text-sm font-black text-[var(--ink)] xl:hidden"
          >
            <span aria-hidden="true" className="grid w-4 gap-1">
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </span>
            {isMenuOpen ? "Close" : "Menu"}
          </button>

          <Link
            href="/book"
            className="hidden min-h-12 items-center justify-center rounded-lg bg-[var(--coral)] px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(226,43,32,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--coral-dark)] xl:inline-flex"
          >
            Book a Free Trial
          </Link>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mt-3 grid gap-1 border-t border-[rgba(58,42,34,0.12)] pt-3 xl:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={ariaCurrent(item.href)}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-bold text-[var(--ink)] hover:bg-[var(--paper)] hover:text-[var(--coral)] aria-[current=page]:bg-[var(--paper)] aria-[current=page]:text-[var(--coral)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--coral)] px-5 py-3 text-base font-black text-white shadow-[0_14px_30px_rgba(226,43,32,0.24)] hover:bg-[var(--coral-dark)]"
            >
              Book a Free Trial
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
