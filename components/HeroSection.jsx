"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-[50vh] md:h-[95vh] dark:text-gray-300 text-gray-600 md:px-16 py-20 flex items-center">
      <div className="container mt-8 mx-auto flex justify-between items-center">
        <div className="md:w-1/2 md:text-left z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 mt-6 text-vibrant-orange">
            Meet Annita,
          </h1>
          <h3 className="text-2xl md:text-4xl font-extrabold mb-4 mt-2 text-vibrant-orange">
            Africa's Digital Heartbeat
          </h3>
          <p className="text-xl md:text-2xl mb-10 mt-10">
            Unlocking limitless opportunities for enterprises, individuals,
            small businesses, emerging markets, and startups alike, fostering
            growth and innovation across diverse sectors and communities.
          </p>
          <Link
            href="/marketplace"
            className="bg-black text-vibrant-orange sm:w-4 py-4 px-8 rounded-lg font-semibold transition-colors cursor-pointer"
          >
            Explore Marketplace
          </Link>
        </div>
        <div className="hidden md:block items-center mt-11">
          <Image
            src="/bg_image.png"
            alt="Hero Image"
            width={600}
            height={400}
            className="rounded-lg  transition hover:shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
