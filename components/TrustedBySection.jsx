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
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Uber_logo_2018.png"
            alt="Uber"
            width={100}
            height={50}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/2/2f/MTN_Group_logo.svg"
            alt="MTN"
            width={100}
            height={50}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/3/3e/Chipper_logo.png"
            alt="Chipper"
            width={100}
            height={50}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/4/4e/PiggyVest_Logo.png"
            alt="PiggyVest"
            width={100}
            height={50}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/3/3e/Wise_logo.svg"
            alt="Wise"
            width={100}
            height={50}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Microsoft_logo.svg"
            alt="Microsoft"
            width={100}
            height={50}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/5/5e/Air_Peace_logo.png"
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
