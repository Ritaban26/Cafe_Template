"use client";

import Button from "./Button";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full sm:w-auto gap-2"
      aria-label="Newsletter signup"
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        required
        placeholder="your@email.com"
        className="flex-1 sm:w-64 px-4 py-2.5 rounded-lg text-sm bg-background/10 border border-background/25 text-background placeholder:text-background/45 focus:outline-none focus:ring-2 focus:ring-background/50"
      />
      <Button type="submit" variant="secondary" size="sm" className="shrink-0">
        Subscribe
      </Button>
    </form>
  );
}
