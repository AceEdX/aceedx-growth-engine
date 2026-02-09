import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StrategySection from "@/components/StrategySection";
import BlogTopicsSection from "@/components/BlogTopicsSection";
import SummarySection from "@/components/SummarySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StrategySection />
        <BlogTopicsSection />
        <SummarySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
