import Image from "next/image";
import Button from "./Button";

// ─── Icons ─────────────────────────────────────────────────────────────────

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative w-full min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* ── Background image ── */}
      <Image
        src="/Hero.png"
        alt="Inside Quiet Mug café"
        fill
        priority
        quality={90}
        className="object-cover object-center"
      />

      {/* ── Gradient overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(106,58,23,0.82) 0%, rgba(106,58,23,0.55) 55%, rgba(106,58,23,0.10) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl flex flex-col gap-6">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-background/80">
            <span className="w-8 h-px bg-background/60" />
            Specialty Coffee &amp; More
          </span>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-background">
            Welcome to{" "}
            <span className="block" style={{ color: "var(--secondary)" }}>
              Quiet Mug
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="text-base sm:text-lg text-background/85 leading-relaxed max-w-md">
            Brewed with care, served with heart. Order ahead or come enjoy the
            vibe in person.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            {/*
              Order Online — solid white bg / primary text
              #ffffff on #6a3a17 = 8.36:1 → WCAG AAA ✅
              ! modifiers override the variant's bg/text/border utilities
            */}
            <Button
              variant="primary"
              size="lg"
              className="bg-background! text-primary! border-background! hover:bg-primary! hover:text-background! hover:border-primary! shadow-lg"
            >
              Order Online
            </Button>

            {/*
              Visit Us — white outline on the dark brown overlay
              #ffffff on ~#6a3a17 = 8.36:1 → WCAG AAA ✅
              Hover: #ffffff bg / #6a3a17 text = 8.36:1 → WCAG AAA ✅
            */}
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent! text-background! border-background! hover:bg-background! hover:text-primary! shadow-lg"
            >
              Visit Us
            </Button>
          </div>

          {/* Info badges */}
          <div className="flex flex-wrap gap-4 pt-2">
            {/* Hours */}
            <div className="flex items-center gap-2 bg-background/15 backdrop-blur-sm border border-background/25 text-background rounded-full px-4 py-2 text-sm font-medium">
              <ClockIcon />
              Open Daily: 9 AM – 8 PM
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 bg-background/15 backdrop-blur-sm border border-background/25 text-background rounded-full px-4 py-2 text-sm font-medium">
              <PinIcon />
              123 Bean Street, YourTown
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
