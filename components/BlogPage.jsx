"use client";

import { posts } from "@/Constants/constant";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  return (
    <section className="py-20 px-5 md:px-20 bg-gray-100 dark:bg-gray-900 mt-16">
      <div className="container mx-auto text-left">
        <h2 className="text-4xl md:text-5xl mb-8 md:mb-16 md:text-8xl font-bold text-gray-800 dark:text-white">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <Link href={post.link}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="bg-vibrant-orange text-black py-2 px-4 rounded-lg font-semibold">
                    Read More
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
