import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Service from "./Services";
import Scroll from "./Scroll";
import Choose from "./Choose";
import Hero from "./Hero";
import JobCardCarousel from "./JobCardCarousel";

import AboutContact from "../Contact/Contact";

import "./homepage.css";
import "./ham.css";

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  const sections = useRef([]);

  useEffect(() => {
    gsap.utils.toArray(sections.current).forEach((section, index) => {
      gsap.fromTo(
        section,
        { x: -100, opacity: 0 }, // Start position (off-screen)
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 95%", // Start animation when section enters viewport
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="hero">
        <Hero />
      </div>

      <div className="sub-hero">
        <div ref={(el) => (sections.current[1] = el)}>
          <Scroll />
        </div>

        <div id="services" ref={(el) => (sections.current[2] = el)}>
          <Service />
        </div>

        <div ref={(el) => (sections.current[3] = el)}>
          <Choose />
        </div>
        <div ref={(el) => (sections.current[4] = el)}>
          <JobCardCarousel />
        </div>
        <div id="contact-section" ref={(el) => (sections.current[5] = el)}>
          <AboutContact />
        </div>
      </div>
    </>
  );
}

export default Homepage;
