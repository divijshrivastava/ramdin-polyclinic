import { DiagnosticsSection } from "../components/diagnostics-section";
import { HeroSection } from "../components/hero-section";
import { MissionSection } from "../components/mission-section";
import { Navigation } from "../components/navigation";
import { PatientSection } from "../components/patient-section";
import { SiteFooter } from "../components/site-footer";
import { SpecialtiesSection } from "../components/specialties-section";
import { StoriesSection } from "../components/stories-section";

export default function HomePage() {
  return (
    <div className="page-shell">
      <Navigation />
      <main>
        <HeroSection />
        <MissionSection />
        <StoriesSection />
        <SpecialtiesSection />
        <DiagnosticsSection />
        <PatientSection />
      </main>
      <SiteFooter />
    </div>
  );
}
