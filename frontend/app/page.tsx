import HeroCarousel from "./components/HeroCarousel";
import CompanyOverview from "./components/CompanyOverview";
import FoundersMessage from "./components/FoundersMessage";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <CompanyOverview />
      <FoundersMessage />
      <ExperienceSection />
    </main>
  );
}
