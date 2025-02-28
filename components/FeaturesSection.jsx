"use client";

import { FaShoppingCart, FaUsers, FaTools } from "react-icons/fa";

const features = [
  {
    icon: <FaShoppingCart className="text-vibrant-orange text-4xl mb-4" />,
    title: "E-commerce Marketplace",
    description:
      "Explore unique African goods ranging from crafts to local flavors.",
  },
  {
    icon: <FaUsers className="text-vibrant-orange text-4xl mb-4" />,
    title: "Community Hub",
    description:
      "Create and join communities that resonate with the African spirit.",
  },
  {
    icon: <FaTools className="text-vibrant-orange text-4xl mb-4" />,
    title: "Thrive Toolkit",
    description: "Access tools for personal development and business growth.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-300">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
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
