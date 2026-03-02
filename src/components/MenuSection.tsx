import Image from "next/image";
import Button from "./Button";

const MENU_ITEMS = [
  {
    id: "coffee",
    title: "Coffee",
    description:
      "From velvety flat whites to bold espresso shots — every cup brewed to order.",
    image: "/menu-coffee.jpg",
    bg: "bg-primary/10",
  },
  {
    id: "tea",
    title: "Tea",
    description:
      "Handpicked loose-leaf blends, from calming chamomile to energising matcha.",
    image: "/menu-tea.jpg",
    bg: "bg-secondary/10",
  },
  {
    id: "pastries",
    title: "Pastries",
    description:
      "Freshly baked croissants, muffins, and cakes — the perfect companion to your cup.",
    image: "/menu-pastries.jpg",
    bg: "bg-primary/5",
  },
];

export default function MenuSection() {
  return (
    <section aria-labelledby="menu-heading" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary mb-3">
            Our Menu
          </span>
          <h2
            id="menu-heading"
            className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-4"
          >
            Something for Every Mood
          </h2>
          <p className="text-base sm:text-lg text-text/70 leading-relaxed">
            Each cup is a story — we&apos;ve got a perfect blend for all your
            moods.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl overflow-hidden border border-secondary/15 bg-background shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Card image */}
              <div
                className={`relative h-56 w-full ${item.bg} overflow-hidden`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Fallback overlay label when image missing */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-heading font-bold text-primary/20 select-none">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text/70 leading-relaxed mb-4">
                  {item.description}
                </p>
                <Button variant="outline" size="sm">
                  View {item.title}
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            See Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
