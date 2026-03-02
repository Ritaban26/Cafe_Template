import Button from "./Button";

export default function PromoBanner() {
  return (
    <section aria-label="Promotion" className="relative overflow-hidden">
      {/* ── Rich gradient background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--primary) 0%, #4a2810 50%, var(--secondary) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Decorative circles ── */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--secondary)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-10"
        style={{ background: "var(--background)" }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left: Copy */}
          <div className="flex flex-col gap-5 max-w-xl text-center lg:text-left">
            {/* Badge */}
            <span
              className="inline-block self-center lg:self-start px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "var(--background)",
                background: "rgba(255,255,255,0.12)",
              }}
            >
              Limited Offer
            </span>

            {/* Headline */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight"
              style={{ color: "var(--background)" }}
            >
              Buy 1, Get 1{" "}
              <span style={{ color: "var(--secondary)" }}>Free</span>
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.80)" }}
            >
              Get a cup of Quiet Mug special — free on your first order. Treat
              yourself or bring a friend and share the moment.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-1">
              <Button
                variant="primary"
                size="lg"
                className="bg-background! text-primary! border-background! hover:bg-secondary/20! hover:text-background! shadow-lg"
              >
                Buy Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent! text-background! border-background! hover:bg-background! hover:text-primary!"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Stat pills */}
          <div className="grid grid-cols-2 gap-4 shrink-0">
            {[
              { value: "50+", label: "Drinks on Menu" },
              { value: "1st", label: "Order Free" },
              { value: "9 AM", label: "Opens Daily" },
              { value: "🤍", label: "Made with Love" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-2xl p-5 text-center gap-1"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "var(--background)",
                }}
              >
                <span className="text-3xl font-heading font-bold">
                  {stat.value}
                </span>
                <span className="text-xs font-medium opacity-75">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
