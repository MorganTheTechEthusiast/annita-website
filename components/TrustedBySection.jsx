"use client";

const TrustedBySection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-300">
          We are trusted by
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="/logos/uber.png" alt="Uber" className="h-12" />
          <img src="/logos/mtn.png" alt="MTN" className="h-12" />
          <img src="/logos/chipper.png" alt="Chipper" className="h-12" />
          <img src="/logos/piggyvest.png" alt="PiggyVest" className="h-12" />
          <img src="/logos/wise.png" alt="Wise" className="h-12" />
          <img src="/logos/microsoft.png" alt="Microsoft" className="h-12" />
          <img src="/logos/airpeace.png" alt="Air Peace" className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
