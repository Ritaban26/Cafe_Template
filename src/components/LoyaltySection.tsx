import Button from "./Button";

const PERKS = [
  {
    emoji: "⭐",
    title: "Earn Points",
    desc: "1 point for every £1 spent on food and drinks.",
  },
  {
    emoji: "🎁",
    title: "Free Drinks",
    desc: "Unlock a free drink every 10 visits — our treat.",
  },
  {
    emoji: "🎂",
    title: "Birthday Bonus",
    desc: "A complimentary treat on your birthday, every year.",
  },
  {
    emoji: "🔔",
    title: "Early Access",
    desc: "Be first to hear about new menus, events, and offers.",
  },
];

export default function LoyaltySection() {
  return (
    <section aria-labelledby="loyalty-heading" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-secondary/20 shadow-sm bg-primary/5">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* ── Left: Copy ── */}
            <div className="flex flex-col justify-center gap-6 p-10 lg:p-14">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary">
                Join the Club
              </span>

              <h2
                id="loyalty-heading"
                className="text-4xl sm:text-5xl font-heading font-bold text-primary leading-tight"
              >
                Loyalty That&apos;s Worth Savouring
              </h2>

              <p className="text-base sm:text-lg text-text/70 leading-relaxed">
                Earn points with every purchase and unlock free drinks,
                exclusive perks, and birthday surprises. Coffee tastes better
                when it loves you back.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" size="lg">
                  Sign Up for Loyalty
                </Button>
                <Button variant="outline" size="md">
                  Learn More
                </Button>
              </div>
            </div>

            {/* ── Right: Perk cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-secondary/15 border-t lg:border-t-0 lg:border-l border-secondary/15">
              {PERKS.map((perk) => (
                <div
                  key={perk.title}
                  className="flex flex-col gap-3 p-7 bg-background hover:bg-primary/5 transition-colors duration-200"
                >
                  <span className="text-3xl">{perk.emoji}</span>
                  <h3 className="text-base font-heading font-bold text-primary">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-text/65 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
