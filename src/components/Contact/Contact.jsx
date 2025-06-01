import { useState, useEffect } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
      <div className="contact-overlay"></div>
      <div className="contact-content">
        <h1 className="contact-title">Get in Touch</h1>
        <div className="contact-wrapper">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;