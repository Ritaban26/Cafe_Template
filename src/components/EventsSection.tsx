import Button from "./Button";

const EVENTS = [
  {
    id: "live-music",
    emoji: "🎵",
    tag: "Every Friday",
    title: "Live Music Fridays",
    description:
      "Unwind with local acoustic sets every Friday evening from 6 PM. Great music, great coffee.",
  },
  {
    id: "comedy",
    emoji: "🎤",
    tag: "Monthly · First Tuesday",
    title: "Stand-up Comedy Nights",
    description:
      "Laugh your week away at our monthly comedy nights. Doors open at 7 PM — book your seat early.",
  },
  {
    id: "latte-art",
    emoji: "☕",
    tag: "Workshop",
    title: "Latte Art Workshop",
    description:
      "Learn milk frothing, pouring techniques, and etching patterns from our in-house baristas.",
  },
  {
    id: "local-artist",
    emoji: "🎨",
    tag: "Monthly Feature",
    title: "Local Artist of the Month",
    description:
      "We showcase a new local creative every month. Talent meets the creative heart of the community.",
  },
];

export default function EventsSection() {
  return (
    <section aria-labelledby="events-heading" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary mb-3">
            What&apos;s On
          </span>
          <h2
            id="events-heading"
            className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-4"
          >
            Events &amp; Experiences
          </h2>
          <p className="text-base sm:text-lg text-text/70 leading-relaxed">
            More than just coffee — come for the vibe, stay for the community.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {EVENTS.map((event) => (
            <article
              key={event.id}
              className="group flex gap-5 bg-background rounded-2xl border border-secondary/15 p-6 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                {event.emoji}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                  {event.tag}
                </span>
                <h3 className="text-lg font-heading font-bold text-primary leading-snug">
                  {event.title}
                </h3>
                <p className="text-sm text-text/70 leading-relaxed mt-1">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
