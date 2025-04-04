import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Factory } from "lucide-react";

const industries = [
  "Software Development",
  "Healthcare",
  "Cybersecurity",
  "Finance",
  "Information Technology",
  "Retail",
  "Oil & Gas",
  "Payrole Services",
];

function Scroll() {
  const scrollRef = useRef(null);
  const firstScrollRef = useRef(null);
  const secondScrollRef = useRef(null);

  useEffect(() => {
    if (!firstScrollRef.current || !secondScrollRef.current) return;

    const scrollWidth = firstScrollRef.current.offsetWidth;

    gsap.to([firstScrollRef.current, secondScrollRef.current], {
      x: -scrollWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      runBackwards: false,
    });
  }, []);

  const renderIndustries = (ref) => (
    <div ref={ref} className="scroll-industries">
      {industries.map((industry, index) => (
        <div key={index} className="industry-item">
          <Factory className="industry-icon" />
          <span className="industry-name">{industry}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="scroll-container">
      <div className="content-container">
        <h1 className="title">Industries We Work With</h1>
        <p className="description">
          Explore our comprehensive coverage across various sectors that drive
          the global economy
        </p>
      </div>
      <div className="scroll-wrapper">
        <div ref={scrollRef} className="scroll-flex">
          {renderIndustries(firstScrollRef)}
          {renderIndustries(secondScrollRef)}
        </div>
      </div>
    </div>
  );
}

export default Scroll;
