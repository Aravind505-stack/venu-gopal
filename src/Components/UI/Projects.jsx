import React from 'react';

const projects = [
  { title: "IRDA certified",
    
     image: "/Images/venu-4.jpg"

    },
  { title: "Working as a Financial Advisor with Sbilife Insurance Secunderabad Branch",  image: "/Images/venu_3.jpg" },
  { title: "AMFI Certified Must funds Distributor Aum of 400cr",  image: "/Images/venu-5.jpg" },
  { title: "Received Long Term Service Award from sbilife Insurance.", image: "/Images/venu-6.jpg" },
  { title: "Received Quality Service Award twice with LIMRA USA.", image: "/Images/venu-2.jpg"  },
  { title: "Since 20 Years Helping clients to achieve their financial goals.", image: "/Images/venu-1.jpg"  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-gray-900 py-20">

      <h2 className="text-3xl font-bold mb-6">My Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg">
            <h3 className="font-bold">{project.title}</h3>
            <p>{project.description}</p>
            {project.image && <img src={project.image} alt={project.title} className="w-full h-auto mt-4 rounded" />}

            
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
