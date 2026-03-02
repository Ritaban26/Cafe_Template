const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Regular Customer",
    rating: 5,
    quote:
      "Quiet Mug is my go-to spot every morning. The coffee is consistently perfect and the atmosphere is exactly what I need to start my day.",
    initials: "SM",
  },
  {
    id: 2,
    name: "James K.",
    role: "Remote Worker",
    rating: 5,
    quote:
      "I use the meeting rooms weekly. Fast Wi-Fi, great drinks, and the staff are always so welcoming. Honestly the best café workspace in town.",
    initials: "JK",
  },
  {
    id: 3,
    name: "Priya R.",
    role: "Coffee Enthusiast",
    rating: 5,
    quote:
      "The latte art workshop was incredible — I came in knowing nothing and left with a perfect rosetta. Signed up for the next one already!",
    initials: "PR",
  },
  {
    id: 4,
    name: "Tom W.",
    role: "Loyalty Member",
    rating: 5,
    quote:
      "The loyalty programme is genuinely generous. My tenth cup was free, and the birthday treat was a lovely surprise. Can't recommend enough.",
    initials: "TW",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-secondary" : "text-text/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary mb-3">
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-heading font-bold text-primary"
          >
            What Our Customers Say
          </h2>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.id}
              className="flex flex-col gap-4 bg-background rounded-2xl border border-secondary/15 p-6 shadow-sm hover:shadow-md hover:border-secondary/35 transition-all duration-300"
            >
              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p className="text-sm text-text/75 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <footer className="flex items-center gap-3 pt-2 border-t border-secondary/10">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-background">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold font-heading text-primary">
                    {t.name}
                  </cite>
                  <p className="text-xs text-text/50">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
