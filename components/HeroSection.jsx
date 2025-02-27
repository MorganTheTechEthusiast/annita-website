"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-[100%] dark:bg-black/20 dark:text-gray-200 bg-gray-200/20 text-gray-800 py-20">
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Annita</h1>
        <p className="text-lg md:text-xl mb-6">
          Africa's First all-in-one platform,
          <br /> combining e-commerce, Fintech, Artificial Intelligence,
          Communication, Marketing, Logistics, and lifestyle services
        </p>
        <Link
          href="/marketplace"
          className="bg-slate-100 text-vibrant-orange py-3 px-6 rounded-md font-semibold hover:bg-gray-200 border-black/20 border transition cursor-pointer"
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
          className="opacity-20"
        />
      </div>
    </section>
  );
};

export default HeroSection;
