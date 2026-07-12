import "../css/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Ankit Vats</h2>

      <p>Frontend Developer | React.js Developer</p>

      <div className="footer-icons">

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

      <p className="copyright">
        © {new Date().getFullYear()} Ankit Vats | Made with <FaHeart className="heart"/> using React.js
      </p>

    </footer>
  );
}

export default Footer;