import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBanner from "@/components/TrustBanner";
import TrustSection from "@/components/TrustSection";
import FeaturesSection from "@/components/FeaturesSection";
import GammaBonus from "@/components/GammaBonus";
import PricingSection from "@/components/PricingSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="dark min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <TrustBanner />
    <FeaturesSection />
    <TrustSection />
    <GammaBonus />
    <PricingSection />
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
