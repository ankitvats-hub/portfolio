import "../css/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          I'm <span>Ankit Vats</span>, a Computer Science Engineering graduate
          with a Diploma in Computer Applications and Accounting (DCAA).
          I enjoy building modern, responsive, and user-friendly web applications.
        </p>

        <p>
          I have experience with React.js, JavaScript, Node.js, Express.js,
          MongoDB, HTML, CSS, and Git/GitHub. I love learning new technologies
          and solving real-world problems through software development.
        </p>

        <div className="about-info">
          <div>
            <h3>Education</h3>
            <p>B.Tech (Computer Science Engineering)</p>
          </div>

          <div>
            <h3>Diploma</h3>
            <p>DCAA (2024)</p>
          </div>

          <div>
            <h3>Location</h3>
            <p>Haryana, India</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;