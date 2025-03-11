import Link from "next/link";

const NotFoundPage = () => {
  return (
    <notfound className=" mt-8 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black/25 ">
      <h1 className="md:text-8xl text-6xl font-bold text-vibrant-orange">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
        The page you are looking for does not exist. It might have been removed
        or you may have entered the wrong URL.{" "}
        <span className="md:block hidden">
          <br />
        </span>
        Maybe still under development I guess 🤔
      </p>
      <Link
        href="/"
        className="bg-black text-vibrant-orange py-2 px-4 rounded-lg font-semibold transition-colors hover:bg-vibrant-orange hover:text-white"
      >
        Go Back Home
      </Link>
    </notfound>
  );
};

export default NotFoundPage;
