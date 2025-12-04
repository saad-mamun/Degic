import React from 'react'

const video = () => {
  return (
    <section className='bg-gray-100 py-8 md:py-16 lg:py-24 px-12'>
      <div>
        <h1 className="text-center text-2xl md:text-4xl">
          Use illustrations in UI design
        </h1>
        <div className='flex justify-center items-center mt-5 md:mt-10 lg:mt-16'>
          <img
            className=" object-cover rounded-xl"
            src="/video.png"
            alt="Video"
          />
        </div>
      </div>
    </section>
  );
}

export default video
