"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

// ─── Nav links ────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/about" },
  { label: "Loyalty", href: "/loyalty" },
  { label: "Contact Us", href: "/contact" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-secondary/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Go to homepage"
          >
            <Image
              src="/logo.png"
              alt="Cafe Logo"
              width={160}
              height={64}
              priority
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "relative px-3 py-1.5 text-sm font-medium text-text",
                  "rounded-md transition-colors duration-200",
                  "hover:text-primary",
                  "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5",
                  "after:bg-primary after:scale-x-0 after:transition-transform after:duration-200",
                  "hover:after:scale-x-100",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── CTA + Mobile toggle ── */}
          <div className="flex items-center gap-3">
            {/* Book a Meeting Room — hidden on small screens */}
            <div className="hidden sm:block">
              <Button variant="primary" size="sm">
                Book a Meeting Room
              </Button>
            </div>

            {/* Hamburger — visible on mobile only */}
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className={[
                "md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5",
                "rounded-md border border-secondary/30",
                "hover:bg-primary/10 transition-colors duration-200 cursor-pointer",
              ].join(" ")}
            >
              <span
                className={[
                  "block h-0.5 w-5 bg-primary rounded-full transition-all duration-300",
                  menuOpen ? "rotate-45 translate-y-2" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-0.5 w-5 bg-primary rounded-full transition-all duration-300",
                  menuOpen ? "opacity-0 scale-x-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-0.5 w-5 bg-primary rounded-full transition-all duration-300",
                  menuOpen ? "-rotate-45 -translate-y-2" : "",
                ].join(" ")}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-96 border-t border-secondary/20" : "max-h-0",
        ].join(" ")}
      >
        <nav
          className="flex flex-col px-4 py-3 gap-1 bg-background"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={[
                "px-3 py-2.5 text-sm font-medium text-text rounded-md",
                "hover:text-primary hover:bg-primary/10",
                "transition-colors duration-200",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA in mobile menu */}
          <div className="pt-2 pb-1">
            <Button variant="primary" size="sm" fullWidth>
              Book a Meeting Room
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
