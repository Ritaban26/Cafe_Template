import Button from "./Button";

const FEATURES = [
  { emoji: "🔒", label: "Private & Quiet" },
  { emoji: "📶", label: "Fast Wi-Fi" },
  { emoji: "🔌", label: "Power Points" },
  { emoji: "☕", label: "Drinks Included" },
];

export default function MeetingRoomSection() {
  return (
    <section aria-labelledby="meeting-heading" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left: Copy ── */}
          <div className="flex flex-col gap-6">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary">
              Meeting Space
            </span>

            <h2
              id="meeting-heading"
              className="text-4xl sm:text-5xl font-heading font-bold text-primary leading-tight"
            >
              Your Cosy Corner for Focus &amp; Collaboration
            </h2>

            <p className="text-base sm:text-lg text-text/70 leading-relaxed">
              Reserve a private nook or table for studying, meetings, or focused
              work. Enjoy fast Wi-Fi, power points, and your favourite brew —
              the perfect productive escape.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {FEATURES.map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-background border border-secondary/25 text-text"
                >
                  {f.emoji} {f.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="primary" size="lg">
                Book Now
              </Button>
              <Button variant="outline" size="md">
                View Packages
              </Button>
            </div>
          </div>

          {/* ── Right: Visual card ── */}
          <div className="relative">
            {/* Main card */}
            <div
              className="relative rounded-3xl overflow-hidden h-96 flex flex-col justify-end p-8"
              style={{
                background:
                  "linear-gradient(160deg, var(--secondary) 0%, var(--primary) 100%)",
              }}
            >
              {/* Background decorative text */}
              <span
                className="absolute top-8 right-8 text-8xl font-heading font-bold select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.08)" }}
                aria-hidden="true"
              >
                QM
              </span>

              <div className="relative z-10 flex flex-col gap-2">
                <p className="text-sm font-semibold tracking-widest uppercase text-background/70">
                  Available Daily
                </p>
                <p className="text-3xl font-heading font-bold text-background">
                  Book a Meeting Room
                </p>
                <p className="text-sm text-background/75 mt-1">
                  9 AM – 8 PM · 123 Bean Street, YourTown
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 bg-background rounded-2xl shadow-md border border-secondary/20 px-5 py-3 flex flex-col items-center">
              <span className="text-2xl font-heading font-bold text-primary">
                From £5
              </span>
              <span className="text-xs text-text/60 font-medium">per hour</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
