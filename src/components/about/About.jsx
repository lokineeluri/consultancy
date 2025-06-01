import { useState, useEffect, useRef } from "react";
import "./About.css";

import AboutMission from "./AboutMission";
import AboutServices from "./AboutServices";
import AboutTeam from "./AboutTeam";
import AboutTestimonials from "./AboutTestimonials";
import AboutContact from "../Contact/Contact";

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="about-container">
      <section
        id="mission-section"
        ref={addToRefs}
        className={`about-section ${
          isVisible["mission-section"] ? "visible" : ""
        }`}
      >
        <AboutMission />
      </section>

      <section
        id="services-section"
        ref={addToRefs}
        className={`about-section ${
          isVisible["services-section"] ? "visible" : ""
        }`}
      >
        <AboutServices />
      </section>

      <section
        id="team-section"
        ref={addToRefs}
        className={`about-section ${
          isVisible["team-section"] ? "visible" : ""
        }`}
      >
        <AboutTeam />
      </section>

      <section
        id="contact-section"
        ref={addToRefs}
        className={`about-section ${
          isVisible["contact-section"] ? "visible" : ""
        }`}
      >
        <AboutContact />
      </section>
    </div>
  );
};

export default About;
