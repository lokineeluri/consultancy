import React from 'react';
import './TrainingCard.css';

const TrainingCard = ({ training, onClick }) => {
  const { title, category, duration, level, image, popular } = training;

  return (
    <div className="training-card" onClick={onClick}>
      <div className="training-card-image-container">
        <img 
          src={image} 
          alt={title} 
          className="training-card-image" 
        />
        {popular && <span className="popular-badge">Popular</span>}
        <div className="training-card-category">{category}</div>
      </div>
      <div className="training-card-content">
        <h3 className="training-card-title">{title}</h3>
        <div className="training-card-details">
          <div className="training-card-detail">
            <span className="detail-icon">⏱️</span>
            <span>{duration}</span>
          </div>
          <div className="training-card-detail">
            <span className="detail-icon">📊</span>
            <span>{level}</span>
          </div>
        </div>
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default TrainingCard;