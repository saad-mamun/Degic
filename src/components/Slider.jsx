import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Slider = () => {
  const slides = [
    {
      id: 1,
      heading: "Make more time for the work that matters most",
      description: "Best software platform for running an internet business.",
      image: "/man.png",
    },
    {
      id: 2,
      heading: "Build more time for the work that matters most",
      description: "Best software platform for running an internet business.",
      image: "/References.png",
    },
    {
      id: 3,
      heading: "Take more time for the work that matters most",
      description: "Best software platform for running an internet business.",
      image: "/Marketing.png",
    },
    {
      id: 4,
      heading: "Hero more time for the work that matters most",
      description: "Best software platform for running an internet business.",
      image: "/Managment.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  const { heading, description, image } = slides[currentIndex];

  return (
    <section className="max-w-[1400px] py-24 px-6 md:px-12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-20">
        {/* left section */}
        <div className="flex flex-col justify-between w-full md:w-1/2 space-y-6">
          <img className="w-8 mb-4 md:w-16" src="/Shape.png" alt="" />
          <h1 className="text-2xl md:text-5xl font-bold text-black max-w-md">
            {heading}
          </h1>
          <p className="text-gray-600 max-w-sm text-[20px ]">{description}</p>
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={prevSlide}
              className="bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <ArrowBackIosIcon className="text-black p-[3px]" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-100 rounded-full  hover:bg-gray-200 transition"
            >
              <ArrowForwardIosIcon className="text-black p-[3px]" />
            </button>
          </div>
        </div>
        {/* right section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full md:w-[65%] object-cover" src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
