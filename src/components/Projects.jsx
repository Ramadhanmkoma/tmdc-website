import React from "react";

const projects = [
  {
    title: "Bustani ya Hadith",
    description: "An app providing authentic Hadith collections with audio support.",
    link: "https://bustani.gohimma.xyz/",
    image: "/assets/images/BustaniBanner.jpg",
  },
  {
    title: "Darsa Audio App (Upcoming)",
    description: "An Islamic learning platform with audio lessons on various topics.",
    link: "#",
    image: "/assets/images/coming-soon.png",
  },
  {
    title: "Ahkaam Al Janazah (Upcoming)",
    description: "A guide on Islamic funeral rites, including teachings and best practices.",
    link: "#",
    image: "/assets/images/coming-soon.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-blue-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">
          Our Projects
        </h2>
        <p className="text-primary mt-4 max-w-3xl mx-auto text-lg">
          We develop and contribute to Islamic tech projects to **empower the Ummah**.  
        </p>

        {/* Project Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-4xl shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary">
                  {project.title}
                </h3>
                <p className="text-primary mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-4 inline-block text-white bg-primary px-4 py-2 rounded-lg hover:bg-blue-900 transition duration-300"
                >
                  {project.link === "#" ? "Coming Soon" : "View Project"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
