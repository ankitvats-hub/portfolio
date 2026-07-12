import "../css/Contact.css";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>

        <p className="contact-text">
          I'm currently looking for Frontend / React.js Developer opportunities.
          Feel free to contact me.
        </p>

        <div className="contact-grid">

          <a href="mailto:avats3038@gmail.com" className="contact-card">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>avats3038@gmail.com</p>
            </div>
          </a>

          <a href="tel:+919306690162" className="contact-card">
            <FaPhoneAlt />
            <div>
              <h3>Phone</h3>
              <p>+91 9306690162</p>
            </div>
          </a>

          <a
            href="https://github.com/ankitvats-hub"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaGithub />
            <div>
              <h3>GitHub</h3>
              <p>github.com/ankitvats-hub</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ankit-vats-b16398301/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin />
            <div>
              <h3>LinkedIn</h3>
              <p>Ankit Vats</p>
            </div>
          </a>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;