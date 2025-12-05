import React from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const Time = () => {
  return (
    <section className="">
      <div className="container mx-auto px-7 py-8 md:py-14 lg:py-20 space-y-14 md:space-y-30">
        {/* top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 ">
          <div>
            <img src="/light.png" alt="Make more time" />
          </div>
          <div className=" space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-[55px] text-black font-semibold max-w-[450px]">
              Make more time for the work
            </h1>

            <div className="flex items-center space-x-4">
              <CheckCircleOutlinedIcon className="text-[#2AB691]" />
              <p className="text-black text-base md:text-[18px] lg:text-[21px] font-md">
                Many ways to use illustrations in design
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <CheckCircleOutlinedIcon className="text-[#2AB691] text-[18px]" />
              <p className="text-black text-base md:text-[18px] lg:text-[21px] font-sm">
                Simply explained with illustrations
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <CheckCircleOutlinedIcon className="text-[#2AB691]" />
              <p className="text-black text-base md:text-[18px] lg:text-[21px] font-sm">
                Make more time for the work
              </p>
            </div>
            <div>
              <button className="bg-[#5F62E2] hover:bg-blue-700 text-white font-semibold py-3 px-6 transition duration-300 ease-in-out rounded-xl">
                Get Started
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </div>

        <hr className="md:hidden" />

        {/* bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 ">
          <div>
            <div className=" space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-[55px] text-black font-semibold max-w-[450px]">
                Make more time for the work
              </h1>

              <div className="flex items-center space-x-4">
                <CheckCircleOutlinedIcon className="text-[#2AB691]" />
                <p className="text-black text-base md:text-[18px] lg:text-[21px] font-md">
                  Many ways to use illustrations in design
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <CheckCircleOutlinedIcon className="text-[#2AB691] text-[18px]" />
                <p className="text-black text-base md:text-[18px] lg:text-[21px] font-sm">
                  Simply explained with illustrations
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <CheckCircleOutlinedIcon className="text-[#2AB691]" />
                <p className="text-black text-base md:text-[18px] lg:text-[21px] font-sm">
                  Make more time for the work
                </p>
              </div>
              <div>
                <button className="bg-[#5F62E226] text-[#5F62E2] font-semibold px-6 py-3 transition duration-300 rounded-lg">
                  Learn More
                  <ArrowForwardIcon />
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src="/time.png" alt="Make more time" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Time;
