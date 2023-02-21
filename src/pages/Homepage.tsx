import { CareerSection } from "../components/Career/CareerSection";
import { BrandHighlights } from "../components/BrandHighlights/BrandHighlightsSection";
import { LandingSection } from "../components/Landing/LandingSection";
import { LeafletMap } from "../components/Leaflet/Leaflet";
import { SkillsSection } from "../components/SkillsSection/SkillsSection";
import { Projects } from "../components/Projects/Project";
import { Education } from "../components/Education/Education";

export function Homepage() {
  return (
    <div>
      <LandingSection />
      <BrandHighlights />
      <LeafletMap />
      <SkillsSection />
      <Projects />
      <CareerSection />
      <Education />
    </div>
  );
}
