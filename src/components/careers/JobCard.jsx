function JobCard({ job, onClick }) {
  return (
    <div className="job-card" onClick={onClick}>
      <span className="time-posted">{job.timePosted}</span>
      <h2 className="job-title">{job.title}</h2>
      <h3 className="company-name">{job.company}</h3>

      <div className="job-details">
        <div className="detail-item">
          <span className="icon icon-briefcase"></span>
          <span>{job.experience}</span>
        </div>
        <div className="detail-item">
          <span className="icon icon-wallet"></span>
          <span>{job.salary}</span>
        </div>
        <div className="detail-item">
          <span className="icon icon-location"></span>
          <span>{job.location}</span>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
