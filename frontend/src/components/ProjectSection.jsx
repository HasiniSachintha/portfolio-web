import React from 'react';

// Sample projects array with details similar to your image
// Sample projects data stored in the frontend
const projects = [
  {
    title: "Immersion Meditation",
    description: "Christ-centric meditation app for Android and iOS.",
    duration: "1.5 Years",
    role: "Lead Developer",
    contribution: "Fullstack Development",
    technologies: ["FLUTTER", "FIREBASE", "AWS S3", "REVENUECAT"],
    bgColor: "bg-zinc-900",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Kritikos",
    description: "A website for educational materials and stimuli for critical thinking.",
    duration: "6 Months",
    role: "Developer",
    contribution: "Frontend Development",
    technologies: ["ASTRO.JS", "REACT.JS", "TAILWINDCSS"],
    bgColor: "bg-zinc-900",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
];

function ProjectSection() {
  return (
    <section className="py-12">
      <h2 className='text-white text-center text-2xl md:text-5xl font-bold'>My Projects</h2>
      <div className="container mx-auto px-20 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default ProjectSection;

// ProjectCard Component
const ProjectCard = ({ title, description, duration, role, contribution, technologies, bgColor, image }) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-lg flex items-start space-x-6`}>
      <img
        src={image}
        alt={title}
        className="w-1/3 h-auto rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">{description}</p>
        <p className="text-sm text-gray-500"><strong>Duration:</strong> {duration}</p>
        <p className="text-sm text-gray-500"><strong>Role:</strong> {role}</p>
        <p className="text-sm text-gray-500"><strong>Contribution:</strong> {contribution}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-green-600 text-white text-xs py-1 px-2 rounded">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

