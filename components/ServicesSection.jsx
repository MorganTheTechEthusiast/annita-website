"use client";

import { services } from "@/Constants/constant";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="py-20 px-5 md:px-20 bg-gray-100 dark:bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl dark:text-gray-300 md:text-8xl text-left font-bold mb-14 md:mt-0">
          Endless payment <br /> possibilities <br />{" "}
          <span className="text-vibrant-orange">for enterprises</span>
        </h2>
        <div className="flex gap-2 justify-center items-center flex-col md:flex-row col-span-1 md:col-span-3">
          {/* Service 1 */}
          <div className="p-6 max-w-[26rem] bg-white dark:bg-black/15 rounded-lg shadow-md gap-4 flex md:max-w-64 items-start flex-col justify-between">
            {services[0].icon}
            <h3 className="text-xl text-left font-semibold mb-2 text-gray-800 dark:text-white">
              {services[0].title}
            </h3>
            <p className="text-gray-600 text-wrap text-left dark:text-gray-300 mb-4">
              {services[0].description}
            </p>
            <Link href="/checkout">
              <button className="bg-black text-vibrant-orange py-2 px-4 rounded-lg font-semibold">
                {services[0].buttonText}
              </button>
            </Link>
          </div>

          {/* Central Image */}
          <div className="">
            <Image
              src="/service-mockup.png"
              alt="Central Service Image"
              width={700}
              height={400}
              layout="responsive"
              className="hidden md:block"
            />
          </div>

          <div className="">
            {/* Service 2 */}
            <div className="p-6 max-w-[26rem] bg-white dark:bg-black/15 rounded-lg shadow-md md:max-w-64 items-start flex flex-col justify-between">
              {services[1].icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {services[1].title}
              </h3>
              <p className="text-gray-600 text-wrap text-left dark:text-gray-300 mb-4">
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
            <div className="p-6 max-w-[26rem] bg-white dark:bg-black/15 rounded-lg shadow-md md:max-w-64 md:mt-10 mt-5 items-start flex flex-col justify-between">
              {services[2].icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {services[2].title}
              </h3>
              <p className="text-gray-600 text-wrap text-left dark:text-gray-300 mb-4">
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
