"use client";

import Image from "next/image";
import Link from "next/link";

const SmallBusinessSection = () => {
  return (
    <section className="py-20 px-5  md:px-20 bg-gray-100 dark:bg-black/20">
      <div className="container mx-auto text-left">
        <h2 className="text-6xl font-bold mb-4 text-gray-800 dark:text-gray-300">
          Endless payment possibilities for every{" "}
          <span className="text-vibrant-green">Small Business.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-6 bg-white dark:bg-black/15 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Store</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create a free e-commerce website and start selling worldwide with
              just a few clicks.
            </p>
            <Link href="/store">
              <button className="bg-black text-vibrant-orange py-2 px-4 rounded-lg font-semibold">
                Start Selling
              </button>
            </Link>
          </div>

          {/* Central Image */}
          <div className="flex justify-center items-center col-span-1 md:col-span-3">
            <Image
              src="/home_image2.jpg" // Replace with your image path
              alt="Small Business"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Service 2 */}
          <div className="p-6 bg-white dark:bg-black/15 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Invoices</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Generate professional invoices for your customers and get paid
              from anywhere.
            </p>
            <Link href="/invoices">
              <button className="bg-black text-vibrant-orange py-2 px-4 rounded-lg font-semibold">
                Learn More
              </button>
            </Link>
          </div>

          {/* Service 3 */}
          <div className="p-6 bg-white dark:bg-black/15 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Payment Links</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Receive one-off or recurring payments from anyone, anywhere, via
              your unique payment link.
            </p>
            <Link href="/payment-links">
              <button className="bg-black text-vibrant-orange py-2 px-4 rounded-lg font-semibold">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallBusinessSection;
