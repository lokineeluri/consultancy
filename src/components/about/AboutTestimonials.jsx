import { useState, useEffect, useRef } from 'react';
import './AboutTestimonials.css';

const AboutTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "John Anderson",
      company: "Tech Innovations Inc.",
      role: "CTO",
      quote: "Content Staffing Solutions found us the perfect tech talent when other agencies couldn't deliver. Their understanding of our company culture and technical requirements was exceptional.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: 2,
      name: "Emily Watson",
      company: "Global Marketing Group",
      role: "HR Director",
      quote: "We've worked with several staffing agencies over the years, but Content Staffing Solutions stands out for their personalized approach and the quality of candidates they provide.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: 3,
      name: "Robert Kim",
      company: "Financial Solutions Ltd.",
      role: "CEO",
      quote: "The team at Content Staffing Solutions truly understands the financial sector's unique talent requirements. They've become our trusted partner for all our hiring needs.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ];

  useEffect(() => {
    // Auto-rotate testimonials
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    // Reset the interval when manually selecting a testimonial
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <div className="testimonials-container container">
      <h2 className="section-title">Client Testimonials</h2>
      <p className="section-subtitle">
        Hear what our clients have to say about working with us
      </p>
      
      <div 
        className="testimonials-slider" 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="testimonials-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" className="icon">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/>
                  </svg>
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-controls">
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="testimonial-pause" 
            onClick={handlePauseToggle}
            aria-label={isPaused ? "Play testimonials" : "Pause testimonials"}
          >
            {isPaused ? (
              <svg viewBox="0 0 24 24\" className="control-icon">
                <path d="M8 5v14l11-7z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="control-icon">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonials;