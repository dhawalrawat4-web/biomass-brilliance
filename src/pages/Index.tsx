import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ChallengeSection from '@/components/ChallengeSection';
import TechnologySection from '@/components/TechnologySection';
import MetricsSection from '@/components/MetricsSection';
import FeedstockSection from '@/components/FeedstockSection';
import ComparisonSection from '@/components/ComparisonSection';
import InstallationsSection from '@/components/InstallationsSection';
import CalculatorSection from '@/components/CalculatorSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ChallengeSection />
        <TechnologySection />
        <MetricsSection />
        <FeedstockSection />
        <ComparisonSection />
        <InstallationsSection />
        <CalculatorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
