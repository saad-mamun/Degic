import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16 px-4 lg:px-16 container mx-auto">
        {/* left section */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="text-2xl lg:text-[72px] font-bold max-w-[640px]">
            Simply explained with illustrations
          </h1>
          <p className="text-md md:text-lg text-[#00000080] max-w-[400px] mt-[-20px]">
            There are a lot of different components that will help you create
            the perfect look for your project
          </p>
          <div className="flex gap-4">
            <button className="bg-[#5F62E2] hover:bg-blue-700 text-white font-semibold py-3 px-6 transition duration-300 ease-in-out rounded-xl">
              Get Started
            </button>
            <button className="bg-[#5F62E226] text-[#5F62E2] font-semibold px-6 py-3 transition duration-300 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        {/* right section */}
        <div>
          <img
            className="w-full max-w-[300px] md:max-w-lg h-auto"
            src="/degicrocket.png"
            alt="Degic Rocket"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
