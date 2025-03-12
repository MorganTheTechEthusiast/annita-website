"use client";

import { useState } from "react";
import { post_id } from "@/Constants/constant";
import SearchFilter from "@/components/SearchFilter";
import Link from "next/link";
import Image from "next/image";

const BlogPage = () => {
  const [filteredPosts, setFilteredPosts] = useState(Object.values(post_id));

  console.log(filteredPosts);

  return (
    <section className="py-20 px-5 md:px-20 bg-gray-100 dark:bg-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8 mt-10">
          Annita <span className="text-vibrant-orange">Blog</span>
        </h1>
        <div className="mb-8 md:mb-0 md:ml-4">
          <SearchFilter
            posts={Object.values(post_id)}
            setFilteredPosts={setFilteredPosts}
          />
        </div>
      </div>
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
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {post.content.substring(0, 100)}...
            </p>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-500 underline"
              onClick={(e) => {
                if (!post.id) {
                  e.preventDefault();
                  alert("Post not found");
                }
              }}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
