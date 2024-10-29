import React from 'react';
import './styles/Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <img src="/images/logo1122.png" alt="Logo" style={{ height: '50px' }} />
    <div className="nav-links">
      <a href="#read">Read</a>
      <a href="#explore">Explore</a>
      <a href="#learn">Learn</a>
      <a href="#engage">Engage</a>
    </div>
    <div className="auth-buttons">
      <a href="/login" className="btn">Login</a>
      <a href="/register" className="btn">Register</a>
    </div>
  </div>
);

export default Navbar;
