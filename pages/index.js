import MainHero from "../components/hero/MainHero";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/section/AboutSection";
import ContactSection from "../components/section/ContactSection";
import ResumeSection from "../components/section/ResumeSection";
import SpaceFiller from "../components/space-fillers/SpaceFiller";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainHero />
      <AboutSection />
      <SpaceFiller />
      <ResumeSection />
      <SpaceFiller />
      <ContactSection />
      <SpaceFiller />
    </div>
  );
}
