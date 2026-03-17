import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";
import AIAgentButton from "@/components/AIAgentButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <ProfileSection />
      <ProjectsSection />
      <Footer />
      <AIAgentButton />
    </main>
  );
};

export default Index;
