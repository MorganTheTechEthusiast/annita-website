import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ShowCaseSection from "@/components/ShowCaseSection";
import TrustedBySection from "@/components/TrustedBySection";
import SmallBusinessSection from "@/components/SmallBusinessSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <section>
        {/* Hero */}
        <HeroSection />

        {/* ShowCase Section */}
        <ShowCaseSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* TrustedBy Section */}
        <TrustedBySection />
        {/* Services Section */}
        <ServicesSection />

        {/* Small Business Section */}
        <SmallBusinessSection />
      </section>
    </div>
  );
};

export default Home;
