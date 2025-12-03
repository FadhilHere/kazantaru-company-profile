import HeroCarousel from "./components/HeroCarousel";
import CompanyOverview from "./components/CompanyOverview";
import FoundersMessage from "./components/FoundersMessage";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <CompanyOverview />
      <FoundersMessage />
    </main>
  );
}
