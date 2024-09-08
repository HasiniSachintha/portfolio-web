import React from "react";

const TechStack = () => {
  const frontend = [
    {
      title: "React",
      icon: "https://i.postimg.cc/zXFYj6Gv/react-svgrepo-com.png",
    },
    { title: "Tailwind CSS", icon: "https://via.placeholder.com/50" },
    { title: "React Router", icon: "https://via.placeholder.com/50" },
    { title: "React Query", icon: "https://via.placeholder.com/50" },
  ];

  const backend = [
    { title: "Spring Boot", icon: "https://via.placeholder.com/50" },
    { title: "Spring Security", icon: "https://via.placeholder.com/50" },
    { title: "Spring Data JPA", icon: "https://via.placeholder.com/50" },
    { title: "Spring Cloud", icon: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="mt-2 mx-4 sm:mx-8 md:mx-16 lg:mx-20 bg-zinc-900 py-8">
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
                className="h-16 w-16"
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
    </div>
  );
};

export default TechStack;
