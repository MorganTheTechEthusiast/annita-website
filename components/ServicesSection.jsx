"use client";

import { FaCreditCard, FaMoneyBillWave, FaHandshake } from "react-icons/fa";

const services = [
  {
    icon: <FaCreditCard className="text-vibrant-orange text-4xl mb-4" />,
    title: "Online Checkout",
    description:
      "Our online checkout features our smart payment ordering system, incredible speed, and beautiful simplicity.",
    buttonText: "Get Started",
  },
  {
    icon: <FaMoneyBillWave className="text-vibrant-orange text-4xl mb-4" />,
    title: "Accept Payments",
    description:
      "Easily receive money from anyone, anywhere in the world via our multitude of secure payment methods.",
    buttonText: "Learn More",
  },
  {
    icon: <FaHandshake className="text-vibrant-orange text-4xl mb-4" />,
    title: "Transfers (Payout)",
    description:
      "Make single or bulk transfers to bank accounts from your Flutterwave dashboard.",
    buttonText: "Learn More",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-300">
          Endless payment possibilities for enterprises
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <button className="bg-black text-vibrant-orange py-2 px-4 rounded-lg font-semibold">
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
