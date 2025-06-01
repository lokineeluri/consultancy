import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import jobsData from "../careers/jobs.json";
import "./JobCardCarousel.css";
import JobCard from "../careers/JobCard";

function JobCardCarousel() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const autoScrollRef = useRef(null);
  const scrollPositionRef = useRef(0);

  // Access the jobs array correctly - your JSON has "jobs" property
  const jobs = jobsData?.jobs || [];

  // Create enough duplicates for seamless scrolling
  const duplicatedJobs = [
    ...jobs.slice(0, Math.min(5, jobs.length)),
    ...jobs.slice(0, Math.min(5, jobs.length)),
    ...jobs.slice(0, Math.min(5, jobs.length)),
  ];

  // Smooth auto-scroll with better performance
  const autoScroll = useCallback(() => {
    if (
      !scrollContainerRef.current ||
      !autoScrollEnabled ||
      isDragging ||
      duplicatedJobs.length === 0
    )
      return;

    const container = scrollContainerRef.current;
    const scrollSpeed = 1.2; // Increased speed

    scrollPositionRef.current += scrollSpeed;
    container.scrollLeft = scrollPositionRef.current;

    // Reset position for infinite scroll
    const maxScroll = container.scrollWidth / 3; // Since we have 3 sets
    if (scrollPositionRef.current >= maxScroll) {
      scrollPositionRef.current = 0;
      container.scrollLeft = 0;
    }

    autoScrollRef.current = requestAnimationFrame(autoScroll);
  }, [autoScrollEnabled, isDragging, duplicatedJobs.length]);

  useEffect(() => {
    if (autoScrollEnabled && !isDragging && duplicatedJobs.length > 0) {
      autoScrollRef.current = requestAnimationFrame(autoScroll);
    } else {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    }

    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, [autoScroll, autoScrollEnabled, isDragging]);

  // Improved mouse handlers
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setAutoScrollEnabled(false);

    const rect = scrollContainerRef.current.getBoundingClientRect();
    setStartX(e.clientX - rect.left);
    setScrollLeft(scrollContainerRef.current.scrollLeft);

    // Sync scroll position ref with actual scroll
    scrollPositionRef.current = scrollContainerRef.current.scrollLeft;

    // Prevent text selection
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;

    e.preventDefault();

    const rect = scrollContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const walk = (x - startX) * 1.5; // Adjust sensitivity

    const newScrollLeft = scrollLeft - walk;
    scrollContainerRef.current.scrollLeft = newScrollLeft;
    scrollPositionRef.current = newScrollLeft;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume auto-scroll after a shorter delay
    setTimeout(() => setAutoScrollEnabled(true), 1000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setAutoScrollEnabled(true), 1000);
    }
  };

  // Improved touch handlers
  const handleTouchStart = (e) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setAutoScrollEnabled(false);

    const rect = scrollContainerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setStartX(touch.clientX - rect.left);
    setScrollLeft(scrollContainerRef.current.scrollLeft);

    // Sync scroll position ref
    scrollPositionRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const rect = scrollContainerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const walk = (x - startX) * 1.5;

    const newScrollLeft = scrollLeft - walk;
    scrollContainerRef.current.scrollLeft = newScrollLeft;
    scrollPositionRef.current = newScrollLeft;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setAutoScrollEnabled(true), 1000);
  };

  // Handle scroll for infinite loop
  const handleScroll = () => {
    if (!scrollContainerRef.current || isDragging) return;

    const container = scrollContainerRef.current;
    const maxScroll = container.scrollWidth / 3;

    // If scrolled to the end, reset to beginning
    if (container.scrollLeft >= maxScroll * 2) {
      container.scrollLeft = maxScroll;
      scrollPositionRef.current = maxScroll;
    }
    // If scrolled before beginning, jump to end
    else if (container.scrollLeft <= 0) {
      container.scrollLeft = maxScroll;
      scrollPositionRef.current = maxScroll;
    }
  };

  // Don't render if no jobs available
  if (!jobs || jobs.length === 0) {
    return (
      <div className="homepage-jobs-section">
        <h2 className="homepage-jobs-title">Featured Job Openings</h2>
        <p>No job openings available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="homepage-jobs-section">
      <h2 className="homepage-jobs-title">Featured Job Openings</h2>
      <div
        className={`jobs-scroll-container ${isDragging ? "dragging" : ""}`}
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none", // Prevent text selection
        }}
      >
        {duplicatedJobs.map((job, index) => (
          <Link
            to="/careers"
            key={`${job.id}-${index}`}
            onDragStart={(e) => e.preventDefault()} // Prevent drag on links
          >
            <JobCard job={job} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default JobCardCarousel;
