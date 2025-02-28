"use client";

import Image from "next/image";

const TrustedBySection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-300">
          We are trusted by
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
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
