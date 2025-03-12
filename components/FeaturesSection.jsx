"use client";

import { features } from "@/Constants/constant";

const FeaturesSection = () => {
  return (
    <section className="py-20 px-5 md:px-20 md:-mt-36 bg-gray-100 dark:bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl mb-16 md:text-8xl font-bold md:mb-20 text-gray-800 dark:text-gray-300">
          Key <span className="text-vibrant-orange">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-black/15 rounded-lg shadow-md"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
