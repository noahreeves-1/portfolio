import { CareerSection } from "../components/Career/CareerSection";
import { BrandHighlights } from "../components/BrandHighlights/BrandHighlightsSection";
import { ContactSection } from "../components/Contact/ContactSection";
import { LandingSection } from "../components/Landing/LandingSection";
import { LeafletMap } from "../components/Leaflet/Leaflet";
import Skills from "../components/SkillsSection/SkillsSection";

export function Homepage() {
  return (
    <div>
      <LandingSection />
      <BrandHighlights />
      <LeafletMap />
      <Skills />
      <CareerSection />
    </div>
  );
}
