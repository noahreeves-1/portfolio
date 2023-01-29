import { AboutSection } from "../components/AboutSection";
import { BrandHighlights } from "../components/BrandHighlights/BrandHighlightsSection";
import { ContactSection } from "../components/ContactSection";
import { LandingSection } from "../components/LandingSection";
import { LeafletMap } from "../components/Leaflet/Leaflet";
import Skills from "../components/SkillsSection/SkillsSection";

export function Homepage() {
  return (
    <div>
      <LandingSection />
      <BrandHighlights />
      <LeafletMap />
      <Skills />
      <a href="/resume">
        <p className="py-6 text-center text-cloud-blue-400 text-sm shadow-md sm:text-lg sm:py-12">
          Click here for my resume
        </p>
      </a>
      <AboutSection />
      <ContactSection />
    </div>
  );
}
