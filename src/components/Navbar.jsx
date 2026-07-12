import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "../css/Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Ankit<span>Vats</span>
      </div>

      <ul className={menu ? "nav-links active" : "nav-links"}>
        {[
          "home",
          "about",
          "skills",
          "education",
          "experience",
          "projects",
          "contact",
        ].map((item) => (
          <li key={item}>
            <Link
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}

        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
        </li>
      </ul>

      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;