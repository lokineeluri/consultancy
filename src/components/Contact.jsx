import React, { useState, useRef } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import { gsap } from "gsap";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }
  };

  return (
    <div>
      {/* Button */}
      <button onClick={toggleDropdown} className="contact-button">
        Contact Us
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul ref={dropdownRef} className="dropdown-menu">
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="icon" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="icon" /> Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="icon" /> GitHub
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Contact;
