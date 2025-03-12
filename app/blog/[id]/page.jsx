"use client";

import { post_id } from "@/Constants/constant";
import Image from "next/image";
import Link from "next/link";

const BlogPost = ({ params }) => {
  const { id } = params;

  const post = post_id[id];

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-20 px-5 md:px-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto mt-12 text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 font-bold text-gray-800 dark:text-white">
          {post.title}
        </h1>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-48 object-cover mb-8"
        />
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {post.content}
        </p>
        <Link href="/blog" className="text-vibrant-orange underline mt-4">
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
