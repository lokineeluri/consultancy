import React from "react";
import "./TrainingDetails.css";

const TrainingDetails = ({ training, onBack }) => {
  const { title, category, description, duration, level, image, popular } =
    training;

  return (
    <div className="training-details">
      <button className="back-button" onClick={onBack}>
        <span className="back-icon">←</span> Back to Trainings
      </button>

      <div className="training-details-content">
        <div className="training-details-header">
          <div className="training-details-image-container">
            <img src={image} alt={title} className="training-details-image" />
            {popular && <span className="details-popular-badge">Popular</span>}
          </div>

          <div className="training-details-info">
            <div className="training-details-category">{category}</div>
            <h2 className="training-details-title">{title}</h2>

            <div className="training-details-meta">
              <div className="meta-item">
                <span className="meta-icon">⏱️</span>
                <span className="meta-label">Duration:</span>
                <span className="meta-value">{duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📊</span>
                <span className="meta-label">Level:</span>
                <span className="meta-value">{level}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="training-details-description">
          <h3 className="details-section-title">Program Overview</h3>
          <p>{description}</p>
        </div>

        <div className="training-details-curriculum">
          <h3 className="details-section-title">What You Will Learn</h3>
          <ul className="curriculum-list">
            <li>Fundamental concepts and principles of {title}</li>
            <li>
              Hands-on experience with industry-standard tools and technologies
            </li>
            <li>
              Best practices and design patterns for professional implementation
            </li>
            <li>Real-world problem solving and project-based learning</li>
            <li>
              Career guidance and preparation for professional certification
            </li>
          </ul>
        </div>

        <div className="training-details-cta">
          <button className="enroll-button">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetails;
