import React from 'react'

const Boom = () => {
  return (
    <section className="bg-[#5F62E2] pt-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mx-auto px-6 md:px-10 container">
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl max-w-[600px] text-white font-semibold">
            The quickest way to create awesome Presentations
          </h2>
          <div className="space-x-6">
            <button className="bg-green-600 hover:bg-green-700 transition duration-300 delay-100 px-3 py-2 text-md md:text-lg text-white font-semibold rounded-lg">
              Get Started
            </button>
            <button className="bg-gray-400  hover:bg-gray-500 transition duration-300 delay-100 text-white font-semibold px-3 py-2 rounded-lg text-md md:text-lg">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img className="w-[428px] pb-" src="/BOOM.png" alt="boom" />
        </div>
      </div>
    </section>
  );
}

export default Boom
