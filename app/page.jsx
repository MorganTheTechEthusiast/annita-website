import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div>
      <section>
        {/* Hero */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />
      </section>
    </div>
  );
};

export default Home;
