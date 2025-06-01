import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./homepage/homepage.css";
import logo from "../assets/logo.png";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate nav elements on load
    gsap.fromTo(
      navItemsRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.48, // Each element animates with a delay
      }
    );
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navBar = document.querySelector(".nav-bar");
    if (navBar) {
      // Check if we're not on mobile before applying the animation
      const isMobile = window.innerWidth <= 768;

      if (!isMobile) {
        gsap.to(navBar, {
          width: "65%",
          scrollTrigger: {
            trigger: navBar,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            markers: false,
          },
        });
      } else {
        // For mobile, ensure width is 100%
        gsap.set(navBar, { width: "100%" });
      }
    }
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        gsap.set(navBar, { width: "100%" });
      } else {
        // Reapply the scroll animation for desktop
        ScrollTrigger.refresh();
      }
    };
    window.addEventListener("resize", handleResize);
    const handleScrollRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleScrollRefresh);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("load", handleScrollRefresh);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const onScroll = () => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        // Get the position and dimensions of the services section
        const servicesBounds = servicesSection.getBoundingClientRect();

        // Calculate how much of the section is visible as a percentage
        const sectionHeight = servicesBounds.height;
        const visibleTop = Math.max(
          0,
          Math.min(window.innerHeight, servicesBounds.bottom) -
            Math.max(0, servicesBounds.top)
        );
        const visiblePercentage = (visibleTop / sectionHeight) * 100;

        // Update active nav based on visibility percentage
        if (visiblePercentage >= 50) {
          setActiveNav("services");
        } else {
          // If less than 50% is visible, set active to home or another section
          setActiveNav("home");
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    // Run once on mount to set initial state
    onScroll();

    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("scroll", onScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/about") {
      setActiveNav("about");
    } else if (location.pathname === "/") {
      setActiveNav("home");
    } else if (location.hash === "#services") {
      setActiveNav("services");
    } else if (location.pathname === "/careers") {
      setActiveNav("careers");
    } else if (location.pathname === "/Trainings") {
      setActiveNav("Trainings");
    }
  }, [location.pathname, location.hash]);

  const handleServiceClick = (event) => {
    event.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          const yOffset =
            servicesSection.getBoundingClientRect().top +
            window.scrollY -
            window.innerHeight / 2 +
            servicesSection.clientHeight / 2;
          window.scrollTo({ top: yOffset, behavior: "smooth" });
        }
      }, 500);
    } else {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        const yOffset =
          servicesSection.getBoundingClientRect().top +
          window.scrollY -
          window.innerHeight / 2 +
          servicesSection.clientHeight / 2;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      }
    }
  };

  return (
    <header>
      <div className="nav-bar">
        <div id="logo">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="tittle">Stratosys</h1>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
        <div id="nav-elements" className={menuOpen ? "open" : ""}>
          <ul>
            <li ref={(el) => (navItemsRef.current[0] = el)}>
              <Link to="/" className={activeNav === "home" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li ref={(el) => (navItemsRef.current[1] = el)}>
              <Link
                to="/about"
                className={activeNav === "about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li ref={(el) => (navItemsRef.current[2] = el)}>
              <a
                href="/#services"
                onClick={handleServiceClick}
                className={activeNav === "services" ? "active" : ""}
              >
                Dev Technologies
              </a>
            </li>
            <li ref={(el) => (navItemsRef.current[3] = el)}>
              <Link
                to="/careers"
                className={activeNav === "careers" ? "active" : ""}
              >
                Careers
              </Link>
            </li>
            <li ref={(el) => (navItemsRef.current[4] = el)}>
              <Link
                to="/Trainings"
                className={activeNav === "Trainings" ? "active" : ""}
              >
                Trainings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
