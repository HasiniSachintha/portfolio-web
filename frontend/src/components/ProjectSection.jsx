import React from 'react'

const projects = [
  {
    title: "Project 1",
    description: "This is a project",
    cta: "View Project",
    bgColor: "bg-indigo-400",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project 2",
    description: "This is a project",
    cta: "View Project",
    bgColor: "bg-indigo-400",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project 3",
    description: "This is a project",
    cta: "View Project",
    bgColor: "bg-indigo-400",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project 2",
    description: "This is a project",
    cta: "View Project",
    bgColor: "bg-indigo-400",
    image: "https://via.placeholder.com/150",
  },
];


function ProjectSection() {
  return (
    <>
   <section className='py-12'>
      <div className='container mx-auto px-20'>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6'>
    {projects.map((project,index)=>{
      return(<ProjectCard
      key={index}
      title={project.title}
      description={project.description} 
      cta={project.cta}
      bgColor={project.bgColor}
      image={project.image}
      />)
    })
    }
    </div>
    </div>
    </section>
    </>

  )
}

export default ProjectSection


const ProjectCard = ({ title, description, cta, bgColor, image }) => {
  
  return (
    <div className={`${bgColor} p6 rounded-lg`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{cta}</button>
      <img src={image} alt={title} />
    </div>
  );
};