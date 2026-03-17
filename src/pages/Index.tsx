import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";
import AIAgentButton from "@/components/AIAgentButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <ProfileSection />
      <ProjectsSection />
      <Footer />
      <AIAgentButton />
    </main>
  );
};

export default Index;
