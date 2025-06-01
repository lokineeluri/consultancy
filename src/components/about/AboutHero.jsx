import { useEffect, useRef } from "react";

const AboutHero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${
          scrollPosition * 0.3
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-parallax" ref={parallaxRef}></div>
      <div className="hero-content">
        <h1 className="hero-title">Content Staffing Solutions</h1>
        <p className="hero-subtitle">
          Your trusted partner in connecting exceptional talent with innovative
          organizations
        </p>
        <div className="hero-buttons">
          <a href="#services-section" className="btn btn-primary">
            Our Services
          </a>
          <a href="#contact-section" className="btn btn-outline">
            Contact Us
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow"></div>
      </div>
    </div>
  );
};

export default AboutHero;
