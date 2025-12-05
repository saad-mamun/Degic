import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Presentation = () => {
  const CardData = [
    {
      Source: "/Managment.png",
      heading: "Managment",
      text: "Software platform for running your new internet business ",
    },
    {
      Source: "/Entertainment.png",
      heading: "Entertainment",
      text: "Software platform for running your new internet business",
    },
    {
      Source: "/Marketing.png",
      heading: "Marketing",
      text: "Software platform for running your new internet business",
    },
    {
      Source: "/References.png",
      heading: "References",
      text: "Software platform for running your new internet business",
    },
  ];

  const socialLinks = [
    {img: "/f.png", links: "https://www.facebook.com/TTP2660/"},
    {img: "/i.png" , links: "https://www.instagram.com/litonalmamun9118/"},
    {img: "/t.png", links: "https://x.com/MdLiton65961236"},
  ]

  return (
    <section className="bg-gray-50">
      <div className="container flex flex-col lg:flex-row items-center gap-20 py-12 px-6 md:py-16 md:px-12 max-w-[1400px] mx-auto">
        {/* left section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
          {CardData.map((card, index) => (
            <div
              key={index}
              className="p-4 gap-4 bg-white rounded-xl hover:bg-gray-100 transition-all text-center"
            >
              <div className="flex items-center justify-center">
                <img src={card.Source} alt={card.heading} />
              </div>
              <div>
                <h3 className="text-black text-lg md:text-xl font-semibold ">
                  {card.heading}
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* right section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold max-w-md mx-auto lg:mx-0">
            {" "}
            The quickest way to create modern presentation
          </h1>
          <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-sm md:text-base">
            Best software platform for running an internet business. We build
            the most powerful and flexible tools for internet commerce.
          </p>
          <button className="bg-[#5F62E226] text-[#5F62E2] font-semibold px-6 py-3 transition duration-300 rounded-lg">
            Explore All
            <ArrowForwardIcon sx={{ fontSize: 24 }} />
          </button>

          <p className="text-gray-500 !mt-[50px]">Follow Us</p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6 items-center">
            {
                socialLinks.map((social, index)=>(
                    <a key={index} href={social.links}>
                        <img src={social.img} alt="Social Icon" />
                    </a>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
