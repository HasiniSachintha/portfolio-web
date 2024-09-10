import React from "react";

function IntroSection() {
  return (
    
    <section className="mt-2 mx-4 sm:mx-8 md:mx-16 lg:mx-20 bg-zinc-900 max-h-auto pb-5 rounded-lg">
  <div className="container max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
    
    {/* Image Section */}
    <div className="relative h-96 w-full md:h-64 lg:h-96 order-1 lg:order-2">
      <div className="absolute inset-0 bg-[#DCFF5B] rounded-lg h-96 w-full md:h-64 lg:h-96"></div>
      <img
        className="relative object-contain h-96 w-full md:h-64 lg:h-96 rounded-lg"
        src="https://i.postimg.cc/y8Qs1t3k/IMG-80034.png"
        alt="Profile"
      />
    </div>

    {/* Text Section */}
    <div className="p-4 md:p-10 lg:p-20 text-white order-2 lg:order-1">
      <h1 className="text-2xl md:text-5xl font-bold">Hi, I'm Hasini Sachintha</h1>
      <h2 className="text-xl md:text-4xl font-semibold mt-6 md:mt-10">I'm a Full Stack Developer</h2>
      <p className="mt-6 md:mt-10 text-base md:text-lg leading-loose">
        I'm a full stack developer with experience in building web applications using React, Node.js, and other modern technologies. I'm currently looking for new opportunities, so feel free to reach out!
      </p>
      <div className="relative inline-block mt-5">
        <div className="absolute flex top-2 left-2 w-full h-full bg-gradient-to-r from-lime-400 to-blue-500 rounded-lg"></div>
        <button className="relative bg-white text-black px-10 py-6 font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          Download Resume
        </button>
      </div>
    </div>
    
  </div>
</section>

  
  );
}

export default IntroSection;
