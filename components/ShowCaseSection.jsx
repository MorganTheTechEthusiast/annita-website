import Image from "next/image";
import React from "react";

const ShowCaseSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-black/20">
      <div className="flex col-span-1 md:col-span-2">
        <div className="relative bottom-5 w-[50rem]">
          <Image
            src="/home_image.jpg"
            width={600}
            height={400}
            className="mb-20 hidden md:block relative object-cover"
            layout="responsive"
            alt="Person Image"
          />
        </div>
        <div className="relative bottom-[12rem] ml-[8.5rem] flex">
          <Image
            src="/home_image3.jpg"
            width={600}
            height={400}
            className="mb-20 hidden md:block relative object-cover"
            layout="responsive"
            alt="Person Image"
          />
        </div>
      </div>
      <div className="flex md:max-w-[30rem] md:px-0 px-20 items-center justify-center  md:relative flex-wrap right-0 md:ml-[50rem] md:bottom-56">
        <p className="text-wrap text-3xl font-thin">
          Send money home to loved ones, sell online as a small business,
          process global payments as an enterprise, build financial products as
          a startup. With Flutterwave, the question isn't what's possible—it is:
          what isn't?
        </p>
      </div>
    </section>
  );
};

export default ShowCaseSection;
