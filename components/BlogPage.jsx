"use client";

import { useState } from "react";
import { post_id } from "@/Constants/constant";
import SearchFilter from "@/components/SearchFilter";
import Link from "next/link";
import Image from "next/image";

const BlogPage = () => {
  const [filteredPosts, setFilteredPosts] = useState(Object.values(post_id));

  // Get featured posts (you can define your own logic for what makes a post featured)
  const featuredPosts = Object.values(post_id).slice(0, 3); // Example: first three posts as featured

  return (
    <section className="py-20 px-5 md:px-20 bg-gray-100 dark:bg-black">
      <div className="container mx-auto text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8">
          Welcome to the Annita Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Discover insights, tips, and stories that empower you to thrive in the
          digital age.
        </p>

        <SearchFilter
          posts={Object.values(post_id)}
          setFilteredPosts={setFilteredPosts}
        />

        {/* Featured Posts Section */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-12 mb-4">
          Featured Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.content.substring(0, 100)}...
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-500 underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* All Posts Section */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-12 mb-4">
          All Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.content.substring(0, 100)}...
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-500 underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
