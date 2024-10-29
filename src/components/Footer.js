import React from 'react';
import './styles/Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer-logo">
      <img src="/images/logo1122.png" alt="Footer Logo" style={{ height: '40px' }} />
    </div>
    <div className="footer-content">
      <p>© 2024 Constitution Awareness Platform. All Rights Reserved.</p>
    </div>
    <div className="footer-links">
      <a href="#privacy">Privacy Policy</a>
      <a href="#terms">Terms of Service</a>
    </div>
  </div>
);

export default Footer;
