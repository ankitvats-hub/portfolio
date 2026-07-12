import "../css/Hero.css";
import profile from "../assets/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="badge">
            🟢 Available for Opportunities
          </span>

          <h3>Hello, I'm</h3>

          <h1>
            Ankit <span>Vats</span>
          </h1>

          <h2>
            Frontend Developer | React.js Developer
          </h2>

          <p>
            B.Tech Computer Science Engineering graduate with a Diploma in
            Computer Applications and Accounting (DCAA). Passionate about
            building modern, responsive and scalable web applications using
            React.js, JavaScript, Node.js, Express.js and MongoDB.
          </p>

          <div className="hero-btns">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Download Resume
            </a>

            <a href="#projects" className="secondary-btn">
              View Projects <FaArrowRight />
            </a>

          </div>

          <div className="hero-social">

            <a
              href="https://github.com/ankitvats-hub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ankit-vats-b16398301/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:avats3038@gmail.com">
              <FaEnvelope />
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <h2>15+</h2>
              <span>Projects</span>
            </div>

            <div>
              <h2>1</h2>
              <span>Internship</span>
            </div>

            <div>
              <h2>2026</h2>
              <span>B.Tech Graduate</span>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <div className="image-box">

            <img src={profile} alt="Ankit Vats" />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;