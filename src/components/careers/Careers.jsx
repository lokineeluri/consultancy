import { useState } from "react";
import "./careers.css";
import JobCard from "./JobCard";
import JobModal from "./JobModal";
import jobsData from "./jobs.json"; // Import JSON file

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="app">
      <h1 className="crr">Career Opportunities</h1>
      <div className="careers">
        <main className="jobs-container">
          {jobsData.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => setSelectedJob(job)}
            />
          ))}
        </main>
      </div>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

export default Careers;
