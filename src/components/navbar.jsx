import React, { useState, useEffect } from "react";
import "./../assets/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <img src="/mahmi.png" alt="Logo" className="navbar-logo" />

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#team">Team</a>
          <button href="#contact" className="navbar-button">Contact Us</button>
        </nav>

        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
