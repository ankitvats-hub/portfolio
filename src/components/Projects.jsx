import "../css/Projects.css";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import onway from "../assets/projects/onway.jpeg";
import food from "../assets/projects/food.png";
import password from "../assets/projects/password.png";
import travel from "../assets/projects/travel.png";

const projects = [
  {
    title: "OnWay",
    image: onway,
    description:
      "A Ride & Delivery platform with User & Pilot panels, authentication, real-time updates and MongoDB database.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/ankitvats-hub",
  },

  {
    title: "Food Ordering Website",
    image: food,
    description:
      "Responsive food ordering website with authentication, cart and online ordering features.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/ankitvats-hub",
  },

  {
    title: "Password Manager",
    image: password,
    description:
      "Password manager built using React for storing and organizing passwords.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/ankitvats-hub",
  },

  {
    title: "Travel Story",
    image: travel,
    description:
      "Travel diary application with CRUD operations, authentication and image upload.",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/ankitvats-hub",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>Featured Projects</h2>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >

            <div className="project-image">

              <img src={project.image} alt={project.title} />

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.tech.map((item, i) => (

                  <span key={i}>{item}</span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <button disabled>
                  Live Demo
                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;