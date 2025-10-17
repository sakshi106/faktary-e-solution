import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NavbarCSS = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const location = useLocation();

  const sections = ["about", "service", "resources", "contact"];

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollPos = window.scrollY + 100;
        for (let section of sections) {
          const elem = document.getElementById(section);
          if (elem) {
            if (
              scrollPos >= elem.offsetTop &&
              scrollPos < elem.offsetTop + elem.offsetHeight
            ) {
              setActiveSection(section);
            }
          }
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location]);

  const handleClick = (id) => {
    if (location.pathname === "/") {
      const elem = document.getElementById(id);
      if (elem) {
        window.scrollTo({
          top: elem.offsetTop - 70,
          behavior: "smooth",
        });
        setIsOpen(false);
      }
    } else {
      // Navigate to route
      if (id === "service") {
        window.location.href = "/service";
      } else if (id === "contact") {
        window.location.href = "/contact"; // Contact page route
      } else {
        window.location.href = `/#${id}`;
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => handleClick("about")}>
          MyBrand
        </div>

        {/* Desktop Menu */}
        <div className="menu">
          {sections.map((section) =>
            section === "resources" ? (
              <Link
                key={section}
                to="/resources"
                className={location.pathname === "/resources" ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
            ) : section === "service" ? (
              <Link
                key={section}
                to="/service"
                className={location.pathname === "/service" ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                Service
              </Link>
            ) : section === "contact" ? (
              <Link
                key={section}
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            ) : (
              <button
                key={section}
                onClick={() => handleClick(section)}
                className={activeSection === section ? "active" : ""}
              >
                {section.charAt(0).toUpperCase() +
                  section.slice(1).replace("-", " ")}
              </button>
            )
          )}
          <Link
            to="/reach"
            className={location.pathname === "/reach" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Reach Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {sections.map((section) =>
            section === "resources" ? (
              <Link
                key={section}
                to="/resources"
                className={location.pathname === "/resources" ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
            ) : section === "service" ? (
              <Link
                key={section}
                to="/service"
                className={location.pathname === "/service" ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                Service
              </Link>
            ) : section === "contact" ? (
              <Link
                key={section}
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            ) : (
              <button
                key={section}
                onClick={() => handleClick(section)}
                className={activeSection === section ? "active" : ""}
              >
                {section.charAt(0).toUpperCase() +
                  section.slice(1).replace("-", " ")}
              </button>
            )
          )}

          <Link
            to="/reach"
            className={location.pathname === "/reach" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Reach Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarCSS;
