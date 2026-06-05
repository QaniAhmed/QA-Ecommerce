import React, { useState } from 'react';
import './Contact.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', orderNumber: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', orderNumber: '', message: '' });
    }, 1000);
  };

  return (
    <div className="shop-contact-wrapper">
      <div className="contact-container">
        <div className="contact-grid">
          
          {/* Left Side: Practical Store Help & Info */}
          <div className="contact-info-panel">
            <header className="info-header">
              <h1>Customer Support</h1>
              <p>Have a question about an order, return, or product availability? Get in touch with our retail team.</p>
            </header>

            <div className="info-links">
              <div className="info-row">
                <div className="info-icon"><PhoneIcon /></div>
                <div className="info-details">
                  <h3>Call Us</h3>
                  <p>+1 (555) 019-2834</p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon"><MailOutlineIcon /></div>
                <div className="info-details">
                  <h3>Email Support</h3>
                  <p>support@qashop.com</p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon"><AccessTimeIcon /></div>
                <div className="info-details">
                  <h3>Operating Hours</h3>
                  <p>Monday – Friday: 9:00 AM – 6:00 PM EST</p>
                </div>
              </div>
            </div>

            <div className="quick-faq-box">
              <h4>Looking for quick answers?</h4>
              <p>Check your order status directly in your profile or visit our comprehensive Returns Portal.</p>
            </div>
          </div>

          {/* Right Side: Actionable Contact Form */}
          <div className="contact-form-panel">
            {submitted ? (
              <div className="success-shop-message">
                <h2>Thank You</h2>
                <p>Your inquiry has been submitted successfully. A customer service representative will email you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="shop-btn-secondary">Submit another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="shop-form">
                <div className="form-row-split">
                  <div className="input-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formState.name} 
                      onChange={handleChange} 
                      placeholder="Enter your name" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formState.email} 
                      onChange={handleChange} 
                      placeholder="name@example.com" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="orderNumber">Order Number <span>(Optional)</span></label>
                  <input 
                    type="text" 
                    id="orderNumber" 
                    name="orderNumber" 
                    value={formState.orderNumber} 
                    onChange={handleChange} 
                    placeholder="#QA-XXXXX" 
                    disabled={isSubmitting}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="message">How can we help? *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formState.message} 
                    onChange={handleChange} 
                    placeholder="Describe your issue in detail..." 
                    rows="5" 
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button type="submit" className="shop-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="shop-spinner"></span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <SendIcon className="send-icon-svg" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;