import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
    { name: 'Logout', path: '/logout' },
    { name: 'Products', path: '/products' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Everbloom</Link>

        <ul className="navbar-links">
          {navLinks.map((link, index) => (
            <li key={index} className="navbar-link">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Icon Buttons */}
        <div className="navbar-icons">
          <button className="navbar-icon">🔍</button>
          <button className="navbar-icon">👤</button>
          <button className="navbar-icon">🛒</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="navbar-mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="navbar-mobile-menu">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path}
                className="navbar-mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;