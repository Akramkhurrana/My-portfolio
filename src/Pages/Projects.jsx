function Projects() {
  const projects = [
    {
      icon: "🏫",
      title: "School Management System",
      description:
        "A web-based school management system for managing students, attendance, fees, results and assignments.",
      technology: "React • Node.js • MySQL",
    },

    {
      icon: "💼",
      title: "Portfolio Website",
      description:
        "A modern responsive personal portfolio website built using React.",
      technology: "React • JavaScript • CSS",
    },

    {
      icon: "📊",
      title: "Sales & Profit System",
      description:
        "A business application for calculating sales, purchase prices, profit and product quantities.",
      technology: "React • JavaScript",
    },
  ];

  return (
    <section className="section" id="projects">

      <div className="section-title">
        <p>MY RECENT WORK</p>
        <h2>My <span>Projects</span></h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-icon">
              {project.icon}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technology">
              {project.technology}
            </div>

            <button className="project-btn">
              View Project →
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;