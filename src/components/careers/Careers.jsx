import { useState, useEffect } from "react";
import "./careers.css";
import JobCard from "./JobCard";
import JobModal from "./JobModal";
import jobsData from "./jobs.json"; // Import JSON file
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState(jobsData?.jobs || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Extract unique categories from jobs - THIS WAS MISSING
  const categories = [
    "All",
    ...new Set((jobsData?.jobs || []).map((job) => job.department)),
  ];

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let results = jobsData?.jobs || []; // Add safety check

    if (searchQuery) {
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeCategory !== "All") {
      results = results.filter((job) => job.department === activeCategory);
    }

    setFilteredJobs(results);
  }, [searchQuery, activeCategory]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="app">
      <h1 className="crr">Career Opportunities</h1>
      <div className="careers-filters">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading job opportunities...</p>
        </div>
      ) : (
        <>
          {filteredJobs.length > 0 ? (
            <div className="careers">
              <main className="jobs-container">
                {/* Use filteredJobs instead of jobsData */}
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onClick={() => setSelectedJob(job)}
                  />
                ))}
              </main>
            </div>
          ) : (
            <div className="no-results">
              <h3>No job positions found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button
                className="reset-button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </>
      )}
      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

export default Careers;
