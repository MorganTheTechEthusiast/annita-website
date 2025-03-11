import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="px-6 py-12 md:px-20 md:py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* About Annita Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Annita</h2>
            <p className="text-gray-600 leading-relaxed">
            Annita is Africa’s first fully independent all-in-one digital 
            ecosystem, combining e-commerce, fintech, AI, social networking, marketing, logistics, and lifestyle services into a seamless platform. We are redefining the digital economy by providing businesses and individuals with the tools to buy, sell, pay, connect,
             and grow—all within a unified, self-sustaining ecosystem.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/packaging.jpg"
              alt="Annita"
              width={400}
              height={400}
              className="rounded-lg shadow-lg w-full md:w-3/4"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
            To build a powerful, self-sufficient digital ecosystem that empowers African businesses and individuals by integrating commerce, payments, logistics, AI, and social networking into one unified platform. Annita is committed to eliminating third-party dependencies, fostering economic growth, 
            and enabling MSMEs to scale efficiently across Africa.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/close.jpg"
              alt="Mission"
              className="rounded-lg shadow-lg w-full md:w-3/4"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
            To become Africa’s most innovative super app, empowering millions of users and businesses 
            with an integrated platform that revolutionizes trade, communication, and financial transactions, ultimately transforming how people live, work,
             and thrive across the continent.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/Basket.jpg"
              alt="Vision"
              className="rounded-lg shadow-lg w-full md:w-3/4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
