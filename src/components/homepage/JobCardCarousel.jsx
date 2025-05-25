import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import jobsData from "../careers/jobs.json"; // Import job data
import "./JobCardCarousel.css"; // Import CSS
import JobCard from "../careers/JobCard";

function JobCardCarousel() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Duplicate jobs for seamless infinite scroll
  const duplicatedJobs = [...jobsData.slice(0, 5), ...jobsData.slice(0, 5)];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer && autoScrollEnabled && !isDragging) {
        scrollAmount += 0.5; // Smooth scrolling speed
        scrollContainer.scrollLeft = scrollAmount;

        // Reset when we've scrolled through half the content (original set)
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 16); // ~60fps for smooth animation

    return () => clearInterval(scrollInterval);
  }, [autoScrollEnabled, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setAutoScrollEnabled(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    // Resume auto-scroll after a delay
    setTimeout(() => setAutoScrollEnabled(true), 2000);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume auto-scroll after a delay
    setTimeout(() => setAutoScrollEnabled(true), 2000);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setAutoScrollEnabled(false);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setAutoScrollEnabled(true), 2000);
  };

  return (
    <div className="homepage-jobs-section">
      <h2 className="homepage-jobs-title">Featured Job Openings</h2>
      <div
        className={`jobs-scroll-container ${isDragging ? "dragging" : ""}`}
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {duplicatedJobs.map((job, index) => (
          <Link to="/careers" key={`${job.id}-${index}`}>
            <JobCard job={job} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default JobCardCarousel;
