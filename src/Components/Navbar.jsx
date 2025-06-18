import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // 👈 Get current path

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="src/assets/dark-logo 1 (2).svg" alt="Logo" className="logo" />
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Faq</a></li>
        <li>
          <Link
            to="/shop"
            className={location.pathname === '/shop' ? 'active' : ''}
          >
            Shop
          </Link>
        </li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      <div className="cart-icon">
        <img src="src/assets/Shopping Cart.png" alt="Cart" />
        <span className="cart-badge">1</span>
      </div>
    </nav>
  );
}

export default Navbar;
