import React from 'react';
import './../../assets/section-four.css';

function SectionFour() {
  return (
    <div className="section-four">
      <div className="section-four-cards-container">
        <div className="section-four-card">
          <img src='./Cyber-Security-left-card-img1.png' alt="Globe Icon" className="section-four-card-icon" />
          <h2 className="section-four-card-number">3329</h2>
          <p className="section-four-card-label">Global Projects</p>
        </div>
        <div className="section-four-card">
          <img src='./Cyber-Security-left-card-img2.png' alt="Folder Icon" className="section-four-card-icon" />
          <h2 className="section-four-card-number">4587</h2>
          <p className="section-four-card-label">Clients Protect</p>
        </div>
        <div className="section-four-card">
          <img src='./Cyber-Security-left-card-img3.png' alt="Dollar Shield Icon" className="section-four-card-icon" />
          <h2 className="section-four-card-number">100 %</h2>
          <p className="section-four-card-label">Service Guarantee</p>
        </div>
        <div className="section-four-card">
          <img src='./Cyber-Security-left-card-img4.png' alt="Hat Icon" className="section-four-card-icon" />
          <h2 className="section-four-card-number">7845 <sup>+</sup></h2>
          <p className="section-four-card-label">Experts Team</p>
        </div>
      </div>
      <div className="section-four-content">
        <label className="section-four-label">STATISTICS</label>
        <h1 className="section-four-heading">Our Large Achievements in Cyber Security</h1>
        <p className="section-four-description">
          Repudiandae irure dolor in reprehenderit in voluptate velit esse dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum incidunt ut labore et dolore magnam.
        </p>
        <button className="section-four-button">Get started</button>
      </div>
    </div>
  );
}

export default SectionFour;