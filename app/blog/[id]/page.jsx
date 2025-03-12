"use client";

import { useState } from "react";
import { post_id } from "@/Constants/constant";
import Image from "next/image";
import Link from "next/link";

const BlogPost = ({ params }) => {
  const { id } = params;
  const post = post_id[id];

  // Error handling for undefined post
  if (!post) {
    return (
      <div className="py-20 px-5 md:px-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto mt-12 text-left">
          <h1 className="text-4xl font-bold text-red-500">Post Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The blog post you are looking for does not exist.
          </p>
          <Link href="/blog" className="text-vibrant-orange underline mt-4">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const [likes, setLikes] = useState(post.likes);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments);

  const handleLike = () => {
    setLikes(likes + 1);
    post.likes += 1;
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      setComments([...comments, comment]);
      setComment("");
      post.comments.push(comment);
    }
  };

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
        <button
          onClick={handleLike}
          className="bg-vibrant-orange text-white p-2 rounded-md mt-4"
        >
          Like {likes}
        </button>
        <form onSubmit={handleCommentSubmit} className="mt-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Leave a comment..."
            className="border p-2 rounded-md w-full"
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </form>
        <div className="mt-4">
          <h3 className="font-bold">Comments:</h3>
          {comments.map((c, index) => (
            <p key={index} className="text-gray-600 dark:text-gray-300">
              {c}
            </p>
          ))}
        </div>
        <Link href="/blog" className="text-vibrant-orange underline mt-4">
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
