import React from "react";

const TechStack = () => {
  const frontend = [
    {
      title: "React",
      icon: "https://i.postimg.cc/zXFYj6Gv/react-svgrepo-com.png",
      height: "16",
      width: "16",
    },
    {
      title: "Tailwind CSS",
      icon: "https://i.postimg.cc/G2pKPhKX/tailwind-css-svgrepo-com.png",
      height: "16",
      width: "16",
    },
    {
      title: "Material UI",
      icon: "https://i.postimg.cc/TwrbD8Mt/material-ui-svgrepo-com.png",
      height: "16",
      width: "16",
    },
    {
      title: "React Query",
      icon: "https://via.placeholder.com/50",
      height: "50",
      width: "50",
    },
  ];

  const backend = [
    {
      title: "Spring Boot",
      icon: "https://i.postimg.cc/25Wbsp6C/spring-svgrepo-com.png",
    },
    {
      title: "NodeJS",
      icon: "https://i.postimg.cc/J7HrK3sW/node-js-svgrepo-com-4.png",
    },
    { title: "Spring Data JPA", icon: "https://via.placeholder.com/50" },
    { title: "Spring Cloud", icon: "https://via.placeholder.com/50" },
  ];

  const toolbox = [
    {
      title: "Spring Boot",
      icon: "https://i.postimg.cc/25Wbsp6C/spring-svgrepo-com.png",
    },
    {
      title: "NodeJS",
      icon: "https://i.postimg.cc/J7HrK3sW/node-js-svgrepo-com-4.png",
    },
    { title: "Spring Data JPA", icon: "https://via.placeholder.com/50" },
    { title: "Spring Cloud", icon: "https://via.placeholder.com/50" },
  ];



  return (
    <div className="mt-2 mx-4 sm:mx-8 md:mx-16 lg:mx-20 bg-zinc-900 py-8 rounded-lg" id="techStack">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12 md:mt-5">
        I Specialize in Spring Boot
      </h2>

      {/* Frontend Section */}
      <div className="mb-12">
        <h3 className="text-lg md:text-2xl text-slate-200 mb-6 flex justify-center md:mb-9">
          <span className="border-l-4 border-r-4 border-[#DCFF5B] pl-2 pr-2">
            Frontend Development
          </span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-8">
          {frontend.map((tech, index) => (
            <div
              key={index}
              className="flex flex-rows items-center bg-zinc-800 p-4 rounded-lg hover:scale-105 transition-transform duration-300 gap-2"
            >
              <img
                src={tech.icon}
                alt={`${tech.title} icon`}
                className={`h-${tech.height} w-${tech.width}`}
              />
              <span className="text-white text-sm md:text-base">
                {tech.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Section */}
      <div className="mb-12">
        <h3 className="text-lg md:text-2xl text-slate-200 mb-6 flex justify-center md:mb-9">
          <span className="border-l-4 border-r-4 border-[#DCFF5B] pl-2 pr-2">
            Backend Development
          </span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-8">
          {backend.map((tech, index) => (
            <div
              key={index}
              className="flex flex-rows items-center bg-zinc-800 p-4 rounded-lg hover:scale-105 transition-transform duration-300 gap-2"
            >
              <img
                src={tech.icon}
                alt={`${tech.title} icon`}
                className="h-16 w-16 mb-2"
              />
              <span className="text-white text-sm md:text-base">
                {tech.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Toolbox Section */}
      <div className="mb-12">
        <h3 className="text-lg md:text-2xl text-slate-200 mb-6 flex justify-center md:mb-9">
          <span className="border-l-4 border-r-4 border-[#DCFF5B] pl-2 pr-2">
           Tool Box
          </span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-8">
          {toolbox.map((tech, index) => (
            <div
              key={index}
              className="flex flex-rows items-center bg-zinc-800 p-4 rounded-lg hover:scale-105 transition-transform duration-300 gap-2"
            >
              <img
                src={tech.icon}
                alt={`${tech.title} icon`}
                className="h-16 w-16 mb-2"
              />
              <span className="text-white text-sm md:text-base">
                {tech.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
