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
      <div className="md:flex md:max-w-[50rem] md:px-5 px-10 items-center justify-center  md:relative md:ml-[50rem] md:bottom-52">
        <p className="md:text-wrap md:text-left text-4xl font-thin">
          <span className="text-vibrant-purple bg-vibrant-blue">Whether</span>{" "}
          you're sending money to family, launching your online store, managing
          global transactions for your enterprise, or creating innovative
          financial solutions as a startup,{" "}
          <span className="text-vibrant-orange">Annita</span>{" "}
          <span className="bg-vibrant-orange text-white p-2">empowers</span> you
          to explore limitless possibilities. The real question isn't what you
          can achieve—it's what will you create next?
        </p>
      </div>
    </section>
  );
};

export default ShowCaseSection;
