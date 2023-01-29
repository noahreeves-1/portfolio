import { AboutSection } from "../components/AboutSection";
import { BrandHighlights } from "../components/BrandHighlights/BrandHighlightsSection";
import { ContactSection } from "../components/ContactSection";
import { LandingSection } from "../components/LandingSection";
import { LeafletMap } from "../components/Leaflet/Leaflet";
import Skills from "../components/SkillsSection/SkillsSection";
import { TimelineSection } from "../components/TimelineSection";

export function Homepage() {
  return (
    <div>
      <LandingSection />
      <BrandHighlights />
      <LeafletMap />
      <Skills />
      <TimelineSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
