import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Blog = () => {

    const blogItems = [
      {
        img: "/Blog1.png",
        title: "Make myspace your best designed space",
        des: "A lot of different components that will help you create the perfect look for your project",
        selectL: "Design",
      },
      {
        img: "/Blog2.png",
        title: "My company culture has changed today",
        des: "A lot of different components that will help you create the perfect look for your project",
        selectL: "3D illustrations",
      },
      {
        img: "/Blog3.png",
        title: "Professionals in craft! All products were super great",
        des: "A lot of different components that will help you create the perfect look for your project",
        selectL: "Development",
      },
    ];


  return (
    <section>
      <div className="container mx-auto py-5 md:py-14 lg:py-20 px-5">
        <div className="space-y-3">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
            Get more from our blog
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3">
            <p className="text-gray-500 max-w-[440px]">
              There are a lot of different components that will help you create
              the perfect look for your project
            </p>
            <button className="flex items-center gap-2 bg-[#6e70f526] hover:text-white  text-[#5F62E2] px-3 py-2 rounded-md font-medium hover:bg-[#6a6ce2f0] transition duration-300 delay-100">
              Explore All
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
        {/* blog items */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  pt-8">
          {blogItems.map((item, index) => (
            <div key={index} className="space-y-2 max-w-[410px]">
              <img className="bg-gray-100" src={item.img} alt={item.title} />
              <h2 className="max-w-[327px] text-base md:text-[20px] font-medium">
                {item.title}
              </h2>
              <p className="max-w-[327px] text-[14px] md:text-base text-gray-600 ">{item.des}</p>
              <button className="bg-[#2AB6911C] text-[#2AB691] text-md font-medium px-3 py-1 rounded-md text-[12px] md:text-base">
                {item.selectL}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog
