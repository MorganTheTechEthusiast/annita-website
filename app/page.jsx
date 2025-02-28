import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import React from "react";

const Home = () => {
  return (
    <div>
      <section>
        {/* Hero */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* TrustedBy Section */}
        <TrustedBySection />
      </section>
    </div>
  );
};

export default Home;
