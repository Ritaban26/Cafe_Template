import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/about" },
  { label: "Loyalty", href: "/loyalty" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-background" aria-label="Site footer">
      {/* ── Newsletter bar ── */}
      <div className="border-b border-background/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-lg font-heading font-bold text-background">
                Stay in the loop ☕
              </p>
              <p className="text-sm text-background/70 mt-1">
                New menus, events, and offers — straight to your inbox.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/logo.png"
                alt="Quiet Mug"
                width={120}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-background/70 leading-relaxed max-w-xs">
              Brewed with care, served with heart. Your neighbourhood café for
              specialty coffee, cosy vibes, and a community worth belonging to.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-background/10 border border-background/15 flex items-center justify-center text-background/75 hover:bg-background/20 hover:text-background transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <p className="text-xs font-bold tracking-widest uppercase text-background/50 mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/75 hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact info */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-background/50 mb-4">
              Visit Us
            </p>
            <ul className="flex flex-col gap-3 text-sm text-background/75">
              <li>
                <p className="font-medium text-background">Address</p>
                123 Bean Street, YourTown
              </li>
              <li>
                <p className="font-medium text-background">Hours</p>
                Open Daily · 9 AM – 8 PM
              </li>
              <li>
                <p className="font-medium text-background">Phone</p>
                <a
                  href="tel:+441234567890"
                  className="hover:text-background transition-colors duration-200"
                >
                  +44 1234 567 890
                </a>
              </li>
              <li>
                <p className="font-medium text-background">Email</p>
                <a
                  href="mailto:hello@quietmug.co"
                  className="hover:text-background transition-colors duration-200"
                >
                  hello@quietmug.co
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Base bar ── */}
      <div className="border-t border-background/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/50">
          <p>© {currentYear} Quiet Mug. All rights reserved.</p>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="hover:text-background/80 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-background/80 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
