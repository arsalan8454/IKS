import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Lines from "../components/Lines";
import MindMap from "../components/MindMap";
import ComparisonTable from "../components/ComparisonTable";
import PhilosophySection from "../components/PhilosophySection";
import Timeline from "../components/Timeline";
import FooterSection from "../components/FooterSection";

export default function LandingPage() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Lines />
    <MindMap />
    <ComparisonTable />
    <PhilosophySection />
    <Timeline />    
    <FooterSection />    
    </>
  );
}