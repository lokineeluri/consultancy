import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./homepage.css";

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return; // Ensure the ref is assigned before initializing

    const typed = new Typed(typedRef.current, {
      strings: ["YOU", "Data Engineer", "Developer", "Designer", "Consultant"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="hero1" id="home">
      <div className="hero-component">
        <h3>We are looking for</h3>
        <h2 className="mmain">
          <span ref={typedRef}></span>
        </h2>
        <p>Let us help you break boundaries</p>
        <h2>Become a consultant</h2>
        <p className="pp">
          If you have entry-level base knowledge, and you're seeking to get a
          “leg up” into the technical industry to expand your career and
          learning into one of the technologies listed below, apply to one of
          these to become a part of our consultant program!
        </p>
        <p className="ppp">
          If you have entry-level base knowledge, and you're seeking to get a
          “leg up”
        </p>
      </div>
    </div>
  );
}

export default Hero;
