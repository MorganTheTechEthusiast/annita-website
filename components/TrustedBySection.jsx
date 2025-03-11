"use client";

import Image from "next/image";

const TrustedBySection = () => {
  return (
    <section className="py-20 px-5 md:px-20 bg-gray-100 dark:bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl mb-3 text-black/60 dark:text-gray-300">
          We are trusted by <span className="font-extrabold">1 million+</span>{" "}
          businesses & <span className="font-extrabold">2 million+ </span>
          individuals
        </h2>
        <div className="flex mt-10 flex-wrap justify-center items-center gap-8 bg-black/20 rounded-md dark:bg-white/50 dark:rounded-md">
          <Image src="/uber_logo.png" alt="Uber" width={100} height={50} />
          <Image src="/mtn-logo.png" alt="MTN" width={100} height={50} />
          <Image
            src="/chipper_logo.svg"
            alt="Chipper"
            width={100}
            height={50}
          />
          <Image
            src="/piggyvest_logo.png"
            alt="PiggyVest"
            width={100}
            height={50}
          />
          <Image src="/wise_logo.svg" alt="Wise" width={100} height={50} />
          <Image
            src="microsoft_logo.svg"
            alt="Microsoft"
            width={100}
            height={50}
          />
          <Image
            src="/airpeace_logo.svg"
            alt="Air Peace"
            width={100}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
