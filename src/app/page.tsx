import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import EventsSection from "@/components/EventsSection";
import PromoBanner from "@/components/PromoBanner";
import LoyaltySection from "@/components/LoyaltySection";
import MeetingRoomSection from "@/components/MeetingRoomSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-text">
      <Hero />
      <MenuSection />
      <EventsSection />
      <PromoBanner />
      <LoyaltySection />
      <MeetingRoomSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
