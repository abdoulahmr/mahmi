import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './../assets/footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content-wrapper">
        <div className="footer-column footer-brand">
          <img src="./mahmi.png" alt="Cyber Chip Logo" className="footer-logo" />
          <p className="footer-description">
            Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi...
          </p>
        </div>

        <div className="footer-column footer-links">
          <h3 className="footer-heading">About Us</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h3 className="footer-heading">Our Services</h3>
          <p className="footer-contact-info">
            121 King Street Melbourne, <br />3000, Australia
          </p>
          <a href="mailto:info@Cyberchip.com" className="footer-contact-info">info@Cyberchip.com</a>
          <p className="footer-contact-info">+1 23 45 6789</p>

          <div className="footer-social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-column footer-newsletter">
          <h3 className="footer-heading">Newsletter</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">&#9658;</button>
          </div>
          <div className="terms-checkbox">
            <input type="checkbox" id="agreeTerms" />
            <label htmlFor="agreeTerms">I Agree to the Terms</label>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright Cyberchip © 2022. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
