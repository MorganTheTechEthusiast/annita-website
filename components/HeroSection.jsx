"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-[100%] bg-gradient-to-r from-vibrant-orange to-vibrant-yellow text-gray-100 py-20">
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Annita
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Africa's First all-in-one platform,
          <br /> combining e-commerce, Fintech, AI, and lifestyle services.
        </p>
        <Link
          href="/marketplace"
          className="bg-white text-vibrant-orange py-3 px-6 rounded-md font-semibold hover:bg-gray-200 transition cursor-pointer"
        >
          Explore Marketplace
        </Link>
      </div>
      <div className="absolute inset-0">
        <Image
          src="/bg.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
    </section>
  );
};

export default HeroSection;
