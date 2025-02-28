"use client";

import { services } from "@/Constants/services";
import Image from "next/image";
import { Button } from "./ui/button";

const ServicesSection = () => {
  return (
    <section className="py-20 px-10 md:px-16 bg-gray-100 dark:bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl text-left font-bold mb-8 text-vibrant-orange">
          Endless payment <br /> possibilities <br /> for enterprises
        </h2>
        <div className="flex justify-center items-center col-span-1 md:col-span-3">
          {/* Service 1 */}
          <div className="p-4 items-start">
            {services[0].icon}
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {services[0].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {services[0].description}
            </p>
            <button className="bg-black text-vibrant-orange py-2 px-4 rounded-lg font-semibold">
              {services[0].buttonText}
            </button>
          </div>

          {/* Central Image */}
          <div className="">
            <Image
              src="/service-mockup.png"
              alt="Central Service Image"
              width={700}
              height={400}
              className="hidden md:block"
            />
          </div>

          <div className="">
            {/* Service 2 */}
            <div className="p-4">
              {services[1].icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {services[1].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {services[1].description}
              </p>
              <Button
                variant="link"
                className="text-vibrant-orange py-2 px-4 rounded-lg font-semibold"
              >
                {services[1].buttonText}
              </Button>
            </div>

            {/* Service 3 */}
            <div className="p-6 items-center flex flex-col justify-between">
              {services[2].icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {services[2].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {services[2].description}
              </p>
              <Button
                variant="link"
                className="text-vibrant-orange py-2 px-4 rounded-lg font-semibold"
              >
                {services[2].buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
