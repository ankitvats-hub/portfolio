import "../css/Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import onway from "../assets/projects/onway.jpeg";
import food from "../assets/projects/food.png";
import student from "../assets/projects/student.png";
import travel from "../assets/projects/travel.png";
import krishi from "../assets/projects/krishi.png";

const projects = [
  {
    title: "OnWay",
    image: onway,
    description:
      "A Ride & Delivery platform with User & Pilot panels, authentication, real-time updates and MongoDB database.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com/ankitvats-hub",
    live: "https://pilot.onwayapp.online",
  },

  {
    title: "Food Ordering Website",
    image: food,
    description:
      "Responsive food ordering website with authentication, cart and online ordering features.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ankitvats-hub",
    live: "",
  },

  {
    title: "Student App",
    image: student,
    description:
      "Student app that helps students generate a roadmap, prepare for interviews and get career guidance.",
    tech: ["React", "JavaScript", "CSS", "MongoDB", "Node.js"],
    github: "https://github.com/ankitvats-hub",
    live: "https://student-app-frontend-crl0.onrender.com",
  },

  {
    title: "Travel Story",
    image: travel,
    description:
      "Travel diary application with CRUD operations, authentication and image upload.",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    github: "https://github.com/ankitvats-hub",
    live: "",
  },

  {
    title: "Krishi Sakhi",
    image: krishi,
    description:
      "AI-powered agriculture platform that helps farmers identify crop diseases and get better crop recommendations.",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    github: "https://github.com/ankitvats-hub",
    live: "https://krishi-sakhi-bb2b.onrender.com",
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
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                ) : (
                  <button disabled>Live Demo</button>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;