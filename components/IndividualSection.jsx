"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const IndividualSection = () => {
  return (
    <section className="py-20 px-5 md:px-20 bg-gray-100 dark:bg-black/20">
      <div className="container mx-auto text-left">
        <h2 className="text-5xl mb-16 md:text-8xl font-bold md:mb-20 text-gray-800 dark:text-gray-300">
          Seamless payment solutions for every{" "}
          <span className="text-vibrant-orange">individual</span>
        </h2>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
          Annita provides seamless products for individuals, enabling smooth
          transactions and effective money management.
        </p>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="relative p-6 bg-white dark:bg-black/15 rounded-lg shadow-md transition-transform transform hover:scale-105 z-10">
            <h3 className="text-2xl font-semibold mb-2">
              Send money to loved ones
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Send money to loved ones abroad securely and effortlessly. Our
              platform ensures swift transfers, keeping you connected with
              family and friends while providing peace of mind through robust
              encryption and user-friendly features.
            </p>
            <Link href="/send-money">
              <Button variant="link">Send Money</Button>
            </Link>
          </div>

          {/* Service 2 */}
          <div className="relative p-6 bg-white dark:bg-black/15 rounded-lg shadow-md transition-transform transform hover:scale-105 z-20">
            <h3 className="text-2xl font-semibold mb-2">Shop online</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Experience the convenience of having your favorite products
              delivered right to your doorstep from trusted online retailers,
              making shopping effortless and enjoyable.
            </p>
            <Link href="/shop-online">
              <Button variant="link">Shop Now</Button>
            </Link>
          </div>

          {/* Service 3 */}
          <div className="relative p-6 bg-white dark:bg-black/15 rounded-lg shadow-md transition-transform transform hover:scale-105 z-30">
            <h3 className="text-2xl font-semibold mb-2">
              Find events and Buy tickets
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore a variety of upcoming events and effortlessly secure your
              tickets through our user-friendly Afritickets platform, ensuring
              you never miss out on the experiences that matter to you.
            </p>
            <Link href="/events">
              <Button variant="link">View Events</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualSection;
