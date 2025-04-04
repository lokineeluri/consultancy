import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import jobsData from "../careers/jobs.json"; // Import job data
import "./JobCardCarousel.css"; // Import CSS
import JobCard from "../careers/JobCard";

function JobCardCarousel() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1; // Adjust speed
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0; // Reset scroll
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }
    }, 20); // Adjust speed of scrolling

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="homepage-jobs-section">
      <h2 className="homepage-jobs-title">Featured Job Openings</h2>
      <div className="jobs-scroll-container" ref={scrollContainerRef}>
        {jobsData.slice(0, 5).map((job) => (
          <Link to="/careers">
            <JobCard key={job.id} job={job} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default JobCardCarousel;
