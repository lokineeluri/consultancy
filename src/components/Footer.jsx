import "./homepage/homepage.css";
import { Linkedin, Twitter, Github } from "lucide-react";
function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="logo">
          <h1>CONSULTANCY SERVICE</h1>
        </div>
        <div className="footer-elems">
          <div className="quicklinks">
            <h1>quick links</h1>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#home">About Us</a>
              </li>
              <li>
                <a href="#home">Career</a>
              </li>
              <li>
                <a href="#home">Services</a>
              </li>
            </ul>
          </div>
          <div className="socials">
            <h1>connect with us</h1>
            <div className="icons">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/your-profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="iconss" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/your-profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="iconss" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/your-profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="iconss" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="CR">
        <hr />
        <p>© 2025 [Your Company Name]. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
