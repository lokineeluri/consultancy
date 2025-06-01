import { useState, useEffect } from 'react';
import { sendEmail } from '../../utils/emailService';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [formState, setFormState] = useState('idle'); // idle, submitting, success, error
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormState('submitting');
    
    try {
      // Simulate email sending with a delay
      await sendEmail(formData);
      setFormState('success');
      setFormData({
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset to idle after 5 seconds
      setTimeout(() => {
        setFormState('idle');
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setFormState('error');
      
      // Reset to idle after 5 seconds
      setTimeout(() => {
        setFormState('idle');
      }, 5000);
    }
  };

  return (
    <div className={`contact-form-container ${animate ? 'animate' : ''}`}>
      <h2>Send a Message</h2>
      
      {formState === 'success' && (
        <div className="form-message success">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>Your message has been sent successfully!</span>
        </div>
      )}
      
      {formState === 'error' && (
        <div className="form-message error">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>There was an error sending your message. Please try again.</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className={formState === 'success' ? 'form-hidden' : ''}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={errors.email ? 'error' : ''}
            disabled={formState === 'submitting'}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className={errors.subject ? 'error' : ''}
            disabled={formState === 'submitting'}
          />
          {errors.subject && <span className="error-message">{errors.subject}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you need..."
            rows="5"
            className={errors.message ? 'error' : ''}
            disabled={formState === 'submitting'}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        
        <button 
          type="submit" 
          className={`submit-button ${formState === 'submitting' ? 'submitting' : ''}`}
          disabled={formState === 'submitting'}
        >
          {formState === 'submitting' ? (
            <>
              <span className="spinner"></span>
              <span>Sending...</span>
            </>
          ) : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;