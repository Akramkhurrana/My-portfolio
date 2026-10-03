import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 />,
      title: "HTML",
      description: "Building structured and semantic web pages.",
      className: "html-icon",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS",
      description: "Creating responsive and modern website designs.",
      className: "css-icon",
    },
    {
      icon: <FaJsSquare />,
      title: "JavaScript",
      description: "Adding logic and interactive features to websites.",
      className: "js-icon",
    },
    {
      icon: <FaReact />,
      title: "React.js",
      description: "Building modern component-based web applications.",
      className: "react-icon",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
      description: "Developing backend and server-side applications.",
      className: "node-icon",
    },
    {
      icon: <SiMysql />,
      title: "MySQL",
      description: "Managing databases and writing SQL queries.",
      className: "mysql-icon",
    },
  ];

  return (
    <section className="section skills-section" id="skills">

      <div className="section-title">
        <p>WHAT I KNOW</p>

        <h2>
          My <span>Skills</span>
        </h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className={`skill-icon ${skill.className}`}>
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>

            <p>{skill.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;