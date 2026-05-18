import { AboutSection } from "./components/AboutSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { EducationSection } from "./components/EducationSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0C0C0C] text-zinc-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <TestimonialsSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
}
