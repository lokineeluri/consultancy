import './AboutMission.css';

const AboutMission = () => {
  return (
    <div className="mission-container container">
      <h2 className="section-title">Our Mission & Vision</h2>
      <p className="section-subtitle">
        We bridge the gap between exceptional talent and forward-thinking companies
      </p>
      
      <div className="mission-content">
        <div className="mission-column left-column">
          <div className="mission-card">
            <div className="icon-container">
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              At Content Staffing Solutions, we are committed to transforming the hiring landscape by connecting exceptional talent with innovative organizations. We believe in creating meaningful professional relationships that foster growth, innovation, and success for both businesses and individuals.
            </p>
          </div>
        </div>
        
        <div className="mission-column right-column">
          <div className="mission-card">
            <div className="icon-container">
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              We envision a future where every organization has access to the exact talent they need to thrive, and every professional finds fulfilling work that aligns with their skills, values, and career aspirations. Our goal is to be the premier staffing solution that makes this vision a reality.
            </p>
          </div>
        </div>
      </div>
      
      <div className="values-section">
        <h3 className="values-title">Our Core Values</h3>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </div>
            <h4>Excellence</h4>
            <p>We strive for excellence in everything we do, from the quality of our candidates to the service we provide to our clients.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            </div>
            <h4>Integrity</h4>
            <p>We maintain the highest ethical standards and transparency in all our relationships and business practices.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h4>Relationships</h4>
            <p>We believe in building lasting relationships based on trust, respect, and mutual benefit with our clients and candidates.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
            </div>
            <h4>Innovation</h4>
            <p>We continuously innovate our approach to staffing, leveraging the latest technologies and methodologies to deliver superior results.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;