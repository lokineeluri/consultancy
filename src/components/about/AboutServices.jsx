import { useState } from 'react';
import './AboutServices.css';

const AboutServices = () => {
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      id: 1,
      title: "Permanent Placement",
      description: "Our permanent placement services connect companies with top-tier candidates for full-time positions. We meticulously match skillsets, experience, and cultural fit to ensure long-term success for both parties.",
      icon: (
        <svg viewBox="0 0 24 24" className="service-icon">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Contract Staffing",
      description: "Our contract staffing solutions provide flexible workforce options for project-based needs, seasonal demands, or specific timeframes. We handle all administrative aspects, allowing you to focus on your business goals.",
      icon: (
        <svg viewBox="0 0 24 24" className="service-icon">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Executive Search",
      description: "Our executive search practice identifies and recruits top-level executives and leadership talent. We utilize our extensive network and proven methodologies to find the visionary leaders who will drive your organization forward.",
      icon: (
        <svg viewBox="0 0 24 24" className="service-icon">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Recruitment Process Outsourcing",
      description: "Our RPO services provide end-to-end recruitment solutions, acting as an extension of your HR team. We streamline your hiring process, reduce time-to-fill, and lower recruitment costs while maintaining quality.",
      icon: (
        <svg viewBox="0 0 24 24" className="service-icon">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Talent Consulting",
      description: "Our talent consulting services help organizations optimize their recruitment strategies, employer branding, and talent retention. We provide data-driven insights and actionable recommendations to enhance your talent acquisition efforts.",
      icon: (
        <svg viewBox="0 0 24 24" className="service-icon">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Skill Assessment",
      description: "Our comprehensive skill assessment services evaluate candidates' technical abilities, soft skills, and cultural fit. We use industry-leading assessment tools and methodologies to ensure you're hiring the right talent for your needs.",
      icon: (
        <svg viewBox="0 0 24 24" className="service-icon">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    }
  ];

  const toggleService = (id) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

  return (
    <div className="services-container container">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        Comprehensive staffing solutions tailored to your unique needs
      </p>
      
      <div className="services-grid">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`service-card ${activeService === service.id ? 'active' : ''}`}
            onClick={() => toggleService(service.id)}
          >
            <div className="service-icon-container">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <div className="service-description">
              <p>{service.description}</p>
            </div>
            <div className="service-expand">
              {activeService === service.id ? (
                <svg viewBox="0 0 24 24\" className="expand-icon">
                  <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="expand-icon">
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="services-cta">
        <h3>Ready to find your perfect match?</h3>
        <p>Whether you're seeking talent or your next career move, we're here to help.</p>
        <a href="#contact-section" className="btn btn-primary">Get in Touch</a>
      </div>
    </div>
  );
};

export default AboutServices;