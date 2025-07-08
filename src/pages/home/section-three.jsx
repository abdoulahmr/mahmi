import React from 'react';
import './../../assets/section-three.css';

function SectionThree() {
  return (
    <div className="section-three">
      <div className="section-three-left">
        <label className="section-three-label">RELIABLE IT & CYBER SECURITY</label>
        <h1 className="section-three-heading">Cyber Security Services With Top IT Experts</h1>
        <p className="section-three-description">
          
        </p>
        <p className="section-three-description">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="section-three-stats">
          <div className="section-three-stat-item">
            <h2>85%</h2>
            <p>Quality Services</p>
          </div>
          <div className="section-three-stat-item">
            <h2>78%</h2>
            <p>Skilled Staff</p>
          </div>
          <div className="section-three-stat-item">
            <h2>64%</h2>
            <p>Support Team</p>
          </div>
        </div>
      </div>
      <div className="section-three-right">
        <img src="./service-right-bg-img.png" alt="Cyber Security Expert" className="section-three-main-image" />
        <div className="section-three-callout">
          <img src="./service-box-img.png" alt="Security Icon" className="section-three-callout-icon" />
          <h3 className="section-three-callout-title">Creative Security Solutions</h3>
          <p className="section-three-callout-text">
            We provide innovative and effective security solutions tailored to your specific needs, ensuring the highest level of protection for your digital assets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;