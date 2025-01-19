import "./homepage.css";
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
            <div>
              <img src="" alt="" srcset="" />
              <img src="" alt="" srcset="" />
              <img src="" alt="" srcset="" />
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
