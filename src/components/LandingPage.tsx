import { CountdownTimer } from "./CountdownTimer";
import { FloatingParticles } from "./FloatingParticles";
import { Testimonials } from "./Testimonials";
import { AnimatedCounter } from "./AnimatedCounter";
import { HeroSection } from "./sections/HeroSection";
import { ExpertSection } from "./sections/ExpertSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { CTASection } from "./sections/CTASection";
import { FAQSection } from "./sections/FAQSection";
import { FooterSection } from "./sections/FooterSection";
import { statsData } from "../constants/landingPageData";

interface LandingPageProps {
  onRegisterClick: () => void;
  onContactAdmin: () => void;
  onAdminAccess?: () => void;
}

export function LandingPage({ onRegisterClick, onContactAdmin, onAdminAccess }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative overflow-hidden">
      <FloatingParticles />
      
      <div className="relative z-10 p-4">
        <div className="max-w-6xl mx-auto">
          <HeroSection />
          <ExpertSection />

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {statsData.map((stat, index) => (
              <AnimatedCounter 
                key={index}
                targetValue={stat.targetValue} 
                label={stat.label} 
              />
            ))}
          </div>

          <CTASection onRegisterClick={onRegisterClick} />

          {/* Timer */}
          <div className="mb-12">
            <CountdownTimer />
          </div>

          <BenefitsSection />
          <Testimonials />
          <FAQSection />
          <FooterSection 
            onContactAdmin={onContactAdmin}
            onAdminAccess={onAdminAccess}
          />
        </div>
      </div>
    </div>
  );
}