import "./homepage.css";
function Nav() {
  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1); // Remove the '#' from the href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <header>
      <div className="nav-bar">
        <div id="logo"></div>
        <div id="nav-elements">
          <ul>
            <li>
              <a href="#home" onClick={handleSmoothScroll}>
                Home
              </a>
            </li>
            <li>
              <a href="#home">About Us</a>
            </li>
            <li>
              <a href="#services" onClick={handleSmoothScroll}>
                Services
              </a>
            </li>
            <li>
              <a href="#home">Career</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Nav;
