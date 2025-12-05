import React from 'react'

const Footer = () => {

    const HomeLink = [
      { title: "Home", link: "#" },
      { name: "Become Affiliate", link: "#" },
      { name: "Go Unlimited", link: "#" },
      { name: "Services", link: "#" },
    ];
    const ProductsLink = [
      { title: "Products", link: "#" },
      { name: "Design Systems", link: "#" },
      { name: "Themes & Templates", link: "#" },
      { name: "Mockups", link: "#" },
      { name: "Presentations", link: "#" },
      { name: "Wireframes Kits", link: "#" },
      { name: "UI Kits", link: "#" },
    ];
    const LegalsLink = [
      { title: "Legals", link: "#" },
      { name: "License", link: "#" },
      { name: "Refund Policy", link: "#" },
      { name: "About Us", link: "#" },
      { name: "Contacts", link: "#" },
    ];
    const BlogLink = [
      { title: "Blog", link: "#" },
      { name: "Business Stories", link: "#" },
      { name: "Digital Store", link: "#" },
      { name: "Learning", link: "#" },
      { name: "Social Media", link: "#" },
    ];

    const SocialLinks = [
      { img: "a.png", link: "https://www.instagram.com/litonalmamun9118/" },
      { img: "b.png", link: "https://www.facebook.com/TTP2660/" },
      { img: "c.png", link: "https://x.com/MdLiton65961236" },
    ];

  return (
    <div className="bg-black px-12 pb-12 space-y-4">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pt-10">
        <img
          className="w-[200px] md:max-w-[420px]"
          src="/BDegic.png"
          alt="Logo"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-3 md:gap-5 lg:gap-8 ">
          <div>
            {HomeLink.map((item, index) => (
              <ul className="space-y-1" key={index}>
                <li className="text-white font-semibold">{item.title}</li>
                <li className="text-gray-400 text-[14px]">{item.name}</li>
              </ul>
            ))}
          </div>
          <div>
            {ProductsLink.map((item, index) => (
              <ul className="space-y-1" key={index}>
                <li className="text-white font-semibold">{item.title}</li>
                <li className="text-gray-400 text-[14px]">{item.name}</li>
              </ul>
            ))}
          </div>
          <div>
            {LegalsLink.map((item, index) => (
              <ul className="space-y-1" key={index}>
                <li className="text-white font-semibold">{item.title}</li>
                <li className="text-gray-400 text-[14px]">{item.name}</li>
              </ul>
            ))}
          </div>
          <div>
            {BlogLink.map((item, index) => (
              <ul className="space-y-1" key={index}>
                <li className="text-white font-semibold">{item.title}</li>
                <li className="text-gray-400 text-[14px]">{item.name}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <hr className="text-gray-600" />
      <div className='flex items-center justify-between px-4'>
        <h3 className='text-gray-400 text-[14px] md:text-base ' >Copyright Degic © {new Date().getFullYear()} </h3>
        <div className='flex'>
           {
            SocialLinks.map(((item, index)=> (
                <div key={index}>
                    <a href={item.link} target='_blank' >
                        <img 
                        className='w-8'
                        src={item.img} alt="social-icon" />
                    </a>
                </div>
            )))
           }
        </div>
      </div>
    </div>
  );
}

export default Footer
