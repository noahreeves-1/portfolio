import { CareerSection } from "../components/Career/CareerSection";
import { BrandHighlights } from "../components/BrandHighlights/BrandHighlightsSection";
import { LandingSection } from "../components/Landing/LandingSection";
import { LeafletMap } from "../components/Leaflet/Leaflet";
import { SkillsSection } from "../components/SkillsSection/SkillsSection";
import { Projects } from "../components/Projects/Project";
import { Education } from "../components/Education/Education";
import { WavyBottom } from "../components/WavyTransition/WavyBottom";
import { WavyTop } from "../components/WavyTransition/WavyTop";

export function Homepage() {
  return (
    <div>
      <LandingSection />
      <WavyBottom color="fill-cloud-blue-500" />
      <BrandHighlights />
      <LeafletMap />
      <WavyTop color="fill-cloud-blue-600" />
      <SkillsSection />
      <WavyBottom color="fill-cloud-blue-600" />
      <Projects />
      <WavyTop color="fill-slate-100" />
      <CareerSection />
      <WavyBottom color="fill-slate-100" />
      <Education />
    </div>
  );
}
