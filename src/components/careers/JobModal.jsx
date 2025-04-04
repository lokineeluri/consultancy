function JobModal({ job, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <h2 className="modal-title">{job.title}</h2>
        <h3 className="modal-company">{job.company}</h3>

        <div className="modal-details">
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

        <div className="skills-section">
          <h4>Required Skills</h4>
          <div className="skills-container">
            {job.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="description-section">
          <h4>Job Description</h4>
          <p>{job.description}</p>
        </div>

        <div className="eligibility-section">
          <h4>Eligibility Criteria</h4>
          <ul>
            {job.eligibility.map((criteria, index) => (
              <li key={index}>{criteria}</li>
            ))}
          </ul>
        </div>

        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );
}

export default JobModal;
